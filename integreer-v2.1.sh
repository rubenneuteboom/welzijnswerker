#!/bin/bash
# RPA v2.1 Integratie Script
# Injecteert nieuwe componenten in positioneel.html

set -e

ORIGINAL="positioneel.html"
OUTPUT="positioneel-v2.1.html"
BACKUP="positioneel-BACKUP-v2.1-$(date +%Y%m%d-%H%M%S).html"

echo "🚀 RPA v2.1 Integratie Gestart"
echo "================================"

# 1. Backup maken
echo "📦 Backup maken..."
cp "$ORIGINAL" "$BACKUP"
echo "   ✅ Backup: $BACKUP"

# 2. Kopieer origineel naar output
echo "📄 Kopiëren origineel..."
cp "$ORIGINAL" "$OUTPUT"

# 3. Inject CSS (voor </style> tag)
echo "🎨 CSS componenten toevoegen..."
cat >> temp_css.txt << 'EOF'

/* ====== RPA v2.1 ADDITIONS ====== */
/* Evidence Badge Systeem */
.evidence-badge {
    display: inline-block;
    padding: 3px 10px;
    border-radius: 12px;
    font-size: 0.7rem;
    font-weight: 600;
    margin-left: 6px;
    vertical-align: middle;
}

.evidence-badge.evidence-based {
    background: #dbeafe;
    color: #1e40af;
    border: 1px solid #3b82f6;
}

.evidence-badge.clinical {
    background: #fef3c7;
    color: #92400e;
    border: 1px solid #f59e0b;
}

.evidence-badge.ethical {
    background: #e0e7ff;
    color: #3730a3;
    border: 1px solid #6366f1;
}

/* Mantelzorg Alert */
.mantelzorg-alert {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    border: 2px solid #f59e0b;
    border-radius: 12px;
    padding: 16px;
    margin: 16px 0;
    animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

.mantelzorg-alert h4 {
    color: #92400e;
    margin-bottom: 8px;
    font-size: 1rem;
}

/* Financiën Alert */
.financien-alert {
    background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
    border: 3px solid #dc2626;
    border-radius: 16px;
    padding: 24px;
    margin: 24px 0;
}

/* Privacy Scherm */
.privacy-screen {
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    border: 3px solid #0ea5e9;
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 24px;
}

.privacy-guarantee {
    background: white;
    border-left: 5px solid #10b981;
    padding: 16px 18px;
    margin: 16px 0;
    border-radius: 8px;
}

.regie-badge {
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
    color: white;
    padding: 12px 24px;
    border-radius: 25px;
    font-weight: 700;
    display: inline-block;
    margin: 16px auto;
    font-size: 1.05rem;
}

.client-choice {
    background: #fef3c7;
    border-left: 6px solid #eab308;
    padding: 14px 18px;
    margin: 16px 0;
    border-radius: 0 10px 10px 0;
}

EOF

# Insert CSS before </style>
sed -i '' -e '/<\/style>/r temp_css.txt' "$OUTPUT"
rm temp_css.txt
echo "   ✅ CSS toegevoegd"

# 4. Update title met v2.1
echo "📝 Versie badge toevoegen..."
sed -i '' 's/<title>RPA Positionele Analyse/<title>RPA Positionele Analyse v2.1/' "$OUTPUT"
echo "   ✅ Title updated"

echo ""
echo "================================"
echo "✅ BASIS INTEGRATIE VOLTOOID"
echo ""
echo "📄 Output: $OUTPUT"
echo "📦 Backup: $BACKUP"
echo ""
echo "⚠️  HANDMATIGE STAPPEN NODIG:"
echo "   1. Voeg screen-privacy toe na screen-start"
echo "   2. Voeg screen-financien-check toe na screen-privacy"
echo "   3. Update button in screen-start: onclick='goToScreenById(\"screen-privacy\")'"
echo "   4. Voeg JavaScript functies toe (zie v2.1-componenten.html)"
echo ""
echo "💡 TIP: Open v2.1-componenten.html voor copy-paste templates"
echo ""
