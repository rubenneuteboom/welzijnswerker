# Welzijnswerker Datamodel v2.4

## Overzicht

Het datamodel is uitgebreid met historische tracking voor toekomstige dashboards.

## State Structuur

```javascript
{
  // Metadata
  version: '2.4',
  clientId: 'client_1707386400000',  // Unieke ID per cliënt
  createdAt: '2026-02-08T08:00:00Z',
  updatedAt: '2026-02-08T09:30:00Z',
  
  // Huidige assessment data
  mode: 'professional' | 'zelf',
  professionalName: string,
  postcode: string,
  clientName: string,
  clientBirthdate: string,
  hulpvraag: string,
  wens: string,
  scores: { [domainId]: 1-10 },
  notes: { [domainId]: string },
  network: Person[],
  ratings: { [personId]: 1-10 },
  ratingNotes: { [personId]: string },
  
  // UI state
  currentScreen: number,
  currentView: 'assessment' | 'kanban' | 'agenda',
  
  // Acties & planning
  kanbanCards: KanbanCard[],
  agendaActivities: AgendaActivity[],
  selectedActivities: number[],
  
  // Cache
  cachedProAdvice: string | null,
  cachedClientAdvice: string | null,
  
  // Historische tracking (nieuw in v2.4)
  history: {
    assessments: AssessmentSnapshot[],
    networkChanges: NetworkChange[],
    adviceLog: AdviceLog[],
    activityLog: ActivityLog[],
    kanbanLog: KanbanLog[]
  }
}
```

## Historische Tracking Types

### AssessmentSnapshot
Gemaakt bij belangrijke momenten (bijv. afsluiten assessment, periodieke review).

```javascript
{
  date: ISO8601,
  scores: { [domainId]: number },
  networkType: 'eenpersoons' | 'informeel' | 'gemengd' | 'formeel',
  networkSize: number,
  avgRating: number,
  lowestDomains: string[],
  kanbanStats: { todo, doing, done }
}
```

### NetworkChange
Logt alle wijzigingen in het netwerk.

```javascript
{
  date: ISO8601,
  action: 'add' | 'remove' | 'update',
  personId: number,
  personName: string,
  personType: string,
  networkSize: number
}
```

### AdviceLog
Houdt bij wanneer advies is gegenereerd.

```javascript
{
  date: ISO8601,
  type: 'client' | 'professional',
  contentLength: number,
  model: 'gpt-4o-mini'
}
```

### ActivityLog
Volgt interacties met activiteiten.

```javascript
{
  date: ISO8601,
  activityId: number,
  action: 'view' | 'select' | 'deselect' | 'complete',
  source: 'static' | 'api' | 'gpt'
}
```

### KanbanLog
Volgt voortgang op acties.

```javascript
{
  date: ISO8601,
  cardId: number,
  fromColumn: 'todo' | 'doing' | 'done',
  toColumn: 'todo' | 'doing' | 'done'
}
```

## Dashboard Mogelijkheden (Toekomst)

Met deze data kunnen we bouwen:

### 1. Trend Dashboard
- Domeinscores over tijd (lijngrafieken)
- Netwerk groei/krimp
- Gemiddelde tevredenheid trend

### 2. Voortgang Dashboard
- Kanban velocity (cards done per week)
- Activiteiten engagement
- Tijd tot voltooiing acties

### 3. Netwerk Analyse
- Netwerk type evolutie
- Verloop informeel vs. formeel
- Signalering risiconetwerken

### 4. Advies Effectiviteit
- Welke interventies worden gekozen
- Welke activiteiten leiden tot actie
- Advies → Actie conversie

## Multi-Client Support (Roadmap)

Het `clientId` veld maakt toekomstige multi-client ondersteuning mogelijk:

```javascript
// Toekomstig: Meerdere cliënten opslaan
localStorage.setItem('welzijnswerker_clients', JSON.stringify({
  'client_123': { ... },
  'client_456': { ... }
}));

localStorage.setItem('welzijnswerker_active', 'client_123');
```

## Migratie

Bij laden wordt automatisch gemigreerd van oudere versies:
- v2.3 → v2.4: `history` object wordt toegevoegd
- `clientId` en `createdAt` worden gezet bij eerste load
