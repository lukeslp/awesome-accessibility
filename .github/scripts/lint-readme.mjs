// Lint README.md with awesome-lint's rules, minus the one that checks
// repository settings (the GitHub description and "awesome" topic), since a
// pull request can't change those.
import awesomeLint from 'awesome-lint';
import {createConfig} from 'awesome-lint/config.js';
import {createRules} from 'awesome-lint/rules/index.js';
import githubRule from 'awesome-lint/rules/github.js';

const rules = createRules().filter(([rule]) => rule !== githubRule);
await awesomeLint.report({filename: 'README.md', config: createConfig(rules)});
