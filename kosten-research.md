# Kosten research - RPA Niveau 3

## Doel
Realistische kostentarieven per type ondersteuning voor strategische impact analyse.

## Bronnen om te raadplegen
- **CBS Wmo cijfers**: https://www.cbs.nl (zoek: "Wmo kosten gemeente")
- **NZa tarieven**: https://www.nza.nl (Zorgzwaartepakketten, prestatiebeschrijvingen)
- **Trimbos GGZ kosten**: https://www.trimbos.nl (kostenstudies GGZ)
- **VNG Wmo publicaties**: https://vng.nl/wmo (gemeentelijke inkoop)
- **Nivel / Zorginstituut**: Kostenoverzichten zorg en ondersteuning

## Voorlopige tarieven (te valideren)

### INFORMEEL
**€0 - €200 per maand**
- Geen directe kosten gemeente
- Wel: indirecte kosten mantelzorg (arbeidsuitval, belasting)
- Geschatte maatschappelijke kosten: €50-200/maand (optioneel)

### COLLECTIEF
**€50 - €300 per maand**

#### Welzijn / Sociaal
- Buurthuis/wijkcentrum toegang: €30-50/maand
- Groepsactiviteiten (sport, cultuur): €50-100/maand
- Maatjesprojecten: €75-150/maand
- Schuldhulpmaatje: €100-150/maand

#### Licht ondersteuning
- Dagbesteding groep (2x/week): €200-300/maand
- Welzijnswerk begeleiding licht: €100-200/maand

### FORMEEL - AMBULANT
**€400 - €1500 per maand**

#### Thuiszorg / Hulp bij huishouden
- 2 uur per week: €300-400/maand
- 5 uur per week: €800-1000/maand

#### Begeleiding Wmo
- Begeleiding groep (4u/week): €400-600/maand
- Begeleiding individueel licht (2u/week): €600-800/maand
- Begeleiding individueel intensief (8u/week): €1200-1500/maand

#### GGZ Ambulant
- FACT/ACT begeleiding: €600-900/maand
- Ambulante behandeling (wekelijks): €400-700/maand
- Intensieve ambulante zorg: €1000-1500/maand

#### Schuldhulpverlening formeel
- Budgetbeheer basis: €150-250/maand
- Bewindvoering: €300-500/maand

### FORMEEL - VERBLIJF
**€2000 - €8000 per maand**

#### Beschermd wonen
- Beschermd wonen begeleiding: €2000-2500/maand
- Beschermd wonen + behandeling: €3000-4000/maand

#### GGZ Klinisch
- Klinische opname GGZ: €5000-8000/maand
- Deeltijdbehandeling (dagbehandeling): €2000-3000/maand

#### Zorgverlof  Gehandicaptenzorg
- Verblijf + zorg ZZP 3-4: €3000-4500/maand
- Verblijf + zorg ZZP 5-7: €5000-8000/maand

## Aannames voor RPA instrumenten

### Niveau 3 - Defaults (conservatief)
```javascript
informeel: €0        // Geen directe kosten
collectief: €150     // Gemiddeld welzijn + lichte groepsactiviteiten
formeel: €800        // Gemiddeld ambulante begeleiding individueel
```

### Verfijning optie 1: Per domein
```javascript
domeinen: {
  financien: {
    informeel: 0,
    collectief: 100,  // Schuldhulpmaatje
    formeel: 400      // Budgetbeheer/bewindvoering
  },
  ggz: {
    informeel: 0,
    collectief: 150,  // Ervaringsdeskundige groep
    formeel: 900      // FACT team / ambulant
  },
  wonen: {
    informeel: 0,
    collectief: 200,  // Woongroep ondersteuning
    formeel: 2500     // Beschermd wonen
  },
  // etc voor alle 11 domeinen
}
```

### Verfijning optie 2: Intensiteit
```javascript
// In niveau 2 vragen: "Hoeveel uur begeleiding per week?"
// Berekening niveau 3:
uurTarief = 50  // €50/uur professional (all-in)
maandKosten = uren * 4 * uurTarief

// Voorbeeld: 4u/week = 4 * 4 * 50 = €800/maand
```

## Landelijke gemiddelden (indicatief)

### Wmo uitgaven per inwoner (CBS 2023)
- Gemiddeld per inwoner: €380/jaar
- Alleen Wmo-cliënten: ~€2500/jaar (= ~€200/maand)

### GGZ kosten (Trimbos indicatief)
- Ambulante basis: €80-120 per contactuur
- FACT/ACT: €15.000-25.000 per jaar (€1200-2000/maand)
- Klinisch: €250-400 per dag (€7500-12000/maand)

### Beschermd wonen (VNG benchmark 2023)
- €75.000 - €100.000 per cliënt per jaar
- = €6.250 - €8.300 per maand

## Implementatie advies

### Fase 1: Default eenvoudig
- Informeel: €0
- Collectief: €150
- Formeel: €800
- **+ Bronvermelding**: "Gebaseerd op VNG/Trimbos gemiddelden 2024"
- **+ Aanpasbaar per regio**

### Fase 2: Per domein verfijnd
- 11 domeinen × 3 draaglagen = 33 instelbare tarieven
- Met defaults gebaseerd op bovenstaande research

### Fase 3: Intensiteit meenemen
- Niveau 2 vraagt: "Hoeveel uur/week ondersteuning?"
- Niveau 3 berekent: uren × 4 × uurtarief

## TO DO - Validatie
- [ ] CBS Wmo cijfers 2024 opzoeken
- [ ] NZa tarieven 2025 checken
- [ ] Trimbos laatste GGZ kostenstudie (2023/2024)
- [ ] VNG benchmark beschermd wonen 2024
- [ ] Gemeentelijke tarieven overleggen (Utrecht/Amsterdam/Rotterdam)
- [ ] Contact Suus (Trimbos) - heeft zij actuele cijfers?
- [ ] Contact Jan (Wmo adviseur) - wat zijn realistische tarieven?

## Methodologische transparantie (Bram)
- Alle aannames EXPLICIET vermelden in niveau 3
- Bronnen per tarief tonen
- Duidelijk maken: "Dit zijn gemiddelden, pas aan voor jouw situatie"
- Optie: "Conservatieve schatting" vs "Realistische schatting" vs "Hoge schatting"

## Data-gedreven (Peter, zorgverzekeraar)
- Liefst gebaseerd op daadwerkelijke gemeentelijke inkoop
- Regionale variatie is groot (Amsterdam vs platteland)
- Belangrijk: vergelijk appels met appels (zelfde zorgzwaarte)
