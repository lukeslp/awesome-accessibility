# Second sweep — October 19, 2026

## Scope and source

Luke requested one more sweep after the catalog refresh. Source of record:
[lukeslp/awesome-accessibility](https://github.com/lukeslp/awesome-accessibility).
Development checkout: Napoleon, `/Users/luke/workspace/awesome-accessibility`.
Started from clean, synchronized main `f0180314d31df83fc28b8ad720fae349ad15be4b`.
There were no open PRs or issues at the start.

Read the merged catalog and contribution guide again, with independent editorial
and AI-resource source reviews under the previously requested Craft Compose and
Impress workflow. This pass concentrates on useful corrections and distinct
omissions. The [original audit](../2026-10-18/README.md) remains the evidence for
the earlier full HTTP and GitHub repository inventories.

## Work checklist

- [x] Read the merged catalog, guide and prior evidence; inspect live GitHub state.
- [x] Verify consequential descriptions against primary documentation and code.
- [x] Revisit the unresolved browser destinations and verify replacement routes.
- [x] Apply focused corrections, two removals and two additions.
- [x] Complete lint, structure, changed-link and rendered-navigation checks.
- [x] Inspect GitHub CI, merge the follow-up and verify final repository state.

## Corrections and primary evidence

| Resource | Correction and source |
| --- | --- |
| ANDI | The [SSA FAQ](https://www.ssa.gov/accessibility/andi/help/faq.html) says output can differ from actual screen readers and Shadow DOM is unsupported. Removed the announcement guarantee. |
| Project Relate | Google's [current page](https://sites.research.google/relate/) explicitly closes enrollment to new users while preserving existing models. Replaced the vague availability label. |
| alt-text | [PyPI](https://pypi.org/project/alt-text/) marks it Alpha and lists external description API credentials and a separate Tesseract installation. Added those requirements and potential service costs. |
| AI Dictation | The [current vendor page](https://aidictation.com/) describes a limited trial followed by a subscription, and cloud cleanup even with local recognition. The [client source remains MIT](https://github.com/writingmate/aidictation/blob/main/LICENSE), so it still qualifies as open source. |
| Trippi | Its [reference-build README](https://github.com/skrylkovs/trippi-oss/tree/464e2a80935e3bd2180f93284b594f2bcedc3b92) requires both Deepgram and DeepL keys and sends audio/transcripts to those services. Added requirements, external processing and possible charges. |
| Voicefield | Its [default Web Speech provider](https://github.com/tatargabor/voicefield/blob/7cd0ce12223f963dc4647102411ab412ea41eafb/packages/react/src/providers/web-speech.ts) does not require on-device recognition. [MDN](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) explains that recognition can be server-based; Soniox is also supported. Removed the implication that audio necessarily stays on the phone. |
| ARASAAC and OpenSymbols | [ARASAAC terms](https://arasaac.org/terms-of-use) specify CC BY-NC-SA 4.0. [OpenSymbols](https://www.opensymbols.org/) lists several different licenses, including noncommercial sets. Added the relevant reuse limits. |
| DailyVox | The [current project](https://github.com/intrepidkarthi/dailyvox) includes Android as well as iPhone and is MIT-licensed. Updated platform/access labels and removed promotional prose and the categorical privacy claim. |
| Dopastep | Its [current page](https://dopastep.com/) provides free focus-room access with limited monthly task breakdowns. Made the free limits explicit. |
| Technology and Disability | The [ISSN transfer record](https://portal.issn.org/resource/ISSN/1055-4181) identifies Sage as the receiving publisher from January 2025. Replaced the IOS Press URL with the [current journal page](https://journals.sagepub.com/home/tad) and labeled mixed article access. |
| CSUN journal | Replaced the challenged repository collection with the [official journal page](https://www.csun.edu/cod/journal), which loaded normally and links current and previous open-access volumes. |
| Journal of Disability Research | The retained [ScienceOpen collection](https://www.scienceopen.com/collection/e1e3fd98-e818-47dc-a396-69009efa34e7) loaded normally. Its Open Access / APCs panel describes gold open access with author publication charges and eligibility-based waivers. Removed the incorrect diamond label and alphabetized the journal under its actual title. |
| Lazarillo | The full GitHub sweep and its retry timed out at the vendor homepage; a fresh local curl request and normal browser navigation also timed out. The official [Android](https://play.google.com/store/apps/details?hl=en&id=com.lazarillo) and [iOS](https://apps.apple.com/us/app/lazarillo-accessible-gps/id1139331874) listings remain available. Replaced the stalled website with direct store routes and retained the app. This records an observed outage, not a claim of permanent closure. |

## Removals

- **alt-images-ai:** [processHTML at reviewed commit](https://github.com/kreent/alt-images-ai/blob/84ee2c38c2f1ed91c166cafa77b4c997eb8b07d4/src/client.ts#L108) processes intentional `alt=""` by default, even with `overrideExisting` false. That can add screen-reader clutter to decorative images; [W3C's decorative-image guidance](https://www.w3.org/WAI/tutorials/images/decorative/) distinguishes an empty alternative from a missing attribute. The same condition was confirmed in `dist/client.js` inside the [published npm 1.0.1 archive](https://registry.npmjs.org/alt-images-ai/-/alt-images-ai-1.0.1.tgz), whose metadata records source commit `5b19918ae761f79c793e60843e05d7f553bed9e6`. This was source inspection without installation or execution. The package declares MIT, so this is not a missing-release or missing-license removal. Other retained tools cover the task. Reconsider after a source change that preserves deliberate empty alternatives by default.
- **ASL Browser:** the [MSU landing page](https://commtechlab.msu.edu/sites/aslweb/index.html) requires frames and the legacy QuickTime browser plugin, and points readers to a newer dictionary. A successful HTTP response did not make this a suitable current-browser resource. Existing ASL dictionaries cover the need. Reconsider if the publisher supplies a working modern video interface.

The contribution guide now requires content-modifying tools to preserve
intentional accessibility semantics, including decorative empty alt text.

## Additions

- **Handy**, under Voice control and dictation: free MIT desktop dictation for macOS, Windows and Linux. [Stable release v0.9.8](https://github.com/cjpais/Handy/releases/tag/v0.9.8) has platform installers; its [release license](https://github.com/cjpais/Handy/blob/v0.9.8/LICENSE) is MIT. The [README](https://github.com/cjpais/Handy/blob/v0.9.8/README.md) documents model downloads and Linux input dependencies. [Post-processing settings](https://github.com/cjpais/Handy/blob/v0.9.8/src-tauri/src/settings.rs) and the [LLM client](https://github.com/cjpais/Handy/blob/v0.9.8/src-tauri/src/llm_client.rs) also establish optional cloud processing, which the entry discloses. No app installation, inference or functional accuracy test was run.
- **iCanConnect**, under General assistive technology: an actionable equipment-access route for deafblind users. Its [official program page](https://www.icanconnect.org/) describes free equipment, individual assessments and training, with federal disability and income eligibility. No application or eligibility determination was made.

These two additions and two removals left 684 resources in PR #112. During
final verification, Chan Meng submitted **[a11y-loop in PR #113](https://github.com/lukeslp/awesome-accessibility/pull/113)**.
That reviewed contribution brings the final catalog to **685 resources,
16 main sections and 57 subsections**. This pass adds no new section.

### Incoming contributor PR

[a11y-loop v0.3.0](https://github.com/ChanMeng666/a11y-loop/releases/tag/v0.3.0)
is a distinct MIT Node CLI and Agent Skill. The [published npm metadata](https://registry.npmjs.org/a11y-loop/0.3.0)
requires Node 20 or later. The core CLI does not require a cloud/model account;
Chromium is downloaded separately, and optional coding-agent clients can have
their own requirements and costs. The description now names its actual outputs
rather than implying an agent makes accessibility decisions reliably.

The [runner source](https://github.com/ChanMeng666/a11y-loop/blob/v0.3.0/src/lib/axe-runner.js)
uses local axe-core in Chromium across default, dark, forced-color,
reduced-motion and 320 × 256 reflow contexts. Supplied interaction states run
on fresh default-mode pages, rather than every state being tested in every
mode. [Report diffs](https://github.com/ChanMeng666/a11y-loop/blob/v0.3.0/src/lib/diff.js)
and a [manual-review checklist](https://github.com/ChanMeng666/a11y-loop/blob/v0.3.0/src/lib/format/checklist.js)
make its limits useful. It does not replace manual or screen reader testing.
[The rendered AI section](ai-render.png) was also inspected at 1280 × 720
against this exact catalog text. The published tarball's registry SHA-1 and key
source/license files were checked against the release in memory; no installation, tool execution or adoption of
its agent instructions occurred.

The contributor allowed maintainer edits. Their original commit
`099d014637d46f15945f3c3f9c7f9e46ec848f65` was preserved; a signed-off maintainer
merge `d79dd2799925cb9ff80af31d337cfe1a1a01b2ce` brought in current main and clarified
the one entry. A command-scoped LFS lock-verification setting was needed for
the fork push; the repo has no tracked LFS objects, and no persistent setting
or credentials were changed. The contributor's missing DCO sign-off remains
visible. Effective repository rules do not require that check, and no sign-off
was fabricated. Fork CI was approved only after confirming a README-only PR
diff; the obsolete original-head link job was cancelled once superseded.

## Evidence and limits

[structure.json](structure.json) preserves the PR #112 inventory;
[structure-final.json](structure-final.json) records the final 685-resource
heading inventory, local-link checks and duplicate-primary-URL checks against
README blob `4457629c185b5f114b0467b88590c113669841a9`. The web URL census
includes both links and images and excludes example code blocks. For the unchanged starting commit this parser finds 709
URLs, while the prior availability reconciliation records 703 under its text
extraction method. The parser census and that earlier reconciliation count
should not be compared as resource growth or used interchangeably. The final
parser census is 710 web URLs after adding the contributor's primary URL.

[browser-checks.json](browser-checks.json) records the current browser results.
CSUN's replacement route, Journal of Special Education Technology and the
retained ScienceOpen collection loaded their actual pages. The outstanding
browser-challenge queue is now **six destinations**, down from nine. The Sage
Technology and Disability source was readable through the web retrieval tool,
but the normal browser still displayed a challenge; it remains in this queue.
No CAPTCHA was solved or bypassed.

Both repository lint and full awesome-lint 2.3.0 passed locally. The parser
found no broken local links or duplicate primary resource URLs. A targeted
[lychee 0.24.2 check](changed-links.json) of the six new destinations returned
five HTTP 200 responses and one HTTP 403 at Sage; that blocked response is
unverified by the checker. The [rendered dictation section](dictation-render.png)
was inspected in GitHub at 1280 × 720, confirming its heading fragment,
alphabetical placement and readable wrapping of the new cost/privacy labels.

The initial [full PR link run](https://github.com/lukeslp/awesome-accessibility/actions/runs/39223380913)
found zero HTTP errors but retained a Lazarillo timeout after its targeted retry;
[pr-initial-links.json](pr-initial-links.json) preserves the measured result.
That report-only green check was not counted as a clean sweep. The additional
curl and browser failures prompted the direct-store correction above; both
store URLs returned HTTP 200 in the final targeted check.

This is a catalog/source review. It does not establish every tool's functional
accessibility, privacy behavior, recognition accuracy or conformance. Earlier
CI timeouts and documented exclusions remain in the original audit; no checker
exceptions or failure policies were changed in this sweep.

## Merge and final verification

PR #112 merged as `997554f9ac9918da2afdd94e699d6fd69b803040`.
Its final [PR link sweep](https://github.com/lukeslp/awesome-accessibility/actions/runs/39224701181)
and subsequent [strict main sweep](https://github.com/lukeslp/awesome-accessibility/actions/runs/39224879918)
both reported 621 reachable, 76 bot-blocked/rate-limited and 12 excluded URLs,
with zero errors or timeouts. The [main lint run](https://github.com/lukeslp/awesome-accessibility/actions/runs/39224879857)
also passed, including the five existing failure-policy tests.
[ci-final.json](ci-final.json) preserves the measured CI summaries.

PR #113 merged as `662c0b514e5a9b6890ea55c29eafd8128747aa7a` after the
[final contributor-head lint](https://github.com/lukeslp/awesome-accessibility/actions/runs/39225714208)
and [link sweep](https://github.com/lukeslp/awesome-accessibility/actions/runs/39225714056)
passed. The PR sweep recorded 623 reachable, 75 blocked/rate-limited and
12 excluded URLs, with zero errors or timeouts. Full awesome-lint 2.3.0 also
passed locally on the synchronized final main checkout. The original user
browser tab was refreshed to main and its rendered catalog includes the new
contribution.

The [strict final main link run](https://github.com/lukeslp/awesome-accessibility/actions/runs/39226192219)
**failed** with 621 reachable, 76 blocked/rate-limited, 12 excluded,
**one HTTP error and zero remaining timeouts**. The error was HTTP 503 at
`https://adrianroselli.com/`, which had been reachable in the immediately
preceding PR sweep. The [final main lint](https://github.com/lukeslp/awesome-accessibility/actions/runs/39226192212)
passed, including the existing failure-policy tests.

[availability-followup.json](availability-followup.json) records the direct
follow-up: local curl received no bytes within 30 seconds, normal browser
navigation timed out, and a local lychee remote-input retrieval timed out
before producing a JSON report. Those observations are availability failures,
not proof of permanent closure. The established resource is retained unchanged;
no alternative canonical route was established. Recheck it at the next
maintenance pass. This server failure is separate from the six browser
challenges, and the strict job has not been weakened or represented as green.

The final GitHub query found no open PRs or issues. The working checkout was
synchronized with main before this documentation-only completion commit.

## Rollback and follow-up

The source corrections are isolated in PR #112 and the contributor addition in
PR #113. Revert either merge with parent 1 in a new branch and PR if needed;
keep the original refresh and independent Markproof contribution. The two
removed entries and exact reasons are recorded above so future reviews can assess a fix rather than silently re-add them.
The six challenged URLs remain established resources with explicitly limited
availability evidence. No unrelated source, service or deployed Shared changed.
