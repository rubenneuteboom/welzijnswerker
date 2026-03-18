# Familie Portal PRO - Feature Overview

## V2.0 - Professional Edition

### Feature 1: 📄 Documenten & Verslagen
**Wat:** Centrale plek voor alle documenten
- Behandelplannen
- MDO verslagen  
- Schoolrapporten
- Brieven van professionals

**Interface:**
- 5e tab in bottom nav: 📄 Documenten
- Gegroepeerd per type
- Download knop per document
- Metadata: datum, professional, bestandsgrootte

**Demo data:** 3 documenten (GGZ behandelplan, MDO verslag, Schoolrapport)

### Feature 2: 🔔 Notificaties Systeem
**Wat:** Real-time updates en alerts
- Nieuwe berichten van regisseur
- Document toegevoegd
- Afspraak herinnering (24u tevoren)
- MDO agenda wijziging

**Interface:**
- Badge op 🔔 icoon in header (rood nummer)
- Klikken → notificaties overzicht
- "Mark all as read" functie
- Per notificatie: tijd, type, actie

**Demo data:** 2 notificaties (nieuw bericht, document toegevoegd)

### Feature 3: 🔗 RPA N2 → Familie Portal Export
**Wat:** Profes

sional kan data exporteren naar portal

**In RPA N2 (positioneel.html):**
- Nieuwe knop in samenvatting: "📤 Deel met familie"
- Genereert JSON export met:
  - Regisseur info
  - Betrokken professionals
  - Afspraken
  - Laatste updates per domein
  - MDO planning

**In Familie Portal:**
- "Importeer update" functie
- Paste JSON → automatisch bijgewerkt
- Toont "Laatste sync: [tijd]"

**Flow:**
1. Professional vult RPA N2 in
2. Klikt "Deel met familie"  
3. Krijgt JSON code
4. Familie plakt in portal
5. Data wordt gesynchroniseerd

---

## Implementation Strategy

Vanwege file size (~1100 regels), maak ik familie-portal-pro.html als:
- Copy van familie-portal.html
- + Feature 1 code (~150 regels)
- + Feature 2 code (~100 regels)  
- + Feature 3 code (~80 regels)
- = ~1430 regels totaal

---

Building now...
