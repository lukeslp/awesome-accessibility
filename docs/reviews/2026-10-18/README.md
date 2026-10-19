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
- [x] Complete local lint, links, structural and rendered-navigation checks; inspect final GitHub CI results.
- [x] Merge the reviewed overhaul and contribution, then the bounded CI retry follow-up; verify no open PRs remain.

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
- Remove 25 entries from the draft: 19 new paid-only or unverified-free
  additions, the unrelated content-moderation demo ux-oss-safeguard, unreachable
  WCAG Watch, unavailable PDFChecks, and three commercial overlay/service promotions. The exact removed
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

**Measured link sweeps:** [lychee-before-final-prune.json](lychee-before-final-prune.json)
records the last local full sweep. It caught a repeated HTTP 503 at PDFChecks;
a targeted [recheck](lychee-recheck.json), the GitHub runner (HTTP 500) and a
normal browser all confirmed the outage. PDFChecks was removed pending recovery.
The final GitHub-runner report is [lychee-final-ci.json](lychee-final-ci.json);
[link-summary.md](link-summary.md) is its web-only summary. On reviewed head
`86b870756ec401751b33814e18eccd6c35355da4`,
[lint](https://github.com/lukeslp/awesome-accessibility/actions/runs/39211415449)
and [link CI, attempt 2](https://github.com/lukeslp/awesome-accessibility/actions/runs/39211415465/attempts/2)
passed. The link sweep reports zero HTTP errors and one timeout at Cards for
Humanity, which loaded its actual title and design-tool content in the browser;
see [final-timeout-check.json](final-timeout-check.json). The previous run's
three timed-out pages also loaded normally, recorded in
[runner-timeout-checks.json](runner-timeout-checks.json). Their runner response
is preserved in [lychee-ci-attempt1.json](lychee-ci-attempt1.json).
Bot-blocked responses and exclusions are not reachable results.

[availability-union.json](availability-union.json) reconciles retained Markdown
links with both HTTP clients and explicit browser checks: 694 of 703 current
Markdown web URLs were reachable by at least one method. All 17 initially
unresolved destinations were then visited in the browser: seven loaded their
real pages and ten still displayed browser challenges.
[browser-checks.json](browser-checks.json) records every disposition. No CAPTCHA
was solved or bypassed. The original browser dispositions remain in that
ledger; the final retained set is in the reconciled availability ledger.

The AI ethics article was subsequently relinked from its blocked ACM DOI to
the author's [open preprint](https://arxiv.org/abs/1908.08939), reducing the
remaining queue to nine destinations. The final availability ledger reflects
that replacement.

**Measured final structure:** [structure.json](structure.json) records 684
resources, 16 main sections and 57 subsections, with no broken local links or
duplicate primary resource URLs. Heading fragments were checked with GitHub
Slugger against the parsed Markdown heading tree.

**Measured final repository metadata:** [github-final.json](github-final.json)
covers all 77 current direct GitHub repositories: none missing or disabled;
Project Gameface remains the only archived repository, explicitly labeled.

**Measured lint:** both the repository script and the complete awesome-lint
2.3.0 rules passed locally after corrections. Added the `suggestion` and
`broken link` labels required by the issue forms, and the `awesome` and
`awesome-list` topics, resolving the metadata follow-up.

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
node .github/scripts/recheck-timeouts.mjs lychee/out.json lychee/recheck.json
FAIL_ON_ERRORS=true node .github/scripts/summarize-links.mjs lychee/out.json lychee/recheck.json
node --test .github/scripts/summarize-links.test.mjs
```

Use lychee 0.24.2. The local binary was downloaded from its official GitHub
release to `/tmp/awesome-accessibility-lychee` and checked against the published
SHA-256. No global package installation was required.

Link CI accepts 403/429 for continuity and skips five host patterns plus the browser-verified FTC and WAIC URLs documented
in `.github/lychee.toml`. The new summary explicitly separates these unverified
results from reachable links. PR runs remain report-only so unrelated outages
do not block contributors; main and weekly runs fail on other errors. Action
dependencies are pinned to the commits resolved from their official major tags.

### Follow-up: intermittent runner timeouts

The first strict main-branch [link run](https://github.com/lukeslp/awesome-accessibility/actions/runs/39212304647)
failed with zero HTTP errors and four timeouts, at Michigan's assistive technology
list, the Speech Accessibility Project, WAIC and Research on Disability's annual
statistics. These pages had already been reached independently during the review.
The [main-branch lint run](https://github.com/lukeslp/awesome-accessibility/actions/runs/39212304486)
passed.

The focused repair retries only URLs in the original timeout report, with two
concurrent requests and a 90-second timeout. It preserves the original JSON,
writes a separate retry report and classifies recovered links separately.
Unresolved timeouts and HTTP errors still fail main and scheduled checks;
403/429 remain unverified. Tool failures and missing or malformed reports fail
the job. PR checks remain report-only for link availability.

Five Node tests cover recovery, persistent errors, unresolved timeouts, blocked
responses and PR failure policy. A real replay of the three timeouts in
`lychee-ci-attempt1.json` recovered all three using the pinned lychee binary;
the strict combined summary returned zero failures or timeouts. The repository
lint also passed. The full awesome-lint metadata check also passed after the
working branch was pushed to GitHub.

Follow-up [PR #110](https://github.com/lukeslp/awesome-accessibility/pull/110)
merged as `02b336ed4a4a950e63fb255ec7d67e079ac1562b` on October 19, 2026
(Pacific). Its [lint and tests](https://github.com/lukeslp/awesome-accessibility/actions/runs/39213131443)
passed. Its [link run](https://github.com/lukeslp/awesome-accessibility/actions/runs/39213131300)
executed the retry but retained one WAIC timeout, with zero HTTP errors; the
[combined summary](timeout-repair-summary.md) preserves this result. The PR
check is report-only; it is not evidence of a successful strict sweep.

WAIC returned HTTP 200 from a separate local curl request and loaded the actual
committee site in the normal browser, including its Japanese JIS guidance and
September 2026 news. This establishes a client/location difference without
establishing its cause. The subsequent strict main run
[failed on that same single timeout](https://github.com/lukeslp/awesome-accessibility/actions/runs/39213478966),
with zero HTTP errors, demonstrating the failure policy works.

After three GitHub runs and two low-concurrency retries timed out at WAIC,
the exact homepage was excluded from automated checking. Its
[browser evidence](waic-browser.png) shows the actual committee site. Other
WAIC URLs remain eligible for automatic checking. This is an independently
verified resource with an automation exception, separate from the nine browser
challenges that remain unresolved. The job summary still counts this URL as
excluded, not reachable. No general timeout acceptance was enabled.

The exception and evidence merged through
[PR #111](https://github.com/lukeslp/awesome-accessibility/pull/111), commit
`bb9e1405aecafae9f0b0f4a91ab3885420532f88`. Its
[full link sweep](https://github.com/lukeslp/awesome-accessibility/actions/runs/39213801730)
reported zero HTTP errors and zero timeouts: 621 reachable, 76 bot-blocked or
rate-limited, and 12 excluded web URLs. No timeout retry was needed in that run.
The exact exclusion also passed a local lychee config check; all five failure
policy tests pass.

The first strict run on that merged head
[failed at a different destination, NCIL](https://github.com/lukeslp/awesome-accessibility/actions/runs/39214219656/attempts/1),
with zero HTTP errors and one timeout after the targeted retry. NCIL had been
reachable in the preceding PR sweep; a fresh local HTTP request returned 200
and the browser loaded the actual National Council on Independent Living page,
including its independent-living, advocacy and training navigation. NCIL was
retained without an exclusion. A single complete rerun was requested to test
whether this runner failure persisted.

The [strict main rerun, attempt 2](https://github.com/lukeslp/awesome-accessibility/actions/runs/39214219656/attempts/2)
passed on `bb9e1405aecafae9f0b0f4a91ab3885420532f88` with zero HTTP errors
and zero timeouts. The [final maintenance summary](maintenance-final-summary.md)
records 621 reachable, 76 bot-blocked or rate-limited and 12 excluded web URLs.
NCIL recovered in the initial sweep; no timeout retry was needed. The previous
failed attempt remains linked above. The final open-PR query was empty, and
the catalog README still has reviewed blob
`a989277467726d3d838bcc564781595c91108007`.

## Remaining work and rollback

PR #109 merged as `ef10496ed629a1c2cb408dc5db7e7274249a8316` on October 18,
2026 (Pacific). PR #107 and the CI follow-ups #110 and #111 were merged
independently as recorded above. The final
open-PR query returned an empty list. A docs-only follow-up preserves this
completion record and the final runner evidence.

Nine retained URLs still presented browser challenges after both HTTP-client and browser
checks; their exact URLs and methods are in the availability and browser ledgers.
Recheck them in a normal human session later. They are retained as established
resources, not reported as verified or removed merely for blocking automation.
DCO reports missing sign-offs in inherited commits; effective branch rules prohibit deletion and non-fast-forward updates but do
not require status checks or DCO. Contributor history is preserved without
fabricated sign-offs or a history rewrite.

Rollback: revert PR #109 merge commit
`ef10496ed629a1c2cb408dc5db7e7274249a8316` in a new branch and PR.
The independent Markproof merge remains on main. The docs-only completion
commit can be reverted separately if needed. Review changes are normal commits on `review/accessibility-2026-10-18`, pushed to the existing
draft branch; no history was rewritten. Preserve unrelated work and do not
force-push. The two added discovery topics can be removed independently.
The CI retry can be rolled back independently by reverting PR #110 merge
`02b336ed4a4a950e63fb255ec7d67e079ac1562b` in a new branch and PR.
The WAIC exception can be removed alone from `.github/lychee.toml`, or revert
PR #111 merge `bb9e1405aecafae9f0b0f4a91ab3885420532f88` to remove that
exception and its follow-up documentation together.
