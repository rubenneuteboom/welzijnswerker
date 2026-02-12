# LEAN WORKFLOW REFACTOR PLAN

## Huidige structuur:
- screen-intro (0)
- screen-start (1)  
- screen-hulpvraag (2) - oriëntatie/stabilisatie
- screen-domains (3) - domeinscan
- screen-network (4) - LIJKT NIET GEBRUIKT?
- screen-results (5) - bevat: spider + netwerkkaart + interventies
- screen-samenvatting (6)

## LEAN structuur (gewenst):
- screen-intro (0) ✅ (blijft)
- screen-start (1) ✅ (blijft)
- screen-orientatie (2) ✅ (= hulpvraag, hernoemen)
- screen-domains (3) ✅ (blijft, maar sociaal naar 4 vragen)
- screen-overzicht (4) ✅ (tabel, bestaat dit al?)
- screen-netwerk (5) **NIEUW** - alleen positie + "Klopt dit?"
- screen-beweging (6) **NIEUW** - bewegingskeuze
- screen-interventies (7) **NIEUW** - interventies voor gekozen beweging
- screen-samenvatting (8) - aanpassen

## Acties:
1. ✅ Tabs verwijderd
2. ⏳ Sociaal netwerk: 5 → 4 vragen (verbondenheid weg)
3. ⏳ Spider diagram verwijderen
4. ⏳ screen-results opsplitsen in 3 nieuwe screens
5. ⏳ Samenvatting aanpassen (beoogde beweging toevoegen)
6. ⏳ Navigation/progressbar aanpassen (8 stappen i.p.v. 6)

## Beslissing nodig:
- Welke vraag verwijderen uit sociaal netwerk? (verbondenheid lijkt overlap met vraag 1)
