# Awesome Accessibility [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of resources, tools, guidelines and communities for building accessible, inclusive digital experiences.

[![License: CC0](https://img.shields.io/badge/license-CC0-green.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

Find guidance, code and assistive technology by task or access need. New additions are free resources or open-source projects; entries identify free-tier limits, eligibility and paid services where relevant. Existing commercial references remain for context.

**Quick paths:** [Try free courses](#courses-and-training) · [Build a component](#component-libraries-and-design-systems) · [Add checks to CI](#testing-engines-and-ci) · [Explore AI tools](#ai-tools-for-builders) · [Find AAC](#speech-and-aac).

Use the section index below or GitHub's outline to jump to a topic. Suggestions and corrections are welcome; see [Contributing](#contributing).

## Contents

- [Start here](#start-here)
- [Standards and guidelines](#standards-and-guidelines)
- [Laws and policy](#laws-and-policy)
- [Accessibility programs](#accessibility-programs)
- [Inclusive design](#inclusive-design)
- [Web development](#web-development)
- [Mobile and native apps](#mobile-and-native-apps)
- [Testing and auditing](#testing-and-auditing)
- [Content and media](#content-and-media)
- [AI and accessibility](#ai-and-accessibility)
- [Assistive technology](#assistive-technology)
- [Gaming](#gaming)
- [Built environment and maps](#built-environment-and-maps)
- [Learning](#learning)
- [Community](#community)
- [Research and data](#research-and-data)

## Start here

New to accessibility? These cover the basics.

- [W3C WAI resources](https://www.w3.org/WAI/resources/) - Index of the Web Accessibility Initiative's technical and educational resources, from introductions and tutorials to policy and planning guides.
- [How people with disabilities use the web](https://www.w3.org/WAI/people-use-web/tools-techniques/) - W3C overview of the tools and techniques people use to browse, from screen readers and magnifiers to voice control and reading aids.
- [The A11Y Project](https://www.a11yproject.com/) - Community-driven site with plain-language posts, a checklist and curated resources for making the web accessible.
- [WebAIM articles](https://webaim.org/articles/) - Long-running library of practical articles on web accessibility, from alt text and forms to screen reader testing.
- [MDN: Accessibility on the web](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility) - Free module in MDN's web development curriculum covering accessible HTML, CSS, JavaScript, WAI-ARIA and multimedia, with skill tests.

## Standards and guidelines

The technical standards most laws point to, and guides to reading them.

- [Accessibility Conformance Testing (ACT) Rules](https://www.w3.org/WAI/standards-guidelines/act/) - W3C format and community-written rules that describe how to test WCAG success criteria consistently, used by automated tools and manual methods alike.
- [Authoring Tool Accessibility Guidelines (ATAG) 2.0](https://www.w3.org/TR/ATAG20/) - W3C Recommendation for content management systems, editors and other authoring tools: they should be accessible to authors with disabilities and help everyone produce accessible content.
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
- [ADA Title II rule (Federal Register)](https://www.federalregister.gov/documents/2024/04/24/2024-07758/nondiscrimination-on-the-basis-of-disability-accessibility-of-web-information-and-services-of-state) - Full text of the 2024 rule adopting WCAG 2.1 Level AA for state and local government web content and mobile apps, including its exceptions.
- [ADA Title II small entity compliance guide](https://www.ada.gov/resources/small-entity-compliance-guide/) - Plain-language Department of Justice guide to who the Title II web rule covers, what it requires and how its exceptions work.
- [ADA Title II web and mobile rule](https://www.ada.gov/resources/2024-03-08-web-rule/) - Department of Justice fact sheet on the 2024 rule requiring state and local government websites and mobile apps to meet WCAG 2.1 Level AA. An April 2026 interim final rule moved the compliance dates to 26 April 2027 (populations of 50,000 or more) and 26 April 2028 (smaller governments and special districts).
- [ADA Title II web rule: first steps](https://www.ada.gov/resources/web-rule-first-steps/) - Department of Justice list of first steps for state and local governments working toward the web and mobile app requirements.
- [ADA Title III News & Insights](https://www.adatitleiii.com/) - Seyfarth Shaw blog tracking ADA Title III lawsuits, court decisions and Department of Justice actions, including yearly website accessibility lawsuit counts.
- [ADA.gov guidance on web accessibility](https://www.ada.gov/resources/web-guidance/) - Department of Justice guidance on web accessibility for state and local governments and businesses under the Americans with Disabilities Act.
- [National Federation of the Blind v. Department of Justice](https://clearinghouse.net/case/48281/) - Civil Rights Litigation Clearinghouse record of the May 2026 lawsuit challenging the DOJ and HHS deadline extensions; useful for following whether the new dates hold.
- [Revised Section 508 Standards](https://www.access-board.gov/ict/) - U.S. Access Board standards for information and communication technology that federal agencies buy, build or use; they incorporate WCAG 2.0 Level AA.
- [Section 504 compliance date extension (HHS)](https://www.federalregister.gov/documents/2026/05/11/2026-09266/extension-of-compliance-dates-for-nondiscrimination-on-the-basis-of-disability-accessibility-of-web) - May 2026 interim final rule moving web and mobile deadlines for recipients of HHS funding to 11 May 2027 (15 or more employees) and 10 May 2028 (fewer than 15).
- [Section508.gov](https://www.section508.gov/) - GSA's hub for federal IT accessibility: policy, procurement, testing methods and training.
- [Section508.gov laws and policies](https://www.section508.gov/manage/laws-and-policies/) - Summary of U.S. federal IT accessibility laws, regulations and policies.
- [Title II compliance date extension (Federal Register)](https://www.federalregister.gov/documents/2026/04/20/2026-07663/extension-of-compliance-dates-for-nondiscrimination-on-the-basis-of-disability-accessibility-of-web) - Text of the April 2026 interim final rule that moved the Title II web and mobile deadlines by one year; the WCAG 2.1 Level AA requirement is unchanged.

### Europe

- [AccessibleEU](https://accessible-eu-centre.ec.europa.eu/index_en) - The European Commission's accessibility resource centre, with guidance, training and a knowledge base on EU accessibility law.
- [Directive (EU) 2019/882](https://eur-lex.europa.eu/eli/dir/2019/882/oj) - Official text of the European Accessibility Act, the primary source behind each member state's national law.
- [EAA National Transposition by Member State](https://yakupefecaliskann.github.io/annex-site/eaa/transposition/) - The national instrument transposing the European Accessibility Act in each of the 27 EU member states, each row read from the official EUR-Lex transposition record. A business is judged against the national law rather than the directive itself.
- [EN 301 549 V4.1.1 published](https://nda.ie/news/en301549-published) - Ireland's National Disability Authority on the September 2026 publication of EN 301 549 V4.1.1, which aligns with WCAG 2.2 and maps requirements to the European Accessibility Act.
- [European Accessibility Act](https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en) - European Commission overview of the directive that has applied since 28 June 2025 to products and services such as computers, phones, e-commerce, banking and e-books.
- [Web Accessibility Directive](https://digital-strategy.ec.europa.eu/en/policies/web-accessibility) - European Commission page on the directive requiring public sector websites and apps to be accessible, with its monitoring methodology and model accessibility statement.

### United Kingdom

- [Public Sector Bodies Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/contents/made) - Text of the UK regulations requiring public sector websites and apps to meet accessibility standards and publish an accessibility statement.
- [Understanding accessibility requirements for public sector bodies](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps) - UK government guidance on the Public Sector Bodies Accessibility Regulations 2018: what must be fixed, exemptions, accessibility statements and monitoring.

### Canada

- [Accessibility Standards Canada](https://accessible.canada.ca/) - Federal agency that develops accessibility standards under the Accessible Canada Act, including Canada's adoption of EN 301 549 for ICT.
- [Accessible Canada Act](https://www.canada.ca/en/employment-social-development/programs/accessible-canada.html) - Canadian federal law working toward a barrier-free Canada by 2040, with accessibility plans required for federally regulated organizations.
- [Guidance on implementing the Standard on Web Accessibility](https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/guidance-implementing-standard-web-accessibility.html) - Treasury Board of Canada guidance for federal departments on meeting the Government of Canada's web accessibility standard.
- [Integrated Accessibility Standards (O. Reg. 191/11)](https://www.ontario.ca/laws/regulation/110191) - AODA regulation with Ontario's information and communications standard, including the exact website requirements and exceptions.
- [Ontario: how to make websites accessible](https://www.ontario.ca/page/how-make-websites-accessible) - Ontario government guidance on website requirements under the Accessibility for Ontarians with Disabilities Act (AODA).
- [WebAIM: web accessibility laws in Canada](https://webaim.org/articles/laws/canada/) - Summary of federal and provincial accessibility laws that apply to websites in Canada.

### International and other regions

- [Disability Discrimination Act 1992 (Australia)](https://www.legislation.gov.au/C2004A04426/latest/text) - Australian federal law prohibiting disability discrimination, including in goods, services and online information.
- [@holmdigital/standards](https://www.npmjs.com/package/@holmdigital/standards) - Machine-readable regulatory database mapping WCAG to EN 301 549 and national law across 17 jurisdictions, with typed exports and enforcement-body lookups. Open source (MIT).
- [Lei Brasileira de Inclusão (Brazil)](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm) - Brazil's Inclusion of Persons with Disabilities law; Article 63 requires accessible websites for companies based in Brazil and for government bodies. In Portuguese.
- [UN Convention on the Rights of Persons with Disabilities](https://social.desa.un.org/issues/disability/crpd/convention-on-the-rights-of-persons-with-disabilities-crpd) - International human rights treaty whose Article 9 commits states to accessibility, including of information and communications technology.
- [W3C web accessibility laws and policies](https://www.w3.org/WAI/policies/) - Directory of accessibility laws and policies by country, maintained by the W3C Web Accessibility Initiative.
- [WAIC](https://waic.jp/) - Japan's Web Accessibility Infrastructure Committee, which maintains guidance, translations and test resources for JIS X 8341-3, Japan's web accessibility standard.

## Accessibility programs

Planning, maturity models, procurement and accessibility statements for organizations.

- [AbilityNet beginner's guide to digital accessibility](https://abilitynet.org.uk/resources/digital-accessibility/beginners-guide-digital-accessibility) - UK charity's overview of digital accessibility for organizations, covering audits, testing, training and policy.
- [Access Declared](https://www.accessdeclared.com/) - Free, no-account checklist for event organizers, speakers and employers to publish which access provisions an event or interview offers, and which it does not.
- [Accesserty Signal](https://accesserty.com/en/signal) - Chrome and Firefox extension that shows published accessibility certifications and statements for sites in Google and Bing results, and lets people report barriers they encounter.
- [Accessibility statement generator (A11y Kit)](https://accessibilite.jalonel.com/en/) - Free, in-browser generator for accessibility statements following the European Accessibility Act Annex V structure, with French (RGAA) and German (BFSG) versions; exports HTML, Markdown and Word and sends no data. It formats your answers and does not test the site.
- [Digital Accessibility Maturity Model (DAMM)](https://www.levelaccess.com/blog/the-digital-accessibility-maturity-model-introduction-to-damm/) - Level Access's maturity model for measuring and planning digital accessibility programs.
- [Generate an accessibility statement](https://www.w3.org/WAI/planning/statements/generator/) - W3C tool that builds an accessibility statement from a guided form, with guidance on what a statement should cover.
- [ISO/IEC 30071-1](https://www.iso.org/standard/70913.html) - International code of practice for building accessibility into an organization's policies and ICT development; it superseded BS 8878 and was confirmed by ISO in 2024.
- [Microsoft Accessibility Evolution Model](https://blogs.microsoft.com/accessibility/accessibility-evolution-model/) - Microsoft's model for describing how mature an organization's accessibility practice is, and what the next stage looks like.
- [Planning and managing web accessibility](https://www.w3.org/WAI/planning/) - W3C guidance on starting, planning, implementing and sustaining an organizational accessibility program.
- [Sample accessibility statement (GOV.UK)](https://www.gov.uk/government/publications/sample-accessibility-statement) - UK government template for a public sector accessibility statement, with guidance on each section; a useful model in any sector.
- [Voluntary Product Accessibility Template (VPAT)](https://www.itic.org/policy/accessibility/vpat) - ITI's template for Accessibility Conformance Reports, with editions for Section 508, EN 301 549, WCAG and an international edition combining them.
- [W3C Accessibility Maturity Model](https://www.w3.org/TR/maturity-model/) - W3C Group Note (November 2025) for assessing and improving the maturity of an organization's accessibility program.
- [Web Accessibility Framework](https://blog.pope.tech/2024/01/17/how-the-web-accessibility-framework-was-designed/) - Pope Tech's framework for planning an accessibility program around goals, scope, risk appetite, gaps and processes.

## Inclusive design

### Principles and toolkits

- [Adobe Spectrum: inclusive design](https://spectrum.adobe.com/page/inclusive-design/) - How Adobe's Spectrum design system approaches inclusive design.
- [Cards for Humanity](https://cardsforhumanity.frog.co/) - Card deck that deals a person and a trait, to test a product, service or concept from a different perspective.
- [Centre for Inclusive Design](https://centreforinclusivedesign.org.au/) - Australian organization that helps teams build inclusive design processes, with research and training.
- [Co-design kit](https://community-led.design/) - Open-source toolkit for community-led co-design.
- [Designing for accessibility posters](https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/) - UK Home Office do and don't posters for designing for autistic users, screen reader users, low vision, motor disabilities, deaf and hard of hearing users and dyslexia; openly licensed and widely translated.
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
- [Accessible Palette](https://accessiblepalette.com/) - Tool for creating color systems with consistent lightness and predictable contrast between shades.
- [AudioEye color contrast checker](https://www.audioeye.com/color-contrast-checker) - Color contrast checker against WCAG thresholds (formerly color.a11y.com).
- [Color Vision Labs Simulator & Filter](https://colorvisionlabs.com/color-blind-filter) - Free browser-based color blindness simulator (protan, deutan, tritan, with adjustable severity including partial forms) for live camera or photos, plus a daltonization assist mode. Runs entirely client-side, no signup.
- [Coloring for Colorblindness](https://davidmathlogic.com/colorblind/) - David Nichols' interactive tool for checking how a palette looks to people with color vision deficiencies.
- [Colour Contrast Analyser](https://vispero.com/color-contrast-checker/) - Free desktop app from Vispero for checking color contrast against WCAG, with an eyedropper for any pixel on screen.
- [Colour contrast grid](https://maniruzzamanjubayer.com/tools/color-contrast-grid) - Free browser tool that scores every text and background pair in a palette against WCAG 2.2 contrast thresholds, previews each pair in real UI and suggests the nearest passing colour. Runs client-side with no account.
- [Huetone](https://huetone.ardov.me/) - Tool for building accessible color palettes in the LCH color space, with contrast checks across the palette. Open source.
- [Leonardo](https://github.com/adobe/leonardo) - Adobe's web app and JavaScript library for generating color palettes and themes from target contrast ratios. Open source (Apache-2.0).
- [NoCoffee Vision Simulator](https://addons.mozilla.org/addon/nocoffee/) - Firefox extension that approximates low vision, color vision deficiency, cataracts and other impairments on web pages, for design review rather than clinical accuracy. Open source (MIT).
- [Ohio State University color guidelines](https://ets.osu.edu/digital-accessibility/color-guidelines-digital-accessibility) - Guidelines for using color accessibly in digital materials.
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
- [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) - MDN reference for the CSS media query that detects a user's request for less motion, important for vestibular disorders and some forms of epilepsy.
- [Section508.gov guide to accessible web design and development](https://www.section508.gov/develop/guide-accessible-web-design-development/) - U.S. government guide to building accessible websites, mapped to WCAG requirements.
- [W3C: images tutorial](https://www.w3.org/WAI/tutorials/images/) - W3C tutorial on writing text alternatives for informative, decorative, functional and complex images, with a decision tree.

### Component libraries and design systems

- [a11y-dialog](https://a11y-dialog.netlify.app) - Lightweight script for accessible modal and non-modal dialogs with focus management and Escape to close. Open source (MIT).
- [Accesserty UI Kit](https://accesserty.com/en/uikit/) - HTML-first accessible Web Components with built-in keyboard behavior and state management, usable with any framework or with plain HTML. Open source (MIT).
- [accessible-autocomplete](https://github.com/alphagov/accessible-autocomplete) - Autocomplete widget from the GOV.UK Design System team, tested with a range of screen readers and browsers; the team gives it minimal maintenance. Open source (MIT).
- [Ariakit](https://ariakit.com/) - Toolkit for building accessible web apps with React, providing low-level primitives with full WAI-ARIA support. Open source (MIT).
- [Ark UI](https://ark-ui.com) - Headless, accessible components for React, Vue, Solid and Svelte, built on Zag.js state machines from the Chakra UI team. Open source (MIT).
- [Base UI](https://base-ui.com) - Headless React components from the MUI team, with focus management and ARIA handled for you. Open source (MIT).
- [Bits UI](https://bits-ui.com) - Headless, accessible component primitives for Svelte 5. Open source (MIT).
- [Carbon: accessibility](https://carbondesignsystem.com/guidelines/accessibility/overview/) - IBM Carbon's accessibility guidelines, with per-component notes on keyboard and screen reader behavior.
- [Cauldron](https://cauldron.dequelabs.com/) - Deque's design system, with React components and CSS built and documented with accessibility as the primary requirement. Open source (MPL-2.0).
- [Chakra UI](https://chakra-ui.com/) - React component library with WAI-ARIA support built into its components. Open source (MIT).
- [GOV.UK Design System: accessibility](https://design-system.service.gov.uk/accessibility/) - How the GOV.UK Design System team tests components with assistive technologies, and the known issues recorded for each component.
- [GOV.UK Frontend](https://frontend.design-system.service.gov.uk/) - Code for the GOV.UK Design System, whose components are researched with users and tested with assistive technologies; a strong reference for accessible forms and error messages. Open source (MIT).
- [Headless UI](https://headlessui.com/) - Unstyled, accessible UI components for React and Vue from Tailwind Labs. Open source (MIT).
- [@holmdigital/components](https://www.npmjs.com/package/@holmdigital/components) - Accessible React components including a regulation-ready `AccessibilityStatement` generator with legal templates in 12 locales (en, sv, no, fi, da, nl, de, fr, es, it, pt, pl, plus aliases). Open source (MIT).
- [Kobalte](https://github.com/kobaltedev/kobalte) - Unstyled components and primitives for building accessible SolidJS apps and design systems. Open source (MIT).
- [Lion](https://lion.js.org) - ING's white-label, framework-agnostic Web Components with accessibility built in, meant to be extended into your own design system. Open source (MIT).
- [NHS.UK frontend](https://nhsuk.github.io/nhsuk-frontend/) - Components and styles for NHS websites, adapted from GOV.UK Frontend. Open source (MIT).
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible component primitives for React. Open source (MIT).
- [React Aria](https://react-aria.adobe.com/) - Unstyled, accessible React components and hooks from Adobe, with keyboard, screen reader, touch and internationalization support. Open source (Apache-2.0).
- [Reka UI](https://reka-ui.com) - Unstyled, accessible component primitives for Vue, a port of Radix Primitives formerly called Radix Vue. Open source (MIT).
- [Riffle](https://github.com/reactivepixels/riffle) - Headless cycling card stack for vanilla JS, React and Vue that follows the WAI-ARIA carousel pattern, with keyboard navigation and reduced-motion support. Open source (MIT).
- [Spectrum Web Components](https://opensource.adobe.com/spectrum-web-components/) - Adobe's Spectrum design system as framework-agnostic Web Components, with documented accessibility requirements for each component. Open source (Apache-2.0).
- [U.S. Web Design System accessibility](https://designsystem.digital.gov/documentation/accessibility/) - USWDS accessibility guidance, with tested components and patterns for government websites.

### Developer libraries

- [accessibility-devkit](https://github.com/actually-useful-ai/accessibility-devkit) - Framework-agnostic TypeScript toolkit of eight packages mapped to WCAG success criteria, covering auditing, accessible components, accommodations such as dyslexia typography and text spacing, motor, cognitive, language, media and motion. Open source (MIT).
- [aria-query](https://github.com/A11yance/aria-query) - Programmatic access to the WAI-ARIA roles model, used by eslint-plugin-jsx-a11y and Testing Library. Open source (Apache-2.0).
- [Color.js](https://colorjs.io) - Color library from CSS Working Group members that computes WCAG 2 contrast and other color metrics; its APCA support is experimental and not a WCAG 2 requirement. Open source (MIT).
- [dom-accessibility-api](https://github.com/eps1lon/dom-accessibility-api) - JavaScript implementation of the W3C accessible name and description computation, used by Testing Library to resolve accessible names. Open source (MIT).
- [focus-trap](https://github.com/focus-trap/focus-trap) - A library for trapping focus within a DOM node. Open source (MIT).
- [@fontsource/opendyslexic](https://www.npmjs.com/package/@fontsource/opendyslexic) - Self-hosted OpenDyslexic font package for npm-based projects. Open source (OFL-1.1).

### User-facing widgets and overlays

Toolbars that let visitors change text size, contrast and similar settings. They do not fix underlying accessibility problems; see the note below.

- [acc_toolbar](https://github.com/mickidum/acc_toolbar) - Lightweight, dependency-free JavaScript accessibility toolbar. Open source (MIT).
- [Accessibilik](https://github.com/RosenGray/accessibilik) - React-based accessibility widget with a wide range of features. Open source (MIT).
- [accessibility](https://www.npmjs.com/package/accessibility) - npm package that adds a toolbar for text resizing, contrast and link highlighting. Open source (MIT).
- [have-wcag](https://www.npmjs.com/package/have-wcag) - WCAG toolkit that combines a user-facing widget with an auditor. Open source (MIT).
- [NCSU Readability Widget](https://github.com/NCSU-Libraries-UX/readability-widget) - Vanilla JavaScript widget focused on balancing competing reading and display needs.
- [Sienna Accessibility Widget](https://github.com/bennyluk/Sienna-Accessibility-Widget) - Free, lightweight accessibility widget.

> **Note on overlays**: Accessibility overlays and all-in-one widgets are widely criticized by disabled people and accessibility practitioners. They cannot repair inaccessible code, can interfere with people's own assistive technology, and do not by themselves make a site conform to WCAG or the law. In April 2025 the U.S. Federal Trade Commission [approved a final order requiring accessiBe to pay $1 million](https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-approves-final-order-requiring-accessibe-pay-1-million) and stop claiming, without evidence, that its overlay makes websites WCAG-compliant. The [Overlay Fact Sheet](https://overlayfactsheet.com/) explains the practitioner consensus. Fix issues at the source, with automated testing, accessible components and manual review.

## Mobile and native apps

Screen readers built into phones, such as VoiceOver and TalkBack, are listed under Assistive technology.

### Cross-platform

- [.NET MAUI accessibility](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/accessibility) - Microsoft's guide to semantic properties, screen reader announcements and automation properties in .NET MAUI apps.
- [AccessKit](https://github.com/AccessKit/accesskit) - Accessibility infrastructure for UI toolkits that draw their own controls, exposing an accessibility tree to platform assistive technology APIs on Windows, macOS, Linux, Android and iOS. Includes Rust, C and Python interfaces. Open source (MIT or Apache-2.0).
- [Appt](https://appt.org/en) - Open knowledge base for mobile app accessibility, with code samples for Android, iOS, Flutter, React Native, .NET MAUI and more.
- [BBC Mobile Accessibility Guidelines](https://www.bbc.co.uk/accessibility/forproducts/guides/mobile/) - BBC's guidelines for accessible mobile web and native apps, with techniques for iOS, Android and HTML.
- [eslint-plugin-react-native-a11y](https://github.com/FormidableLabs/eslint-plugin-react-native-a11y) - ESLint rules for React Native accessibility props, roles and states. Open source (MIT).
- [Flutter accessibility](https://docs.flutter.dev/ui/accessibility) - Official Flutter guide to semantics, screen reader support, large fonts and contrast, including accessibility guideline matchers for widget tests.
- [Qt accessibility](https://doc.qt.io/qt-6/accessible.html) - Free official guide to accessible Qt applications, covering keyboard interaction, scalable interfaces, system colors and exposing standard and custom controls to platform accessibility APIs.
- [React Native accessibility](https://reactnative.dev/docs/accessibility) - Official guide to React Native's accessibility props, roles, actions and screen reader APIs on iOS and Android.
- [React Native Testing Library](https://oss.callstack.com/react-native-testing-library) - Component testing for React Native with role and accessible-name queries, encouraging tests that interact the way assistive technology users do. Open source (MIT).

### iOS and Apple platforms

- [Accessibility Inspector](https://developer.apple.com/documentation/accessibility/accessibility-inspector) - Tool bundled with Xcode for inspecting the accessibility properties of iOS and macOS apps, running audits and simulating VoiceOver navigation.
- [Accessibility Nutrition Labels](https://developer.apple.com/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels) - App Store Connect guide to declaring which accessibility features an app supports, shown on its App Store page.
- [AccessibilitySnapshot](https://github.com/cashapp/AccessibilitySnapshot) - Regression testing library for iOS that records accessibility elements, descriptions and activation points alongside interface screenshots. Complements testing with VoiceOver; snapshot coverage differs between UIKit and SwiftUI. Open source (Apache-2.0).
- [Apple Developer: accessibility](https://developer.apple.com/accessibility/) - Apple's hub for accessibility APIs, documentation and WWDC sessions for UIKit, SwiftUI and AppKit.
- [Apple Human Interface Guidelines: accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility) - Apple's design guidance for VoiceOver, Dynamic Type, contrast, motion and other accessibility features across its platforms.
- [Perform accessibility audits for your app](https://developer.apple.com/videos/play/wwdc2023/10035/) - WWDC session on performAccessibilityAudit(), which runs automated accessibility audits inside XCTest UI tests.

### Android

- [Accessibility in Jetpack Compose (codelab)](https://developer.android.com/codelabs/jetpack-compose-accessibility) - Hands-on codelab: fix touch targets, content descriptions and click labels in a sample app, then test with TalkBack.
- [Accessibility Scanner](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor) - Google's free Android app that scans any app on screen and suggests fixes for small touch targets, low contrast and missing labels.
- [Accessibility Test Framework for Android](https://github.com/google/Accessibility-Test-Framework-for-Android) - Google's library of automated accessibility checks behind Accessibility Scanner, Espresso checks and the Play pre-launch report. Open source (Apache-2.0).
- [Android: build accessible apps](https://developer.android.com/guide/topics/ui/accessibility) - Google's developer hub for Android accessibility, covering principles, Views and Compose APIs, and testing.
- [Android: test your app's accessibility](https://developer.android.com/guide/topics/ui/accessibility/testing) - Official guide to manual testing with TalkBack, Switch Access and Voice Access, and automated testing with Accessibility Scanner, Espresso and Compose.
- [Espresso accessibility checks](https://developer.android.com/training/testing/espresso/accessibility-checking) - Runs Accessibility Test Framework checks on every Espresso view action, with matchers for suppressing known issues.
- [Jetpack Compose accessibility](https://developer.android.com/develop/ui/compose/accessibility) - Guides to semantics, traversal order and testing in Compose; since Compose 1.8, UI tests can enable accessibility checks that fail on missing labels, low contrast and small touch targets.
- [Oh My Android](https://github.com/ateymoori/oh-my-android) - Free, open-source macOS app for accessibility testing of Android apps in the emulator or on a device over adb. Toggles TalkBack, font scale, bold text and RTL/pseudo-locales, and runs an audit that numbers each TalkBack stop in focus order and flags unlabeled controls and small touch targets.

### Windows and Linux

- [GTK accessibility](https://docs.gtk.org/gtk4/section-accessibility.html) - Free official GTK 4 guide to accessible roles, properties, states and relations, with guidance for standard controls and custom widgets.
- [KDE Accessibility Inspector](https://apps.kde.org/accessibilityinspector/) - Linux desktop tool for examining application accessibility trees, properties and events exposed through AT-SPI. Open source (LGPL-2.0-or-later).
- [Windows app accessibility](https://learn.microsoft.com/en-us/windows/apps/design/accessibility/accessibility-overview) - Free Microsoft guide to keyboard access, UI Automation, screen reader information, scalable text, contrast themes and accessible custom controls in native Windows apps.

## Testing and auditing

Automated checks cover only part of accessibility. Combine them with keyboard testing, screen reader testing and testing with disabled people; passing a scanner does not establish WCAG conformance.

### Methods and guides

- [A11Y Project checklist](https://www.a11yproject.com/checklist/) - Checklist based on WCAG for developers and designers reviewing their work.
- [DigitalA11Y: open-source accessibility tools](https://www.digitala11y.com/open-source-accessibility-tools/) - Roundup of open-source web accessibility evaluation tools.
- [GOV.UK: testing for accessibility](https://www.gov.uk/service-manual/helping-people-to-use-your-service/testing-for-accessibility) - UK government service manual guidance on planning accessibility testing, with automated tools, manual checks and user research.
- [QAPractices Accessibility Testing](https://qapractices.com/topics/accessibility-testing/) - Curated hub with accessibility testing guides, WCAG checklists and tools for manual and automated testing.
- [Section508.gov: testing with ANDI](https://www.section508.gov/test/web-software/) - How to test web content with ANDI, the Accessible Name and Description Inspector bookmarklet.
- [W3C Web Accessibility Evaluation Tools List](https://www.w3.org/WAI/test-evaluate/tools/list/) - Filterable list of software and online services that help check whether web content is accessible.
- [W3C: evaluating web accessibility](https://www.w3.org/WAI/test-evaluate/) - W3C overview of evaluation approaches, from quick easy checks to full conformance evaluation.
- [WCAG-EM](https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/) - W3C Website Accessibility Conformance Evaluation Methodology, for scoping, sampling and evaluating a whole website against WCAG.
- [WCAG-EM Report Tool](https://www.w3.org/WAI/eval/report-tool/) - W3C tool that walks evaluators through WCAG-EM and generates a structured conformance report.
- [WebAIM: web accessibility evaluation tools](https://webaim.org/articles/tools/) - Guide to what automated and manual evaluation tools can and cannot tell you.

### Browser extensions and in-page checkers

- [Accesserty DevCheck](https://accesserty.com/en/devcheck) - Browser extension that runs axe-core scans, focus path review, visual simulations, and PDF structure checks on the current page, including local, staging, and authenticated states.
- [Accessibility bookmarklets](https://pauljadam.com/bookmarklets/) - Paul J. Adam's bookmarklets that reveal headings, landmarks, ARIA, alt text and focus order on any page, including in mobile browsers.
- [Accessibility Insights](https://accessibilityinsights.io/) - Microsoft's free tools for web and Windows apps, with automated checks, a tab-stop visualizer and guided manual assessments for WCAG. Open source (MIT).
- [ANDI](https://www.ssa.gov/accessibility/andi/help/install.html) - Free U.S. Social Security Administration bookmarklet for inspecting programmatic accessible names, descriptions and accessibility issues; used in Trusted Tester. Its output can differ from screen readers, and it cannot inspect Shadow DOM.
- [ARC Toolkit](https://chromewebstore.google.com/detail/arc-toolkit/chdkkkccnlfncngelccgbgfmjebmkmce) - Vispero's Chrome extension for accessibility testing, with WCAG issue reporting and remediation guidance.
- [Astro dev toolbar audits](https://docs.astro.build/en/guides/dev-toolbar/) - Astro's development toolbar runs built-in accessibility audits on the page you're working on and highlights failing elements in place.
- [axe DevTools browser extension](https://www.deque.com/axe/devtools/extension/) - Deque's browser extension for Chrome, Firefox and Edge that scans pages with axe-core; the free tier covers automated checks.
- [Chrome DevTools accessibility reference](https://developer.chrome.com/docs/devtools/accessibility/reference) - Guide to Chrome's built-in accessibility tools: the full accessibility tree, computed ARIA properties, contrast checks and vision deficiency emulation.
- [Editoria11y](https://editoria11y.princeton.edu/) - Princeton-built content accessibility checker that runs automatically on page load, flagging issues like missing alt text and heading structure problems.
- [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/) - Built into Firefox DevTools: shows the accessibility tree, checks contrast and keyboard focus, simulates color vision deficiencies and overlays tab order.
- [Landmarks](https://matatk.agrip.org.uk/landmarks/) - Browser extension for Firefox, Chrome and Edge that lists and navigates a page's landmarks and headings from the keyboard. Open source (MIT).
- [Polypane](https://polypane.app/) - Developer browser with built-in WCAG tests, contrast checks, color blindness simulation and an accessibility tree view. Paid, with a free trial.
- [Sa11y](https://sa11y.netlify.app/) - Accessibility quality assurance tool that visually highlights issues directly on the page, designed for content authors and editors.
- [WAVE](https://wave.webaim.org/) - WebAIM's evaluation tool, available as a browser extension and online, that shows issues in place on the page.

### Testing engines and CI

- [Accessibility Insights Scan](https://www.npmjs.com/package/accessibility-insights-scan) - Microsoft's command-line scanner for one URL, a list of URLs or a crawled site, with an HTML report. Open source (MIT).
- [Alfa](https://alfa.siteimprove.com) - Siteimprove's accessibility engine built on W3C ACT rules, with integrations for Playwright, Puppeteer, Cypress and Jest. Open source (MIT).
- [axe-core](https://github.com/dequelabs/axe-core) - Accessibility rules engine from Deque that tests against WCAG 2.0 to 2.2 and best practices, designed to avoid false positives; most automated checkers on this list build on it. Open source (MPL-2.0).
- [axe-core-npm](https://github.com/dequelabs/axe-core-npm) - Deque's packages for running axe-core in Playwright, Puppeteer, WebdriverIO and WebDriverJS tests, plus the @axe-core/cli scanner. Open source (MPL-2.0).
- [axe-playwright-python](https://github.com/pamelafox/axe-playwright-python) - Runs axe-core from Python Playwright tests and returns violations as structured data or a readable report. Open source (MIT).
- [cypress-axe](https://github.com/component-driven/cypress-axe) - Cypress commands that run axe-core against the page under test and fail on violations. Open source (MIT).
- [@holmdigital/engine](https://www.npmjs.com/package/@holmdigital/engine) - WCAG testing engine and CLI (hd-a11y-scan) that maps failures to EN 301 549 and national accessibility law in 17 jurisdictions, with CI mode and JUnit and PDF reports. Open source (MIT).
- [IBM Equal Access Accessibility Checker](https://github.com/IBMa/equal-access) - IBM's open-source rules engine, browser extensions and Node package for Selenium, Puppeteer and Playwright tests, with baselines so CI fails only on new issues. Open source (Apache-2.0).
- [jest-axe](https://github.com/NickColley/jest-axe) - Jest matcher that runs axe-core against rendered markup in unit tests. Open source (MIT).
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/) - Google's open-source auditing tool for accessibility, performance, SEO and best practices, built into Chrome DevTools.
- [Markproof CLI](https://github.com/stochastic-technologies/markproof-cli) - Command-line checks for accessibility problems that can be proven from a page's HTML, quoting the exact markup responsible, with a baseline so only new findings fail a build. PHP, no dependencies. Open source (GPL-2.0-or-later).
- [Octopus Scanner](https://lachie1999.itch.io/octopus-scanner) - Desktop accessibility auditing app using Puppeteer and axe-core. Supports full-site crawls, sitemap ingestion, interactive journey recording for authenticated flows, and deep scan engine for dynamic content. Generates interactive reports with visual defect highlighting. Free, cross-platform.
- [Pa11y](https://pa11y.org/) - Free and open-source command-line tools for automated accessibility testing of web pages. Open source (LGPL-3.0).
- [Pa11y CI](https://github.com/pa11y/pa11y-ci) - Command-line runner that tests a list of URLs or a sitemap with Pa11y and fails the build on errors. Open source (LGPL-3.0).
- [Playwright ARIA snapshots](https://playwright.dev/docs/aria-snapshots) - Compares a page's accessibility tree with a stored snapshot to catch regressions in roles, names and structure. Open source (Apache-2.0).
- [QualWeb](https://github.com/qualweb/qualweb) - University of Lisbon evaluation engine that runs W3C ACT rules, WCAG techniques and best-practice checks from a command line or Node API. Open source (ISC).
- [Sa11y (Salesforce)](https://github.com/salesforce/sa11y) - Salesforce's axe-core wrappers with a toBeAccessible() matcher for Jest and Vitest and an API for WebdriverIO; a different project from the Sa11y content checker. Open source (BSD-3-Clause).
- [Storybook accessibility addon](https://storybook.js.org/docs/writing-tests/accessibility-testing) - Runs axe-core on each story in Storybook and can run the same checks in CI. Open source (MIT).
- [Testing Library ByRole queries](https://testing-library.com/docs/queries/byrole) - Queries controls by role and, when requested, accessible name, helping component tests catch semantic and labeling regressions. Open source (MIT).
- [Unlighthouse](https://github.com/harlan-zw/unlighthouse) - Crawls a whole site and runs Lighthouse on every page, with a UI for comparing accessibility and other scores across routes; also runs in CI. Open source (MIT).
- [ux-ui-audit](https://github.com/uxbyissa/ux-ui-audit) - Browser probes that measure WCAG contrast, tap targets and focus-ring contrast, plus an Arabic/RTL engine for plural agreement, bidi hazards and letter-spacing on cursive script. Open source (MIT).
- [wcag-contrast-ci](https://github.com/johnsmithCA-sta/wcag-contrast-ci) - Zero-dependency Python CLI that batch-checks color pairs against WCAG AA/AAA (normal, large, and UI-component tiers) and audits CSS token hygiene - variable definition/usage counts, hardcoded color values, and dead token detection. Exits non-zero on failure so it can gate a CI pipeline directly.

### Linters and static analysis

- [angular-eslint](https://github.com/angular-eslint/angular-eslint) - ESLint tooling for Angular whose template plugin includes accessibility rules for alt text, labels, ARIA and keyboard focus. Open source (MIT).
- [axe Linter](https://github.com/dequelabs/axe-linter-action) - Deque GitHub Action that lints HTML, React, Vue and Markdown files for accessibility issues in pull requests.
- [Biome](https://biomejs.dev) - Fast linter and formatter for JavaScript, TypeScript and JSX whose accessibility rule group covers much of eslint-plugin-jsx-a11y. Open source (MIT or Apache-2.0).
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) - ESLint rules for accessibility issues in JSX, the standard linter for React projects. Open source (MIT).
- [eslint-plugin-lit-a11y](https://github.com/open-wc/open-wc/tree/master/packages/eslint-plugin-lit-a11y) - Accessibility linting rules for Lit templates, adapted from eslint-plugin-jsx-a11y. Open source (ISC).
- [eslint-plugin-vuejs-accessibility](https://vue-a11y.github.io/eslint-plugin-vuejs-accessibility/) - ESLint rules that check Vue templates for missing alt text, unlabeled form controls, invalid ARIA and similar problems. Open source (MIT).
- [html-validate](https://html-validate.org) - Offline HTML validator for documents and component templates, with rules based on WCAG techniques and ARIA usage. Open source (MIT).
- [markuplint](https://markuplint.dev) - HTML linter that also parses Vue, Svelte and JSX templates and checks conformance with the HTML and WAI-ARIA specifications. Open source (MIT).
- [Oxlint](https://oxc.rs/docs/guide/usage/linter) - Fast JavaScript linter that includes a port of the eslint-plugin-jsx-a11y rules. Open source (MIT).
- [stylelint-a11y](https://github.com/double-great/stylelint-a11y) - Stylelint plugin with CSS accessibility rules, such as requiring reduced-motion alternatives and flagging removed focus outlines. Open source (MIT).
- [Svelte accessibility warnings](https://svelte.dev/docs/svelte/compiler-warnings) - The Svelte compiler reports about 40 accessibility warnings at build time, such as missing alt text and click handlers without keyboard handlers, with no extra plugin. Open source (MIT).

### Screen reader testing

- [A11Y Project: getting started with VoiceOver](https://www.a11yproject.com/posts/getting-started-with-voiceover/) - Practical guide for developers testing websites with VoiceOver on macOS, with tips that apply to other screen readers.
- [a11ysupport.io](https://a11ysupport.io/) - Community-maintained data on how screen readers and browsers support specific HTML and ARIA features.
- [ARIA-AT](https://aria-at.w3.org/) - W3C community project that writes test plans for ARIA patterns and reports how well screen reader and browser combinations support them.
- [Deque University screen reader shortcuts](https://dequeuniversity.com/screenreaders/) - Keyboard and gesture reference for the major desktop and mobile screen readers.
- [Guidepup](https://www.guidepup.dev) - Drives real screen readers (VoiceOver, NVDA and Orca) from JavaScript, with a Playwright integration, so tests can check what is actually announced. Open source (MIT).
- [Virtual Screen Reader](https://github.com/guidepup/virtual-screen-reader) - Simulated screen reader for jsdom and browsers that produces a spoken-output log for fast unit tests; not a substitute for real screen readers. Open source (MIT).
- [WebAIM: testing with screen readers](https://webaim.org/articles/screenreader_testing/) - How to test web content with a screen reader, with keyboard shortcuts for the major ones.

### Online checkers and scanners

- [Access Check](https://khangyen.github.io/access-check/) - Browser-based WCAG 2.1 scanner that checks a URL or pasted HTML and maps each violation to its success criterion. Runs client-side with no install or account, and documents the limits of automated checks.
- [AccessCheck](https://accesscheck-app.netlify.app) - Free web accessibility scanner that runs Playwright and axe-core against any URL to find WCAG 2.1 violations, with remediation guidance and exportable reports.
- [Accessibility Checker](https://www.accessibilitychecker.org/) - Free single-page WCAG and ADA scanner.
- [Accessibility Checker by Experte](https://www.experte.com/accessibility) - Free bulk website accessibility checker that scans up to 500 pages at once against WCAG 2.1.
- [accessScan](https://accessibe.com/accessscan) - accessiBe's free WCAG scanner for a single page.
- [Annex Markup Scan](https://yakupefecaliskann.github.io/annex-site/tools/scan/) - Browser-based WCAG 2.2 checker for a page's HTML whose 14 rules run client-side; scanning by address sends only the address to a fetch proxy. It reports contrast, keyboard operation and focus visibility as out of scope rather than passed.
- [barrieretest.at](https://barrieretest.at) - Automated accessibility testing tool built on pa11y, tailored to Austrian BaFG regulations. Provides a quick score for any URL. Free, no sign-up required. API access available on request.
- [Foglift](https://foglift.io) - Free website analyzer that includes WCAG accessibility audit. Checks alt text, heading hierarchy, ARIA landmarks, keyboard navigation, color contrast, and more across all pages. Free API available.
- [Nutilz Accessibility Checker](https://nutilz.com/accessibility-checker) - Free WCAG scanner that audits any URL for critical, serious, moderate, and minor violations, gives the page a numeric score, and lists passed checks alongside per-issue fix guidance. No signup required.
- [PageGuard](https://pageguard.org) - Free website health scanner that checks SEO, performance, accessibility, and best practices. Generates plain-English reports. No registration required. Powered by Cloudflare Workers AI.
- [RatedWithAI](https://ratedwithai.com/) - Automated website accessibility scanner that checks sites for ADA and WCAG compliance issues, providing instant audits with actionable recommendations. Free scanner available.
- [Siteimprove](https://www.siteimprove.com/platform/accessibility/) - Commercial platform for monitoring website accessibility, quality and SEO.
- [The ID Toolbox](https://nextgenailearning.com) - Free browser-based accessibility checks for e-learning courses rather than web pages: alt text across a published SCORM package or PowerPoint deck, color contrast against WCAG AA and AAA, color blindness simulation, and caption reading speed. Runs client-side with no account and no upload.
- [WCAGsafe](https://wcagsafe.com) - WCAG 2.1 AA website and PDF accessibility scanner with plain-language results, risk indicators, remediation guidance, and monitoring.
- [Website Accessibility Checker](https://websiteaccessibilitychecker.com/checker/index.php) - Checks single HTML pages against accessibility standards.

## Content and media

### Documents, PDF and e-books

- [Accessibility Metadata Display Guide](https://www.w3.org/publishing/a11y/UX-Guide-metadata/principles/) - W3C community group guide to showing e-book accessibility metadata to readers in plain language in stores, libraries and reading apps.
- [Accessible Documents Toolkit](https://oit.colorado.gov/standards-policies-guides/guide-to-accessible-web-services/accessible-documents-toolkit) - Colorado Office of Information Technology toolkit for creating accessible documents across formats.
- [Ace by DAISY](https://daisy.github.io/ace/) - Command-line and desktop checker that runs automated EPUB accessibility tests, built on axe-core. Open source (MIT).
- [Ace SMART](https://smart.daisy.org/) - Free DAISY web tool for the manual part of EPUB conformance testing, which imports an Ace report and helps write accessibility metadata.
- [Adobe Acrobat: create and verify PDF accessibility](https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html) - Adobe's reference for the accessibility check, reading order tool and related features in Acrobat Pro (commercial).
- [CAST AEM Center](https://aem.cast.org/) - National Center on Accessible Educational Materials, with guidance on creating and acquiring accessible learning materials.
- [DAISY Accessible Publishing Knowledge Base](https://kb.daisy.org/publishing/docs/) - Continually updated best practices for producing accessible EPUB 3 and other digital publications.
- [DAISY Pipeline 2](https://daisy.org/activities/software/pipeline/pipeline-2/) - Conversion framework that produces EPUB 3, DAISY talking books and braille-ready files from Word, DTBook and EPUB sources. Open source (LGPL).
- [EPUB Accessibility 1.1](https://www.w3.org/TR/epub-a11y-11/) - W3C Recommendation for accessibility conformance and metadata in EPUB publications.
- [EPUBCheck](https://www.w3.org/publishing/epubcheck/) - W3C command-line and Java validator for EPUB structure and specification conformance, maintained by DAISY. Use alongside Ace and manual accessibility checks. Open source (BSD-3-Clause).
- [Google Docs accessibility](https://support.google.com/docs/answer/6199477) - Google's guidance on making Docs, Slides, Sheets and videos more accessible, covering alt text, headings, tables, link text and contrast.
- [Inclusive Publishing](https://inclusivepublishing.org/) - DAISY-led news and information hub on accessible publishing, with case studies and conformance guidance.
- [ISO 14289-2 (PDF/UA-2)](https://www.iso.org/standard/82278.html) - ISO standard, published 2024, for accessible PDF documents built on PDF 2.0.
- [LaTeX Tagged PDF Project](https://tagging-project.latex-project.org/) - The LaTeX Project's hub for producing tagged, PDF/UA-2 PDFs from LaTeX (TeX Live 2025 or later), with usage guides and the tagging status of over 1,000 packages.
- [Microsoft Office Accessibility Checker](https://support.microsoft.com/office/improve-accessibility-with-the-accessibility-checker-a16f6de0-2f39-4a2b-8bd8-5ad801426c7f) - Microsoft's guide to the built-in checker in Word, Excel, PowerPoint, Outlook and OneNote, with an explanation of each rule.
- [OCRmyPDF](https://ocrmypdf.readthedocs.io/) - Command-line tool that adds a text layer to scanned PDFs so they can be searched and read aloud; it does not add tags, so output still needs remediation. Open source (MPL-2.0).
- [Overleaf: creating accessible PDFs](https://docs.overleaf.com/writing-and-editing/creating-accessible-pdfs) - Step-by-step guide to automatic tagging and PDF/UA output in LaTeX, with notes on alt text.
- [PAC (PDF Accessibility Checker)](https://pac.pdf-accessibility.org/) - Free Windows checker for PDF/UA and WCAG from axes4 and the PDF Association, with a screen reader preview and tag tree view. Freeware.
- [Quarto: PDF accessibility and standards](https://opensource.posit.co/blog/2026-03-05_pdf-accessibility-and-standards/) - Explains Quarto 1.9's pdf-standard option for PDF/UA output from LaTeX and Typst, and the most common failures: missing titles and alt text.
- [Section508.gov: create accessible documents](https://www.section508.gov/create/documents/) - Guides to creating accessible Word, PowerPoint, Excel and PDF documents that conform to the Revised 508 Standards.
- [Section508.gov: create accessible PDFs](https://www.section508.gov/create/pdfs/) - U.S. federal guide to creating, testing and fixing PDFs that conform to Section 508, with a video series on Acrobat.
- [Tagged PDF Best Practice Guide: Syntax](https://pdfa.org/resource/tagged-pdf-best-practice-guide-syntax/) - PDF Association guide for developers who generate tagged PDF and PDF/UA, covering structure types and attributes.
- [Typst accessibility guide](https://typst.app/docs/guides/accessibility/) - Official guide to accessible PDF output in Typst, which tags PDFs by default since version 0.14 and can stop an export that fails PDF/UA-1 checks. Open source (Apache-2.0).
- [veraPDF](https://verapdf.org/) - Validator for PDF/A, PDF/UA-1 and PDF/UA-2 that runs as a desktop app, command-line tool or Java library, and powers several free online checkers. Open source (GPL-3.0 or MPL-2.0).
- [WebAIM: Microsoft Word](https://webaim.org/techniques/word/) - WebAIM's guide to accessible Word documents and exporting them to tagged PDF.
- [WebAIM: PDF accessibility](https://webaim.org/techniques/acrobat/) - WebAIM's tutorials on PDF tags, reading order and fixing PDFs in Acrobat.
- [Well-Tagged PDF (WTPDF)](https://pdfa.org/WTPDF) - PDF Association specification for tagging PDF 2.0 files for reuse and accessibility, compatible with PDF/UA-2. Free (CC BY 4.0).
- [WordToEPUB](https://daisy.org/activities/software/wordtoepub/) - Free Windows app from DAISY that converts structured word-processing documents into EPUB, with navigation, language markup, extended descriptions and MathML. Integrates with Word and LibreOffice.

### Plain language and readability

- [British Dyslexia Association style guide](https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace) - Guidance on making written content and workplaces dyslexia-friendly.
- [CDC plain language materials](https://www.cdc.gov/health-literacy/php/develop-materials/plain-language.html) - CDC guidance on plain language for health communication, with practical writing tips.
- [Federal plain language guidelines](https://digital.gov/guides/plain-language/) - Digital.gov's plain language guidelines for U.S. federal agencies, required under the Plain Writing Act of 2010, covering structure, wording and design.
- [Hemingway Editor](https://hemingwayapp.com/) - Writing tool that highlights long sentences, passive voice and hard-to-read passages, with a grade-level score. Free web version.
- [Inclusion Europe: Easy-to-Read guidelines](https://inclusion.eu/easy-to-read/guidelines/) - Free guidelines for making information easier to understand for people with intellectual disabilities, with downloadable language editions and a simplified checklist.
- [Rewordify](https://rewordify.com/) - Free web tool that replaces difficult words in pasted text with simpler ones and highlights each change, to support struggling readers.

### Captions, subtitles and audio description

- [Able Player](https://ableplayer.github.io/ableplayer/) - Accessible HTML5 media player with captions, interactive transcripts, audio description, a sign language window and full keyboard controls. Open source (MIT).
- [Aegisub](https://aegisub.org/) - Cross-platform subtitle editor with audio waveform timing and styling. Open source (BSD-3-Clause).
- [Audio Description Project](https://adp.acb.org/) - American Council of the Blind's hub on audio description, with guidelines and listings of described media.
- [BBC subtitle guidelines](https://www.bbc.co.uk/accessibility/forproducts/guides/subtitles/) - BBC's detailed subtitle style and timing guidelines.
- [Buzz](https://chidiwilliams.github.io/buzz/) - Desktop app for Windows, macOS and Linux that transcribes audio and video offline with Whisper and exports SRT, VTT or text, including live captions for talks. Open source (MIT).
- [Caption readability check](https://timedsubs.com/en/guides/caption-readability-check) - Practical pre-publication guide for checking caption timing, overlaps, line length, reading speed, and SRT/VTT structure without presenting style thresholds as WCAG guarantees.
- [Closed Caption Creator](https://www.closedcaptioncreator.com/) - Commercial tool for creating closed captions and subtitles for video.
- [DCMP Captioning Key](https://dcmp.org/learn/captioningkey) - Described and Captioned Media Program guidelines for caption quality, placement and style.
- [DCMP Description Key](https://dcmp.org/learn/descriptionkey) - Described and Captioned Media Program guidelines for writing audio description, especially for educational media.
- [ffsubsync](https://github.com/smacke/ffsubsync) - Command-line tool that automatically shifts an out-of-sync subtitle file to match a video's audio. Open source (MIT).
- [Media Accessibility User Requirements](https://www.w3.org/TR/media-accessibility-reqs/) - W3C note describing what people with disabilities need from web audio and video.
- [Picute](https://picute.net/) - Automated subtitle and caption generator with free, no-signup browser tools to convert and repair subtitle files (SRT, VTT, ASS) for accessible video.
- [pycaption](https://pycaption.readthedocs.io/) - PBS's Python library for converting between caption formats such as SCC, SRT, WebVTT and DFXP. Open source (Apache-2.0).
- [Subtitle Edit](https://www.nikse.dk/subtitleedit) - Subtitle editor with waveform timing, speech-to-text, spell check and conversion between hundreds of formats. Open source (GPL-3.0).
- [SubtitleFixer](https://subtitlefixer.com/) - Free, open-source (MIT) browser tools that repair caption files so they stay usable: re-sync out-of-time captions, fix garbled characters, and convert between SRT, VTT, ASS, SBV and SUB, with files processed on the device and no account.
- [W3C: captions and subtitles](https://www.w3.org/WAI/media/av/captions/) - W3C guidance on creating captions and subtitles for audio and video.
- [W3C: making audio and video media accessible](https://www.w3.org/WAI/media/av/) - W3C WAI guide to captions, transcripts, audio description and accessible media players.
- [WhisperX](https://github.com/m-bain/whisperx) - Whisper-based transcription with word-level timestamps and speaker labels, useful for tightly timed captions. Open source (BSD-2-Clause).
- [YouDescribe](https://youdescribe.org/) - Free Smith-Kettlewell service where volunteers add audio description to YouTube videos.
- [YouTube: add subtitles and captions](https://support.google.com/youtube/answer/2734796) - YouTube's help on uploading, creating and editing captions.

### Data visualization

- [Chart2Music](https://www.chart2music.com) - Library that turns chart data into sound that can be explored with the keyboard, designed and tested with blind users. Open source (MIT).
- [Chartability](https://chartability.fizz.studio/) - Testable heuristics for auditing data visualizations and data-driven interfaces for visual, motor, vestibular, neurological and cognitive accessibility.
- [ColorBrewer](https://colorbrewer2.org/) - Tool for choosing sequential, diverging and qualitative palettes for maps and charts, with a filter for colorblind-safe schemes.
- [Colorcet](https://colorcet.holoviz.org) - Perceptually uniform color maps for Python plotting, including sets that stay readable with color vision deficiencies. Open source (CC BY 4.0).
- [Data Navigator](https://dig.cmu.edu/data-navigator/) - JavaScript library from Carnegie Mellon that adds keyboard, screen reader and other input navigation to charts and diagrams drawn with SVG, Canvas or WebGL. Open source (MIT).
- [Do No Harm Guide: centering accessibility in data visualization](https://www.urban.org/research/publication/do-no-harm-guide-centering-accessibility-data-visualization) - Urban Institute guide with practical guidance and practitioner interviews on accessible charts.
- [Highcharts accessibility module](https://www.highcharts.com/docs/accessibility/accessibility-module) - Documentation for the Highcharts module that adds keyboard navigation, screen reader descriptions and sonification to charts; commercial license for commercial use.
- [Highcharts Sonification Studio](https://sonification.highcharts.com/) - Free browser tool from Georgia Tech's Sonification Lab and Highsoft for turning spreadsheet data into charts with an audio track.
- [MAIDR](https://maidr.ai) - Library that adds keyboard navigation, sonification, text descriptions and braille output to statistical charts, for JavaScript, Python and R. Open source (GPL-3.0).
- [Olli](https://umwelt-data.github.io/olli/) - Library that turns web visualizations into keyboard-navigable tree views with descriptions at several levels of detail for screen reader users. Open source (BSD-3-Clause).
- [Umwelt](https://umwelt-data.github.io/umwelt/) - Free browser editor for authoring coordinated visualizations, sonifications and keyboard-navigable text from one data specification. Blind and sighted users can author from these views, and the viewer can be embedded in other sites.
- [Visa Chart Components](https://github.com/visa/visa-chart-components) - Chart library for JavaScript, React and Angular with built-in accessibility settings, keyboard instructions and data table fallbacks. Open source (MIT).
- [Viz Palette](https://projects.susielu.com/viz-palette) - Tool for previewing a chart palette on example charts, with color vision deficiency simulation and conflict warnings.
- [W3C: complex images](https://www.w3.org/WAI/tutorials/images/complex/) - W3C tutorial on short and long descriptions for charts, diagrams and maps.

### Math and STEM

- [Astronify](https://github.com/spacetelescope/astronify) - Space Telescope Science Institute package that turns astronomical data series, such as light curves, into sound. Open source (BSD-3-Clause).
- [Desmos accessibility](https://www.desmos.com/accessibility) - Accessibility features of the free Desmos graphing calculator, including audio trace, braille and screen reader support.
- [LaTeXML](https://math.nist.gov/~BMiller/LaTeXML/) - NIST's LaTeX to XML and HTML converter, used by arXiv to produce accessible HTML versions of papers. Public domain.
- [MathCAT](https://nsoiffer.github.io/MathCAT/) - Library that converts MathML into speech, braille (Nemeth, UEB and others) and navigation commands, used in NVDA through an add-on. Open source (MIT).
- [MathJax](https://www.mathjax.org/) - JavaScript display engine for LaTeX, MathML and AsciiMath with speech, braille and interactive exploration of expressions. Open source (Apache-2.0).
- [MathLive](https://github.com/arnog/mathlive) - Web component for entering and editing math with a physical or on-screen keyboard, producing LaTeX and MathML, with speech output. Open source (MIT).
- [MathML Core](https://www.w3.org/TR/mathml-core/) - W3C specification for the core of MathML, now rendered natively by Chromium, Firefox and Safari so equations reach assistive technology as math.
- [PhET inclusive design](https://phet.colorado.edu/en/inclusive-design) - University of Colorado's free science and math simulations with screen reader support, sonification and alternative input.
- [PreTeXt](https://pretextbook.org) - Authoring system for textbooks that builds accessible HTML, EPUB, braille and print from one source. Open source (GPL-3.0).
- [Speech Rule Engine](https://github.com/Speech-Rule-Engine/speech-rule-engine) - Library that generates spoken descriptions and Nemeth braille from MathML, and powers MathJax's speech output. Open source (Apache-2.0).
- [STRAUSS](https://github.com/james-trayford/strauss) - Python toolkit for sonifying scientific data, built for astronomy but usable with any dataset. Open source (MIT).
- [Temml](https://temml.org) - Converts LaTeX to MathML in the browser or at build time, so equations reach screen readers as math markup instead of images. Open source (MIT).

### Email

- [Email Markup Consortium](https://emailmarkup.org/) - Nonprofit that publishes yearly reports on the accessibility of real-world HTML emails and on email client support.
- [Good Email Code](https://www.goodemailcode.com/) - Mark Robbins' reference of accessible, standards-based HTML email code patterns.

## AI and accessibility

AI features in specific products are listed with them: Be My Eyes, Seeing AI, Lookout, Envision and Aira under vision apps, Voiceitt and Personal Voice under speech and AAC, and Buzz under captions.

> **Note on AI**: AI descriptions, captions and code suggestions can be confidently wrong, so check anything safety-critical or legally significant with a person or a second source. Review generated alt text in its page context: an image may be informative, decorative or a control. AI-assisted testing finds only part of WCAG issues and does not replace manual and assistive technology testing. Overlays marketed as "AI-powered" do not make a site conformant (see the note on overlays under Web development).

### AI in assistive technology

- [AI Content Describer](https://github.com/cartertemm/AI-content-describer) - NVDA add-on that describes images, focused controls and the screen, with follow-up questions. Supports cloud services and experimental local models; descriptions can be wrong. Open source (GPL-2.0), with free and paid model options.
- [ElevenLabs Impact Program](https://elevenlabs.io/impact) - Free licenses for AI voice cloning and text-to-speech for people with permanent voice loss from ALS, stroke, cancer and other conditions, through partner nonprofits. Recordings are processed in the cloud.
- [Gemini in TalkBack](https://support.google.com/accessibility/android/answer/16294093) - Android's screen reader can describe an image or the whole screen with Gemini and answer follow-up questions, on-device on some phones. Descriptions can be wrong.
- [Project Euphonia](https://sites.research.google/euphonia/about/) - Google Research program on speech recognition for people with non-standard speech, with published research and open-source tools for personalizing models.
- [Project Relate](https://sites.research.google/relate/) - Google Android beta app that learns a person's non-standard speech and transcribes or repeats it in a synthesized voice. Not currently accepting new users; existing users can continue using their speech models.
- [Whisper](https://github.com/openai/whisper) - Open-source speech recognition model from OpenAI that runs locally and powers many free captioning and dictation tools. It sometimes inserts words that were never spoken, so review transcripts people rely on. Open source (MIT).
- [whisper.cpp](https://github.com/ggml-org/whisper.cpp) - Lightweight C/C++ port of Whisper that runs speech recognition offline on ordinary laptops and phones without a GPU. Open source (MIT).

### AI tools for builders

- [a11y-loop](https://github.com/ChanMeng666/a11y-loop) - Node CLI and Agent Skill pairing accessibility planning guidance with local axe-core audits in Chromium across five rendering modes and supplied interaction states. Produces report diffs and a manual-review checklist; it does not replace manual or screen reader testing. Open source (MIT).
- [A11y MCP](https://github.com/ronantakizawa/a11ymcp) - MCP server that gives AI clients axe-core and Puppeteer tools for testing URLs or HTML against WCAG, checking contrast and validating ARIA. Open source (MIT).
- [A11Y.md](https://github.com/fecarrico/A11Y.md) - Persistent accessibility context standard for AI coding agents (Claude Code, Cursor, Copilot, Gemini). Portable markdown with an AI behavior contract, WCAG 2.2 AA compliance profiles, 24 lazy-loaded component guides, and versioned evidence artifacts. English and Portuguese. Open source (MIT).
- [Alt Text Intelligence](https://lukesteuber.com/downloads/apps/alt-text-intelligence/) - App for writing and editing image descriptions, for up to ten photos at a time, on iPhone, iPad, Mac and Android.
- [alt-text](https://pypi.org/project/alt-text/) - Alpha Python package for finding and setting image descriptions in HTML and EPUB. Its description engines require external API credentials and may incur service charges; local OCR uses a separate Tesseract installation. Open source (GPL-3.0).
- [alt-text-local-llm](https://github.com/lukeslp/alt-text-local-llm) - Generates descriptive alt text with vision models that run on your own machine.
- [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) - Official MCP server from the Chrome DevTools team that lets coding agents inspect Chrome, with an accessibility debugging skill for Lighthouse audits, the accessibility tree, focus and contrast. Open source (Apache-2.0).
- [Fido](https://daisy.org/activities/software/fido/) - Experimental DAISY app for converting PDFs, describing images and improving document structure and metadata on Windows and macOS. Free app; most AI features require a cloud API key or DAISY unlock code. Outputs need human review.
- [MCP Accessibility Scanner](https://github.com/JustasMonkev/mcp-accessibility-scanner) - Model Context Protocol server that lets a coding agent run axe-core scans in Chrome, check keyboard focus order and save annotated reports; it says plainly that automated checks don't certify conformance. Open source (MIT).
- [squirrelscan](https://github.com/squirrelscan/squirrelscan) - Command-line website audit built for coding agents that crawls a site and runs 300+ rules across accessibility, SEO, performance and security, mapping fixes to source files; includes a GitHub Action and MCP server. Open source (MIT).

### Research, data and critique

- [AI and Accessibility Research Symposium](https://www.w3.org/WAI/research/ai2023/) - W3C WAI symposium with papers and recorded talks on the opportunities and risks of AI for people with disabilities, including bias and automated evaluation.
- [AI and accessibility: a discussion of ethical considerations](https://arxiv.org/abs/1908.08939) - Open preprint by Meredith Ringel Morris examining inclusivity, privacy, errors and other ethical questions in AI built for and with disabled people.
- [ASL Citizen](https://www.microsoft.com/en-us/research/project/asl-citizen/) - Microsoft Research dataset of about 84,000 videos of 2,700 ASL signs, recorded with consent by Deaf and hard-of-hearing signers, for research on sign lookup.
- [Building a Disability-Inclusive AI Ecosystem](https://cdt.org/insights/building-a-disability-inclusive-ai-ecosystem-a-cross-disability-cross-systems-analysis-of-best-practices/) - Free AAPD and CDT report on disability discrimination, access and privacy across employment, education, benefits, healthcare and other systems, with recommendations for developers and policymakers. Includes a plain-language version.
- [Careless Whisper: speech-to-text hallucination harms](https://arxiv.org/abs/2402.08021) - FAccT 2024 study finding that about 1 percent of Whisper transcriptions contained invented phrases, more often for speakers with aphasia; relevant to anyone using AI captions as an accommodation.
- [Guiding principles for more disability-inclusive AI](https://www.afb.org/research-and-initiatives/ai-series/empowering-or-excluding/guiding-principles-disability-inclusive-ai) - Free American Foundation for the Blind guidance on accessible AI interfaces, disability representation, privacy, human oversight and discrimination, based on its research with experts.
- [Is "good enough" good enough?](https://aclanthology.org/2021.mtsummit-at4ssl.2/) - Maartje De Meulder's paper on ethics, dataset bias and priorities in sign language technology, recommending that developers and Deaf organizations set priorities together. Open access.
- [Speech Accessibility Project](https://speechaccessibilityproject.beckman.illinois.edu/) - University of Illinois project, backed by major tech companies, that collects recordings from people with non-standard speech to improve speech recognition, shared with researchers under a data use agreement.
- [VizWiz](https://vizwiz.org/) - Datasets of photos taken by blind people, with questions and captions, used to benchmark image description and visual question answering.
- [WFD and WASLI statement on signing avatars](https://wasli.org/news/wfd-wasli-statement-use-signing-avatars/) - World Federation of the Deaf and World Association of Sign Language Interpreters position on when automated signing avatars are and are not acceptable.

## Assistive technology

Grouped by access need. Each tool appears once, in its main group; many serve more than one.

### General

- [AFB assistive technology products](https://www.afb.org/blindness-and-low-vision/using-technology/assistive-technology-products) - American Foundation for the Blind's overview of products for blind and low-vision people, including apps, braille devices and video magnifiers.
- [ATIA assistive technology resources](https://www.atia.org/home/at-resources/) - Assistive Technology Industry Association resources, including an introduction to assistive technology, webinars and buyer's guides.
- [Christopher Reeve Foundation assistive technology guide](https://www.christopherreeve.org/wp-content/uploads/2024/05/Assistive-Technology-4-30-24-FINAL.pdf) - Guide (PDF) to assistive technology for people with paralysis, including computer access and rehabilitation resources.
- [Free and low-cost hardware for access](https://accessibledigitallearning.org/resource/free-and-low-cost-hardware-for-access/) - Guide to inexpensive hardware that improves access to digital learning.
- [Hardware and hardware-software assistive devices](https://pressbooks.ulib.csuohio.edu/accessibility/chapter/chapter-1-11-hardware-and-hardware-software-assistive-devices/) - Cleveland State University chapter on specialized keyboards, mice, switches and other hardware.
- [iCanConnect](https://www.icanconnect.org/) - U.S. program providing free distance-communication equipment, individual assessments and training to people with significant combined hearing and vision loss who meet federal disability and income eligibility requirements.
- [Michigan assistive technology guidelines for teachers of students who are blind or low vision](https://rblv.org/assistive-technology-guidelines) - Guidelines on assistive technology, data collection, IEP development and instruction for pre-K to 12 students.
- [Microsoft Accessibility](https://www.microsoft.com/en-us/accessibility) - Microsoft's hub for the accessibility features in Windows, Office, Xbox and other products.
- [My Computer My Way](https://mcmw.abilitynet.org.uk/) - Free AbilityNet guides to the accessibility settings in Windows, macOS, iOS, Android and ChromeOS, organized by vision, hearing, motor and cognitive needs.
- [Types of assistive technology](https://dap.berkeley.edu/websites/what-digital-accessibility/types-assistive-technology) - UC Berkeley guide to assistive technology categories, including screen readers, magnifiers and alternative input.
- [University of Michigan assistive technology resources](https://studentaccessibility.umich.edu/assistive-technology) - List of free and paid assistive technology, grouped by need.
- [WHO: assistive technology](https://www.who.int/news-room/fact-sheets/detail/assistive-technology) - World Health Organization fact sheet on assistive technology, who needs it and how many people lack access.

### Screen readers

- [Emacspeak](https://github.com/tvraman/emacspeak) - Audio desktop built on GNU Emacs by T. V. Raman, who is blind, giving spoken access to editing, email, web browsing and the shell. Open source (GPL-2.0).
- [Fenrir](https://git.stormux.org/storm/fenrir) - Modular screen reader for the Linux console and terminal emulators, with review mode, spell checking and table navigation. Open source (LGPL-3.0).
- [JAWS](https://vispero.com/jaws-screen-reader-software/) - Vispero's commercial screen reader for Windows (formerly from Freedom Scientific), with braille support and scripting.
- [Narrator](https://support.microsoft.com/en-us/windows/chapter-1-introducing-narrator-7fe8fd72-541f-4536-7658-bfc37ddaf9c6) - Windows' built-in screen reader, with natural voices and braille support in Windows 11.
- [NVDA](https://www.nvaccess.org/) - Free, open-source screen reader for Windows from NV Access, with speech, braille and magnification features.
- [Orca](https://gitlab.gnome.org/GNOME/orca) - Free, open-source screen reader for the GNOME desktop on Linux, with speech and braille output.
- [TalkBack](https://support.google.com/accessibility/android/answer/6283677) - Android's built-in screen reader, with braille display support and Gemini descriptions of unlabeled images and screens.
- [VoiceOver](https://www.apple.com/accessibility/features/?vision) - Apple's built-in screen reader for macOS, iOS, iPadOS, watchOS and tvOS; Braille Access in iOS 26 and macOS 26 turns a connected braille display into a note taker.

### Text-to-speech engines

- [eSpeak NG](https://github.com/espeak-ng/espeak-ng) - Compact speech synthesizer for more than 100 languages that stays clear at very high speech rates, favored by many screen reader users and shipped with NVDA. Open source (GPL-3.0).
- [Piper](https://github.com/OHF-Voice/piper1-gpl) - Fast neural text-to-speech that runs offline on modest hardware such as a Raspberry Pi, with voices in many languages. Open source (GPL-3.0).
- [RHVoice](https://github.com/RHVoice/RHVoice) - Multilingual speech synthesizer with voices for languages often poorly served by commercial engines; works with NVDA, Linux and Android. Open source (LGPL-2.1).
- [Speech Dispatcher](https://github.com/brailcom/speechd) - Common speech server for Linux that lets screen readers such as Orca and Fenrir use any installed synthesizer. Open source (GPL-2.0).

### Braille

- [AFB: refreshable braille displays](https://www.afb.org/blindness-and-low-vision/using-technology/assistive-technology-products/refreshable-braille) - American Foundation for the Blind's explainer on refreshable braille displays and how they work with screen readers.
- [American Printing House for the Blind](https://www.aph.org/) - U.S. nonprofit that makes braille, tactile, large-print and audio materials and devices, and publishes free guides and training.
- [BrailleBlaster](https://www.brailleblaster.org/) - Free braille transcription software from APH that converts Word, EPUB and other documents into embossable braille.
- [BrailleNote Evolve](https://www.humanware.com/support/braillenote-evolve/) - HumanWare's braille note taker running Windows 11 with the KeySoft braille interface and optional JAWS; it succeeds the Android-based BrailleNote Touch Plus.
- [Brailliant BI X](https://store.humanware.com/hus/brailliant-bi-40x-braille-display.html) - HumanWare refreshable braille displays that connect to computers and phones over USB and Bluetooth.
- [BRLTTY](https://brltty.app/) - Background service that gives braille display users access to the Linux console and, through BrlAPI, to desktop screen readers; supports most refreshable braille displays. Open source (GPL-2.0-or-later); the BrlAPI interface has separate LGPL licensing.
- [Liblouis](https://liblouis.io/) - Braille translation library with tables for many languages and codes, used by NVDA, Orca, BRLTTY and others. Open source (LGPL-2.1).
- [Sao Mai Braille](https://saomaicenter.org/en/smsoft/smb) - Free Windows editor and braille translator from Vietnam's Sao Mai Center for the Blind, supporting literary text, mathematics, chemistry, tactile graphics and music, with translation tables for many languages.

### Low vision and magnification

- [AbilityNet: screen magnification](https://abilitynet.org.uk/factsheets/screen-magnification) - Fact sheet explaining how screen magnification works, with options for each platform.
- [American Academy of Ophthalmology: low vision assistive devices](https://www.aao.org/eye-health/diseases/low-vision-assistive-devices) - Overview of low vision aids, from magnifiers and large print to talking devices.
- [Android Magnification](https://support.google.com/accessibility/android/answer/6006949) - Built-in magnification gestures for Android.
- [Android vision accessibility](https://www.android.com/accessibility/vision/) - Overview of Android's features for blind and low-vision users.
- [CNIB: magnification](https://www.cnib.ca/en/magnification) - CNIB's guide to screen magnification for people with low vision.
- [Dark Reader](https://darkreader.org/) - Browser extension that applies dark mode and adjustable brightness, contrast and fonts to any website, useful for photophobia, low vision or migraine. Open source (MIT).
- [Large Print Maker](https://largeprintmaker.com/) - Free browser tool that turns any pasted text, or a ready-made template, into printable large-print PDFs at 18, 24, or 28 point, following APH large-print guidelines. Includes calendars, word searches, score sheets, and hymn sheets; runs entirely in the browser, no signup.
- [Macular Society Low Vision Aids](https://www.macularsociety.org/support/daily-life/low-vision-aids/) - UK charity's guide to low vision aids, including magnifiers, tablets and phones.
- [Magnifier (Apple)](https://support.apple.com/guide/iphone/magnify-or-describe-things-around-you-iphe867dc99c/26/ios/26) - Built-in app that magnifies and describes things around you using the camera, on iPhone and iPad and, since macOS 26, on Mac.
- [Microsoft accessibility tools for vision](https://support.microsoft.com/en-us/topic/accessibility-tools-for-vision-b3c57606-e0af-46d2-97b4-fa6b5fba4fa1) - Overview of vision-related accessibility features in Windows and Microsoft 365.
- [SuperNova](https://yourdolphin.com/SuperNova) - Dolphin's screen magnifier and screen reader for Windows.
- [Windows contrast themes](https://support.microsoft.com/en-us/windows/turn-high-contrast-mode-on-or-off-in-windows-909e9d89-a0f9-a3a9-b993-7a6dcee85025) - Built-in high contrast color themes for Windows.
- [Windows Magnifier](https://support.microsoft.com/en-us/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198) - Built-in screen magnifier for Windows.
- [Zoom (macOS)](https://support.apple.com/guide/mac-help/change-zoom-advanced-options-accessibility-mh35715/mac) - Built-in screen magnification for macOS.
- [ZoomText](https://vispero.com/zoomtext-screen-magnifier-software/) - Vispero's screen magnifier and reader for Windows (formerly from Freedom Scientific).

### Color vision

- [Color Blind Tests](https://colorblindtests.net/) - Free browser-based color vision screening with Ishihara plate and Farnsworth D-15 tests, in several languages and with no signup. Online screening is not a medical diagnosis.
- [Colorblindness Test](https://whatcoloristhis.one/test/) - Free color vision screening with 14 original plates based on Ishihara and HRR methods, checked using the Viénot-Brettel-Mollon dichromacy model; a screen-based approximation, not a clinical diagnosis. [Open source](https://github.com/lukeslp/color-vision-plates) for web, iOS and Android.
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

- [Accessibility Reader (Apple)](https://mcmw.abilitynet.org.uk/how-to-make-reading-or-listening-to-content-easier-on-your-iphone-or-ipad-with-accessibility-reader-in-ios-26) - System-wide reading mode in iOS 26 and macOS 26 with custom fonts, colors and spacing and read-aloud; linked here is AbilityNet's step-by-step guide.
- [Bookshare](https://www.bookshare.org/) - Benetech's library of accessible ebooks in audio, braille, large-print and highlighted-text formats for people with print disabilities; free for qualifying U.S. students.
- [National Library Service for the Blind and Print Disabled](https://www.loc.gov/nls/) - Free Library of Congress service that lends braille and talking books, players and downloads to eligible readers in the United States.
- [OneStep Reader](https://www.pro.sensotec.com/) - Mobile OCR app, formerly KNFB Reader, that photographs printed text and reads it aloud or sends it to a braille display; now developed by Sensotec.
- [Read Aloud](https://github.com/ken107/read-aloud) - Chrome and Firefox extension that reads web pages aloud, with keyboard playback controls, adjustable speech and text highlighting. Built-in browser voices are free; some cloud voices cost extra. Open source (MIT).
- [Reading mode (Android)](https://play.google.com/store/apps/details?id=com.google.android.accessibility.reader) - Free Google app that strips clutter from articles and apps and reads text aloud, with adjustable font, contrast and speech.
- [Thorium Reader](https://www.edrlab.org/software/thorium-reader/) - Free reading app for Windows, macOS and Linux that opens EPUB, PDF, DAISY books and audiobooks, with screen reader support and read-aloud. Open source (BSD-3-Clause).
- [Voice Dream Reader](https://www.voicedream.com/) - Text-to-speech reader for iPhone and iPad that reads documents, ebooks, web articles and scanned text aloud with synchronized highlighting; subscription for new users.

### Navigation and wayfinding

- [GoodMaps](https://goodmaps.com/) - Navigation app with turn-by-turn directions inside mapped venues such as transit stations, airports and campuses.
- [Lazarillo](https://play.google.com/store/apps/details?hl=en&id=com.lazarillo) - Free GPS app for blind and low-vision people on Android and [iOS](https://apps.apple.com/us/app/lazarillo-accessible-gps/id1139331874), with audio announcements of nearby places, streets and transit stops.
- [NaviLens](https://www.navilens.com/) - Free app that reads high-contrast codes on transit, signs and products from several meters away, telling blind and low-vision people where they are and what is nearby.
- [Soundscape by Scottish Tech Army](https://sta.ngo/soundscapeapp) - Free continuation of Microsoft Soundscape from a volunteer group that closely matches the original iPhone app, with an Android version in beta.
- [Soundscape Community](https://apps.apple.com/app/id6449701760) - Community-maintained continuation of Microsoft Soundscape for iPhone, using 3D audio callouts to build awareness of surroundings.
- [VoiceVista](https://apps.apple.com/app/id6450388413) - Free iPhone app for blind and low-vision pedestrians that announces nearby places and markers with 3D audio, built on Microsoft's open-sourced Soundscape. Open source (MIT).

### Deaf and hard of hearing

- [Apple hearing accessibility](https://www.apple.com/accessibility/hearing/) - Overview of Live Captions, Sound Recognition, Live Listen, hearing aid support and the hearing aid feature on AirPods Pro.
- [Auracast broadcast audio](https://www.bluetooth.com/auracast/) - Bluetooth LE Audio broadcast standard that lets compatible hearing aids, cochlear implant processors and earbuds receive audio directly from venues and TVs.
- [Ava](https://www.ava.me/) - Live captioning for in-person group conversations and video meetings, with speaker identification; free tier and paid plans.
- [Center for Hearing Access](https://centerforhearingaccess.org/) - Advocacy group that explains hearing loops, telecoils and Auracast broadcast audio, and helps people request assistive listening under the ADA.
- [Diglo](https://www.diglo.com/) - U.S. retailer of products for deaf and hard-of-hearing people, such as vibrating alarm clocks, flashing doorbells, amplified phones and assistive listening devices (formerly Harris Communications).
- [Live Caption (Android)](https://support.google.com/accessibility/android/answer/9350862?hl=en) - Captions any audio playing on an Android phone, including videos, podcasts and calls, on the device; Expressive Captions adds cues for tone, volume and sounds.
- [Live Captions (Linux)](https://github.com/abb128/LiveCaptions) - Linux desktop app that captions any audio playing on the computer, or the microphone, offline with a local English speech model. Open source (GPL-3.0).
- [Live Transcribe & Sound Notifications](https://play.google.com/store/apps/details?id=com.google.audio.hearing.visualization.accessibility.scribe) - Free Android app that captions nearby speech in real time in more than 70 languages and alerts people to sounds such as smoke alarms and doorbells.
- [NIDCD: assistive devices](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders) - U.S. National Institute on Deafness and Other Communication Disorders' guide to devices for people with hearing, voice, speech or language disorders.
- [NotchLive](https://notchlive.app/) - macOS app that captions system and microphone audio on the device, across meetings, videos and in-person conversation; live captions are free.
- [Otter.ai](https://otter.ai/) - Automated transcription service for meetings and conversations.
- [Phonak Roger](https://www.phonak.com/en-int/hearing-devices/microphones) - Wireless microphone technology that improves speech understanding in noise and over distance for people with hearing loss.
- [Sorenson](https://sorenson.com/) - Video relay service and communication products for deaf people.
- [Telecommunications Relay Service (TRS)](https://www.fcc.gov/consumers/guides/telecommunications-relay-service-trs) - FCC guide to relay services, including TTY, that let deaf, hard-of-hearing and speech-disabled people make phone calls.
- [Trippi (OSS)](https://github.com/skrylkovs/trippi-oss) - Chrome extension that displays translated captions from browser-tab audio, including meeting calls. Requires your own Deepgram and DeepL API keys; audio and text go to those services, whose limits and charges apply. Open source (MIT).
- [Video Relay Service (VRS)](https://www.fcc.gov/consumers/guides/video-relay-services) - FCC guide to video relay services, which connect deaf sign language users with hearing people through interpreters.

### Sign languages

- [Handspeak](https://www.handspeak.com/) - ASL dictionary, lessons and articles on Deaf culture by a Deaf author and artist.
- [Lifeprint ASL University](https://www.lifeprint.com/) - Free American Sign Language curriculum, dictionary and video lessons by Deaf instructor Bill Vicars.
- [SignBSL](https://www.signbsl.com/) - British Sign Language dictionary that gathers video signs from several sources, including regional variations.
- [Signing Savvy](https://www.signingsavvy.com/) - ASL dictionary with video signs, fingerspelling and word lists; the core dictionary is free.
- [Spreadthesign](https://www.spreadthesign.com/) - Multilingual dictionary showing the signs for the same word in dozens of national sign languages.

### Motor and alternative input

- [AbleNet switches](https://www.ablenetinc.com/switches/) - Switches activated by buttons, joysticks, sip-and-puff and other methods for people with limited movement.
- [Apple mobility accessibility](https://www.apple.com/accessibility/mobility/) - Overview of Voice Control, Switch Control, AssistiveTouch and Eye Tracking, which controls iPhone and iPad with the eyes using the front camera.
- [AsTeRICS](https://www.asterics.eu/) - Graphical construction kit for combining switches, eye trackers, cameras and other sensors into computer and environmental control systems. Free and open source; MIT or GPL-3.0 with exceptions depending on plugins.
- [Enable Viacam](https://eviacam.crea-si.com/) - Webcam head mouse for Windows and Linux that moves the pointer with head movements and clicks by dwelling. Open source (GPL-3.0).
- [Enabling Devices](https://enablingdevices.com/shop/) - Store for adaptive switches, toys and communication devices.
- [EyeControl](https://www.eyecontrol.co.il/) - Wearable eye-tracking device that lets people with ALS and locked-in syndrome communicate with eye movements, without a screen.
- [FABI](https://www.asterics.eu/manuals/fabi/) - Open hardware switch interface that turns buttons, homemade switches and optional sip-and-puff sensors into keyboard and mouse actions, with assembly instructions and browser configuration. Firmware GPL-3.0; hardware designs CC BY-SA 4.0. Hardware costs apply.
- [Glassouse](https://glassouse.com/) - Hands-free mouse alternative worn like glasses, controlled by head movements and bites, designed for people with limited hand mobility.
- [Leviate](https://github.com/vladpereverzyev/leviate) - Controls the mouse and 3D programs with mid-air hand gestures through a webcam or a phone, without touching the mouse. Open source.
- [Microsoft Adaptive Accessories](https://www.microsoft.com/en-us/store/b/accessible-adaptive-devices-accessories) - Microsoft's customizable adaptive mouse, hub and buttons for people with limited mobility.
- [Mouse Keys (Windows)](https://support.microsoft.com/en-us/windows/make-your-mouse-keyboard-and-other-input-devices-easier-to-use-10733da7-fa82-88be-0672-f123d4b3dcfe) - Windows feature for moving the pointer with the numeric keypad.
- [OptiKey](https://github.com/OptiKey/OptiKey) - Free, open-source on-screen keyboard and mouse for Windows, controlled by eye tracking.
- [Perkins: introduction to adaptive switches](https://www.perkins.org/resource/introduction-7-common-adaptive-switches/) - Guide to seven common types of adaptive switch and how they are used.
- [Project Gameface](https://github.com/google/project-gameface) - Google research prototype for pointer control through head movements and facial gestures on Windows and Android. Repository archived in 2024; useful as a code reference. Open source (Apache-2.0).
- [Switch Access (Android)](https://support.google.com/accessibility/android/answer/6122836?hl=en) - Built-in Android feature for controlling a device with switches or the front camera.
- [Tobii Dynavox](https://www.tobiidynavox.com/) - Eye trackers and eye-gaze communication devices for computer control and AAC.
- [WebAIM: motor disabilities and assistive technology](https://webaim.org/articles/motor/assistive) - Overview of assistive technology used by people with motor disabilities, from keyboard alternatives to eye tracking.

### Voice control and dictation

- [AI Dictation](https://github.com/writingmate/aidictation) - Voice typing for Apple, Windows and Android devices, with on-device recognition on supported systems. Optional cloud transcription and cleanup send audio or text to external services. Client source is MIT; distributed service plans have a limited trial and paid subscription.
- [DailyVox](https://getdailyvox.com) - Free voice journal for iPhone and Android with on-device speech recognition, letting people make entries by speaking instead of typing. Open source (MIT).
- [Handy](https://github.com/cjpais/Handy) - Free dictation app for macOS, Windows and Linux with on-device transcription and shortcut-based text entry; requires a model download and Linux input tools. Optional cloud post-processing sends transcripts to the chosen service, whose charges may apply. Open source (MIT).
- [nerd-dictation](https://github.com/ideasman42/nerd-dictation) - Lightweight offline dictation for Linux that types speech into any application using the VOSK recognizer. Open source (GPL-3.0).
- [Numen](https://git.sr.ht/~geb/numen) - Offline voice control for Linux that types, clicks, scrolls and runs commands by voice on any desktop, including Wayland. Open source.
- [Talon Voice](https://talonvoice.com/) - Hands-free computer control with voice, noise and eye tracking, popular with programmers who have RSI.
- [Vocalinux](https://github.com/VocaHQ/vocalinux) - Free offline voice dictation for Linux desktops. Local speech recognition (whisper.cpp, Whisper, or VOSK) types into any app on X11 and Wayland; useful for RSI, limited typing, and privacy-sensitive workflows.
- [Voice Access (Android)](https://support.google.com/accessibility/android/answer/6151843) - Built-in Android app for controlling a device by voice.
- [Voice Access (Windows)](https://support.microsoft.com/en-us/topic/get-started-with-voice-access-bd2aa2dc-46c2-486c-93ae-3d75f7d053a4) - Built-in Windows 11 feature for controlling the computer and dictating text by voice, offline; it replaces Windows Speech Recognition.
- [Voice Control (Apple)](https://support.apple.com/guide/iphone/use-voice-control-iph2c21a3c88/ios) - Built-in voice control for macOS, iOS and iPadOS.
- [Voicefield](https://github.com/tatargabor/voicefield) - React library that pairs a phone with desktop web fields by QR code and relays recognized text to the desktop. Uses browser or optional cloud speech recognition, so audio may leave the device. Open source (MIT).
- [Yap Online Dictation](https://yapapp.cc/online-dictation) - Free, no-account browser dictation with editable text, two-minute recordings and a downloaded Whisper model for local recognition. Closed-source web tool; review recognition errors and copy or download text before closing the tab.
- [YazSes](https://github.com/MSKazemi/yazses) - Free, open-source offline dictation for Linux, macOS, and Windows. Hold-to-talk rather than always-listening, so the speaker decides when recognition starts and stops; includes a dysfluency-friendly mode intended for stuttered and dysarthric speech. Runs entirely on-device, useful for RSI and privacy-sensitive work.

### Speech and AAC

Augmentative and alternative communication (AAC) apps, devices and resources, voice banking, and tools for people with speech disabilities.

- [AAC Board AI](https://github.com/shayc/aac-board-ai) - Free, open-source AAC web app for symbol-based communication, with keyboard navigation, OBF/OBZ imports, multilingual interfaces, offline core features after initial load, and optional browser-provided on-device AI.
- [AAC Institute](https://aacinstitute.org/) - Evidence-based information on AAC for clinical practice, research and education.
- [AAC Language Lab](https://aaclanguagelab.com) - PRC-Saltillo's language development resources for AAC users and support teams.
- [AAC — Low-Cost Voice & Gesture Recognition](https://github.com/wilmerjoseperezorozco-dev/aac-voz-gestos-bajo-costo) - Research prototype that trains a personal voice and gesture classifier from as few as 10 samples per word, for people with motor speech disorders such as dysarthria and apraxia. Works offline with no special hardware. Open source (MIT).
- [Accent AAC Devices](https://prc-saltillo.com/device/accent) - PRC-Saltillo speech generating devices with touch, switch, head and eye tracking access, including Unity and LAMP Words for Life vocabularies.
- [ARASAAC](https://arasaac.org/) - Aragonese portal of AAC with free pictograms, software and resources for making AAC materials. Pictograms use CC BY-NC-SA 4.0, with attribution and noncommercial reuse requirements.
- [ASHA: augmentative and alternative communication](https://www.asha.org/practice-portal/professional-issues/augmentative-and-alternative-communication/) - American Speech-Language-Hearing Association practice portal on AAC assessment and intervention.
- [AssistiveWare Learn AAC](https://www.assistiveware.com/learn-aac) - AssistiveWare's free articles and guides for families and professionals supporting AAC users.
- [AssistiveWare Proloquo](https://www.assistiveware.com/products/proloquo) - Symbol-based AAC app for iOS from AssistiveWare.
- [AsTeRICS Grid](https://grid.asterics.eu/) - Web-based AAC communicator and board editor that works offline in the browser, with ARASAAC symbols and touch, switch, head or eye tracking access. Open source (AGPL-3.0).
- [Boardmaker](https://us.tobiidynavox.com/pages/boardmaker) - Tobii Dynavox software for designing and printing symbol-based communication materials.
- [Cboard](https://www.cboard.io/) - Free, open-source symbol-based communication board for the web and mobile.
- [Cognixion Axon-R](https://www.cognixion.com/) - Non-invasive brain-computer interface headset combining EEG with augmented reality so people with ALS and other severe motor impairments can select words; a research device in clinical trials, not cleared for clinical use.
- [Communicator](https://ecksquad.github.io/communicator2/) - Free browser-based gesture-to-speech app: the camera turns head movements, blinks, and hand gestures into customizable spoken phrases, or plays recordings of the user's own voice. All processing on-device, no install or account required, available in seven languages. Open source (MIT).
- [CoughDrop](https://www.mycoughdrop.com/) - Cloud-based AAC app that syncs communication boards across devices; the source code is open (AGPL-3.0).
- [Global Symbols](https://globalsymbols.com/) - Free symbol library and board builder with AAC symbol sets localized for different cultures and languages.
- [Grid 3](https://smartboxaac.com/ukie/grid-software/) - Smartbox AAC software for Windows with symbol and text communication, environmental control and computer access by touch, eye gaze or switch. Free trial, then paid.
- [Grid Pad](https://smartboxaac.com/ukie/grid-pad-overview/) - Dedicated communication aid from Smartbox with touch, switch and eye gaze access, running Grid 3.
- [ISAAC](https://isaac-online.org/english/home/) - International Society for Augmentative and Alternative Communication, a global organization for people with complex communication needs.
- [Jabbla Mind Express](https://www.jabbla.com/en/mind-express/) - AAC software with symbol and text communication, eye gaze control and environmental control.
- [JAN: voice amplification](https://askjan.org/solutions/Voice-Amplification.cfm) - Job Accommodation Network guide to voice amplifiers for people with weak or tiring voices.
- [LAMP Words for Life](https://lampwflapp.com/) - Paid AAC app for iOS built on a motor planning approach to language; a separate Discover app provides a 30-day trial.
- [Look to Speak](https://play.google.com/store/apps/details?id=com.androidexperiments.looktospeak) - Free Android app that lets people choose pre-written phrases by glancing left, right or up, then speaks them aloud, with no eye tracker needed.
- [NovaChat](https://prc-saltillo.com/device/novachat) - PRC-Saltillo speech generating device with vocabulary options, word prediction and customizable layouts.
- [Open Board Format](https://www.openboardformat.org/) - Open specification for moving AAC communication boards and linked board sets between applications using OBF and OBZ files, with documentation, validation and conversion tools. Supporting website and tools are open source (MIT).
- [OpenAAC](https://www.openaac.org) - Community-driven initiative for free, open standards and tools in AAC.
- [OpenSymbols](https://www.opensymbols.org/) - Searchable collection of AAC symbol sets for building communication boards. Licenses vary by set, including noncommercial restrictions; check the license for the symbols you use.
- [Personal Voice](https://support.apple.com/en-us/104993) - Built-in iPhone, iPad and Mac feature that creates a synthesized voice that sounds like you from recorded phrases, for use with Live Speech and AAC apps. Generated on the device.
- [PRC-Saltillo resources](https://www.prc-saltillo.com/caregivers) - Resource library for families and caregivers of AAC users.
- [Proloquo2Go](https://www.assistiveware.com/products/proloquo2go) - Symbol-supported AAC app for iOS from AssistiveWare, with customizable vocabulary and natural voices.
- [Proloquo4Text](https://www.assistiveware.com/products/proloquo4text) - Text-based AAC app for iOS from AssistiveWare, with word prediction and natural voices. One-time purchase.
- [Shirley Ryan AbilityLab: AAC resources](https://www.sralab.org/lifecenter/resources/listing-augmentative-and-alternative-communication) - Listing of AAC blogs, websites and books.
- [TD Snap](https://us.tobiidynavox.com/pages/td-snap) - Tobii Dynavox AAC app with Picture Communication Symbols, page sets such as Core First and Motor Plan, and touch, eye gaze or switch access. Free trial, then subscription.
- [Team Gleason](https://teamgleason.org/) - U.S. nonprofit that provides communication devices, eye trackers and other technology to people living with ALS.
- [Tobii Dynavox I-Series](https://us.tobiidynavox.com/pages/td-i-series) - Eye-tracking speech generating devices for people with ALS, cerebral palsy and other conditions that affect speech and movement.
- [Voiceitt](https://www.voiceitt.com/) - Speech recognition trained on each user's own speech, so people with dysarthria and other non-standard speech can dictate text and control smart devices. Paid subscription.
- [Widgit symbols](https://www.widgit.com/products/inprint/) - Widgit's symbol set and InPrint software for creating symbol-supported materials.

### Cognitive and learning

- [Alzheimer's Society: memory loss](https://www.alzheimers.org.uk/about-dementia/stages-and-symptoms/dementia-symptoms/memory-loss) - Practical strategies and aids for living with memory loss.
- [Kurzweil 3000](https://www.kurzweiledu.com/) - Reading and writing support software for students with learning disabilities, on the web, Windows, Mac and iPad.
- [LDRFA assistive technology tools](https://www.ldrfa.org/assistive-technology-tools/) - Learning Disabilities Resources Foundation Action's list of assistive tools and apps for people with learning disabilities.
- [OpenDyslexic](https://opendyslexic.org/) - Free typeface with distinctive letter shapes, intended as a reading preference for some people with dyslexia; it is not a treatment or a guaranteed reading improvement.
- [ReadSpeaker](https://www.readspeaker.com/) - Text-to-speech products for reading support on websites, documents and learning platforms.
- [ReCalibri](https://lukesteuber.com/downloads/recalibri/) - Free browser extension that swaps Times New Roman for more readable fonts, including Calibri, Open Sans and OpenDyslexic. [Source](https://github.com/lukeslp/recalibri).
- [Safari Reader](https://support.apple.com/guide/safari/hide-distractions-when-reading-sfri32632/mac) - Safari's reading view that removes ads, navigation and other distractions from articles.
- [SimpleMind](https://simplemind.eu/) - Mind-mapping app for organizing thoughts and ideas visually.

### Neurodiversity

- [Autism accessibility guidelines](https://hassellinclusion.com/blog/autism-accessibility-guidelines-resource/) - Hassell Inclusion's design guidance for sensory and other access needs of autistic people.
- [Autism crisis communication cards](https://www.maskedbutaware.nl/en/tools/crisis-mode) - Free, phone-friendly communication support for moments when sensory overload makes speaking difficult. Available in English and Dutch without tracking; printable templates are [open source](https://github.com/maskedbutaware/autism-crisis-communication-cards).
- [Carol Gray Social Stories](https://carolgraysocialstories.com/) - Short structured stories that describe social situations, developed for autistic people.
- [Dopastep](https://dopastep.com/) - Body doubling in live focus rooms: break a task into small steps, then work alongside other people in synced focus and break cycles. Free room access and limited monthly task breakdowns; no camera or booking.
- [Focusmate](https://www.focusmate.com/) - Virtual coworking platform that pairs users for live, focused work sessions using body doubling.
- [Goblin.tools](https://goblin.tools/) - Collection of small, single-task tools built on a large language model for people who find certain tasks overwhelming, including task breakdown and tone checking. Free on the web; outputs can be wrong.
- [How to ADHD](https://www.youtube.com/@HowtoADHD) - YouTube channel by Jessica McCabe, who has ADHD, explaining ADHD research and practical strategies in short videos.
- [Neurodiversity Design System](https://neurodiversity.design/) - Design principles for typography, color, layout and interaction aimed at neurodivergent users, including people with dyslexia, autism and ADHD.
- [Structured](https://structured.app/) - Visual day planner app with a timeline-based interface, particularly helpful for individuals with time blindness.
- [Tiimo](https://www.tiimoapp.com/) - Visual planner for iOS, Android and web designed with neurodivergent people, with timelines, visual timers and routines; free tier with subscription.
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

- [A11yJSON](https://a11yjson.org) - Open data schema from Sozialhelden for describing the accessibility of physical places, such as entrances and toilets, in a machine-readable way. Open source (MIT).
- [Accessibility Cloud](https://www.accessibility.cloud/) - Sozialhelden's open data exchange for place accessibility data, based on A11yJSON.
- [AccessNow](https://accessnow.com/) - Crowd-sourced app and map that rates the accessibility of places.
- [ADA Accessibility Standards (Access Board)](https://www.access-board.gov/ada/) - U.S. Access Board's ADA accessibility guidelines and standards for buildings and facilities, with technical guides.
- [ADA Standards for Accessible Design](https://www.ada.gov/law-and-regs/design-standards/) - Department of Justice standards for making buildings and facilities physically accessible.
- [City of Vaughan Inclusive Design Standards (PDF)](https://www.vaughan.ca/sites/default/files/Vaughan%20IDS_Final%20%28Aug%2010%202020%29.pdf?file-verison=1680739200052) - City of Vaughan's inclusive design standards for municipal buildings and spaces (PDF).
- [Inclusive Design Standards](https://thekelsey.org/learn-center/design-standards/) - The Kelsey's standards for inclusive housing design, with more than 300 elements covering design and operations.
- [OpenStreetMap: Key:wheelchair](https://wiki.openstreetmap.org/wiki/Key:wheelchair) - OpenStreetMap's tagging guidance for recording wheelchair accessibility of places.
- [Project Sidewalk](https://projectsidewalk.org/) - University of Washington crowdsourcing tool for mapping sidewalk accessibility problems from street-level imagery. Open source (MIT).
- [The principles of inclusive design](https://www.designcouncil.org.uk/fileadmin/uploads/dc/Documents/the-principles-of-inclusive-design.pdf) - Design Council and CABE guide (PDF) to inclusive design principles for buildings and places.
- [Touch Mapper](https://touch-mapper.org/) - Free service that creates 3D-printable or embossable tactile maps from OpenStreetMap data.
- [Wheelmap](https://wheelmap.org/) - Crowd-sourced map of wheelchair accessibility built on OpenStreetMap, from the Berlin nonprofit Sozialhelden.

## Learning

### Courses and training

- [A11y Collective](https://www.a11y-collective.com/) - Online web accessibility courses for designers, developers and content creators, with a free introductory course.
- [Accessible and inclusive design patterns](https://www.ixdf.org/master-classes/accessible-and-inclusive-design-patterns) - Interaction Design Foundation master class by Vitaly Friedman on design guidelines and patterns for inclusive, accessible design.
- [Accessible Campus educator's toolkit](https://accessiblecampus.ca/tools-resources/educators-tool-kit/) - Ontario guidelines and tips for making courses and teaching more accessible.
- [Deque University](https://dequeuniversity.com/) - Deque's online courses on web accessibility, WCAG, ARIA and accessible documents. Free for people with disabilities.
- [Digital Accessibility Foundations](https://www.w3.org/WAI/courses/foundations-course/) - Free, self-paced W3C WAI course on edX for technical and non-technical learners, with an optional paid certificate.
- [eCampusOntario digital accessibility resources](https://accessibility.ecampusontario.ca/accessibility/resources/) - Repository of digital accessibility resources for educators.
- [Microsoft Learn: Accessibility Fundamentals](https://learn.microsoft.com/training/paths/accessibility-fundamental/) - Free learning path of about three hours covering disability and assistive technology, WCAG principles, accessible Microsoft 365 content and testing.
- [Section508.gov accessibility training](https://www.section508.gov/training/) - Free U.S. government courses, tools and events on Section 508, procurement, testing and accessible content.
- [Teach Access](https://teachaccess.org/) - Collaboration between universities and tech companies that helps teach accessibility in higher education, with free curriculum resources.
- [web.dev: Learn Accessibility](https://web.dev/learn/accessibility) - Free course by Carie Fisher on Google's web.dev covering ARIA, structure, focus, color, forms, media and testing, with a short assessment per module.
- [WebAIM Accessibility Training](https://webaim.org/services/training/) - Paid live online training from WebAIM on accessibility principles and techniques; its free articles are listed under Start here.

### Certification

- [DHS Trusted Tester](https://www.section508.gov/test/trusted-tester/) - U.S. Department of Homeland Security training and certification in a repeatable manual test process for Section 508 web conformance.
- [IAAP CPACC](https://www.accessibilityassociation.org/cpacc) - Certified Professional in Accessibility Core Competencies, IAAP's foundational certification covering disabilities, universal design, standards and laws. IAAP also offers WAS (web) and ADS (documents). Paid exams; the linked overview is free.
- [NVDA Expert Certification](https://certification.nvaccess.org/) - Free online exam from NV Access on working knowledge of the NVDA screen reader; a listed certificate costs extra.

### Books

- [Accessibility for Everyone by Laura Kalbag](https://accessibilityforeveryone.site/) - Laura Kalbag (A Book Apart, 2017). Introduction to disability, laws and guidelines, and how to plan, evaluate and test accessible design. Paid book.
- [Agile Accessibility Handbook](https://accessibility.deque.com/agile-accessibility-handbook) - Dylan Barrell (Amplify, 2020). Short guide to building accessibility into agile teams at scale. Free PDF and EPUB; registration required.
- [Design for Real Life](https://dfrlbook.com/) - Eric Meyer and Sara Wachter-Boettcher (A Book Apart, 2016). Designing for people in stress or crisis instead of idealized users. Free to read online.
- [Design Justice](https://doi.org/10.7551/mitpress/12255.001.0001) - Sasha Costanza-Chock (MIT Press, 2020). The case for design practices led by marginalized communities. Free open access edition.
- [Inclusive Design Patterns](https://shop.smashingmagazine.com/printed-books/inclusive-front-end-design-patterns/) - Heydon Pickering (Smashing Media, 2016). Front-end techniques for building accessible, inclusive interfaces from the start. Paid book.

### Podcasts and video

- [Accessibility Craft Podcast](https://accessibilitycraft.com/) - Podcast on web accessibility, including recordings from the WordPress Accessibility Meetup.
- [Blind Abilities](https://blindabilities.com/) - Podcast by blind hosts on assistive technology, employment and independent living.
- [Carrie on Accessibility](https://www.youtube.com/@carrieonaccessibility) - YouTube channel with tutorials and discussion of accessibility from a blind user's perspective.
- [Disability Visibility Project](https://disabilityvisibilityproject.com/) - Alice Wong's online community for disability media and culture, including the archive of the Disability Visibility podcast.
- [Double Tap](https://doubletaponair.com/) - Daily show and podcast from AMI-audio on assistive technology news and reviews from the perspective of blind and partially sighted people.
- [Reid My Mind Radio](https://reidmymind.com/) - Thomas Reid's podcast of conversations with people with disabilities, many of them blind or low vision.

### Newsletters and blogs

- [Adrian Roselli](https://adrianroselli.com/) - Detailed, test-backed posts on HTML, ARIA, WCAG and screen reader behavior.
- [Axess Lab](https://axesslab.com/) - Plain-language articles on accessibility, many based on research with disabled users.
- [Ben Myers](https://benmyers.dev/) - Approachable explainers on the accessibility tree, semantics and assistive technology.
- [Eric Bailey](https://ericwbailey.website/) - Essays on inclusive design, accessibility culture and the ethics of building for the web.
- [GOV.UK accessibility blog](https://accessibility.blog.gov.uk/) - UK Government Digital Service posts on accessibility regulations, monitoring and research with disabled users.
- [Heydon Pickering](https://heydonworks.com/) - Writing and videos on inclusive interface design.
- [Hidde de Vries](https://hidde.blog/) - Posts on accessibility standards, authoring tools and the web platform.
- [Kitty Giraudel](https://kittygiraudel.com/) - Practical posts on accessible components and front-end engineering.
- [Lainey Feingold](https://www.lflegal.com/) - Disability rights lawyer's blog and legal updates on digital accessibility laws, settlements and structured negotiation.
- [Manuel Matuzović](https://www.matuzo.at/blog/) - Short, frequent posts on HTML, CSS and accessibility.
- [Microsoft Accessibility Blog](https://blogs.microsoft.com/accessibility/) - Microsoft's announcements on accessibility features, research, training and inclusive hiring.
- [Sara Soueidan](https://www.sarasoueidan.com/blog/) - In-depth articles on accessible front-end development, SVG and CSS.
- [Sarah Higley](https://sarahmhigley.com/) - Articles on complex ARIA widgets such as comboboxes, grids and tooltips, with test results.
- [Scott O'Hara](https://www.scottohara.me/) - Posts on ARIA, HTML semantics and accessible components from an HTML and ARIA specification editor.
- [Tink](https://tink.uk/) - Léonie Watson's writing on screen readers, web standards and accessibility.
- [Vispero blog (formerly TPGi)](https://vispero.com/resources/category/blog/) - Technical posts from Vispero's accessibility engineers, formerly the TPGi blog, on ARIA, testing and browser and assistive technology support.
- [Web Axe](https://www.webaxe.org/) - Dennis Lembree's long-running blog and resource lists on web accessibility practice.
- [WebAIM blog](https://webaim.org/blog/) - WebAIM's posts, including the annual WebAIM Million report and screen reader user surveys.

## Community

### Disability organizations

Organizations run by, or representing, disabled people.

- [AbilityNet](https://abilitynet.org.uk/) - UK charity that helps disabled people of all ages use technology.
- [Accessible Community](https://accessiblecommunity.org/) - Nonprofit providing tools and resources for a more inclusive world for people with disabilities.
- [American Association of People with Disabilities](https://www.aapd.com/) - National disability-led, cross-disability rights organization in the United States.
- [American Council of the Blind](https://www.acb.org/) - Membership organization of blind and low-vision people in the United States, with an active audio description project.
- [American Foundation for the Blind](https://www.afb.org/) - U.S. nonprofit with research, policy work and resources on blindness and low vision.
- [Autistic Self Advocacy Network](https://autisticadvocacy.org/) - Nonprofit run by and for autistic people, publishing policy resources, toolkits and Easy Read materials.
- [Autistic Women & Nonbinary Network](https://awnnetwork.org/) - Autistic-led nonprofit supporting autistic women, girls, nonbinary and gender-diverse people.
- [Bazelon Center: disability rights organizations](https://www.bazelon.org/resource-library/disability-rights-organizations/) - Directory of disability rights organizations.
- [British Deaf Association](https://bda.org.uk/) - Deaf-led UK charity campaigning for British Sign Language rights.
- [Canadian Accessibility Network](https://www.can-rca.ca/communities-of-practice/) - Canadian network that brings members together to drive accessibility forward.
- [CommunicationFIRST](https://communicationfirst.org/) - Organization led by people who use AAC, advocating for the rights of people who cannot rely on speech.
- [Disability Rights Education & Defense Fund](https://dredf.org/) - National disability civil rights law and policy center directed by disabled people.
- [Disability Rights UK](https://www.disabilityrightsuk.org/) - UK organization led by disabled people, working on policy, rights advice and campaigns.
- [European Disability Forum](https://www.edf-feph.org/) - Umbrella organization of persons with disabilities in Europe, active on the European Accessibility Act and EU policy.
- [G3ict](https://g3ict.org/) - Global Initiative for Inclusive ICTs, an advocacy initiative launched with the UN to promote digital accessibility.
- [Hadley](https://hadleyhelps.org/) - Free workshops, podcasts and discussion groups for adults adjusting to vision loss.
- [Hearing Loss Association of America](https://www.hearingloss.org/) - Consumer organization run by and for people with hearing loss, focused on captioning, hearing technology and policy.
- [Inclusion International](https://inclusion-international.org/) - Global network of people with intellectual disabilities and their families.
- [International Disability Alliance](https://www.internationaldisabilityalliance.org/) - Global alliance of organizations of persons with disabilities that engages with the UN on implementing the CRPD.
- [Knowbility](https://knowbility.org/) - Nonprofit working to make technology accessible to people with disabilities, through training, testing and events.
- [National Association of the Deaf](https://www.nad.org/) - Civil rights organization of, by and for deaf and hard-of-hearing people in the United States.
- [National Council on Independent Living](https://ncil.org/) - Cross-disability membership organization representing Centers for Independent Living in the United States.
- [National Disability Rights Network](https://www.ndrn.org/) - Membership organization for the Protection and Advocacy Systems and Client Assistance Programs in each U.S. state and territory.
- [National Federation of the Blind](https://nfb.org/) - Largest organization of blind people in the United States.
- [National Organization on Disability](https://nod.org/) - Works with companies to assess and improve disability inclusion practices.
- [People with Disability Australia](https://pwd.org.au/) - Australian cross-disability rights organization led by people with disability.
- [RNIB](https://www.rnib.org.uk/) - UK charity supporting blind and partially sighted people.
- [Sightsavers](https://www.sightsavers.org/) - International organization working to eliminate avoidable blindness and advance disability rights.
- [Sins Invalid](https://www.sinsinvalid.org/) - Disability justice performance project and collective led by disabled people of color.
- [The Arc](https://thearc.org/) - Promotes and protects the human rights of people with intellectual and developmental disabilities.
- [Vestibular Disorders Association](https://vestibular.org/) - Patient organization for people with vestibular disorders, with information on motion triggers that matters for animation and reduced-motion design.
- [Vision Australia](https://www.visionaustralia.org/) - Australia's largest provider of blindness and low vision services.
- [World Blind Union](https://wbu.ngo/) - International organization representing blind and partially sighted people.
- [World Federation of the Deaf](https://wfdeaf.org/) - International federation of national Deaf associations, advocating for sign language rights.

### Professional communities

- [A11y Book Club](https://www.a11ybookclub.com/) - Community book club that reads and discusses accessibility books.
- [AppleVis](https://www.applevis.com/) - Community site for blind and low-vision users of Apple products, with app reviews, guides and forums.
- [International Association of Accessibility Professionals](https://www.accessibilityassociation.org/) - Professional association for accessibility practitioners, with certifications, chapters and events.
- [r/accessibility](https://www.reddit.com/r/accessibility/) - Reddit community for digital accessibility questions, career advice and news.
- [WebAIM discussion list](https://webaim.org/discussion/) - Long-running email list for discussing web accessibility.

### Events and conferences

- [Accessing Higher Ground](https://accessinghigherground.org/) - Conference on accessible media, universal design and assistive technology in higher education.
- [AHEAD Conference](https://www.ahead.org/events-programming/conferences) - Annual conference of the Association on Higher Education And Disability.
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
- [Sight Tech Global](https://sighttechglobal.com/) - Free virtual conference on AI and assistive technology for blind and low-vision people.
- [The AIDC Accessible and Inclusive Design Conference](https://www.theaidc.com/) - Virtual conference on accessible and inclusive learning environments.
- [Web for All (W4A)](https://www.w4a.info/) - Annual research conference on web accessibility.
- [WordPress Accessibility Day](https://wpaccessibility.day/) - Free 24-hour online conference on accessibility in WordPress and the wider web, with recordings published afterward.
- [Zero Project Conference](https://zeroproject.org/) - Annual conference at the UN in Vienna on innovative practices and policies for disability inclusion worldwide.

## Research and data

### Journals and proceedings

Article access varies: some venues mix open-access articles with subscription content.

- [ACM Transactions on Accessible Computing](https://dl.acm.org/journal/taccess) - ACM journal on computing and accessibility research.
- [arXiv accessibility research report](https://info.arxiv.org/about/accessibility_research_report.html) - arXiv's report on accessibility barriers in research papers and approaches to making scientific content accessible.
- [ASSETS proceedings](https://dl.acm.org/conference/assets) - Proceedings of the ACM SIGACCESS Conference on Computers and Accessibility.
- [Assistive Technology Outcomes and Benefits](https://www.atia.org/atobcurrentvolume/) - Journal focused on the outcomes and benefits of assistive technologies for individuals with disabilities.
- [Disability and Rehabilitation: Assistive Technology](https://www.tandfonline.com/journals/iidt20) - Journal focusing on the application of technology to improve individual functioning and quality of life.
- [Disability Studies Quarterly](https://dsq-sds.org/) - An academic journal on disability studies.
- [International Journal of Human–Computer Interaction](https://www.tandfonline.com/toc/hihc20/current) - Research journal on human-computer interaction, including accessibility.
- [Journal of Accessibility and Design for All](https://www.jacces.org/index.php/jacces) - Multidisciplinary journal that publishes theoretical and empirical research on accessibility.
- [Journal of Disability Research](https://www.scienceopen.com/collection/e1e3fd98-e818-47dc-a396-69009efa34e7) - Open-access disability research journal with CC BY 4.0 articles. Free to read; author publication charges apply, with eligibility-based waivers and discounts.
- [Journal of Enabling Technologies](https://www.emerald.com/insight/publication/issn/2398-6263) - Peer-reviewed journal formerly titled *Journal of Assistive Technologies*, covering technologies that support independence and participation.
- [Journal of Postsecondary Education and Disability](https://www.ahead.org/ahead-resources/written-resources/jped) - Peer-reviewed journal on disabled college students and disability services in higher education.
- [Journal of Special Education Technology](https://journals.sagepub.com/home/jst) - Journal focusing on technology used in special education.
- [Journal on Technology & Persons with Disabilities](https://www.csun.edu/cod/journal) - Open-access proceedings from the journal track of the CSUN Assistive Technology Conference, with links to current and previous volumes.
- [Review of Disability Studies](https://rdsjournal.org/index.php/journal) - A peer-reviewed, open-access academic journal providing an international forum for disability studies.
- [Taylor & Francis Online Disability & Society](https://www.tandfonline.com/journals/cdso20) - A disability studies journal focusing on human rights, discrimination, and policy.
- [Technology and Disability](https://journals.sagepub.com/home/tad) - AAATE's journal on assistive technology devices and services, now hosted by Sage. Articles mix open access and subscription access.
- [Universal Access in the Information Society](https://link.springer.com/journal/10209) - International journal on accessible technology and universal access.

### Data and statistics

- [Accessibility Atlas](https://github.com/data-poems/accessibility-atlas-dataset) - A collection of 62 datasets on disability demographics, employment, assistive technology usage, and web accessibility compliance.
- [Annual Disability Statistics Collection](https://www.researchondisability.org/annual-disability-statistics-collection) - A collection of tools and reports offering over 16 years of disability statistics.
- [Disability and Health Data System (DHDS)](https://dhds.cdc.gov/) - State-level data on adults with disabilities from the CDC.
- [EU Accessibility Mapping](https://github.com/sergordienko/eu-accessibility-mapping) - Open MIT dataset (JSON + CSV) crosswalking every WCAG 2.x A/AA success criterion to EN 301 549, the EU Accessibility Act, and Germany's BFSG, documenting the harmonized-standard chain that grants presumption of conformity.
- [The WebAIM Million](https://webaim.org/projects/million/) - WebAIM's annual automated accessibility analysis of the home pages of the top one million websites.
- [Web Almanac: accessibility](https://almanac.httparchive.org/en/2025/accessibility) - HTTP Archive's annual report on the state of the web, with a chapter measuring accessibility across millions of sites.
- [WebAIM Screen Reader User Survey](https://webaim.org/projects/screenreadersurvey10/) - Results of WebAIM's survey of screen reader users' preferences and habits; the tenth survey ran from December 2023 to January 2024.

## Contributing

Contributions are welcome: new resources, broken-link reports, better descriptions and ideas for organizing the list. Please read the [contribution guidelines](CONTRIBUTING.md) first, check the resource isn't already listed, and add it to the section where people would look for it.

Maintained by Luke Steuber ([dr.eamer.dev](https://dr.eamer.dev)). Released under [CC0 1.0](LICENSE).
