# Texas Interactive Map — Build Plan & Status

Companion to [CONTENT.md](./CONTENT.md) (the content source of truth). This tracks the build steps, which Claude model to use for each, and current status.

## Tech stack
Plain HTML + CSS + vanilla JavaScript with inline SVG. No framework, no build step. Data lives in `data/*.js` so content edits never require touching app logic.

## File map
- `index.html` — page shell, dropdown, SVG layers, info panel
- `styles.css` — layout, region highlight/dim effects, labels, responsive breakpoint (≤760px stacks vertically)
- `app.js` — mode switching, click-to-activate (brighten + lift + scale, others dim), info panel rendering, keyboard/ARIA support, deep links
- `data/regions.js` — Mode A content (Geographic Regions)
- `data/nativePeoples.js` — Mode B content (Native People)
- `data/mapShapes.js` — all SVG geometry: outline, region shapes both modes, subregion lines/labels, region name labels, city coordinates
- `.claude/launch.json` — local dev server (`npx serve` on port 5173)

## Deep links (useful for Wix)
- `?mode=native` — open on the Native People map
- `?mode=geography&region=great-plains` — open with a region pre-selected
- Region ids: `coastal-plains`, `north-central-plains`, `great-plains`, `mountains-basins`, `gulf-culture`, `plains-culture`, `puebloan-culture`, `southeastern-culture`

## Steps & status

| # | Step | Model rec | Status |
|---|------|-----------|--------|
| 0 | Scaffold project (git init, file stubs) | Haiku | ✅ Done |
| 1 | Data files from CONTENT.md (5th-grade paragraphs) | Sonnet | ✅ Done |
| 2 | Base map + region shapes, both modes | Sonnet/Opus | ✅ Done (projection-based outline; tiling verified — 0 gaps/overlaps; city hit-tests match the class map packet) |
| 3 | Core interactivity (dropdown, click/brighten/raise, info panel, reset) | Sonnet | ✅ Done (verified programmatically + screenshots) |
| 4 | Style & polish (responsive, labels, ARIA/keyboard) | Sonnet | ✅ Done (mobile 390px verified; label collisions checked in both modes) |
| 5 | Local QA | Sonnet | ✅ Done (all 8 regions clicked in both modes, console clean) |
| 6 | Deploy to static hosting (GitHub Pages recommended) | Sonnet or Haiku | ⬜ Next — needs: git commit, GitHub repo, enable Pages |
| 7 | Wix iframe embed (snippet + instructions) | Sonnet | ⬜ After deploy |
| 8 | Final accuracy & reading-level pass against CONTENT.md + TEKS list | Opus (or Fable) | ⬜ Last |

## Verification checklist (for steps 6–8)
- Visit the live URL; click all 4 regions in both dropdown modes; confirm brighten/lift effect and correct paragraphs.
- Embed the iframe in a draft Wix page; confirm interactive at Wix's given size; test on a phone.
- Re-read every paragraph against CONTENT.md for accuracy and 5th-grade reading level.

## Notes / known nuances
- **Waco** is tagged under North Central Plains (matches CONTENT.md + the class map packet), but the Coastal Plains Blackland-Prairie paragraph also mentions it — Waco genuinely sits on the boundary (Balcones fault). Both mentions are intentional.
- Cultural regions ≠ geographic regions on purpose; the two maps use different shapes (per the classroom reference maps).
- The state outline is derived from real Texas border GeoJSON (projected + Douglas-Peucker simplified to ~200 points) so the Rio Grande, Red River, and Gulf coast curve naturally; the interior region boundaries remain stylized polylines. Regeneration scripts live in the session scratchpad (`gen-shapes.js` + `compose-mapshapes.js`) and are documented in the header of `data/mapShapes.js`.
- Local preview: the `static-site` launch config serves on `http://localhost:5173`.
