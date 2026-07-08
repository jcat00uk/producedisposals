const BASE_DATA = {
  "version": 1,
  "aisles": [
    "Salad",
    "Veg",
    "Fruit"
  ],
  "categories": [
    {
      "name": "Apples & Pears",
      "aisle": "Fruit"
    },
    {
      "name": "Aubergine & Squash",
      "aisle": "Veg"
    },
    {
      "name": "Avocados",
      "aisle": "Veg"
    },
    {
      "name": "Bananas",
      "aisle": "Fruit"
    },
    {
      "name": "Broccoli, Cauliflower & Brassicas",
      "aisle": "Veg"
    },
    {
      "name": "Cabbage",
      "aisle": "Veg"
    },
    {
      "name": "Citrus",
      "aisle": "Fruit"
    },
    {
      "name": "Corn & Sweetcorn",
      "aisle": "Veg"
    },
    {
      "name": "Cucumber & Celery",
      "aisle": "Salad"
    },
    {
      "name": "Kiwi",
      "aisle": "Fruit"
    },
    {
      "name": "Lettuce",
      "aisle": "Salad"
    },
    {
      "name": "Melons",
      "aisle": "Fruit"
    },
    {
      "name": "Mushrooms",
      "aisle": "Veg"
    },
    {
      "name": "Onions, Garlic & Ginger",
      "aisle": "Veg"
    },
    {
      "name": "Peppers",
      "aisle": "Veg"
    },
    {
      "name": "Potatoes & Sweet Potatoes",
      "aisle": "Veg"
    },
    {
      "name": "Root Vegetables",
      "aisle": "Veg"
    },
    {
      "name": "Spring Onions",
      "aisle": "Salad"
    },
    {
      "name": "Tomatoes",
      "aisle": "Salad"
    },
    {
      "name": "Tropical & Exotic Fruit",
      "aisle": "Fruit"
    },
    {
      "name": "World & Speciality Veg",
      "aisle": "Veg"
    }
  ],
  "products": [
    {
      "id": "p001",
      "name": "AB Jersey New Potatoes Loose",
      "category": "Potatoes & Sweet Potatoes",
      "sku": "1198850"
    },
    {
      "id": "p002",
      "name": "JS Aubergine Single",
      "category": "Aubergine & Squash",
      "sku": "6026956"
    },
    {
      "id": "p003",
      "name": "JS Baby Watermelon",
      "category": "Melons",
      "sku": "6411148"
    },
    {
      "id": "p004",
      "name": "JS Baking Potatoes Loose",
      "category": "Potatoes & Sweet Potatoes",
      "sku": "1193961"
    },
    {
      "id": "p005",
      "name": "JS Braeburn Apple Single",
      "category": "Apples & Pears",
      "sku": "6617773"
    },
    {
      "id": "p006",
      "name": "JS Bramley Apples Loose",
      "category": "Apples & Pears",
      "sku": "1191851"
    },
    {
      "id": "p007",
      "name": "JS Broccoli Loose",
      "category": "Broccoli, Cauliflower & Brassicas",
      "sku": "1192001"
    },
    {
      "id": "p008",
      "name": "JS Brussels Sprouts Loose",
      "category": "Broccoli, Cauliflower & Brassicas",
      "sku": "1197105"
    },
    {
      "id": "p009",
      "name": "JS Butternut Squash Loose",
      "category": "Aubergine & Squash",
      "sku": "1197303"
    },
    {
      "id": "p010",
      "name": "JS Cantaloupe Melon",
      "category": "Melons",
      "sku": "5494"
    },
    {
      "id": "p011",
      "name": "JS Carrots Loose",
      "category": "Root Vegetables",
      "sku": "1192049"
    },
    {
      "id": "p012",
      "name": "JS Cassava Loose",
      "category": "World & Speciality Veg",
      "sku": "7680910"
    },
    {
      "id": "p013",
      "name": "JS Cauliflower Single",
      "category": "Broccoli, Cauliflower & Brassicas",
      "sku": "758"
    },
    {
      "id": "p014",
      "name": "JS Celeriac",
      "category": "Root Vegetables",
      "sku": "8200621"
    },
    {
      "id": "p015",
      "name": "JS Celery",
      "category": "Cucumber & Celery",
      "sku": "805353"
    },
    {
      "id": "p016",
      "name": "JS Chayote Loose",
      "category": "World & Speciality Veg",
      "sku": "8144874"
    },
    {
      "id": "p017",
      "name": "JS Closed Cup White Mushrooms Loose",
      "category": "Mushrooms",
      "sku": "1192070"
    },
    {
      "id": "p018",
      "name": "JS Coconut Single",
      "category": "Tropical & Exotic Fruit",
      "sku": "475020"
    },
    {
      "id": "p019",
      "name": "JS Conference Pear Single",
      "category": "Apples & Pears",
      "sku": "6620654"
    },
    {
      "id": "p020",
      "name": "JS Courgettes Loose",
      "category": "Aubergine & Squash",
      "sku": "1192056"
    },
    {
      "id": "p021",
      "name": "JS Cox Apple Single",
      "category": "Apples & Pears",
      "sku": "7983670"
    },
    {
      "id": "p022",
      "name": "JS Dudhi Loose",
      "category": "World & Speciality Veg",
      "sku": "8144878"
    },
    {
      "id": "p023",
      "name": "JS Easy Peeler Single",
      "category": "Citrus",
      "sku": "7555804"
    },
    {
      "id": "p024",
      "name": "JS Fairtrade Banana Single (C)",
      "category": "Bananas",
      "sku": null
    },
    {
      "id": "p025",
      "name": "JS Fairtrade Bananas Loose",
      "category": "Bananas",
      "sku": "1196757"
    },
    {
      "id": "p026",
      "name": "JS Fennel Loose",
      "category": "World & Speciality Veg",
      "sku": "1197211"
    },
    {
      "id": "p027",
      "name": "JS Galia Melon",
      "category": "Melons",
      "sku": "3476"
    },
    {
      "id": "p028",
      "name": "JS Garlic Single",
      "category": "Onions, Garlic & Ginger",
      "sku": "529525"
    },
    {
      "id": "p029",
      "name": "JS Giant Mango Single",
      "category": "Tropical & Exotic Fruit",
      "sku": "7971225"
    },
    {
      "id": "p030",
      "name": "JS Giant Pomegranate Single",
      "category": "Tropical & Exotic Fruit",
      "sku": "8206688"
    },
    {
      "id": "p031",
      "name": "JS Ginger Loose",
      "category": "Onions, Garlic & Ginger",
      "sku": "1198621"
    },
    {
      "id": "p032",
      "name": "JS Granny Smith Apple Single",
      "category": "Apples & Pears",
      "sku": "7533845"
    },
    {
      "id": "p033",
      "name": "JS Green Pepper Single",
      "category": "Peppers",
      "sku": "1236620"
    },
    {
      "id": "p034",
      "name": "JS Honeydew Melon",
      "category": "Melons",
      "sku": "7559"
    },
    {
      "id": "p035",
      "name": "JS Horseradish Loose",
      "category": "World & Speciality Veg",
      "sku": "7076090"
    },
    {
      "id": "p036",
      "name": "JS Iceberg Lettuce",
      "category": "Lettuce",
      "sku": "714310"
    },
    {
      "id": "p037",
      "name": "JS Kohlrabi Single",
      "category": "World & Speciality Veg",
      "sku": "8195416"
    },
    {
      "id": "p038",
      "name": "JS Large Cucumber",
      "category": "Cucumber & Celery",
      "sku": "680646"
    },
    {
      "id": "p039",
      "name": "JS Large Kiwi Fruit",
      "category": "Kiwi",
      "sku": "24"
    },
    {
      "id": "p040",
      "name": "JS Large Pineapple",
      "category": "Apples & Pears",
      "sku": "807722"
    },
    {
      "id": "p041",
      "name": "JS Large R&R Avocado",
      "category": "Avocados",
      "sku": "302630"
    },
    {
      "id": "p042",
      "name": "JS Leeks Loose",
      "category": "Root Vegetables",
      "sku": "1193954"
    },
    {
      "id": "p043",
      "name": "JS Lemons Single",
      "category": "Citrus",
      "sku": "93"
    },
    {
      "id": "p044",
      "name": "JS Limes Single",
      "category": "Citrus",
      "sku": "209762"
    },
    {
      "id": "p045",
      "name": "JS Mango Single",
      "category": "Tropical & Exotic Fruit",
      "sku": "336734"
    },
    {
      "id": "p046",
      "name": "JS Medium R&R Avocado",
      "category": "Avocados",
      "sku": "7658"
    },
    {
      "id": "p047",
      "name": "JS Mooli Loose",
      "category": "World & Speciality Veg",
      "sku": "1331738"
    },
    {
      "id": "p048",
      "name": "JS Onions Loose",
      "category": "Onions, Garlic & Ginger",
      "sku": "1192094"
    },
    {
      "id": "p049",
      "name": "JS Orange Pepper Single",
      "category": "Citrus",
      "sku": "1236637"
    },
    {
      "id": "p050",
      "name": "JS Oranges Single",
      "category": "Citrus",
      "sku": "79"
    },
    {
      "id": "p051",
      "name": "JS Organic Cucumber",
      "category": "Cucumber & Celery",
      "sku": "1050110"
    },
    {
      "id": "p052",
      "name": "JS Papaya Single",
      "category": "Tropical & Exotic Fruit",
      "sku": "478755"
    },
    {
      "id": "p053",
      "name": "JS Parsnips Loose",
      "category": "Root Vegetables",
      "sku": "1197099"
    },
    {
      "id": "p054",
      "name": "JS Passion Fruit Single",
      "category": "Tropical & Exotic Fruit",
      "sku": "8142103"
    },
    {
      "id": "p055",
      "name": "JS Persimmon Single",
      "category": "Tropical & Exotic Fruit",
      "sku": "8142109"
    },
    {
      "id": "p056",
      "name": "JS Pineapple Single",
      "category": "Apples & Pears",
      "sku": "8176887"
    },
    {
      "id": "p057",
      "name": "JS Pink Lady Apple Single",
      "category": "Apples & Pears",
      "sku": "6617988"
    },
    {
      "id": "p058",
      "name": "JS Plantain Loose",
      "category": "World & Speciality Veg",
      "sku": "8144869"
    },
    {
      "id": "p059",
      "name": "JS Pomegranate Single",
      "category": "Tropical & Exotic Fruit",
      "sku": "217743"
    },
    {
      "id": "p060",
      "name": "JS Red Cabbage each",
      "category": "Cabbage",
      "sku": "8091687"
    },
    {
      "id": "p061",
      "name": "JS Red Grapefruit Single",
      "category": "Citrus",
      "sku": "466691"
    },
    {
      "id": "p062",
      "name": "JS Red Onions Loose",
      "category": "Onions, Garlic & Ginger",
      "sku": "1195477"
    },
    {
      "id": "p063",
      "name": "JS Red Pepper Single",
      "category": "Peppers",
      "sku": "1236644"
    },
    {
      "id": "p064",
      "name": "JS Round Lettuce",
      "category": "Lettuce",
      "sku": "444"
    },
    {
      "id": "p065",
      "name": "JS Royal Gala Apple Single",
      "category": "Apples & Pears",
      "sku": "6617755"
    },
    {
      "id": "p066",
      "name": "JS Savoy Cabbage",
      "category": "Cabbage",
      "sku": "311762"
    },
    {
      "id": "p067",
      "name": "JS Small Whole Cucumber",
      "category": "Cucumber & Celery",
      "sku": "8121264"
    },
    {
      "id": "p068",
      "name": "JS Spring Onions Bunch",
      "category": "Spring Onions",
      "sku": "1373"
    },
    {
      "id": "p069",
      "name": "JS Swede Single",
      "category": "Root Vegetables",
      "sku": "7572548"
    },
    {
      "id": "p070",
      "name": "JS Sweet Potatoes Loose",
      "category": "Potatoes & Sweet Potatoes",
      "sku": "8232096"
    },
    {
      "id": "p071",
      "name": "JS Sweetcorn Cob Single",
      "category": "Corn & Sweetcorn",
      "sku": "2899"
    },
    {
      "id": "p072",
      "name": "JS Sweetheart Cabbage",
      "category": "Cabbage",
      "sku": "385190"
    },
    {
      "id": "p073",
      "name": "JS Tomatoes Loose",
      "category": "Tomatoes",
      "sku": "1192131"
    },
    {
      "id": "p074",
      "name": "JS Watermelon",
      "category": "Melons",
      "sku": "209632"
    },
    {
      "id": "p075",
      "name": "JS White Cabbage each",
      "category": "Cabbage",
      "sku": "8091877"
    },
    {
      "id": "p076",
      "name": "JS White Grapefruit Single",
      "category": "Citrus",
      "sku": "86"
    },
    {
      "id": "p077",
      "name": "JS White Turnips Loose",
      "category": "Root Vegetables",
      "sku": "1197471"
    },
    {
      "id": "p078",
      "name": "JS Whole Cucumber",
      "category": "Cucumber & Celery",
      "sku": "62"
    },
    {
      "id": "p079",
      "name": "JS Yellow Pepper Single",
      "category": "Peppers",
      "sku": "1236651"
    },
    {
      "id": "p080",
      "name": "Js Brown Onion Single (C)",
      "category": "Onions, Garlic & Ginger",
      "sku": null
    },
    {
      "id": "p081",
      "name": "Js Butternut Squash (C)",
      "category": "Aubergine & Squash",
      "sku": null
    },
    {
      "id": "p082",
      "name": "Js Red Onion Single (C)",
      "category": "Onions, Garlic & Ginger",
      "sku": null
    },
    {
      "id": "p083",
      "name": "Js Ripe & Ready Single Mango",
      "category": "Tropical & Exotic Fruit",
      "sku": null
    },
    {
      "id": "p084",
      "name": "SO Butternut Squash Loose",
      "category": "Aubergine & Squash",
      "sku": "1247480"
    },
    {
      "id": "p085",
      "name": "SO Spring Onions Bunch",
      "category": "Spring Onions",
      "sku": "1136463"
    },
    {
      "id": "p086",
      "name": "TTD Beef Tomato Single",
      "category": "Tomatoes",
      "sku": "8087610"
    },
    {
      "id": "p087",
      "name": "TTD Limelon",
      "category": "Citrus",
      "sku": "8076826"
    },
    {
      "id": "p088",
      "name": "TTD Orange Candy Melon",
      "category": "Citrus",
      "sku": "8196517"
    },
    {
      "id": "p089",
      "name": "TTD Piel de Sap Melon",
      "category": "Melons",
      "sku": "220859"
    },
    {
      "id": "p090",
      "name": "TTD Pineapple Single",
      "category": "Apples & Pears",
      "sku": "8230125"
    },
    {
      "id": "p091",
      "name": "TTD Red Sweet Pointed Pepper",
      "category": "Peppers",
      "sku": "6643594"
    },
    {
      "id": "p092",
      "name": "TTD Snowball Melon",
      "category": "Melons",
      "sku": "7970705"
    }
  ]
};

/* ============================================================
   Crate Log — produce finder / QR reference tool
   Pure lookup tool: find a product, scan its QR with your
   handheld disposal scanner. No disposal logging happens here.

   Data model lives in localStorage under DATA_KEY, SHARED with
   aisle-editor.html as long as both are hosted on the same
   origin (same domain). That means edits made in the editor
   (or in Admin mode here) show up on reload without needing
   any file to be re-sent or re-embedded.

   Favourites are kept in a separate, device-local key and are
   never part of the shared/exported dataset.
   ============================================================ */

const DATA_KEY = 'cratelog_data';
const FAV_KEY = 'cratelog_favourites';
const ICONS = { Salad: '🥗', Veg: '🥕', Fruit: '🍎' };
const DEFAULT_ICON = '🧺';

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) { return fallback; }
}
function saveJSON(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}
function isValidDataShape(d) {
  return d && Array.isArray(d.products) && Array.isArray(d.categories) && Array.isArray(d.aisles);
}

// 'published' = loaded fresh from data.json just now
// 'local'     = using this browser's saved edits (may be ahead of, or based on, a published copy)
// 'default'   = neither reachable — using the copy embedded in this file
let dataSource = 'default';
let publishedData = null; // set when data.json was fetched successfully, even if not the active DATA
let DATA = null;

async function initData() {
  try {
    const res = await fetch('data.json?t=' + Date.now(), { cache: 'no-store' });
    if (res.ok) {
      const fetched = await res.json();
      if (isValidDataShape(fetched)) {
        publishedData = fetched;
        const local = loadJSON(DATA_KEY, null);
        if (local && isValidDataShape(local)) {
          // this browser already has edits — keep using them, but a
          // "Sync from data.json" action can adopt the published copy
          DATA = local;
          dataSource = 'local';
        } else {
          DATA = fetched;
          dataSource = 'published';
          saveJSON(DATA_KEY, DATA);
        }
        return;
      }
    }
  } catch (e) {
    // fetch blocked (e.g. opened as a local file://) or network error — fall through
  }

  const local = loadJSON(DATA_KEY, null);
  if (local && isValidDataShape(local)) {
    DATA = local;
    dataSource = 'local';
    return;
  }

  DATA = JSON.parse(JSON.stringify(BASE_DATA));
  dataSource = 'default';
  saveJSON(DATA_KEY, DATA);
}

function saveData() { saveJSON(DATA_KEY, DATA); dataSource = 'local'; }

let favourites = loadJSON(FAV_KEY, {});
function saveFavourites() { saveJSON(FAV_KEY, favourites); }

function resolveAisle(p) {
  if (p.category) {
    const cat = DATA.categories.find(c => c.name === p.category);
    if (cat) return cat.aisle;
  }
  return p.fallbackAisle || DATA.aisles[0] || 'Uncategorised';
}

function imageUrl(sku) {
  if (!sku) return null;
  return `https://assets.sainsburys-groceries.co.uk/gol/${sku}/image.jpg`;
}

function getProducts() {
  return DATA.products.map(p => ({
    ...p,
    aisle: resolveAisle(p),
    favourite: !!favourites[p.id],
  }));
}

/* ---------------- State ---------------- */

let state = {
  aisle: 'All',
  category: '',
  search: '',
  sort: 'category',
  favOnly: false,
  unsortedOnly: false,
  adminMode: false,
};

/* ---------------- DOM refs ---------------- */

const els = {
  dataBadge: document.getElementById('dataBadge'),
  aisleTabs: document.getElementById('aisleTabs'),
  searchInput: document.getElementById('searchInput'),
  filterToggle: document.getElementById('filterToggle'),
  filterPanel: document.getElementById('filterPanel'),
  categorySelect: document.getElementById('categorySelect'),
  sortSelect: document.getElementById('sortSelect'),
  favOnly: document.getElementById('favOnly'),
  unsortedOnly: document.getElementById('unsortedOnly'),
  productList: document.getElementById('productList'),
  emptyState: document.getElementById('emptyState'),
  adminToggle: document.getElementById('adminToggle'),
  adminBar: document.getElementById('adminBar'),
  dataFileInput: document.getElementById('dataFileInput'),
  syncBtn: document.getElementById('syncBtn'),
  toast: document.getElementById('toast'),

  qrModal: document.getElementById('qrModal'),
  qrModalImg: document.getElementById('qrModalImg'),
  qrModalCategory: document.getElementById('qrModalCategory'),
  qrModalName: document.getElementById('qrModalName'),
  qrModalSku: document.getElementById('qrModalSku'),
  qrModalCode: document.getElementById('qrModalCode'),
  qrModalClose: document.getElementById('qrModalClose'),

  adminModal: document.getElementById('adminModal'),
  adminProductName: document.getElementById('adminProductName'),
  adminCategory: document.getElementById('adminCategory'),
  adminFallbackAisleWrap: document.getElementById('adminFallbackAisleWrap'),
  adminFallbackAisle: document.getElementById('adminFallbackAisle'),
  adminSku: document.getElementById('adminSku'),
  adminSave: document.getElementById('adminSave'),
  adminCancel: document.getElementById('adminCancel'),
};

let pendingProductId = null;

/* ---------------- Toast ---------------- */

let toastTimer = null;
function showToast(msg) {
  els.toast.textContent = msg;
  els.toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { els.toast.hidden = true; }, 1400);
}

/* ---------------- Data badge ---------------- */

function renderDataBadge() {
  els.dataBadge.classList.toggle('published', dataSource === 'published');
  els.dataBadge.classList.toggle('local', dataSource === 'local');
  els.dataBadge.classList.toggle('default', dataSource === 'default');
  const titles = {
    published: 'Showing the published data.json — up to date.',
    local: 'Showing edits saved in this browser. May be ahead of, or based on, the last published data.json.',
    default: "Showing the built-in fallback data — couldn't reach data.json (are you opening this as a local file? Try hosting it, or use Admin mode → Load data file).",
  };
  els.dataBadge.title = titles[dataSource];
  els.syncBtn.hidden = !(publishedData && dataSource === 'local');
}

/* ---------------- Aisle tabs (built dynamically) ---------------- */

function renderAisleTabs() {
  els.aisleTabs.innerHTML = '';
  const allBtn = makeAisleTab('All', 'All');
  els.aisleTabs.appendChild(allBtn);
  DATA.aisles.forEach(a => {
    els.aisleTabs.appendChild(makeAisleTab(a, a));
  });
  updateAisleTabActive();
}

function makeAisleTab(aisle, label) {
  const btn = document.createElement('button');
  btn.className = 'aisle-tab';
  btn.dataset.aisle = aisle;
  btn.dataset.color = aisle;
  btn.textContent = aisle === 'All' ? 'All' : `${ICONS[aisle] || DEFAULT_ICON} ${label}`;
  btn.addEventListener('click', () => {
    state.aisle = aisle;
    state.category = '';
    updateAisleTabActive();
    render();
  });
  return btn;
}

function updateAisleTabActive() {
  [...els.aisleTabs.children].forEach(b => b.classList.toggle('active', b.dataset.aisle === state.aisle));
}

/* ---------------- Category dropdown ---------------- */

function refreshCategoryOptions() {
  const cats = state.aisle === 'All'
    ? DATA.categories.map(c => c.name)
    : DATA.categories.filter(c => c.aisle === state.aisle).map(c => c.name);
  const sorted = [...new Set(cats)].sort();
  const current = els.categorySelect.value;
  els.categorySelect.innerHTML = '<option value="">All categories</option>' +
    sorted.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join('');
  if (sorted.includes(current)) els.categorySelect.value = current;
  else state.category = '';
}

/* ---------------- Rendering ---------------- */

function matches(p) {
  if (state.aisle !== 'All' && p.aisle !== state.aisle) return false;
  if (state.category && p.category !== state.category) return false;
  if (state.favOnly && !p.favourite) return false;
  if (state.unsortedOnly && p.sku) return false;
  if (state.search) {
    const q = state.search.toLowerCase();
    if (!p.name.toLowerCase().includes(q)) return false;
  }
  return true;
}

function sortProducts(list) {
  const arr = [...list];
  if (state.sort === 'az') {
    arr.sort((a, b) => a.name.localeCompare(b.name));
  } else if (state.sort === 'category') {
    arr.sort((a, b) => (a.category || '').localeCompare(b.category || '') || a.name.localeCompare(b.name));
  }
  return arr;
}

function render() {
  renderDataBadge();
  refreshCategoryOptions();
  renderList();
}

function renderList() {
  const all = getProducts();
  const filtered = sortProducts(all.filter(matches));

  els.productList.innerHTML = '';
  els.emptyState.hidden = filtered.length !== 0;

  if (state.sort === 'category') {
    let lastCategory = null;
    filtered.forEach(p => {
      const catLabel = p.category || 'Uncategorised';
      if (catLabel !== lastCategory) {
        lastCategory = catLabel;
        const heading = document.createElement('div');
        heading.className = 'category-heading';
        heading.textContent = catLabel;
        els.productList.appendChild(heading);
      }
      els.productList.appendChild(buildCard(p));
    });
  } else {
    filtered.forEach(p => els.productList.appendChild(buildCard(p)));
  }
}

function buildCard(p) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.color = p.aisle;

  const img = document.createElement(p.sku ? 'img' : 'div');
  img.className = 'card-img' + (p.sku ? '' : ' placeholder');
  if (p.sku) {
    img.src = imageUrl(p.sku);
    img.alt = p.name;
    img.onerror = () => { img.replaceWith(placeholderIcon(p.aisle)); };
  } else {
    img.textContent = aisleIcon(p.aisle);
  }
  card.appendChild(img);

  const body = document.createElement('div');
  body.className = 'card-body';
  body.innerHTML = `
    <div class="card-name">${escapeHtml(p.name)}</div>
    <div class="card-meta">
      <button class="star-btn${p.favourite ? ' active' : ''}" aria-label="Toggle favourite" data-star>${p.favourite ? '★' : '☆'}</button>
      <span class="aisle-badge">${escapeHtml(p.aisle)}</span>
      <span class="card-category">${escapeHtml(p.category || 'Uncategorised')}</span>
    </div>
    ${p.sku ? `<span class="card-sku" data-sku="${escapeHtml(p.sku)}" title="Tap to copy">SKU ${escapeHtml(p.sku)}</span>` : ''}
  `;
  card.appendChild(body);
  body.querySelector('[data-star]').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleFavourite(p.id);
  });

  if (p.sku) {
    const qrWrap = document.createElement('div');
    qrWrap.className = 'card-qr';
    card.appendChild(qrWrap);
    // eslint-disable-next-line no-undef
    new QRCode(qrWrap, { text: p.sku, width: 46, height: 46, colorDark: '#1B211D', colorLight: '#ffffff' });
  } else {
    const needsSku = document.createElement('div');
    needsSku.className = 'card-needs-sku';
    needsSku.textContent = 'Add SKU';
    card.appendChild(needsSku);
  }

  card.addEventListener('click', (e) => {
    if (e.target.closest('.card-sku')) {
      e.stopPropagation();
      copyToClipboard(e.target.closest('.card-sku').dataset.sku);
      return;
    }
    if (state.adminMode) {
      openAdminEdit(p.id);
    } else if (p.sku) {
      openQrModal(p.id);
    } else {
      openAdminEdit(p.id);
    }
  });

  return card;
}

function aisleIcon(aisle) { return ICONS[aisle] || DEFAULT_ICON; }
function placeholderIcon(aisle) {
  const d = document.createElement('div');
  d.className = 'card-img placeholder';
  d.textContent = aisleIcon(aisle);
  return d;
}
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ---------------- Copy to clipboard ---------------- */

function copyToClipboard(text) {
  const done = () => showToast(`Copied SKU ${text}`);
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
  } else {
    fallbackCopy(text, done);
  }
}
function fallbackCopy(text, done) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); done(); } catch (e) { showToast('Could not copy'); }
  document.body.removeChild(ta);
}

/* ---------------- Favourites (device-local, not part of shared data) ---------------- */

function toggleFavourite(id) {
  favourites[id] = !favourites[id];
  if (!favourites[id]) delete favourites[id];
  saveFavourites();
  render();
}

/* ---------------- QR enlarge (for scanning) ---------------- */

function openQrModal(id) {
  const p = getProducts().find(x => x.id === id);
  if (!p) return;
  els.qrModalName.textContent = p.name;
  els.qrModalCategory.textContent = p.category || 'Uncategorised';
  els.qrModalSku.textContent = `SKU ${p.sku}`;
  if (p.sku) {
    els.qrModalImg.src = imageUrl(p.sku);
    els.qrModalImg.style.display = '';
    els.qrModalImg.onerror = () => { els.qrModalImg.style.display = 'none'; };
  }
  els.qrModalCode.innerHTML = '';
  // eslint-disable-next-line no-undef
  new QRCode(els.qrModalCode, { text: p.sku, width: 196, height: 196, colorDark: '#1B211D', colorLight: '#ffffff' });
  els.qrModal.hidden = false;
}
function closeQrModal() { els.qrModal.hidden = true; }

/* ---------------- Admin edit ---------------- */

function populateAdminCategorySelect() {
  els.adminCategory.innerHTML = '<option value="">— none (pick fallback aisle) —</option>' +
    DATA.categories.map(c => `<option value="${escapeHtml(c.name)}">${escapeHtml(c.name)} (${escapeHtml(c.aisle)})</option>`).join('');
}
function populateAdminFallbackAisle() {
  els.adminFallbackAisle.innerHTML = DATA.aisles.map(a => `<option value="${escapeHtml(a)}">${escapeHtml(a)}</option>`).join('');
}

function openAdminEdit(id) {
  const p = DATA.products.find(x => x.id === id);
  if (!p) return;
  pendingProductId = id;
  populateAdminCategorySelect();
  populateAdminFallbackAisle();
  els.adminProductName.textContent = p.name;
  els.adminCategory.value = p.category || '';
  els.adminFallbackAisleWrap.hidden = !!p.category;
  if (p.fallbackAisle) els.adminFallbackAisle.value = p.fallbackAisle;
  els.adminSku.value = p.sku || '';
  els.adminModal.hidden = false;
}
els.adminCategory && els.adminCategory.addEventListener('change', () => {
  els.adminFallbackAisleWrap.hidden = !!els.adminCategory.value;
});

function closeAdminEdit() {
  els.adminModal.hidden = true;
  pendingProductId = null;
}

function saveAdminEdit() {
  if (!pendingProductId) return;
  const p = DATA.products.find(x => x.id === pendingProductId);
  if (!p) return;
  p.category = els.adminCategory.value || '';
  p.fallbackAisle = p.category ? undefined : els.adminFallbackAisle.value;
  p.sku = els.adminSku.value.trim() || null;
  saveData();
  closeAdminEdit();
  render();
}

/* ---------------- Wire up events ---------------- */

els.searchInput.addEventListener('input', (e) => {
  state.search = e.target.value;
  renderList();
});

els.filterToggle.addEventListener('click', () => {
  const isHidden = els.filterPanel.hidden;
  els.filterPanel.hidden = !isHidden;
  els.filterToggle.setAttribute('aria-expanded', String(isHidden));
});

els.categorySelect.addEventListener('change', (e) => { state.category = e.target.value; renderList(); });
els.sortSelect.addEventListener('change', (e) => { state.sort = e.target.value; renderList(); });
els.favOnly.addEventListener('change', (e) => { state.favOnly = e.target.checked; renderList(); });
els.unsortedOnly.addEventListener('change', (e) => { state.unsortedOnly = e.target.checked; renderList(); });

els.adminToggle.addEventListener('click', () => {
  state.adminMode = !state.adminMode;
  els.adminToggle.classList.toggle('active', state.adminMode);
  els.adminBar.hidden = !state.adminMode;
});

els.dataFileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const parsed = JSON.parse(ev.target.result);
      if (!parsed || !Array.isArray(parsed.products) || !Array.isArray(parsed.categories) || !Array.isArray(parsed.aisles)) {
        throw new Error('Not a recognised data.json — expected aisles/categories/products.');
      }
      DATA = parsed;
      saveData();
      renderAisleTabs();
      render();
      showToast('Data file loaded');
    } catch (err) {
      alert('Could not load that file: ' + err.message);
    }
  };
  reader.readAsText(file);
});

els.qrModalClose.addEventListener('click', closeQrModal);
els.qrModal.addEventListener('click', (e) => { if (e.target === els.qrModal) closeQrModal(); });

els.adminSave.addEventListener('click', saveAdminEdit);
els.adminCancel.addEventListener('click', closeAdminEdit);
els.adminModal.addEventListener('click', (e) => { if (e.target === els.adminModal) closeAdminEdit(); });

els.syncBtn.addEventListener('click', () => {
  if (!publishedData) return;
  if (!confirm('Replace your local edits in this browser with the published data.json? This cannot be undone.')) return;
  DATA = JSON.parse(JSON.stringify(publishedData));
  dataSource = 'published';
  saveJSON(DATA_KEY, DATA);
  renderAisleTabs();
  render();
  showToast('Synced from data.json');
});

els.sortSelect.value = state.sort;

window.addEventListener('DOMContentLoaded', async () => {
  await initData();
  state.aisle = DATA.aisles[0] || 'All';
  renderAisleTabs();
  render();
});
