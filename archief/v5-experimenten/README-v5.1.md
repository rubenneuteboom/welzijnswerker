# RPA Positionele Analyse v5.1 LEAN

**Relationeel-Positioneel Analysemodel - Vereenvoudigde Flow**

---

## 🚀 Snel Starten

**Lokaal:**
```bash
cd /Users/rubenneuteboom/Projects/welzijnswerker
python3 -m http.server 3458
```

Dan open: http://localhost:3458/positioneel-v5.1-setup.html

**Of via Tailscale:**
https://rubens-mac-mini.tail7aaadf.ts.net:3458/positioneel-v5.1-setup.html

---

## 📂 Bestandsstructuur

```
welzijnswerker/
├── positioneel-v5.1-setup.html   ← NIEUWE LEAN VERSIE (gebruik deze!)
├── positioneel.html              ← Oude versie (21 schermen)
├── positioneel-v4-backup.html    ← Backup v4
├── positioneel-v5-lean.html      ← Oude poging v5 (gebruik NIET)
├── netwerkanalyse.html           ← Niveau 1 (blijft)
├── strategisch.html              ← Niveau 3 (blijft)
├── familie-portal-pro.html       ← Familie portaal (blijft)
├── familie-portal-mdo.html       ← MDO portaal (blijft)
├── docs/
│   ├── VERSIE-5.1-STATUS.md      ← Technische status
│   ├── VOOR-LAURA.md             ← Gebruikers-handleiding
│   └── README-v5.1.md            ← Dit bestand
```

---

## ✨ Wat is Nieuw in v5.1?

### **Van 21 → 8 Schermen**
1. **Eenmalige Setup** - Organisatie kiezen (wordt onthouden)
2. **Start & Cliëntgegevens** - NAW + hulpvraag
3. **Domeinen Scan** - 11 SIJN domeinen (accordion)
4. **Netwerkpositie** - Automatisch afgeleid
5. **Gewenste Beweging** - Beoogde positie + waarom
6. **Interventies** - Hulpbronnen
7. **Team Besluit** - Wie doet wat? (MDO)
8. **Reflectie** - Terugkijken
9. **Samenvatting** - Alles samen + export

### **62% Minder Clicks**
- Oude versie: ~40 clicks
- Nieuwe versie: ~15 clicks

### **Sneller**
- Oude versie: ~45 minuten
- Nieuwe versie: ~25-30 minuten

---

## 🎯 Methodologie

**RPA = Relationeel-Positioneel Analysemodel**

**Kern:**
- Niet meer zorg, maar anders georganiseerde steun
- Doorbreekt het "systeemplafond"
- Bewuste keuze voor netwerkbeweging

**5 Netwerkposities:**
- 🟡 **1-persoons:** Alles op 1 persoon (risico overbelasting)
- 🟢 **Informeel:** Eigen kring helpt
- 🔵 **Formeel:** Professionele zorg
- 🟣 **Gemengd:** Mix van alles
- ⚪ **Geen:** Nauwelijks/geen steun

---

## 🧪 Demo Modus

**Snelste manier om te testen:**

1. Open de app
2. Kies organisatie (bijv. Wijkteam)
3. Klik "💡 Demo met voorbeeldcliënt"
4. Loop door alle schermen
5. Exporteer JSON aan het eind

**Demo scenario:** Emma + overbelaste zus Marie

---

## 💾 Data & Privacy

**Opslag:**
- Lokaal in browser (localStorage)
- Niks wordt verzonden naar servers
- Export als JSON (handmatig downloaden)

**Privacy:**
- Cliënt kan kiezen: toestemming ja/nee/later
- Bij "nee" = alleen voor professional zelf
- Bij "ja" = mag gedeeld met MDO

---

## 🔧 Technisch

**Stack:**
- Pure HTML/CSS/JavaScript (geen frameworks)
- Chart.js voor spinnenweb
- localStorage voor state
- ~2500 regels code

**Browser support:**
- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Mobile: ⚠️ Nog niet getest

---

## 📊 Export Formaat

**JSON structuur:**
```json
{
  "versie": "5.1-lean",
  "datum": "2026-03-24T18:30:00.000Z",
  "organisatie": "wijkteam",
  "client": { ... },
  "domeinen": { ... },
  "netwerkpositie": { ... },
  "beweging": { ... },
  "interventies": { ... },
  "team": { ... },
  "reflectie": { ... }
}
```

**Gebruik voor:**
- Backup
- Delen met collega's
- Import in Niveau 3 (strategisch)
- Analyse/onderzoek

---

## 🐛 Bekende Issues

1. **Demo knop:** Navigatie werkt niet 100% (knop blijft disabled)
   - Workaround: Handmatig doorklikken
2. **Mobile:** Nog niet geoptimaliseerd
3. **Spinnenweb:** Placeholder (Chart.js moet nog geïmplementeerd)

---

## 📚 Team Profielen

**Tier 1 (altijd geraadpleegd):**
- 🌈 **Marie** - Developer/UX
- 📊 **Bram** - Methodoloog
- 🏥 **Suus** - Trimbos praktijk

**Tier 2 (bij grote keuzes):**
- 💬 **Lisa** - Ervaringsdeskundige
- 👥 **Karin** - Wijkteam sociaal werker
- 🏛️ **Jan** - Beleidsadviseur Wmo
- 💼 **Peter** - Zorginkoop adviseur

**Tier 3 (ad-hoc domein-experts):**
- 🫂 **Marieke** - Mantelzorg
- 🏛️ **Tom** - Arbeidsmarkt
- 🏘️ **Fatima** - Gemeente toegang
- 🧠 **David** - GGZ ambulant
- 🏠 **Sandra** - LVB/beschermd wonen
- 🩺 **Ellen** - Wijkverpleging
- 💳 **Jamal** - Schuldhulp

---

## 📞 Contact

**Project owner:** Laura Terbrack  
**Developer:** Marie (via OpenClaw)  
**Infrastructure:** Ruben

---

## 📜 Licentie

Eigendom van SIJN methodologie / Laura Terbrack

---

*Laatste update: 24 maart 2026, 19:30*
