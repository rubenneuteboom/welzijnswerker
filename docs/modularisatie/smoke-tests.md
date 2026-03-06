# Smoke Tests Modularisatie

## N1 -> N3 wijkdata

1. Open `netwerkanalyse.html`.
2. Vul alle domeinen in, kies eventueel leeftijd, ga naar resultaten.
3. Klik bijdrage aan wijkdata.
4. Open `strategisch.html` en ga naar Wijkdashboard.
5. Verwacht: nieuwe record zichtbaar en geen parse-errors.

## N2 export -> N3 import

1. Open `positioneel.html`.
2. Vul minimaal enkele domeinen/structuur in.
3. Gebruik `Naar strategische analyse`.
4. Open `strategisch.html`.
5. Verwacht: caseload of fallback import zichtbaar, analyseknop werkt.

## N2 caseload -> N3 caseload

1. Doe 2+ exports vanuit N2.
2. Open N3 en selecteer meerdere casussen.
3. Verwacht: geaggregeerde analyse rendert zonder fouten.

## Storage-check

1. Controleer in devtools localStorage:
2. `rpa_niveau1`, `rpa_wijkdata`, `welzijnswerker_v2`, `rpa_niveau3_import`, `rpa_caseload`, `rpa_niveau3_datum` bestaan conform flow.
