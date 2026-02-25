# Team Review: Volledig Gesprek (Medium Flow)

**Datum:** 25 februari 2026, 10:51  
**Focus:** Rommeligheden na focusgebieden scherm + Mantelzorg + Netwerktyperingen

---

## 🗺️ Huidige Flow (8 stappen)

### ✅ **Stap 1: Start**
Werkt goed - duidelijke keuze tussen volledig/snel

### ✅ **Stap 2: Focusgebieden (Triage)**
**Laura:** "Hier ben ik tevreden"
- Stoplicht per domein (🟢🟡🔴)
- Bij 🟡: dropdown voor type steun (formeel/collectief/informeel) + wie helpt
- Overzichtelijk, snel

---

### ⚠️ **Stap 3: Domeinscan** — HIER BEGINT HET ROMMELIG

**Marie's observatie:**
```
Accordion per domein met VEEL velden:
- Hoe gaat het? (1-2-3)
- Wie helpt? (supporters lijst)
- Effect? (helpend/neutraal/belemmerend)
- Relatie? (familie/professioneel/etc)
- Netwerkdekking?
- Situatie tekstbox
- Wens tekstbox
```

**🏥 Suus:**
> "Dit is te veel tegelijk. Als ik dit met een cliënt doe, ben ik 30 minuten bezig met alleen dit scherm. Welke velden zijn ECHT nodig voor de positionele analyse?"

**👥 Karin:**
> "Ik open een domein en zie een waslijst aan vragen. Waar begin ik? Wat is de kern? En waarom vraag ik dit allemaal als ik het stoplicht al invulde bij stap 2?"

**💬 Lisa:**
> "Als cliënt zou ik me geïnterviewd voelen, niet gehoord. 'Wie helpt je?' vraag je 3 keer: bij triage, bij supporters, bij relatie. Waarom?"

**📊 Bram:**
> "Methodologisch klopt het: we willen draaglagen per domein. Maar de UX maakt het onduidelijk. De triage gaf al 'wie helpt', waarom opnieuw?"

**Problemen:**
1. **Overlap met triage** - we vragen "wie helpt" 2x
2. **Te veel velden tegelijk** - geen duidelijke prioriteit
3. **Netwerktypering niet zichtbaar** - je vult in, maar ziet niet wat het betekent
4. **Geen mantelzorg signaal** - als iemand 5 domeinen steunt, zie je dat niet

---

### ⚠️ **Stap 4: Overzicht (Dashboard)**

**Marie's observatie:**
```
- Overzichtstabel (domein + score + wie helpt)
- Spider diagram (groene vlak = zelfstandigheid)
- Netwerkpositie uitleg
```

**🏛️ Jan:**
> "De spider is mooi, maar ik zie niet WIE wat doet. Is dit formele of informele zorg? Dat is cruciaal voor beleid."

**💼 Peter:**
> "Ik mis: hoeveel formele zorg wordt er ingezet? Wat kost dat? Kan dit verschuiven naar informeel?"

**Problemen:**
1. **Netwerktypering onzichtbaar** - je ziet "partner helpt" maar niet dat dit informeel is
2. **Geen aggregatie** - welke persoon steunt op meerdere domeinen? (mantelzorg overbelasting!)
3. **Geen kosten-indicatie** - wat is de formele zorg "footprint"?

---

### ⚠️ **Stap 5: Beweging**

**Marie's observatie:**
```
Voor/Na visualisatie per domein:
- Huidige steun (formeel/collectief/informeel)
- Gewenste beweging (bij/weg/anders)
```

**👥 Karin:**
> "Dit scherm is goed, maar ik kom hier zonder context. Ik weet niet meer precies wie wat deed - ik moet terug scrollen."

**📊 Bram:**
> "De bewegingsrichting is duidelijk (bijv. informeel → collectief), maar de REDEN ontbreekt. Waarom deze beweging? Wat is het doel?"

**Problemen:**
1. **Context ontbreekt** - wie helpt nu? (niet direct zichtbaar)
2. **Rationale ontbreekt** - waarom deze beweging?
3. **Geen check op haalbaarheid** - stel je wilt naar informeel, maar er IS geen familie?

---

### 🤷‍♀️ **Stap 6-8: Reflectie / Interventies / Samenvatting**

**Team:** "Niet bekeken, eerst stap 2-5 fixen"

---

## 🎯 KERNPROBLEEM: Netwerktyperingen onzichtbaar

**📊 Bram:**
> "Het RPA-model draait om netwerkposities en draaglagen. Maar tijdens het invullen ZIE je die niet. Je vult in, en pas later (in het overzicht) zie je het spider-diagram. Dat is te laat."

**🌈 Marie:**
> "We hebben de data (formeel/collectief/informeel per supporter), maar we TONEN het niet tijdens het proces. Het voelt als 'invullen voor de computer', niet 'samen ontdekken'."

**💡 Voorstel:**
Na elk ingevuld domein: **mini-visualisatie** van de netwerkpositie voor DAT domein.

Bijvoorbeeld:
```
💰 Financiën — Netwerkpositie

🟢 Informeel    ████░░░░░░ 40% (partner, zoon)
🟣 Collectief   ██░░░░░░░░ 20% (schuldhulpmaatje)
🔵 Formeel      ████░░░░░░ 40% (budgetcoach)

→ Gemengd netwerk, deels zelfstandig
```

Dit maakt het visueel en begrijpelijk TIJDENS het gesprek.

---

## 🚨 KERNPROBLEEM 2: Mantelzorg signalering

**🏥 Suus:**
> "Als iemand 5 domeinen steunt (bijv. dochter helpt met financiën, huishouden, vervoer, doktersafspraken, administratie), dan is dat een ROOD ALARM. Die dochter is overbelast. Maar ik zie dat nergens."

**💬 Lisa:**
> "Als IK die dochter ben, wil ik dat de professional dat ZIETen bespreekt. Niet achteraf in een rapport, maar NU."

**📊 Bram:**
> "Mantelzorgoverbelasting is een RPA-signaal. We moeten dit real-time tonen. Niet als 'risico alert' onderaan, maar prominent: 'Let op: Maria steunt op 5 domeinen'."

**💡 Voorstel:**
In het overzichtsscherm (stap 4): **Mantelzorg Dashboard**

```
⚠️ AANDACHT: Mogelijk overbelaste mantelzorgers

👩 Maria (dochter)
  Steunt op: 💰 Financiën, 🏠 Huishouden, 🚗 Vervoer, 📋 Administratie, 💊 Medicatie
  Effect: 4x helpend, 1x neutraal
  → Risico: Overbelasting (5+ domeinen)
  → Actie: Respijtzorg verkennen

👨 Partner
  Steunt op: 🛁 ADL, 🏠 Huishouden
  Effect: 2x helpend
  → Normaal (2 domeinen)
```

Dit maakt mantelzorg ZICHTBAAR en BESPREEKBAAR.

---

## 🔄 Team voorstellen

### **🏥 Suus: Versimpel stap 3**
> "Maak het scherm gefocust. Vraag alleen:
> 1. Wie helpt er bij dit domein? (namen)
> 2. Hoe helpt die persoon? (praktisch/emotioneel/financieel)
> 3. Helpt dat of belemmert het?
>
> De rest (relatie, netwerkdekking) kan automatisch afgeleid of later gevraagd worden."

### **📊 Bram: Toon netwerk TIJDENS invullen**
> "Na elk domein: toon de netwerkpositie van DAT domein. Dan zie je direct: 'Ah, hier ben ik vooral afhankelijk van formele zorg', en kun je daarover doorpraten."

### **💬 Lisa: Maak triage leidend**
> "Als ik bij triage al zeg: '🟡 Steun aanwezig → budgetcoach', waarom vraag je het dan OPNIEUW bij domeinscan? Gebruik die data, vul het voor."

### **👥 Karin: Progressie-gevoel**
> "Ik wil weten: hoeveel domeinen nog? Welke zijn belangrijk? Kan ik er eentje overslaan? Geef me controle."

### **🏛️ Jan: Netwerktypen aggregeren**
> "In het overzicht wil ik zien:
> - Totaal formele zorg: 6 domeinen
> - Totaal informele zorg: 4 domeinen
> - Totaal collectieve zorg: 2 domeinen
>
> Dan zie ik de afhankelijkheid van het systeem."

### **💼 Peter: Kostenindicatie**
> "Formele zorg kost geld. Toon bij het overzicht: '6 domeinen met formele zorg → hoge systeemdruk'. Dat helpt bij de businesscase voor preventie."

### **🌈 Marie: Visuele hiërarchie**
> "Maak onderscheid tussen:
> - MUST (kernvragen voor RPA)
> - SHOULD (verdieping)
> - COULD (optioneel)
>
> En toon dat visueel: grote knoppen vs kleine tekstvelden."

---

## 🎯 Concrete acties

### **Prioriteit 1: Mantelzorg signalering** 🚨
- [ ] Detecteer personen die op 3+ domeinen helpen
- [ ] Toon dit prominent in overzichtscherm
- [ ] Suggest respijtzorg interventies

### **Prioriteit 2: Netwerktypen zichtbaar** 🕸️
- [ ] Mini-visualisatie per domein na invullen
- [ ] Aggregatie in overzichtscherm (totaal formeel/collectief/informeel)
- [ ] Kleurcodering consistent (🔵 formeel, 🟣 collectief, 🟢 informeel)

### **Prioriteit 3: Domeinscan versimpelen** ✂️
- [ ] Scrap dubbele vragen (gebruik triage data)
- [ ] Focus op: wie + hoe + effect
- [ ] Verberg "nice to have" velden achter "meer details" knop

### **Prioriteit 4: Context behouden** 🧠
- [ ] In beweging scherm: toon wie er nu helpt (compact)
- [ ] In reflectie scherm: herhaal kernbeslissingen

---

## ❓ Vragen voor Laura

1. **Welke velden in domeinscan zijn ECHT nodig voor positionele analyse?**
   - Kunnen we sommige automatisch afleiden?
   - Kunnen we sommige optioneel maken?

2. **Hoe wil je mantelzorg signaleren?**
   - Real-time tijdens invullen?
   - Pas in overzichtsscherm?
   - Met welke drempelwaarde? (3+ domeinen?)

3. **Moet netwerkpositie per domein zichtbaar zijn?**
   - Of alleen overall (spider diagram)?
   - Helpt het om per domein te zien: "dit is vooral formeel"?

4. **Prioriteit van de fixes?**
   - Eerst mantelzorg signalering?
   - Eerst domeinscan versimpelen?
   - Eerst netwerktyperingen zichtbaar?

---

**Wacht op input van Laura** 🌈
