# Redesign validation

Branch: `portfolio-redesign`  
Base: `c2d29d61c95ab6e563b6b3485c823486e6908e50`  
Publication: approved by the user after local review. This record covers the pre-publication checks; deployment is verified through GitHub Pages.

## Browser checks

Verified in headless Chrome against a loopback HTTP server mounted at `/portfolio/`, matching the GitHub Pages path prefix.

- Desktop landing: no horizontal overflow, vertical scrolling, or overlap with header/footer at 1440×1000, 1366×768, 1280×720, 1440×600, 1366×650, and 1024×768.
- Mobile/tablet landing: 800×1024, 600×900, 390×844, and 320×720.
- Every panel: 1120×800, 768×1024, 390×844, and 320×720, with internal scrolling and an always-visible close control.
- All seven panel routes and direct `#projects/fiscal` case-study navigation.
- Browser Back/Forward between panels and case studies; close-to-home behavior; rapid navigation and recovery when browser history reaches its size cap.
- Forward and reverse keyboard focus wrapping, Escape, and backdrop close.
- All six case studies, all four project filters, all eight skill branches, all sixteen tool descriptions, four expandable timeline roles, and three analysis scenarios.
- Reduced-motion media preference, motion control, résumé-request mail links, and copy-introduction behavior.
- No JavaScript exceptions or failed local assets in the completed test run.

## Source checks

- Balanced HTML, unique IDs, and valid local stylesheet/script/favicon paths.
- Preserved page title and description; canonical and Open Graph URLs retain the current GitHub Pages address.
- Original six project data records, all four role records, capability descriptions, and analysis scenarios compare exactly with the previous site's data.
- Existing LinkedIn, email, and PSPO I Credly link retained.
- Résumé PDF remains excluded; the existing request-only action is functional.
- FiskalTrust/Germany narrative is high-level context supplied in the brief and earlier reference, separate from the retained original project records.
- `node --check` passed for both JavaScript modules.
- No third-party template source, framework, package dependencies, or company-logo assets added.

## Continuous-reader update

- Removed the duplicate center AH mark; the landing content now starts with the name.
- All seven main sections remain visible in one internally scrolling story. Tabs are shortcuts, and active section labels follow scrolling without adding browser history entries.
- Case-study Back/Forward navigation restores the story's reading position; case details remain a separate focused view.
- Fresh-page browser checks passed at desktop, tablet, and mobile sizes from 320 to 1440 pixels, including tab jumps, deep links, Escape, reduced motion, and absence of horizontal overflow or runtime errors.
- Both résumé actions open the user-supplied public Google Drive URL in a new tab. An anonymous check returned HTTP 200 with the résumé's Google Drive title. The PDF remains excluded from the repository.
