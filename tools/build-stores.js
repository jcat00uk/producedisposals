// Regenerates stores/stores.json — the manifest index.html's store dropdown
// fetches to know which stores exist. Run this after adding or removing a
// file under stores/, then commit the updated stores.json alongside it.
//
//   node tools/build-stores.js

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const STORES_DIR = path.join(ROOT_DIR, 'stores');
const MANIFEST_PATH = path.join(STORES_DIR, 'stores.json');

function readStoreInfo(filePath, relLabel) {
  let raw;
  try {
    raw = fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    console.warn(`skip ${relLabel}: could not read file (${e.message})`);
    return null;
  }
  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    console.warn(`skip ${relLabel}: invalid JSON (${e.message})`);
    return null;
  }
  const store = data.store;
  if (!store || !store.name || !store.number) {
    console.warn(`skip ${relLabel}: missing "store": { "name", "number" }`);
    return null;
  }
  return { name: String(store.name), number: String(store.number) };
}

function main() {
  fs.mkdirSync(STORES_DIR, { recursive: true });

  const defaultInfo = readStoreInfo(path.join(ROOT_DIR, 'data.json'), 'data.json');
  if (!defaultInfo) {
    console.error('data.json must have a "store" field — aborting');
    process.exit(1);
  }
  const entries = [{ number: defaultInfo.number, name: defaultInfo.name, file: 'data.json' }];

  const files = fs.readdirSync(STORES_DIR)
    .filter(f => f.endsWith('.json') && f !== 'stores.json')
    .sort();

  const seenNumbers = new Set([defaultInfo.number]);
  for (const file of files) {
    const info = readStoreInfo(path.join(STORES_DIR, file), `stores/${file}`);
    if (!info) continue;
    if (seenNumbers.has(info.number)) {
      console.warn(`skip stores/${file}: duplicate store number "${info.number}"`);
      continue;
    }
    seenNumbers.add(info.number);
    entries.push({ number: info.number, name: info.name, file: `stores/${file}` });
  }

  // default stays pinned first; everything else sorted by store number
  const [defaultEntry, ...rest] = entries;
  rest.sort((a, b) => a.number.localeCompare(b.number, undefined, { numeric: true }));

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify([defaultEntry, ...rest], null, 2) + '\n');
  console.log(`Wrote stores/stores.json with ${entries.length} store(s):`);
  for (const e of [defaultEntry, ...rest]) console.log(`  ${e.number} — ${e.name}  (${e.file})`);
}

main();
