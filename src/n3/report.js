export function aggregateCaseload(caseload = []) {
  const bewegingen = caseload.reduce(
    (sum, c) => sum + ((c.domeinen || []).filter((d) => d.bewegingsrichting).length),
    0
  );
  const doelgroepen = [...new Set(caseload.flatMap((c) => c?.metadata?.doelgroepen || []))];
  return {
    totaalCasussen: caseload.length,
    totaalBewegingen: bewegingen,
    doelgroepen,
  };
}

export function buildDashboardPayload(n2Data) {
  return {
    ...aggregateCaseload(n2Data?.caseload || []),
    heeftEnkelvoudigeExport: !!n2Data?.export,
    wijkRecords: Array.isArray(n2Data?.wijkdata) ? n2Data.wijkdata.length : 0,
  };
}
