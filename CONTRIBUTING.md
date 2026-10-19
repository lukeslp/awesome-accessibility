## Contributing to Awesome Accessibility

Thanks for your interest in contributing to this list. I appreciate your help in making accessibility resources more discoverable.

### How to Contribute

#### Suggesting New Resources

If you want to suggest a new resource:

1. **Check for duplicates** - Search the list to ensure the resource isn't already included
2. **Verify quality** - Ensure the resource is high-quality, accurate, and actively maintained
3. **Open an issue** or submit a pull request with:
   - Resource name and URL
   - Brief description (1-2 sentences)
   - Category where it should be added
   - Why it's valuable for the accessibility community

#### Reporting Issues

If you find broken links, outdated info, or errors:

1. **Open an issue** with:
   - Clear description of the problem
   - Location in the list (section and item)
   - Suggested fix (if applicable)

#### Improving Existing Content

Contributions to improve descriptions, organization, or formatting are also welcome:

1. **Fork the repository**
2. **Make your changes** following the style guidelines below
3. **Submit a pull request** with a clear description

### Quality Standards

Resources on this list should:

- **Be relevant** to accessibility, assistive technology, or inclusive design
- **Be high-quality** and well-maintained
- **Be accessible** themselves (practice what they preach)
- **Provide value** to developers, designers, or accessibility practitioners
- **Be current** and actively updated

### Style Guidelines

#### Formatting

- Use Markdown formatting
- Keep descriptions concise (1-2 sentences)
- Use sentence case for titles
- Link straight to the resource, not to a listicle or landing page about it
- Keep entries in alphabetical order within each section
- Add each resource once, in the section where people would look for it first

#### Descriptions

- Start with what the resource is or does
- Explain why it's useful
- Keep it objective
- Avoid marketing language ("powerful", "industry-leading", "the best")
- Say if it's free, paid or open source, and give the license for open source projects
- Mention important limits honestly, for example "AI descriptions can be wrong" or "not cleared for clinical use"
- Don't add date tags such as "(Added 2025)"; git history records that

Example:
```markdown
- [Resource Name](https://example.com) - What it is, then why it's useful for accessibility work. Open source (MIT).
```

For books: `- [Title](https://publisher-or-author-page) - Author (Publisher, Year). One-sentence summary.`

### Sections

The list is organized by what people are doing:

- **Start here** - The basics, for people new to accessibility
- **Standards and guidelines** - WCAG, ARIA, EN 301 549 and guides to them
- **Laws and policy** - Official sources by region
- **Accessibility programs** - Maturity models, procurement, accessibility statements
- **Inclusive design** - Principles, design tools, color and contrast
- **Web development** - Guides, component libraries, developer libraries, widgets and overlays
- **Mobile and native apps** - iOS, Android and cross-platform
- **Testing and auditing** - Methods, browser tools, testing engines, linters, screen reader testing, online scanners
- **Content and media** - Documents and PDF, plain language, captions and audio description, data visualization, math, email
- **AI and accessibility** - AI in assistive technology, AI tools for builders, research and critique
- **Assistive technology** - Grouped by access need, from screen readers to AAC
- **Gaming**, **Built environment and maps**
- **Learning** - Courses, certification, books, podcasts, blogs
- **Community** - Disability organizations, professional communities, events
- **Research and data** - Journals and datasets

If a resource doesn't fit an existing section, suggest a new one in your pull request.

### Automated checks

Pull requests run two checks:

- **Links** - [lychee](https://lychee.cli.rs/) checks every link in the README and lists failures and redirects in the job summary. On pull requests it only reports; the weekly run on the main branch fails when a link breaks.
- **Lint** - [awesome-lint](https://github.com/sindresorhus/awesome-lint) checks formatting against the Awesome list guidelines. Run it locally with `npx awesome-lint README.md`.

### Pull Request Process

1. **Fork** the repository
2. **Create a branch** with a descriptive name (e.g., `add-nvda-resource`)
3. **Make your changes** following the guidelines above
4. **Test all links** to ensure they work
5. **Commit** with a clear message (e.g., "Add NVDA screen reader to assistive technology section")
6. **Submit pull request** with:
   - Description of what you're adding/changing
   - Why it's valuable
   - Any relevant context

### Commit Message Format

Use clear commit messages:

```
Add [Resource Name] to [Category]
Update [Resource Name] description
Fix broken link for [Resource Name]
Reorganize [Category] section
```

### What I'm Looking For

I especially welcome contributions that:

- Fill gaps in coverage (underrepresented areas)
- Add international/multilingual resources
- Include resources for specific disabilities
- Highlight emerging accessibility technologies
- Provide practical, actionable tools and guidance

### What Doesn't Belong

Please don't submit:

- Commercial products without clear accessibility value
- Vendor marketing posts and "top 10 tools" listicles
- New accessibility overlays (see the note in the README)
- Generic productivity apps with no accessibility focus
- Resources behind paywalls (unless exceptional)
- Self-promotion without substantial value (submitting your own project is fine; please say so in the pull request)
- Duplicate or very similar resources
- Outdated or unmaintained projects
- Off-topic content

### Questions?

If you're not sure if a resource fits, or have questions:

- **Open an issue** to discuss before submitting
- Check existing issues and pull requests for similar discussions
- Review the list to understand the style and quality standards

### Code of Conduct

By contributing, you agree to:

- Be respectful and inclusive
- Focus on constructive feedback
- Assume good intentions
- Help create a welcoming environment

### License

By contributing, you agree that your contributions will be licensed under CC0 (public domain).

---

Thanks for helping make accessibility resources more discoverable.

**Luke Steuber**

[dr.eamer.dev](https://dr.eamer.dev) | [dr.eamer.dev/datavis](https://dr.eamer.dev/datavis) | [dr.eamer.dev/code](https://dr.eamer.dev/code)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Luke%20Steuber-blue?logo=linkedin)](https://www.linkedin.com/in/lukesteuber/)
[![Bluesky](https://img.shields.io/badge/Bluesky-@lukesteuber.com-1DA1F2?logo=bluesky)](https://bsky.app/profile/lukesteuber.com)
[![CodePen](https://img.shields.io/badge/CodePen-lukeslp-black?logo=codepen)](https://codepen.io/lukeslp)
[![HuggingFace](https://img.shields.io/badge/HuggingFace-lukeslp-yellow?logo=huggingface)](https://huggingface.co/lukeslp)
[![Kaggle](https://img.shields.io/badge/Kaggle-lucassteuber-20BEFF?logo=kaggle)](https://www.kaggle.com/lucassteuber)
