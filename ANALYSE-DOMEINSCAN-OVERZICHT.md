# Analyse: Domeinscan vs Overzicht - Wat is Dubbel?

**Datum:** 25 februari 2026, 11:53  
**Probleem:** Laura vindt domeinscan en overzicht onoverzichtelijk  
**Vraag:** Wat is dubbel? Hoe simpeler maken?

---

## 📋 **HUIDIGE FLOW**

### **Stap 1: Triage (Focusgebieden)**
**Wat vul je in:**
- Per domein: 🟢 Zelfstandig / 🟡 Steun aanwezig / 🔴 Steun nodig
- Bij 🟡: dropdown (type + wie helpt)

**Output:** Snel overzicht welke domeinen aandacht vragen

---

### **Stap 2: Domeinscan (Wie helpt - en hoe?)**
**Wat vul je in:**
- Open domein → accordion
- Stoplicht status (uit triage) getoond
- **Supporters toevoegen:**
  - Naam
  - Type (informeel/collectief/formeel)
  - Effect (helpend/neutraal/belemmerend)
  - Relatie
- Cliëntreactie ("Klopt dit?")
- Notitie (optioneel)
- **Netwerkvisualisatie** (per domein: % formeel/collectief/informeel)

**Output:** Gedetailleerd beeld WIE waar helpt + HOE het werkt

---

### **Stap 3: Overzicht (Wat zien we samen?)**
**Wat zie je:**
- **Mantelzorg alarm** (3+ domeinen)
- **Aggregatie dashboard** (totaal % formeel/collectief/informeel)
- **Tabel per netwerktype:**
  - 🟢 Informeel netwerk (welke domeinen, wie helpt)
  - 🟣 Collectief (welke domeinen, welke voorzieningen)
  - 🔵 Formeel (welke domeinen, welke professionals)
  - ⚪ Zelfstandig (welke domeinen)
  - 🚨 Witte vlekken (steun nodig maar niemand helpt)
- **Spider diagram** (netwerkpositie visueel)

**Output:** Totaalbeeld hoe netwerk ervoor staat

---

## 🔴 **WAT IS DUBBEL?**

### **1. Stoplicht twee keer invullen? ❌ NEE**
- **Triage:** Globaal (🟢🟡🔴)
- **Domeinscan:** Getoond (niet opnieuw invullen)
- ✅ **Niet dubbel** - triage wordt hergebruikt

### **2. "Wie helpt" twee keer invullen? ⚠️ JA, MAAR...**
- **Triage:** Dropdown (snel, 1 persoon)
- **Domeinscan:** Uitgebreid (meerdere personen, effect, relatie)
- **Verschil:** Triage = snel overzicht, Domeinscan = uitwerking

**Team mening:**

**👥 Karin:**
> "Bij triage vul ik snel in 'budgetcoach helpt'. Bij domeinscan werk ik uit: mevrouw De Vries, helpend, heeft ook contact met schuldhulp. Dat is geen dubbel werk - het is verdieping."

**📊 Bram:**
> "Methodologisch is dit correct: eerst snelle scan (triage), dan verdieping (domeinscan). Maar de OVERGANG kan duidelijker."

**💬 Lisa:**
> "Bij domeinscan zie ik 'budgetcoach' al vooringevuld uit triage. Dat helpt - ik hoef niet opnieuw te beginnen. Maar ik snap niet waarom ik het domein nog een keer open moet klikken."

### **3. Netwerktype visualisatie twee keer? ✅ JA - DIT IS DUBBEL**

**Domeinscan:**
- Per domein: klein blokje met % formeel/collectief/informeel
- Elke keer als je een domein opent

**Overzicht:**
- Totaal: groot dashboard met % formeel/collectief/informeel over ALLE domeinen
- Eenmalig, bovenaan

**📊 Bram:**
> "De aggregatie in overzicht is waardevol. De per-domein visualisatie in domeinscan is ook nuttig. Maar misschien niet ALLEBEI nodig?"

**🌈 Marie:**
> "Per-domein visualisatie helpt tijdens invullen ('ah, dit is vooral formeel'). Totaal helpt voor besluitvorming. Beide hebben waarde."

**Consensus:** Behouden beide, maar domeinscan versie compacter/minder prominent.

---

## 🔴 **WAT IS ONOVERZICHTELIJK?**

### **In DOMEINSCAN:**

**👥 Karin:**
> "Als ik een domein open, krijg ik:
> - Stoplicht status
> - Context label
> - Cliëntreactie blok
> - Supporters lijst
> - Toevoegen knop
> - Netwerkvisualisatie
> - Notitie veld
> 
> Dat is 7 blokken! Ik raak het overzicht kwijt. Wat is belangrijk? Wat is optioneel?"

**💬 Lisa:**
> "Ik moet scrollen om alles te zien. Het voelt druk. Kan dit compacter?"

**Probleem:** Te veel TEGELIJK zichtbaar per domein.

---

### **In OVERZICHT:**

**👥 Karin:**
> "Ik zie:
> - Mantelzorg alarm (groot rood blok)
> - Aggregatie dashboard (groot groen blok)
> - Tabel met 5 secties (informeel/collectief/formeel/zelfstandig/witte vlekken)
> - Spider diagram
> - Nog meer uitleg tekst
> 
> Dat is veel scrollen. Wat moet ik EERST lezen?"

**🏛️ Jan:**
> "De data is waardevol, maar de presentatie is overweldigend. Geef me duidelijke hiërarchie: wat is urgent (mantelzorg alarm), wat is analyse (aggregatie), wat is detail (tabel)."

**Probleem:** Geen duidelijke visuele hiërarchie. Alles even groot/belangrijk.

---

## 💡 **TEAM VOORSTELLEN: VEREENVOUDIGING**

### **🎯 Voorstel 1: Domeinscan Compacter (Karin + Lisa)**

**Nu:**
```
[Domein open]
┌─────────────────────────────────┐
│ 🟡 Steun aanwezig               │
│ 💡 Uit overzicht: Maria helpt  │
│                                 │
│ 💬 Hoe ervaart u dit zelf?     │
│ [✅ Klopt] [🤔 Deels] [❌ Niet]│
│                                 │
│ 👥 Wie helpt bij Financiën?    │
│ Maria - Informeel - Helpend     │
│                                 │
│ [➕ Nog iemand toevoegen]      │
│                                 │
│ 🕸️ Netwerkpositie              │
│ 🟢 Informeel 100%               │
│                                 │
│ 📝 Notitie (optioneel)          │
│ [tekstveld]                     │
└─────────────────────────────────┘
```

**Voorstel:**
```
[Domein open - COMPACT]
┌─────────────────────────────────┐
│ 🟡 Steun aanwezig               │
│                                 │
│ 👥 Wie helpt?                   │
│ Maria - 🟢 Informeel - Helpend  │
│ [➕ Toevoegen]                  │
│                                 │
│ ⋯ Meer opties ▼                │  ← klik om te openen
└─────────────────────────────────┘

[Als "Meer opties" geklikt]
┌─────────────────────────────────┐
│ 💬 Cliëntreactie                │
│ 🕸️ Netwerkpositie (grafiek)    │
│ 📝 Notitie                      │
└─────────────────────────────────┘
```

**Impact:** Per domein van 7 blokken → 2 blokken (+ 3 optioneel)

---

### **🎯 Voorstel 2: Overzicht Hiërarchie (Jan + Bram)**

**Nu:** Alles even groot (mantelzorg = aggregatie = tabel = spider)

**Voorstel:**
```
[PROMINENT - Rode alarm als urgent]
┌─────────────────────────────────┐
│ ⚠️ MANTELZORG ALARM             │
│ Maria (5 domeinen) - Hoog risico│
└─────────────────────────────────┘

[SECUNDAIR - Groene samenvatting]
┌─────────────────────────────────┐
│ 📊 Netwerkpositie               │
│ 🟢 45% Informeel                │
│ 🟣 18% Collectief               │
│ 🔵 37% Formeel                  │
│ → Gemengd netwerk               │
└─────────────────────────────────┘

[DETAILS - Inklapbaar]
▸ Toon details per netwerktype ▼

[Als geklikt]
┌─────────────────────────────────┐
│ 🟢 Informeel (6 domeinen)       │
│ 🟣 Collectief (3 domeinen)      │
│ 🔵 Formeel (5 domeinen)         │
│ 🚨 Witte vlekken (1 domein)     │
└─────────────────────────────────┘

[Spider diagram onderaan]
🕸️ Netwerkpositie visueel
```

**Impact:** Duidelijke hiërarchie (urgent → samenvatting → details)

---

### **🎯 Voorstel 3: Domeinscan Slimmer Openen (Lisa + Marie)**

**Nu:** Elk domein handmatig openen in accordion

**Probleem:** Veel klikken, domein → open → invullen → dicht → volgende domein → open...

**Voorstel:** 
- Domeinen met 🟡/🔴 **automatisch open**
- Domeinen met 🟢 dicht (tenzij je wilt uitwerken)
- **"Vul alles tegelijk in"** modus (alle 🟡/🔴 domeinen onder elkaar, geen klikken)

**Impact:** Van 5x klikken → 0x klikken voor 5 domeinen

---

### **🎯 Voorstel 4: Overzicht Spider Diagram Prominenter (Bram + Suus)**

**📊 Bram:**
> "Het spider diagram is DE visualisatie van netwerkpositie. Maar het staat ONDERAAN na alle tabellen. Veel professionals zien het niet eens."

**🏥 Suus:**
> "In gesprek met cliënt gebruik ik het spider diagram. Niet de tabellen. Maar ik moet scrollen om het te vinden."

**Voorstel:**
```
[Overzicht - NIEUWE volgorde]

1. Mantelzorg alarm (als urgent)
2. 🕸️ SPIDER DIAGRAM (groot, prominent)
3. Aggregatie dashboard (percentages)
4. Tabel details (inklapbaar)
```

**Impact:** Visueel eerst, data later

---

### **🎯 Voorstel 5: Domeinscan & Overzicht Samenvoegen? (Marie)**

**Radicale optie:**

**Nu:** 
- Domeinscan (stap 2) → invullen per domein
- Overzicht (stap 3) → totaalbeeld

**Voorstel:** Eén scherm met twee tabs:

```
┌─────────────────────────────────┐
│ [Per domein] [Totaalbeeld]      │
└─────────────────────────────────┘

[Tab 1: Per domein]
Accordion met domeinen (zoals nu)

[Tab 2: Totaalbeeld]  
Aggregatie + spider + mantelzorg
```

**Voordeel:** 
- Minder schermen
- Direct schakelen tussen detail en overzicht

**Nadeel:**
- Minder lineaire flow
- Mogelijk verwarrend voor nieuwe gebruikers

**Team:** 🤔 Twijfel - eerst andere verbeteringen proberen

---

## 🎯 **PRIORITEIT VOLGENS TEAM**

### **MOET (nu doen):**
1. ✅ **Domeinscan compacter** - "Meer opties" inklapbaar
2. ✅ **Overzicht hiërarchie** - Urgent → Samenvatting → Details
3. ✅ **Spider diagram prominenter** - Bovenaan overzicht

### **ZOU MOETEN (snel daarna):**
4. **Domeinen auto-open** - 🟡/🔴 domeinen automatisch open
5. **Details inklapbaar** - Tabellen in overzicht standaard dicht

### **KAN (later overwegen):**
6. Domeinscan + Overzicht samenvoegen (tabs)
7. "Vul alles tegelijk in" modus (alle domeinen onder elkaar)

---

## 📊 **VOLGORDE LOGICA**

### **Huidige flow:**
```
Triage → Domeinscan → Overzicht → Beweging
(snel)   (detail)     (totaal)    (actie)
```

**Logisch? ✅ JA**

**Probleem:** Niet de STAPPEN, maar de PRESENTATIE binnen stappen

---

## ✅ **CONCLUSIE & ACTIE**

### **Wat is dubbel:**
- ⚠️ Netwerktype visualisatie (maar beide nuttig)
- ⚠️ "Wie helpt" (maar triage = snel, domeinscan = uitwerking)

### **Wat is onoverzichtelijk:**
- ❌ Domeinscan: te veel blokken tegelijk (7 → 2+3 optioneel)
- ❌ Overzicht: geen hiërarchie (urgent = detail = totaal)
- ❌ Spider diagram te onopvallend (staat onderaan)

### **Top 3 acties:**
1. **Domeinscan:** Maak compacter (cliëntreactie/notitie/netwerkvis → "Meer opties")
2. **Overzicht:** Visuele hiërarchie (alarm → spider → aggregatie → details inklapbaar)
3. **Overzicht:** Spider diagram prominenter (van onderaan → bovenaan)

---

**Wacht op bevestiging Laura:** Zullen we deze 3 acties uitvoeren?

**Tijd:** ~45 minuten voor alle 3

---

**Datum:** 25 februari 2026, 11:53  
**Team:** Kernteam (Marie, Bram, Suus, Jan, Lisa, Karin, Peter)
