# Interventies Implementatie Plan

**Doel:** Evidence-based interventies per domein in positioneel.html

---

## HUIDIGE SITUATIE

**Locatie in code:**
- Lijn ~12694: `getMethodischeInterventiesVoorContext()`
- Lijn ~12720: `getInterventieMetadata()` met database
- De database bevat nu ~10 interventies (schuldhulp, budgetcoach, ambulante, etc.)

**Huidige logica:**
1. Interventies gekoppeld aan bewegingsrichting (formeel/collectief/informeel)
2. Metadata: evidence, kosten, beschikbaarheid, contact
3. Filtering op postcode (Amsterdam 10xx-13xx)
4. TOP 5 selectie

---

## NIEUWE AANPAK

### **STAP 1: Database uitbreiden** 
Per domein evidence-based interventies toevoegen (~80 interventies totaal)

### **STAP 2: Domein-filtering**
Niet alleen bewegingsrichting, maar ook **domein**

### **STAP 3: Vereenvoudiging**
- Geen postcode filtering (te complex)
- Wel: Landelijk/Amsterdam beschikbaar

---

## IMPLEMENTATIE

### **Optie A: Grote refactor (4-6 uur)**
- Volledig nieuwe interventie database
- Per domein filtering
- Alle 80+ interventies
- Risico: bugs, veel testen

### **Optie B: Gefaseerd (iteratief)**
**Fase 1 (nu - 1u):**
- Top 5 interventies per domein toevoegen aan database
- Domein-filtering toevoegen
- Testen

**Fase 2 (later):**
- Uitbreiden naar volledige lijst
- Fine-tuning

---

## VOORSTEL: **Optie B - Fase 1**

**Top 5 per domein (55 totaal):**

### 1. FINANCIËN (5)
1. Eigen Kracht Conferentie - Financiën
2. Budgetcoaching  
3. Schuldhulpverlening
4. Budgetbeheer
5. Bewindvoering

### 2. DAGBESTEDING (5)
1. Individual Placement & Support (IPS)
2. Participatiecoaching
3. Jobcoaching
4. Vrijwilligerswerk begeleiding
5. Dagactiviteitencentra

### 3. HUISVESTING (5)
1. Housing First
2. Bemiddeling sociale huurwoning
3. Woonbegeleiding
4. Mantelzorg bij samenwonen
5. Eigen Kracht Conferentie - Wonen

### 4. HUISELIJKE RELATIES (5)
1. Eigen Kracht Conferentie - Gezin
2. STOP 4-7
3. Triple P
4. Relatietherapie
5. Veilig Thuis

### 5. GEESTELIJKE GEZONDHEID (5)
1. Netwerkberaad (SIJN)
2. Eigen Kracht Conferentie - GGZ
3. FACT-teams
4. CGT (Cognitieve Gedragstherapie)
5. Herstelacademie

### 6. LICHAMELIJKE GEZONDHEID (5)
1. Mantelzorgondersteuning
2. Leefstijlcoaching (GLI)
3. Chronische zorgprogramma's
4. Fysiotherapie
5. Wijkverpleging

### 7. VERSLAVING (5)
1. CRAFT (voor naasten)
2. Community Reinforcement Approach (CRA)
3. Motiverende Gespreksvoering (MI)
4. Substitutiebehandeling
5. Beschermd wonen met verslavingszorg

### 8. ADL (5)
1. Mantelzorg training
2. Ergotherapie
3. Hulpmiddelen (WMO)
4. Huishoudelijke hulp
5. Persoonlijke verzorging

### 9. SOCIAAL NETWERK (5)
1. Eigen Kracht Conferentie ⭐
2. Netwerkberaad (SIJN/RPA) ⭐
3. Maatjesprojecten
4. Buurtgerichte interventies
5. Participatieladder

### 10. PARTICIPATIE (5)
1. Vrijwilligerswerk begeleiding
2. Statushoudersbegeleiding
3. Taalcursussen + participatie
4. Buurtinitiatieven
5. Eigen Kracht Conferentie - Participatie

### 11. JUSTITIE (5)
1. Eigen Kracht Conferentie - Jeugdstrafrecht
2. Forensische zorg
3. Reclassering
4. Halt-programma
5. Justitieel Casemanagement

---

## CODE AANPASSINGEN

### 1. Database uitbreiden
```javascript
const interventieDatabase = {
    // PER DOMEIN
    'financien': [
        {
            naam: 'Eigen Kracht Conferentie - Financiën',
            beschrijving: 'Netwerk bedenkt samen financiële oplossingen',
            evidence: 'evidence-based',
            kosten: 'gratis',
            beschikbaarheid: 'direct',
            contact: { telefoon: '030-2310883', website: 'eigenkracht.nl' },
            beweging: 'informeel'
        },
        // etc.
    ],
    'dagbesteding': [...],
    // etc. voor alle 11 domeinen
};
```

### 2. Filtering toevoegen
```javascript
function getInterventiesVoorDomein(domeinId) {
    return interventieDatabase[domeinId] || [];
}
```

### 3. Rendering aanpassen
- Per domein de relevante interventies tonen
- Of: bij Beweging scherm per domein interventies

---

## TIJDSINSCHATTING

**Fase 1 (Top 5 per domein):**
- Database opbouwen: 45 min
- Code aanpassen: 30 min
- Testen: 15 min
- **Totaal: 1.5 uur**

**Wil je dat ik dit NU doe? Of eerst deze planning bespreken?**

---

Marie 🌈
