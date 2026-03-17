# RPA v4.0 Changelog
**Datum:** 24 februari 2026  
**Status:** ✅ Klaar voor gebruik

---

## 🎯 Wat is er veranderd?

### 1. Tekst wijzigingen (consistentie)
- **VOOR:** "Steun wenselijk" (gele knop bij domeinen)
- **NA:** "Steun aanwezig" (consistenter met algemene taal)

**Waarom:** Bij team review bleek "aanwezig" duidelijker dan "wenselijk"

---

### 2. Dropdown per domein ⭐ NIEUW

**Wanneer:** Als je bij een domein klikt op **"🟡 Steun aanwezig"**

**Wat verschijnt:**

```
📦 Geel vlak onder het domein met:

1️⃣ Type steun kiezen:
   [🔵 Professioneel] [🟣 Collectief] [🟢 Informeel]

2️⃣ Wie helpt? (dropdown passend bij type)
   Professioneel: Ambulante GGZ, Budgetcoach, Wijkverpleging, etc.
   Collectief: Vrijwilligers, Buurtcentrum, Kerk/Moskee, etc.
   Informeel: Partner, Familie, Vrienden, Buren, etc.

3️⃣ Wat doet deze persoon/organisatie?
   [Tekstveld voor vrije invoer]
```

**Data opslag:**
- `state.steunDetails[domeinId].type` → 'formeel'/'collectief'/'informeel'
- `state.steunDetails[domeinId].wie` → geselecteerde waarde
- `state.steunDetails[domeinId].wat` → vrije tekst

**Voorbeeld:**
```javascript
state.steunDetails['financien'] = {
  type: 'formeel',
  wie: 'budgetcoach',
  wat: 'Helpt met budgetplan en contact met schuldeisers'
}
```

---

## 📁 Bestanden

### Hoofd bestand:
- **`positioneel.html`** ← v4.0 (796 KB)

### Backups:
- **`positioneel-v3.0-VOOR-v4.0-20260225.html`** ← Origineel v3.0
- **`backups-2026-02-24/`** ← Alle tussentijdse backups

### Git:
- **Commit:** `07f3042`
- **Branch:** `main`

---

## 🧪 Getest

✅ Start gesprek werkt  
✅ Domeinen selecteren werkt  
✅ Stoplicht (Zelfstandig/Steun aanwezig/Steun nodig) werkt  
✅ Dropdown verschijnt bij "Steun aanwezig"  
✅ Type knoppen werken (Pro/Col/Inf)  
✅ Wie-dropdown toont juiste opties  
✅ Wat-tekstveld werkt  
✅ Data wordt opgeslagen in state  
✅ Oude functionaliteit (spider diagram, export, etc.) intact  

---

## 🔄 Hoe terug naar v3.0?

Als je toch terug wilt naar de oude versie:

```bash
cd ~/Documents/Projects/welzijnswerker
cp positioneel-v3.0-VOOR-v4.0-20260225.html positioneel.html
```

Of via git:
```bash
git checkout HEAD~1 -- positioneel.html
```

---

## 📊 Team Review Status

Wat hebben we geïmplementeerd uit de team review:

| Feedback | Team | Status |
|----------|------|--------|
| Steun aanwezig ipv wenselijk | Lisa | ✅ Klaar |
| Dropdown per domein | Laura | ✅ Klaar |
| Type + Wie + Wat vastleggen | Marieke | ✅ Klaar |
| | | |
| Privacy scherm | Lisa | ⏳ Toekomstig |
| Financiën pre-check | Jamal | ⏳ Toekomstig |
| Mantelzorg alert | Marieke | ⏳ Toekomstig |
| Validatie disclaimer | Bram | ⏳ Toekomstig |

**Focus v4.0:** Klein en gericht - alleen dropdown functionaliteit  
**Focus v4.1:** Safety nets (privacy, financiën, mantelzorg)

---

## 💡 Volgende stappen (optioneel)

**Voor Laura:**
1. Test in de praktijk met professionals
2. Verzamel feedback op de dropdown
3. Besluit: gaan we door met v4.1 (safety nets)?

**Voor Marie:**
1. Klaar met opschonen ✅
2. Git commit gemaakt ✅
3. Documentatie compleet ✅

---

**Gebouwd met zorg door Laura & Marie 🌈**  
**24 februari 2026, 23:30 - 00:05**

Welterusten! 🌙
