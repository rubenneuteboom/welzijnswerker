import { exportNaarN3, importCaseload, getCaseload } from './interop.js';
import { saveState } from './state.js';

export function exportNaarN3Contract(data) {
  return exportNaarN3(data);
}

export function importCaseloadContract(caseload) {
  return importCaseload(caseload);
}

export function getCaseloadContract() {
  return getCaseload();
}

export function saveStateAndSync() {
  saveState();
}
