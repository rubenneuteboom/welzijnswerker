# Storage Contract (N1/N2/N3)

## Sleutels

- `rpa_niveau1`
  - Schrijver: N1 (`netwerkanalyse.html` / `src/n1`)
  - Lezer: N1
  - Structuur: `{ answers: Record<string, 'goed'|'beter'|'actie'>, ageCategory: string|null }`

- `rpa_wijkdata`
  - Schrijver: N1 (`exportNaarN3` / wijkbijdrage)
  - Lezer: N3 (`strategisch.html` / `src/n3/import.js`)
  - Structuur: `Array<{ tijdstip: string, wijk: string, leeftijdscategorie: string, scores: Record<string, string|null> }>`

- `welzijnswerker_v2`
  - Schrijver: N2 (`positioneel.html` / `src/n2/state.js`)
  - Lezer: N2
  - Structuur: groot state-object (o.a. `scores`, `domainDetails`, `ondersteuningsstructuur`, `strategischeReflectie`)

- `rpa_niveau3_import`
  - Schrijver: N2 (`exportVoorStrategischeAnalyse`, plus contract via `src/n2/interop.js`)
  - Lezer: N3 (`checkNiveau2Import`, `src/n3/import.js`)
  - Structuur: geanonimiseerde export met `metadata`, `domeinen`, `interventies`, `netwerkpositie`, `stabilisatie`, `creatiefOplossing`, `coordinatie`

- `rpa_caseload`
  - Schrijver: N2 (caseload stapeling + demo laden)
  - Lezer: N3 (caseload-selectie)
  - Structuur: `Array<rpa_niveau3_import>`

- `rpa_niveau3_datum`
  - Schrijver: N2 (bij export)
  - Lezer: N3 (import context)
  - Structuur: ISO datumstring

## Schemas

- `src/shared/schema/n1WijkdataSchema.js`
  - Valideert huidige N1-shape (`wijk` + `scores`) en legacy-shape (`postcode` + `domein`)
- `src/shared/schema/n2ExportSchema.js`
  - Valideert N2 export (`metadata` object + `domeinen` array met domein `id`)
- `src/shared/schema/caseloadSchema.js`
  - Valideert/sanitizet caseload als array van geldige N2-exports
