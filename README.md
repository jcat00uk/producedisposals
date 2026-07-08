# Crate Log — Produce Finder

A mobile-first reference tool: find a product, see its QR code, scan it with
your handheld disposal scanner. This page doesn't log anything itself — that
happens in your separate handset app.

## Files

- `index.html` / `style.css` / `app.js` — the finder tool
- `aisle-editor.html` — desk tool to manage aisles, categories, and products
- `manifest.json` — "Add to Home Screen" support
- `data.json` — the underlying dataset (aisles + categories + products), for
  reference / manual import into the editor

## Where the data comes from now

Both pages now try, in this order:

1. **Fetch `data.json`** — works when the page is served over a real
   `http(s)://` URL (GitHub Pages, Cloudflare Pages, or a local server like
   `python3 -m http.server`). This is the intended long-term source of
   truth: edit in `aisle-editor.html`, export, replace the `data.json` file
   on your host, done. No re-baking, nothing sent back to me.
2. **This browser's `localStorage`** — if `data.json` couldn't be reached
   (most commonly because you opened the file directly, `file://`, which
   browsers block `fetch()` on), or if you've made edits in this browser
   since the last time `data.json` was published.
3. **The copy embedded in `app.js`** — last-resort fallback only, so the
   page never shows blank. You shouldn't need to maintain this by hand
   going forward.

A small dot next to the ⚙ icon shows which one's active (hover it): green =
published `data.json`, blue = local edits in this browser, red = fallback
default (usually means `data.json` couldn't be reached).

If you're in Admin mode and your local edits have drifted from a newer
published `data.json`, a **"Sync from data.json"** button appears — pulls
the freshly published version in, discarding local edits (asks for
confirmation first).

**`file://` caveat still applies:** opening the HTML files directly by
double-clicking blocks both the `fetch()` above and any `localStorage`
sharing between the two pages. For real use, host both files on the same
site. For quick local testing without hosting anything, use Admin mode →
**Load data file…** to manually pull in an exported `data.json`.


## Aisles & categories (points 2, 3, 4)

Restructured so a **category always belongs to one aisle** — you no longer
set aisle and category separately per product. In the editor:

- **Aisles panel** — add, rename, or delete aisles. Starts with your three
  (Salad / Veg / Fruit) as the default, but if a store has a different
  layout, add or rename freely. Deleting an aisle moves its categories to
  whichever aisle is now first in the list (you'll get a confirmation
  showing how many categories are affected).
- **Categories panel** — each row is a category with an aisle dropdown.
  Change the dropdown and every product in that category moves aisle
  instantly, everywhere. Rename a category and it updates on every product
  using it. Delete one and you'll be asked which aisle to fall back to for
  the products that lose it.
- **Products table** — category is now a dropdown (with a 🪄 auto-suggest
  button next to it) rather than free text, so you can't create near-duplicate
  categories by typo. The Aisle column is read-only *when a category is set*
  (because the category decides it) — it only becomes an editable dropdown
  for products with no category at all.
- A coloured left-edge on each row (green/amber/red) makes it easy to
  eyeball which aisle a row belongs to without reading text (point 1).

## Auto-categorise

- **Auto-fill empty categories** (toolbar) — runs the same keyword logic
  used to build the original 92 products across every row with no category,
  and reports how many it filled vs. couldn't guess.
- **🪄 per row** — same suggestion, one product at a time (handy right after
  adding a new one).
- Neither overwrites a category you've already set.

## Finder tool changes (index.html)

- **Filter by category** — yes, in the Filters panel, scoped to whichever
  aisle tab is selected (point 6).
- **Sorted/grouped by category by default** now, not A–Z (point 7) — switch
  back to A–Z in Filters if you'd rather.
- **Favourites are device-local**, not part of the shared dataset (point 8)
  — tapping ☆ only writes to this browser's own separate storage, so it
  never gets exported, overwritten, or synced between devices along with
  the product data.
- Filters are now a single centred row that wraps on narrow screens
  (point 10), and the category dropdown uses proper light-on-dark styling
  so it's actually readable (point 11).
- **Tap the SKU text on any card to copy it** (point 12) — small toast
  confirms the copy.
- A small dot next to the ⚙ icon turns green once you're viewing data saved
  in this browser (vs. the built-in defaults) — useful for confirming
  whether your edits actually landed.

## A few other thoughts (point 13)

- **True multi-device sync** isn't possible with a purely static, no-backend
  setup — `localStorage` is inherently per-browser. If several people need
  to edit this from different devices and always see the same live data,
  that needs a small backend (even something lightweight like a Cloudflare
  Worker + KV store, or a shared Google Sheet as the source of truth) rather
  than local storage. Worth flagging now rather than after you've put a lot
  of editing time in on one device.
- Consider a **"last updated"** timestamp stamped into the data on every
  save, shown quietly on `index.html` — makes it obvious at a glance whether
  what you're looking at is current.
- The **niche/world veg** and **spring onion** categorisation calls I made
  are still guesses dressed up as structure now (they've got a real aisle
  attached) — worth a five-minute pass in the editor to confirm they're
  right before this becomes the thing staff rely on day-to-day.

## Troubleshooting: changes not showing up

Two separate causes, both fixed this round:

1. **`index.html` never read `data.json`.** It only ever used the data baked
   into `app.js`, plus whatever's in `localStorage`. Editing `data.json`
   directly, or exporting a new one from the editor, did nothing on its own
   — there was no code path that loaded it. Fixed: Admin mode (⚙) now has a
   **"Load data file…"** button that reads any exported `data.json` straight
   in, no hosting setup required.

2. **`file://` pages don't share `localStorage` with each other**, even in
   the same folder — each local file gets its own isolated storage in most
   browsers. So if you were opening `index.html` and `aisle-editor.html` by
   double-clicking them rather than serving them from a real `http(s)://`
   origin, "Save to this browser" in the editor and the data `index.html`
   reads were never actually the same storage. Two ways around this:
   - Serve both from the same origin (your GitHub Pages / Cloudflare Pages
     site, or even a quick local server like `python3 -m http.server` in
     this folder) — then the automatic sync described below works properly.
   - Or just use **Export file** in the editor → **Load data file…** in
     Admin mode on `index.html`. Works regardless of hosting.

Also bumped a cache-busting version (`?v=4`) on `style.css` and `app.js` in
`index.html` — browsers can hold onto old copies of those otherwise. If
something still looks stale, hard-refresh (Ctrl/Cmd+Shift+R).

## Favourites (point 4 — how to mark one)

Tap the ☆ next to the aisle badge on any card (top-left of the card's text,
not the corner overlapping the QR code — that was the bug: it used to sit
directly on top of the QR square and was easy to miss/mistap). It turns
into ★ and the item shows under *Filters → Favourites*. Device-local only,
as before — never part of the shared/exported data.

## Copy-to-copy SKU toast

This was already wired up, but if it wasn't visibly working for you it was
very likely the caching issue above — worth retesting now with a hard
refresh. Tap the SKU text on any card; a small toast confirms the copy.

## Product images

Switched to the more consistent URL format:
`https://assets.sainsburys-groceries.co.uk/gol/{sku}/image.jpg`

## SKU coverage

87 of 92 products have real SKUs (from the barcode PDF). Still missing —
Convenience-range items not in that PDF:

- JS Fairtrade Banana Single (C)
- Js Brown Onion Single (C)
- Js Butternut Squash (C)
- Js Red Onion Single (C)
- Js Ripe & Ready Single Mango
