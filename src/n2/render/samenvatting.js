export function renderSamenvatting() {
  if (typeof window.renderSamenvatting === 'function') return window.renderSamenvatting();
}

export function generatePrintView() {
  if (typeof window.exportSamenvatting === 'function') return window.exportSamenvatting();
}

export function exportData() {
  if (typeof window.exportVoorStrategischeAnalyse === 'function') {
    return window.exportVoorStrategischeAnalyse(false);
  }
}
