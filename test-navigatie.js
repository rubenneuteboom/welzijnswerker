// Test navigatie logica
const screenConfigBase = [
    { id: 'start',       label: 'Start' },
    { id: 'triage',      label: 'Focusgebieden' },
    { id: 'domains',     label: 'Domeinscan' },
    { id: 'network',     label: 'Overzicht' },
    { id: 'beweging',    label: 'Beweging' },
    { id: 'reflectie',   label: 'Reflectie' },
    { id: 'interventies',label: 'Interventies' },
    { id: 'samenvatting',label: 'Besluit' }
];

const state = {
    snelleModusSchermen: ['triage', 'beweging', 'samenvatting'],
    currentScreen: 1
};

function getScreenConfig() {
    if (state.snelleModusSchermen && state.snelleModusSchermen.length > 0) {
        return screenConfigBase.filter(s => state.snelleModusSchermen.includes(s.id));
    }
    return screenConfigBase;
}

function getPreviousScreenId() {
    const config = getScreenConfig();
    const prevIndex = state.currentScreen - 2;
    console.log(`  currentScreen=${state.currentScreen}, prevIndex=${prevIndex}, config.length=${config.length}`);
    if (prevIndex >= 0 && config[prevIndex]) {
        return config[prevIndex].id;
    }
    return 'start';
}

function getNextScreenId() {
    const config = getScreenConfig();
    const nextIndex = state.currentScreen;
    console.log(`  currentScreen=${state.currentScreen}, nextIndex=${nextIndex}, config.length=${config.length}`);
    if (nextIndex < config.length && config[nextIndex]) {
        return config[nextIndex].id;
    }
    return null;
}

console.log('\n=== SNELLE MODUS TEST ===\n');
const snelConfig = getScreenConfig();
console.log(`Config: ${snelConfig.map(s => s.id).join(' → ')}\n`);

// Test elk scherm
[1, 2, 3].forEach(screenNum => {
    state.currentScreen = screenNum;
    const current = snelConfig[screenNum - 1]?.id || 'onbekend';
    console.log(`Scherm ${screenNum} (${current}):`);
    const prev = getPreviousScreenId();
    const next = getNextScreenId();
    console.log(`  Vorige: ${prev}`);
    console.log(`  Volgende: ${next || 'einde'}\n`);
});

console.log('\n=== VERWACHTE OUTPUT ===');
console.log('Scherm 1 (triage): vorige=start, volgende=beweging');
console.log('Scherm 2 (beweging): vorige=triage, volgende=samenvatting');
console.log('Scherm 3 (samenvatting): vorige=beweging, volgende=einde');
