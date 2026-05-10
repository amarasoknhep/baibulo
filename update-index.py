"""
Baibulo — Book Index Generator
================================
Drop your Bible.zip contents (book folders) into the books/ folder.
Double-click update-index.bat to run this script.

It will:
  1. Scan every subfolder in books/ for a JSON file
  2. Copy each JSON to books/ root (overwriting if it already exists)
  3. Rebuild books/index.json automatically

Then just push everything to GitHub — Netlify will deploy.
"""

import os, json, shutil

CATALOGUE = {
    "genesis":        ("gen", "Genesis",         "Genesi",             "old"),
    "exodus":         ("exo", "Exodus",           "Eksodo",             "old"),
    "leviticus":      ("lev", "Leviticus",        "Levitiko",           "old"),
    "numbers":        ("num", "Numbers",          "Numeri",             "old"),
    "deuteronomy":    ("deu", "Deuteronomy",      "Deuteronomo",        "old"),
    "joshua":         ("jos", "Joshua",           "Yoswa",              "old"),
    "judges":         ("jdg", "Judges",           "Oweruza",            "old"),
    "ruth":           ("rut", "Ruth",             "Rute",               "old"),
    "1samuel":        ("1sa", "1 Samuel",         "1 Samueli",          "old"),
    "2samuel":        ("2sa", "2 Samuel",         "2 Samueli",          "old"),
    "1kings":         ("1ki", "1 Kings",          "1 Mafumu",           "old"),
    "2kings":         ("2ki", "2 Kings",          "2 Mafumu",           "old"),
    "1chronicles":    ("1ch", "1 Chronicles",     "1 Mbiri",            "old"),
    "2chronicles":    ("2ch", "2 Chronicles",     "2 Mbiri",            "old"),
    "ezra":           ("ezr", "Ezra",             "Ezara",              "old"),
    "nehemiah":       ("neh", "Nehemiah",         "Nehemiya",           "old"),
    "esther":         ("est", "Esther",           "Estere",             "old"),
    "job":            ("job", "Job",              "Yobu",               "old"),
    "psalms":         ("psa", "Psalms",           "Masalimo",           "old"),
    "proverbs":       ("pro", "Proverbs",         "Miyambo",            "old"),
    "ecclesiastes":   ("ecc", "Ecclesiastes",     "Mlaliki",            "old"),
    "songofsolomon":  ("sng", "Song of Songs",    "Nyimbo ya Solomoni", "old"),
    "isaiah":         ("isa", "Isaiah",           "Yesaya",             "old"),
    "jeremiah":       ("jer", "Jeremiah",         "Yeremiya",           "old"),
    "lamentations":   ("lam", "Lamentations",     "Maliro",             "old"),
    "ezekiel":        ("ezk", "Ezekiel",          "Ezekieli",           "old"),
    "daniel":         ("dan", "Daniel",           "Danieli",            "old"),
    "hosea":          ("hos", "Hosea",            "Hoseya",             "old"),
    "joel":           ("jol", "Joel",             "Yoweli",             "old"),
    "amos":           ("amo", "Amos",             "Amosi",              "old"),
    "obadiah":        ("oba", "Obadiah",          "Obadiya",            "old"),
    "jonah":          ("jon", "Jonah",            "Yona",               "old"),
    "micah":          ("mic", "Micah",            "Mika",               "old"),
    "nahum":          ("nam", "Nahum",            "Nahumu",             "old"),
    "habakkuk":       ("hab", "Habakkuk",         "Habakuku",           "old"),
    "zephaniah":      ("zep", "Zephaniah",        "Zefaniya",           "old"),
    "haggai":         ("hag", "Haggai",           "Hagai",              "old"),
    "zechariah":      ("zec", "Zechariah",        "Zekariya",           "old"),
    "malachi":        ("mal", "Malachi",          "Malaki",             "old"),
    "matthew":        ("mat", "Matthew",          "Mateyu",             "new"),
    "mark":           ("mrk", "Mark",             "Marko",              "new"),
    "luke":           ("luk", "Luke",             "Luka",               "new"),
    "john":           ("jhn", "John",             "Yohane",             "new"),
    "acts":           ("act", "Acts",             "Machitidwe",         "new"),
    "romans":         ("rom", "Romans",           "Aroma",              "new"),
    "1corinthians":   ("1co", "1 Corinthians",    "1 Akorinto",         "new"),
    "2corinthians":   ("2co", "2 Corinthians",    "2 Akorinto",         "new"),
    "galatians":      ("gal", "Galatians",        "Agalatiya",          "new"),
    "ephesians":      ("eph", "Ephesians",        "Aefeso",             "new"),
    "philippians":    ("php", "Philippians",      "Afilipi",            "new"),
    "colossians":     ("col", "Colossians",       "Akolose",            "new"),
    "1thessalonians": ("1th", "1 Thessalonians",  "1 Atesalonika",      "new"),
    "2thessalonians": ("2th", "2 Thessalonians",  "2 Atesalonika",      "new"),
    "1timothy":       ("1ti", "1 Timothy",        "1 Timoteyo",         "new"),
    "2timothy":       ("2ti", "2 Timothy",        "2 Timoteyo",         "new"),
    "titus":          ("tit", "Titus",            "Tito",               "new"),
    "philemon":       ("phm", "Philemon",         "Filemoni",           "new"),
    "hebrews":        ("heb", "Hebrews",          "Aheberi",            "new"),
    "james":          ("jas", "James",            "Yakobo",             "new"),
    "1peter":         ("1pe", "1 Peter",          "1 Petro",            "new"),
    "2peter":         ("2pe", "2 Peter",          "2 Petro",            "new"),
    "1john":          ("1jn", "1 John",           "1 Yohane",           "new"),
    "2john":          ("2jn", "2 John",           "2 Yohane",           "new"),
    "3john":          ("3jn", "3 John",           "3 Yohane",           "new"),
    "jude":           ("jud", "Jude",             "Yuda",               "new"),
    "revelation":     ("rev", "Revelation",       "Chivumbulutso",      "new"),
}

BOOK_ORDER = list(CATALOGUE.keys())

script_dir = os.path.dirname(os.path.abspath(__file__))
books_dir  = os.path.join(script_dir, "books")

print("=" * 50)
print("  Baibulo — Book Index Generator")
print("=" * 50)

if not os.path.isdir(books_dir):
    print(f"\nERROR: Could not find the books/ folder at:\n  {books_dir}")
    exit(1)

found   = []
skipped = []

for folder_name in os.listdir(books_dir):
    folder_path = os.path.join(books_dir, folder_name)

    # Only process subfolders, skip loose files
    if not os.path.isdir(folder_path):
        continue

    # Find the JSON file inside
    json_files = [f for f in os.listdir(folder_path) if f.lower().endswith(".json")]
    if not json_files:
        skipped.append(f"{folder_name}/ — no .json file found inside")
        continue
    if len(json_files) > 1:
        skipped.append(f"{folder_name}/ — multiple .json files found, unsure which to use")
        continue

    json_filename = json_files[0]
    src_path      = os.path.join(folder_path, json_filename)

    # Match folder name to catalogue (strip spaces, hyphens, underscores)
    key = folder_name.lower().replace(" ", "").replace("-", "").replace("_", "")
    if key not in CATALOGUE:
        skipped.append(f"{folder_name}/ — not recognised, check spelling")
        continue

    # Copy JSON flat into books/ root (overwrite existing)
    dest_filename = json_filename.lower()
    dest_path     = os.path.join(books_dir, dest_filename)
    shutil.copy2(src_path, dest_path)

    book_id, en, ny, testament = CATALOGUE[key]
    found.append({
        "id":        book_id,
        "file":      dest_filename,
        "ny":        ny,
        "en":        en,
        "testament": testament,
        "_order":    BOOK_ORDER.index(key),
    })
    action = "updated" if os.path.exists(dest_path) else "added"
    print(f"  +  {folder_name:25s} -> books/{dest_filename}")

# Sort by Bible order
found.sort(key=lambda x: x["_order"])
for entry in found:
    del entry["_order"]

# Write index.json
index_path = os.path.join(books_dir, "index.json")
with open(index_path, "w", encoding="utf-8") as f:
    json.dump(found, f, ensure_ascii=False, indent=2)

print()
print(f"  {len(found)} book(s) ready  ->  books/index.json updated")

if skipped:
    print()
    print("  Skipped:")
    for s in skipped:
        print(f"    !  {s}")

print()
print("  Done! Push to GitHub and Netlify will deploy.")
print("=" * 50)
