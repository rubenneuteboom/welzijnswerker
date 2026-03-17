# Auto-Fill Rol Implementatie - 3 maart 2026

## ✅ WAT IS ER GEBOUWD?

Wanneer je in **Niveau 2 (Positionele Analyse)** een **professionele interventie** selecteert met een **vaste rol**, wordt het veld **"Welke rol?"** automatisch ingevuld.

---

## 🎯 HOE WERKT HET?

### **Stap 1: Gebruiker selecteert Type + Interventie**
```
Type steun: [🔵 Professioneel]

Wie helpt?  [Bewindvoering ▼] ← Gebruiker kiest
```

### **Stap 2: Systeem checkt of er een vaste rol is**
- JavaScript functie: `getRolVoorInterventie('bewindvoering')`
- Kijkt in mapping object: `interventieRolMapping`

### **Stap 3: Als vaste rol bestaat → Auto-fill**
```
Welke rol?  [Anders (zie notitie) ▼] ← Automatisch geselecteerd
            ↓
            [Bewindvoerder - beheert mijn financiën juridisch, betaalt rekeningen, beschermt tegen schulden]
            ↑ Automatisch ingevuld tekstvenster (aanpasbaar!)
```

### **Stap 4: Als GEEN vaste rol → Handmatige dropdown**
```
Type steun: [🟢 Informeel]

Wie helpt?  [Buurvrouw]
            ↓
Welke rol?  [-- Selecteer rol -- ▼] ← Huidige dropdown blijft:
            • Helpt met boodschappen
            • Biedt gezelschap
            • Luisterend oor
            • etc.
```

---

## 📋 GE-MAPPED INTERVENTIES (30 stuks)

### 💰 FINANCIËN (4)
| Interventie key | Auto-fill rol |
|-----------------|---------------|
| `bewindvoering` | Bewindvoerder - beheert mijn financiën juridisch, betaalt rekeningen, beschermt tegen schulden |
| `budgetbeheer` | Budgetbeheerder - beheert mijn budget, betaalt vaste lasten, geeft mij leefgeld |
| `budgetcoach` | Budgetcoach - leert mij budgetteren, overzicht houden van inkomsten en uitgaven |
| `schuldhulp` | Schuldhulpverlener - helpt schulden saneren, contact met schuldeisers, afbetalingsregeling treffen |

### 💼 DAGBESTEDING (4)
| Interventie key | Auto-fill rol |
|-----------------|---------------|
| `ips` | IPS-jobcoach - helpt snel aan werk komen, begeleidt op de werkvloer, blijvende ondersteuning |
| `werkcoach` | Werkcoach - begeleidt naar werk, helpt met solliciteren |
| `jobcoach` | Jobcoach - begeleidt op de werkplek, helpt met taken, werkt aan zelfstandigheid |
| `re-integratie` | Re-integratiecoach - begeleidt terug naar werk na ziekte of uitval |

### 🧠 GGZ (4)
| Interventie key | Auto-fill rol |
|-----------------|---------------|
| `ambulante-ggz` | GGZ-behandelaar - intensieve psychiatrische zorg thuis, medicatie, crisis opvangen |
| `psycholoog` | Psycholoog - psychologische behandeling, gesprekken, therapie |
| `psychiater` | Psychiater - psychiatrische behandeling, medicatie, diagnose |
| `casemanager-ggz` | Casemanager GGZ - coördineert zorg, bewaakt behandelplan |

### 🏠 HUISVESTING (2)
| Interventie key | Auto-fill rol |
|-----------------|---------------|
| `woonbegeleiding` | Woonbegeleider - helpt zelfstandig wonen, leert huishouden, budgetteren, problemen oplossen |
| `woningcorporatie` | Woningconsulent - bemiddelt sociale huurwoning, adviseert over woonmogelijkheden |

### 👨‍👩‍👧 HUISELIJK (4)
| Interventie key | Auto-fill rol |
|-----------------|---------------|
| `gezinscoach` | Gezinscoach - begeleidt gezin, helpt met opvoeding en gezinsdynamiek |
| `relatietherapie` | Relatietherapeut - helpt relatieproblemen oplossen, gesprekken met partner |
| `jeugdzorg` | Jeugdzorgwerker - begeleidt gezin met kinderen, hulp bij opvoeding |
| `veilig-thuis` | Consulent Veilig Thuis - gespecialiseerde hulp bij huiselijk geweld of kindermishandeling |

### 💪 LICHAMELIJK (5)
| Interventie key | Auto-fill rol |
|-----------------|---------------|
| `wijkverpleging` | Wijkverpleegkundige - verpleegkundige zorg thuis: medicatie, wondverzorging, controles |
| `thuiszorg` | Thuiszorgmedewerker - persoonlijke verzorging, huishoudelijke hulp |
| `fysiotherapeut` | Fysiotherapeut - behandelt lichamelijke klachten, oefentherapie, pijnbestrijding |
| `ergotherapeut` | Ergotherapeut - helpt met dagelijkse handelingen, oefent vaardigheden, adviseert hulpmiddelen |
| `huisarts` | Huisarts - medische zorg, doorverwijzen, medicatie voorschrijven |

### 🚭 VERSLAVING (1)
| Interventie key | Auto-fill rol |
|-----------------|---------------|
| `verslavingszorg` | Verslavingscounselor - helpt stoppen met verslaving, begeleiding, behandeling |

### 🛁 ADL (1)
| Interventie key | Auto-fill rol |
|-----------------|---------------|
| `wmo-begeleiding` | WMO-begeleider - begeleidt bij zelfredzaamheid, dagelijkse handelingen |

### ⚖️ JUSTITIE (1)
| Interventie key | Auto-fill rol |
|-----------------|---------------|
| `reclassering` | Reclasseringswerker - toezicht na detentie, begeleiding bij re-integratie |

---

## 🔴 NIET GE-MAPPED (blijft handmatige dropdown)

Deze interventies hebben **geen vaste rol** omdat:
- Te breed (bijv. "maatschappelijk-werk" - kan wel 10 verschillende rollen hebben)
- Meerdere rollen mogelijk (bijv. "Eigen Kracht Conferentie" - coördinator? netwerklid?)
- Situatie-afhankelijk (bijv. "vrijwilligerswerk" - welke activiteit precies?)

**Voorbeelden:**
- Maatschappelijk werk (te breed)
- Eigen Kracht Conferentie (meerdere rollen)
- Netwerkberaad SIJN/RPA (meerdere rollen)
- Alle informele/collectieve interventies (situatie-afhankelijk)

---

## 🎨 UX DETAILS

### **Auto-filled veld ziet er zo uit:**
- Rol dropdown: **"Anders (zie notitie)"** is geselecteerd
- Tekstveld verschijnt met **grijze placeholder-achtige tekst** (maar wel bewerkbaar)
- Gebruiker kan **altijd aanpassen** als het niet klopt

### **Feedback aan gebruiker:**
- Console log: `🤖 Auto-fill rol: [beschrijving]`
- Visueel: veld is direct ingevuld (niet leeg)

---

## 🧪 TESTEN

### **Test 1: Professioneel met vaste rol**
1. Kies domein "Financiën"
2. Selecteer "🔵 Professioneel"
3. Kies "Bewindvoering"
4. **Verwacht:** Rol veld vult automatisch met "Bewindvoerder - beheert mijn financiën..."

### **Test 2: Professioneel zonder vaste rol**
1. Kies domein "Dagbesteding"
2. Selecteer "🔵 Professioneel"
3. Kies "Maatschappelijk werk"
4. **Verwacht:** Rol dropdown blijft leeg, gebruiker kiest handmatig

### **Test 3: Informeel netwerk**
1. Kies domein "Financiën"
2. Selecteer "🟢 Informeel"
3. Kies "Buurvrouw"
4. **Verwacht:** Rol dropdown met algemene activiteiten (boodschappen, gezelschap, etc.)

### **Test 4: Auto-fill aanpassen**
1. Kies "Bewindvoering" (auto-fills)
2. Pas tekst aan naar "Bewindvoerder-trainee - leert mijn financiën te beheren"
3. Sla op
4. **Verwacht:** Aangepaste tekst blijft behouden

---

## 🔧 TECHNISCHE DETAILS

### **Bestanden aangepast:**
- `positioneel.html` (regel ~12808 + ~16786)

### **Toegevoegde code:**
1. **Mapping object:** `interventieRolMapping` (30 interventies)
2. **Helper functie:** `getRolVoorInterventie(key)`
3. **Auto-fill logica in:** `saveSteunDetail()` functie

### **Code snippet:**
```javascript
// In saveSteunDetail() functie:
if (type === 'formeel' && wie) {
    const autoRol = getRolVoorInterventie(wie);
    if (autoRol) {
        // Selecteer "anders" optie
        rolSelect.value = 'anders';
        
        // Vul tekstveld automatisch
        const inputVeld = andersDiv.querySelector('input');
        inputVeld.value = autoRol;
        
        // Sla op in state
        state.steunDetails[domeinId].rol = 'anders';
        state.steunDetails[domeinId].rolAnders = autoRol;
    }
}
```

---

## ✅ STATUS: KLAAR VOOR TESTEN

**Volgende stappen:**
1. **Test** de functionaliteit in de browser
2. **Feedback** van team (Karin, Lisa, Bram)
3. **Aanpassen** beschrijvingen indien nodig
4. **Uitbreiden** naar meer interventies indien gewenst

**Bug? Feedback?** → Pas mapping aan of auto-fill logica.

