# RPA Positionele Analyse v4.0 ✅

**Status:** STABIEL - Klaar voor gebruik  
**Laatste update:** 25 februari 2026, 00:14  
**Git commit:** `94bea15`

---

## 📄 Hoofdbestand

**`positioneel.html`** - RPA Positionele Analyse v4.0 (782 KB)

---

## ✨ Wat is nieuw in v4.0?

### Dropdown per domein bij "Steun aanwezig"

Als je in de triage bij een domein klikt op **"🟡 Steun aanwezig"**, verschijnt:

1. **Type steun** (3 knoppen)
   - 🔵 Professioneel
   - 🟣 Collectief  
   - 🟢 Informeel

2. **Wie helpt?** (dropdown passend bij type)
   - Professioneel: Ambulante GGZ, Budgetcoach, Wijkverpleging, etc.
   - Collectief: Vrijwilligers, Buurtcentrum, Kerk/Moskee, etc.
   - Informeel: Partner, Familie, Vrienden, Buren, etc.

3. **Welke rol?** (dropdown met vaste opties)
   - Praktische hulp (administratie, boodschappen, vervoer, ...)
   - Sociale steun (gezelschap, luisterend oor, activiteiten, ...)
   - Begeleiding (afspraken, budgetbeheer, formulieren, ...)
   - Behandeling (gesprekken, medicatie, dagstructuur, ...)
   - Anders (vrij tekstveld)

### Tekst wijzigingen

- **VOOR:** "Steun wenselijk" 
- **NA:** "Steun aanwezig" (consistenter)

---

## 💾 Data structuur

```javascript
state.steunDetails = {
  'financien': {
    type: 'formeel',           // formeel/collectief/informeel
    wie: 'budgetcoach',        // geselecteerde persoon/organisatie
    rol: 'administratie',      // geselecteerde rol
    rolAnders: '...'           // alleen bij rol='anders'
  },
  'dagbesteding': { ... },
  // etc voor elk domein
}
```

---

## 🧪 Getest & werkt

✅ Start gesprek  
✅ Triage stoplicht (Zelfstandig/Steun aanwezig/Steun nodig)  
✅ Dropdown verschijnt bij "Steun aanwezig"  
✅ Type knoppen klikbaar en highlight  
✅ Wie-dropdown toont juiste opties per type  
✅ Rol-dropdown werkt  
✅ "Anders" optie toont tekstveld  
✅ Data wordt opgeslagen in state  
✅ Spider diagram  
✅ Export naar Niveau 3  
✅ Alle oude functionaliteit intact  

---

## 📦 Backups & Historie

### Belangrijke backups:
- `positioneel-v3.0-VOOR-v4.0-20260225.html` - Origineel v3.0
- `backups-2026-02-24/` - Tussentijdse versies (veilig te verwijderen)

### Git commits:
- `94bea15` - v4.0 final: Fix onclick + rol dropdown ← **HUIDIGE**
- `07f3042` - v4.0 basis: Dropdown per domein
- `66a51c9` - v3.0: Fundament

---

## 🔄 Terug naar v3.0 (indien nodig)

```bash
cp positioneel-v3.0-VOOR-v4.0-20260225.html positioneel.html
```

Of via git:
```bash
git checkout 66a51c9 -- positioneel.html
```

---

## 🚀 Development server

```bash
cd ~/Documents/Projects/welzijnswerker
python3 -m http.server 3458
```

Open: `https://rubens-mac-mini.tail7aaadf.ts.net:3458/positioneel.html`

---

## 📋 Toekomstige verbeteringen (v4.1+)

Uit team review, nog niet geïmplementeerd:

- [ ] Privacy & regie scherm (Lisa)
- [ ] Financiën pre-check (Jamal)
- [ ] Mantelzorg overbelasting alerts (Marieke)
- [ ] Validatie disclaimer (Bram)
- [ ] Domein scan slimmer (gebruik triage data)

**Focus v4.0:** Klein en gericht - alleen dropdown functionaliteit ✅  
**Focus v4.1:** Safety nets (indien gewenst, later)

---

## 📚 Documentatie

- `CHANGELOG-v4.0.md` - Gedetailleerde wijzigingen
- `TEAM-REVIEW-V3.0.md` - Volledige team feedback
- `README-v4.0-FINAL.txt` - Samenvatting voor gebruiker

---

## 🌈 Credits

Gebouwd door **Laura Terbrack** & **Marie**  
Met feedback van het volledige team (15 experts)

24-25 februari 2026

---

**v4.0 is stabiel en klaar voor gebruik! ✅**
