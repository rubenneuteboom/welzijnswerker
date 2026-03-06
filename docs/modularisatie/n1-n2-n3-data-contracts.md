# N1/N2/N3 Data Contracts

## `rpa_wijkdata` (N1 -> N3)

Actueel record uit N1:

```json
{
  "tijdstip": "2026-03-06T10:00:00.000Z",
  "wijk": "Leiden Noord",
  "leeftijdscategorie": "volwassene",
  "scores": {
    "financien": "beter",
    "ggz": "actie"
  }
}
```

Contract:
- array van records
- `wijk` verplicht als string
- `scores` object per domein-id

## `rpa_niveau3_import` (N2 -> N3)

Actuele exportstructuur uit N2 (`exportVoorStrategischeAnalyse`):

```json
{
  "metadata": {
    "version": "3.0",
    "exportDatum": "...",
    "bron": "RPA Positionele Analyse - Niveau 2",
    "doelgroepen": ["ggz"],
    "displayNaam": null,
    "caseloadId": "casus-..."
  },
  "domeinen": [
    {
      "id": "financien",
      "naam": "Financiën",
      "emoji": "💰",
      "stoplicht": "steun-nodig",
      "huidigeDraaglagen": ["professional"],
      "aantalSupporters": 1,
      "gewensteDraaglagen": ["collectief"],
      "bewegingsrichting": "afschalen",
      "methoden": [],
      "planKlopt": "ja",
      "heeftConcreetPlan": true,
      "duur": "3 maanden",
      "heeftVerantwoordelijke": true,
      "evaluatieDatum": "...",
      "clientReactie": "klopt",
      "clientBetwist": false
    }
  ],
  "interventies": [],
  "netwerkpositie": { "positie": "gemengd", "label": "Gemengd netwerk" },
  "stabilisatie": null,
  "creatiefOplossing": { "aanwezig": false },
  "coordinatie": {
    "regiehouder_aanwezig": false,
    "geplande_overleggen": []
  }
}
```

Contract:
- `metadata` object verplicht
- `domeinen` array verplicht
- elk domein minimaal `id` als string

## `rpa_caseload` (N2 -> N3)

Contract:
- array van N2 exportobjecten (`rpa_niveau3_import` shape)
- voor N3 selectie/analyse van meerdere casussen
