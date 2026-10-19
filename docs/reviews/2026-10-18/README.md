# Catalog review — October 18, 2026

## Scope and source

Review the whole resource list, resolve open pull requests, survey current free
and open-source tools, and inspect the rendered README. Source of record:
[lukeslp/awesome-accessibility](https://github.com/lukeslp/awesome-accessibility).
Development checkout: Napoleon, `/Users/luke/workspace/awesome-accessibility`.
This is a repository/documentation update; no service or separate website was
deployed.

The review builds on draft [PR #109](https://github.com/lukeslp/awesome-accessibility/pull/109),
original head `eeebf67390e4dfe8c0b0c46604b00a0169a6629a`, rather than creating
another overhaul. Its earlier research and link checks are prior evidence,
separate from the fresh checks below. [PR #107](https://github.com/lukeslp/awesome-accessibility/pull/107)
was merged as `dec16c022e25746e15ed369c408370b8e08926c9`; merge
`b502e3e` incorporates it into the reorganized list, retaining one Markproof entry
and the contributor's original commit.

Craft Compose 0.10.2 governs documentation execution, with Impress research
criteria and independent catalog/research reviews. The named Craft roles are
implemented through general subagents in Codex. No outside model consultation
or inference was run.

## Work checklist and acceptance

- [x] Inspect existing main, the draft, contribution rules, both PRs and checks.
- [x] Read the catalog and research new resources using primary sources.
- [x] Review every baseline web URL and all direct GitHub repositories.
- [x] Correct editorial policy conflicts and unsupported descriptions.
- [x] Complete local lint, links, structural and rendered-navigation checks; final link CI pending.
- [ ] Merge the reviewed overhaul and verify the final repository state.

Acceptance: one entry per resource, working section anchors, concise factual
descriptions, useful new free/open-source coverage, preserved contributor
credit, explicit availability-check limits, and a reproducible maintenance
workflow. A functioning link does not establish that a tool is accessible.

## Editorial decisions

- Keep the draft's 16 main sections and add Windows and Linux under native
  apps. AI, accessible content, AAC, testing and research remain distinct.
- New additions must offer a useful free resource or open-source implementation.
  Free tiers, eligibility, accounts, optional API costs and hardware costs are
  stated. A time-limited trial or book preview is insufficient. Existing paid
  references remain for context with cost labels; freely readable documentation
  about commercial software is eligible.
- Replace the long nested contents list with 16 main links and five direct task
  paths. GitHub's outline exposes the complete heading hierarchy. Keep the
  introductory learning path intentionally ordered; alphabetize other groups.
- Remove 24 entries from the draft: 19 new paid-only or unverified-free
  additions, the unrelated content-moderation demo ux-oss-safeguard, unreachable
  WCAG Watch, and three commercial overlay/service promotions. The exact removed
  entries are retained in [removed-from-draft.json](removed-from-draft.json).
- Relink Agile Accessibility Handbook to its free PDF/EPUB edition, disclosing
  registration. Keep free disability culture media and the Inclusive Components
  articles in place of their paid book additions.
- Preserve open display-preference widgets with a clear limitation note. Cite
  the [FTC's final accessiBe order](https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-approves-final-order-requiring-accessibe-pay-1-million)
  rather than secondary coverage of its proposed order.

## Research additions

These 18 additions fill identified gaps; most are missing established tools,
not claims that every project was newly released in 2026. The linked project
documentation, repository and license files were inspected. Descriptions are
source reviews, not hands-on validation of every feature.

| Area | Additions and primary evidence | Important limit |
| --- | --- | --- |
| Native development | [AccessKit](https://github.com/AccessKit/accesskit), [Qt guide](https://doc.qt.io/qt-6/accessible.html), [GTK guide](https://docs.gtk.org/gtk4/section-accessibility.html), [Windows guide](https://learn.microsoft.com/en-us/windows/apps/design/accessibility/accessibility-overview) | AccessKit is MIT/Apache-2.0; framework integration still needs platform testing. Qt component licenses vary. |
| Native testing | [AccessibilitySnapshot](https://github.com/cashapp/AccessibilitySnapshot), [KDE Accessibility Inspector](https://apps.kde.org/accessibilityinspector/) | Snapshots complement VoiceOver; UIKit/SwiftUI coverage differs. KDE inspects AT-SPI exposure. |
| AI assistive tools | [AI Content Describer](https://github.com/cartertemm/AI-content-describer), [Fido](https://daisy.org/activities/software/fido/) | Local-model support in the NVDA add-on is experimental. Fido is experimental and most AI features need a cloud key or unlock code. Human review is required. |
| Disability-inclusive AI | [AAPD/CDT report](https://cdt.org/insights/building-a-disability-inclusive-ai-ecosystem-a-cross-disability-cross-systems-analysis-of-best-practices/), [AFB guiding principles](https://www.afb.org/research-and-initiatives/ai-series/empowering-or-excluding/guiding-principles-disability-inclusive-ai) | Guidance covers discrimination, privacy and access beyond technical scanner results. |
| Publishing | [EPUBCheck](https://www.w3.org/publishing/epubcheck/), [WordToEPUB](https://daisy.org/activities/software/wordtoepub/), [Sao Mai Braille](https://saomaicenter.org/en/smsoft/smb) | EPUBCheck's actual source license is BSD-3-Clause, despite an MIT label on its landing page. No open-source license claimed for the two freeware tools. |
| Accessible data authoring | [Umwelt](https://umwelt-data.github.io/umwelt/) | Free browser tool; no open-source claim because a repository license was not verified. |
| Alternative input | [AsTeRICS](https://www.asterics.eu/), [FABI](https://www.asterics.eu/manuals/fabi/) | Plugin licenses vary. FABI designs are open; components cost money. |
| AAC interoperability | [Open Board Format](https://www.openboardformat.org/) | A format/validation resource distinct from the OpenAAC organization. |
| Reading support | [Read Aloud](https://github.com/ken107/read-aloud) | Browser voices are free; cloud voices may incur costs and send text off device. |

Deferred: ScreenAudit, TaskAudit and A11yNavigator need clearer released-code
and license evidence. Additional axe/MCP wrappers and very new AAC boards did
not establish a distinct benefit over existing entries. Elevado is promising;
KDE Inspector offered clearer current release documentation for this pass.

## Corrections and factual sources

- [LAMP FAQ](https://lampwflapp.com/support/faqs): paid app, separate Discover
  trial; removed the incorrect subscription claim.
- [BRLTTY manual](https://brltty.app/doc/Manual-BRLTTY/English/BRLTTY.html):
  daemon GPL-2.0-or-later, BrlAPI separately LGPL.
- [Markproof source](https://github.com/stochastic-technologies/markproof-cli):
  GPL version 2 or later; retained static-HTML limits.
- [Testing Library API](https://testing-library.com/docs/queries/byrole):
  accessible-name matching is optional, not inherent to every ByRole query.
- [W3C evaluation guidance](https://www.w3.org/WAI/test-evaluate/tools/selecting/):
  removed universal scanner-coverage percentages and conformance implications.
- [W3C image tutorial](https://www.w3.org/WAI/tutorials/images/): alt text
  depends on purpose and page context, including decorative and functional use.
- [Project Gameface repository](https://github.com/google/project-gameface):
  archived in 2024; now labeled as a research/code reference.
- [Color vision test methodology](https://whatcoloristhis.one/test/): simulation
  checks are not clinical validation. OpenDyslexic is described as a reading
  preference rather than a guaranteed improvement or treatment.
- [DOJ Title II fact sheet](https://www.ada.gov/resources/2024-03-08-web-rule/),
  [NDA's EN 301 549 publication notice](https://nda.ie/news/en301549-published),
  [W3C WCAG 3 introduction](https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/),
  [NVDA download page](https://www.nvaccess.org/download/),
  [Guidepup](https://www.guidepup.dev/) and [Tiimo](https://www.tiimoapp.com/):
  current official sources checked for the draft's consequential update claims.
- [Coursera announcement](https://blog.coursera.org/introducing-courseras-new-course-preview-experience/):
  generic free auditing was replaced by limited previews; removed the new course
  entry without a verified course-specific exception.
- Paid additions were checked against their publisher/vendor pages. Keep the
  free [Agile Accessibility Handbook edition](https://accessibility.deque.com/agile-accessibility-handbook);
  do not confuse free recording with a free downloaded synthetic voice in
  [ModelTalker](https://modeltalker.org/faq-fee-policy/) or
  [SpeakUnique](https://www.speakunique.co.uk/?p=177).

## Evidence and limits

**Measured baseline:** [links-baseline.json](links-baseline.json) records 711
unique web URLs in the original draft's README and contribution guide: 681
reachable, 28 HTTP 403/429 responses, one timeout and one placeholder URL.
The GET audit reused Napoleon's existing
`/Users/luke/workspace/snippets/accessibility/url_validation_pattern.py`, with
12 workers serialized per host, a 10-second timeout and no retries. WCAG Watch
also failed in the draft's GitHub-runner checks and a separate web fetch;
removed pending evidence of a working service. The placeholder was corrected.

**Measured repository metadata:** [github-baseline.json](github-baseline.json)
covers all 74 direct GitHub repository links in the draft. None was missing or
disabled; Project Gameface was archived. Missing automatic license detection
was checked against project files rather than treated as proof of no license
(for example, Astronify keeps BSD terms under `licenses/`). Metadata is not a
full software or license audit. Tools linked through websites/registries are
outside that repository census.

**Measured final links:** [lychee-final.json](lychee-final.json) and
[link-summary.md](link-summary.md) record zero failed URLs and zero timeouts.
The local run found 638 reachable web links, 61 bot-blocked/rate-limited links
and 11 excluded web links. These are this client's classifications, not an
assertion that blocked links are dead.

[availability-union.json](availability-union.json) reconciles retained Markdown
links with both HTTP clients and explicit browser checks: 694 of 704 current
Markdown web URLs were reachable by at least one method. All 17 initially
unresolved destinations were then visited in the browser: seven loaded their
real pages and ten still displayed browser challenges.
[browser-checks.json](browser-checks.json) records every disposition. No CAPTCHA
was solved or bypassed. The ten initially unresolved links remain clearly identified
for a future human check; they are mainly journal/article destinations.

The AI ethics article was subsequently relinked from its blocked ACM DOI to
the author's [open preprint](https://arxiv.org/abs/1908.08939), reducing the
remaining queue to nine destinations. The final availability ledger reflects
that replacement.

**Measured final structure:** [structure.json](structure.json) records 685
resources, 16 main sections and 57 subsections, with no broken local links or
duplicate primary resource URLs. Heading fragments were checked with GitHub
Slugger against the parsed Markdown heading tree.

**Measured final repository metadata:** [github-final.json](github-final.json)
covers all 77 current direct GitHub repositories: none missing or disabled;
Project Gameface remains the only archived repository, explicitly labeled.

**Measured lint:** both the repository script and the complete awesome-lint
2.3.0 rules passed locally after corrections. Added the `awesome` and
`awesome-list` topics, resolving the metadata follow-up instead of treating the
skipped metadata rule as validation.

**Observed presentation:** a narrow GitHub rendering of the original draft
showed the nested index filling several screens before the first resource;
see [navigation-before.png](navigation-before.png). The
[revised index](navigation-after.png) fits with Start here in one narrow viewport.
Activating [Explore AI tools](ai-navigation.png) and [Find AAC](aac-navigation.png)
reached their intended subsections. Evidence is a 473 × 848 GitHub rendering
in the Codex in-app browser. Desktop-width rendering was not separately tested.
No screen-reader walkthrough, switch test, physical device test or WCAG
conformance verdict is claimed.

**Observed client difference:** the FTC case and press-release URLs returned
404 to lychee and 403 to Python while the normal browser loaded the full
press release with its April 22, 2025 date and final-order text. The final
README uses the browser-verified press release. Only that exact URL is excluded
from automatic checking; [ftc-browser.png](ftc-browser.png) records the page.
This exception is distinct from the outstanding bot-blocked verification queue.

**Observed redirect correction:** Michigan's old resource URL redirected to
a generic home page. The new direct
[assistive technology list](https://studentaccessibility.umich.edu/assistive-technology)
was checked against the current university source.

## Maintenance and reproduction

```sh
npm install --no-save --no-package-lock awesome-lint@2.3.0
node --no-deprecation .github/scripts/lint-readme.mjs
npx --no-install awesome-lint README.md
lychee --config .github/lychee.toml --verbose --format json --output lychee/out.json README.md CONTRIBUTING.md
node .github/scripts/summarize-links.mjs lychee/out.json
```

Use lychee 0.24.2. The local binary was downloaded from its official GitHub
release to `/tmp/awesome-accessibility-lychee` and checked against the published
SHA-256. No global package installation was required.

Link CI accepts 403/429 for continuity and skips five host patterns plus the browser-verified FTC URL documented
in `.github/lychee.toml`. The new summary explicitly separates these unverified
results from reachable links. PR runs remain report-only so unrelated outages
do not block contributors; main and weekly runs fail on other errors. Action
dependencies are pinned to the commits resolved from their official major tags.

## Remaining work and rollback

Pending: final GitHub CI results and PR #109's merge disposition. Nine retained
URLs still presented browser challenges after both HTTP-client and browser
checks; their exact URLs and methods are in the availability and browser ledgers.
Recheck them in a normal human session later. They are retained as established
resources, not reported as verified or removed merely for blocking automation.
DCO reports missing sign-offs in inherited commits; main has no required status
checks or branch protection. Contributor history is preserved without fabricated
sign-offs or a history rewrite.

Rollback after merge: revert the PR #109 merge commit in a new branch and PR.
The independent Markproof merge remains on main. Before merge, review changes
are normal commits on `review/accessibility-2026-10-18`, pushed to the existing
draft branch; no history was rewritten. Preserve unrelated work and do not
force-push. The two added discovery topics can be removed independently.
