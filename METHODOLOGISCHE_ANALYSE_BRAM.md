# 📊 RPA Methodologische Doorlichting
**Door: Prof. Bram (Sociaal Wetenschapper & Methodoloog)**  
**Datum: 19 maart 2026**  
**Versie: 1.0**

---

## 🎯 Doel van deze analyse

Als methodoloog kijk ik naar de **wetenschappelijke validiteit**, **betrouwbaarheid** en **theoretische fundering** van de RPA-suite. Dit is geen gebruikerstest, maar een academische beoordeling van:

1. **Constructvaliditeit** - Meet het instrument wat het beoogt te meten?
2. **Interne consistentie** - Zijn de onderdelen logisch met elkaar verbonden?
3. **Theoretische coherentie** - Klopt de methodologie met de onderliggende theorie?
4. **Ethische robuustheid** - Respecteert het autonomie en privacy?
5. **Generaliseerbaarheid** - Is het overdraagbaar naar andere contexten?

---

## 📐 Theoretisch Kader: RPA-model

Het **Relationeel-Positioneel Analysemodel** is gebaseerd op:

### Kerntheorieën:
- **Sociaal kapitaal** (Putnam, Bourdieu): Netwerk als resource
- **Empowerment-benadering** (Rappaport): Regie bij cliënt
- **Ecologische systeemtheorie** (Bronfenbrenner): Lagen rondom individu
- **Zelfredzaamheidsdomeinen** (SIJN-methodologie): 11 levensgebieden

### Centrale propositie:
> **"Ondersteuning moet niet méér zijn, maar anders gepositioneerd"**

Dit betekent:
- Verschuiving van formeel → collectief/informeel waar mogelijk
- Bewuste keuze voor netwerkpositie (geen automatisme)
- Preventie van systeemplafond door regiediffusie te doorbreken

**Methodologische vraag:** Operationaliseert de RPA-suite dit principe valide?

---

## 🔍 Niveau 1: Netwerkanalyse (BalansCheck)

### 📋 Beschrijving
- **Doel:** Self-screening voor algemeen publiek
- **Doelgroep:** Iedereen (cliënt, familie, burger)
- **Domeinen:** 8 levensgebieden (financiën, GGZ, wonen, huiselijk, sociaal, dagbesteding, lichamelijk, mantelzorg)
- **Schaal:** 3-punts Likert (Gaat goed / Vraagt aandacht / Hulp is welkom)
- **Output:** Donut chart + tips per domein + wijkdata opt-in

---

### ✅ Sterke punten (methodologisch)

#### 1. **Eenvoudige operationalisatie**
- 3-punts schaal is **valide voor self-assessment** (evidence: meer opties leiden tot confusion bij laaggeletterden)
- Domeinen dekken **brede zelfredzaamheid** af (gebaseerd op SIJN-methodologie)
- **Gezichtsvaliditeit** hoog: vragen zijn begrijpelijk zonder uitleg

#### 2. **Toegankelijkheid**
- Geen professionele begeleiding nodig
- 2 minuten afnametijd (laagdrempelig)
- **Privacy-first design:** Lokale opslag (localStorage), geen server-side data
- **Ethisch sterk:** Geen verplichte identificatie

#### 3. **Visuele feedback (donut chart)**
- Chart.js-implementatie is **evidence-based**: mensen begrijpen donut charts beter dan tabellen (Cleveland & McGill, 1984)
- Kleuren zijn **universeel herkenbaar** (groen=goed, geel=aandacht, blauw=hulp)

#### 4. **Contextgevoelige tips**
- Leeftijdsspecifieke tips (jongere/volwassene/ouder) tonen **differentiatie**
- Tips zijn **handelingsgericht** (niet alleen "zoek hulp" maar concrete stappen)

#### 5. **Wijkdata opt-in**
- **Gelaagde toestemming** (postcode / postcode+vragen / niet meedoen)
- **Anonimiteit gegarandeerd:** 4-cijferige postcode is niet herleidbaar naar individu
- Vragenlijst bevat **macro-level indicatoren** (buurtverbinding, drempels hulpzoeken)

---

### ⚠️ Methodologische zorgen

#### 1. **Beperkte discriminerend vermogen**
- 3-punts schaal kan **ceiling/floor effects** veroorzaken
- **Geen gradaties binnen "Hulp is welkom":** verschil tussen "ik wil erover praten" en "ik heb acute crisis" wordt niet gevangen
- **Oplossing:** Overweeg 5-punts schaal met duidelijke ankers (bijv. "Gaat goed / Klein beetje aandacht / Stevige aandacht / Hulp nodig / Acute hulp")

#### 2. **Ontbrekende validatie**
- Geen **psychometrische toetsing** (Cronbach's alpha, test-retest reliability)
- Geen **criteriumvaliditeit:** wordt niet vergeleken met gevalideerde instrumenten (bijv. SRQ-M)
- **Oplossing:** Pilot met 50+ respondenten + hertest na 2 weken + vergelijk met SRQ-M of SMO

#### 3. **Social desirability bias**
- Zelfevaluatie kan **positief vertekend** zijn (mensen zeggen vaker "Gaat goed" dan objectief klopt)
- **Geen controlevragen** om inconsistentie te detecteren
- **Oplossing:** Voeg controlevraag toe ("Hoe vaak heb je afgelopen maand hulp gezocht?")

#### 4. **Domeinafbakening discutabel**
- **Mantelzorg** staat los, maar overlapt met "Huiselijke relaties" en "Sociaal netwerk"
- **Dagbesteding** combineert werk, opleiding, vrijwilligerswerk → kan verwarrend zijn
- **Justitie** ontbreekt (wel in SIJN-11, niet in BalansCheck)
- **Oplossing:** Expliciet motiveren waarom justitie niet meegenomen is (stigma? lage prevalentie?)

#### 5. **Leeftijdscategorieën te grof**
- "Jongeren (12-25)" is **breed**: 12-jarige heeft andere behoeften dan 25-jarige
- "Ouderen (65+)" is **te generiek**: 65-jarige ≠ 85-jarige (young-old vs old-old)
- **Oplossing:** Verfijn naar 12-18 / 18-25 / 25-50 / 50-65 / 65-80 / 80+

#### 6. **Follow-up mechanisme ongevalideerd**
- 6-weken follow-up is **arbitrair** (geen evidence-base voor deze termijn)
- Geen **gestandaardiseerde change-score** (bijv. Reliable Change Index)
- **Oplossing:** Gebruik RCI om te bepalen of verandering significant is (niet alleen "groene pijl")

---

### 🎯 Constructvaliditeit

**Vraag:** Meet BalansCheck wat het beoogt te meten (zelfredzaamheid)?

**Antwoord:** **Gedeeltelijk.** 

- ✅ **Domeinen** zijn in lijn met SIJN-11 (hoge inhoudsvaliditeit)
- ✅ **Schaal** is begrijpelijk (gezichtsvaliditeit)
- ❌ **Geen empirische toetsing** van factorstructuur (is "financiën" écht los van "dagbesteding"?)
- ❌ **Geen convergente validiteit** (correlatie met andere instrumenten onbekend)

**Aanbeveling:** Doe **Confirmatory Factor Analysis (CFA)** met dataset van minimaal 200 respondenten om te testen of de 8 domeinen empirisch los van elkaar staan.

---

### 🔁 Betrouwbaarheid

**Vraag:** Geeft BalansCheck consistente resultaten?

**Antwoord:** **Onbekend.**

- ❌ Geen **test-retest data**
- ❌ Geen **inter-rater reliability** (als professional ook invult, komt het overeen?)
- ❌ Geen **interne consistentie** per domein (Cronbach's alpha)

**Aanbeveling:** 
1. **Test-retest:** 30 respondenten doen check 2x met 1 week tussentijd → ICC > 0.70
2. **Inter-rater:** 30 cliënten doen check + professional doet het ook → kappa > 0.60
3. **Split-half:** Als er meerdere items per domein komen, check Cronbach's alpha > 0.70

---

### 🌍 Generaliseerbaarheid

**Vraag:** Werkt BalansCheck voor iedereen?

**Antwoord:** **Waarschijnlijk wel, maar ongetest.**

- ✅ **Taal:** Nederlands, eenvoudig niveau (goed)
- ⚠️ **Laaggeletterdheid:** Zijn emoji's + korte teksten voldoende? (ongetest)
- ⚠️ **Licht verstandelijke beperking (LVB):** Is 8 domeinen te veel? (Sandra zou dit signaleren)
- ⚠️ **Culturele diversiteit:** Zijn "huiselijke relaties" en "sociaal netwerk" universeel? (in collectivistische culturen mogelijk overlap)

**Aanbeveling:** 
- **Toegankelijkheidstest** met 10 laaggeletterden + 10 LVB-ers + 10 niet-Nederlandstaligen
- **Voorleesoptie** toevoegen (tekst-to-speech)
- **Cultuurspecifieke validatie** in Turkse/Marokkaanse/Surinaamse gemeenschappen

---

### 📊 Ethische beoordeling

**Vraag:** Respecteert BalansCheck autonomie en privacy?

**Antwoord:** **Ja, exemplarisch.**

- ✅ **Privacy by design:** Lokale opslag (geen server)
- ✅ **Informed consent:** Wijkdata opt-in met duidelijke uitleg
- ✅ **Autonomie:** Gebruiker beslist wat te delen
- ✅ **Non-directiviteit:** Tips zijn suggesties, geen dwang
- ✅ **Anti-stigmatisering:** "Hulp is welkom" i.p.v. "Problematisch"

**Geen zorgen. 10/10.**

---

### 🏆 Eindoordeel Niveau 1

| Criterium | Score | Toelichting |
|-----------|-------|-------------|
| **Constructvaliditeit** | 6/10 | Goede inhoud, maar geen empirische toetsing |
| **Betrouwbaarheid** | 4/10 | Ongetest (test-retest, inter-rater ontbreekt) |
| **Toegankelijkheid** | 9/10 | Laagdrempelig, maar LVB/laaggeletterdheid ongetest |
| **Ethiek** | 10/10 | Privacy en autonomie perfect geborgd |
| **Generaliseerbaarheid** | 6/10 | Breed inzetbaar, maar culturele validatie ontbreekt |
| **Theoretische coherentie** | 7/10 | Sluit aan bij SIJN, maar "positionering" nog niet zichtbaar |

**Gemiddelde: 7.0/10** → **Goed, maar ongevalideerd instrument.**

**Aanbeveling:** Pilot met 200 respondenten + psychometrische toetsing voor publicatie in peer-reviewed tijdschrift.

---

## 🔍 Niveau 2: Positionele Analyse

### 📋 Beschrijving
- **Doel:** Netwerkpositie in kaart brengen + beweging plannen
- **Doelgroep:** Professional met cliënt (samen in gesprek)
- **Domeinen:** 11 SIJN-gebieden
- **Schaal:** 4-punts (Geen probleem / Beperkt zelfredzaam / Niet zelfredzaam / Niet van toepassing)
- **Netwerk:** 3 draaglagen (Informeel / Collectief / Formeel)
- **Output:** Spider chart + positiekaart + bewegingsplan + exporteerbare JSON

---

### ✅ Sterke punten (methodologisch)

#### 1. **Theoretische fundering**
- **Positionele keuze** is expliciet (niet automatisch "meer zorg")
- **Draaglagen** zijn helder gedefinieerd (informeel/collectief/formeel)
- **Bewegingsrichting** is geoperationaliseerd (verschuiven tussen draaglagen)

#### 2. **Visuele kracht**
- **Spider chart** toont balans over 11 domeinen (evidence-based: mensen zien patronen sneller in radar chart dan in tabel)
- **Positiekaart** (3-lagen cirkeldiagram) maakt netwerk visueel (innovatief!)
- **Bewegingspijlen** tonen intentie (goed voor motivatie)

#### 3. **Exportfunctionaliteit**
- **JSON-export** naar Niveau 3 is **methodologisch sterk**: data blijft gestructureerd en traceerbaar
- **Privacy-consent** expliciet bij export (ethisch)

#### 4. **Procesmatige aanpak**
- **11 stappen** (intro → 11 domeinen → samenvatting) is **gestructureerd**
- **Progress indicator** helpt oriëntatie (cognitieve load management)

#### 5. **Contextgevoelige vragen**
- Vraag naar **huidige ondersteuning** per domein is **content-valid**
- Koppeling met **interventies** (Amsterdam postcode-gefilterd) is **handelingsgericht**

---

### ⚠️ Methodologische zorgen

#### 1. **4-punts schaal met "N.v.t." is problematisch**
- **"Niet van toepassing"** kan twee dingen betekenen:
  - Domein is irrelevant (bijv. "geen kinderen" bij ouders zonder gezin)
  - Domein is **zo goed** dat het niet telt (bijv. "financiën perfect")
- **Scoring onduidelijk:** Telt N.v.t. als positief of als missing?
- **Oplossing:** Split naar 2 vragen:
  1. "Is dit domein relevant voor u?" (Ja/Nee)
  2. Als Ja: "Hoe gaat het?" (4-punts zonder N.v.t.)

#### 2. **Draaglagen zijn theoretisch, niet empirisch**
- Wat is **"collectief"** precies? (buurthuis, peergroup, kerk?)
- Is **wijkverpleging** formeel of collectief? (debat mogelijk)
- Geen **operationele definities** in de interface
- **Oplossing:** Voeg tooltip toe met voorbeelden per draaglaag

#### 3. **Geen validatie van "beweging"**
- **Hoe weten we** of verschuiving van formeel naar informeel **succesvol** is?
- Geen **outcome-meting** na 6 maanden (komt de beweging er?)
- **Oplossing:** Follow-up module: "Is de beweging gelukt? Waarom (niet)?"

#### 4. **Interventies zijn niet gevalideerd**
- **Amsterdam postcode-filter** is pragmatisch, maar niet **evidence-based**
- Geen **kwaliteitsindicator** bij interventies (werkt deze aanpak echt?)
- **Oplossing:** Koppel interventies aan effectonderzoek (bijv. "bewezen effectief volgens ZonMw")

#### 5. **Spider chart kan misleiden**
- **Gelijke schaal** voor alle domeinen suggereert gelijke **relevantie** (is financiën even zwaar als justitie?)
- **Geen weging** voor prioriteit (cliënt kan zelf aangeven wat belangrijk is)
- **Oplossing:** Voeg vraag toe: "Welke 3 domeinen zijn voor u nu het belangrijkst?" → highlight in chart

#### 6. **Professional bias**
- **Wie vult in?** (cliënt, professional, of samen?)
- Als professional invult: **risico op paternalisme** (professional ziet meer problemen dan cliënt ervaart)
- **Oplossing:** Twee versies:
  - **Cliënt-versie:** Cliënt vult zelf in voor gesprek
  - **Duo-versie:** Professional en cliënt samen, met expliciete check: "Ziet u dit ook zo?"

---

### 🎯 Constructvaliditeit

**Vraag:** Meet de Positionele Analyse wat het beoogt (netwerkpositie)?

**Antwoord:** **Ja, maar met beperkingen.**

- ✅ **Domeinen** zijn volledig (SIJN-11)
- ✅ **Draaglagen** operationaliseren netwerkpositie
- ❌ **Geen empirische test** of draaglagen echt los staan (CFA ontbreekt)
- ❌ **Geen convergente validiteit** (correlatie met SNA-instrumenten onbekend)

**Aanbeveling:** Valideer draaglagen met **Social Network Analysis (SNA)**: vraag respondenten om netwerk te tekenen → check of indeling informeel/collectief/formeel empirisch klopt.

---

### 🔁 Betrouwbaarheid

**Vraag:** Geeft de Positionele Analyse consistente resultaten?

**Antwoord:** **Onbekend, maar risico op lage inter-rater reliability.**

- ❌ Geen **test-retest** data
- ❌ Geen **inter-rater**: als twee professionals dezelfde cliënt beoordelen, komen ze tot hetzelfde oordeel?
- ⚠️ **Subjectiviteit** in "beperkt zelfredzaam" vs "niet zelfredzaam" (geen heldere criteria)

**Aanbeveling:** 
1. **Inter-rater test:** 20 cliënten, 2 professionals (blind) → kappa > 0.60
2. **Ankers toevoegen:** "Beperkt zelfredzaam = met hulp lukt het / Niet zelfredzaam = ook met hulp gaat het niet"

---

### 🌍 Generaliseerbaarheid

**Vraag:** Werkt de Positionele Analyse voor alle doelgroepen?

**Antwoord:** **Voor de meeste wel, maar niet voor iedereen.**

- ✅ **Breed toepasbaar:** Jongeren, volwassenen, ouderen
- ⚠️ **LVB:** 11 domeinen + 3 draaglagen kan **cognitief te zwaar** zijn (Sandra's perspectief)
- ⚠️ **Acute crisis:** Bij suïcidaliteit of huiselijk geweld is **positie-analyse secundair** (eerst stabiliseren)
- ⚠️ **Geen netwerk:** Bij dakloosheid of eenzame ouderen is "informeel netwerk" vaak **leeg** → tool suggereert iets dat er niet is

**Aanbeveling:** 
- **Eenvoudige variant** voor LVB: 5 kerndomeinen + 2 draaglagen (informeel/formeel)
- **Crisis-disclaimer:** "Bij acute problemen eerst contact met crisis dienst"
- **Nulnetwerk-scenario:** Als cliënt aangeeft "geen netwerk" → aanpak is dan **opbouwen**, niet **verschuiven**

---

### 📊 Ethische beoordeling

**Vraag:** Respecteert de Positionele Analyse autonomie en privacy?

**Antwoord:** **Grotendeels, maar risico op paternalisme.**

- ✅ **Privacy:** JSON-export is lokaal (goed)
- ✅ **Autonomie:** Cliënt **kan** zelf invullen
- ⚠️ **Paternalisme-risico:** Professional kan cliënt **overvragen** ("Laten we ook justitie invullen, voor de volledigheid")
- ⚠️ **Sociale wenselijkheid:** Cliënt kan antwoorden **aanpassen** om professional tevreden te stellen

**Aanbeveling:** 
- **Expliciete instructie** voor professional: "Cliënt bepaalt welke domeinen relevant zijn. Dwing niet af."
- **Feedback-moment:** Na invulling vraagt tool aan cliënt: "Voelt dit als uw verhaal?"

**Score: 8/10** (goed, maar alert op paternalisme)

---

### 🏆 Eindoordeel Niveau 2

| Criterium | Score | Toelichting |
|-----------|-------|-------------|
| **Constructvaliditeit** | 7/10 | Goede operationalisatie draaglagen, maar geen SNA-validatie |
| **Betrouwbaarheid** | 5/10 | Subjectiviteit in schaal, geen inter-rater test |
| **Toegankelijkheid** | 7/10 | Breed inzetbaar, maar te zwaar voor LVB en crisis |
| **Ethiek** | 8/10 | Privacy goed, maar paternalisme-risico |
| **Generaliseerbaarheid** | 6/10 | Werkt niet voor nulnetwerk en acute crisis |
| **Theoretische coherentie** | 9/10 | Sterke vertaling van RPA-theorie naar praktijk |

**Gemiddelde: 7.0/10** → **Solide instrument, maar inter-rater reliability moet getest.**

**Aanbeveling:** Inter-rater studie + LVB-variant + nulnetwerk-scenario.

---

## 🔍 Niveau 3: Strategische Netwerkimpactanalyse

### 📋 Beschrijving
- **Doel:** Macro-analyse voor beleidsmakers
- **Doelgroep:** Gemeenteraad, zorgmanagers, strategisch adviseurs
- **Input:** JSON-export van Niveau 2 (positionele analyses)
- **Output:** Kosten-impact, maatschappelijke impact, schaalscenario's

---

### ✅ Sterke punten (methodologisch)

#### 1. **Unieke positie in Nederlandse landschap**
- **Geen vergelijkbaar instrument** dat positionele data aggregeert naar beleidsniveau
- **Innovatief:** Verbindt micro (cliënt) met macro (beleid)

#### 2. **Data-gedreven**
- **Import van Niveau 2** garandeert **eenduidige databron**
- **Geen dubbele dataverzameling** (efficiënt)

#### 3. **Scenario-analyse**
- **"Wat als we 30% verschuiven van formeel naar collectief?"** is **policy-relevant**
- **Kostenberekening** maakt impact **tastbaar** voor bestuurders

#### 4. **Visualisaties**
- **Kosten-impact chart** (formeel vs collectief vs informeel) is **overtuigend** voor raadsleden
- **Bewegingspijlen** tonen **richting** (niet alleen status quo)

---

### ⚠️ Methodologische zorgen

#### 1. **Externe validiteit onduidelijk**
- **Sample representativiteit:** Als 30 professionals in Amsterdam-Noord export uploaden, is dat representatief voor heel Noord?
- **Selection bias:** Professionals die export uploaden zijn waarschijnlijk **innovators** (niet gemiddelde)
- **Oplossing:** Rapportage bevat **disclaimer**: "Dit is een selectie, geen volkstelling"

#### 2. **Kostenberekening te simplistisch**
- **Aanname:** "Formele zorg kost X, collectieve zorg kost 0.3X" is **niet empirisch onderbouwd**
- **Realiteit:** Collectieve zorg heeft ook kosten (vrijwilligerscoördinatie, ruimtes, subsidies)
- **Oplossing:** Gebruik **ZonMw-kostenindicatoren** per interventie (niet aanname)

#### 3. **Geen causaliteit**
- **Correlatie ≠ causaliteit:** Als we verschuiving zien van formeel naar informeel, kan dat ook betekenen dat formele zorg **uitvalt** (niet dat het beleid werkt)
- **Geen controlegroep:** We weten niet wat er gebeurt **zonder interventie**
- **Oplossing:** Langetermijn-tracking met **before-after vergelijking** + controlegroep

#### 4. **Privacy-risico bij aggregatie**
- Als **minder dan 10 cases** in een wijk, kan **deductieve disclosure** optreden (bijv. "Er is maar 1 Marokkaanse vrouw met GGZ-probleem in deze wijk → dat moet X zijn")
- **Oplossing:** **k-anonymiteit** (minimum 10 cases per subgroep) of **suppression**

#### 5. **Geen interventie-koppeling**
- **Strategische analyse** zegt "we moeten meer informeel" maar niet **hoe**
- **Ontbrekende link:** Welke interventies leiden tot verschuiving?
- **Oplossing:** Koppel aan **evidence-based interventies** (bijv. "Buurtbudgetten verhogen informele steun met 20% - bron: Trimbos 2024")

---

### 🎯 Constructvaliditeit

**Vraag:** Meet Niveau 3 wat het beoogt (netwerkimpact op macroniveau)?

**Antwoord:** **Conceptueel ja, empirisch ongevalideerd.**

- ✅ **Aggregatie** van microniveau naar macro is **logisch**
- ❌ **Geen empirische test** of berekende impact **klopt** (geen RCT)
- ❌ **Geen convergente validiteit** (wordt niet vergeleken met CBS/SCP-data)

**Aanbeveling:** Pilotonderzoek in 1 wijk (Amsterdam-Noord) + vergelijk met CBS-data over zorggebruik.

---

### 🔁 Betrouwbaarheid

**Vraag:** Geeft Niveau 3 stabiele uitkomsten?

**Antwoord:** **Afhankelijk van inputkwaliteit (garbage in, garbage out).**

- ⚠️ Als Niveau 2 **inter-rater reliability** laag is → Niveau 3 ook onbetrouwbaar
- ⚠️ **Sample fluctuatie:** Als volgende maand 10 nieuwe professionals uploaden, verschuift de analyse
- ✅ **Berekeningslogica** is consistent (dezelfde input geeft dezelfde output)

**Aanbeveling:** Niveau 3 is alleen betrouwbaar als Niveau 2 eerst gevalideerd is (zie eerdere aanbevelingen).

---

### 🌍 Generaliseerbaarheid

**Vraag:** Werkt Niveau 3 voor elke gemeente?

**Antwoord:** **Ja, maar met lokale aanpassingen.**

- ✅ **Methodologie** is overdraagbaar
- ⚠️ **Kostenindicatoren** variëren per gemeente (Amsterdam ≠ Ter Apel)
- ⚠️ **Netwerkdichtheid** verschilt (stad vs platteland)

**Aanbeveling:** Maak **regionale templates** met lokale kosten en netwerkdata.

---

### 📊 Ethische beoordeling

**Vraag:** Respecteert Niveau 3 privacy en autonomie?

**Antwoord:** **Risico's, maar te mitigeren.**

- ⚠️ **Deductieve disclosure** bij kleine aantallen (zie eerder)
- ⚠️ **Beleidsreductionisme:** Bestuurders kunnen cijfers gebruiken om **zorg te korten** ("We besparen €500k door mensen zelf te laten regelen")
- ✅ **Aggregatie** beschermt individuen (geen namen/adressen)

**Aanbeveling:** 
- **k-anonymiteit** (min. 10 cases)
- **Disclaimer** in rapportage: "Dit is geen argument voor bezuinigingen, maar voor anders positioneren"
- **Ethische commissie** voor gebruik in beleidsbesluiten

**Score: 7/10** (risico's, maar met safeguards hanteerbaar)

---

### 🏆 Eindoordeel Niveau 3

| Criterium | Score | Toelichting |
|-----------|-------|-------------|
| **Constructvaliditeit** | 6/10 | Conceptueel sterk, empirisch ongetest |
| **Betrouwbaarheid** | 6/10 | Afhankelijk van inputkwaliteit Niveau 2 |
| **Toegankelijkheid** | 8/10 | Goed voor beleidsmakers (visualisaties werken) |
| **Ethiek** | 7/10 | Privacy-risico's, maar mitigeerbaar |
| **Generaliseerbaarheid** | 7/10 | Overdraagbaar, maar lokale aanpassingen nodig |
| **Theoretische coherentie** | 9/10 | Sterke vertaling van RPA naar beleidsniveau |

**Gemiddelde: 7.2/10** → **Veelbelovend, maar empirische validatie cruciaal.**

**Aanbeveling:** Pilotonderzoek in 3 wijken + vergelijk met CBS-data + ethische toetsing.

---

## 🔍 Extra: Familie Portal Pro

### 📋 Beschrijving
- **Doel:** Centrale hub voor familie/mantelzorgers
- **Functionaliteit:** Overzicht professionals, afspraken, medicatie, contacten
- **Doelgroep:** Familie van cliënt in zorg

---

### ✅ Sterke punten (methodologisch)

#### 1. **Vult gat in Nederlands landschap**
- **MedGemak** en **Ons Zorgleefplan** zijn cliënt-gericht, maar niet **familie-gericht**
- **Innovatie:** Centraal punt voor **informele netwerkcoördinatie**

#### 2. **Transparantie**
- **Alle professionals op 1 plek** vermindert **regiediffusie**
- **Timeline** toont **continuïteit** (wie doet wat wanneer?)

#### 3. **Gebruiksvriendelijkheid**
- **Mobile-first design** (belangrijk: mantelzorgers hebben weinig tijd)
- **Notificaties** houden familie op de hoogte (push-based, geen actieve check nodig)

---

### ⚠️ Methodologische zorgen

#### 1. **Geen validatie met eindgebruikers**
- **Ontbreekt:** User testing met 10+ mantelzorgers
- **Risico:** Features die ontwikkelaars handig vinden, maar mantelzorgers niet gebruiken
- **Oplossing:** Iteratieve pilots met mantelzorgers (5 rondes testen → aanpassen)

#### 2. **Privacy en toegangscontrole**
- **Wie mag inloggen?** (partner? kinderen? buren?)
- **Geen expliciete consent-flow** voor cliënt: "Mijn familie mag dit zien"
- **GDPR-risico:** Medische informatie delen zonder expliciete toestemming
- **Oplossing:** 
  - **Toestemmingsmodule:** Cliënt bepaalt **wie wat mag zien**
  - **Gelaagde toegang:** Basis (afspraken) vs Uitgebreid (medicatie)

#### 3. **Risico op informatie-overload**
- **Mantelzorgers zijn vaak overbelast** (Marieke's perspectief)
- **Te veel notificaties** kunnen stress veroorzaken
- **Oplossing:** 
  - **Instelbare notificatieniveaus** (Urgent / Belangrijk / Alle)
  - **Wekelijkse samenvatting** i.p.v. real-time push

#### 4. **Geen integratie met bestaande systemen**
- **Medicatiegegevens** komen niet automatisch uit apotheek (handmatige invoer → foutgevoelig)
- **Afspraken** komen niet uit agenda's professionals (dubbel werk)
- **Oplossing:** **HL7 FHIR-koppeling** met zorgaanbieders (technisch complex, maar noodzakelijk voor schaalbaar gebruik)

#### 5. **Ontbrekende outcome-indicatoren**
- **Meten we** of familie-portal **overbelasting vermindert**?
- **Geen correlatie** tussen gebruik portal en mantelzorguitval
- **Oplossing:** Ingebouwde **outcome-vragenlijst** na 3 maanden: "Voelt u zich beter geïnformeerd?" (ja/nee) + "Hoeveel uur per week bespaart dit?" (0-5+)

---

### 🎯 Constructvaliditeit

**Vraag:** Meet het Familie Portal wat het beoogt (coördinatie verbeteren)?

**Antwoord:** **Conceptueel ja, empirisch ongetest.**

- ✅ **Features** sluiten aan bij behoeften mantelzorgers (transparantie, overzicht)
- ❌ **Geen empirische test** of portal **daadwerkelijk** overbelasting vermindert
- ❌ **Geen baseline-meting** (hoe gaat het nu zonder portal?)

**Aanbeveling:** RCT met 50 mantelzorgers (25 met portal, 25 zonder) → meet stress, tijdsbesparing, tevredenheid na 3 maanden.

---

### 🔁 Betrouwbaarheid

**Vraag:** Werkt het portal consistent?

**Antwoord:** **Technisch waarschijnlijk wel, maar gebruikersgedrag onbekend.**

- ✅ **Code-logica** is deterministisch (same input → same output)
- ❌ **Gebruikersadoptie** onbekend (hoeveel mantelzorgers blijven het gebruiken na 1 maand?)
- ❌ **Data-accuraatheid** afhankelijk van handmatige invoer (garbage in, garbage out)

**Aanbeveling:** Tracking van gebruikspatronen (hoeveel logins per week? welke features worden gebruikt?)

---

### 🌍 Generaliseerbaarheid

**Vraag:** Werkt het portal voor alle mantelzorgers?

**Antwoord:** **Voor digitaal vaardigen wel, voor anderen niet.**

- ✅ **Geschikt voor:** Kinderen van ouders (40-60 jaar, digitaal vaardig)
- ⚠️ **Niet geschikt voor:** Ouderen die partner verzorgen (65+ met lage digitale vaardigheden)
- ⚠️ **Niet geschikt voor:** Jonge mantelzorgers (12-18) zonder smartphone

**Aanbeveling:** 
- **Print-optie:** "Wekelijks overzicht" als PDF
- **Telefoonlijn:** Voor ouderen die niet digitaal kunnen
- **Vereenvoudigde versie:** Alleen essentie (afspraken + contact regisseur)

---

### 📊 Ethische beoordeling

**Vraag:** Respecteert het portal privacy en autonomie?

**Antwoord:** **Risico's, actie vereist.**

- ⚠️ **GDPR-compliance onduidelijk:** Wie is verwerkingsverantwoordelijke?
- ⚠️ **Cliënt-consent ontbreekt:** "Mijn familie mag dit zien" moet expliciet
- ⚠️ **Data-opslag:** Waar worden gegevens opgeslagen? (cloud? lokaal?)
- ✅ **Toegangsbeheer:** Login vereist (goed)

**Aanbeveling:** 
- **Privacy Impact Assessment (PIA)** volgens AVG
- **Expliciete consent-module** voor cliënt
- **Data-minimalisatie:** Alleen opslaan wat nodig is

**Score: 6/10** (privacy-risico's moeten aangepakt voor implementatie)

---

### 🏆 Eindoordeel Familie Portal Pro

| Criterium | Score | Toelichting |
|-----------|-------|-------------|
| **Constructvaliditeit** | 6/10 | Conceptueel sterk, maar geen user validation |
| **Betrouwbaarheid** | 7/10 | Technisch solide, maar gebruiksadoptie onbekend |
| **Toegankelijkheid** | 5/10 | Goed voor digitaal vaardigen, uitsluitend voor ouderen |
| **Ethiek** | 6/10 | Privacy-risico's (GDPR, consent) |
| **Generaliseerbaarheid** | 6/10 | Werkt voor digitaal vaardigen, niet voor iedereen |
| **Theoretische coherentie** | 8/10 | Past goed bij netwerkbenadering (informeel ondersteunen) |

**Gemiddelde: 6.3/10** → **Veelbelovend concept, maar privacy en toegankelijkheid vereisen aandacht.**

**Aanbeveling:** User testing + PIA + print-optie + consent-module.

---

---

# 📊 ALGEMENE CONCLUSIES & AANBEVELINGEN

## 🎯 Overkoepelende Methodologische Beoordeling

### Sterke punten RPA-suite als geheel:

1. **Theoretische coherentie** (9/10)
   - RPA-model is **helder geformuleerd**
   - Operationalisatie van "positionering" is **innovatief**
   - Verbinding micro-meso-macro is **uniek in Nederland**

2. **Gebruikersgerichtheid** (8/10)
   - Laagdrempelige interfaces
   - Privacy by design
   - Visuele feedback (charts) zijn evidence-based

3. **Praktische toepasbaarheid** (8/10)
   - Professionals kunnen ermee werken (niveau 2)
   - Beleidsmakers krijgen bruikbare input (niveau 3)
   - Burgers kunnen zelf aan de slag (niveau 1)

---

### Zwakke punten RPA-suite als geheel:

1. **Gebrek aan empirische validatie** (4/10)
   - **Geen psychometrische toetsing** (Cronbach's alpha, test-retest)
   - **Geen inter-rater reliability** studies
   - **Geen RCT's** om effectiviteit te bewijzen
   - **Geen vergelijking** met gevalideerde instrumenten (SRQ-M, SMO)

2. **Operationalisatie-problemen** (6/10)
   - **Schalen** niet altijd helder (N.v.t.-probleem)
   - **Draaglagen** theoretisch sterk, empirisch ongetest
   - **Kosten-indicatoren** niveau 3 te simplistisch

3. **Privacy en ethiek** (7/10)
   - **Familie Portal:** GDPR-compliance onduidelijk
   - **Niveau 3:** Deductieve disclosure-risico
   - **Niveau 2:** Paternalisme-risico

4. **Toegankelijkheid voor kwetsbare groepen** (6/10)
   - **LVB:** Te complex (11 domeinen + 3 draaglagen)
   - **Laaggeletterden:** Ongetest
   - **Ouderen zonder digitale vaardigheden:** Familie Portal uitsluitend

---

## 🔬 Onderzoeksagenda (Bram's aanbevelingen)

### Fase 1: Psychometrische validatie (6-12 maanden)

**Doel:** Bewijzen dat RPA-suite **betrouwbaar en valide** is.

**Onderzoeksopzet:**

1. **Niveau 1 (BalansCheck):**
   - **N = 200** respondenten (divers naar leeftijd, etniciteit, SES)
   - **Test-retest** na 2 weken (ICC > 0.70)
   - **Convergente validiteit:** Correlatie met SRQ-M (r > 0.60)
   - **Confirmatory Factor Analysis:** Testen of 8 domeinen empirisch los staan

2. **Niveau 2 (Positionele Analyse):**
   - **N = 50** cliënten, **2 professionals** per cliënt (blind)
   - **Inter-rater reliability:** Kappa > 0.60
   - **Social Network Analysis:** Valideren of draaglagen empirisch kloppen
   - **Ankers toevoegen** aan schalen (operationele definities)

3. **Niveau 3 (Strategische Analyse):**
   - **Pilotonderzoek** in Amsterdam-Noord (3 maanden)
   - **Vergelijking met CBS-data** (zorggebruik, WMO-aanvragen)
   - **Kosten-validatie:** Gebruik ZonMw-kostenindicatoren i.p.v. aannames

4. **Familie Portal:**
   - **User testing** met 20 mantelzorgers (5 iteraties)
   - **RCT:** 50 mantelzorgers (25 met portal, 25 zonder) → meet stress, tijdsbesparing na 3 maanden
   - **Privacy Impact Assessment** (AVG-compliance)

**Output:** Peer-reviewed artikel in *TSG (Tijdschrift voor Gezondheidswetenschappen)* of *Social Work in Public Health*

---

### Fase 2: Toegankelijkheidsverbeteringen (6 maanden)

**Doel:** RPA-suite geschikt maken voor **alle doelgroepen**.

**Acties:**

1. **LVB-variant Niveau 2:**
   - 5 kerndomeinen (i.p.v. 11)
   - 2 draaglagen (informeel/formeel, zonder collectief)
   - Picto's toevoegen (Sclera-symbolen)
   - Toetsing met **Sandra's perspectief**

2. **Laaggeletterdheid-test:**
   - 10 respondenten met niveau A2/B1 (Stichting Lezen & Schrijven)
   - Voorleesoptie (text-to-speech)
   - Aanpassen moeilijke woorden (bijv. "zelfredzaamheid" → "hoe het gaat")

3. **Culturele validatie:**
   - 30 respondenten (10 Turks, 10 Marokkaans, 10 Surinaams)
   - Check of domeinen universeel zijn (bijv. "huiselijke relaties" in collectivistische culturen)
   - Eventueel culturele aanpassingen

4. **Familie Portal print-optie:**
   - "Wekelijks overzicht" als PDF
   - Telefoonlijn voor ouderen zonder digitale vaardigheden

**Output:** Toegankelijkheidsrapport + aangepaste versies

---

### Fase 3: Effectonderzoek (12-24 maanden)

**Doel:** Bewijzen dat RPA-suite **werkt** (outcome-meting).

**Onderzoeksopzet:**

1. **RCT Niveau 2:**
   - **N = 100** cliënten
   - **Interventie:** Positionele Analyse + bewegingsplan
   - **Controle:** Care as usual
   - **Meting:** Zelfredzaamheid (SRQ-M), netwerkdichtheid (SNA), kosten na 6 maanden
   - **Hypothese:** Interventiegroep heeft 20% meer informele steun + 15% lagere kosten

2. **Longitudinaal onderzoek Niveau 3:**
   - **3 wijken** in Amsterdam (Noord, Oost, West)
   - **Voor-na meting:** 1 jaar voor RPA-implementatie vs 1 jaar erna
   - **Indicatoren:** WMO-aanvragen, formele zorguren, buurtactiviteiten
   - **Vergelijking met controle-wijk** (zonder RPA)

3. **Familie Portal outcome-meting:**
   - **N = 50** mantelzorgers
   - **Meting:** Mantelzorgbelasting (EDIZ-plus), tevredenheid, tijdsbesparing
   - **Follow-up:** 3 maanden na implementatie

**Output:** Peer-reviewed artikel in *BMC Health Services Research* + rapport voor ZonMw

---

### Fase 4: Ethische borging (ongoing)

**Doel:** Waarborgen dat RPA-suite **ethisch verantwoord** gebruikt wordt.

**Acties:**

1. **Privacy Impact Assessment (PIA):**
   - Voor Familie Portal en Niveau 3
   - Identificeer GDPR-risico's
   - Implementeer k-anonymiteit (min. 10 cases per subgroep)

2. **Ethische commissie:**
   - Toetsing voorafgaand aan gebruik in beleidsbesluiten
   - Disclaimer: "RPA is geen argument voor bezuinigingen"

3. **Anti-paternalisme protocol:**
   - Training voor professionals: "Cliënt bepaalt, professional begeleidt"
   - Feedback-moment in Niveau 2: "Voelt dit als uw verhaal?"

4. **Consent-module Familie Portal:**
   - Cliënt bepaalt wie wat mag zien
   - Gelaagde toegang (basis vs uitgebreid)

**Output:** Ethisch handboek + trainingsmodule voor professionals

---

## 🏆 Eindoordeel RPA-suite

| Niveau | Gemiddelde Score | Status |
|--------|------------------|--------|
| Niveau 1 (BalansCheck) | 7.0/10 | Goed, maar ongevalideerd |
| Niveau 2 (Positionele Analyse) | 7.0/10 | Solide, maar inter-rater reliability moet getest |
| Niveau 3 (Strategische Analyse) | 7.2/10 | Veelbelovend, maar empirische validatie cruciaal |
| Familie Portal Pro | 6.3/10 | Concept sterk, privacy en toegankelijkheid aandachtspunten |

**Gemiddelde RPA-suite: 6.9/10** → **Veelbelovend instrument met innovatief concept, maar empirische validatie is **cruciaal** voor verantwoord gebruik.**

---

## 📜 Publicatiestrategie

### Stap 1: Validatiestudie (12 maanden)
- Psychometrische toetsing N1 + N2
- Pilotonderzoek N3
- **Output:** Artikel in TSG of Social Work in Public Health

### Stap 2: Effectonderzoek (24 maanden)
- RCT Niveau 2
- Longitudinaal onderzoek Niveau 3
- **Output:** Artikel in BMC Health Services Research + ZonMw-rapport

### Stap 3: Implementatiestudie (12 maanden)
- Uitrol in 5 gemeenten
- Barriers en facilitators
- **Output:** Artikel in Implementation Science

### Stap 4: Dissertatie (na 3-4 jaar)
- **Titel:** *"Positionering boven opschaling: Validatie en effectiviteit van het Relationeel-Positioneel Analysemodel"*
- **Promovendus:** Laura Terbrack (eventueel)
- **Promotor:** Sociaal werk / Zorgbeleid universiteit

---

## 💡 Innovatieve toevoegingen (Bram's extra ideeën)

### 1. **RPA-certificering voor professionals**
- **Cursus** (2 dagen) met toetsing
- **Competenties:** Positionele analyse, netwerkdenken, anti-paternalisme
- **Certificaat** geldig 3 jaar (hertoetsing vereist)
- **Effect:** Kwaliteitsborging + professionalisering

### 2. **RPA-dashboard voor gemeenten (Niveau 3+)**
- **Real-time aggregatie** van geüploade analyses
- **Heatmap** per wijk (waar zijn problemen?)
- **Trend-analyse** (verbetert het over tijd?)
- **Alert-systeem** bij afwijkingen (bijv. "GGZ-problematiek stijgt 30%")

### 3. **Netwerkkaart-generatie (Niveau 2+)**
- **Automatische SNA-visualisatie** van cliënt-netwerk
- **Export naar Gephi/NodeXL** voor professionals
- **Identificeer cruciale personen** (wie is de verbinder?)
- **Effect:** Visualiseren wie echt belangrijk is (vaak verrassend)

### 4. **AI-gestuurde interventie-matching (Niveau 2+)**
- **Machine learning** traint op historische data: welke interventies werkten voor vergelijkbare cliënten?
- **Suggestie-engine:** "Voor deze cliënt werkte buurthuis-aanpak goed (78% succes)"
- **Ethische borging:** Altijd met professional-override (AI adviseert, mens beslist)

---

## 🎤 Gespreksstarter met Laura

**Bram:** "Laura, je hebt een **innovatief en theoretisch sterk instrument** gebouwd. De RPA-suite is uniek in Nederland. Maar we moeten eerlijk zijn: **zonder empirische validatie blijft het een veelbelovend idee, geen bewezen methode.**

Mijn aanbeveling: **Investeer in onderzoek.** 200 respondenten, 6 maanden, en je hebt een peer-reviewed artikel. Dat opent deuren naar gemeenten, ZonMw-subsidie, en universiteiten. RPA verdient dat.

Wat denk je? Zullen we een onderzoeksopzet uitwerken?"

---

**Einde methodologische analyse. 📊**

**Vragen? Opmerkingen? Wil je dat ik een specifiek onderdeel uitdiep (bijv. RCT-opzet, psychometrische toetsing, ethische borging)?**