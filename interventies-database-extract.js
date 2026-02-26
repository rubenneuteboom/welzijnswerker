        const interventiesDatabasePerDomein = {
            'financien': [
                { naam: 'Eigen Kracht Conferentie - Financiën', beschrijving: 'Netwerk bedenkt samen financiële oplossingen', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'direct', contact: { telefoon: '030-2310883', website: 'eigenkracht.nl' } },
                { naam: 'Budgetcoaching', beschrijving: 'Leren omgaan met geld en budgetteren', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'direct', contact: { website: 'nibud.nl' } },
                { naam: 'Schuldhulpverlening', beschrijving: 'Professionele hulp bij schulden en herstructurering', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'direct', contact: { telefoon: '0800-8000', website: 'nvvk.nl' } },
                { naam: 'Budgetbeheer', beschrijving: 'Professioneel beheer van financiën', evidence: 'evidence-based', kosten: 'eigen-bijdrage', beschikbaarheid: 'direct', contact: { website: 'gemeente.amsterdam.nl' } },
                { naam: 'Bewindvoering', beschrijving: 'Juridisch beschermingsmaatregel bij financiële onbekwaamheid', evidence: 'evidence-based', kosten: 'eigen-bijdrage', beschikbaarheid: 'wachtlijst', contact: { telefoon: '088-7971000', website: 'rechtspraak.nl' } },
                // MANTELZORG-FINANCIEEL
                { naam: 'Mantelzorgcompliment gemeente', beschrijving: 'Financiële waardering gemeente (€250-500/jaar)', evidence: 'practice', kosten: 'gratis', beschikbaarheid: 'direct', contact: { website: 'amsterdam.nl/mantelzorg' }, mantelzorg: true }
            ],
            'dagbesteding': [
                { naam: 'Individual Placement & Support (IPS)', beschrijving: 'Snelle plaatsing werk met continue ondersteuning', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'direct', contact: { telefoon: '020-5901234', website: 'ipswerk.nl' } },
                { naam: 'Participatiecoaching', beschrijving: 'Begeleiding richting werk of vrijwilligerswerk', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'direct', contact: { website: 'gemeente.amsterdam.nl/participatiewet' } },
                { naam: 'Jobcoaching', beschrijving: 'Ondersteuning op de werkplek', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'direct', contact: { website: 'uwv.nl' } },
                { naam: 'Vrijwilligerswerk begeleiding', beschrijving: 'Hulp bij vinden en starten vrijwilligerswerk', evidence: 'promising', kosten: 'gratis', beschikbaarheid: 'direct', contact: { telefoon: '020-5851350', website: 'vrijwilligerscentraal.nl' } },
                { naam: 'Dagactiviteitencentra', beschrijving: 'Zinvolle dagbesteding voor wie niet kan werken', evidence: 'evidence-based', kosten: 'eigen-bijdrage', beschikbaarheid: 'wachtlijst', contact: { website: 'amsterdam.nl/zorg' } },
                // MANTELZORG-WERK interventies
                { naam: 'Mantelzorgverlof aanvragen', beschrijving: 'Hulp bij aanvragen kortdurend/langdurend zorgverlof bij werkgever (wettelijk recht)', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'direct', contact: { website: 'fnv.nl/mantelzorg', telefoon: '0800-0361' }, mantelzorg: true },
                { naam: 'Werkgeversgesprek mantelzorg', beschrijving: 'Begeleiding gesprek met werkgever over flexibele werktijden, thuiswerken, verlof', evidence: 'promising', kosten: 'gratis', beschikbaarheid: 'direct', contact: { website: 'mantelzorg.nl/werk' }, mantelzorg: true },
                { naam: 'Arbeidstijdaanpassing', beschrijving: 'Parttime werken, aangepaste uren, thuiswerken regelen', evidence: 'promising', kosten: 'inkomenseffect', beschikbaarheid: 'direct', contact: { website: 'werk.nl', telefoon: '0800-9899' }, mantelzorg: true },
                { naam: 'Re-integratie na zorgtijd', beschrijving: 'Terugkeer naar werk na periode mantelzorgverlof', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'direct', contact: { website: 'uwv.nl' }, mantelzorg: true }
            ],
            'huisvesting': [
                { naam: 'Housing First', beschrijving: 'Eerst woning, dan zorg - voor daklozen', evidence: 'evidence-based', kosten: 'huur', beschikbaarheid: 'wachtlijst', contact: { telefoon: '020-2515151', website: 'discus.nl' } },
                { naam: 'Bemiddeling sociale huurwoning', beschrijving: 'Hulp bij vinden betaalbare woonruimte', evidence: 'evidence-based', kosten: 'huur', beschikbaarheid: 'wachtlijst', contact: { website: 'woningnet.nl' } },
                { naam: 'Woonbegeleiding', beschrijving: 'Ondersteuning om zelfstandig te wonen', evidence: 'evidence-based', kosten: 'eigen-bijdrage', beschikbaarheid: 'direct', contact: { website: 'amsterdam.nl/wmo' } },
                { naam: 'Mantelzorg bij samenwonen', beschrijving: 'Inwonen bij familie met ondersteuning', evidence: 'promising', kosten: 'gratis', beschikbaarheid: 'direct', contact: { website: 'mantelzorg.nl' } },
                { naam: 'Eigen Kracht Conferentie - Wonen', beschrijving: 'Netwerk zoekt samen woonoplossing', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'direct', contact: { telefoon: '030-2310883', website: 'eigenkracht.nl' } }
            ],
            'huiselijke-relaties': [
                { naam: 'Eigen Kracht Conferentie - Gezin', beschrijving: 'Familie bedenkt samen oplossing gezinsproblemen', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'direct', contact: { telefoon: '030-2310883', website: 'eigenkracht.nl' } },
                { naam: 'STOP 4-7 (opvoedondersteuning)', beschrijving: 'Groepscursus opvoeden kinderen 4-7 jaar', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'direct', contact: { website: 'ggd.amsterdam.nl' } },
                { naam: 'Triple P (Positive Parenting)', beschrijving: 'Opvoedondersteuning op maat', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'direct', contact: { website: 'triplep.nl' } },
                { naam: 'Relatietherapie/systeemtherapie', beschrijving: 'Professionele hulp bij relatieproblematiek', evidence: 'evidence-based', kosten: 'eigen-bijdrage', beschikbaarheid: 'wachtlijst', contact: { website: 'ggz.nl' } },
                { naam: 'Veilig Thuis', beschrijving: 'Gespecialiseerde hulp bij huiselijk geweld', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'direct', contact: { telefoon: '0800-2000', website: 'veiligthuis.nl' } }
            ],
            'geestelijk': [
                { naam: 'Netwerkberaad (SIJN/RPA)', beschrijving: 'Netwerk activeren bij psychische problematiek', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'direct', contact: { website: 'sijn.nl' } },
                { naam: 'Eigen Kracht Conferentie - GGZ', beschrijving: 'Informeel netwerk mobiliseren', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'direct', contact: { telefoon: '030-2310883', website: 'eigenkracht.nl' } },
                { naam: 'FACT-teams', beschrijving: 'Intensieve ambulante behandeling', evidence: 'evidence-based', kosten: 'vergoed', beschikbaarheid: 'wachtlijst', contact: { telefoon: '0900-1450', website: 'ggzingeest.nl' } },
                { naam: 'CGT (Cognitieve Gedragstherapie)', beschrijving: 'Behandeling angst en depressie', evidence: 'evidence-based', kosten: 'vergoed', beschikbaarheid: 'wachtlijst', contact: { website: 'ggz.nl' } },
                { naam: 'Herstelacademie', beschrijving: 'Herstel in eigen regie met ervaringsdeskundigen', evidence: 'promising', kosten: 'gratis', beschikbaarheid: 'direct', contact: { website: 'herstelacademie.nl' } }
            ],
            'lichamelijk': [
                { naam: 'Mantelzorgondersteuning', beschrijving: 'Ondersteuning voor naasten die zorgen', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'direct', contact: { website: 'mantelzorg.nl' } },
                { naam: 'Leefstijlcoaching (GLI)', beschrijving: 'Gezondere leefstijl (bewegen, eten)', evidence: 'evidence-based', kosten: 'eigen-bijdrage', beschikbaarheid: 'direct', contact: { website: 'thuisarts.nl/gli' } },
                { naam: 'Chronische zorgprogramma's', beschrijving: 'Zelfmanagement chronische aandoeningen', evidence: 'evidence-based', kosten: 'vergoed', beschikbaarheid: 'direct', contact: { website: 'thuisarts.nl' } },
                { naam: 'Fysiotherapie', beschrijving: 'Behandeling lichamelijke klachten', evidence: 'evidence-based', kosten: 'vergoed', beschikbaarheid: 'direct', contact: { website: 'kngf.nl' } },
                { naam: 'Wijkverpleging', beschrijving: 'Verpleegkundige zorg thuis', evidence: 'evidence-based', kosten: 'vergoed', beschikbaarheid: 'direct', contact: { telefoon: '088-0100100', website: 'buurtzorg.nl' } }
            ],
            'verslaving': [
                { naam: 'CRAFT (voor naasten)', beschrijving: 'Training voor naasten van verslaafden', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'direct', contact: { website: 'jellinek.nl' } },
                { naam: 'Community Reinforcement Approach', beschrijving: 'Gedragsverandering met netwerkbetrokkenheid', evidence: 'evidence-based', kosten: 'vergoed', beschikbaarheid: 'wachtlijst', contact: { website: 'verslavingszorg.nl' } },
                { naam: 'Motiverende Gespreksvoering (MI)', beschrijving: 'Versterken eigen motivatie tot verandering', evidence: 'evidence-based', kosten: 'vergoed', beschikbaarheid: 'direct', contact: { website: 'verslavingszorg.nl' } },
                { naam: 'Substitutiebehandeling', beschrijving: 'Methadon/subutex bij opiaatverslaving', evidence: 'evidence-based', kosten: 'vergoed', beschikbaarheid: 'direct', contact: { website: 'ggd.amsterdam.nl' } },
                { naam: 'Beschermd wonen met verslavingszorg', beschrijving: 'Wonen + behandeling gecombineerd', evidence: 'evidence-based', kosten: 'eigen-bijdrage', beschikbaarheid: 'wachtlijst', contact: { website: 'amsterdam.nl/wmo' } }
            ],
            'adl': [
                { naam: 'Mantelzorg training', beschrijving: 'Naasten leren veilig te helpen', evidence: 'promising', kosten: 'gratis', beschikbaarheid: 'direct', contact: { website: 'mantelzorg.nl' } },
                { naam: 'Ergotherapie', beschrijving: 'Hulp bij zelfstandigheid dagelijkse handelingen', evidence: 'evidence-based', kosten: 'vergoed', beschikbaarheid: 'direct', contact: { website: 'ergotherapie.nl' } },
                { naam: 'Hulpmiddelen (WMO)', beschrijving: 'Voorzieningen die beperkingen compenseren', evidence: 'evidence-based', kosten: 'eigen-bijdrage', beschikbaarheid: 'direct', contact: { website: 'amsterdam.nl/wmo' } },
                { naam: 'Huishoudelijke hulp', beschrijving: 'Ondersteuning bij huishouden', evidence: 'evidence-based', kosten: 'eigen-bijdrage', beschikbaarheid: 'wachtlijst', contact: { website: 'amsterdam.nl/wmo' } },
                { naam: 'Persoonlijke verzorging', beschrijving: 'Hulp bij wassen, aankleden, etc.', evidence: 'evidence-based', kosten: 'vergoed', beschikbaarheid: 'direct', contact: { website: 'buurtzorg.nl' } }
            ],
            'sociaal-netwerk': [
                { naam: 'Eigen Kracht Conferentie', beschrijving: 'Netwerk mobiliseren en plan maken', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'direct', contact: { telefoon: '030-2310883', website: 'eigenkracht.nl' } },
                { naam: 'Netwerkberaad (SIJN/RPA)', beschrijving: 'Netwerk activeren en versterken', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'direct', contact: { website: 'sijn.nl' } },
                { naam: 'Maatjesprojecten', beschrijving: '1-op-1 contact tegen eenzaamheid', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'wachtlijst', contact: { telefoon: '020-5851350', website: 'humanitas.nl' } },
                { naam: 'Buurtgerichte interventies', beschrijving: 'Participatie in de wijk', evidence: 'promising', kosten: 'gratis', beschikbaarheid: 'direct', contact: { website: 'welzijnamsterdam.nl' } },
                { naam: 'Participatieladder begeleiding', beschrijving: 'Van isolatie naar participatie', evidence: 'promising', kosten: 'gratis', beschikbaarheid: 'direct', contact: { website: 'movisie.nl' } }
            ],
            'participatie': [
                { naam: 'Vrijwilligerswerk begeleiding', beschrijving: 'Hulp bij vinden zinvolle vrijwilligersrol', evidence: 'promising', kosten: 'gratis', beschikbaarheid: 'direct', contact: { telefoon: '020-5851350', website: 'vrijwilligerscentraal.nl' } },
                { naam: 'Statushoudersbegeleiding', beschrijving: 'Participatie nieuwkomers', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'direct', contact: { website: 'vluchtelingenwerk.nl' } },
                { naam: 'Taalcursussen + participatie', beschrijving: 'Nederlandse taal leren', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'direct', contact: { website: 'roc.nl' } },
                { naam: 'Buurtinitiatieven ondersteunen', beschrijving: 'Eigen kracht buurt activeren', evidence: 'promising', kosten: 'gratis', beschikbaarheid: 'direct', contact: { website: 'welzijnamsterdam.nl' } },
                { naam: 'Eigen Kracht Conferentie - Participatie', beschrijving: 'Netwerk helpt bij participatie', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'direct', contact: { telefoon: '030-2310883', website: 'eigenkracht.nl' } }
            ],
            'justitie': [
                { naam: 'Eigen Kracht Conferentie - Jeugdstrafrecht', beschrijving: 'Herstelgerichte aanpak met netwerk', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'direct', contact: { telefoon: '030-2310883', website: 'eigenkracht.nl' } },
                { naam: 'Forensische zorg', beschrijving: 'Gespecialiseerde behandeling justitiabelen', evidence: 'evidence-based', kosten: 'via-justitie', beschikbaarheid: 'wachtlijst', contact: { website: 'dji.nl' } },
                { naam: 'Reclassering', beschrijving: 'Toezicht en begeleiding na detentie', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'direct', contact: { website: 'reclassering.nl' } },
                { naam: 'Halt-programma', beschrijving: 'Voor jongeren met lichte delicten', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'direct', contact: { website: 'halt.nl' } },
                { naam: 'Justitieel Casemanagement', beschrijving: 'Combinatie zorg en justitie', evidence: 'evidence-based', kosten: 'gratis', beschikbaarheid: 'wachtlijst', contact: { website: 'reclassering.nl' } }
            ]
        };

        // Haal interventies op voor specifiek domein
        function getInterventiesVoorDomein(domeinId) {
            return interventiesDatabasePerDomein[domeinId] || [];
        }

        // === INTERVENTIE METADATA (backwards compatible) ===
        function getInterventieMetadata(interventieNaam) {
            const naam = interventieNaam.toLowerCase();
            
            // Zoek in nieuwe database (alle domeinen)
            for (const interventies of Object.values(interventiesDatabasePerDomein)) {
                const match = interventies.find(i => naam.includes(i.naam.toLowerCase()));
                if (match) {
                    return {
                        beschrijving: match.beschrijving,
                        evidence: match.evidence,
                        kosten: match.kosten,
                        beschikbaarheid: match.beschikbaarheid,
                        contact: match.contact
                    };
                }
            }
            
            // Default metadata als geen match
            return {
                beschrijving: '',
                evidence: 'practice',
                kosten: null,
                beschikbaarheid: null,
                contact: null
            };
        }

        // === NIEUW: RENDER EVIDENCE-BASED INTERVENTIES PER DOMEIN ===
        function renderInterventiesPerDomein() {
            // Bepaal welke domeinen aandacht nodig hebben (geel/rood in triage)
            const actieveDomeinen = domains.filter(d => {
                const score = state.scores[d.id];
                return score === 1 || score === 2; // Rood of geel
            });

            if (actieveDomeinen.length === 0) {
                return ''; // Geen actieve domeinen
            }

            const isMantelzorger = state.doelgroepen && state.doelgroepen.includes('mantelzorgers');

            let html = `
                <div style="background:#f0fdf4;border:3px solid #16a34a;border-radius:14px;padding:20px;margin-bottom:24px;">
                    <h3 style="font-size:1.3rem;color:#166534;margin:0 0 8px;font-weight:800;">
                        🎯 Evidence-based interventies per focusgebied
                    </h3>
                    <p style="font-size:0.88rem;color:#15803d;margin:0 0 20px;line-height:1.5;">
                        Op basis van de triage tonen we per domein de meest effectieve interventies. 
                        Selecteer wat je wilt inzetten.
                    </p>
            `;

            actieveDomeinen.forEach(domein => {
                const interventies = getInterventiesVoorDomein(domein.id);
                const statusColor = state.scores[domein.id] === 1 ? '#dc2626' : '#f59e0b';
                const statusIcon = state.scores[domein.id] === 1 ? '🔴' : '🟡';
                const statusText = state.scores[domein.id] === 1 ? 'Actie nodig' : 'Aandacht';

                // Algemene interventies (niet mantelzorg-specifiek)
                const algemeen = interventies.filter(i => !i.mantelzorg).slice(0, 3);
                
                // Mantelzorg-specifieke interventies
                const mantelzorg = interventies.filter(i => i.mantelzorg);

                html += `
                    <div style="background:white;border:2px solid ${statusColor};border-radius:10px;padding:16px;margin-bottom:16px;">
                        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
                            <span style="font-size:1.5rem;">${domein.emoji}</span>
                            <div>
                                <div style="font-size:1.05rem;font-weight:700;color:#374151;">${domein.label}</div>
                                <div style="font-size:0.8rem;color:${statusColor};font-weight:600;">${statusIcon} ${statusText}</div>
                            </div>
                        </div>

                        <div style="display:grid;gap:10px;">
                            ${algemeen.map((int, idx) => {
                                const evidenceBadge = int.evidence === 'evidence-based' 
                                    ? '<span style="background:#dcfce7;color:#166534;padding:2px 8px;border-radius:4px;font-size:0.7rem;font-weight:600;">🟢 Evidence-based</span>'
                                    : int.evidence === 'promising'
                                    ? '<span style="background:#fef3c7;color:#92400e;padding:2px 8px;border-radius:4px;font-size:0.7rem;font-weight:600;">🟡 Veelbelovend</span>'
                                    : '<span style="background:#f3f4f6;color:#6b7280;padding:2px 8px;border-radius:4px;font-size:0.7rem;font-weight:600;">⚪ Praktijk</span>';
                                
                                const kostenBadge = int.kosten === 'gratis'
                                    ? '<span style="background:#dcfce7;color:#166534;padding:2px 8px;border-radius:4px;font-size:0.7rem;font-weight:600;">💚 Gratis</span>'
                                    : int.kosten === 'vergoed'
                                    ? '<span style="background:#dbeafe;color:#1e40af;padding:2px 8px;border-radius:4px;font-size:0.7rem;font-weight:600;">💙 Vergoed</span>'
                                    : int.kosten === 'eigen-bijdrage'
                                    ? '<span style="background:#fef3c7;color:#92400e;padding:2px 8px;border-radius:4px;font-size:0.7rem;font-weight:600;">💛 Eigen bijdrage</span>'
                                    : '';

                                const beschikbaarBadge = int.beschikbaarheid === 'direct'
                                    ? '<span style="background:#dcfce7;color:#166534;padding:2px 8px;border-radius:4px;font-size:0.7rem;font-weight:600;">⏱️ Direct</span>'
                                    : int.beschikbaarheid === 'wachtlijst'
                                    ? '<span style="background:#fee2e2;color:#991b1b;padding:2px 8px;border-radius:4px;font-size:0.7rem;font-weight:600;">⏳ Wachtlijst</span>'
                                    : '';

                                return `
                                    <label style="display:flex;align-items:start;gap:10px;padding:12px;border:2px solid #e5e7eb;background:#fafafa;border-radius:8px;cursor:pointer;transition:all 0.2s;"
                                        
                                        >
                                        <input type="checkbox" style="width:18px;height:18px;margin-top:2px;flex-shrink:0;">
                                        <div style="flex:1;">
                                            <div style="font-weight:700;color:#374151;margin-bottom:4px;font-size:0.95rem;">
                                                ${idx + 1}. ${int.naam}
                                            </div>
                                            <div style="font-size:0.85rem;color:#6b7280;margin-bottom:8px;line-height:1.4;">
                                                ${int.beschrijving}
                                            </div>
                                            <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:6px;">
                                                ${evidenceBadge}
                                                ${kostenBadge}
                                                ${beschikbaarBadge}
                                            </div>
                                            ${int.contact ? `
                                                <div style="font-size:0.75rem;color:#6b7280;">
                                                    ${int.contact.telefoon ? `📞 ${int.contact.telefoon}` : ''}
                                                    ${int.contact.telefoon && int.contact.website ? ' | ' : ''}
                                                    ${int.contact.website ? `🌐 ${int.contact.website}` : ''}
                                                </div>
                                            ` : ''}
                                        </div>
                                    </label>
                                `;
                            }).join('')}

                            ${isMantelzorger && mantelzorg.length > 0 ? `
                                <div style="background:#fef3c7;border:2px solid #f59e0b;border-radius:8px;padding:12px;margin-top:8px;">
                                    <div style="font-weight:700;color:#92400e;margin-bottom:8px;font-size:0.9rem;">
                                        🫂 Extra voor mantelzorgers:
                                    </div>
                                    <div style="display:grid;gap:8px;">
                                        ${mantelzorg.map(int => `
                                            <label style="display:flex;align-items:start;gap:8px;padding:10px;background:#fffbeb;border:1px solid #fbbf24;border-radius:6px;cursor:pointer;">
                                                <input type="checkbox" style="width:16px;height:16px;margin-top:2px;flex-shrink:0;">
                                                <div style="flex:1;">
                                                    <div style="font-weight:600;color:#78350f;margin-bottom:2px;font-size:0.85rem;">
                                                        ${int.naam}
                                                    </div>
                                                    <div style="font-size:0.75rem;color:#92400e;">
                                                        ${int.beschrijving}
                                                    </div>
                                                </div>
                                            </label>
                                        `).join('')}
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;
            });

            html += `</div>`;
            return html;
        }

        function renderInterventiesVoorBeweging() {
            const container = document.getElementById('interventiesVoorBeweging');
            if (!container) return;

