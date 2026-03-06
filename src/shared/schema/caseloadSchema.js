import { validateN2Export } from './n2ExportSchema.js';

export function validateCaseload(data) {
  if (!Array.isArray(data)) return false;
  return data.every((item) => validateN2Export(item));
}

export function sanitizeCaseload(raw, fallback = []) {
  if (!Array.isArray(raw)) return fallback;
  return raw.filter((item) => validateN2Export(item));
}
