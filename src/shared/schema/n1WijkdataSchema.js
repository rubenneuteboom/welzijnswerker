export function validateWijkdata(data) {
  if (!Array.isArray(data)) return false;
  return data.every((item) => {
    if (!item || typeof item !== 'object') return false;

    // Current N1 shape: { tijdstip, wijk, leeftijdscategorie, scores }
    const hasCurrentShape =
      typeof item.wijk === 'string' &&
      item.scores &&
      typeof item.scores === 'object' &&
      !Array.isArray(item.scores);

    // Legacy/fallback shape from earlier notes
    const hasLegacyShape =
      typeof item.postcode === 'string' && typeof item.domein === 'string';

    return hasCurrentShape || hasLegacyShape;
  });
}

export function sanitizeWijkdata(raw, fallback = []) {
  if (!Array.isArray(raw)) return fallback;
  return raw.filter(
    (item) =>
      item &&
      typeof item === 'object' &&
      (
        (typeof item.wijk === 'string' && item.scores && typeof item.scores === 'object') ||
        (typeof item.postcode === 'string' && typeof item.domein === 'string')
      )
  );
}
