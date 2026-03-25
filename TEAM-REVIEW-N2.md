# 🔍 Team Review: RPA Niveau 2 - Alle Schermen

**Reviewers:**
- 🎨 Marie (UX/Visual)
- 📊 Bram (Methodologie)
- 💬 Lisa (Cliënt)
- 👥 Karin (Praktijk)
- 🏛️ Jan (Beleid)
- 🏥 Suus (GGZ/Complex)

**Datum:** 22 maart 2026

---

## Screen 0: Organisatie Keuze (🏢)

**Huidige staat:**
- 8 organisatie-knoppen (wijkteam, GGZ, mantelzorg, etc.)
- Bepaalt doelgroep en filtering

### 🎨 Marie (Visual/UX):
**✅ Goed:**
- Duidelijke keuze-architectuur
- Iconen per organisatie

**⚠️ Verbeterpunten:**
- Organisatie-kaarten kunnen visueel rijker (gradient backgrounds)
- Hover-states ontbreken
- Geen uitleg waarom je moet kiezen
- **Prioriteit:** MEDIUM

### 💬 Lisa (Cliënt):
**⚠️ Vraag:**
- "Waarom moet ik kiezen? Ik kom voor hulp, niet om een organisatie te kiezen."
- **Verbeterpunt:** Uitleg toevoegen: "Dit helpt ons passende voorbeelden te tonen"
- **Prioriteit:** HIGH

### 👥 Karin (Praktijk):
**✅ Goed:**
- Snel starten, geen lange intros
- Filtering op doelgroep scheelt tijd

**⚠️ Verbeterpunt:**
- Sommige cliënten passen bij meerdere organisaties (bijv. GGZ + schuldhulp)
- **Suggestie:** "Meerdere domeinen" optie toevoegen
- **Prioriteit:** MEDIUM

---

## Screen 1: Intro/Uitleg (ℹ️)

**Huidige staat:**
- Net visueel geüpgraded ✅
- Gradient header, iconen, team-quotes met avatars

### 📊 Bram (Methodologie):
**✅ Excellent:**
- Filosofisch onderbouwd zonder jargon
- Wetenschappelijke quotes ingeklapt (goed!)
- Duidelijke 4-stappen structuur

**⚠️ Verbeterpunt:**
- Netwerkposities diagram kan interactiever (hover = uitleg)
- **Prioriteit:** LOW

### 💬 Lisa (Cliënt):
**✅ Perfect:**
- "Wat lost dit op?" spreekt mij aan
- Team-quotes geven vertrouwen
- Niet te lang, niet te kort

**✅ Geen verbeterpunten**

### 🎨 Marie (Visual):
**✅ Recent verbeterd:**
- Gradients, iconen, avatars toegevoegd
- Visuele hiërarchie is sterk

**Suggestie (optioneel):**
- Animatie bij laden (subtle fade-in)
- **Prioriteit:** LOW

---

## Screen 2: Kennismaking/Start (🏠)

**Huidige staat:**
- Naam cliënt, geboortedatum, doelgroep-chips
- Gespreksmodus keuze (samen/zelfstandig/follow-up)
- Caseload N2 overzicht

### 👥 Karin (Praktijk):
**⚠️ Verbeterpunten:**
- Te veel velden voor een eerste scherm
- Geboortedatum voelt formeel, kan intimiderend zijn
- **Suggestie:** Optioneel maken of vervangen door "leeftijdscategorie"
- **Prioriteit:** HIGH

### 💬 Lisa (Cliënt):
**⚠️ Privacy-gevoel:**
- Geboortedatum direct invullen voelt als "intake", niet als gesprek
- **Suggestie:** Verplaats naar optionele metadata achteraf
- **Prioriteit:** HIGH

### 🏛️ Jan (Beleid):
**⚠️ Data-kwaliteit:**
- Leeftijd is essentieel voor demografische analyse
- **Suggestie:** Behoud, maar maak duidelijker WAAROM (bijv. "Voor passende voorbeelden")
- **Prioriteit:** HIGH → Compromis nodig (Lisa vs Jan)

### 🎨 Marie (Visual):
**⚠️ Verbeterpunten:**
- Doelgroep-chips zijn functioneel maar saai
- Gespreksmodus knoppen kunnen visueel duidelijker
- Caseload overzicht is te technisch
- **Prioriteit:** MEDIUM

---

## Screen 3: Hulpvraag Focus (🎯) - Track A

**Huidige staat:**
- Vrij tekstveld: "Wat wil je bereiken?"
- Domainkeuze (1-3 domeinen)
- "Wie zou kunnen helpen?" (eerste gedachte)

### 💬 Lisa (Cliënt):
**✅ Excellent:**
- Vraagt naar MIJ, niet naar wat er mis is
- Open vraag geeft ruimte

**⚠️ Verbeterpunt:**
- Leeg tekstveld kan intimiderend zijn
- **Suggestie:** Placeholder met voorbeelden
- **Prioriteit:** MEDIUM

### 👥 Karin (Praktijk):
**✅ Goed:**
- Focust gesprek meteen
- Bespaart tijd door domein-pre-selectie

**⚠️ Verbeterpunt:**
- Soms weten cliënten niet welk domein past
- **Suggestie:** "Weet ik niet" optie → dan automatisch naar volledige scan
- **Prioriteit:** HIGH

### 📊 Bram (Methodologie):
**✅ Excellent:**
- Track A (hulpvraag-gedreven) is methodologisch sterk
- Voorkomt "alles invullen" als het niet nodig is

**⚠️ Verbeterpunt:**
- Domein-keuze UI kan duidelijker (nu klein grid)
- **Prioriteit:** MEDIUM

---

## Screen 4: Quick Scan (🚦) - Track A

**Huidige staat:**
- Alle 11 domeinen, traffic light (🟢🟡🔴)
- Compact overzicht
- Doel: Rode en oranje vlaggen detecteren

### 🏥 Suus (GGZ/Complex):
**✅ Excellent:**
- Voorkomt dat we iets belangrijks missen
- Snel scannen van risico's

**⚠️ Verbeterpunt:**
- Traffic light is intuïtief, maar sommige mensen twijfelen tussen oranje/rood
- **Suggestie:** Tooltip met uitleg bij hover
- **Prioriteit:** MEDIUM

### 👥 Karin (Praktijk):
**✅ Goed:**
- Snel (30 seconden)
- Voorkomt verrassing later ("Oh, ik had dit ook moeten noemen")

**⚠️ Verbeterpunt:**
- Soms voelt het als "toch alles invullen"
- **Suggestie:** Duidelijker uitleggen: "Dit is een veiligheidscheck, duurt 30 sec"
- **Prioriteit:** HIGH

---

## Screen 5: Triage (👥)

**Huidige staat:**
- Stoplicht-grid voor geselecteerde domeinen
- "Zelfstandig / Steun nodig / Urgent"
- Wie helpt er? (naam + type invullen)

### 👥 Karin (Praktijk):
**⚠️ GROOT PROBLEEM:**
- Dit scherm is TE BELANGRIJK maar voelt nu als "nog een invul-scherm"
- **Dit is de KERN:** Hier bepaal je waar steun vandaan komt
- **Suggestie:** Visueel veel prominenter maken, uitleggen waarom dit belangrijk is
- **Prioriteit:** CRITICAL

### 📊 Bram (Methodologie):
**⚠️ Methodologisch risico:**
- Als professionals hier snel doorheen klikken, missen we cruciale positionele data
- **Suggestie:** Dwing reflectie af door:
  - Verplichte velden voor rode/oranje domeinen
  - Visualisatie van netwerkpositie real-time tijdens invullen
- **Prioriteit:** CRITICAL

### 💬 Lisa (Cliënt):
**⚠️ Ervaring:**
- Voelt nu als "nog meer vragen"
- Begrijp niet waarom dit apart scherm is na quick scan
- **Suggestie:** Integreer met quick scan? Of leg beter uit waarom dit apart is
- **Prioriteit:** HIGH

### 🎨 Marie (Visual):
**⚠️ Design fails:**
- Grid is functioneel maar saai
- Geen visuele feedback tijdens invullen
- Netwerkpositie is hier ONZICHTBAAR terwijl het de kern is
- **Suggestie:** 
  - Real-time spider diagram naast grid
  - Kleur-coding per netwerktype
  - Animatie bij toevoegen van steunfiguren
- **Prioriteit:** CRITICAL

---

## Screen 6: Domains/Domeinscan (🤝)

**Huidige staat:**
- Accordion per domein
- Per domein: supporters toevoegen (naam, type, effect, rollen)
- Tabs per supporter voor details

### 👥 Karin (Praktijk):
**⚠️ Te complex:**
- Accordion met tabs = te veel lagen
- In gesprek is dit moeilijk te navigeren
- **Suggestie:** Vereenvoudig naar 1-niveau structuur
- **Prioriteit:** HIGH

### 💬 Lisa (Cliënt):
**⚠️ Overweldigend:**
- "Moet ik dit ALLEMAAL invullen?"
- Begrijp niet wat 'supporters' zijn (jargon!)
- **Suggestie:** Hernoem naar "Wie helpt je bij..."
- **Prioriteit:** HIGH

### 📊 Bram (Methodologie):
**✅ Data-rijkdom goed:**
- Details per supporter zijn waardevol voor analyse

**⚠️ Maar:**
- Risico dat people te snel doorheen gaan → slechte data
- **Suggestie:** Maak minimale vereiste duidelijk ("Naam + type is genoeg, rest is optioneel")
- **Prioriteit:** MEDIUM

---

## Screen 7: Network/Overzicht (📊)

**Huidige staat:**
- Spider diagram (SIJN netwerkkaart)
- Domein-overzichtstabel
- Mantelzorg alarm (als relevant)

### 📊 Bram (Methodologie):
**✅ EXCELLENT:**
- Spider diagram is de KERN van RPA visueel
- Mantelzorg alarm is cruciale innovatie

**⚠️ Verbeterpunt:**
- Spider diagram staat nu te klein/beneden
- **Suggestie:** Maak dit het HOOFDELEMENT van het scherm (groot, centraal)
- **Prioriteit:** HIGH

### 🎨 Marie (Visual):
**⚠️ Design:**
- Tabel is saai
- Spider diagram verdient animatie (smooth draw)
- **Suggestie:** Interactieve spider (klik op punt = zie details van dat domein)
- **Prioriteit:** MEDIUM

### 🏛️ Jan (Beleid):
**✅ Perfect voor rapportage:**
- Spider diagram = one-slide samenvatting
- Mantelzorg alarm = direct actie-item

**Suggestie:**
- Export knop toevoegen: "Deel dit overzicht met team"
- **Prioriteit:** LOW

---

## Screen 8: Reflectie (💭) - Track B

**Huidige staat:**
- Per domein: Haalbaar? Proportioneel? Plan? Verantwoordelijke? Evaluatiedatum?
- Ingeklapt per domein

### 👥 Karin (Praktijk):
**⚠️ Te lang:**
- Dit scherm voelt als "nog meer vragen"
- Na 20 minuten zijn cliënten moe
- **Suggestie:** Integreer met "Beweging kiezen" scherm (zie volgende)
- **Prioriteit:** MEDIUM

### 📊 Bram (Methodologie):
**⚠️ Timing:**
- Reflectie hoort NA bewegingsbesluit, niet ervoor
- Volgorde is nu verwarrend
- **Suggestie:** Verplaats naar na "Beweging kiezen"
- **Prioriteit:** HIGH

---

## Screen 9: Beweging Kiezen (🎯) - DE KERN!

**Huidige staat:**
- Per domein: Wat is het doel? Wat ga je doen? Welke beweging (stabiliseren/opschalen/afschalen/etc.)?
- Dit is DE KERN van positionele analyse

### 📊 Bram (Methodologie):
**🚨 CRITICAL:**
- Dit is het BELANGRIJKSTE scherm van heel Niveau 2
- Hier maak je de positionele keuze
- Maar het voelt nu als "zoveelste invulscherm"

**Suggestie:**
- Maak dit VISUEEL DOMINANT
- Voor-en-na visualisatie real-time tonen
- Prominente uitleg: "Dit is de kern - hier kies je bewust"
- **Prioriteit:** CRITICAL

### 🎨 Marie (Visual):
**⚠️ Visuele faal:**
- Geen verschil te zien met andere schermen
- Bewegingsrichtingen zijn tekst, niet visueel
- **Suggestie:**
  - Grote visuele keuze-knoppen met iconen
  - Live netwerkpositie update
  - Voor/na spider diagram vergelijking
- **Prioriteit:** CRITICAL

### 💬 Lisa (Cliënt):
**⚠️ Begrijpelijkheid:**
- Termen als "stabiliseren", "opschalen", "ontlasten" zijn jargon
- **Suggestie:** Plain language: "Zo blijft het", "Meer steun", "Andere mensen"
- **Prioriteit:** HIGH

---

## Screen 10: Team Besluit (🤝) - Nieuw

**Huidige staat:**
- Multidisciplinair: Wie is aanwezig? Regieafspraken per domein. Privacy consent. Akkoord cliënt.

### 👥 Karin (Praktijk):
**✅ EXCELLENT toevoeging:**
- Voorkomt regiediffusie
- Dwingt expliciete afspraken af

**⚠️ Maar:**
- Voelt nu als "nog EEN extra scherm"
- **Suggestie:** Optioneel maken (alleen bij MDO/team-casus)
- **Prioriteit:** MEDIUM

### 🏛️ Jan (Beleid):
**✅ Perfect:**
- Dit is wat gemeenten nodig hebben: wie doet wat?
- Privacy consent is AVG-proof

**Suggestie:**
- Exporteer dit als separaat document voor dossier
- **Prioriteit:** LOW

---

## Screen 11: Interventies (💡)

**Huidige staat:**
- Postcode-filter
- Interventies gefilterd op domein + postcode + doelgroep
- Lokale voorzieningen

### 🏥 Suus (GGZ):
**✅ Waardevol:**
- Concrete opties geven is belangrijk

**⚠️ Maar:**
- Lijst kan overweldigend zijn
- **Suggestie:** Maximeer op 3-5 interventies per domein (best match)
- **Prioriteit:** MEDIUM

### 💬 Lisa (Cliënt):
**⚠️ Te veel keuze:**
- "Moet ik hier nu kiezen? Of doet de professional dat?"
- **Suggestie:** Duidelijker: "Dit zijn suggesties, we kiezen samen"
- **Prioriteit:** MEDIUM

---

## Screen 12: Samenvatting (📄)

**Huidige staat:**
- Twee lagen: cliënt-overzicht en professionele details
- Gap-analyse (Track A)
- Compact overzicht + details accordion
- Creatief blok voor maatwerk
- Export knoppen

### 📊 Bram (Methodologie):
**✅ EXCELLENT:**
- Twee-lagen systeem is slim (Lisa-proof + Jan-proof)
- Gap-analyse is uniek en waardevol

**Suggestie:**
- Voor-en-na spider diagram vergelijking toevoegen
- **Prioriteit:** HIGH

### 🏛️ Jan (Beleid):
**✅ Perfect voor rapportage:**
- Export naar niveau 3 is goed
- "Creatief blok" vangt uitzonderingen op

**Suggestie:**
- Template voor gemeenteraad-rapportage
- **Prioriteit:** LOW

### 💬 Lisa (Cliënt):
**✅ Goed:**
- Cliënt-laag is begrijpelijk
- Ik kan dit delen met familie

**⚠️ Maar:**
- Nog steeds veel tekst
- **Suggestie:** Visuele samenvatting met iconen
- **Prioriteit:** MEDIUM

---

## 🎯 TOP PRIORITEITEN (CRITICAL/HIGH)

### CRITICAL (Direct aanpakken):
1. **Screen 5 (Triage):** Maak visueel dominant, real-time netwerkpositie tonen
2. **Screen 9 (Beweging):** DE KERN - visueel prominent maken, voor-en-na visualisatie
3. **Screen 6 (Domains):** Vereenvoudig navigatie (accordion + tabs = te complex)

### HIGH (Belangrijk):
4. **Screen 2 (Start):** Privacy-gevoel (geboortedatum), vereenvoudig
5. **Screen 3 (Hulpvraag):** Placeholders, "Weet ik niet" optie
6. **Screen 4 (Quick scan):** Uitleg toevoegen (veiligheidscheck)
7. **Screen 7 (Network):** Spider diagram groter/centraal
8. **Screen 8 (Reflectie):** Verplaats timing, integreer met beweging
9. **Screen 0 (Organisatie):** Uitleg waarom kiezen (Lisa)

### MEDIUM (Verbeteren):
- Visual upgrades (animaties, hover-states)
- Tekstuele verbeteringen (jargon → plain language)
- Interventies filteren (max 3-5 per domein)

---

## 🏆 OVERALL TEAM VERDICT

**Wat is goed:**
✅ Methodologie is sterk (Bram)
✅ Data-rijkdom voor beleid (Jan)
✅ Mantelzorg-alarm innovatie (Suus)
✅ Twee-lagen samenvatting (Lisa + Jan)

**Wat moet beter:**
⚠️ **Visuele hiërarchie:** Belangrijke schermen (triage, beweging) zijn niet prominent genoeg
⚠️ **Cognitieve load:** Te veel invulschermen zonder duidelijke motivatie
⚠️ **Real-time feedback:** Netwerkpositie is onzichtbaar tijdens invullen
⚠️ **Plain language:** Te veel jargon (supporters, stabiliseren, etc.)

**Kernvraag voor Laura:**
Wil je dat we **stap voor stap** de CRITICAL items aanpakken? Of eerst een **visuele redesign van het hele niveau 2** maken en dan implementeren?

---

**Advies team:**
Start met **Screen 5 (Triage)** en **Screen 9 (Beweging)** - dit zijn de twee KERN-schermen waar de methodologie tot leven komt. Als deze goed zijn, is de rest verbetering. Als deze slecht zijn, is de hele tool zwak.
