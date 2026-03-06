// Geextraheerd uit positioneel-v4.0.html
export const ORGANISATIES = [
            // Sociaal wijkteam
            { id: 1, name: 'Sociaal Wijkteam Centrum', type: 'sociaal-wijkteam', typeName: 'Sociaal wijkteam', postcodes: ['10', '11', '12'], address: 'Stationsplein 25, Amsterdam', phone: '020-555 0100', website: 'www.swt-centrum.nl', icon: '🏛️', helpt: ['sociaal', 'huiselijk', 'participatie'], doelgroepen: ['algemeen'] },
            { id: 2, name: 'Wijkteam Noord', type: 'sociaal-wijkteam', typeName: 'Sociaal wijkteam', postcodes: ['10', '11'], address: 'Buikslotermeerplein 100, Amsterdam', phone: '020-555 0200', website: 'www.wijkteam-noord.nl', icon: '🏛️', helpt: ['sociaal', 'huiselijk', 'adl'], doelgroepen: ['algemeen'] },
            { id: 3, name: 'Sociaal Wijkteam Utrecht Overvecht', type: 'sociaal-wijkteam', typeName: 'Sociaal wijkteam', postcodes: ['35', '36'], address: 'Tiberdreef 8, Utrecht', phone: '030-286 0000', website: 'www.swt-overvecht.nl', icon: '🏛️', helpt: ['sociaal', 'participatie', 'dagbesteding'] },
            { id: 4, name: 'Buurtteam Rotterdam Zuid', type: 'sociaal-wijkteam', typeName: 'Sociaal wijkteam', postcodes: ['30', '31', '32'], address: 'Zuidplein 60, Rotterdam', phone: '010-267 0000', website: 'www.buurtteam-zuid.nl', icon: '🏛️', helpt: ['sociaal', 'huiselijk', 'financien'] },
            
            // GGZ
            { id: 5, name: 'GGZ Amsterdam', type: 'ggz', typeName: 'GGZ', postcodes: ['10', '11', '12', '13'], address: 'Arenaweg 7, Amsterdam', phone: '020-590 5000', website: 'www.ggz-amsterdam.nl', icon: '🧠', helpt: ['geestelijk', 'verslaving'], doelgroepen: ['ggz', 'multiproblem', 'jongeren', 'ouderen'] },
            { id: 6, name: 'Parnassia Groep Den Haag', type: 'ggz', typeName: 'GGZ', postcodes: ['25', '26', '27'], address: 'Monsterseweg 83, Den Haag', phone: '070-391 6666', website: 'www.parnassia.nl', icon: '🧠', helpt: ['geestelijk', 'verslaving'] },
            { id: 7, name: 'Altrecht Utrecht', type: 'ggz', typeName: 'GGZ', postcodes: ['35', '36', '37'], address: 'Lange Nieuwstraat 119, Utrecht', phone: '030-230 8500', website: 'www.altrecht.nl', icon: '🧠', helpt: ['geestelijk'] },
            { id: 8, name: 'GGZ Breburg', type: 'ggz', typeName: 'GGZ', postcodes: ['50', '51', '52'], address: 'Lage Witsiebaan 4, Tilburg', phone: '076-523 5000', website: 'www.ggzbreburg.nl', icon: '🧠', helpt: ['geestelijk', 'verslaving'] },
            
            // Schuldhulp
            { id: 9, name: 'Schuldhulpverlening Amsterdam', type: 'schuldhulp', typeName: 'Schuldhulpverlening', postcodes: ['10', '11', '12'], address: 'Weesperplein 4, Amsterdam', phone: '020-252 6000', website: 'www.schuldhulp-amsterdam.nl', icon: '💶', helpt: ['financien'], doelgroepen: ['algemeen', 'jongeren', 'multiproblem', 'sociaalmaatschappelijk'] },
            { id: 10, name: 'Kredietbank Rotterdam', type: 'schuldhulp', typeName: 'Schuldhulpverlening', postcodes: ['30', '31', '32'], address: 'Schiekade 830, Rotterdam', phone: '010-498 4000', website: 'www.kredietbank-rotterdam.nl', icon: '💶', helpt: ['financien'] },
            { id: 11, name: 'Budget Alert Eindhoven', type: 'schuldhulp', typeName: 'Schuldhulpverlening', postcodes: ['56', '57', '58'], address: 'Stadhuisplein 10, Eindhoven', phone: '040-238 6000', website: 'www.budgetalert.nl', icon: '💶', helpt: ['financien'] },
            { id: 12, name: 'PLANgroep Groningen', type: 'schuldhulp', typeName: 'Schuldhulpverlening', postcodes: ['97', '98', '99'], address: 'Gedempte Zuiderdiep 98, Groningen', phone: '050-367 8900', website: 'www.plangroep.nl', icon: '💶', helpt: ['financien'] },
            
            // Verslavingszorg
            { id: 13, name: 'Jellinek Amsterdam', type: 'verslavingszorg', typeName: 'Verslavingszorg', postcodes: ['10', '11', '12', '13'], address: 'Overschiestraat 65, Amsterdam', phone: '020-590 1515', website: 'www.jellinek.nl', icon: '🚭', helpt: ['verslaving', 'geestelijk'], doelgroepen: ['ggz', 'multiproblem', 'jongeren'] },
            { id: 14, name: 'Brijder Verslavingszorg', type: 'verslavingszorg', typeName: 'Verslavingszorg', postcodes: ['20', '21', '22', '23'], address: 'Schipholweg 3, Haarlem', phone: '088-358 8000', website: 'www.brijder.nl', icon: '🚭', helpt: ['verslaving'] },
            { id: 15, name: 'Novadic-Kentron', type: 'verslavingszorg', typeName: 'Verslavingszorg', postcodes: ['50', '51', '52', '53'], address: 'Hofveld 52, Vught', phone: '073-658 4600', website: 'www.novadic-kentron.nl', icon: '🚭', helpt: ['verslaving', 'geestelijk'] },
            
            // Maatschappelijk werk
            { id: 16, name: 'Stichting Dock Amsterdam', type: 'maatschappelijk-werk', typeName: 'Maatschappelijk werk', postcodes: ['10', '11', '12'], address: 'De Wittenstraat 25, Amsterdam', phone: '020-555 7777', website: 'www.dock.nl', icon: '🤝', helpt: ['sociaal', 'participatie', 'adl'], doelgroepen: ['algemeen', 'jongeren', 'sociaalmaatschappelijk'] },
            { id: 17, name: 'Welzijn Capelle', type: 'maatschappelijk-werk', typeName: 'Maatschappelijk werk', postcodes: ['29', '30'], address: 'Kerklaan 2, Capelle a/d IJssel', phone: '010-458 0888', website: 'www.welzijncapelle.nl', icon: '🤝', helpt: ['sociaal', 'dagbesteding'] },
            { id: 18, name: 'WijZijn Tilburg', type: 'maatschappelijk-werk', typeName: 'Maatschappelijk werk', postcodes: ['50', '51'], address: 'Hart van Brabantlaan 12, Tilburg', phone: '013-549 5000', website: 'www.wijzijntilburg.nl', icon: '🤝', helpt: ['sociaal', 'participatie'] },
            { id: 19, name: 'Humanitas Noord', type: 'maatschappelijk-werk', typeName: 'Maatschappelijk werk', postcodes: ['97', '98', '99'], address: 'Hereweg 120, Groningen', phone: '050-312 6000', website: 'www.humanitas-noord.nl', icon: '🤝', helpt: ['sociaal', 'huiselijk'] },
            
            // Huisvesting
            { id: 20, name: 'De Regenboog Groep', type: 'huisvesting', typeName: 'Huisvesting/opvang', postcodes: ['10', '11', '12'], address: 'Droogbak 1d, Amsterdam', phone: '020-570 9370', website: 'www.deregenboog.org', icon: '🏠', helpt: ['huisvesting', 'sociaal'], doelgroepen: ['multiproblem', 'sociaalmaatschappelijk'] },
            { id: 21, name: 'Leger des Heils Den Haag', type: 'huisvesting', typeName: 'Huisvesting/opvang', postcodes: ['25', '26', '27'], address: 'Loosduinsekade 222, Den Haag', phone: '070-308 5000', website: 'www.legerdesheils.nl', icon: '🏠', helpt: ['huisvesting', 'dagbesteding'] },
            { id: 22, name: 'Stichting Exodus Utrecht', type: 'huisvesting', typeName: 'Huisvesting/opvang', postcodes: ['35', '36'], address: 'Maliebaan 72, Utrecht', phone: '030-231 8888', website: 'www.exodus.nl', icon: '🏠', helpt: ['huisvesting', 'justitie'] },
            
            // Dagbesteding
            { id: 23, name: 'Cordaan Dagbesteding', type: 'dagbesteding', typeName: 'Dagbesteding', postcodes: ['10', '11', '12'], address: 'Postjesweg 1, Amsterdam', phone: '020-562 1234', website: 'www.cordaan.nl', icon: '💼', helpt: ['dagbesteding', 'sociaal'], doelgroepen: ['ouderen', 'algemeen'] },
            { id: 24, name: 'Ons Tweede Thuis', type: 'dagbesteding', typeName: 'Dagbesteding', postcodes: ['11', '12', '13'], address: 'Huizerweg 38, Aalsmeer', phone: '0297-382 000', website: 'www.onstweedethuis.nl', icon: '💼', helpt: ['dagbesteding', 'adl'], doelgroepen: ['ouderen', 'algemeen'] },
            { id: 25, name: 'Philadelphia Rotterdam', type: 'dagbesteding', typeName: 'Dagbesteding', postcodes: ['30', '31', '32'], address: 'Baan 74, Rotterdam', phone: '010-206 3500', website: 'www.philadelphia.nl', icon: '💼', helpt: ['dagbesteding', 'participatie'] },
            
            // Juridisch
            { id: 26, name: 'Het Juridisch Loket Amsterdam', type: 'juridisch', typeName: 'Juridisch', postcodes: ['10', '11', '12'], address: 'Vijzelstraat 20, Amsterdam', phone: '0900-8020', website: 'www.juridischloket.nl', icon: '⚖️', helpt: ['justitie', 'financien'], doelgroepen: ['algemeen', 'sociaalmaatschappelijk'] },
            { id: 27, name: 'Sociaal Raadslieden Rotterdam', type: 'juridisch', typeName: 'Juridisch', postcodes: ['30', '31', '32'], address: 'Coolsingel 40, Rotterdam', phone: '010-267 5555', website: 'www.rotterdam.nl/sociaalraadslieden', icon: '⚖️', helpt: ['justitie', 'huisvesting'] },
            { id: 28, name: 'Rechtswinkel Utrecht', type: 'juridisch', typeName: 'Juridisch', postcodes: ['35', '36', '37'], address: 'Nobelstraat 2a, Utrecht', phone: '030-230 4500', website: 'www.rechtswinkelutrecht.nl', icon: '⚖️', helpt: ['justitie'] },
            { id: 29, name: 'Bureau Slachtofferhulp', type: 'juridisch', typeName: 'Juridisch', postcodes: ['10', '11', '12', '25', '26', '30', '31', '35', '36', '50', '51', '97', '98'], address: 'Landelijk werkend', phone: '0900-0101', website: 'www.slachtofferhulp.nl', icon: '⚖️', helpt: ['justitie', 'geestelijk'], doelgroepen: ['algemeen'] },
            { id: 30, name: 'MEE Zuidoost Brabant', type: 'maatschappelijk-werk', typeName: 'Cliëntondersteuning', postcodes: ['56', '57', '58'], address: 'Luchthavenweg 81, Eindhoven', phone: '040-239 0900', website: 'www.meezuidoostbrabant.nl', icon: '🤝', helpt: ['adl', 'sociaal', 'dagbesteding'] }
];

export function getOrganisatiesForPostcode(postcodePrefix) {
  const normalized = String(postcodePrefix || '').slice(0, 2);
  if (!normalized) return ORGANISATIES;
  return ORGANISATIES.filter((org) =>
    Array.isArray(org.postcodes) && org.postcodes.includes(normalized)
  );
}

export function getOrganisatiesForDomein(domein) {
  const normalized = String(domein || '').trim().toLowerCase();
  if (!normalized) return ORGANISATIES;
  return ORGANISATIES.filter(
    (org) => Array.isArray(org.helpt) && org.helpt.some((h) => String(h).toLowerCase() === normalized)
  );
}
