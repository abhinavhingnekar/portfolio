# Abhinav Hingnekar · Interactive Career Hub

A full-screen, panel-based professional portfolio, developed on `portfolio-redesign` and approved for publication after local review. GitHub Pages publishes the `docs/` directory from `main` at https://abhinavhingnekar.github.io/portfolio/.

## Preview

From this checkout, run:

```sh
python3 -m http.server 4174 --bind 127.0.0.1
```

Open http://localhost:4174/docs/. This tests the site under a subdirectory, as GitHub Pages serves it under `/portfolio/`.

## Structure

- `docs/index.html`: Landing screen, seven panels, vector icon library, SEO metadata, and no-JavaScript fallback.
- `docs/content.js`: Retained professional data: roles, case studies, capabilities, tools, and analysis scenarios.
- `docs/app.js`: Hash routing, panel transitions, browser history, project filters and case studies, skills interaction, clipboard support, and motion preferences.
- `docs/styles.css`: Midnight-navy visual system, translucent panels, SVG network atmosphere, and responsive layouts.
- `docs/favicon.svg`: Custom AH monogram.

No framework, build step, contact backend, or runtime package dependencies are required. Serve over HTTP; ES modules do not work reliably when opened directly through `file://`.

## Navigation and accessibility

- Links such as `#experience` and `#projects/hub` open panels directly.
- All seven main sections form a continuous vertical story, with tabs as section shortcuts.
- The active tab, section counter, and URL follow the reader’s scroll position without adding extra history entries.
- Browser Back and Forward restore the corresponding view and reading position.
- Close or Escape returns to the home screen. Case studies also provide an All projects action.
- Native modal dialog behavior contains keyboard focus; closing restores focus to the initiating home control.
- The reading surface scrolls internally from About through Contact. Expanded case studies remain a focused view with a return path to the project gallery. Mobile layouts allow comfortable landing-page scrolling.
- Motion can be paused. System reduced-motion preferences suppress animation and transition delays.
- Professional content is available through a basic no-JavaScript fallback.

## Content and privacy

Career and project source data are retained from the existing portfolio. The FiskalTrust/Germany context and high-level technical considerations are grounded in the supplied redesign brief and earlier portfolio reference. No new metrics, employment, degrees, photos, or third-party company logos have been invented.

The résumé PDF remains excluded from the repository. The landing and Contact résumé actions open the public Google Drive URL supplied by the user in a new tab.

## Assets

The layout and components are original. The panel interaction model was inspired by [HTML5 UP Dimension](https://html5up.net/dimension); no template code or template assets were copied. The SVG icons and AH monogram are local vector assets. Manrope and Outfit load through Google Fonts, with system fallbacks.
