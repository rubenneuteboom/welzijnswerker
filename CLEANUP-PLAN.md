# CLEANUP PLAN - Positioneel.html
**Datum:** 25 februari 2026, 20:05  
**Doel:** Clean, werkbaar product (geen rattenjoe)

---

## ✅ CLEANUP CHECKLIST

### 1. **CODE OPSCHONEN**
- [ ] Verwijder debug console.log statements
- [ ] Verwijder commented-out code
- [ ] Verwijder dubbele functies
- [ ] Verwijder ongebruikte variabelen

### 2. **VALIDATIE TOEVOEGEN**
- [ ] Check lege velden bij opslaan
- [ ] Validatie cliëntnaam (optioneel maar als ingevuld niet leeg)
- [ ] Postcode validatie (4 cijfers)
- [ ] Check minimaal 1 domein geselecteerd in triage

### 3. **CONSISTENTIE**
- [ ] Alle quotes consistent (' of " - kies 1)
- [ ] Indentatie consistent (4 spaces overal)
- [ ] Functie namen consistent (camelCase)
- [ ] Commentaar stijl consistent (// of /** */)

### 4. **ERROR HANDLING**
- [ ] Try-catch blokken waar nodig
- [ ] Friendly error messages (geen technical stack traces)
- [ ] Fallback values voor missing data

### 5. **TESTEN**
- [ ] Snelle check mode werkt (20 min flow)
- [ ] Volledig gesprek werkt (alle 8 schermen)
- [ ] Terug-knoppen werken
- [ ] LocalStorage save/load werkt
- [ ] Reset functie werkt

### 6. **DOCUMENTATIE**
- [ ] Inline comments waar code complex is
- [ ] Function headers met doel
- [ ] TODOs verwijderen of in aparte file

---

## 🎯 **PRIORITEIT: WERKBAAR > MOOI**

Geen nieuwe features.
Alleen: opschonen, valideren, werkend maken.

---

Start: 20:05  
Target: 20:30  
