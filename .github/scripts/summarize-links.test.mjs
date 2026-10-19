import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync, writeFileSync, rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join, resolve} from 'node:path';
import {spawnSync} from 'node:child_process';

const entry = (url, code) => ({url, status: code ? {code} : {text: 'Timeout'}});
const report = (success = [], errors = [], timeouts = []) => ({
  detailed_stats: true,
  success_map: {'README.md': success},
  error_map: {'README.md': errors},
  timeout_map: {'README.md': timeouts},
});
const pending = report([], [], [entry('https://example.com/slow')]);

function summarize(first, retry, strict = true) {
  const dir = mkdtempSync(join(tmpdir(), 'a11y-summary-test-'));
  try {
    const input = join(dir, 'first.json');
    const second = join(dir, 'retry.json');
    writeFileSync(input, JSON.stringify(first));
    writeFileSync(second, JSON.stringify(retry));
    const env = {...process.env, FAIL_ON_ERRORS: String(strict)};
    delete env.GITHUB_STEP_SUMMARY;
    return spawnSync(process.execPath, [resolve('.github/scripts/summarize-links.mjs'), input, second], {encoding: 'utf8', env});
  } finally {
    rmSync(dir, {recursive: true, force: true});
  }
}

test('a confirmed retry resolves the original timeout', () => {
  const result = summarize(pending, report([entry('https://example.com/slow', 200)]));
  assert.equal(result.status, 0);
  assert.match(result.stdout, /\| reachable on retry \| 1 \|/);
  assert.match(result.stdout, /\| timed out \| 0 \|/);
});

test('a dead link still fails main when another URL recovers', () => {
  const first = report([], [entry('https://example.com/dead', 404)], [entry('https://example.com/slow')]);
  const result = summarize(first, report([entry('https://example.com/slow', 200)]));
  assert.equal(result.status, 1);
  assert.match(result.stdout, /\| failed \| 1 \|/);
});

test('bot-blocked retries remain unverified', () => {
  for (const code of [403, 429]) {
    const result = summarize(pending, report([entry('https://example.com/slow', code)]));
    assert.equal(result.status, 0);
    assert.match(result.stdout, /\| reachable on retry \| 0 \|/);
    assert.match(result.stdout, /\| bot-blocked or rate-limited \| 1 \|/);
  }
});

test('an unresolved timeout fails main', () => {
  const result = summarize(pending, pending);
  assert.equal(result.status, 1);
  assert.match(result.stdout, /\| timed out \| 1 \|/);
});

test('pull requests report an unresolved timeout without failing', () => {
  const result = summarize(pending, pending, false);
  assert.equal(result.status, 0);
  assert.match(result.stdout, /\| timed out \| 1 \|/);
});
