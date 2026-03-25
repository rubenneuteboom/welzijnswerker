# Archive 2026-03-20 - v5.x Iteraties

## Wat hier staat
Alle iteraties van vrijdag 20 maart 2026 tijdens het ontwikkelen van de nieuwe flow.

## Versies
- **v5.0** - 2-Screen Flow poging (organisatie → kennismaking)
- **v5.1** - 3-Screen Flow (organisatie → naam → hulpvraag)
- **v5.2** - Scherm 2 compleet (naam + doelgroep + aanpak)
- **v5.3** - Aanpak verplaatst naar scherm 3 (team consensus)

## Laatste werkende versie
`positioneel-v5.3-final-20260320.html` (Build 2145 DEBUG)

**Status:** Workflow navigatie bug - bolletjes klikken werkt niet consistent.

## Backups
10 backup bestanden bewaard (chronologisch):
- positioneel-BACKUP-optional-fields-*.html
- positioneel-BACKUP-2screen-*.html
- positioneel-BACKUP-3screen-*.html
- positioneel-BACKUP-remove-aanpak-*.html
- positioneel-BACKUP-einde-dag-*.html

## Temp files
- NEW_*.html - Scherm templates
- SCHERM2_NAAM.html - Naam scherm template
- CLEAN_INTAKE.html - Intake cleanup poging
- STREAMLINE_*.html - Streamline experimenten

## Morgen
Reset naar stabiele versie en opnieuw bouwen met betere architectuur.

**Lessen:**
- Custom schermen (divs) vs goToScreen() systeem botsen
- Workflow navigatie moet robuuster
- Te veel iteraties zonder test breaks = tech debt
- Simpeler = beter

---
**Tijd:** 15+ uur werk  
**Features:** 8 grote features gebouwd  
**Tokens:** 60k/200k gebruikt (30%)  
**Resultaat:** Veel geleerd, morgen beter! 💪
