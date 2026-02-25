# Interventie Scherm Refactor Plan

## Probleem (uit team review):
- Te lang (50+ interventies)
- Geen prioritering
- Geen evidence-base
- Te veel jargon
- Geen praktische info

## Oplossing:

### 1. Interventie Database Structuur
```javascript
{
  id: "schuldhulp-maatje",
  naam: "Schuldhulpmaatje",
  beschrijving: "Vrijwilliger die helpt met administratie en contact met schuldeisers",
  domeinen: ['financien'],
  bewegingsrichtingen: ['stabiliseren', 'vervangen'],
  doelgroepen: ['algemeen', 'ouderen'],
  netwerktype: 'collectief',
  evidence: 'promising', // 'evidence-based', 'promising', 'practice-based'
  kosten: 'gratis',
  beschikbaarheid: 'wachtlijst-kort', // 'direct', 'wachtlijst-kort', 'wachtlijst-lang'
  contact: {
    organisatie: "Stichting Schuldhulpmaatje",
    telefoon: "020-1234567",
    website: "www.schuldhulpmaatje.nl",
    email: "info@schuldhulpmaatje.nl"
  },
  regio: ['1000-1099'], // Amsterdam postcodes
  tags: ['schulden', 'financieel', 'vrijwilliger']
}
```

### 2. Matching Algoritme (Score 0-100)
```
Score berekening:
- Domein match: +40 punten
- Bewegingsrichting match: +30 punten
- Doelgroep match: +15 punten  
- Netwerktype match (past bij huidige situatie): +10 punten
- Evidence level: +5 punten (evidence-based), +3 (promising), +1 (practice)

Threshold: 60+ punten = relevant
```

### 3. Presentatie (Top 5)
```
🥇 Schuldhulpmaatje (Score: 95)
   Vrijwilliger helpt met administratie...
   
   🟢 Evidence-based | 💰 Gratis | ⏱️ Direct beschikbaar
   
   📞 020-1234567 | 🌐 schuldhulpmaatje.nl
   
   [✅ Selecteer deze interventie]
```

## Implementatie Stappen:

1. ✅ Maak interventie database (20 min)
2. ✅ Bouw matching algoritme (15 min)
3. ✅ Nieuwe render functie (25 min)
4. ✅ Test met verschillende scenario's (10 min)

**Totaal:** ~70 min

## Te behouden:
- Postcode filtering
- Doelgroep filtering  
- Custom interventies toevoegen

## Te verbeteren:
- Van 50+ naar TOP 5
- Evidence indicators
- Praktische info (kosten, contact)
- Begrijpelijke taal
