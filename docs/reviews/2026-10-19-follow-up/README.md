# Follow-up checks — October 19, 2026

Luke asked to check the remaining PR, failed site and six browser challenges.
Started from clean main `0ddedaf740e7687f25a4f90e6f48859a35286533`.
The [second-sweep audit](../2026-10-19-second-sweep/README.md) preserves the
earlier observations; the results below are a new, later check.

## Yap contribution

[PR #114](https://github.com/lukeslp/awesome-accessibility/pull/114) adds
[Yap Online Dictation](https://yapapp.cc/online-dictation). Its free web tool
is separate from the paid desktop app. The current page, controls and shipped
code support no-account access, local recognition with downloaded Whisper
models, two-minute recordings and editable text with copy/download controls.
The entry now fits two sentences and tells users to review errors and save
text before closing the tab. It identifies the closed-source web tool and
does not turn Whisper's license into a license for the whole page.

[yap-source-review.json](yap-source-review.json) records the bounded source
inspection and SHA-256 hashes of the shipped assets. The capture hook sends
samples to a browser worker, which uses a Transformers.js pipeline on WebGPU
or WASM. Usage-event tracking is present. No microphone permission, audio
recording, model download or inference was performed, and this is not a
complete privacy or functional accuracy audit. The categorical no-upload
guarantee was removed from the catalog description. The [browser view](yap-browser.png)
confirms the actual free tool and its stated limits.

The contributor's commit `4c90b3b5a6445a8437b24c7e8fae9e36221e8f96` is preserved.
A signed-off maintainer commit `5929561c60cde2e133585d2b832a71877ed4c55a` only
tightens the entry. The fork allowed maintainer edits; the push was a fast-forward.
DCO still reports the original contributor's missing sign-off, which is not
required by the effective repository rules; no sign-off was fabricated.
After confirming its README-only diff, the current-head workflows were approved.
Lint and the full PR link sweep passed before merging as
`98845cec6477d9e4471d54815ea2d8fa43e5c794`.

## Six challenged destinations

All six were revisited with normal browser navigation. Some initially showed
automatic security verification, then loaded on a later normal navigation.
No CAPTCHA was solved or security mechanism bypassed.

| Destination | Outcome and evidence |
| --- | --- |
| ACM ASSETS | Confirmed conference page and proceedings. [Screenshot](assets-browser.png). |
| ACM TACCESS | Confirmed journal page and current issue navigation. [Screenshot](taccess-browser.png). |
| Technology and Disability | Confirmed Sage journal page, AAATE association and mixed open/restricted article labels. [Screenshot](sage-tad-browser.png). |
| Disability & Society | Confirmed Taylor & Francis journal page and aims/scope. [Screenshot](disability-society-browser.png). |
| Disability and Rehabilitation: Assistive Technology | Confirmed Taylor & Francis journal page and aims/scope. [Screenshot](assistive-technology-browser.png). |
| Change resources | The old guidance URL now redirects to the CHANGE Picture Bank's subscription offering. Replaced the obsolete catalog entry. [Screenshot](change-redirect-browser.png). |

[browser-checks.json](browser-checks.json) records the exact URLs and observations.
The original six-item browser queue now has no unresolved destination: five
entries are confirmed and the sixth is replaced. This does not mean all
automation-blocked URLs are verified by CI or all journal articles are free.

## Change replacement

The former Change resource page no longer supplies the guidance described by
the catalog. Its new home describes the Picture Bank's transfer to Photosymbols
and a paid subscription collection. The publisher's [transfer announcement](https://www.photosymbols.com/blogs/news/the-change-picture-bank-has-a-new-home)
also confirms the service transition. This is a changed destination, not an
inference from an HTTP error.

Replaced that entry with [Inclusion Europe's current Easy-to-Read guidelines](https://inclusion.eu/easy-to-read/guidelines/),
which provides freely readable guidance, downloadable language editions and
a simplified checklist. The old Inclusion Europe site itself points to its
current `inclusion.eu` site; the catalog uses the current route. The
[current page](inclusion-guidelines-browser.png) and its English PDF were
verified. The replacement keeps the task covered without directing readers
to a subscription image library.

## Availability and validation

Adrian Roselli's homepage now returns HTTP 200 locally and loads normally in
the [browser](adrian-recovered-browser.png). The fresh strict main run confirmed
that recovery but failed on a U-M assistive-technology timeout after its retry.
A subsequent local curl request returned HTTP 200 in 1.13 seconds; targeted
lychee also returned 200, and the later PR #114 full sweep passed that URL.
Those are separate observations; the failed main run is preserved.

[targeted-links.json](targeted-links.json) records five HTTP 200 results for
Yap, the replacement guidelines, its current English PDF, Adrian Roselli and
U-M. It used lychee 0.24.2 with a 30-second timeout and no retries for this
bounded local check. Repository CI settings remain unchanged.

[ci-results.json](ci-results.json) records the completed GitHub results. The
strict baseline had 622 reachable, 75 blocked/rate-limited, 12 excluded and one
remaining timeout. PR #114 had 626 reachable, 73 blocked/rate-limited and
12 excluded, with zero HTTP errors or timeouts. The catalog contains 686
resources after Yap and the one-for-one Change replacement.

[structure.json](structure.json) records 16 main sections, 57 subsections,
711 web URLs and no broken local links or duplicate primary URLs against
README blob `7c93cf8fa56f97d2698113a9fad67f1bdf1dec6a`.
Repository lint passed locally. Final branch and main results are recorded below.

PR #115 merged as `08a59ea16f57c1555194b1bc976c4e53c9c93d71` after
[lint](https://github.com/lukeslp/awesome-accessibility/actions/runs/39303342285)
and its [full PR sweep](https://github.com/lukeslp/awesome-accessibility/actions/runs/39303342498)
passed. That sweep had 625 reachable, 74 blocked/rate-limited and 12 excluded
URLs, with zero errors or timeouts. The preceding [strict main run after Yap](https://github.com/lukeslp/awesome-accessibility/actions/runs/39303055701)
also passed with those counts, clearing both the prior Roselli failure and
U-M timeout in that run. Complete awesome-lint 2.3.0 passed on the published
follow-up branch. The [replacement entry](plain-language-render.png) and
[Yap entry](dictation-render.png) were inspected in the rendered GitHub catalog
at 1280 × 720, confirming placement, wording and readable wrapping.

- [x] Source and browser checks; focused catalog corrections.
- [x] PR #114 lint, full link sweep and merge.
- [x] Follow-up PR, final strict CI, structure and synchronized main.

## Final state

The [final strict main link sweep](https://github.com/lukeslp/awesome-accessibility/actions/runs/39303617554)
and [main lint](https://github.com/lukeslp/awesome-accessibility/actions/runs/39303617454)
passed at merge `08a59ea16f57c1555194b1bc976c4e53c9c93d71`.
The link sweep reported **625 reachable, 74 blocked/rate-limited, 12 excluded,
zero errors and zero timeouts**. Blocked and excluded URLs remain explicitly
unverified by that automated job. No checker exception or failure policy was
changed. This supersedes the earlier availability failures for the current
checked catalog, while preserving those failures as dated evidence.

The final query found no open PRs or issues. Main was synchronized before this
documentation-only completion commit; its README blob matches the structural
and rendered evidence above. The original six-destination browser follow-up
is closed; this does not certify every listed tool's functional accessibility.

## Rollback

Revert PR #114's merge with parent 1 to remove only the Yap contribution.
Revert the separate follow-up correction through a new PR if needed. Keep the
dated failure evidence and source reasons so future reviews can distinguish
temporary availability from a changed resource. No service, inference runtime,
browser security configuration or deployed Shared was changed.
