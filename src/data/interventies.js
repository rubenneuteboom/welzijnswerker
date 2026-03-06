// Geextraheerd uit positioneel-v4.0.html
export const INTERVENTIES = [
            {
                id: 'ekc',
                naam: 'Eigen Kracht Conferentie',
                beschrijving: 'Het netwerk rond de cliënt maakt zelf een plan. Informeel netwerk neemt de regie.',
                bewegingen: ['informeel', 'gemengd'],
                doelgroepen: ['jongeren', 'multiproblem', 'ggz', 'sociaalmaatschappelijk'],
                type: 'methodisch',
                link: 'https://www.eigen-kracht.nl',
                emoji: '👨‍👩‍👧'
            },
            {
                id: 'familiegesprek',
                naam: 'Informeel netwerkgesprek / familiegesprek',
                beschrijving: 'Gestructureerd gesprek met familie, vrienden en betrokkenen om steun en rolverdeling te bespreken.',
                bewegingen: ['informeel', 'gemengd', 'ontlasten'],
                doelgroepen: [], // alle doelgroepen
                type: 'methodisch',
                emoji: '💬'
            },
            {
                id: 'respijtzorg',
                naam: 'Respijtzorg',
                beschrijving: 'Tijdelijke vervanging van mantelzorger zodat die even op adem kan komen.',
                bewegingen: ['formeel', 'ontlasten'],
                doelgroepen: ['mantelzorgers', 'ouderen'],
                type: 'methodisch',
                emoji: '🛡️'
            },
            {
                id: 'mantelzorgondersteuning',
                naam: 'Mantelzorgondersteuning',
                beschrijving: 'Coaching, lotgenotencontact of praktische ondersteuning voor mantelzorgers.',
                bewegingen: ['collectief', 'ontlasten'],
                doelgroepen: ['mantelzorgers', 'ouderen'],
                type: 'methodisch',
                emoji: '🤝'
            },
            {
                id: 'schuldhulpmaatje',
                naam: 'Schuldhulpmaatje',
                beschrijving: 'Vrijwilliger helpt bij financiën en het aanvragen van voorzieningen.',
                bewegingen: ['collectief', 'gemengd'],
                doelgroepen: [], // alle doelgroepen
                type: 'methodisch',
                emoji: '💰'
            },
            {
                id: 'iht',
                naam: 'Intensieve Thuisbehandeling (IHT)',
                beschrijving: 'Intensieve psychiatrische behandeling thuis als alternatief voor opname.',
                bewegingen: ['formeel'],
                doelgroepen: ['ggz'],
                type: 'methodisch',
                emoji: '🏥'
            },
            {
                id: 'fact',
                naam: 'FACT (Flexible ACT)',
                beschrijving: 'Flexibele assertieve community behandeling voor mensen met ernstige psychiatrische aandoeningen.',
                bewegingen: ['formeel'],
                doelgroepen: ['ggz', 'multiproblem'],
                type: 'methodisch',
                emoji: '🧠'
            },
            {
                id: 'gezinsplan',
                naam: 'Gezinsplan / Familiegroepsplan',
                beschrijving: 'Gezin en netwerk stellen samen met professional een plan op. Licht alternatief voor EKC.',
                bewegingen: ['informeel', 'gemengd'],
                doelgroepen: ['jongeren', 'multiproblem'],
                type: 'methodisch',
                emoji: '📋'
            },
            {
                id: 'buurtbemiddeling',
                naam: 'Buurtbemiddeling',
                beschrijving: 'Onafhankelijke bemiddeling bij conflicten in de buurt of huiselijke omgeving.',
                bewegingen: ['collectief', 'gemengd'],
                doelgroepen: ['sociaalmaatschappelijk', 'multiproblem'],
                type: 'methodisch',
                emoji: '🏘️'
            },
            {
                id: 'dagbesteding',
                naam: 'Dagbesteding / activering',
                beschrijving: 'Gestructureerde dagactiviteiten voor zingeving, ritme en sociale contacten.',
                bewegingen: ['collectief', 'formeel'],
                doelgroepen: ['ggz', 'ouderen', 'multiproblem'],
                type: 'methodisch',
                emoji: '☀️'
            }
];

export function getInterventiesForDomein(domein) {
  const normalized = String(domein || '').trim().toLowerCase();
  if (!normalized) return INTERVENTIES;
  return INTERVENTIES.filter((interventie) => {
    if (Array.isArray(interventie.domeinen) && interventie.domeinen.length > 0) {
      return interventie.domeinen.some((d) => String(d).toLowerCase() === normalized);
    }
    if (Array.isArray(interventie.domein) && interventie.domein.length > 0) {
      return interventie.domein.some((d) => String(d).toLowerCase() === normalized);
    }
    if (typeof interventie.domein === 'string') {
      return interventie.domein.toLowerCase() === normalized;
    }
    const name = String(interventie.naam || '').toLowerCase();
    const description = String(interventie.beschrijving || '').toLowerCase();
    return name.includes(normalized) || description.includes(normalized);
  });
}

export function getInterventiesForDoelgroep(doelgroep) {
  const normalized = String(doelgroep || '').trim().toLowerCase();
  if (!normalized) return INTERVENTIES;
  return INTERVENTIES.filter((interventie) =>
    Array.isArray(interventie.doelgroepen) &&
    (interventie.doelgroepen.length === 0 ||
      interventie.doelgroepen.some((d) => String(d).toLowerCase() === normalized))
  );
}
