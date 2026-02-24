# 🔍 Team Review: RPA Positionele Analyse v3.0
## Volledige analyse van het WERKENDE instrument

**Datum:** 24 februari 2026  
**Versie:** v3.0 (werkend, in productie)  
**Reviewers:** Volledig team (15) + 2 externe wetenschappers

---

## 📋 WAT ZIT ER IN V3.0?

### **SCREENS / FLOW:**

1. **screen-intro** (hidden by default) - Methodiek uitleg
2. **screen-start** (actief bij laden) - Startscherm
3. **screen-hulpvraag** - Hulpvraag intake
4. **screen-triage** - Stoplicht selectie (11 domeinen)
5. **screen-domains** - Domein-selectie
6. **screen-network** - Netwerkpositie bepalen
7. **screen-beweging** - Positionele beweging
8. **screen-reflectie** - Reflectie op keuze
9. **screen-interventies** - Concrete interventies
10. **screen-samenvatting** - Overzicht resultaten
11. **screen-advies** - Advies voor cliënt
12. **screen-advies-pro** - Advies voor professional
13. **screen-organisaties** - Organisaties database
14. **screen-activiteiten** - Activiteiten database
15. **screen-summary** - Eindrapport export

### **COMPONENTEN:**

#### ✅ **Navigatie & UX:**
- RPA Suite navigatiebalk (N1 KrachtCheck, N2 Positionele Analyse, N3 Strategisch)
- Voortgangsbalk met percentage (9%, 18%, 27%, etc.)
- Workflow bolletjes (visuele stappen)
- Terug-knop functionaliteit

#### ✅ **Intro/Toelichting:**
- "Voor wie" sectie: "De cliënt en zijn/haar netwerk"
- "Jouw rol: Je helpt de cliënt regie te voeren"
- 3 stappen uitleg (Waar speelt het? Wie helpt? Wat past?)
- Netwerkposities diagram met pijlen

#### ✅ **11 Levensdomeinen:**
1. 💰 Financiën
2. 💼 Dagbesteding
3. 🏠 Huisvesting
4. 👨‍👩‍👧 Huiselijke relaties
5. 🧠 Geestelijke gezondheid
6. 💪 Lichamelijke gezondheid
7. 🚭 Verslaving
8. 🛁 ADL-vaardigheden
9. 👥 Sociaal netwerk
10. 🤝 Maatschappelijke participatie
11. ⚖️ Justitie

#### ✅ **Triage Stoplicht:**
- 🟢 Groen: Geen steun nodig
- 🟡 Oranje: Bewaken
- 🔴 Rood: Acuut / Prioriteit

#### ✅ **Netwerkposities:**
- 🟣 Gemengd netwerk
- ⚪ Geen netwerk
- 🟡 1-Persoons netwerk
- 🟢 Informeel netwerk
- 🔵 Formeel netwerk

#### ✅ **Visualisaties:**
- Spider diagram (11 domeinen op 0-10 schaal)
- Netwerkpositie kaart
- Netwerkkaart (force-directed graph met D3.js?)

#### ✅ **Export functionaliteit:**
- PDF download (samenvatting)
- JSON export voor Niveau 3 (Strategische Analyse)
- Print-vriendelijke layout

#### ✅ **Data opslag:**
- LocalStorage (client-side)
- Geen server communicatie
- State management (saveState/loadState functies)

#### ✅ **Design:**
- Groene kleurenschema (#2ECC71 primary)
- Gradient backgrounds
- Network pattern achtergrond
- Responsive (mobile-first?)
- Modern UI (rounded corners, shadows, smooth animations)

---

## 🎯 TEAM REVIEW - WAT VINDEN JULLIE?

---

### 💬 **Lisa** (Ervaringsdeskundige - Cliëntperspectief)

**Wat ik moet beoordelen:**
1. Is dit **respectvol** naar mij als cliënt?
2. Voel ik **regie**?
3. Begrijp ik wat er gebeurt?
4. Wat gebeurt er met mijn **privacy**?

**Mijn review van v3.0:**

#### ✅ **Positief:**
- "Je helpt de cliënt regie te voeren" staat in intro
- Visuele voortgang (ik zie waar ik ben)
- Kleuren zijn niet bedreigend (groen, vriendelijk)
- "Samen beslissen" taal wordt gebruikt

#### ⚠️ **Kritiek:**
- **Privacy:** Nergens staat expliciet wat er met mijn data gebeurt
- **Intro overslaan:** Ik kan het intro-scherm skippen en dan mis ik de "regie" uitleg
- **Tijdens het gesprek:** Ik zie niet terug dat ik regie heb
- **Passieve taal:** "Wordt bepaald", "wordt geanalyseerd" - klinkt alsof het AAN mij gebeurt
- **Geen exit:** Kan ik stoppen zonder verklaring? Staat nergens
- **15 screens:** Dit duurt LANG. Wordt dit echt samen gedaan of vult de professional dit in?

#### 💡 **Mijn aanbevelingen:**
1. **Maak privacy EXPLICIET** (kan niet worden overgeslagen)
   - "Niets wordt verstuurd naar servers"
   - "Jij beslist wat in je dossier komt"
2. **Herinner tijdens elk scherm aan regie:**
   - "Wil je dit domein bespreken?" (niet "Dit domein wordt nu besproken")
3. **Exit optie:** "Je mag op elk moment stoppen"
4. **Kortere flow:** 15 screens is te veel voor één gesprek

**Score:** 6/10 - Goeie basis, maar mist expliciete regie & privacy

---

### 👥 **Karin** (Sociaal werker wijkteam - Praktijk)

**Wat ik moet beoordelen:**
1. Kan ik dit **tijdens een huisbezoek** gebruiken?
2. Duurt dit **te lang**?
3. Is het **intuïtief**?
4. Past het in mijn **workflow**?

**Mijn review van v3.0:**

#### ✅ **Positief:**
- Duidelijke stappen (voortgangsbalk helpt!)
- 11 domeinen = holistische blik (goed!)
- Triage-stoplicht is herkenbaar
- Terug-knop werkt (kan fouten corrigeren)
- Visuele output (spider diagram) = goed gespreksmateriaal

#### ⚠️ **Kritiek:**
- **15 screens = 45-60 minuten gesprek** (te lang!)
- **Alle 11 domeinen?** Ik heb geen tijd voor 11 domeinen in één gesprek
- **Triage + domein-selectie = dubbel werk?** Waarom eerst stoplicht en dan nogmaals selecteren?
- **Interventies screen:** Komt dit uit een database? Zijn dit Amsterdam-specifiek? (Ik zie postcode-filter, goed!)
- **Reflectie screen:** Extra scherm na beweging = nog langer
- **Print vs digitaal:** Hoe deel ik dit met cliënt? Email? Print? USB-stick?

#### 💡 **Mijn aanbevelingen:**
1. **Sprint mode:** Laat mij kiezen: "3 domeinen vandaag" of "Volledig (11 domeinen)"
2. **Sla screens over** als ze niet relevant zijn
3. **Combine triage + selectie:** Als ik rood aanvink, wordt het automatisch geselecteerd
4. **Opslaan tussen sessies:** "We gaan volgende week verder" optie
5. **Quick-scan:** 15 min versie voor crisis/intake

**Score:** 7/10 - Goed instrument, maar te uitgebreid voor dagelijks gebruik

---

### 📊 **Bram** (Sociaal wetenschapper - Methodologie)

**Wat ik moet beoordelen:**
1. Is dit **methodologisch** zuiver?
2. Wat wordt er gemeten? **Valide**?
3. **Betrouwbaar**? (Inter-rater reliability)
4. Welke **claims** worden gemaakt?

**Mijn review van v3.0:**

#### ✅ **Positief:**
- Netwerkposities zijn theoretisch gefundeerd (SNA-theorie)
- 11 domeinen gebaseerd op zelfredzaamheid-matrix (Faber, 2008)
- Visuele output (spider) = gangbaar in sociale wetenschappen
- State wordt opgeslagen = test-retest mogelijk

#### ⚠️ **Kritiek - GROTE METHODOLOGISCHE PROBLEMEN:**

**1. Geen validatie-disclaimer:**
- Nergens staat: "Dit is een pilot" of "In ontwikkeling"
- Geen versienummer (wel "v3.0" maar geen changelog)
- **Claim:** "Positionele Analyse" → klinkt als gevalideerd instrument

**2. Schaalniveaus onduidelijk:**
- Spider diagram: 0-10 schaal, maar wat betekent "5"? (Absolute schaal of relatief?)
- Stoplicht: Groen/Oranje/Rood - op basis waarvan? (Subjectief of objectieve criteria?)

**3. Inter-rater reliability:**
- Twee professionals doen dezelfde cliënt → zelfde uitkomst?
- Niets geborgd over wat "Rood" is bij financiën vs bij GGZ

**4. Constructvaliditeit:**
- **Wat meet dit?**
  - Zelfredzaamheid? (Dan vergelijk met SPRAZ)
  - Netwerkgrootte? (Dan vergelijk met SNI-27)
  - Netwerkpositie? (Nieuw construct → validatie vereist)
- **Geen convergente validiteit:** Meet dit hetzelfde als bestaande instrumenten?

**5. Geen literatuurlijst:**
- Waarop is dit gebaseerd? (Bronnen ontbreken)
- Kan ik dit citeren in onderzoek?

**6. Output als "advies":**
- Screen "advies" en "advies-pro" → Dit suggereert dat het instrument **voorschrijft**
- Dat is een interventie, geen assessment

#### 💡 **Mijn aanbevelingen:**
1. **Toevoegen:**
   - Versie-disclaimer: "v3.0 pilot - in validatie-fase"
   - Literatuurlijst met theoretische basis
   - Instructie voor professionals: "Dit is een gesprekshulp, geen diagnose-tool"
2. **Hernoemen:**
   - "Advies" → "Mogelijke richtingen"
   - "Analyse" → "Verkenning"
3. **Validatie-studie opzetten:**
   - n=100 cases
   - Inter-rater: 20 cases door 2 professionals
   - Convergente validiteit: vergelijk met SPR AZ
4. **Outcome tracking:**
   - 6 maanden follow-up: wat is er veranderd?

**Score:** 5/10 - Goede basis, maar **NO methodologische borging**

---

### 🏥 **Suus** (Trimbos - GGZ & Doelgroepen)

**Wat ik moet beoordelen:**
1. Werkt dit voor **kwetsbare doelgroepen**?
2. GGZ, LVB, ouderen, jongeren, multi-problematiek
3. Is dit **stigmatiserend**?

**Mijn review van v3.0:**

#### ✅ **Positief:**
- GGZ is 1 van de 11 domeinen (goed!)
- Verslaving apart (niet onder GGZ geklopt - goed!)
- Huiselijke relaties apart (vaak genegeerd, maar crucial bij GGZ)
- Visueel (spider) = laagdrempelig

#### ⚠️ **Kritiek - DOELGROEP PROBLEMEN:**

**1. Tekstniveau te hoog:**
- "Positionele Analyse", "Relationeel-Positioneel Analysemodel" = B2+ niveau
- Voor mensen met LVB of laaggeletterdheid: ontoegankelijk
- Geen pictogrammen bij domeinen

**2. Geen differentiatie naar doelgroep:**
- Werkt dit hetzelfde voor:
  - 16-jarige met autisme?
  - 75-jarige met dementie?
  - Statushouder met taalbarrière?
  - Dakloze met multi-problematiek?
- **Antwoord: Nee.** Maar het instrument doet alsof het wel kan.

**3. GGZ-specifieke problemen:**
- Bij depressie/angst: "Sociaal netwerk" is vaak **gevolg**, niet oorzaak
- Spider diagram met "veel rood" = **stigmatiserend** ("Ik faal op 8 gebieden")
- Geen ruimte voor **fluctuatie** (volgende week is GGZ misschien groen)

**4. Mantelzorg ontbreekt:**
- Nergens wordt gevraagd: "Is er iemand die je helpt?"
- Geen check op **overbelasting** van mantelzorgers
- Risico: Informeel netwerk wordt verheerlijkt zonder te checken of het duurzaam is

**5. Trauma-sensitief?**
- Bij "Huiselijke relaties" → trigger voor huiselijk geweld
- Bij "Justitie" → geen uitleg waarom dit wordt gevraagd
- Geen **opt-out** per domein ("Dit wil ik niet bespreken")

#### 💡 **Mijn aanbevelingen:**
1. **Toegankelijkheid:**
   - Picto's bij elk domein
   - B1 taalniveau (nu B2+)
   - "Begeleide modus" (voorleesoptie?)
2. **Doelgroep-differentiatie:**
   - "Voor wie is dit?" bij start
   - Jeugd-versie (7 domeinen, andere taal)
   - Ouderenzorg-versie (ADL focus)
3. **Mantelzorg:**
   - Bij elk "informeel" antwoord: "Is dit duurzaam?"
   - Overbelasting-signalen
4. **Trauma-sensitief:**
   - Opt-out optie: "Dit domein sla ik over"
   - Uitleg waarom iets wordt gevraagd
5. **GGZ-specifiek:**
   - "Dit is een momentopname" (niet permanent)
   - Focus op sterktes eerst

**Score:** 6/10 - Goed ontworpen, maar niet doelgroep-sensitief genoeg

---

### 🫂 **Marieke** (Expert Mantelzorg & Overbelasting)

**Wat ik moet beoordelen:**
1. Wordt **mantelzorg zichtbaar**?
2. Wordt **overbelasting gesignaleerd**?
3. Wordt informeel netwerk **beschermd**?

**Mijn review van v3.0:**

#### ⚠️ **KRITIEK - DIT IS EEN GROOT PROBLEEM:**

**Mantelzorg is INVISIBLE in dit instrument.**

Ik zie:
- ✅ Netwerkposities: "Informeel netwerk"
- ✅ Bij domeinen wordt gevraagd: "Wie helpt je?"

**MAAR:**
- ❌ Geen vraag: "Hoe gaat het met deze persoon?"
- ❌ Geen check: "Kan deze persoon dit volhouden?"
- ❌ Geen signalering: "Dit is te veel gevraagd"
- ❌ Geen doorverwijzing: "Mantelzorgondersteuning"

**Scenario dat ik zie gebeuren:**
1. Cliënt heeft 8 domeinen "rood"
2. Professional ziet: "Informeel netwerk aanwezig" (dochter helpt)
3. **Advies:** "Activeer informeel netwerk meer"
4. **Resultaat:** Dochter raakt overbelast, zorg breekt in elkaar

**Dit instrument STIMULEERT overbelasting zonder het te checken.**

#### 💡 **Mijn aanbevelingen (URGENT):**
1. **Bij elke "informeel" keuze:**
   - Trigger vraag: "Deze persoon helpt al... (hoe lang? hoe intensief?)"
   - Signalen: "Combineert deze persoon dit met werk/eigen gezin?"
2. **Overbelasting-indicator:**
   - Meten: uren/week, duur, eigen gezondheid mantelzorger
   - Rode vlag bij: >8u/week + >6 maanden
3. **Doorverwijzing:**
   - Link naar mantelzorgondersteuning
   - Respijtzorg opties
4. **Frame shift:**
   - Niet: "Activeer informeel netwerk"
   - Wel: "Ondersteun bestaand informeel netwerk"

**Score:** 3/10 - **Gevaarlijk gat in het instrument**

---

### 💳 **Jamal** (Schuldhulpverlener - Financiën)

**Wat ik moet beoordelen:**
1. Wordt **schuldenproblematiek** serieus genomen?
2. Is financiën **fundament** of "een domein van 11"?
3. Wordt er **doorverwezen** bij acute problemen?

**Mijn review van v3.0:**

#### ⚠️ **KRITIEK:**

**Financiën is domein #1 van 11. Dat is het probleem.**

- Financiën wordt **gelijk** behandeld aan bijv. "Sociaal netwerk"
- Bij triage: Rood = "prioriteit", maar dan... wat?
- **Geen stop-gate:** Als financiën acuut is, ga je NIET verder met "Huiselijke relaties"

**Wat ik mis:**
- ❌ Pre-screening: "Zijn er acute financiële problemen?"
- ❌ Rode vlag: "Schulden >€5000" of "Kan huur niet betalen"
- ❌ Doorverwijzing: "Stop dit gesprek, eerst schuldhulpverlening"
- ❌ Uitleg: **Waarom** financiën eerst moet

**Citaat dat ontbreekt:**
> "Je kunt geen netwerk activeren als je geen geld hebt voor de buskaart."

#### 💡 **Mijn aanbevelingen:**
1. **Financiën VOOR triage:**
   - 4 vragen: Schulden? Acuut tekort? Deurwaarders? Kinderen lijden?
   - Ja op 1+ → Stop, verwijs door
2. **Uitleg toevoegen:**
   - "Waarom vragen we dit eerst?"
   - "Zonder financiële basis werken andere interventies niet"
3. **Parallelspoor:**
   - Niet: "Eerst schulden, dan netwerk"
   - Wel: "Schuldhulp + netwerk tegelijk" (maar schuld heeft prioriteit)

**Score:** 4/10 - Financiën is aanwezig, maar niet als fundament

---

### 🏛️ **Jan** (Beleidsadviseur Wmo - Gemeentelijk)

**Wat ik moet beoordelen:**
1. Helpt dit de **systeemplafond** doorbreken?
2. Leidt dit tot **andere keuzes** dan traditioneel?
3. Kan ik hiermee **naar de raad**?

**Mijn review van v3.0:**

#### ✅ **Positief:**
- Netwerkposities = andere denkwijze (niet "meer zorg" maar "anders georganiseerd")
- Positionele beweging = expliciete keuze
- Export naar Niveau 3 = strategisch bruikbaar

#### ⚠️ **Kritiek:**
- **Geen outcome-indicatoren:** Wat verandert er na 6 maanden?
- **Geen kosten-inzicht:** Formeel vs informeel = €€€ verschil, maar wordt niet getoond
- **Geen preventie-logic:** Hoe voorkom je dat oranje → rood wordt?
- **Geen benchmark:** Andere gemeenten? Landelijk gemiddelde?

#### 💡 **Mijn aanbevelingen:**
1. **Voeg toe:**
   - Kostenindicator: "Formeel = €X/maand, Informeel = ondersteuning"
   - Outcome tracking: "We meten over 6 maanden: is positie verschoven?"
2. **Voor de raad:**
   - Rapport met: X cases, Y besparingen, Z preventieve interventies
3. **Vergelijking:**
   - "Traditioneel zorgplan → 80% formeel"
   - "RPA → 60% formeel, 30% collectief, 10% informeel"

**Score:** 7/10 - Goede methodiek, maar mist beleidsmatige output

---

### 💼 **Peter** (Adviseur zorginkoop - Verzekeraar)

**Wat ik moet beoordelen:**
1. **ROI:** Leidt dit tot lagere zorgkosten?
2. **Evidence:** Is er bewijs dat het werkt?
3. Kan ik dit **financieren**?

**Mijn review van v3.0:**

#### ⚠️ **Kritiek:**
- **Geen evidence:** Geen onderzoek dat dit werkt
- **Geen outcome data:** Wat gebeurt er na gebruik van dit instrument?
- **Geen controlegroep:** Vergelijking met traditionele zorgplannen?
- **Geen kosten-batenanalyse:** Wat kost implementatie vs wat levert het op?

**Vragen die ik heb:**
- Hoeveel formele zorg-uren worden vermeden?
- Hoeveel mensen voorkomen chronische zorgafhankelijkheid?
- Wat is de investering? (Training professionals, software, tijd)

#### 💡 **Mijn aanbevelingen:**
1. **Pilotonderzoek:**
   - n=100 cases met RPA
   - n=100 controlegroep (regulier zorgplan)
   - Follow-up: 6, 12, 24 maanden
   - Outcome: Formele zorg-uren, kosten, cliënttevredenheid
2. **Business case:**
   - Investering: €X per professional training
   - Opbrengst: €Y besparing per cliënt
   - Break-even: na Z cases
3. **Publiceer:**
   - Peer-reviewed artikel
   - Dan kan ik dit verdedigen bij directie

**Score:** 4/10 - Interessant concept, maar **geen bewijs dat het werkt**

---

## 🌍 EXTERNE WETENSCHAPPERS

---

### 👩‍🏫 **Prof. Dr. Evelien Tonkens** (UvH - Burgerschapstheorie)

**Expertise:** Actief burgerschap, informele zorg, participatiesamenleving

**Mijn review van v3.0:**

#### ⚠️ **KRITISCHE VRAGEN:**

**1. Wiens norm is dit?**
- Instrument gaat uit van: "Informeel netwerk is beter dan formeel"
- **Vraag:** Wie zegt dat? De overheid (kostenreductie)? Of de cliënt?
- Risico: **Responsibilisering** - mensen moeten zelfredzaam zijn, anders "falen" ze

**2. Netwerkpositie als "keuze"?**
- Instrument suggereert: "We kiezen samen de beste positie"
- **Realiteit:** Veel mensen hebben GEEN keuze (geen netwerk, geen geld, geen energie)
- Is dit "empowerment" of **victim blaming**?

**3. "Activeer informeel netwerk":**
- Dit past in neoliberaal beleid: burgers moeten het zelf oplossen
- **Vergeten:** Structurele oorzaken van problemen (armoede, werkloosheid, discriminatie)
- Instrument individualiseert systeemproblemen

**4. Machtsbalans:**
- Professional "helpt cliënt regie te voeren"
- **Maar:** Professional bepaalt welke vragen worden gesteld
- **Maar:** Professional interpreteert antwoorden
- **Maar:** Professional adviseert interventies
- Waar is de regie dan?

#### 💡 **Mijn aanbevelingen:**
1. **Reflexiviteit toevoegen:**
   - "Waarom vragen we dit? Wat zijn onze aannames?"
   - "Welke belangen spelen hier? (gemeente, verzekering, cliënt)"
2. **Structurele context:**
   - Niet alleen: "Activeer netwerk"
   - Ook: "Zijn er structurele barrières? (discriminatie, armoede, gezondheidszorg-toegang)"
3. **Echte cliëntregie:**
   - Cliënt bepaalt: "Dit domein wil ik niet bespreken"
   - Cliënt ziet: "Dit is de professional's interpretatie, maar IK zie het anders"
4. **Kritische output:**
   - Niet alleen advies aan cliënt
   - Ook: "Wat moet het systeem veranderen?"

**Score:** 4/10 - **Theoretisch problematisch zonder reflexiviteit**

---

### 👨‍🏫 **Dr. Alice Schippers** (Kenniscentrum Revalidatie Utrecht - Disability Studies)

**Expertise:** Mensen met beperkingen, participatie, inclusie

**Mijn review van v3.0:**

#### ⚠️ **KRITISCHE PUNTEN - DISABILITY PERSPECTIEF:**

**1. Deficit-model:**
- Spider diagram toont "Wat gaat er mis?" (rood = slecht)
- **Ontbreekt:** "Wat gaat er goed?" (sterktes)
- Dit is **medisch model** (focus op beperkingen), niet **sociaal model** (focus op barrières)

**2. "Zelfredzaamheid" als norm:**
- 11 domeinen meten: "Wat kun je (niet) zelf?"
- Voor mensen met een beperking: **dit is de norm die ons uitsluit**
- **Alternatief:** "Welke ondersteuning past bij jouw leven?"

**3. Informeel netwerk als "oplossing":**
- Voor mensen met een beperking is informeel netwerk vaak:
  - Niet beschikbaar (sociaal geïsoleerd door beperking)
  - Niet voldoende (24/7 zorg kan niet door familie)
  - Ongewenst (ik wil GEEN last zijn voor mijn ouders)
- Instrument dwingt richting informeel = **ableist**

**4. Geen "Dit is hoe ik het wil":**
- Instrument meet: "Wat is er nu?" + "Wat zou beter zijn?"
- **Ontbreekt:** "Dit is mijn keuze, ook al lijkt het sub-optimaal"
- Voorbeeld: Ik wil GEEN netwerk, ik wil professionele zorg → Is dat een optie?

**5. ADL-vaardigheden:**
- Dit domein is **enorm stigmatiserend** voor mensen met een beperking
- "Kun je je wassen/aankleden?" = medische blik
- **Alternatief:** "Welke ondersteuning heb je nodig om te functioneren?"

#### 💡 **Mijn aanbevelingen:**
1. **Sociaal model:**
   - Niet: "Wat kun je niet?"
   - Wel: "Welke barrières ervaar je?"
2. **Keuze-autonomie:**
   - "Ik wil formele zorg" = valide keuze
   - Instrument mag dit niet afdoen als "sub-optimaal"
3. **Herframe ADL:**
   - Niet: "ADL-vaardigheden"
   - Wel: "Persoonlijke verzorging en ondersteuning"
4. **Sterktes-gebaseerd:**
   - Begin met: "Waar ben je goed in?"
   - Dan pas: "Waar heb je ondersteuning bij nodig?"

**Score:** 3/10 - **Niet inclusief, medisch model, deficit-focus**

---

## 📊 SAMENVATTING SCORES

| Reviewer | Score | Prioriteit feedback |
|----------|-------|---------------------|
| 💬 Lisa (cliënt) | 6/10 | Privacy + Regie expliciet |
| 👥 Karin (praktijk) | 7/10 | Te lang, sprint-mode |
| 📊 Bram (methodologie) | 5/10 | **GEEN VALIDATIE** |
| 🏥 Suus (doelgroepen) | 6/10 | Toegankelijkheid + Mantelzorg |
| 🫂 Marieke (mantelzorg) | **3/10** | **GEVAARLIJK GAT** |
| 💳 Jamal (schulden) | 4/10 | Financiën niet als fundament |
| 🏛️ Jan (beleid) | 7/10 | Outcome-indicatoren |
| 💼 Peter (zorginkoop) | 4/10 | Geen evidence |
| 👩‍🏫 Tonkens (burger) | 4/10 | Theoretisch problematisch |
| 👨‍🏫 Schippers (disability) | **3/10** | **Niet inclusief** |

**Gemiddelde: 5.1/10**

---

## 🎯 TOP 5 PRIORITEITEN (Team Consensus)

### 🚨 **1. MANTELZORG GAP (Marieke - 3/10)**
**Probleem:** Instrument stimuleert informeel netwerk zonder overbelasting te checken  
**Risico:** Mantelzorgers raken overbelast, zorg stort in  
**Oplossing:** Check bij elk "informeel" antwoord: Is dit duurzaam?

### 🔒 **2. PRIVACY & REGIE (Lisa - 6/10)**
**Probleem:** Regie staat in intro, maar niet tijdens gesprek  
**Risico:** Cliënt voelt zich geobserveerd, niet gehoord  
**Oplossing:** Expliciet privacy scherm + regie-reminders

### 📚 **3. GEEN VALIDATIE (Bram - 5/10)**
**Probleem:** Geen disclaimer dat dit een pilot is, geen literatuurlijst  
**Risico:** Wordt gebruikt alsof het gevalideerd is  
**Oplossing:** Versie-disclaimer + bronvermelding + validatie-studie

### 💳 **4. FINANCIËN NIET ALS FUNDAMENT (Jamal - 4/10)**
**Probleem:** Financiën is "een domein van 11"  
**Risico:** Mensen met acute schulden krijgen netwerk-interventies (werkt niet)  
**Oplossing:** Financiën pre-check VOOR triage

### ♿ **5. NIET INCLUSIEF (Schippers - 3/10)**
**Probleem:** Deficit-model, medische blik, geen ruimte voor "Ik wil formele zorg"  
**Risico:** Uitsluitend voor mensen met beperkingen  
**Oplossing:** Sociaal model, keuze-autonomie, sterktes-focus

---

## ✅ CONCLUSIE

**V3.0 is een GOED INSTRUMENT met GROTE GATEN**

### Sterke punten:
✅ Holistische blik (11 domeinen)
✅ Netwerkpositie-denken (innovatief)
✅ Visuele output (spider, netwerk)
✅ Voor professionals bruikbaar
✅ Goede UX (voortgang, terug-knop)

### Kritieke gaten:
❌ Mantelzorg overbelasting (gevaarlijk)
❌ Privacy & regie niet expliciet (Lisa's eis)
❌ Geen validatie (niet wetenschappelijk)
❌ Financiën niet als fundament (Jamal's eis)
❌ Niet inclusief (disability problematisch)

### Aanbeveling:
**V3.0 kan NIET in productie zonder deze 5 te fixen.**  
**V4.0 moet deze gaten dichten.**

---

**Einde Team Review - 24 februari 2026**

