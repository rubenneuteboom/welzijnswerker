export const domains = [
                {
                    id: 'financien',
                    emoji: '💰',
                    title: 'Financiën',
                    description: 'Denk aan: inkomen, schulden, rondkomen, rekeningen betalen',
                    context_note: 'Gaat goed = je kunt je vaste lasten betalen en maakt je niet veel zorgen over geld.',
                    tips_goed: [
                        'Check maandelijks je budget (Nibud.nl/budgetcheck)',
                        'Bouw een spaarbuffer op (3 maanden vaste lasten)',
                        'Ken je rechten: toeslagen, zorgtoeslag (belastingdienst.nl)'
                    ],
                    tips_beter: [
                        'Maak een budgetplan (Nibud.nl - gratis tool)',
                        'Vraag budgetadvies (gratis via schuldhulpmaatje)',
                        'Check of je alle toeslagen gebruikt',
                        'Praat met je werkgever over loonstrook/voorschot'
                    ],
                    tips_leeftijd: {
                        jongere: [
                            'Als je 18 wordt: direct zorgtoeslag, huurtoeslag en eventueel studiefinanciering aanvragen',
                            'Geen inkomen en ouders kunnen niet helpen? Bijzondere bijstand aanvragen bij gemeente',
                            'Schuldhulpmaatje heeft ook begeleiding voor jongeren (gratis)',
                            'Nibud.nl/jongeren heeft tools speciaal voor jouw situatie',
                            'Je hebt recht op bijstand als je 18+ bent en geen inkomen hebt — gemeente is verplicht te helpen'
                        ],
                        jongvolwassene: [
                            'Check zorgtoeslag en huurtoeslag — veel mensen missen dit',
                            'Begin met een kleine spaarbuffer (ook €10/maand helpt)',
                            'Bij studielening: check welke terugbetaalregeling voor jou geldt',
                            'Praat met jobcoach als werk/inkomen niet lukt (gratis via gemeente)'
                        ],
                        volwassene: [
                            'Check regelmatig of je toeslagen hebt bij inkomensdaling',
                            'Pensioenopbouw checken: Mijnpensioenoverzicht.nl',
                            'Bij schulden: schakel vroeg schuldhulp in (voorkomt escalatie)',
                            'Budgetcoaching via wijkteam is gratis en laagdrempelig'
                        ],
                        ouder: [
                            'AOW tijdig aanvragen (5 jaar voor pensioenleeftijd bij SVB)',
                            'Vraag kwijtschelding gemeentelijke belastingen aan',
                            'Compensatieregelingen zorgkosten checken via CAK.nl',
                            'Gratis financieel advies bij Seniorentelefoon: 0800-2525'
                        ]
                    },
                    hulp: {
                        info: [
                            { name: 'Nibud.nl', url: 'https://www.nibud.nl', desc: 'Budgetadvies en rekentools' },
                            { name: 'Geldfit.nl', url: 'https://www.geldfit.nl', desc: 'Gratis online cursus geldzaken' }
                        ],
                        chat: [
                            { name: 'Nibud chat', url: 'https://www.nibud.nl/contact' },
                            { name: 'Schuldhulplijn', url: 'https://www.nvvk.nl/schuldhulplijn' }
                        ],
                        persoonlijk: [
                            { name: 'Wijkteam', desc: 'Laagdrempelig lokaal loket' },
                            { name: 'Schuldhulpmaatje', desc: 'Vrijwilliger die je helpt' }
                        ],
                        bellen: [
                            { name: 'Schuldhulplijn', tel: '0800-8000', desc: 'Gratis' }
                        ],
                        urgent: 'Bij dreigende uitzetting: direct gemeente schuldhulp bellen'
                    }
                },
                {
                    id: 'ggz',
                    emoji: '🧠',
                    title: 'Geestelijke gezondheid',
                    description: 'Denk aan: somberheid, angst, stress, slaapproblemen, zorgen',
                    context_note: 'Gaat goed = je voelt je over het algemeen redelijk stabiel en kunt de dag aan.',
                    tips_goed: [
                        'Beweeg 30 min per dag (wandelen helpt!)',
                        'Spreek vrienden/familie regelmatig',
                        'Zorg voor voldoende slaap (7-8 uur)'
                    ],
                    tips_beter: [
                        'Praat met iemand die je vertrouwt',
                        '113.nl - gratis zelfhulp online',
                        'Structuur in je dag (vaste tijden)',
                        'Probeer te bewegen (helpt tegen somberheid)'
                    ],
                    tips_leeftijd: {
                        jongere: [
                            'Depressie bij jongeren is heel gewoon — en behandelbaar. Ga naar je huisarts',
                            'Kindertelefoon: 0800-0432 — ook voor somberheid, angst en zelfpijn (gratis, anoniem)',
                            'Jeugd-GGZ via huisarts of jeugdarts: specifiek voor jouw leeftijdsgroep',
                            'Je hoeft het niet te begrijpen om hulp te vragen — vertel gewoon hoe het voelt',
                            'NiceDay app: dagboek + oefeningen voor jongeren (gratis versie beschikbaar)'
                        ],
                        jongvolwassene: [
                            '1 op de 5 jongvolwassenen heeft last van depressie of angst — jij bent niet de enige',
                            'Huisarts → POH-GGZ is de snelste route: vraag er expliciet om',
                            'Online therapie (NiceDay, iPractice, Minddistrict) heeft korte wachttijden',
                            'MIND Jong: lotgenotencontact voor 18-30 jaar (mind.nl)',
                            'Vroeg hulp zoeken voorkomt dat het erger wordt — stel het niet uit'
                        ],
                        volwassene: [
                            'POH-GGZ via huisarts is de snelste en laagdrempeligste route',
                            'Stress door werk? Arbo-arts of bedrijfsmaatschappelijk werk inschakelen',
                            'Mantelzorgondersteuning als zorg voor anderen je uitput — vraag respijtzorg',
                            'Online therapie (eMental Health) met weinig wachtlijst',
                            'Burn-out en depressie overlappen vaak — laat het goed onderzoeken'
                        ],
                        ouder: [
                            'Somberheid en eenzaamheid zijn behandelbaar — dit is geen normaal onderdeel van oud worden',
                            'Rouwverwerking na verlies partner of vriend: via huisarts of Rouwcentrum',
                            'Ouderenpsychiatrie is gespecialiseerd in jouw situatie',
                            'Buurthuis en dagactiviteiten helpen aantoonbaar tegen somberheid',
                            'Zeg het aan uw huisarts: "Ik voel me al een tijdje niet goed" — dat is genoeg'
                        ]
                    },
                    hulp: {
                        info: [
                            { name: '113.nl', url: 'https://www.113.nl', desc: 'Suïcidepreventie en zelfhulp' },
                            { name: 'Mindkorrelatie.nl', url: 'https://www.mindkorrelatie.nl', desc: 'Ervaringsverhalen' }
                        ],
                        chat: [
                            { name: '113 Online chat', url: 'https://www.113.nl/chat', desc: '24/7, anoniem' },
                            { name: 'Korrelatie chat', url: 'https://www.korrelatie.nl' }
                        ],
                        persoonlijk: [
                            { name: 'Huisarts', desc: 'Vertrouwde eerste stap' },
                            { name: 'Wijkteam GGZ', desc: 'Laagdrempelig' }
                        ],
                        bellen: [
                            { name: '113 Zelfmoordpreventie', tel: '0900-0113' },
                            { name: 'Luisterlijn', tel: '088-0767000', desc: 'Luisterend oor' }
                        ],
                        urgent: 'Bij crisis: 112 of GGZ Crisisdienst (lokaal 24/7)'
                    }
                },
                {
                    id: 'wonen',
                    emoji: '🏠',
                    title: 'Wonen',
                    description: 'Denk aan: betaalbare woning, veilige buurt, thuisvoelen',
                    context_note: 'Gaat goed = je voelt je veilig thuis en maakt je geen zorgen over je woning.',
                    tips_goed: [
                        'Ken je huurrechten (woonbond.nl)',
                        'Onderhoud je woning goed',
                        'Ken je buren (veilig gevoel + sociale steun)'
                    ],
                    tips_beter: [
                        'Problemen met verhuurder? → Woonbond.nl (gratis advies)',
                        'Te duur? → Check huurtoeslag (belastingdienst.nl)',
                        'Wil je verhuizen? → Inschrijven op HuisjeHuisje.nl'
                    ],
                    tips_leeftijd: {
                        jongere: [
                            'Schrijf je nú al in bij woningcorporaties — wachttijd loopt op, ook als je nog thuis woont',
                            'Woningmarkt is krap: kamerhuur, hospitawonen en tijdelijk wonen zijn realistische opties',
                            'Jongerenhuisvesting aanvragen bij je gemeente (speciaal aanbod voor 18-23 jaar)',
                            'Thuis niet meer veilig of mogelijk? Wijkteam of jongerenwerk helpt snel',
                            'Veilig Thuis: 0800-2000 — als de thuissituatie niet langer kan'
                        ],
                        jongvolwassene: [
                            'Inschrijven bij woningcorporaties kost niks en inschrijftijd telt — doe het vandaag',
                            'Kamernet.nl, Pararius, Facebook Groepen voor kamers en starters',
                            'Huurtoeslag aanvragen via belastingdienst.nl — veel jongeren missen dit',
                            'Anti-kraakwonen als tijdelijke oplossing (Camelot, Ad Hoc)',
                            'Bij urgentie (gezinscrisis, onveiligheid): urgentieverklaring aanvragen bij gemeente'
                        ],
                        volwassene: [
                            'Praat vroeg met woningcorporatie bij dreigende huurachterstand',
                            'Bij schuld: schuldhulp inschakelen vóór uitzetting dreigt',
                            'WMO-woningaanpassing aanvragen voor gezin, kinderen of mantelzorgsituatie',
                            'Scheiding en woning: gratis juridisch advies via het Juridisch Loket'
                        ],
                        ouder: [
                            'WMO-aanpassing aanvragen: drempels, handgrepen, traplift (gemeente vergoedt)',
                            'Gelijkvloerse seniorenwoning zoeken via woningcorporatie — vaak kortere wachttijd',
                            'Wmo-consulent gratis thuisbezoek aanvragen voor woningadvies',
                            'Valpreventie: gemeente vergoedt soms eenvoudige aanpassingen'
                        ]
                    },
                    hulp: {
                        info: [
                            { name: 'Woonbond.nl', url: 'https://www.woonbond.nl', desc: 'Huurrechten en advies' },
                            { name: 'HuisjeHuisje.nl', url: 'https://www.huisjehuisje.nl', desc: 'Sociale huur zoeken' }
                        ],
                        chat: [
                            { name: 'Woonbond chat', url: 'https://www.woonbond.nl/contact' }
                        ],
                        persoonlijk: [
                            { name: 'Wijkteam wonen', desc: 'Lokaal' },
                            { name: 'Woningcorporatie', desc: 'Urgentie aanvragen' }
                        ],
                        bellen: [
                            { name: 'Woningcorporatie', desc: 'Lokaal nummer' },
                            { name: 'Gemeente woonzorg', desc: 'Lokaal nummer' }
                        ],
                        urgent: 'Bij huisuitzetting/dakloosheid: Leger des Heils 088-584 5000'
                    }
                },
                {
                    id: 'huiselijk',
                    emoji: '👨‍👩‍👧',
                    title: 'Huiselijke relaties',
                    description: 'Denk aan: partner, kinderen, familie thuis, sfeer',
                    context_note: 'Gaat goed = het is thuis over het algemeen rustig en fijn — ook al is het soms druk.',
                    tips_goed: [
                        'Praat met elkaar (echt luisteren)',
                        'Quality time samen (geen telefoons)',
                        'Waardeer elkaar (kleine dingen tellen)'
                    ],
                    tips_beter: [
                        'Praat over wat lastig is (niet tijdens ruzie)',
                        'Zoek samen iets leuks te doen',
                        'Overweeg relatiecoach/cursus (vaak gratis via gemeente)',
                        'Ikvertrouwjou.nl - ervaringen lezen kan helpen'
                    ],
                    tips_leeftijd: {
                        jongere: [
                            'Conflicten thuis? Praat met iemand buiten je gezin',
                            'Kindertelefoon: 0800-0432 — ook voor situaties thuis',
                            'Jij bent niet verantwoordelijk voor problemen van volwassenen thuis',
                            'Je hoeft niet te kiezen tussen je ouders'
                        ],
                        jongvolwassene: [
                            'Grenzen aangeven mag je leren — ook naar je ouders',
                            'Eerste relatie: het is normaal dat het soms moeilijk is',
                            'Gratis relatiegesprekken via wijkteam of huisarts',
                            'Als het niet veilig voelt: Veilig Thuis 0800-2000'
                        ],
                        volwassene: [
                            'Relatiecoaching is gewoon en helpt echt (vaak vergoed)',
                            'Ouderschap is zwaar: Stevig Ouderschap cursus (gratis via gemeente)',
                            'Mantelzorg voor ouders naast eigen gezin: vraag respijtzorg aan',
                            'Buurtbemiddeling lost meer op dan je denkt (gratis, lokaal)'
                        ],
                        ouder: [
                            'Verlies van partner: rouwondersteuning via huisarts of Rouwcentrum',
                            'Weinig contact met kinderen/kleinkinderen? Maatjesproject kan helpen',
                            'Eenzaamheid in relatie is behandelbaar — praat met huisarts',
                            'Humanitas Thuisadministratie biedt ook sociaal contact'
                        ]
                    },
                    hulp: {
                        info: [
                            { name: 'Veiligthuis.nl/herken', url: 'https://www.veiligthuis.nl/herken', desc: '"Is dit normaal?" test (anoniem)' },
                            { name: 'Ikvertrouwjou.nl', url: 'https://www.ikvertrouwjou.nl', desc: 'Ervaringsverhalen lezen' }
                        ],
                        chat: [
                            { name: 'Veilig Thuis chat', url: 'https://www.veiligthuis.nl/chat', desc: 'Ook als partner thuis is' },
                            { name: 'Korrelatie chat', url: 'https://www.korrelatie.nl', desc: 'Voor jongeren' }
                        ],
                        persoonlijk: [
                            { name: 'Huisarts', desc: '"Ik wil praten over mijn thuissituatie"' },
                            { name: 'Wijkteam', desc: 'Vertrouwd gesprek' }
                        ],
                        bellen: [
                            { name: 'Veilig Thuis', tel: '0800-2000', desc: 'Gratis, 24/7, anoniem mag' }
                        ],
                        urgent: 'Bij direct gevaar: 112 | Tijdelijk weg? Veilig Thuis regelt opvang: 0800-2000'
                    }
                },
                {
                    id: 'sociaal',
                    emoji: '👥',
                    title: 'Sociaal netwerk',
                    description: 'Denk aan: vrienden, familie, contact, eenzaamheid',
                    context_note: 'Gaat goed = je hebt mensen om je heen op wie je kunt terugvallen als het even tegenzit.',
                    tips_goed: [
                        'Blijf contact houden (ook als het druk is)',
                        'Af en toe nieuwe mensen ontmoeten',
                        'Vriendschappen zijn tweezijdig (geven en nemen)'
                    ],
                    tips_beter: [
                        'Ga naar buurthuis activiteit (koffie-ochtend)',
                        'Vrijwilligerswerk (vrijwilligerswerk.nl)',
                        'Sportclub/hobby (nieuwe mensen ontmoeten)',
                        'Buurtapp gebruiken (Nextdoor, Facebook buurtgroep)'
                    ],
                    tips_leeftijd: {
                        jongere: [
                            'Sport of hobby is de beste manier om vrienden te maken',
                            'Pesten? Meld het bij school en praat erover thuis',
                            'Online vrienden tellen ook — maar zorg ook voor echte ontmoetingen',
                            'Nieuwe school = nieuwe kans voor nieuwe vriendschappen'
                        ],
                        jongvolwassene: [
                            'Nieuwe stad of studie? Proeflessen en intro-activiteiten zijn echt voor jou',
                            'Vrijwilligerswerk verbindt en vult ook je CV',
                            'Introvert? Eén echte vriend is genoeg als fundament — bouw van daaruit',
                            'Sportclub of hobby groep: makkelijkste manier om mensen te leren kennen'
                        ],
                        volwassene: [
                            'Buren leren kennen via buurtapp (Nextdoor) of buurtborrel',
                            'Vriendschappen kosten onderhoud — plan bewust contact in',
                            'Eenzaamheid is taboe maar heel gewoon — praat erover met huisarts',
                            'Kleine dingen met collega\'s (koffie, wandellunch) bouwen echte connecties'
                        ],
                        ouder: [
                            'Seniorenprogramma buurthuis: laagdrempelig en bewezen effectief',
                            'Thuisbezoek van vrijwilliger via Humanitas of Maatjesproject',
                            'Digitale vaardigheden leren helpt om contact te houden met (klein)kinderen',
                            'Ouderenbonden organiseren activiteiten in jouw wijk'
                        ]
                    },
                    hulp: {
                        info: [
                            { name: 'SamenDoenSamenLeven.nl', url: 'https://www.samendoensamenleven.nl', desc: 'Activiteiten in je buurt' },
                            { name: 'Vrijwilligerswerk.nl', url: 'https://www.vrijwilligerswerk.nl', desc: 'Meedoen' }
                        ],
                        chat: [
                            { name: 'Facebook buurtgroepen', desc: 'Jouw wijk' },
                            { name: 'Nextdoor app', desc: 'Lokaal buurtnetwerk' }
                        ],
                        persoonlijk: [
                            { name: 'Buurthuis', desc: 'Koffie-ochtend, sport' },
                            { name: 'Maatjesproject', desc: 'Iemand die langskomt' }
                        ],
                        bellen: [
                            { name: 'Luisterlijn', tel: '088-0767000' },
                            { name: 'Buurthuis', desc: 'Lokaal nummer' }
                        ],
                        urgent: null
                    }
                },
                {
                    id: 'dagbesteding',
                    emoji: '💼',
                    title: 'Dagbesteding & werk',
                    description: 'Denk aan: werk, opleiding, vrijwilligerswerk, nuttige tijdsbesteding',
                    context_note: 'Gaat goed = je hebt overdag een invulling die je zinvol vindt, betaald of onbetaald.',
                    tips_goed: [
                        'Blijf jezelf ontwikkelen (cursussen, leren)',
                        'Onderhoud je netwerk (collega\'s, LinkedIn)',
                        'Let op werk-privé balans'
                    ],
                    tips_beter: [
                        'Vrijwilligerswerk (zinvol + netwerk opbouwen)',
                        'Cursus/opleiding (vaak gratis via UWV)',
                        'Denk na over je kwaliteiten (waar ben je goed in?)',
                        'Praat met jobcoach (gratis via gemeente)'
                    ],
                    tips_leeftijd: {
                        jongere: [
                            'School is je belangrijkste fundament — vraag hulp als het niet lukt',
                            'Bijbaan kan zinvol zijn, maar mag niet ten koste van school gaan',
                            'Hobby\'s zijn je toekomstige netwerk en vaardigheden',
                            'Gratis studiekeuzegesprek via school of gemeente'
                        ],
                        jongvolwassene: [
                            'UWV biedt gratis loopbaanadvies en begeleiding bij werk zoeken',
                            'Stagegesprekken openen deuren — ook als er geen stage is',
                            'Burn-out op je 25e is reëel — herken de signalen vroeg',
                            'Mbo-4 of zij-instroom zijn legit als eerste stap — geen schaamte'
                        ],
                        volwassene: [
                            'Burn-out: meld je vroeg bij arbo-arts (niet na 2 jaar)',
                            'Re-integratie via UWV als je langdurig ziek bent',
                            'Mantelzorg + werk combineren? Respijtzorg via WMO verlicht de druk',
                            'Pensioenplanning: check via Mijnpensioenoverzicht.nl'
                        ],
                        ouder: [
                            'Vrijwilligerswerk geeft structuur en betekenis na pensionering',
                            'Volksuniversiteit of seniorencursussen: zinvol en sociaal',
                            'Bijklussen naast pensioen mag (belastingvrij tot bepaalde grens)',
                            'Mantelzorg voor anderen is ook waardevolle dagbesteding'
                        ]
                    },
                    hulp: {
                        info: [
                            { name: 'Werk.nl', url: 'https://www.werk.nl', desc: 'Vacatures, scholing' },
                            { name: 'UWV.nl', url: 'https://www.uwv.nl', desc: 'Uitkeringen, re-integratie' },
                            { name: 'Vrijwilligerswerk.nl', url: 'https://www.vrijwilligerswerk.nl', desc: 'Onbetaald meedoen' }
                        ],
                        chat: [
                            { name: 'Werk.nl chat', url: 'https://www.werk.nl/contact' },
                            { name: 'UWV chat', url: 'https://www.uwv.nl' }
                        ],
                        persoonlijk: [
                            { name: 'Wijkteam werk', desc: 'Lokaal' },
                            { name: 'Jobcoach', desc: 'Gratis via gemeente' }
                        ],
                        bellen: [
                            { name: 'UWV', tel: '0900-9294' },
                            { name: 'Gemeente Participatie', desc: 'Lokaal nummer' }
                        ],
                        urgent: null
                    }
                },
                {
                    id: 'lichamelijk',
                    emoji: '💪',
                    title: 'Lichamelijke gezondheid',
                    description: 'Denk aan: chronische ziektes, pijn, mobiliteit, medicijnen, doktersbezoek',
                    context_note: 'Gaat goed = je lichamelijke klachten belemmeren je dagelijks leven niet of nauwelijks.',
                    context_note: 'Als je zorg nodig hebt — bijvoorbeeld de tandarts die je al een tijdje uitstelt, of fysio voor die rug — tel dat ook mee bij je antwoord.',
                    tips_goed: [
                        'Beweeg 30 min per dag (wandelen telt!)',
                        'Eet gezond (groente en fruit)',
                        'Voldoende drinken (1.5-2L water)',
                        'Check-ups bij huisarts (vooral na 50)'
                    ],
                    tips_beter: [
                        'Begin klein (10 min wandelen per dag)',
                        'Fysiotherapeut bij pijnklachten (vaak vergoed)',
                        'Thuisarts.nl - tips gezond leven',
                        'Praat met je huisarts over je zorgen'
                    ],
                    tips_leeftijd: {
                        jongere: [
                            'Tieners hebben 9 uur slaap nodig — slaaptekort remt alles',
                            'Iets klopt niet in je lichaam? Praat met huisarts — ook voor puberteitsvragen',
                            'Tandarts of fysio te duur? Bijzondere bijstand kan meebetalen — vraag het aan je gemeente',
                            'Je hebt recht op zorg. Dat uitstellen maakt het bijna altijd duurder én zwaarder'
                        ],
                        jongvolwassene: [
                            'Tandarts niet meer naar gegaan? Je bent niet de enige — maar het loopt op. Sociale Tandartsen Netwerk helpt',
                            'Fysio niet vergoed? Check je aanvullende verzekering of vraag het wijkteam',
                            'Zorgverzekeringslijn: 0900-9999 — gratis advies over wat vergoed wordt',
                            'Preventieve huisartscheck is gratis — plan hem gewoon in'
                        ],
                        volwassene: [
                            'Sla de tandarts of fysio niet over omdat het "te duur" lijkt — er zijn bijna altijd opties',
                            'Bijzondere bijstand: gemeente kan meebetalen aan tandarts, bril of fysio',
                            'Zorgverzekeringslijn: 0900-9999 — gratis advies over vergoedingen',
                            'Chronische rugklachten? Fysiotherapie via huisarts is vaak (deels) vergoed'
                        ],
                        ouder: [
                            'Valpreventie: "Sterk & Stabiel" programma via gemeente (bewezen effectief)',
                            'Gehoor of gezicht minder? Aanpakken vermindert valongelukken én eenzaamheid',
                            'Gratis medicatieoverzicht via apotheek — check wisselwerkingen',
                            'WMO kan hulpmiddelen vergoeden die uw zorgverzekering niet dekt — vraag de gemeente'
                        ]
                    },
                    hulp: {
                        info: [
                            { name: 'Thuisarts.nl', url: 'https://www.thuisarts.nl', desc: 'Betrouwbare gezondheidsinformatie' },
                            { name: 'Sociaal Tandartsen Netwerk', url: 'https://www.sociaal-tandartsen-netwerk.nl', desc: 'Tandarts voor mensen die het niet kunnen betalen' },
                            { name: 'Regelhulp.nl', url: 'https://www.regelhulp.nl', desc: 'Welke zorg en vergoeding past bij mij?' }
                        ],
                        chat: [
                            { name: 'Huisartsenpost chat', desc: 'Via je eigen huisarts' },
                            { name: 'Apotheek WhatsApp', desc: 'Vraag je apotheek' }
                        ],
                        persoonlijk: [
                            { name: 'Huisarts', desc: 'Voor lichamelijke klachten' },
                            { name: 'Wijkteam', desc: 'Helpt uitzoeken wat vergoed wordt' },
                            { name: 'Fysiotherapeut', desc: 'Bij bewegingsklachten (soms gratis)' }
                        ],
                        bellen: [
                            { name: 'Zorgverzekeringslijn', tel: '0900-9999', desc: 'Gratis advies over wat vergoed wordt' },
                            { name: 'Huisarts', desc: 'Lokaal nummer' },
                            { name: 'Huisartsenpost', tel: '088-0030600', desc: 'Buiten kantooruren (niet spoed)' }
                        ],
                        urgent: 'Bij spoed: 112 | Bij twijfel spoed: Huisartsenpost 088-0030600'
                    }
                }
            ];
