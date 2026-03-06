export function safeParse(json, fallback = null) {
  if (!json) return fallback;
  try {
    return JSON.parse(json);
  } catch (e) {
    console.warn('[safeParse] Ongeldige JSON, fallback gebruikt:', e.message);
    return fallback;
  }
}
