# TODO

## Completed
- 2026-07-21: Restyled entire site to a davidoreilly.com-inspired aesthetic: system + Times New Roman typography (no webfonts), light/dark theme via CSS variables + `t` shortcut + localStorage, WebGL infinite checkerboard background, masonry tile homepage, square hairline tiles on all pages, bordered nav pill, rainbow per-letter wordmark hover.
- 2026-07-22: Removed the consulting page and all consulting references (nav, home tile, tagline, metadata).
- 2026-07-22: Publications page renders each paper as a square tile from the static data file (DBLP sync was built, then removed on request; data seeded once from DBLP, 16 papers, maintained manually in app/data/publications.ts).
- 2026-07-22: Nav restructured into two tabs: Professional (home + publications + projects) and Personal (new page).
- 2026-07-22: Replaced placeholder Google Scholar ID with the real one (0vaa2Z8AAAAJ) from the DBLP person record.

- 2026-07-22: Wordmark shows the complete name (NELSON NICOLΛS / HIGUERΛ RUIZ, two lines); metadata and footer updated to match. Removed all four stat boxes from the home page. Removed all PuduSoft references (timeline, project entry, contact email). Added ExtensityAI (AI Researcher, 2026 – present) to the timeline; contact email is now nelson.higueraruiz@extensity.ai.

- 2026-07-23: Published to GitHub Pages at https://pudumagico.github.io/ (repo pudumagico/pudumagico.github.io, static export via output: "export", Actions workflow deploy on push to main; old 2022 Jekyll stub preserved on the master branch). Footer GitHub link set to pudumagico.

- 2026-07-23: Removed the Personal tab and page on request (supersedes the pending item to fill it); nav back to About | Publications | Projects. Added sitemap.ts, robots.ts, and metadataBase for search indexing.

- 2026-10-14: Added meta keywords and an NH favicon (app/icon.svg, black square with white NH); removed the default Next.js favicon.ico.

- 2026-10-14: Timeline: ExtensityAI closed (Jan – Nov 2026); added CENIA postdoc (from Dec 2026). Keywords extended with CENIA, Pontificia Universidad Católica de Chile, PUC.

- 2026-10-14: Contact email changed to nhigueraruiz@gmail.com; CENIA entry org is plain "CENIA".

- 2026-10-14: Checkerboard background made static (no animation loop); it redraws only on resize and theme change.

- 2026-10-14: Replaced the WebGL perspective floor with a flat CSS checkerboard (40px squares, white/#ebebeb light, #333/#1a1a1a dark); deleted checkerboard.tsx.

- 2026-10-14: Checkerboard squares enlarged to 60px; removed emoji icons from interest tiles; home timeline split into Industry, Academic, and Education columns (PhD under Education) below the masonry tiles; compact tiles (period right-aligned on the role line) so the home page fits one 1440x900 screen.

## Pending
- Confirm the CENIA entry detail text.
- Confirm the ExtensityAI job title and timeline detail text (currently "AI Researcher" / "Research and development on neurosymbolic AI systems", my wording).
- Verify the site in Google Search Console and request indexing to speed up discovery.
