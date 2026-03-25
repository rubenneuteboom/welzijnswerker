# Status v4.2 Per-Domein Flow - 24 maart 2026, 21:13

## ✅ WAT WERKT

**Bestand:** `positioneel-v4.2-per-domein.html`  
**URL:** https://rubens-mac-mini.tail7aaadf.ts.net:3458/positioneel-v4.2-per-domein.html

### Werkende elementen:
1. ✅ Per-domein pagina (1 pagina per levensgebied)
2. ✅ Progressie indicator (Domein 1 van 11)
3. ✅ Hoe gaat dit? (3 knoppen: Prima/Gaat wel/Zwaar)
4. ✅ Is er steun? (4 knoppen: Zelfstandig/Aanwezig/Nodig/Urgent)
5. ✅ Type steun (3 knoppen: Informeel/Collectief/Professioneel) - altijd zichtbaar
6. ✅ Rol dropdown (met alle opties: Partner, Familie, Bewindvoerder, etc.)
7. ✅ Wie? (tekstveld voor naam)
8. ✅ Wat doet deze persoon? (dropdown + vrij tekstveld)
9. ✅ Navigatie (Vorige/Volgende knoppen)
10. ✅ Auto-save (localStorage)

### Data structuur:
- 11 SIJN domeinen
- Rollen per type (Informeel/Collectief/Professioneel)
- Acties per domein (Financiën: Administratie, Belasting, etc.)

## ⚠️ NOG TE VERBETEREN

### 1. Conditionele weergave
**Nu:** Alle velden altijd zichtbaar  
**Moet:** Type/Rol/Wie/Wat alleen tonen als "Steun aanwezig" gekozen

### 2. Dynamische dropdowns
**Nu:** Rol dropdown toont ALLE opties (informeel+collectief+professioneel)  
**Moet:** Alleen relevante opties tonen o.b.v. gekozen Type

### 3. Spinnenweb
**Nu:** Placeholder (groen blok met stats)  
**Moet:** Echte Chart.js spider chart die live update

### 4. Per-domein specifieke opties
**Nu:** Financiën opties voor alle domeinen  
**Moet:** Elke domein eigen Rol + Actie opties (GGZ andere dan Huisvesting)

### 5. Samenvatting pagina
**Nu:** Alert "Naar samenvatting..." bij laatste domein  
**Moet:** Echte samenvatting met overzicht alle 11 domeinen

## 🎯 CONCEPT (wat Laura wilde)

### Volledige flow per domein:
```
💰 FINANCIËN (Domein 1 van 11)

1. 😊 Hoe gaat dit?
   [Prima] [Gaat wel] [Zwaar]

2. 🤝 Is er steun?
   [Zelfstandig] [Aanwezig] [Nodig] [Urgent]

3. (als Aanwezig) Type:
   [Informeel] [Collectief] [Professioneel]

4. (als Aanwezig) Rol:
   Dropdown met relevante rollen

5. (als Aanwezig) Wie?
   Tekstveld: "Zus Marie"

6. (als Aanwezig) Wat doet deze persoon?
   Dropdown + vrij tekstveld

7. 🕸️ Je netwerk tot nu toe
   [Live spinnenweb] 🔴 0 🟡 1 🟢 0

[← Vorige] [Volgende →]
```

## 📂 BESTANDEN

**Productie:**
- `positioneel.html` - Originele v4 (21 schermen, werkt stabiel)
- `positioneel-v4-backup-20260324-2051.html` - Backup van vandaag

**Ontwikkeling:**
- `positioneel-v4.2-per-domein.html` - Nieuwe per-domein flow (werk in progress)

**Archief:**
- `archief/v5-experimenten/` - Mislukte v5 rebuild pogingen

## 🔧 TECHNISCHE NOTES

### JavaScript issues:
- `setSupport()` show/hide werkt niet betrouwbaar
- Dropdown dynamische update via `updateRolDropdown()` werkt niet
- Oplossing: Hardcoded alle opties in HTML (werkaround)

### Wat goed werkt:
- State management (localStorage)
- Navigatie tussen domeinen
- Button active states
- Layout responsive

## 📋 TODO VOLGENDE SESSIE

1. **Fix conditionele weergave** - Velden echt alleen tonen bij "Steun aanwezig"
2. **Dynamic dropdowns fixen** - JavaScript debugging waarom het niet werkt
3. **Per-domein data** - 11 verschillende sets van Rol + Actie opties
4. **Spinnenweb implementeren** - Chart.js integratie
5. **Samenvatting pagina** - Overzicht na domein 11
6. **Testen met echt scenario** - Emma + zus Marie doorlopen

## 💾 BACKUP COMMANDO

```bash
cd /Users/rubenneuteboom/Projects/welzijnswerker
cp positioneel-v4.2-per-domein.html positioneel-v4.2-per-domein-backup-$(date +%Y%m%d-%H%M).html
```

## 🎓 LESSONS LEARNED

1. **Start simpel** - Eerst HTML werkend, dan JavaScript dynamiek
2. **Test incrementeel** - Niet alles tegelijk bouwen
3. **Hardcode first** - Als JS niet werkt, hardcode als fallback
4. **Visual debugging** - Test knoppen beter dan console voor Laura
5. **Save vaak** - Backups voor elke grote wijziging

---

**Session end:** 21:13  
**Tokens gebruikt:** ~130k van 200k (65%)  
**Volgende sessie:** v4.2 afmaken + testen
