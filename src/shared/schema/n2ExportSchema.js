export function validateN2Export(data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) return false;

  const hasMetadata = data.metadata && typeof data.metadata === 'object';
  const hasDomeinen = Array.isArray(data.domeinen);

  if (!hasMetadata || !hasDomeinen) return false;

  return data.domeinen.every((d) => d && typeof d === 'object' && typeof d.id === 'string');
}

export function sanitizeN2Export(raw, fallback = null) {
  if (!validateN2Export(raw)) return fallback;
  return raw;
}
