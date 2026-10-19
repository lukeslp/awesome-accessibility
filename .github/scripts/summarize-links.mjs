// Lychee accepts 403/429 for CI continuity; report them as unverified.
import {readFileSync, appendFileSync} from 'node:fs';

const report = JSON.parse(readFileSync(process.argv[2] ?? 'lychee/out.json', 'utf8'));
const results = new Map();
const add = (map, category) => {
  for (const entries of Object.values(map ?? {})) {
    for (const entry of entries) {
      // The config intentionally excludes local files and heading fragments.
      if (!/^https?:\/\//.test(entry.url)) continue;
      const code = entry.status?.code;
      const kind = category === 'reachable' && [403, 429].includes(code)
        ? 'bot-blocked or rate-limited' : category;
      results.set(entry.url, {url: entry.url, kind, code});
    }
  }
};
add(report.success_map, 'reachable');
add(report.excluded_map, 'excluded');
add(report.error_map, 'failed');
add(report.timeout_map, 'timed out');

if (!report.detailed_stats || results.size === 0) {
  throw new Error('Expected a nonempty verbose lychee JSON report.');
}
const categories = ['reachable', 'bot-blocked or rate-limited', 'excluded', 'failed', 'timed out'];
const lines = [
  '## Link availability', '',
  'HTTP 403/429 responses and exclusions are **unverified**, even when this job is green. A reachable page is not proof of accessibility or editorial accuracy.', '',
  '| Result | Unique links |', '| --- | ---: |',
  ...categories.map(kind => `| ${kind} | ${[...results.values()].filter(r => r.kind === kind).length} |`),
  '',
];
for (const kind of categories.slice(1)) {
  const entries = [...results.values()].filter(r => r.kind === kind);
  if (entries.length === 0) continue;
  lines.push(`### ${kind}`, '');
  for (const entry of entries) {
    const url = entry.url.replaceAll('<', '%3C').replaceAll('>', '%3E').replaceAll('\n', '');
    lines.push(`- <${url}>${entry.code ? ` (HTTP ${entry.code})` : ''}`);
  }
  lines.push('');
}
const summary = lines.join('\n');
console.log(summary);
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary + '\n');
