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
- [ ] Inspect GitHub CI, merge the follow-up and verify final repository state.

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

Two additions and two removals leave **684 resources, 16 main sections and
57 subsections**. This pass adds no new section.

## Evidence and limits

[structure.json](structure.json) records the parsed heading and resource
inventory, local-link checks and duplicate-primary-URL checks against the exact
README blob. The web URL census includes both links and images and excludes
example code blocks. For the unchanged starting commit this parser finds 709
URLs, while the prior availability reconciliation records 703 under its text
extraction method. The parser census and that earlier reconciliation count
should not be compared as resource growth or used interchangeably.

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

## Rollback and follow-up

Changes are isolated on `review/second-sweep-2026-10-19`. Revert the follow-up
merge in a new branch and PR if needed; keep the original refresh and independent
Markproof contribution. The two removed entries and exact reasons are recorded
above so future reviews can assess a fix rather than silently re-add them.
The six challenged URLs remain established resources with explicitly limited
availability evidence. No unrelated source, service or deployed Shared changed.
