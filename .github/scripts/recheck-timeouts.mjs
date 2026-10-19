// Retry only network timeouts, keeping lychee's original report unchanged.
import {readFileSync, writeFileSync, mkdirSync, rmSync} from 'node:fs';
import {dirname, join, resolve} from 'node:path';
import {spawnSync} from 'node:child_process';

const input = process.argv[2] ?? 'lychee/out.json';
const output = process.argv[3] ?? 'lychee/recheck.json';
if (resolve(input) === resolve(output)) throw new Error('Keep the original report separate from the retry report.');
const report = JSON.parse(readFileSync(input, 'utf8'));
const urls = [...new Set(Object.values(report.timeout_map ?? {})
  .flat().map(entry => entry.url).filter(url => /^https?:\/\//.test(url)))];
mkdirSync(dirname(output), {recursive: true});

if (urls.length === 0) {
  writeFileSync(output, JSON.stringify({success_map: {}, error_map: {}, timeout_map: {}, excluded_map: {}}) + '\n');
} else {
  const targets = join(dirname(output), 'recheck-input.txt');
  writeFileSync(targets, urls.join('\n') + '\n');
  const binary = process.env.LYCHEE_BINARY ?? (process.env.RUNNER_TEMP
    ? join(process.env.RUNNER_TEMP, 'lychee/bin/lychee') : 'lychee');
  rmSync(output, {force: true});
  const result = spawnSync(binary, [
    '--config', '.github/lychee.toml', '--verbose', '--format', 'json',
    '--max-concurrency', '2', '--timeout', '90', '--max-retries', '1',
    '--output', resolve(output), resolve(targets),
  ], {stdio: 'inherit', timeout: 600_000});
  if (result.error || result.signal || result.status === null) {
    throw result.error ?? new Error(`lychee retry interrupted: ${result.signal}`);
  }
  // Nonzero means the retry found a problem. The summary decides whether the
  // event is report-only; missing/malformed output is always a job error.
  JSON.parse(readFileSync(output, 'utf8'));
}
