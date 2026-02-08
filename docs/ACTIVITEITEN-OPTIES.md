# Activiteiten Data Opties

## Huidige Situatie (v2.4)

Activiteiten zijn **statisch** gedefinieerd in de code met filtering op postcode-prefix (eerste 2 cijfers).

**Voordelen:**
- Snel, geen API calls nodig
- Werkt offline
- Volledige controle over kwaliteit

**Nadelen:**
- Niet actueel
- Beperkte dekking
- Handmatig onderhoud nodig

---

## Optie 1: Landelijke APIs (Beperkt beschikbaar)

### Sociale Kaart Nederland
- **Geen landelijke API** - elke gemeente heeft eigen systeem
- Voorbeelden: Mijn Buurtje (Amsterdam), Sociale Kaart Rotterdam
- Integratie vereist per gemeente

### VNG Gemeentelijke Websites API
- `https://data.overheid.nl/data/dataset/` - overheidsdatasets
- Meestal geen real-time activiteiten data

### Vrijwilligerswerk.nl
- Geen publieke API
- Zou scraping vereisen (niet aan te raden)

### UWV Werk.nl
- Alleen werk-gerelateerd
- Geen publieke API voor derden

**Conclusie:** Er is geen bruikbare landelijke API voor welzijnsactiviteiten in Nederland.

---

## Optie 2: GPT-Generatie (Aanbevolen)

Genereer activiteiten on-demand met GPT op basis van:
- Postcode/regio
- Relevante domeinen (laagste scores)
- Netwerktype

### Implementatie

```javascript
async function generateActiviteiten(postcode, lowestDomains, networkType) {
  const prompt = `Genereer 10-15 realistische welzijnsactiviteiten voor postcode ${postcode} (Nederland).
  
Focus op deze domeinen: ${lowestDomains.join(', ')}
Netwerktype: ${networkType}

Geef per activiteit:
- Naam (realistisch voor Nederlandse organisaties)
- Type (sport/sociaal/cursus/vrijwilliger)
- Adres (straat + plaats)
- Dagen en tijden
- Kosten
- Afstand van postcode (km)

Formaat: JSON array`;

  const response = await callGPT(prompt);
  return JSON.parse(response);
}
```

### Voordelen
- Dynamisch, altijd relevant
- Gepersonaliseerd per cliënt situatie
- Geen data-onderhoud nodig
- Schaalt automatisch

### Nadelen
- Niet 100% accurate (fictieve organisaties)
- API kosten
- Vertraagt pagina laden

### Hybrid Aanpak
1. **Statische basis** voor bekende regio's (zoals nu)
2. **GPT-aanvulling** voor:
   - Regio's zonder statische data
   - Extra suggesties op basis van cliënt profiel
   - "Meer suggesties" knop

---

## Optie 3: Community Database

Bouw een eigen database op via crowdsourcing.

### Model

```sql
CREATE TABLE activiteiten (
  id UUID PRIMARY KEY,
  naam VARCHAR(255) NOT NULL,
  type ENUM('sport','sociaal','cursus','vrijwilliger'),
  postcode_prefix CHAR(2),
  adres TEXT,
  dagen VARCHAR(100),
  tijden VARCHAR(100),
  kosten VARCHAR(100),
  lat DECIMAL(10,8),
  lon DECIMAL(11,8),
  toegevoegd_door UUID,
  geverifieerd BOOLEAN DEFAULT FALSE,
  actief BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

### Bijdrage Flow
1. Professionals voegen activiteiten toe vanuit de app
2. Andere professionals kunnen verifiëren/beoordelen
3. Automatische deactivatie na X maanden zonder verificatie

### Voordelen
- Accurate, door professionals samengesteld
- Gratis (geen API kosten)
- Community-gedreven onderhoud

### Nadelen
- Koude start probleem
- Vereist backend infrastructuur
- Kwaliteitscontrole nodig

---

## Aanbeveling

### Fase 1 (Nu - v2.4)
- **Statische data** uitbreiden per regio
- Activiteiten source toevoegen aan logging (`source: 'static'`)

### Fase 2 (v2.5-v2.6)  
- **GPT-suggesties** als aanvulling op statische data
- "Meer activiteiten zoeken" knop
- Source logging: `source: 'gpt'`

### Fase 3 (v3.0+)
- **Backend met database**
- Professionals kunnen activiteiten toevoegen
- Verificatie systeem
- Landelijke dekking via community

---

## API Integratie (Toekomst)

Als er lokale APIs beschikbaar zijn, integreer per gemeente:

```javascript
const gemeenteAPIs = {
  'amsterdam': {
    endpoint: 'https://api.amsterdam.nl/...',
    transform: (data) => mapToStandardFormat(data)
  },
  'rotterdam': {
    endpoint: 'https://api.rotterdam.nl/...',
    transform: (data) => mapToStandardFormat(data)
  }
};

async function fetchActiviteiten(postcode) {
  const gemeente = getGemeenteFromPostcode(postcode);
  const api = gemeenteAPIs[gemeente];
  
  if (api) {
    const data = await fetch(api.endpoint);
    return api.transform(data);
  }
  
  return staticActiviteiten.filter(...);
}
```
