// ============================================
// BAIBULO — Chichewa Bible Reader
// Books discovered automatically from books/index.json
// ============================================

// Full 66-book catalogue (names only — availability comes from books/index.json)
const ALL_BOOKS = [
  { id: 'gen', en: 'Genesis',          ny: 'Genesi',             testament: 'old' },
  { id: 'exo', en: 'Exodus',           ny: 'Eksodo',             testament: 'old' },
  { id: 'lev', en: 'Leviticus',        ny: 'Levitiko',           testament: 'old' },
  { id: 'num', en: 'Numbers',          ny: 'Numeri',             testament: 'old' },
  { id: 'deu', en: 'Deuteronomy',      ny: 'Deuteronomo',        testament: 'old' },
  { id: 'jos', en: 'Joshua',           ny: 'Yoswa',              testament: 'old' },
  { id: 'jdg', en: 'Judges',           ny: 'Oweruza',            testament: 'old' },
  { id: 'rut', en: 'Ruth',             ny: 'Rute',               testament: 'old' },
  { id: '1sa', en: '1 Samuel',         ny: '1 Samueli',          testament: 'old' },
  { id: '2sa', en: '2 Samuel',         ny: '2 Samueli',          testament: 'old' },
  { id: '1ki', en: '1 Kings',          ny: '1 Mafumu',           testament: 'old' },
  { id: '2ki', en: '2 Kings',          ny: '2 Mafumu',           testament: 'old' },
  { id: '1ch', en: '1 Chronicles',     ny: '1 Mbiri',            testament: 'old' },
  { id: '2ch', en: '2 Chronicles',     ny: '2 Mbiri',            testament: 'old' },
  { id: 'ezr', en: 'Ezra',             ny: 'Ezara',              testament: 'old' },
  { id: 'neh', en: 'Nehemiah',         ny: 'Nehemiya',           testament: 'old' },
  { id: 'est', en: 'Esther',           ny: 'Estere',             testament: 'old' },
  { id: 'job', en: 'Job',              ny: 'Yobu',               testament: 'old' },
  { id: 'psa', en: 'Psalms',           ny: 'Masalimo',           testament: 'old' },
  { id: 'pro', en: 'Proverbs',         ny: 'Miyambo',            testament: 'old' },
  { id: 'ecc', en: 'Ecclesiastes',     ny: 'Mlaliki',            testament: 'old' },
  { id: 'sng', en: 'Song of Songs',    ny: 'Nyimbo ya Solomoni', testament: 'old' },
  { id: 'isa', en: 'Isaiah',           ny: 'Yesaya',             testament: 'old' },
  { id: 'jer', en: 'Jeremiah',         ny: 'Yeremiya',           testament: 'old' },
  { id: 'lam', en: 'Lamentations',     ny: 'Maliro',             testament: 'old' },
  { id: 'ezk', en: 'Ezekiel',          ny: 'Ezekieli',           testament: 'old' },
  { id: 'dan', en: 'Daniel',           ny: 'Danieli',            testament: 'old' },
  { id: 'hos', en: 'Hosea',            ny: 'Hoseya',             testament: 'old' },
  { id: 'jol', en: 'Joel',             ny: 'Yoweli',             testament: 'old' },
  { id: 'amo', en: 'Amos',             ny: 'Amosi',              testament: 'old' },
  { id: 'oba', en: 'Obadiah',          ny: 'Obadiya',            testament: 'old' },
  { id: 'jon', en: 'Jonah',            ny: 'Yona',               testament: 'old' },
  { id: 'mic', en: 'Micah',            ny: 'Mika',               testament: 'old' },
  { id: 'nam', en: 'Nahum',            ny: 'Nahumu',             testament: 'old' },
  { id: 'hab', en: 'Habakkuk',         ny: 'Habakuku',           testament: 'old' },
  { id: 'zep', en: 'Zephaniah',        ny: 'Zefaniya',           testament: 'old' },
  { id: 'hag', en: 'Haggai',           ny: 'Hagai',              testament: 'old' },
  { id: 'zec', en: 'Zechariah',        ny: 'Zekariya',           testament: 'old' },
  { id: 'mal', en: 'Malachi',          ny: 'Malaki',             testament: 'old' },
  { id: 'mat', en: 'Matthew',          ny: 'Mateyu',             testament: 'new' },
  { id: 'mrk', en: 'Mark',             ny: 'Marko',              testament: 'new' },
  { id: 'luk', en: 'Luke',             ny: 'Luka',               testament: 'new' },
  { id: 'jhn', en: 'John',             ny: 'Yohane',             testament: 'new' },
  { id: 'act', en: 'Acts',             ny: 'Machitidwe',         testament: 'new' },
  { id: 'rom', en: 'Romans',           ny: 'Aroma',              testament: 'new' },
  { id: '1co', en: '1 Corinthians',    ny: '1 Akorinto',         testament: 'new' },
  { id: '2co', en: '2 Corinthians',    ny: '2 Akorinto',         testament: 'new' },
  { id: 'gal', en: 'Galatians',        ny: 'Agalatiya',          testament: 'new' },
  { id: 'eph', en: 'Ephesians',        ny: 'Aefeso',             testament: 'new' },
  { id: 'php', en: 'Philippians',      ny: 'Afilipi',            testament: 'new' },
  { id: 'col', en: 'Colossians',       ny: 'Akolose',            testament: 'new' },
  { id: '1th', en: '1 Thessalonians',  ny: '1 Atesalonika',      testament: 'new' },
  { id: '2th', en: '2 Thessalonians',  ny: '2 Atesalonika',      testament: 'new' },
  { id: '1ti', en: '1 Timothy',        ny: '1 Timoteyo',         testament: 'new' },
  { id: '2ti', en: '2 Timothy',        ny: '2 Timoteyo',         testament: 'new' },
  { id: 'tit', en: 'Titus',            ny: 'Tito',               testament: 'new' },
  { id: 'phm', en: 'Philemon',         ny: 'Filemoni',           testament: 'new' },
  { id: 'heb', en: 'Hebrews',          ny: 'Aheberi',            testament: 'new' },
  { id: 'jas', en: 'James',            ny: 'Yakobo',             testament: 'new' },
  { id: '1pe', en: '1 Peter',          ny: '1 Petro',            testament: 'new' },
  { id: '2pe', en: '2 Peter',          ny: '2 Petro',            testament: 'new' },
  { id: '1jn', en: '1 John',           ny: '1 Yohane',           testament: 'new' },
  { id: '2jn', en: '2 John',           ny: '2 Yohane',           testament: 'new' },
  { id: '3jn', en: '3 John',           ny: '3 Yohane',           testament: 'new' },
  { id: 'jud', en: 'Jude',             ny: 'Yuda',               testament: 'new' },
  { id: 'rev', en: 'Revelation',       ny: 'Chivumbulutso',      testament: 'new' },
];

// ============================================
// AVAILABLE BOOKS — loaded from books/index.json
// availableIndex: Map of id -> { file, ny, en, testament }
// ============================================
let availableIndex = {};   // populated on startup
const bookCache = {};      // id -> { chapters: {1:[{n,t}]}, chapterCount }

// Fetch books/index.json to discover which books are available
async function loadIndex() {
  const res = await fetch('books/index.json');
  if (!res.ok) throw new Error('Could not load books/index.json');
  const list = await res.json();
  availableIndex = {};
  list.forEach(entry => { availableIndex[entry.id] = entry; });
}

function isAvailable(id) { return !!availableIndex[id]; }

async function fetchBook(bookId) {
  if (bookCache[bookId]) return bookCache[bookId];
  const entry = availableIndex[bookId];
  if (!entry) return null;
  try {
    const res = await fetch(`books/${entry.file}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const chapters = {};
    data.verses.forEach(v => {
      if (!chapters[v.c]) chapters[v.c] = [];
      chapters[v.c].push({ n: v.v, t: v.t });
    });
    const chapterCount = Math.max(...Object.keys(chapters).map(Number));
    bookCache[bookId] = { chapters, chapterCount };
    return bookCache[bookId];
  } catch(e) {
    console.error(`Failed to load book ${bookId}:`, e);
    return null;
  }
}

// ============================================
// UPDATE — clears all caches and reloads
// ============================================
async function forceUpdate() {
  const btn = document.getElementById('update-btn');
  btn.textContent = 'Kukhokhola...';
  btn.disabled = true;

  try {
    // Delete all service worker caches
    const keys = await caches.keys();
    await Promise.all(keys.map(k => caches.delete(k)));

    // Tell the service worker to skip waiting and take control
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
    }

    // Small delay then reload to get fresh files
    setTimeout(() => window.location.reload(true), 800);
  } catch(e) {
    btn.textContent = 'Kulephera — yesaninso';
    btn.disabled = false;
  }
}

// ============================================
// STATE
// ============================================
const State = {
  view: 'home',
  bookId: null,
  chapter: null,
  highlights: {},
  bookmarks: [],
  lastRead: null,
  selectedVerse: null,

  load() {
    try {
      const s = JSON.parse(localStorage.getItem('baibulo') || '{}');
      if (s.highlights) this.highlights = s.highlights;
      if (s.bookmarks)  this.bookmarks  = s.bookmarks;
      if (s.lastRead)   this.lastRead   = s.lastRead;
    } catch(e) {}
  },
  save() {
    try {
      localStorage.setItem('baibulo', JSON.stringify({
        highlights: this.highlights,
        bookmarks:  this.bookmarks,
        lastRead:   this.lastRead,
      }));
    } catch(e) {}
  }
};

// ============================================
// SETTINGS
// ============================================
const Settings = {
  theme: 'light',
  size: 'medium',
  load() {
    try { Object.assign(this, JSON.parse(localStorage.getItem('baibulo-settings') || '{}')); } catch(e) {}
    this.apply();
  },
  save() {
    try { localStorage.setItem('baibulo-settings', JSON.stringify({ theme: this.theme, size: this.size })); } catch(e) {}
  },
  apply() {
    document.documentElement.setAttribute('data-theme', this.theme);
    document.body.setAttribute('data-size', this.size);
    document.querySelectorAll('.theme-btn').forEach(b => b.classList.toggle('active', b.dataset.theme === this.theme));
    document.querySelectorAll('.size-btn').forEach(b => b.classList.toggle('active', b.dataset.size === this.size));
  }
};

// ============================================
// DOM REFS
// ============================================
const contentEl  = document.getElementById('content');
const backBtn    = document.getElementById('back-btn');
const titleEl    = document.getElementById('topbar-title');
const sidebarEl  = document.getElementById('sidebar-scroll');

// ============================================
// SIDEBAR
// ============================================
function renderSidebar() {
  const old = ALL_BOOKS.filter(b => b.testament === 'old');
  const neu = ALL_BOOKS.filter(b => b.testament === 'new');

  const renderBooks = books => books.map(b => {
    const avail  = isAvailable(b.id);
    const active = State.bookId === b.id;
    return `<div class="sidebar-book${avail ? '' : ' locked'}${active ? ' active' : ''}"
                 ${avail ? `data-action="open-book" data-book="${b.id}"` : ''}>
      <span class="sidebar-book-name">${b.ny}</span>
    </div>`;
  }).join('');

  sidebarEl.innerHTML =
    `<div class="sidebar-section">Chipangano Chakale</div>` + renderBooks(old) +
    `<div class="sidebar-section">Chipangano Chatsopano</div>` + renderBooks(neu);
}

// ============================================
// HOME VIEW (mobile)
// ============================================
function renderHome() {
  State.view = 'home';
  State.bookId = null;
  backBtn.style.visibility = 'hidden';
  titleEl.textContent = 'Baibulo';

  const old = ALL_BOOKS.filter(b => b.testament === 'old');
  const neu = ALL_BOOKS.filter(b => b.testament === 'new');

  const renderList = books => books.map(b => {
    const avail = isAvailable(b.id);
    return `<li class="book-item${avail ? '' : ' locked'}"
               ${avail ? `data-action="open-book" data-book="${b.id}"` : ''}>
      <span class="book-name">${b.ny}</span>
      <span class="book-meta">${avail ? 'Tsegulani' : 'Sichinamasuliridwe'}</span>
    </li>`;
  }).join('');

  let html = '<div class="home-view view-anim">';
  html += `<div class="welcome"><h1>Baibulo</h1><div class="sub">M'Chichewa</div></div>`;

  if (State.lastRead && isAvailable(State.lastRead.book)) {
    const b = ALL_BOOKS.find(x => x.id === State.lastRead.book);
    html += `<div class="continue-reading" data-action="open-chapter"
                  data-book="${State.lastRead.book}" data-chapter="${State.lastRead.chapter}">
      <div class="continue-label">Pitirizani Kuwerenga</div>
      <div class="continue-ref">${b.ny} ${State.lastRead.chapter}</div>
    </div>`;
  }

  html += `<div class="section-label">Chipangano Chakale</div><ul class="book-list">${renderList(old)}</ul>`;
  html += `<div class="section-label">Chipangano Chatsopano</div><ul class="book-list">${renderList(neu)}</ul>`;
  html += '</div>';

  contentEl.innerHTML = html;
  renderSidebar();
}

// ============================================
// CHAPTERS VIEW
// ============================================
async function openBook(bookId) {
  State.view = 'chapters';
  State.bookId = bookId;
  const book = ALL_BOOKS.find(b => b.id === bookId);

  backBtn.style.visibility = 'visible';
  titleEl.textContent = book.ny;
  contentEl.innerHTML = `<div class="loading-text">Kutsegula...</div>`;

  const data = await fetchBook(bookId);
  if (!data) {
    contentEl.innerHTML = `<div class="coming-soon">Kulephera kutsegula buku. Yesaninso.</div>`;
    return;
  }

  let cells = '';
  for (let i = 1; i <= data.chapterCount; i++) {
    cells += `<div class="chapter-cell" data-action="open-chapter" data-book="${bookId}" data-chapter="${i}">${i}</div>`;
  }

  contentEl.innerHTML = `<div class="chapter-view view-anim">
    <div class="chapter-header">
      <div class="book-title-en">${book.en}</div>
      <div class="book-title-ny">${book.ny}</div>
      <div class="choose-label">Sankhani Mutu</div>
    </div>
    <div class="chapter-grid">${cells}</div>
  </div>`;

  renderSidebar();
}

// ============================================
// READER VIEW
// ============================================
async function openChapter(bookId, chapter) {
  contentEl.innerHTML = `<div class="loading-text">Kutsegula...</div>`;

  const data = await fetchBook(bookId);
  const book = ALL_BOOKS.find(b => b.id === bookId);

  State.view = 'reader';
  State.bookId = bookId;
  State.chapter = chapter;
  State.lastRead = { book: bookId, chapter };
  State.save();

  backBtn.style.visibility = 'visible';
  titleEl.textContent = `${book.ny} ${chapter}`;

  const verses = data && data.chapters[chapter];
  let verseHtml = '';

  if (!verses || verses.length === 0) {
    verseHtml = `<div class="coming-soon">Sichinamasuliridwe kale</div>`;
  } else {
    verses.forEach(v => {
      const key = `${bookId}-${chapter}-${v.n}`;
      const hl  = State.highlights[key] ? ' highlighted' : '';
      verseHtml += `<div class="verse${hl}" data-key="${key}" data-action="select-verse">
        <span class="verse-num">${v.n}</span><span class="verse-text">${v.t}</span>
      </div>`;
    });
  }

  const total   = data ? data.chapterCount : chapter;
  const hasPrev = chapter > 1;
  const hasNext = chapter < total;

  contentEl.innerHTML = `<div class="reader-view view-anim">
    <div class="reader-header">
      <div class="reader-book-name">${book.ny}</div>
      <div class="reader-chapter-num">${chapter}</div>
      <div class="reader-chapter-label">Mutu</div>
    </div>
    ${verseHtml}
    <div class="chapter-nav">
      <button class="nav-btn prev"
        ${hasPrev ? `data-action="open-chapter" data-book="${bookId}" data-chapter="${chapter-1}"` : 'disabled'}>
        ${hasPrev ? `← Mutu ${chapter-1}` : ''}
      </button>
      <button class="nav-btn next"
        ${hasNext ? `data-action="open-chapter" data-book="${bookId}" data-chapter="${chapter+1}"` : 'disabled'}>
        ${hasNext ? `Mutu ${chapter+1} →` : ''}
      </button>
    </div>
  </div>`;

  contentEl.scrollTo(0, 0);
  renderSidebar();
}

// ============================================
// VERSE INTERACTIONS
// ============================================
function selectVerse(key) {
  if (State.selectedVerse === key) { closeVerseActions(); return; }
  document.querySelectorAll('.verse.selected').forEach(el => el.classList.remove('selected'));
  State.selectedVerse = key;
  const el = document.querySelector(`[data-key="${key}"]`);
  if (el) el.classList.add('selected');
  document.getElementById('verse-actions').classList.add('open');
}

function closeVerseActions() {
  document.querySelectorAll('.verse.selected').forEach(el => el.classList.remove('selected'));
  State.selectedVerse = null;
  document.getElementById('verse-actions').classList.remove('open');
}

document.getElementById('act-highlight').onclick = () => {
  if (!State.selectedVerse) return;
  const key = State.selectedVerse;
  State.highlights[key] = !State.highlights[key];
  if (!State.highlights[key]) delete State.highlights[key];
  State.save();
  const el = document.querySelector(`[data-key="${key}"]`);
  if (el) el.classList.toggle('highlighted', !!State.highlights[key]);
  closeVerseActions();
};

document.getElementById('act-bookmark').onclick = () => {
  if (!State.selectedVerse) return;
  const parts = State.selectedVerse.split('-');
  const book = parts[0], chap = +parts[1], verse = +parts[2];
  const idx = State.bookmarks.findIndex(b => b.book === book && b.chapter === chap && b.verse === verse);
  if (idx >= 0) State.bookmarks.splice(idx, 1);
  else State.bookmarks.push({ book, chapter: chap, verse, ts: Date.now() });
  State.save();
  closeVerseActions();
};

document.getElementById('act-share').onclick = async () => {
  if (!State.selectedVerse) return;
  const parts  = State.selectedVerse.split('-');
  const bookId = parts[0], chap = +parts[1], verseNum = +parts[2];
  const book   = ALL_BOOKS.find(b => b.id === bookId);
  const data   = bookCache[bookId];
  const v      = data && data.chapters[chap] && data.chapters[chap].find(x => x.n === verseNum);
  if (!v) return;
  const text = `"${v.t}"\n— ${book.ny} ${chap}:${verseNum}`;
  try {
    if (navigator.share) await navigator.share({ text, title: 'Baibulo' });
    else await navigator.clipboard.writeText(text);
  } catch(e) {}
  closeVerseActions();
};

document.getElementById('act-close').onclick = closeVerseActions;

// ============================================
// SETTINGS PANEL
// ============================================
const panelEl   = document.getElementById('settings-panel');
const overlayEl = document.getElementById('panel-overlay');

document.getElementById('settings-btn').onclick = () => { panelEl.classList.add('open'); overlayEl.classList.add('open'); };
overlayEl.onclick = () => { panelEl.classList.remove('open'); overlayEl.classList.remove('open'); };
document.querySelectorAll('.theme-btn').forEach(b => { b.onclick = () => { Settings.theme = b.dataset.theme; Settings.apply(); Settings.save(); }; });
document.querySelectorAll('.size-btn').forEach(b => { b.onclick = () => { Settings.size = b.dataset.size; Settings.apply(); Settings.save(); }; });
document.getElementById('update-btn').onclick = forceUpdate;

// ============================================
// NAVIGATION
// ============================================
backBtn.onclick = () => {
  if (State.view === 'reader') openBook(State.bookId);
  else if (State.view === 'chapters') renderHome();
};

contentEl.addEventListener('click', e => {
  const t = e.target.closest('[data-action]');
  if (!t) return;
  const action = t.dataset.action;
  if (action === 'open-book')         openBook(t.dataset.book);
  else if (action === 'open-chapter') openChapter(t.dataset.book, +t.dataset.chapter);
  else if (action === 'select-verse') selectVerse(t.dataset.key);
});

sidebarEl.addEventListener('click', e => {
  const t = e.target.closest('[data-action]');
  if (t && t.dataset.action === 'open-book') openBook(t.dataset.book);
});

contentEl.addEventListener('scroll', () => {
  if (State.selectedVerse) closeVerseActions();
}, { passive: true });

// ============================================
// INIT
// ============================================
State.load();
Settings.load();

loadIndex()
  .then(() => renderHome())
  .catch(() => {
    // If index fails to load (e.g. first offline visit before cache warms up)
    contentEl.innerHTML = `<div class="coming-soon">Kulephera kulumikizana. Yesaninso mukakhala pa intaneti.</div>`;
  });
