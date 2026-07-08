# Crate Log — Handover for Claude Code

## What this is

A produce waste-disposal reference tool for a supermarket. Staff find a
product on `index.html`, tap it to see an enlarged QR code, and scan that
with a separate handheld device that does the actual disposal logging
(that handset app is out of scope — this tool is purely "find the right
product, show its QR").

`aisle-editor.html` is the companion desk tool for maintaining the data:
aisles, categories, and products.

Solo dev project, part of Johnboy's personal tools alongside Ring Reminder,
Mum's Messages, and BingoNingo. No build step, no framework, no backend —
static HTML/CSS/JS, same pattern as ShiftBook and the SSPSA Print Tool.

## File structure

```
waste-scanner/
├── index.html        # the finder tool staff use
├── style.css          # shared styling, dark warehouse-friendly theme
├── app.js              # finder logic + embedded fallback dataset (see below)
├── aisle-editor.html  # standalone desk tool, fully self-contained (inline JS/CSS)
├── data.json          # exported dataset — see "data flow" below for how this is used
├── manifest.json       # PWA "add to home screen" support
└── README.md          # user-facing docs (keep this updated — it's the source of truth for *why* things work the way they do)
```

## Data model

```json
{
  "version": 1,
  "aisles": ["Salad", "Veg", "Fruit"],
  "categories": [
    { "name": "Apples & Pears", "aisle": "Fruit" },
    ...
  ],
  "products": [
    { "id": "p001", "name": "JS Braeburn Apple Single", "category": "Apples & Pears", "sku": "6617773" },
    ...
  ]
}
```

Key design decision: **a product's aisle is never stored directly — it's
always derived from its category** (`resolveAisle()` in both `app.js` and
`aisle-editor.html`, duplicated logic, currently no shared module since
there's no build step). A product with `category: ""` falls back to its own
`fallbackAisle` field. Changing a category's aisle in the editor instantly
moves every product in it — that was a deliberate fix after an earlier
version let aisle and category drift out of sync per-product.

92 products currently. 87 have real SKUs pulled from a barcode PDF the user
provided (Sainsbury's Supermarkets range). 5 Convenience-range items are
still missing SKUs — listed in README.md.

Categories were built from Sainsbury's real site taxonomy (scraped their
static category pages — their product pages are JS-rendered SPA and
couldn't be scraped directly, only the category structure could). A couple
of judgement calls where that taxonomy didn't give a clean answer are
flagged in README.md ("Spring Onions" placement, "World & Speciality Veg"
bucket for niche items) — **worth confirming with the user before this
becomes what staff rely on**.

## Data flow (this is the part most likely to need debugging)

Both pages try, in order:
1. `fetch('data.json')` — the intended long-term source of truth. Only
   works when served over real `http(s)://`, not `file://`.
2. `localStorage['cratelog_data']` — per-browser saved edits, used when
   fetch fails or when local edits exist that haven't been re-published.
3. `BASE_DATA` / `DATA` embedded directly in `app.js` — last-resort
   fallback baked in at the top of the file, should NOT need manual
   maintenance going forward now that (1) exists.

Favourites are intentionally a **separate** localStorage key
(`cratelog_favourites`), device-local, never part of the exported/shared
dataset — the user was explicit that favourites shouldn't live in
`data.json`.

A data-source indicator dot next to the ⚙ icon in `index.html` shows which
of the three sources is currently active (green/blue/red — see `app.js`
`renderDataBadge()`).

**Known sharp edge:** `file://` pages (opened by double-clicking rather
than served) can't `fetch()` local JSON and don't share `localStorage`
with each other even in the same folder. This has caused real confusion
in this project already (deleted items appearing to persist, edits not
showing up) — if the user reports data not updating, ask how they're
opening the files before debugging anything else.

## Editor tool specifics (`aisle-editor.html`)

Single self-contained HTML file, inline `<style>` and `<script>`, no
external dependencies. Has:
- Aisles panel (add/rename/delete, cascades to categories)
- Categories panel (add/rename/delete, each owns an aisle dropdown)
- Products table (name, category dropdown w/ 🪄 auto-suggest, derived
  read-only aisle unless uncategorised, SKU, favourite-default checkbox,
  delete)
- Auto-categorise: keyword ruleset (`AUTO_RULES` in the `<script>`) ported
  from the original Python classification pass — kept in sync manually,
  no shared source with any offline script (there isn't one anymore, this
  is now the only copy)
- Loads from browser storage / fetches `data.json` / imports a file;
  saves to browser storage or exports a file

## Known judgement calls / open questions for the user

1. Spring onions classified as Salad — no confirmed Sainsbury's category
   page backs this up, was a guess based on typical in-store placement.
2. "World & Speciality Veg" is a custom bucket (dudhi, cassava, mooli,
   chayote, kohlrabi, plantain, horseradish, fennel) — Sainsbury's
   mainstream taxonomy doesn't cover these individually.
3. 5 Convenience-range products still have no SKU — user would need to
   provide a barcode sheet for that range, same as was done for
   Supermarkets.
4. True multi-device sync isn't possible with this static/no-backend
   architecture — flagged to the user already, hasn't been asked for
   explicitly, don't build it unprompted.

## Things NOT yet built (mentioned but out of scope so far)

- Offline service worker / caching
- The actual handset scanning/logging app (explicitly a separate system,
  not this tool's job)
- Any backend/server component

## Style conventions used so far

- Dark, warehouse-friendly palette (`--bg: #1B211D`, `--veg: #D9A441` as
  primary accent, `--fruit`/`--salad` as secondary accents tied to aisle
  colour-coding)
- Oswald for display/headers, Inter for body, IBM Plex Mono for SKU/data
- Colour-coded left edge on cards/rows to indicate aisle at a glance
- `[hidden] { display: none !important; }` is load-bearing — without it,
  elements using `display: flex` in their own class rule won't respect the
  `hidden` attribute (bit us once already, caused a fullscreen overlay bug)

## Suggested first task in Claude Code

Read through `app.js` and `aisle-editor.html` in full before changing
anything — `resolveAisle()` logic is duplicated between them with no shared
module, so any change to the data model needs to be mirrored in both
places by hand. A reasonable early improvement would be extracting shared
logic (data loading, `resolveAisle`, `AUTO_RULES`) into a single `data.js`
both pages load, now that there's no reason to keep `aisle-editor.html`
fully self-contained in one file.
