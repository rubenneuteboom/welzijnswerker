# RPA Positionele Analyse v5.1 LEAN - Status Update

**Datum:** 24 maart 2026, 19:00  
**Bestand:** `positioneel-v5.1-setup.html`  
**URL:** https://rubens-mac-mini.tail7aaadf.ts.net:3458/positioneel-v5.1-setup.html

---

## ✅ WAT IS AF (Scherm 0-4 + 8 basis)

### **Scherm 0: Eenmalige Setup**
- ✅ Organisatie kiezen (8 opties)
- ✅ Wordt onthouden voor volgende gesprekken
- ✅ Kan altijd gewijzigd worden via "wijzigen" knop

### **Scherm 1: Start & Cliëntgegevens**
- ✅ NAW-gegevens (naam, geboortedatum, adres, postcode, plaats, telefoon, email)
- ✅ Hulpvraag (groot tekstveld)
- ✅ Toestemming (3 knoppen)
- ✅ Gesprek metadata (datum, professional, vervolggesprek - ingeklapt)
- ✅ Demo knop zichtbaar
- ✅ Validatie (naam + toestemming verplicht)

### **Scherm 2: Domeinen Scan (Accordion)**
- ✅ 11 SIJN domeinen
- ✅ Per domein:
  - Status (urgent/aandacht/goed)
  - Notitie (vrije tekst)
  - Steun (zelfstandig/aanwezig/nodig)
  - Steun details (type/wie/wat - conditionally visible)
- ✅ Sticky header met spinnenweb + stats
- ✅ Doelgroep hints (top domeinen eerst)
- ✅ Progress bar
- ✅ Validatie (min. 1 domein vereist)

### **Scherm 3: Netwerkpositie (Afgeleid)**
- ✅ Automatische berekening op basis van domeinen
- ✅ 5 posities (1-persoons/informeel/formeel/gemengd/geen)
- ✅ Breakdown per domein (wie helpt waar?)
- ✅ Risico-detectie (1-persoons overbelasting, geen netwerk)
- ✅ Bevestig of pas aan (met reden)

### **Scherm 4: Gewenste Beweging**
- ✅ Huidig → Beoogd visueel
- ✅ 5 keuze-knoppen (grote, duidelijke cards)
- ✅ Waarom deze beweging? (tekstveld)
- ✅ Prioriteit (urgent/belangrijk/verbetering)
- ✅ Concrete stappen (lijst met checkbox + toevoegen/verwijderen)
- ✅ Validatie (keuze + prioriteit vereist)

### **Scherm 8: Samenvatting (Basis)**
- ✅ Toont alle data (JSON format voor nu)
- ✅ Export JSON functie (download bestand)
- ⏳ Nog mooi maken (accordion, print-vriendelijk, sectie-weergave)

---

## ⏳ NOG TE BOUWEN (Scherm 5-7)

### **Scherm 5: Interventies & Resources**
- Tabs (interventies/organisaties/activiteiten)
- Gefilterd op Amsterdam + doelgroep
- Selectie bijhouden

### **Scherm 6: Team Besluit (MDO)**
- Wie doet wat?
- Deadlines
- Volgend overleg

### **Scherm 7: Reflectie**
- Voor/na vergelijking
- Impact inschatting
- Kosten-baten

### **Scherm 8: Samenvatting (Afmaken)**
- Accordion layout (alle secties inklapbaar)
- Print-vriendelijke opmaak
- PDF export optie
- Deel via email (met toestemming)

---

## 🐛 BEKENDE ISSUES

### **Demo knop:**
- ⚠️ Laadt data maar navigatie naar Scherm 2 werkt niet altijd
- Workaround: Handmatig invoeren of localStorage clearen + opnieuw proberen

### **Scherm 2 → 3 navigatie:**
- ⚠️ "Ga door" knop blijft disabled na demo
- Oplossing: Forceer enable in code toegevoegd, maar werkt nog niet 100%

---

## 🧪 TESTEN

### **Handmatig testen (zonder demo):**

1. **Scherm 0:** Kies organisatie (bijv. Wijkteam) → Opslaan
2. **Scherm 1:**
   - Vul naam in (verplicht)
   - Vul hulpvraag in
   - Klik toestemming "Ja"
   - Klik "Start gesprek"
3. **Scherm 2:**
   - Klik op een domein (bijv. Financiën)
   - Kies status (bijv. Urgent)
   - Vul notitie in
   - Kies steun "Aanwezig"
   - Kies type "Informeel"
   - Vul wie + wat in
   - Klik "Ga door" (moet nu actief zijn)
4. **Scherm 3:**
   - Check: zie je de berekende positie?
   - Check: zie je breakdown per domein?
   - Klik "✅ Ja, dit klopt"
5. **Scherm 4:**
   - Kies beoogde positie (bijv. Informeel)
   - Vul waarom in
   - Kies prioriteit
   - Voeg een stap toe
   - Klik "Ga door"
6. **Scherm 8:**
   - Check: zie je alle data?
   - Klik "Exporteer JSON" → download werkt?

---

## 📊 STATS

**Code:**
- ~1200 regels HTML
- ~800 regels CSS
- ~1000 regels JavaScript
- Totaal: ~70 KB

**Schermen:**
- Van 21 → 8 schermen (62% reductie)
- Van ~40 clicks → ~15 clicks (62% sneller)

**State management:**
- Settings: persistent (organisatie onthouden)
- State: per gesprek (localStorage)
- Auto-save bij elke wijziging

---

## 🔄 VOLGENDE STAPPEN

1. **Scherm 5-7 bouwen** (~30 min)
2. **Scherm 8 afmaken** (~15 min)
3. **Demo bug fixen** (~10 min)
4. **Uitgebreid testen** (~20 min)
5. **Mobile responsive** (~30 min)
6. **Polishing** (kleuren, spacing, animaties)

**Totaal geschatte tijd nog:** ~2 uur

---

## 📱 TOEGANG

**Oude versies blijven beschikbaar:**
- Niveau 1: `/netwerkanalyse.html`
- Niveau 2 (oud): `/positioneel.html`
- Niveau 3: `/strategisch.html`
- Familie: `/familie-portal-pro.html`
- MDO: `/familie-portal-mdo.html`

**Nieuwe versie:**
- Niveau 2 (LEAN): `/positioneel-v5.1-setup.html`

**Alle links werken via de navigatiebalk bovenaan!**

---

*Marie - 24 maart 2026, 19:05*
