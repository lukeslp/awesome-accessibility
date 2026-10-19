# Awesome Accessibility [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of resources, tools, guidelines and communities for building accessible, inclusive digital experiences.

[![License: CC0](https://img.shields.io/badge/license-CC0-green.svg)](https://creativecommons.org/publicdomain/zero/1.0/) [![Link check](https://github.com/lukeslp/awesome-accessibility/actions/workflows/links.yml/badge.svg)](https://github.com/lukeslp/awesome-accessibility/actions/workflows/links.yml)

> *"For most people technology makes things easier. For people with disabilities, technology makes things possible."* Adapted from Mary Pat Radabaugh, IBM, 1988.

Resources are grouped by what you're doing: learning the standards, designing, building, testing, or finding assistive technology. Entries say when something is free or open source. Suggestions, corrections and broken-link reports are welcome; see [Contributing](#contributing).

## Contents

- [Start here](#start-here)
- [Standards and guidelines](#standards-and-guidelines)
- [Laws and policy](#laws-and-policy)
  - [United States](#united-states)
  - [Europe](#europe)
  - [Canada](#canada)
  - [International and other regions](#international-and-other-regions)
- [Accessibility programs](#accessibility-programs)
- [Inclusive design](#inclusive-design)
  - [Principles and toolkits](#principles-and-toolkits)
  - [Design tools](#design-tools)
  - [Color and contrast](#color-and-contrast)
- [Web development](#web-development)
  - [Guides and references](#guides-and-references)
  - [Component libraries and design systems](#component-libraries-and-design-systems)
  - [Developer libraries](#developer-libraries)
  - [User-facing widgets and overlays](#user-facing-widgets-and-overlays)
- [Mobile and native apps](#mobile-and-native-apps)
  - [Cross-platform](#cross-platform)
  - [Android](#android)
- [Testing and auditing](#testing-and-auditing)
  - [Methods and guides](#methods-and-guides)
  - [Browser extensions and in-page checkers](#browser-extensions-and-in-page-checkers)
  - [Testing engines and CI](#testing-engines-and-ci)
  - [Linters and static analysis](#linters-and-static-analysis)
  - [Screen reader testing](#screen-reader-testing)
  - [Online checkers and scanners](#online-checkers-and-scanners)
- [Content and media](#content-and-media)
  - [Documents, PDF and e-books](#documents-pdf-and-e-books)
  - [Plain language and readability](#plain-language-and-readability)
  - [Captions, subtitles and audio description](#captions-subtitles-and-audio-description)
- [AI and accessibility](#ai-and-accessibility)
  - [AI tools for builders](#ai-tools-for-builders)
- [Assistive technology](#assistive-technology)
  - [General](#general)
  - [Screen readers](#screen-readers)
  - [Braille](#braille)
  - [Low vision and magnification](#low-vision-and-magnification)
  - [Color vision](#color-vision)
  - [Vision apps and wearables](#vision-apps-and-wearables)
  - [Reading and print access](#reading-and-print-access)
  - [Deaf and hard of hearing](#deaf-and-hard-of-hearing)
  - [Sign languages](#sign-languages)
  - [Motor and alternative input](#motor-and-alternative-input)
  - [Voice control and dictation](#voice-control-and-dictation)
  - [Speech and AAC](#speech-and-aac)
  - [Cognitive and learning](#cognitive-and-learning)
  - [Neurodiversity](#neurodiversity)
- [Gaming](#gaming)
- [Built environment and maps](#built-environment-and-maps)
- [Learning](#learning)
  - [Courses and training](#courses-and-training)
  - [Certification](#certification)
  - [Books](#books)
  - [Podcasts and video](#podcasts-and-video)
- [Community](#community)
  - [Disability organizations](#disability-organizations)
  - [Professional communities](#professional-communities)
  - [Events and conferences](#events-and-conferences)
- [Research and data](#research-and-data)
  - [Journals and proceedings](#journals-and-proceedings)
  - [Data and statistics](#data-and-statistics)

## Start here

New to accessibility? These cover the basics.

- [W3C WAI resources](https://www.w3.org/WAI/resources/) - Index of the Web Accessibility Initiative's technical and educational resources, from introductions and tutorials to policy and planning guides.
- [How people with disabilities use the web](https://www.w3.org/WAI/people-use-web/tools-techniques/) - W3C overview of the tools and techniques people use to browse, from screen readers and magnifiers to voice control and reading aids.
- [The A11Y Project](https://www.a11yproject.com/) - Community-driven site with plain-language posts, a checklist and curated resources for making the web accessible.
- [WebAIM articles](https://webaim.org/articles/) - Long-running library of practical articles on web accessibility, from alt text and forms to screen reader testing.

## Standards and guidelines

The technical standards most laws point to, and guides to reading them.

- [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/) - European standard for ICT accessibility, from ETSI's official directory of versions. V3.2.1 is the version cited for legal presumption of conformity; V4.1.1, published September 2026, moves to WCAG 2.2 and maps its clauses to the European Accessibility Act.
- [Essential components of web accessibility](https://www.w3.org/WAI/fundamentals/components/) - W3C explainer on how content, authoring tools, browsers and assistive technology work together, and which guidelines cover each.
- [How to Meet WCAG 2.2 (quick reference)](https://www.w3.org/WAI/WCAG22/quickref/) - Filterable W3C reference to every WCAG 2.2 success criterion, with techniques, failures and understanding documents.
- [Making Content Usable for People with Cognitive and Learning Disabilities](https://www.w3.org/TR/coga-usable/) - W3C Working Group Note from the Cognitive and Learning Disabilities Accessibility Task Force (COGA) with user needs, personas and design patterns for web content and applications. Its guidance goes beyond the WCAG requirements and is not needed for conformance.
- [RESNA assistive technology standards](https://www.resna.org/AT-Standards) - Standards from the Rehabilitation Engineering and Assistive Technology Society of North America for assistive products such as wheelchairs.
- [User Agent Accessibility Guidelines (UAAG) 2.0](https://www.w3.org/TR/UAAG20/) - W3C Working Group Note (2015) with guidance for browsers, media players and other user agents; it was not advanced to a Recommendation.
- [WAI-ARIA overview](https://www.w3.org/WAI/standards-guidelines/aria/) - W3C overview of Accessible Rich Internet Applications: the roles, states and properties that expose custom widgets to assistive technology. ARIA 1.2 is the current Recommendation.
- [WCAG 2 overview](https://www.w3.org/WAI/standards-guidelines/wcag/) - W3C introduction to the Web Content Accessibility Guidelines; WCAG 2.2 has 13 guidelines under four principles: perceivable, operable, understandable and robust.
- [WCAG 2.1](https://www.w3.org/TR/WCAG21/) - Previous W3C Recommendation, still the version many laws cite; WCAG 2.2 is backward compatible with it.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) - The current W3C Recommendation, also published as ISO/IEC 40500:2025. It adds nine success criteria to WCAG 2.1 and removes 4.1.1 Parsing as obsolete.
- [WCAG 2.2 map](https://intopia.digital/articles/intopia-launches-wcag-2-2-map/) - Intopia's visual map of all WCAG 2.2 success criteria, organized by principle, guideline and level.
- [WCAG 3 introduction](https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/) - W3C introduction to the WCAG 3 Working Draft, most recently published in September 2026. It is years from completion; WCAG 2.2 remains the version to conform to.
- [WCAG in Plain English](https://aaardvarkaccessibility.com/wcag-plain-english/) - Plain-English explanation of each WCAG success criterion, written for beginners.
- [What's new in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/) - W3C guide to the nine success criteria added in WCAG 2.2, including Focus Not Obscured, Focus Appearance, Dragging Movements, Target Size (Minimum), Consistent Help, Redundant Entry and Accessible Authentication.

## Laws and policy

Official sources first. Laws change; check the date on anything you rely on.

### United States

- [21st Century Communications and Video Accessibility Act (CVAA)](https://www.fcc.gov/consumers/guides/21st-century-communications-and-video-accessibility-act-cvaa) - FCC guide to accessibility rules for advanced communications services and video programming, including captions, video description and accessible menus.
- [ADA National Network](https://adata.org/) - Ten regional centers that provide information, guidance and training on the Americans with Disabilities Act.
- [ADA Title II web and mobile rule](https://www.ada.gov/resources/2024-03-08-web-rule/) - Department of Justice fact sheet on the 2024 rule requiring state and local government websites and mobile apps to meet WCAG 2.1 Level AA. An April 2026 interim final rule moved the compliance dates to 26 April 2027 (populations of 50,000 or more) and 26 April 2028 (smaller governments and special districts).
- [ADA.gov guidance on web accessibility](https://www.ada.gov/resources/web-guidance/) - Department of Justice guidance on web accessibility for state and local governments and businesses under the Americans with Disabilities Act.
- [Revised Section 508 Standards](https://www.access-board.gov/ict/) - U.S. Access Board standards for information and communication technology that federal agencies buy, build or use; they incorporate WCAG 2.0 Level AA.
- [Section508.gov](https://www.section508.gov/) - GSA's hub for federal IT accessibility: policy, procurement, testing methods and training.
- [Section508.gov laws and policies](https://www.section508.gov/manage/laws-and-policies/) - Summary of U.S. federal IT accessibility laws, regulations and policies.

### Europe

- [AccessibleEU](https://accessible-eu-centre.ec.europa.eu/index_en) - The European Commission's accessibility resource centre, with guidance, training and a knowledge base on EU accessibility law.
- [EAA National Transposition by Member State](https://yakupefecaliskann.github.io/annex-site/eaa/transposition/) - The national instrument transposing the European Accessibility Act in each of the 27 EU member states, each row read from the official EUR-Lex transposition record. A business is judged against the national law rather than the directive itself.
- [European Accessibility Act](https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en) - European Commission overview of the directive that has applied since 28 June 2025 to products and services such as computers, phones, e-commerce, banking and e-books.

### Canada

- [Accessible Canada Act](https://www.canada.ca/en/employment-social-development/programs/accessible-canada.html) - Canadian federal law working toward a barrier-free Canada by 2040, with accessibility plans required for federally regulated organizations.
- [Guidance on implementing the Standard on Web Accessibility](https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/guidance-implementing-standard-web-accessibility.html) - Treasury Board of Canada guidance for federal departments on meeting the Government of Canada's web accessibility standard.
- [Ontario: how to make websites accessible](https://www.ontario.ca/page/how-make-websites-accessible) - Ontario government guidance on website requirements under the Accessibility for Ontarians with Disabilities Act (AODA).
- [WebAIM: web accessibility laws in Canada](https://webaim.org/articles/laws/canada/) - Summary of federal and provincial accessibility laws that apply to websites in Canada.

### International and other regions

- [@holmdigital/standards](https://www.npmjs.com/package/@holmdigital/standards) - Machine-readable regulatory database mapping WCAG to EN 301 549 and national law across 17 jurisdictions, with typed exports and enforcement-body lookups. Open source (MIT).
- [UN Convention on the Rights of Persons with Disabilities](https://social.desa.un.org/issues/disability/crpd/convention-on-the-rights-of-persons-with-disabilities-crpd) - International human rights treaty whose Article 9 commits states to accessibility, including of information and communications technology.
- [W3C web accessibility laws and policies](https://www.w3.org/WAI/policies/) - Directory of accessibility laws and policies by country, maintained by the W3C Web Accessibility Initiative.

## Accessibility programs

Planning, maturity models, procurement and accessibility statements for organizations.

- [AbilityNet beginner's guide to digital accessibility](https://abilitynet.org.uk/resources/digital-accessibility/beginners-guide-digital-accessibility) - UK charity's overview of digital accessibility for organizations, covering audits, testing, training and policy.
- [Access Declared](https://www.accessdeclared.com/) - Free, no-account checklist for event organizers, speakers and employers to publish which access provisions an event or interview offers, and which it does not.
- [Accesserty Signal](https://accesserty.com/en/signal) - Chrome and Firefox extension that shows published accessibility certifications and statements for sites in Google and Bing results, and lets people report barriers they encounter.
- [Accessibility statement generator (A11y Kit)](https://vread-corp.github.io/declaration-accessibilite/en/) - Free, in-browser generator for accessibility statements following the European Accessibility Act Annex V structure, with French (RGAA) and German (BFSG) versions; exports HTML, Markdown and Word and sends no data. It formats your answers and does not test the site.
- [Digital Accessibility Maturity Model (DAMM)](https://www.levelaccess.com/blog/the-digital-accessibility-maturity-model-introduction-to-damm/) - Level Access's maturity model for measuring and planning digital accessibility programs.
- [Microsoft Accessibility Evolution Model](https://blogs.microsoft.com/accessibility/accessibility-evolution-model/) - Microsoft's model for describing how mature an organization's accessibility practice is, and what the next stage looks like.
- [Voluntary Product Accessibility Template (VPAT)](https://www.itic.org/policy/accessibility/vpat) - ITI's template for Accessibility Conformance Reports, with editions for Section 508, EN 301 549, WCAG and an international edition combining them.
- [W3C Accessibility Maturity Model](https://www.w3.org/TR/maturity-model/) - W3C Group Note (November 2025) for assessing and improving the maturity of an organization's accessibility program.
- [Web Accessibility Framework](https://blog.pope.tech/2024/01/17/how-the-web-accessibility-framework-was-designed/) - Pope Tech's framework for planning an accessibility program around goals, scope, risk appetite, gaps and processes.

## Inclusive design

### Principles and toolkits

- [Adobe Spectrum: inclusive design](https://spectrum.adobe.com/page/inclusive-design/) - How Adobe's Spectrum design system approaches inclusive design.
- [Cards for Humanity](https://cardsforhumanity.frog.co/) - Card deck that deals a person and a trait, to test a product, service or concept from a different perspective.
- [Centre for Inclusive Design](https://centreforinclusivedesign.org.au/) - Australian organization that helps teams build inclusive design processes, with research and training.
- [Co-design kit](https://community-led.design/) - Open-source toolkit for community-led co-design.
- [IBM Equal Access Toolkit](https://www.ibm.com/able/toolkit/) - IBM's step-by-step accessibility guidance for planning, design, development and verification, organized by role.
- [Inclusive Design Guide](https://guide.inclusivedesign.ca/) - IDRC's guide to inclusive design insights and practices that apply across design fields.
- [Inclusive Design Principles](https://web.archive.org/web/20230601105718/https://inclusivedesignprinciples.org/) - Seven principles by Henny Swan, Ian Pouncey, Heydon Pickering and Léonie Watson (archived copy; the original domain has lapsed).
- [Inclusive Design Research Centre](https://idrc.ocadu.ca/) - International community of designers, developers, researchers and educators at OCAD University working to make emerging technology and practices inclusive.
- [Inclusive Design Toolkit](https://www.inclusivedesigntoolkit.com/case_studies/case_studies.html) - University of Cambridge toolkit and case studies showing how inclusive design leads to better products.
- [Institute for Human Centered Design](https://humancentereddesign.org/) - Nonprofit offering resources, consulting and training on universal design for people of all abilities and backgrounds.
- [Microsoft Inclusive Design](https://inclusive.microsoft.design/) - Microsoft's inclusive design toolkits, activities and case studies, including the persona spectrum.
- [Nielsen Norman Group: inclusive design](https://www.nngroup.com/articles/inclusive-design/) - Article on inclusive design methods for products that work for people of all abilities and backgrounds.
- [OHRC: inclusive design and the duty to accommodate](https://www.ohrc.on.ca/en/inclusive-design-and-duty-accommodate-fact-sheet) - Ontario Human Rights Commission fact sheet on how inclusive design relates to the legal duty to accommodate.
- [Universal Design: Process, Principles, and Applications](https://doit.uw.edu/universal-design) - University of Washington DO-IT guide to universal design principles and how they apply to education, technology and physical spaces.

### Design tools

- [Stark](https://www.getstark.co/) - Accessibility plugin suite for Figma and other design tools, with contrast checking, vision simulation, focus order and alt text annotations. Free and paid tiers.

### Color and contrast

- [Accessible Colors](https://accessible-colors.com) - Finds the closest accessible color combination when a pair fails WCAG contrast.
- [AudioEye color contrast checker](https://www.audioeye.com/color-contrast-checker) - Color contrast checker against WCAG thresholds (formerly color.a11y.com).
- [Color Vision Labs Simulator & Filter](https://colorvisionlabs.com/color-blind-filter) - Free browser-based color blindness simulator (protan, deutan, tritan, with adjustable severity including partial forms) for live camera or photos, plus a daltonization assist mode. Runs entirely client-side, no signup.
- [Coloring for Colorblindness](https://davidmathlogic.com/colorblind/) - David Nichols' interactive tool for checking how a palette looks to people with color vision deficiencies.
- [Colour Contrast Analyser](https://vispero.com/color-contrast-checker/) - Free desktop app from Vispero for checking color contrast against WCAG, with an eyedropper for any pixel on screen.
- [Colour contrast grid](https://maniruzzamanjubayer.com/tools/color-contrast-grid) - Free browser tool that scores every text and background pair in a palette against WCAG 2.2 contrast thresholds, previews each pair in real UI and suggests the nearest passing colour. Runs client-side with no account.
- [NoCoffee Vision Simulator](https://addons.mozilla.org/addon/nocoffee/) - Firefox extension that approximates low vision, color vision deficiency, cataracts and other impairments on web pages, for design review rather than clinical accuracy. Open source (MIT).
- [Ohio State University color guidelines](https://ets.osu.edu/color-guidelines-digital-accessibility) - Guidelines for using color accessibly in digital materials.
- [Sim Daltonism](https://michelf.ca/projects/sim-daltonism/) - Color blindness simulator for macOS and iOS that filters the screen or camera view in real time.
- [WCAG Color Contrast Checker](https://www.davidmello.com/tools/color-contrast-checker) - Interactive foreground and background color contrast checker against WCAG 2.1 AA and AAA standards, with colorblindness simulation for four deficiency types, accessible color variant suggestions, and a markdown bug report for logging accessibility defects.
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Checks foreground and background color contrast against WCAG AA and AAA.

## Web development

### Guides and references

- [A11y Style Guide](https://a11y-style-guide.com/style-guide/) - Accessible patterns with code and examples for common page elements.
- [Accessibility Developer Guide](https://www.accessibility-developer-guide.com/) - Practical guide for developers, with patterns, examples and screen reader testing advice.
- [Accessible SVG icons](https://iconvectors.io/tutorials/accessible-svg-icons-aria-roles-labels.html) - Practical guide to making SVG icons accessible with roles, labels and decorative-icon patterns.
- [Accessible Technology at the UW](https://www.washington.edu/accessibility/) - University of Washington guides to creating accessible websites, documents, videos and IT.
- [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/) - W3C guide to building accessible widgets with WAI-ARIA, with design patterns, keyboard interaction and working examples.
- [Designing for motion sensitivity](https://source.opennews.org/articles/motion-sick/) - Article on designing animation that does not trigger vestibular disorders, with reduced-motion techniques.
- [Digital.gov accessibility](https://digital.gov/topics/accessibility/) - Resources and guidance that help U.S. government agencies build accessible digital services.
- [Drupal accessibility](https://www.drupal.org/about/features/accessibility) - Drupal's accessibility features, standards commitment and contributed modules for auditing content.
- [Inclusive Components](https://inclusive-components.design/) - Heydon Pickering's articles on building common interface components accessibly, from toggles to tabbed interfaces.
- [MDN: understanding WCAG](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG) - Mozilla's guide to WCAG for developers, organized by principle.
- [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) - MDN reference for the CSS media query that detects a user's request for less motion, important for vestibular disorders and some forms of epilepsy.
- [Section508.gov guide to accessible web design and development](https://www.section508.gov/develop/guide-accessible-web-design-development/) - U.S. government guide to building accessible websites, mapped to WCAG requirements.

### Component libraries and design systems

- [Accesserty UI Kit](https://accesserty.com/en/uikit/) - HTML-first accessible Web Components with built-in keyboard behavior and state management, usable with any framework or with plain HTML. Open source (MIT).
- [Ariakit](https://ariakit.com/) - Toolkit for building accessible web apps with React, providing low-level primitives with full WAI-ARIA support. Open source (MIT).
- [Chakra UI](https://chakra-ui.com/) - React component library with WAI-ARIA support built into its components. Open source (MIT).
- [Headless UI](https://headlessui.com/) - Unstyled, accessible UI components for React and Vue from Tailwind Labs. Open source (MIT).
- [@holmdigital/components](https://www.npmjs.com/package/@holmdigital/components) - Accessible React components including a regulation-ready `AccessibilityStatement` generator with legal templates in 12 locales (en, sv, no, fi, da, nl, de, fr, es, it, pt, pl, plus aliases). Open source (MIT).
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible component primitives for React. Open source (MIT).
- [React Aria](https://react-aria.adobe.com/) - Unstyled, accessible React components and hooks from Adobe, with keyboard, screen reader, touch and internationalization support. Open source (Apache-2.0).
- [Riffle](https://github.com/reactivepixels/riffle) - Headless cycling card stack for vanilla JS, React and Vue that follows the WAI-ARIA carousel pattern, with keyboard navigation and reduced-motion support. Open source (MIT).
- [U.S. Web Design System accessibility](https://designsystem.digital.gov/documentation/accessibility/) - USWDS accessibility guidance, with tested components and patterns for government websites.

### Developer libraries

- [accessibility-devkit](https://github.com/actually-useful-ai/accessibility-devkit) - Framework-agnostic TypeScript toolkit of eight packages mapped to WCAG success criteria, covering auditing, accessible components, accommodations such as dyslexia typography and text spacing, motor, cognitive, language, media and motion. Open source (MIT).
- [aria-query](https://github.com/A11yance/aria-query) - Programmatic access to the WAI-ARIA roles model, used by eslint-plugin-jsx-a11y and Testing Library. Open source (Apache-2.0).
- [focus-trap](https://github.com/focus-trap/focus-trap) - A library for trapping focus within a DOM node. Open source (MIT).
- [@fontsource/opendyslexic](https://www.npmjs.com/package/@fontsource/opendyslexic) - Self-hosted OpenDyslexic font package for npm-based projects. Open source (OFL-1.1).
- [ux-oss-safeguard](https://github.com/actually-useful-ai/ux-oss-safeguard) - Content safety evaluator with WCAG 2.1 AA support, keyboard navigation, screen-reader support, and reduced-motion handling. Zero dependencies.

### User-facing widgets and overlays

Toolbars that let visitors change text size, contrast and similar settings. They do not fix underlying accessibility problems; see the note below.

- [Accessibilik](https://github.com/RosenGray/accessibilik) - React-based accessibility widget with a wide range of features. Open source (MIT).
- [accessibility](https://www.npmjs.com/package/accessibility) - npm package that adds a toolbar for text resizing, contrast and link highlighting. Open source (MIT).
- [acc_toolbar](https://github.com/mickidum/acc_toolbar) - Lightweight, dependency-free JavaScript accessibility toolbar. Open source (MIT).
- [All-in-One Accessibility](https://www.skynettechnologies.com/all-in-one-accessibility) - Widget for Django, Wagtail and Plone that wraps a commercial service. Open source (MIT).
- [Dock Access](https://dockaccess.org/) - Commercial accessibility suite with a user-facing widget, automated audits, monitoring and manual audits. (Free browser extension and paid services)
- [have-wcag](https://www.npmjs.com/package/have-wcag) - WCAG toolkit that combines a user-facing widget with an auditor. Open source (MIT).
- [NCSU Readability Widget](https://github.com/NCSU-Libraries-UX/readability-widget) - Vanilla JavaScript widget focused on balancing competing reading and display needs.
- [Sienna Accessibility Widget](https://github.com/bennyluk/Sienna-Accessibility-Widget) - Free, lightweight accessibility widget.
- [UserWay](https://userway.org/) - Commercial accessibility overlay widget.

> **Note on overlays**: Accessibility overlays and all-in-one widgets are widely criticized by disabled people and accessibility practitioners. They cannot repair inaccessible code, can interfere with people's own assistive technology, and do not by themselves make a site conform to WCAG or the law. In 2025 the U.S. Federal Trade Commission [ordered accessiBe to pay $1 million](https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-approves-final-order-requiring-accessibe-pay-1-million) and stop claiming, without evidence, that its overlay makes websites WCAG-compliant. The [Overlay Fact Sheet](https://overlayfactsheet.com/) explains the practitioner consensus. Fix issues at the source, with automated testing, accessible components and manual review.

## Mobile and native apps

Screen readers built into phones, such as VoiceOver and TalkBack, are listed under Assistive technology.

### Cross-platform

- [Appt](https://appt.org/en) - Open knowledge base for mobile app accessibility, with code samples for Android, iOS, Flutter, React Native, .NET MAUI and more.

### Android

- [Oh My Android](https://github.com/ateymoori/oh-my-android) - Free, open-source macOS app for accessibility testing of Android apps in the emulator or on a device over adb. Toggles TalkBack, font scale, bold text and RTL/pseudo-locales, and runs an audit that numbers each TalkBack stop in focus order and flags unlabeled controls and small touch targets.

## Testing and auditing

Automated tools find only part of the problems (often estimated at 30 to 40 percent). Combine them with keyboard testing, screen reader testing and, best of all, testing with disabled people.

### Methods and guides

- [A11Y Project checklist](https://www.a11yproject.com/checklist/) - Checklist based on WCAG for developers and designers reviewing their work.
- [DigitalA11Y: open-source accessibility tools](https://www.digitala11y.com/open-source-accessibility-tools/) - Roundup of open-source web accessibility evaluation tools.
- [GOV.UK: testing for accessibility](https://www.gov.uk/service-manual/helping-people-to-use-your-service/testing-for-accessibility) - UK government service manual guidance on planning accessibility testing, with automated tools, manual checks and user research.
- [QAPractices Accessibility Testing](https://qapractices.com/topics/accessibility-testing/) - Curated hub with accessibility testing guides, WCAG checklists and tools for manual and automated testing.
- [Section508.gov: testing with ANDI](https://www.section508.gov/test/web-software/) - How to test web content with ANDI, the Accessible Name and Description Inspector bookmarklet.
- [W3C: evaluating web accessibility](https://www.w3.org/WAI/test-evaluate/) - W3C overview of evaluation approaches, from quick easy checks to full conformance evaluation.
- [W3C Web Accessibility Evaluation Tools List](https://www.w3.org/WAI/test-evaluate/tools/list/) - Filterable list of software and online services that help check whether web content is accessible.
- [WebAIM: web accessibility evaluation tools](https://webaim.org/articles/tools/) - Guide to what automated and manual evaluation tools can and cannot tell you.

### Browser extensions and in-page checkers

- [Accesserty DevCheck](https://accesserty.com/en/devcheck) - Browser extension that runs axe-core scans, focus path review, visual simulations, and PDF structure checks on the current page, including local, staging, and authenticated states.
- [Accessibility Insights](https://accessibilityinsights.io/) - Microsoft's free tools for web and Windows apps, with automated checks, a tab-stop visualizer and guided manual assessments for WCAG. Open source (MIT).
- [ARC Toolkit](https://vispero.com/arc-platform/arc-toolkit/) - Vispero's Chrome extension for accessibility testing, with WCAG issue reporting and remediation guidance.
- [axe DevTools browser extension](https://www.deque.com/axe/devtools/extension/) - Deque's browser extension for Chrome, Firefox and Edge that scans pages with axe-core; the free tier covers automated checks.
- [Editoria11y](https://editoria11y.princeton.edu/) - Princeton-built content accessibility checker that runs automatically on page load, flagging issues like missing alt text and heading structure problems.
- [Polypane](https://polypane.app/) - Developer browser with built-in WCAG tests, contrast checks, color blindness simulation and an accessibility tree view. Paid, with a free trial.
- [Sa11y](https://sa11y.netlify.app/) - Accessibility quality assurance tool that visually highlights issues directly on the page, designed for content authors and editors.
- [WAVE](https://wave.webaim.org/) - WebAIM's evaluation tool, available as a browser extension and online, that shows issues in place on the page.

### Testing engines and CI

- [axe-core](https://github.com/dequelabs/axe-core) - Accessibility rules engine from Deque that tests against WCAG 2.0 to 2.2 and best practices, designed to avoid false positives; most automated checkers on this list build on it. Open source (MPL-2.0).
- [@holmdigital/engine](https://www.npmjs.com/package/@holmdigital/engine) - WCAG testing engine and CLI (hd-a11y-scan) that maps failures to EN 301 549 and national accessibility law in 17 jurisdictions, with CI mode and JUnit and PDF reports. Open source (MIT).
- [IBM Equal Access Accessibility Checker](https://github.com/IBMa/equal-access) - IBM's open-source rules engine, browser extensions and Node package for Selenium, Puppeteer and Playwright tests, with baselines so CI fails only on new issues. Open source (Apache-2.0).
- [jest-axe](https://github.com/NickColley/jest-axe) - Jest matcher that runs axe-core against rendered markup in unit tests. Open source (MIT).
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/) - Google's open-source auditing tool for accessibility, performance, SEO and best practices, built into Chrome DevTools.
- [Octopus Scanner](https://lachie1999.itch.io/octopus-scanner) - Desktop accessibility auditing app using Puppeteer and axe-core. Supports full-site crawls, sitemap ingestion, interactive journey recording for authenticated flows, and deep scan engine for dynamic content. Generates interactive reports with visual defect highlighting. Free, cross-platform.
- [Pa11y](https://pa11y.org/) - Free and open-source command-line tools for automated accessibility testing of web pages. Open source (LGPL-3.0).
- [ux-ui-audit](https://github.com/uxbyissa/ux-ui-audit) - Browser probes that measure WCAG contrast, tap targets and focus-ring contrast, plus an Arabic/RTL engine for plural agreement, bidi hazards and letter-spacing on cursive script. Open source (MIT).
- [wcag-contrast-ci](https://github.com/johnsmithCA-sta/wcag-contrast-ci) - Zero-dependency Python CLI that batch-checks color pairs against WCAG AA/AAA (normal, large, and UI-component tiers) and audits CSS token hygiene - variable definition/usage counts, hardcoded color values, and dead token detection. Exits non-zero on failure so it can gate a CI pipeline directly.

### Linters and static analysis

- [axe Linter](https://github.com/dequelabs/axe-linter-action) - Deque GitHub Action that lints HTML, React, Vue and Markdown files for accessibility issues in pull requests.
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) - ESLint rules for accessibility issues in JSX, the standard linter for React projects. Open source (MIT).

### Screen reader testing

- [A11Y Project: getting started with VoiceOver](https://www.a11yproject.com/posts/getting-started-with-voiceover/) - Practical guide for developers testing websites with VoiceOver on macOS, with tips that apply to other screen readers.
- [Deque University screen reader shortcuts](https://dequeuniversity.com/screenreaders/) - Keyboard and gesture reference for the major desktop and mobile screen readers.
- [WebAIM: testing with screen readers](https://webaim.org/articles/screenreader_testing/) - How to test web content with a screen reader, with keyboard shortcuts for the major ones.

### Online checkers and scanners

- [Access Check](https://khangyen.github.io/access-check/) - Browser-based WCAG 2.1 scanner that checks a URL or pasted HTML and maps each violation to its success criterion. Runs client-side with no install or account, and documents axe-core's roughly 30-50% automated-detection ceiling rather than implying full coverage.
- [AccessCheck](https://accesscheck-app.netlify.app) - Free web accessibility scanner that runs Playwright and axe-core against any URL to find WCAG 2.1 violations, with remediation guidance and exportable reports.
- [Accessibility Checker](https://www.accessibilitychecker.org/) - Free single-page WCAG and ADA scanner.
- [Accessibility Checker by Experte](https://www.experte.com/accessibility) - Free bulk website accessibility checker that scans up to 500 pages at once against WCAG 2.1.
- [accessScan](https://accessibe.com/accessscan) - accessiBe's free WCAG scanner for a single page.
- [Annex Markup Scan](https://yakupefecaliskann.github.io/annex-site/tools/scan/) - Browser-based WCAG 2.2 checker for a page's HTML whose 14 rules run client-side; scanning by address sends only the address to a fetch proxy. It reports contrast, keyboard operation and focus visibility as out of scope rather than passed.
- [barrieretest.at](https://barrieretest.at) - Automated accessibility testing tool built on pa11y, tailored to Austrian BaFG regulations. Provides a quick score for any URL. Free, no sign-up required. API access available on request.
- [Foglift](https://foglift.io) - Free website analyzer that includes WCAG accessibility audit. Checks alt text, heading hierarchy, ARIA landmarks, keyboard navigation, color contrast, and more across all pages. Free API available.
- [The ID Toolbox](https://nextgenailearning.com) - Free browser-based accessibility checks for e-learning courses rather than web pages: alt text across a published SCORM package or PowerPoint deck, color contrast against WCAG AA and AAA, color blindness simulation, and caption reading speed. Runs client-side with no account and no upload.
- [Nutilz Accessibility Checker](https://nutilz.com/accessibility-checker) - Free WCAG scanner that audits any URL for critical, serious, moderate, and minor violations, gives the page a numeric score, and lists passed checks alongside per-issue fix guidance. No signup required.
- [PageGuard](https://pageguard.org) - Free website health scanner that checks SEO, performance, accessibility, and best practices. Generates plain-English reports. No registration required. Powered by Cloudflare Workers AI.
- [RatedWithAI](https://ratedwithai.com/) - Automated website accessibility scanner that checks sites for ADA and WCAG compliance issues, providing instant audits with actionable recommendations. Free scanner available.
- [Siteimprove](https://www.siteimprove.com/platform/accessibility/) - Commercial platform for monitoring website accessibility, quality and SEO.
- [TrustYourWebsite](https://trustyourwebsite.com) - Automated website accessibility and compliance scanner for EU and UK small businesses, built on axe-core. Reports WCAG issues only and injects nothing into the page (not an overlay). The free scan returns a risk score and issue counts.
- [WCAG Watch](https://wcagwatch.tirelesslabs.com) - Automated technical WCAG/EAA monitoring for EU-facing sites, built on axe-core. Free instant scan; paid continuous monitoring from €29/mo. Note: automated scanners catch only an estimated 25–33% of WCAG issues — not a substitute for a human audit or legal/compliance certification.
- [WCAGsafe](https://wcagsafe.com) - WCAG 2.1 AA website and PDF accessibility scanner with plain-language results, risk indicators, remediation guidance, and monitoring.
- [Website Accessibility Checker](https://websiteaccessibilitychecker.com/checker/index.php) - Checks single HTML pages against accessibility standards.

## Content and media

### Documents, PDF and e-books

- [Accessible Documents Toolkit](https://oit.colorado.gov/standards-policies-guides/guide-to-accessible-web-services/accessible-documents-toolkit) - Colorado Office of Information Technology toolkit for creating accessible documents across formats.
- [CAST AEM Center](https://aem.cast.org/) - National Center on Accessible Educational Materials, with guidance on creating and acquiring accessible learning materials.
- [PDFChecks](https://pdfchecks.com/) - Free local PDF accessibility quick check, with an optional uploaded-file audit of machine-testable PDF/UA requirements using veraPDF. Automated results complement manual review.
- [Section508.gov: create accessible documents](https://www.section508.gov/create/documents/) - Guides to creating accessible Word, PowerPoint, Excel and PDF documents that conform to the Revised 508 Standards.

### Plain language and readability

- [British Dyslexia Association style guide](https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace) - Guidance on making written content and workplaces dyslexia-friendly.
- [CDC plain language materials](https://www.cdc.gov/health-literacy/php/develop-materials/plain-language.html) - CDC guidance on plain language for health communication, with practical writing tips.
- [Easy Read resources](https://www.changepeople.org/resources) - Change's resources and guidance for creating Easy Read documents for people with learning disabilities.
- [Federal plain language guidelines](https://digital.gov/guides/plain-language/) - Digital.gov's plain language guidelines for U.S. federal agencies, required under the Plain Writing Act of 2010, covering structure, wording and design.
- [Hemingway Editor](https://hemingwayapp.com/) - Writing tool that highlights long sentences, passive voice and hard-to-read passages, with a grade-level score. Free web version.

### Captions, subtitles and audio description

- [Caption readability check](https://timedsubs.com/en/guides/caption-readability-check) - Practical pre-publication guide for checking caption timing, overlaps, line length, reading speed, and SRT/VTT structure without presenting style thresholds as WCAG guarantees.
- [Closed Caption Creator](https://www.closedcaptioncreator.com/) - Commercial tool for creating closed captions and subtitles for video.
- [Picute](https://picute.net/) - Automated subtitle and caption generator with free, no-signup browser tools to convert and repair subtitle files (SRT, VTT, ASS) for accessible video.
- [SubtitleFixer](https://subtitlefixer.com/) - Free, open-source (MIT) browser tools that repair caption files so they stay usable: re-sync out-of-time captions, fix garbled characters, and convert between SRT, VTT, ASS, SBV and SUB, with files processed on the device and no account.
- [W3C: captions and subtitles](https://www.w3.org/WAI/media/av/captions/) - W3C guidance on creating captions and subtitles for audio and video.

## AI and accessibility

AI features in specific products are listed with them: Be My Eyes, Seeing AI, Lookout, Envision and Aira under vision apps, Voiceitt and Personal Voice under speech and AAC, and Buzz under captions.

> **Note on AI**: AI descriptions, captions and code suggestions can be confidently wrong, so check anything safety-critical or legally significant with a person or a second source. AI-assisted testing finds only part of WCAG issues and does not replace manual and assistive technology testing. Overlays marketed as "AI-powered" do not make a site conformant (see the note on overlays under Web development).

### AI tools for builders

- [A11Y.md](https://github.com/fecarrico/A11Y.md) - Persistent accessibility context standard for AI coding agents (Claude Code, Cursor, Copilot, Gemini). Portable markdown with an AI behavior contract, WCAG 2.2 AA compliance profiles, 24 lazy-loaded component guides, and versioned evidence artifacts. English and Portuguese. Open source (MIT).
- [Alt Text Intelligence](https://lukesteuber.com/downloads/apps/alt-text-intelligence/) - App for writing and editing image descriptions, for up to ten photos at a time, on iPhone, iPad, Mac and Android.
- [alt-images-ai](https://github.com/kreent/alt-images-ai) - An npm package that auto-generates alt text for images using a language model. Open source (MIT).
- [alt-text](https://pypi.org/project/alt-text/) - Python package for finding, generating and setting alt text for images in HTML and EPUB files. Open source (GPL-3.0).
- [alt-text-local-llm](https://github.com/lukeslp/alt-text-local-llm) - Generates descriptive alt text with vision models that run on your own machine.
- [squirrelscan](https://github.com/squirrelscan/squirrelscan) - Command-line website audit built for coding agents that crawls a site and runs 300+ rules across accessibility, SEO, performance and security, mapping fixes to source files; includes a GitHub Action and MCP server. Open source (MIT).

## Assistive technology

Grouped by access need. Each tool appears once, in its main group; many serve more than one.

### General

- [AFB assistive technology products](https://www.afb.org/blindness-and-low-vision/using-technology/assistive-technology-products) - American Foundation for the Blind's overview of products for blind and low-vision people, including apps, braille devices and video magnifiers.
- [ATIA assistive technology resources](https://www.atia.org/home/at-resources/) - Assistive Technology Industry Association resources, including an introduction to assistive technology, webinars and buyer's guides.
- [Christopher Reeve Foundation assistive technology guide](https://www.christopherreeve.org/wp-content/uploads/2024/05/Assistive-Technology-4-30-24-FINAL.pdf) - Guide (PDF) to assistive technology for people with paralysis, including computer access and rehabilitation resources.
- [Free and low-cost hardware for access](https://accessibledigitallearning.org/resource/free-and-low-cost-hardware-for-access/) - Guide to inexpensive hardware that improves access to digital learning.
- [Hardware and hardware-software assistive devices](https://pressbooks.ulib.csuohio.edu/accessibility/chapter/chapter-1-11-hardware-and-hardware-software-assistive-devices/) - Cleveland State University chapter on specialized keyboards, mice, switches and other hardware.
- [Michigan assistive technology guidelines for teachers of students who are blind or low vision](https://rblv.org/assistive-technology-guidelines) - Guidelines on assistive technology, data collection, IEP development and instruction for pre-K to 12 students.
- [Microsoft Accessibility](https://www.microsoft.com/en-us/accessibility) - Microsoft's hub for the accessibility features in Windows, Office, Xbox and other products.
- [Types of assistive technology](https://dap.berkeley.edu/web-a11y-basics/types-assistive-technology) - UC Berkeley guide to assistive technology categories, including screen readers, magnifiers and alternative input.
- [University of Michigan assistive technology resources](https://ssd.umich.edu/article/assistive-technology-resources) - List of free and paid assistive technology, grouped by need.
- [WHO: assistive technology](https://www.who.int/news-room/fact-sheets/detail/assistive-technology) - World Health Organization fact sheet on assistive technology, who needs it and how many people lack access.

### Screen readers

- [JAWS](https://www.freedomscientific.com/products/software/jaws/) - Freedom Scientific's commercial screen reader for Windows, with braille support and scripting.
- [Narrator](https://support.microsoft.com/en-us/windows/chapter-1-introducing-narrator-7fe8fd72-541f-4536-7658-bfc37ddaf9c6) - Windows' built-in screen reader, with natural voices and braille support in Windows 11.
- [NVDA](https://www.nvaccess.org/) - Free, open-source screen reader for Windows from NV Access, with speech and braille output; version 2026.2 added a built-in magnifier.
- [Orca](https://gitlab.gnome.org/GNOME/orca) - Free, open-source screen reader for the GNOME desktop on Linux, with speech and braille output.
- [TalkBack](https://support.google.com/accessibility/android/answer/6283677) - Android's built-in screen reader, with braille display support and Gemini descriptions of unlabeled images and screens.
- [VoiceOver](https://www.apple.com/accessibility/features/?vision) - Apple's built-in screen reader for macOS, iOS, iPadOS, watchOS and tvOS; Braille Access in iOS 26 and macOS 26 turns a connected braille display into a note taker.

### Braille

- [AFB: refreshable braille displays](https://www.afb.org/blindness-and-low-vision/using-technology/assistive-technology-products/refreshable-braille) - American Foundation for the Blind's explainer on refreshable braille displays and how they work with screen readers.
- [BrailleNote Evolve](https://www.humanware.com/support/braillenote-evolve/) - HumanWare's braille note taker running Windows 11 with the KeySoft braille interface and optional JAWS; it succeeds the Android-based BrailleNote Touch Plus.
- [Brailliant BI X](https://store.humanware.com/hus/brailliant-bi-40x-braille-display.html) - HumanWare refreshable braille displays that connect to computers and phones over USB and Bluetooth.

### Low vision and magnification

- [AbilityNet: screen magnification](https://abilitynet.org.uk/factsheets/screen-magnification) - Fact sheet explaining how screen magnification works, with options for each platform.
- [American Academy of Ophthalmology: low vision assistive devices](https://www.aao.org/eye-health/diseases/low-vision-assistive-devices) - Overview of low vision aids, from magnifiers and large print to talking devices.
- [Android Magnification](https://support.google.com/accessibility/android/answer/6006949) - Built-in magnification gestures for Android.
- [Android vision accessibility](https://www.android.com/accessibility/vision/) - Overview of Android's features for blind and low-vision users.
- [CNIB: magnification](https://www.cnib.ca/en/magnification) - CNIB's guide to screen magnification for people with low vision.
- [Large Print Maker](https://largeprintmaker.com/) - Free browser tool that turns any pasted text, or a ready-made template, into printable large-print PDFs at 18, 24, or 28 point, following APH large-print guidelines. Includes calendars, word searches, score sheets, and hymn sheets; runs entirely in the browser, no signup.
- [Macular Society Low Vision Aids](https://www.macularsociety.org/support/daily-life/low-vision-aids/) - UK charity's guide to low vision aids, including magnifiers, tablets and phones.
- [Magnifier (Apple)](https://support.apple.com/guide/iphone/magnify-or-describe-things-around-you-iphe867dc99c/26/ios/26) - Built-in app that magnifies and describes things around you using the camera, on iPhone and iPad and, since macOS 26, on Mac.
- [Microsoft accessibility tools for vision](https://support.microsoft.com/en-us/topic/accessibility-tools-for-vision-b3c57606-e0af-46d2-97b4-fa6b5fba4fa1) - Overview of vision-related accessibility features in Windows and Microsoft 365.
- [SuperNova](https://yourdolphin.com/SuperNova) - Dolphin's screen magnifier and screen reader for Windows.
- [Windows contrast themes](https://support.microsoft.com/en-us/windows/turn-high-contrast-mode-on-or-off-in-windows-909e9d89-a0f9-a3a9-b993-7a6dcee85025) - Built-in high contrast color themes for Windows.
- [Windows Magnifier](https://support.microsoft.com/en-us/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198) - Built-in screen magnifier for Windows.
- [Zoom (macOS)](https://support.apple.com/guide/mac-help/change-zoom-advanced-options-accessibility-mh35715/mac) - Built-in screen magnification for macOS.
- [ZoomText](https://www.freedomscientific.com/products/software/zoomtext/) - Freedom Scientific's screen magnifier and reader for Windows.

### Color vision

- [Color Blind Tests](https://colorblindtests.net/) - Free browser-based color vision screening with Ishihara plate and Farnsworth D-15 tests, in several languages and with no signup. Online screening is not a medical diagnosis.
- [Colorblindness Test](https://whatcoloristhis.one/test/) - Free color vision screening with 14 original plates based on Ishihara and HRR methods, validated with the Viénot-Brettel-Mollon dichromacy model. [Open source](https://github.com/lukeslp/color-vision-plates) for web, iOS and Android.
- [What Color Is This?](https://whatcoloristhis.one/) - Point a camera at a color to get its name, details and close matches, with colorblind-safe palettes and simulation. Free on the web, iPhone, iPad and Android.

### Vision apps and wearables

Several of these use AI to describe scenes and read text; descriptions can be wrong, so treat them as a guide.

- [Aira](https://aira.io/) - On-demand visual interpreting by trained human agents, plus Access AI, a free image description chat whose answers a human agent can check.
- [AliExpress Photo Describer](https://onefindme.com/describe/) - Free web tool for blind shoppers that describes AliExpress product photos in 13 languages, including visible text, item counts and differences from the listing title. Descriptions can be inaccurate.
- [Be My Eyes](https://www.bemyeyes.com/) - Free app that connects blind and low-vision people with sighted volunteers by video, with AI image descriptions (Be My AI) and hands-free calls on Ray-Ban Meta glasses.
- [BlindAssist](https://github.com/violetljj/blind-assist) - An open-source Android research prototype for on-device assistive perception with accessible speech and vibration feedback, reproducible checks, and documented safety limitations.
- [Envision](https://www.letsenvision.com/) - App that reads text aloud and describes scenes for blind and low-vision people; the company also makes Ally, a voice-first AI assistant.
- [Envision smart glasses](https://www.letsenvision.com/glasses/home) - Camera glasses that read text, describe scenes and recognize people, available as Envision Glasses and the lower-cost Ally Solos glasses.
- [Lookout](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.reveal) - Free Google app for Android that reads text and documents, identifies objects, currency and food labels, and answers questions about images using Gemini.
- [OrCam MyEye](https://www.orcam.com/en-us/home) - Small camera that clips to glasses and reads text and recognizes faces, products and banknotes offline; OrCam scaled back its vision business in 2024, so check local support before buying.
- [PulseTime](https://apps.repebble.com/1624684ac5dd46ac85eee2a6) - Haptic clock for Pebble, Wear OS, and Garmin that tells the time through vibration patterns, with lessons for learning the rhythm and large high-contrast digits for anyone who can use them. Built for a blind friend; open source (MIT).
- [Seeing AI](https://www.seeingai.com/) - Free Microsoft talking-camera app for iOS and Android that reads text and documents, describes scenes and photos with generative AI, and identifies products and currency.

### Reading and print access

- [OneStep Reader](https://sensotec.be/en/?p=34752) - Mobile OCR app, formerly KNFB Reader, that photographs printed text and reads it aloud or sends it to a braille display; now developed by Sensotec.
- [Voice Dream Reader](https://www.voicedream.com/) - Text-to-speech reader for iPhone and iPad that reads documents, ebooks, web articles and scanned text aloud with synchronized highlighting; subscription for new users.

### Deaf and hard of hearing

- [Center for Hearing Access](https://centerforhearingaccess.org/) - Advocacy group that explains hearing loops, telecoils and Auracast broadcast audio, and helps people request assistive listening under the ADA.
- [Diglo](https://www.diglo.com/) - U.S. retailer of products for deaf and hard-of-hearing people, such as vibrating alarm clocks, flashing doorbells, amplified phones and assistive listening devices (formerly Harris Communications).
- [Live Caption (Android)](https://support.google.com/accessibility/android/answer/9350862?hl=en) - Captions any audio playing on an Android phone, including videos, podcasts and calls, on the device; Expressive Captions adds cues for tone, volume and sounds.
- [NIDCD: assistive devices](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders) - U.S. National Institute on Deafness and Other Communication Disorders' guide to devices for people with hearing, voice, speech or language disorders.
- [NotchLive](https://notchlive.app/) - macOS app that captions system and microphone audio on the device, across meetings, videos and in-person conversation; live captions are free.
- [Otter.ai](https://otter.ai/) - Automated transcription service for meetings and conversations.
- [Phonak Roger](https://www.phonak.com/en-int/hearing-devices/microphones) - Wireless microphone technology that improves speech understanding in noise and over distance for people with hearing loss.
- [Sorenson](https://sorenson.com/) - Video relay service and communication products for deaf people.
- [Telecommunications Relay Service (TRS)](https://www.fcc.gov/consumers/guides/telecommunications-relay-service-trs) - FCC guide to relay services, including TTY, that let deaf, hard-of-hearing and speech-disabled people make phone calls.
- [Trippi (OSS)](https://github.com/skrylkovs/trippi-oss) - Open-source, MIT-licensed Chrome extension that captures a browser tab's audio and shows live translated captions over Google Meet, Zoom, and Microsoft Teams calls, using Deepgram for speech recognition and DeepL for translation.
- [Video Relay Service (VRS)](https://www.fcc.gov/consumers/guides/video-relay-services) - FCC guide to video relay services, which connect deaf sign language users with hearing people through interpreters.

### Sign languages

- [ASL Browser](https://commtechlab.msu.edu/sites/aslweb/index.html) - Michigan State University's free online American Sign Language dictionary with short video clips of signs.

### Motor and alternative input

- [AbleNet switches](https://www.ablenetinc.com/switches/) - Switches activated by buttons, joysticks, sip-and-puff and other methods for people with limited movement.
- [Enabling Devices](https://enablingdevices.com/shop/) - Store for adaptive switches, toys and communication devices.
- [EyeControl](https://www.eyecontrol.co.il/) - Wearable eye-tracking device that lets people with ALS and locked-in syndrome communicate with eye movements, without a screen.
- [Glassouse](https://glassouse.com/) - Hands-free mouse alternative worn like glasses, controlled by head movements and bites, designed for people with limited hand mobility.
- [Leviate](https://github.com/vladpereverzyev/leviate) - Controls the mouse and 3D programs with mid-air hand gestures through a webcam or a phone, without touching the mouse. Open source.
- [Microsoft Adaptive Accessories](https://www.microsoft.com/en-us/store/b/accessible-adaptive-devices-accessories) - Microsoft's customizable adaptive mouse, hub and buttons for people with limited mobility.
- [Mouse Keys (Windows)](https://support.microsoft.com/en-us/windows/make-your-mouse-keyboard-and-other-input-devices-easier-to-use-10733da7-fa82-88be-0672-f123d4b3dcfe) - Windows feature for moving the pointer with the numeric keypad.
- [OptiKey](https://github.com/OptiKey/OptiKey) - Free, open-source on-screen keyboard and mouse for Windows, controlled by eye tracking.
- [Perkins: introduction to adaptive switches](https://www.perkins.org/resource/introduction-7-common-adaptive-switches/) - Guide to seven common types of adaptive switch and how they are used.
- [Switch Access (Android)](https://support.google.com/accessibility/android/answer/6122836?hl=en) - Built-in Android feature for controlling a device with switches or the front camera.
- [Tobii Dynavox](https://www.tobiidynavox.com/) - Eye trackers and eye-gaze communication devices for computer control and AAC.
- [WebAIM: motor disabilities and assistive technology](https://webaim.org/articles/motor/assistive) - Overview of assistive technology used by people with motor disabilities, from keyboard alternatives to eye tracking.

### Voice control and dictation

- [AI Dictation](https://github.com/writingmate/aidictation) - Cross-platform voice typing with offline recognition on supported devices and optional cloud transcription. It may reduce keyboard use in standard text fields; operating-system and application restrictions apply.
- [DailyVox](https://getdailyvox.com) - Voice-first diary for iPhone. On-device speech recognition works fully offline — speak instead of type. Automatic mood tracking uses sentiment analysis. No data collection. ([App Store](https://apps.apple.com/app/id6760454642))
- [Talon Voice](https://talonvoice.com/) - Hands-free computer control with voice, noise and eye tracking, popular with programmers who have RSI.
- [Vocalinux](https://github.com/VocaHQ/vocalinux) - Free offline voice dictation for Linux desktops. Local speech recognition (whisper.cpp, Whisper, or VOSK) types into any app on X11 and Wayland; useful for RSI, limited typing, and privacy-sensitive workflows.
- [Voice Access (Android)](https://support.google.com/accessibility/android/answer/6151843) - Built-in Android app for controlling a device by voice.
- [Voice Access (Windows)](https://support.microsoft.com/en-us/topic/get-started-with-voice-access-bd2aa2dc-46c2-486c-93ae-3d75f7d053a4) - Built-in Windows 11 feature for controlling the computer and dictating text by voice, offline; it replaces Windows Speech Recognition.
- [Voice Control (Apple)](https://support.apple.com/guide/mac-help/use-voice-control-mchl1a04f324/mac) - Built-in voice control for macOS, iOS and iPadOS.
- [Voicefield](https://github.com/tatargabor/voicefield) - React library that turns a phone into a wireless microphone for web forms: scan a QR code and speech recognition runs on the phone, sending only text to the desktop. Useful for hands-free form input. Open source (MIT).
- [YazSes](https://github.com/MSKazemi/yazses) - Free, open-source offline dictation for Linux, macOS, and Windows. Hold-to-talk rather than always-listening, so the speaker decides when recognition starts and stops; includes a dysfluency-friendly mode intended for stuttered and dysarthric speech. Runs entirely on-device, useful for RSI and privacy-sensitive work.

### Speech and AAC

Augmentative and alternative communication (AAC) apps, devices and resources, voice banking, and tools for people with speech disabilities.

- [AAC — Low-Cost Voice & Gesture Recognition](https://github.com/wilmerjoseperezorozco-dev/aac-voz-gestos-bajo-costo) - Research prototype that trains a personal voice and gesture classifier from as few as 10 samples per word, for people with motor speech disorders such as dysarthria and apraxia. Works offline with no special hardware. Open source (MIT).
- [AAC Board AI](https://github.com/shayc/aac-board-ai) - Free, open-source AAC web app for symbol-based communication, with keyboard navigation, OBF/OBZ imports, multilingual interfaces, offline core features after initial load, and optional browser-provided on-device AI.
- [AAC Institute](https://aacinstitute.org/) - Evidence-based information on AAC for clinical practice, research and education.
- [AAC Language Lab](https://aaclanguagelab.com) - PRC-Saltillo's language development resources for AAC users and support teams.
- [Accent AAC Devices](https://prc-saltillo.com/device/accent) - PRC-Saltillo speech generating devices with touch, switch, head and eye tracking access, including Unity and LAMP Words for Life vocabularies.
- [ARASAAC](https://arasaac.org/) - Aragonese portal of AAC with a large library of free pictograms, software and resources for making AAC materials.
- [ASHA: augmentative and alternative communication](https://www.asha.org/practice-portal/professional-issues/augmentative-and-alternative-communication/) - American Speech-Language-Hearing Association practice portal on AAC assessment and intervention.
- [AssistiveWare Learn AAC](https://www.assistiveware.com/learn-aac) - AssistiveWare's free articles and guides for families and professionals supporting AAC users.
- [AssistiveWare Proloquo](https://www.assistiveware.com/products/proloquo) - Symbol-based AAC app for iOS from AssistiveWare.
- [Boardmaker](https://us.tobiidynavox.com/pages/boardmaker) - Tobii Dynavox software for designing and printing symbol-based communication materials.
- [Cboard](https://www.cboard.io/) - Free, open-source symbol-based communication board for the web and mobile.
- [Cognixion Axon-R](https://www.cognixion.com/) - Non-invasive brain-computer interface headset combining EEG with augmented reality so people with ALS and other severe motor impairments can select words; a research device in clinical trials, not cleared for clinical use.
- [Communicator](https://ecksquad.github.io/communicator2/) - Free browser-based gesture-to-speech app: the camera turns head movements, blinks, and hand gestures into customizable spoken phrases, or plays recordings of the user's own voice. All processing on-device, no install or account required, available in seven languages. Open source (MIT).
- [CoughDrop](https://www.mycoughdrop.com/) - Cloud-based AAC app that syncs communication boards across devices; the source code is open (AGPL-3.0).
- [Grid 3](https://thinksmartbox.com/grid/) - Smartbox AAC software for Windows with symbol and text communication, environmental control and computer access by touch, eye gaze or switch. Free trial, then paid.
- [Grid Pad](https://thinksmartbox.com/grid-pad-overview/) - Dedicated communication aid from Smartbox with touch, switch and eye gaze access, running Grid 3.
- [ISAAC](https://isaac-online.org/english/home/) - International Society for Augmentative and Alternative Communication, a global organization for people with complex communication needs.
- [Jabbla Mind Express](https://www.jabbla.com/en/mind-express/) - AAC software with symbol and text communication, eye gaze control and environmental control.
- [JAN: voice amplification](https://askjan.org/solutions/Voice-Amplification.cfm) - Job Accommodation Network guide to voice amplifiers for people with weak or tiring voices.
- [LAMP Words for Life](https://lampwflapp.com/) - AAC app built on a motor planning approach to language. Subscription.
- [NovaChat](https://prc-saltillo.com/device/novachat) - PRC-Saltillo speech generating device with vocabulary options, word prediction and customizable layouts.
- [OpenAAC](https://www.openaac.org) - Community-driven initiative for free, open standards and tools in AAC.
- [PRC-Saltillo resources](https://www.prc-saltillo.com/caregivers) - Resource library for families and caregivers of AAC users.
- [Proloquo2Go](https://www.assistiveware.com/products/proloquo2go) - Symbol-supported AAC app for iOS from AssistiveWare, with customizable vocabulary and natural voices.
- [Proloquo4Text](https://www.assistiveware.com/products/proloquo4text) - Text-based AAC app for iOS from AssistiveWare, with word prediction and natural voices. One-time purchase.
- [Shirley Ryan AbilityLab: AAC resources](https://www.sralab.org/lifecenter/resources/listing-augmentative-and-alternative-communication) - Listing of AAC blogs, websites and books.
- [TD Snap](https://us.tobiidynavox.com/pages/td-snap) - Tobii Dynavox AAC app with Picture Communication Symbols, page sets such as Core First and Motor Plan, and touch, eye gaze or switch access. Free trial, then subscription.
- [Tobii Dynavox I-Series](https://us.tobiidynavox.com/pages/td-i-series) - Eye-tracking speech generating devices for people with ALS, cerebral palsy and other conditions that affect speech and movement.
- [Voiceitt](https://www.voiceitt.com/) - Speech recognition trained on each user's own speech, so people with dysarthria and other non-standard speech can dictate text and control smart devices. Paid subscription.
- [Widgit symbols](https://www.widgit.com/products/inprint/) - Widgit's symbol set and InPrint software for creating symbol-supported materials.

### Cognitive and learning

- [Alzheimer's Society: memory loss](https://www.alzheimers.org.uk/about-dementia/stages-and-symptoms/dementia-symptoms/memory-loss) - Practical strategies and aids for living with memory loss.
- [Kurzweil 3000](https://www.kurzweiledu.com/) - Reading and writing support software for students with learning disabilities, on the web, Windows, Mac and iPad.
- [LDRFA assistive technology tools](https://www.ldrfa.org/assistive-technology-tools/) - Learning Disabilities Resources Foundation Action's list of assistive tools and apps for people with learning disabilities.
- [OpenDyslexic](https://opendyslexic.org/) - Free typeface designed to increase readability for readers with dyslexia, with unique letter shapes to prevent confusion.
- [ReadSpeaker](https://www.readspeaker.com/) - Text-to-speech products for reading support on websites, documents and learning platforms.
- [ReCalibri](https://lukesteuber.com/downloads/recalibri/) - Free browser extension that swaps Times New Roman for more readable fonts, including Calibri, Open Sans and OpenDyslexic. [Source](https://github.com/lukeslp/recalibri).
- [Safari Reader](https://support.apple.com/guide/safari/hide-distractions-when-reading-sfri32632/mac) - Safari's reading view that removes ads, navigation and other distractions from articles.
- [SimpleMind](https://simplemind.eu/) - Mind-mapping app for organizing thoughts and ideas visually.

### Neurodiversity

- [Autism accessibility guidelines](https://hassellinclusion.com/blog/autism-accessibility-guidelines-resource/) - Hassell Inclusion's design guidance for sensory and other access needs of autistic people.
- [Autism crisis communication cards](https://www.maskedbutaware.nl/en/tools/crisis-mode) - Free, phone-friendly communication support for moments when sensory overload makes speaking difficult. Available in English and Dutch without tracking; printable templates are [open source](https://github.com/maskedbutaware/autism-crisis-communication-cards).
- [Carol Gray Social Stories](https://carolgraysocialstories.com/) - Short structured stories that describe social situations, developed for autistic people.
- [Dopastep](https://dopastep.com/) - Body doubling in live focus rooms: break a task into small steps, then work alongside other people in synced focus and break cycles. No camera, chat or booking.
- [Focusmate](https://www.focusmate.com/) - Virtual coworking platform that pairs users for live, focused work sessions using body doubling.
- [Goblin.tools](https://goblin.tools/) - Collection of small, single-task tools built on a large language model for people who find certain tasks overwhelming, including task breakdown and tone checking. Free on the web; outputs can be wrong.
- [Structured](https://structured.app/) - Visual day planner app with a timeline-based interface, particularly helpful for individuals with time blindness.
- [Time Timer](https://www.timetimer.com/) - Visual countdown timers that show time passing, helpful for time blindness.
- [ZeroLoginFocus](https://zerologinfocus.com/) - Free ADHD focus tools that run in the browser with no login or signup, including a task breaker, visual timer, dopamine menu and voice brain dump. Your data stays on the device, apart from anonymous aggregate analytics and the browser's own speech recognition service used by the voice tool.

## Gaming

- [AbleGamers Charity](https://ablegamers.org/) - Nonprofit that creates opportunities for players with disabilities through grants, custom setups, and the Player Panels program.
- [Can I Play That?](https://caniplaythat.com/) - Disability-led game accessibility review site, covering new releases with detailed breakdowns of accessibility features.
- [Game Accessibility Guidelines](https://gameaccessibilityguidelines.com/) - Straightforward reference for inclusive game design, with actionable guidance for developers.
- [Makers Making Change](https://www.makersmakingchange.com/) - Open-source assistive switches, joysticks, and accessories designed to work with adaptive controllers, offering affordable and customizable options.
- [Microsoft Accessible Games Initiative Tags](https://developer.microsoft.com/en-us/games/articles/2025/07/accessible-games-initiative-tags-now-available/) - Accessibility feature tags for Xbox games, letting players know before purchase what accessibility features a game includes.
- [PlayStation Access Controller](https://www.playstation.com/en-us/accessories/access-controller/) - A highly customizable controller kit for the PS5, allowing gamers with disabilities to create personalized controller layouts.
- [Xbox Adaptive Controller](https://www.xbox.com/en-US/accessories/controllers/xbox-adaptive-controller) - Microsoft's controller for Xbox and PC with large programmable buttons and ports for external switches.
- [Xbox Adaptive Joystick](https://news.xbox.com/en-us/2024/10/02/xbox-gaming-disability-community-accessibility-2024/) - One-handed wired controller from Xbox, released in 2025, usable on its own or with the Xbox Adaptive Controller.

## Built environment and maps

Accessible buildings, housing, public spaces and mapping.

- [ADA Accessibility Standards (Access Board)](https://www.access-board.gov/ada/) - U.S. Access Board's ADA accessibility guidelines and standards for buildings and facilities, with technical guides.
- [ADA Standards for Accessible Design](https://www.ada.gov/law-and-regs/design-standards/) - Department of Justice standards for making buildings and facilities physically accessible.
- [City of Vaughan Inclusive Design Standards (PDF)](https://www.vaughan.ca/sites/default/files/Vaughan%20IDS_Final%20%28Aug%2010%202020%29.pdf?file-verison=1680739200052) - City of Vaughan's inclusive design standards for municipal buildings and spaces (PDF).
- [Inclusive Design Standards](https://thekelsey.org/learn-center/design-standards/) - The Kelsey's standards for inclusive housing design, with more than 300 elements covering design and operations.
- [The principles of inclusive design](https://www.designcouncil.org.uk/fileadmin/uploads/dc/Documents/the-principles-of-inclusive-design.pdf) - Design Council and CABE guide (PDF) to inclusive design principles for buildings and places.

## Learning

### Courses and training

- [A11y Collective](https://www.a11y-collective.com/) - Online web accessibility courses for designers, developers and content creators, with a free introductory course.
- [Accessible and inclusive design patterns](https://www.ixdf.org/master-classes/accessible-and-inclusive-design-patterns) - Interaction Design Foundation master class by Vitaly Friedman on design guidelines and patterns for inclusive, accessible design.
- [Accessible Campus educator's toolkit](https://accessiblecampus.ca/tools-resources/educators-tool-kit/) - Ontario guidelines and tips for making courses and teaching more accessible.
- [Deque University](https://dequeuniversity.com/) - Deque's online courses on web accessibility, WCAG, ARIA and accessible documents. Free for people with disabilities.
- [Digital Accessibility Foundations](https://www.w3.org/WAI/courses/foundations-course/) - Free, self-paced W3C WAI course on edX for technical and non-technical learners, with an optional paid certificate.
- [eCampusOntario digital accessibility resources](https://accessibility.ecampusontario.ca/accessibility/resources/) - Repository of digital accessibility resources for educators.
- [Section508.gov accessibility training](https://www.section508.gov/training/) - Free U.S. government courses, tools and events on Section 508, procurement, testing and accessible content.
- [WebAIM Accessibility Training](https://webaim.org/services/training/) - Live online training from WebAIM on accessibility principles and techniques.
- [web.dev: Learn Accessibility](https://web.dev/learn/accessibility) - Free course by Carie Fisher on Google's web.dev covering ARIA, structure, focus, color, forms, media and testing, with a short assessment per module.

### Certification

- [IAAP CPACC](https://www.accessibilityassociation.org/cpacc) - Certified Professional in Accessibility Core Competencies, IAAP's foundational certification covering disabilities, universal design, standards and laws. IAAP also offers WAS (web) and ADS (documents).

### Books

- [Accessibility for Everyone by Laura Kalbag](https://accessibilityforeveryone.site/) - Laura Kalbag (A Book Apart, 2017). Introduction to disability, laws and guidelines, and how to plan, evaluate and test accessible design.
- [Inclusive Design Patterns](https://shop.smashingmagazine.com/printed-books/inclusive-front-end-design-patterns/) - Heydon Pickering (Smashing Media, 2016). Front-end techniques for building accessible, inclusive interfaces from the start.

### Podcasts and video

- [Accessibility Craft Podcast](https://accessibilitycraft.com/) - Podcast on web accessibility, including recordings from the WordPress Accessibility Meetup.
- [Carrie on Accessibility](https://www.youtube.com/@carrieonaccessibility) - YouTube channel with tutorials and discussion of accessibility from a blind user's perspective.

## Community

### Disability organizations

Organizations run by, or representing, disabled people.

- [AbilityNet](https://abilitynet.org.uk/) - UK charity that helps disabled people of all ages use technology.
- [Accessible Community](https://accessiblecommunity.org/) - Nonprofit providing tools and resources for a more inclusive world for people with disabilities.
- [American Association of People with Disabilities](https://www.aapd.com/) - National disability-led, cross-disability rights organization in the United States.
- [American Foundation for the Blind](https://www.afb.org/) - U.S. nonprofit with research, policy work and resources on blindness and low vision.
- [The Arc](https://thearc.org/) - Promotes and protects the human rights of people with intellectual and developmental disabilities.
- [Bazelon Center: disability rights organizations](https://www.bazelon.org/resource-library/disability-rights-organizations/) - Directory of disability rights organizations.
- [Canadian Accessibility Network](https://www.can-rca.ca/communities-of-practice/) - Canadian network that brings members together to drive accessibility forward.
- [Disability Rights Education & Defense Fund](https://dredf.org/) - National disability civil rights law and policy center directed by disabled people.
- [G3ict](https://g3ict.org/) - Global Initiative for Inclusive ICTs, an advocacy initiative launched with the UN to promote digital accessibility.
- [Knowbility](https://knowbility.org/) - Nonprofit working to make technology accessible to people with disabilities, through training, testing and events.
- [National Association of the Deaf](https://www.nad.org/) - Civil rights organization of, by and for deaf and hard-of-hearing people in the United States.
- [National Disability Rights Network](https://www.ndrn.org/) - Membership organization for the Protection and Advocacy Systems and Client Assistance Programs in each U.S. state and territory.
- [National Federation of the Blind](https://nfb.org/) - Largest organization of blind people in the United States.
- [National Organization on Disability](https://nod.org/) - Works with companies to assess and improve disability inclusion practices.
- [RNIB](https://www.rnib.org.uk/) - UK charity supporting blind and partially sighted people.
- [Sightsavers](https://www.sightsavers.org/) - International organization working to eliminate avoidable blindness and advance disability rights.
- [Vision Australia](https://www.visionaustralia.org/) - Australia's largest provider of blindness and low vision services.
- [World Blind Union](https://wbu.ngo/) - International organization representing blind and partially sighted people.

### Professional communities

- [AppleVis](https://www.applevis.com/) - Community site for blind and low-vision users of Apple products, with app reviews, guides and forums.
- [International Association of Accessibility Professionals](https://www.accessibilityassociation.org/) - Professional association for accessibility practitioners, with certifications, chapters and events.
- [WebAIM discussion list](https://webaim.org/discussion/) - Long-running email list for discussing web accessibility.

### Events and conferences

- [Accessing Higher Ground](https://accessinghigherground.org/) - Conference on accessible media, universal design and assistive technology in higher education.
- [AHEAD Conference](https://www.ahead.org/events-programming/conferences) - Annual conference of the Association on Higher Education And Disability.
- [The AIDC Accessible and Inclusive Design Conference](https://www.theaidc.com/) - Virtual conference on accessible and inclusive learning environments.
- [ATIA Conference](https://www.atia.org/conference/) - Assistive Technology Industry Association's annual conference.
- [axe-con](https://www.deque.com/axe-con/) - Free virtual digital accessibility conference from Deque for beginners through advanced practitioners.
- [Beyond Limits](https://beyondlimitscanada.ca/) - Annual Canadian conference on diversity and accessibility.
- [Closing The Gap Assistive Technology Conference](https://www.closingthegap.com/) - Assistive technology conference and professional development platform.
- [CSUN Assistive Technology Conference](https://www.csun.edu/cod/conference) - Annual conference on assistive technology research and practice, held by California State University, Northridge.
- [DigitalA11Y: accessibility conferences and events](https://www.digitala11y.com/accessibility-conferences-events/) - Curated list of accessibility conferences, events and meetups.
- [Disability:IN Global Conference & Expo](https://disabilityin.org/conference) - Global corporate disability inclusion conference.
- [Global Accessibility Awareness Day](https://accessibility.day/) - Annual day, on the third Thursday of May, for talking, thinking and learning about digital access and inclusion.
- [IAAP accessibility conferences](https://www.accessibilityassociation.org/event-category/a1AIV00000IFhyn2AD/accessibility-conferences) - IAAP's list of accessibility conferences.
- [Inclusive Design 24](https://inclusivedesign24.org/) - Free 24-hour online event on inclusive design, with past talks available to watch.
- [M-Enabling Summit](https://www.m-enabling.com/) - Conference on accessible and assistive technology for older adults and users of all abilities.
- [Web for All (W4A)](https://www.w4a.info/) - Annual research conference on web accessibility.

## Research and data

### Journals and proceedings

- [ACM Transactions on Accessible Computing](https://dl.acm.org/journal/taccess) - ACM journal on computing and accessibility research.
- [arXiv accessibility research report](https://info.arxiv.org/about/accessibility_research_report.html) - arXiv's report on accessibility barriers in research papers and approaches to making scientific content accessible.
- [ASSETS proceedings](https://dl.acm.org/conference/assets) - Proceedings of the ACM SIGACCESS Conference on Computers and Accessibility.
- [Assistive Technology Outcomes and Benefits](https://www.atia.org/atobcurrentvolume/) - Journal focused on the outcomes and benefits of assistive technologies for individuals with disabilities.
- [Disability and Rehabilitation: Assistive Technology](https://www.tandfonline.com/journals/iidt20) - Journal focusing on the application of technology to improve individual functioning and quality of life.
- [Disability Studies Quarterly](https://dsq-sds.org/) - An academic journal on disability studies.
- [International Journal of Human–Computer Interaction](https://www.tandfonline.com/toc/hihc20/current) - Research journal on human-computer interaction, including accessibility.
- [Journal of Accessibility and Design for All](https://www.jacces.org/index.php/jacces) - Multidisciplinary journal that publishes theoretical and empirical research on accessibility.
- [Journal of Enabling Technologies](https://www.emerald.com/insight/publication/issn/2398-6263) - Peer-reviewed journal formerly titled *Journal of Assistive Technologies*, covering technologies that support independence and participation.
- [Journal of Postsecondary Education and Disability](https://www.ahead.org/professional-resources/publications/jped) - Peer-reviewed journal on disabled college students and disability services in higher education.
- [Journal of Special Education Technology](https://journals.sagepub.com/home/jst) - Journal focusing on technology used in special education.
- [Journal on Technology & Persons with Disabilities](https://scholarworks.calstate.edu/collections/vh53x372b) - Journal focusing on both the theoretical and practical aspects of using technology to support persons with disabilities.
- [Review of Disability Studies](https://rdsjournal.org/index.php/journal) - A peer-reviewed, open-access academic journal providing an international forum for disability studies.
- [ScienceOpen Journal of Disability Research](https://www.scienceopen.com/collection/e1e3fd98-e818-47dc-a396-69009efa34e7) - A diamond open access journal on disability research.
- [Taylor & Francis Online Disability & Society](https://www.tandfonline.com/journals/cdso20) - A disability studies journal focusing on human rights, discrimination, and policy.
- [Technology and Disability](https://content.iospress.com/journals/technology-and-disability) - Journal reporting on the use of technology in the field of disability and rehabilitation.
- [Universal Access in the Information Society](https://link.springer.com/journal/10209) - International journal on accessible technology and universal access.

### Data and statistics

- [Accessibility Atlas](https://github.com/lukeslp/accessibility-atlas-dataset) - A collection of 62 datasets on disability demographics, employment, assistive technology usage, and web accessibility compliance.
- [Annual Disability Statistics Collection](https://www.researchondisability.org/annual-disability-statistics-collection) - A collection of tools and reports offering over 16 years of disability statistics.
- [Disability and Health Data System (DHDS)](https://dhds.cdc.gov/) - State-level data on adults with disabilities from the CDC.
- [EU Accessibility Mapping](https://github.com/sergordienko/eu-accessibility-mapping) - Open MIT dataset (JSON + CSV) crosswalking every WCAG 2.x A/AA success criterion to EN 301 549, the EU Accessibility Act, and Germany's BFSG, documenting the harmonized-standard chain that grants presumption of conformity.
- [Web Almanac: accessibility](https://almanac.httparchive.org/en/2025/accessibility) - HTTP Archive's annual report on the state of the web, with a chapter measuring accessibility across millions of sites.
- [WebAIM Screen Reader User Survey](https://webaim.org/projects/screenreadersurvey10/) - Results of WebAIM's survey of screen reader users' preferences and habits; the tenth survey ran from December 2023 to January 2024.
## Contributing

Contributions are welcome: new resources, broken-link reports, better descriptions and ideas for organizing the list. Please read the [contribution guidelines](CONTRIBUTING.md) first, check the resource isn't already listed, and add it to the section where people would look for it.

Maintained by Luke Steuber ([dr.eamer.dev](https://dr.eamer.dev)). Released under [CC0 1.0](LICENSE).
