# 🌈 Team Feedback: RPA v4.3-simpel
**Datum:** 27 maart 2026  
**Versie:** positioneel-v4.3-simpel.html  
**Beoordeeld door:** Marie, Bram, Suus, Lisa, Karin, Jan, Peter

---

## 📊 Overzicht: De 20 schermen

1. **Organisatie** - Vanuit welke organisatie werk je?
2. **Intro** - Uitleg RPA niveau 2
3. **Start** - Netwerkgesprek intro + instellingen
4. **Hulpvraag** - "Hoe is het op dit moment?"
5. **Hulpvraag Focus** - "Waar wil je mee aan de slag?"
6. **Quickscan** - Snelle check levensgebieden
7. **Triage** - Prioritering
8. **Domeinen** - "Wie helpt er — en hoe?"
9. **Netwerk** - "Wat zien we samen?"
10. **Netwerkpositie** - Bepaal huidige positie (VERBORGEN)
11. **Beweging** - "Wat gaan we doen?"
12. **Reflectie** - "Even terugkijken"
13. **Team** - Multidisciplinair team besluit
14. **Interventies** - Concrete hulp
15. **Samenvatting** - "Wat spreken we af?"
16. **Advies** - AI-advies voor cliënt
17. **Advies Pro** - AI-advies voor professional
18. **Organisaties** - Organisaties in de omgeving
19. **Activiteiten** - Lokale activiteiten
20. **Summary** - Overzicht

---

## 🎯 Tier 1: Kernteam (raadplegen bij elke beslissing)

### 🌈 Marie (Praktische implementatie)

**✅ WAT WERKT GOED:**
1. **Duidelijke naamgeving schermen** - "Wie helpt er — en hoe?" is concreter dan "Domeinen"
2. **Visuele structuur** - Emojis bij elke stap helpen navigatie
3. **Progressie zichtbaar** - Voortgangsbalk geeft overzicht
4. **Auto-save** - Data gaat niet verloren

**🔄 WAT KAN BETER:**
1. **Te veel schermen (20!)** - Kan dit naar 12-15?
   - `screen-netwerkpositie` is VERBORGEN → waarom bestaat het dan?
   - `screen-summary` vs `screen-samenvatting` → dubbel?
   - `screen-hulpvraag` + `screen-hulpvraag-focus` → kunnen samenvoegen?
   
2. **Volgorde vraagt aandacht:**
   - Na "Beweging" komt "Reflectie" → logischer: reflectie VÓÓr beweging kiezen
   - "Team" scherm tussen "Reflectie" en "Interventies" → voelt abrupt
   - "Advies" komt NA samenvatting → zou eerder moeten (tijdens planning)

3. **Onduidelijke functie:**
   - `screen-quickscan` vs `screen-triage` → wat is het verschil?
   - `screen-organisaties` vs `screen-activiteiten` → beide "lokaal aanbod"?

**❌ WAT MOET WEG:**
- `screen-netwerkpositie` (is toch verborgen)
- Ofwel `screen-summary` ofwel `screen-samenvatting` (niet beide)

---

### 📊 Bram (Methodologische geldigheid)

**✅ WAT WERKT GOED:**
1. **Valide structuur** - Van probleemformulering → analyse → beweging → interventie
2. **Netwerkpositie bepalen** - Kernonderdeel van RPA, moet blijven
3. **Reflectie-moment** - Belangrijk voor bewustwording

**🔄 WAT KAN BETER:**
1. **Waarom is netwerkpositie verborgen?**
   - Dit is een KERN-element van RPA!
   - Als het te complex is voor cliënt → maak het visueel simpeler
   - Suggestie: **automatisch berekenen + visualiseren** (spider diagram)
   
2. **Quickscan vs Triage:**
   - Methodisch gezien: **quickscan = breed inventariseren**, **triage = prioriteren**
   - Maar waarom twee aparte stappen? Kan dit gecombineerd?
   - Voorstel: "Hulpvraag Focus" ↔ combineer met quickscan/triage → wordt **1 scherm**

3. **Team-besluit:**
   - Goed: multidisciplinair perspectief
   - Maar: hoort dit in een cliënt-professional gesprek?
   - Dit lijkt meer een **intern overleg** → apart instrument?

**❌ KRITIEK:**
- Als `screen-netwerkpositie` verborgen is, **verlies je de RPA-kern**
- Zonder expliciete positionering wordt dit een generiek hulpverleningsgesprek
- **Dit MOET zichtbaar blijven** (eventueel vereenvoudigd)

---

### 🏥 Suus (Trimbos, praktijktoepassing)

**✅ WAT WERKT GOED:**
1. **"Wie helpt er — en hoe?"** - Heel concrete vraag, begrijpelijk voor cliënt
2. **Reflectie-moment** - Geeft ruimte om even stil te staan
3. **Advies voor professional** - Goed dat dit apart is van cliëntadvies

**🔄 WAT KAN BETER:**
1. **Hulpvraag gefragmenteerd:**
   - `screen-hulpvraag` → "Hoe is het?"
   - `screen-hulpvraag-focus` → "Waar wil je mee aan de slag?"
   - Kan dit 1 scherm zijn? Eerst context, dan focus?

2. **Advies komt te laat:**
   - Na samenvatting krijg je AI-advies
   - Maar dan heb je al beslissingen genomen!
   - Beter: advies VÓÓRdat je interventies kiest

3. **"Team" scherm:**
   - In mijn ervaring (GGZ context): dit hoort NIET in cliëntgesprek
   - Dit is een **intern MDO-moment**
   - Voorstel: **optioneel** maken (alleen voor professionals, niet met cliënt)

**❌ WAT MOET WEG:**
- Team-scherm UIT het standaard cliëntgesprek (of: naar "expert mode")

---

## 🗣️ Tier 2: Sparring Partners (grote features & strategie)

### 💬 Lisa (Cliënt perspectief) — **NON-NEGOTIABLE**

**✅ WAT WERKT GOED:**
1. **"Wat zou je graag anders willen?"** - Eindelijk vraagt iemand dit!
2. **Emojis** - Maken het minder formeel, minder "intake"
3. **"Wat zien we samen?"** - Inclusieve taal, niet paternalistisch

**🔄 WAT KAN BETER:**
1. **20 schermen is overweldigend**
   - Als cliënt: ik zie die bolletjes bovenaan → "oh nee, nog 15 te gaan"
   - Kan dit korter? Max 10-12 stappen?
   
2. **"Triage" klinkt ziekenhuis-achtig**
   - Beter: "Wat speelt het meest?" of "Waar beginnen we?"
   
3. **AI-advies:**
   - Krijg ik robot-advies? Of iemand die naar me luistert?
   - Maak duidelijk: **dit zijn suggesties, jij beslist**

4. **"Multidisciplinair Team Besluit"**
   - Dit klinkt als: "wij beslissen over jouw leven"
   - ALS dit blijft → toon het ALLEEN aan professional, niet aan cliënt
   - OF: herformuleer → "Wie kan meedenken?" (uitnodigend, niet beslissend)

**❌ KRITISCH:**
- Als ik 20 stappen moet → **ik haak af na 5**
- Als een "team" over mij beslist zonder mij → **geen eigen regie**

---

### 👥 Karin (Sociaal werker, dagelijkse praktijk)

**✅ WAT WERKT GOED:**
1. **Visuele voortgang** - Ik zie waar we zijn
2. **Auto-save** - Als gesprek onderbroken wordt, blijft data staan
3. **Concrete vragen** - Niet abstract, maar "Wie helpt er?"

**🔄 WAT KAN BETER:**
1. **30+ minuten voor 20 schermen?**
   - In de praktijk: ik heb 45-60 minuten voor eerste gesprek
   - 20 schermen = te veel
   - Voorstel: **fast-track optie** voor herhaalgesprekken (sla intro/uitleg over)

2. **Quickscan + Triage = dubbel werk**
   - Beide gaan over levensgebieden screenen
   - Kan dit 1 efficiënt scherm zijn?

3. **Team-besluit:**
   - Dit doe ik NIET tijdens het gesprek met cliënt
   - Dit is een intern overleg NA het gesprek
   - Voorstel: **apart export** naar MDO-format (voor intern gebruik)

**💡 SUGGESTIE:**
- **Kern-route (10 stappen):** Voor standaard gesprek
- **Expert-route (20 stappen):** Voor complexe multi-problem cases

---

### 🏛️ Jan (Beleidsadviseur Wmo, systeem-perspectief)

**✅ WAT WERKT GOED:**
1. **Netwerkpositie** - Dit is het onderscheidende element!
2. **Export naar niveau 3** - Voor strategische analyse op gemeenteniveau
3. **Interventies lokaal filteren** - Postcode-gefilterd = relevant

**🔄 WAT KAN BETER:**
1. **Netwerkpositie is verborgen??**
   - Dit is juist wat RPA onderscheidt van reguliere assessments
   - Als we dit verbergen → **geen bewuste positioneringskeuze**
   - Zonder positie-inzicht → **geen preventie-argument voor gemeente**

2. **Data voor beleid:**
   - Ik wil weten: **hoeveel cliënten zitten in welke netwerkpositie?**
   - En: **welke bewegingen worden gemaakt?**
   - Dit geeft inzicht in **waar het systeem faalt**
   - Voorstel: **anonieme aggregatie** naar niveau 3 voor beleidsrapportage

**❌ KRITIEK:**
- Zonder zichtbare netwerkpositie → **geen systeemplafond-doorbraak**
- Dit wordt dan een regulier assessment, geen RPA

---

### 💼 Peter (Zorginkoop, kosten-perspectief)

**✅ WAT WERKT GOED:**
1. **Beweging zichtbaar maken** - Voor → Na
2. **Concrete interventies** - Meetbaar, niet vaag
3. **Preventie-focus** - Informeel netwerk activeren = kostenreductie

**🔄 WAT KAN BETER:**
1. **Ontbrekende kosten-impact:**
   - Ik zie niet: **wat kost huidige situatie vs. nieuwe situatie?**
   - Voor inkoop-argument: **toon financieel effect** van netwerkbeweging
   - Voorstel: in niveau 3 (strategisch) → kosten-baten analyse

2. **Advies-scherm:**
   - AI-advies is leuk, maar wat is de **evidence-base?**
   - Toon: "Deze interventie heeft X% succes bij vergelijkbare cases"

---

## 🎯 SAMENVATTING: Wat moet er gebeuren?

### 🔴 URGENT (Tier 1 kernteam):

1. **Netwerkpositie MOET zichtbaar** (Bram + Jan + Peter)
   - Niet verbergen → vereenvoudigen + visualiseren
   - Dit is de RPA-kern!

2. **Reduceer aantal schermen** (Marie + Lisa + Karin)
   - Doel: **max 12 schermen** voor standaard gesprek
   - Combineer:
     - Hulpvraag + Hulpvraag Focus → 1 scherm
     - Quickscan + Triage → 1 scherm
     - Summary + Samenvatting → 1 scherm
     - Organisaties + Activiteiten → 1 scherm ("Lokaal aanbod")

3. **Team-scherm herpositioneren** (Suus + Lisa + Karin)
   - NIET in standaard cliëntgesprek
   - Optie A: Alleen in "professional mode" (na gesprek)
   - Optie B: Separate MDO-export functie

### 🟡 BELANGRIJK (Tier 2):

4. **Advies VOOR interventie-keuze** (Suus)
   - Volgorde: Reflectie → Advies → Beweging → Interventies

5. **Fast-track optie** (Karin)
   - Voor herhaalgesprekken: sla intro over

6. **Kosten-impact zichtbaar** (Peter)
   - In niveau 3: financiële analyse van beweging

### 🟢 WENSELIJK:

7. **Evidence-based interventies** (Peter)
   - Toon succespercentages bij interventies

8. **Aggregatie voor beleid** (Jan)
   - Anonieme data-export voor gemeentelijke rapportage

---

## 🔄 Voorgestelde nieuwe flow (12 schermen)

1. **Organisatie** - Vanuit welke organisatie?
2. **Intro** - Wat gaan we doen? (optioneel overslaan bij herhaling)
3. **Start** - Netwerkgesprek + instellingen
4. **Hulpvraag** - Hoe is het? + Waar wil je mee aan de slag? (GECOMBINEERD)
5. **Focusgebieden** - Quickscan + Triage (GECOMBINEERD)
6. **Domeinen** - Wie helpt er — en hoe?
7. **Netwerkbeeld** - Wat zien we samen? (visualisatie + positie)
8. **Reflectie** - Even terugkijken
9. **Advies** - Persoonlijk advies (cliënt + professional)
10. **Beweging** - Wat gaan we doen?
11. **Lokaal aanbod** - Interventies + Organisaties + Activiteiten (GECOMBINEERD)
12. **Afspraken** - Wat spreken we af?

**Van 20 → 12 schermen** ✅

---

## 📊 Score per aspect

| Aspect | Score | Toelichting |
|--------|-------|-------------|
| **Methodische validiteit** | 7/10 | Goed, maar netwerkpositie moet zichtbaar |
| **Gebruiksvriendelijkheid** | 6/10 | Te veel schermen, maar goede UX |
| **Cliëntvriendelijkheid** | 7/10 | Goede taal, maar te lang |
| **Praktische haalbaarheid** | 6/10 | 20 schermen in 30 min = krap |
| **Beleidsrelevantie** | 8/10 | Goede export, maar data-aggregatie kan beter |
| **Kosten-effectiviteit** | 7/10 | Preventie-focus goed, financiële impact ontbreekt |

**Gemiddeld:** 6.8/10

---

## ✅ Volgende stappen

**Marie** (implementatie):
- [ ] Combineer schermen: van 20 → 12
- [ ] Netwerkpositie zichtbaar maken (vereenvoudigd)
- [ ] Team-scherm naar "expert mode"
- [ ] Advies verplaatsen (voor interventie-keuze)

**Bram** (methodologie):
- [ ] Review netwerkpositie-berekening
- [ ] Valideer gecombineerde schermen (behoud RPA-kern)

**Laura** (eigenaar):
- [ ] Besluit: accepteren we 12-schermen voorstel?
- [ ] Testen met Karin (praktijk) + Lisa (cliënt)

---

**Datum volgende review:** _______  
**Status:** Concept ter besluitvorming

---

🌈 **Marie's persoonlijke opmerking:**  
"Dit instrument heeft potentie, maar we moeten kiezen: willen we een **volledig** instrument (20 stappen) of een **praktisch** instrument (12 stappen)? Ik stem voor praktisch — we kunnen altijd expert-opties toevoegen voor complexe cases."
