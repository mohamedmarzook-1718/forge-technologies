import matplotlib.pyplot as plt
from PIL import Image

ms_im = Image.open('public/assets/projects/scripto_manuscript_source.png')

fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(16, 9), facecolor='#0f172a')
fig.subplots_adjust(wspace=0.08, left=0.05, right=0.95, top=0.88, bottom=0.08)

ax1.set_facecolor('#1e293b')
ax1.imshow(ms_im)
ax1.set_title("SOURCE MANUSCRIPT (Primary Document)", color='#94a3b8', fontsize=14, fontweight='bold', pad=12)
ax1.axis('off')

ax2.set_facecolor('#1e293b')
ax2.axis('off')
ax2.set_title("AI DECIPHERED & MODERNIZED TRANSCRIPTION", color='#38bdf8', fontsize=14, fontweight='bold', pad=12)

transcription_text = (
    "DOCUMENT METADATA:\n"
    "• Engine: Gemini Pro Vision Paleography Pipeline\n"
    "• Classification: Historical Calligraphic Folio\n"
    "• Confidence Score: 98.6% | Multi-modal OCR & Modernizer\n\n"
    "DIPLOMATIC TRANSCRIPTION (Archival Preservation):\n"
    "\"In ye yere of our Lorde 1782, I ventur'd forth unto ye wyld lands,\n"
    "seking fortun & glorie. Ye journay was arduous, beset by stormes\n"
    "& wilde beastes. Yet, my spirit remain'd unbroken, for ye promis\n"
    "of ye West call'd to me lyke a siren song...\"\n\n"
    "MODERNIZED READABLE PROSE:\n"
    "\"In the year of our Lord 1782, I ventured forth into the wild lands,\n"
    "seeking fortune and glory. The journey was arduous, beset by storms\n"
    "and wild beasts. Yet, my spirit remained unbroken, for the promise\n"
    "of the West called to me like a siren song...\"\n\n"
    "PALEOGRAPHIC SCHOLAR NOTES:\n"
    "• Orthography: Archaic ligature contraction and variant consonantal points.\n"
    "• Substrate: Heavy vellum with authentic mineral ink degradation.\n"
    "• Semantic Shift: Contextual modernization applied to syntax while preserving cadence."
)

ax2.text(
    0.05, 0.95, transcription_text,
    transform=ax2.transAxes,
    fontsize=12.5,
    color='#e2e8f0',
    verticalalignment='top',
    family='monospace',
    linespacing=1.6,
    bbox=dict(boxstyle='round,pad=1.2', facecolor='#0f172a', edgecolor='#334155', alpha=0.9)
)

fig.suptitle("ScriptoModernizer — AI Paleography & Dual-Pane Document Modernization", color='#f8fafc', fontsize=18, fontweight='bold')
plt.savefig('public/assets/projects/scripto_workspace_dual.png', dpi=150, facecolor=fig.get_facecolor(), edgecolor='none')
plt.close()
print("Re-saved scripto_workspace_dual.png cleanly!")
