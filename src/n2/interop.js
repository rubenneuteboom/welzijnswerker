import { KEYS } from '../shared/utils/storageKeys.js';
import { setJson, getJson } from '../shared/utils/storage.js';
import { validateN2Export } from '../shared/schema/n2ExportSchema.js';
import { validateCaseload, sanitizeCaseload } from '../shared/schema/caseloadSchema.js';

export function exportNaarN3(exportData) {
  if (!validateN2Export(exportData)) {
    console.warn('[interop] Ongeldige N2 export data');
    return false;
  }

  setJson(KEYS.RPA_NIVEAU3_IMPORT, exportData);
  setJson(KEYS.RPA_NIVEAU3_DATUM, new Date().toISOString());
  return true;
}

export function importCaseload(caseload) {
  if (!validateCaseload(caseload)) return [];
  setJson(KEYS.RPA_CASELOAD, caseload);
  return caseload;
}

export function getCaseload() {
  return sanitizeCaseload(getJson(KEYS.RPA_CASELOAD, []), []);
}
