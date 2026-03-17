# RPA Niveau 2 - Multidisciplinaire Verbeteringen

## Implementatie Status: ✅ VOLTOOID

### Kern Functionaliteit
1. **Regiedrager-keuze** per domein (verplicht) → voorkomt regiediffusie
2. **Multidisciplinair team-scherm** → gezamenlijke besluitvorming
3. **Automatische netwerkpatroon-detectie** → 5 patronen met scores
4. **Niveau 3 export** → JSON met patronen, regiedragers, kosten-tags

### Gedetecteerde Patronen
- Overbelaste mantelzorg (score 0-10)
- Formele dominantie (>60% formeel)
- Netwerkarmoede (<3 personen, geen collectief)
- Regiediffusie (>2 onduidelijke domeinen)
- Systeemdruk (formeel + overbelast)

### Export Formaat
```json
{
  "netwerkpatronen": { "labels": [], "scores": {} },
  "regiedragers": [{ "domein": "", "regiedrager": "" }],
  "bewegingen": [{ "domein": "", "richting": "" }],
  "interventies": [{ "naam": "", "kostenTag": "formeel|preventie|informeel" }],
  "mantelzorgOverbelasting": 0-10
}
```

### Schermvolgorde
1. Start
2. Triage (focusgebieden)
3. Netwerkoverzicht
4. Beweging (+ regiedrager per domein)
5. Reflectie
6. **Team besluit** (NIEUW)
7. Interventies
8. Samenvatting (+ patronen + export knop)

---

**Commit:** `7e9b6c2` - feat: Add multidisciplinary features to level 2
**GitHub:** https://github.com/rubenneuteboom/welzijnswerker (public)
