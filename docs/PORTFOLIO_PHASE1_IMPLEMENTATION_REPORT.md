# Phase 1 Implementation Report — Professional Identity, Accuracy, and Consistency

**Project:** Soumyadyuti Dey Portfolio
**Date:** 2026-11-09
**Scope:** Phase 1 only — factual accuracy and professional identity updates.
**Deployment status:** Not committed, pushed, or deployed.

## 1. Executive Summary

Phase 1 is complete as a narrow, content-focused update. The portfolio now presents Soumyadyuti Dey primarily as a **Software Engineer**, while retaining full-stack development, AI-powered applications, cloud systems, cybersecurity, and freelance-relevant technical capabilities. Computer Vision, Visual SLAM, and geometric vision are presented as growing interests rather than as formal research credentials.

The completed BCA is now stated accurately, unsupported `TechCorp Solutions` structured data has been removed, and the unverified 25% API-latency claim has been removed without inventing a replacement result. A subsequent owner-confirmed correction identifies Tynari as the employer and uses owner-approved wording for the work performed. No CSS, images, animation code, navigation, project/service structure, CV logic, or responsive rules were changed.

Browser-driven visual and responsive testing could not be completed because the available browser-access host was unavailable and then stopped URL inspection for safety. All supported static, syntax, data-integrity, content-consistency, and diff checks passed. This limitation is recorded below rather than represented as a completed browser test.

## 2. Files Changed

| File | Change | Reason | Impact |
|---|---|---|---|
| `index.html` | Corrected visible copy, metadata, JSON-LD, alt text, and one unsupported experience metric. | Establish an accurate identity and completed education status. | Content-only; existing elements, IDs, classes, and section order remain intact. |
| `manifest.json` | Synchronized PWA description and keywords with the corrected identity. | Prevent contradictory machine-readable identity claims. | Metadata-only. |
| `README.md` | Updated the short project and author descriptions. | Keep repository-facing identity consistent with the site. | Documentation-only. |
| `assets/js/script.js` | Softened three modal-copy phrases (`Expert`/`Expertise`) without changing object keys, mappings, events, or modal behavior. | Avoid duplicated exaggerated public identity wording. | Copy-only; service modal functionality is unchanged. |
| `docs/PORTFOLIO_PHASE1_IMPLEMENTATION_REPORT.md` | Added this implementation record. | Required Phase 1 deliverable. | Documentation-only. |

The pre-existing user modification `secure/resume.pdf` was not opened, edited, staged, regenerated, renamed, or reverted.

## 3. Before-and-After Text

| Area | Original | Updated | Location | Reason / audience |
|---|---|---|---|---|
| Page title | `Soumyadyuti Dey Portfolio` | `Soumyadyuti Dey \| Software Engineer` | `index.html:10` | Makes the primary identity clear to visitors and search previews. |
| Hero | `A passionate Cloud Architect, AI/ML Engineer, and Cybersecurity expert...` | `Software engineer with experience building full-stack applications, AI-powered systems, and cloud-based solutions. Currently exploring Computer Vision, Visual SLAM, and geometric vision through open-source engineering.` | `index.html:172` | Balances recruiter, freelance, and emerging research-engineering audiences without an unsupported research title. |
| About / education | `...currently completing my BCA...` | `...completed a Bachelor of Computer Applications (BCA) at The NorthCap University in 2026...` | `index.html:254` | Corrects the confirmed graduation status. |
| Expanded About | Cloud/AI/security-only framing and generic promotional conclusion. | Retains cloud, full-stack, AI/ML, cybersecurity, awards, and projects; adds a concise, factual Computer Vision direction. | `index.html:259-265` | Maintains engineering and commercial credibility while explaining the research trajectory. |
| Tynari metric | `...reducing API latency by 25%.` | Owner-approved architecture description without performance metrics. | `index.html:283` | Removes numerical performance precision that could not be locally substantiated. |
| Person schema | Multi-role expert title, cloud/security description, `worksFor: TechCorp Solutions`, inconsistent university casing. | `jobTitle: Software Engineer`; aligned description; no `worksFor`; `The NorthCap University`. | `index.html:89-105` | Removes unsupported employer attribution and reconciles machine-readable identity with visible content. |
| Social metadata | Cloud Architect / expert titles and "proven track record" wording. | Software-engineer title with full-stack, AI-powered, cloud, and Computer Vision-interest description. | `index.html:10-37` | Keeps SERP and share previews credible and consistent. |
| Image alt text | Keyword-like outdated titles. | `Soumyadyuti Dey, Software Engineer` and `Portrait of Soumyadyuti Dey`. | `index.html:231,249` | Improves identity accuracy while keeping natural accessibility descriptions. |
| PWA manifest | Cloud Architect / Cybersecurity Expert description and keywords. | Software Engineer / full-stack / AI-powered / cloud / Computer Vision-interest wording. | `manifest.json:4,27` | Keeps installable-app metadata consistent. |
| README author bio | `Cloud Architect \| AI/ML Engineer \| Cybersecurity Specialist` | `Software Engineer \| Full-Stack & AI Systems \| Computer Vision Interests` | `README.md:111` | Aligns repository documentation with the portfolio. |
| Service modal copy | `Expert` / `Expertise` language in cloud, AI/ML, and DevOps modal descriptions. | `Experienced` / `Experience with` wording. | `assets/js/script.js:634,645,667` | Retains service offerings and technical substance with less overstated phrasing. |

## 4. Experience Accuracy Review

All six timeline entries remain present, in their original order, with their existing titles and dates preserved. No employer relationship, date, employment status, or role was inferred or changed.

| Entry | Visible title | Visible date | Modified? | Evidence / unresolved uncertainty |
|---|---|---|---|---|
| Tynari | Full Stack Developer – AI/ML | Jan 2026 – Present | Yes — employer and description | The owner confirmed Tynari as the employer and approved the final description: `Architected and developed the core frontend and backend of a scalable SaaS platform, implementing a modular, decoupled architecture across the landing page, dashboard, and backend services to support maintainability and future growth.` Current status and dates were retained without inference. |
| Gurugram Police | Cybersecurity Intern | Jun 2026 | No | Preserved as-is; underlying experience evidence was not re-verified in Phase 1. |
| Yume | Software Development Engineer | Oct 2025 – Dec 2025 | No | Preserved as-is; no date or role inference made. |
| Amroha Police (U.P) | Cybersecurity Intern | Jun - Jul 2025 | No | Preserved as-is. |
| ThinkDex | System Engineer Intern | Apr - Jun 2025 | No | Preserved as-is; the About paragraph was neutrally phrased to avoid unverified performance-improvement outcomes. |
| Pikeazy | Application Test Engineer Intern | May - Jul 2024 | No | Preserved as-is. |

## 5. Protected Features and Scope Controls

The following were intentionally left untouched:

- CSS, fonts, color palette, dark mode, backgrounds, gradients, spacing, and responsive breakpoints.
- Hero, navbar, mobile navigation, section IDs, scroll behavior, scrollspy, and navigation order.
- Images, icons, animations, GSAP/AOS/ScrollReveal configuration, and interaction logic.
- Project cards, filters, Show More behavior, project order, service cards, and service modal mappings.
- Contact form and social/external links.
- CV challenge/download behavior and `secure/resume.pdf`.
- Existing achievement and experience-card structures.
- `docs/PORTFOLIO_REPOSITORY_RESEARCH_AUDIT.md`, `docs/PORTFOLIO_AI_SEARCH_GEO_AEO_LLMSTXT_AUDIT.md`, and `docs/Phase-1.md`.

No research section, contribution card, project restructuring, CV-system change, `llms.txt`, robots/sitemap change, or other later-phase work was implemented.

## 6. Validation Results

| Check | Method | Result |
|---|---|---|
| JavaScript syntax | `node --check assets/js/script.js` | Passed. |
| JSON-LD | Extracted both `application/ld+json` blocks with PowerShell, parsed with `ConvertFrom-Json`, and asserted `jobTitle = Software Engineer`, no `worksFor`, and correct university spelling. | Passed; two JSON-LD blocks parse successfully. |
| Manifest JSON | Parsed `manifest.json` with `ConvertFrom-Json`. | Passed. |
| `sameAs` links | Parsed each Person-schema profile link as a URI. | Passed syntactically; external reachability was not tested. |
| Navigation integrity | Compared all in-document `href="#..."` links with declared element IDs. | Passed; 11 links had no missing targets. |
| Content consistency | Searched first-party source outside `docs/` and `secure/` for obsolete BCA-student language, `TechCorp Solutions`, and the removed 25% claim. | No matches found. |
| Diff integrity | `git diff --check` | Passed; no whitespace errors. |
| Visual-change scope | Complete diff inspection | Passed: no CSS, image, animation, navigation, project, service-structure, or CV-system changes. |
| Impeccable detector | `impeccable.cmd detect --json index.html manifest.json README.md assets/js/script.js` | Reported pre-existing visual-style warnings (such as gradients, glow, typography, card nesting, and legacy inline styles). They are intentionally not changed because this Phase explicitly preserves the established visual design and no CSS was modified. |
| Browser / responsive interaction testing | Attempted local preview and browser automation. | Not available: the browser-access host was unavailable and Windows browser URL inspection was stopped by the tool's safety control. No claim of pixel-level or interactive browser validation is made. |

## 7. Unverified Claims and Owner Review Items

### Factual items intentionally left unchanged

1. Whether the Tynari role is currently active and whether `Jan 2026 – Present` is correct. The displayed date was preserved.
2. Exact dates, legal employment relationships, and supporting records for all six experience entries.
3. Awards, prize total, certification details, and project claims in the expanded About section. They were retained because Phase 1 did not include evidence review for each item.

### Corrected now

- BCA completion status and institution capitalization, based on owner-provided confirmed facts.
- Unsupported structured-data employer affiliation (`TechCorp Solutions`).
- Unsupported numerical latency claim.

## 8. Phase 2 Readiness

The portfolio is ready for Phase 2 research and open-source integration as a separate, reviewable change set. That phase can add a minimal Research & Open Source section using the existing visual conventions, after verifying Kornia, Kornia-SLAM, and Apache Iceberg/PyIceberg contribution facts and links. It can also evaluate evidence-based updates for Asansync, UnReel, and Scribe without altering the balanced Phase 1 identity.

## 9. Completion Statement

Phase 1 implementation is complete within the approved non-browser scope. The final implementation changes are limited to `index.html`, `manifest.json`, `README.md`, `assets/js/script.js`, and this report. The existing user-owned change to `secure/resume.pdf` remains separate and untouched. No dependencies were installed, no commit was created, and no push or deployment was performed.

## 10. Post-Implementation Factual Addendum

On 2026-11-09, the owner confirmed that **Tynari** is the employer for the first timeline entry. The timeline now identifies the company only as `Tynari`; the final owner-approved description is: `Architected and developed the core frontend and backend of a scalable SaaS platform, implementing a modular, decoupled architecture across the landing page, dashboard, and backend services to support maintainability and future growth.` The role title and displayed dates were not changed.
