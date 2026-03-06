import { KEYS } from '../shared/utils/storageKeys.js';
import { getJson } from '../shared/utils/storage.js';
import { sanitizeN2Export } from '../shared/schema/n2ExportSchema.js';
import { sanitizeCaseload } from '../shared/schema/caseloadSchema.js';
import { sanitizeWijkdata } from '../shared/schema/n1WijkdataSchema.js';

export function loadN2Data() {
  return {
    export: sanitizeN2Export(getJson(KEYS.RPA_NIVEAU3_IMPORT), null),
    caseload: sanitizeCaseload(getJson(KEYS.RPA_CASELOAD, []), []),
    wijkdata: sanitizeWijkdata(getJson(KEYS.RPA_WIJKDATA, []), []),
    datum: getJson(KEYS.RPA_NIVEAU3_DATUM, null),
  };
}
