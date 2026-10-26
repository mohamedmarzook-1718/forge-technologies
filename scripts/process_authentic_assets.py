import os
from PIL import Image, ImageOps
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

os.makedirs('public/assets/projects', exist_ok=True)
inspect_dir = 'scripts/temp_inspect'

# -------------------------------------------------------------
# 1. YOLO WILDLIFE & POACHER DETECTION
# -------------------------------------------------------------
print("Processing YOLO Wildlife assets...")

def crop_browser(img_path, top_crop, bottom_crop, left_crop=145, right_crop=145):
    im = Image.open(img_path)
    # The browser window is centered on the page
    # Let's crop to just the browser window
    w, h = im.size
    box = (left_crop, top_crop, w - right_crop, bottom_crop)
    cropped = im.crop(box)
    return cropped

# Page 48: Home Page
p48 = Image.open(f'{inspect_dir}/wildlife_report_page_48.png')
# Find browser window: top ~ 215, bottom ~ 575
im48_crop = crop_browser(f'{inspect_dir}/wildlife_report_page_48.png', 215, 575, 145, 145)
im48_crop.save('public/assets/projects/yolo_wildlife_hero.png', optimize=True)
print("Saved yolo_wildlife_hero.png", im48_crop.size)

# Page 52: Result Page with YOLO bounding boxes
p52 = Image.open(f'{inspect_dir}/wildlife_report_page_52.png')
im52_crop = crop_browser(f'{inspect_dir}/wildlife_report_page_52.png', 165, 575, 145, 145)
im52_crop.save('public/assets/projects/yolo_detection_results.png', optimize=True)
print("Saved yolo_detection_results.png", im52_crop.size)

# Page 50: Settings / System Configuration
im50_crop = crop_browser(f'{inspect_dir}/wildlife_report_page_50.png', 165, 510, 145, 145)
im50_crop.save('public/assets/projects/yolo_system_settings.png', optimize=True)
print("Saved yolo_system_settings.png", im50_crop.size)

# Page 51: Upload Page
im51_crop = crop_browser(f'{inspect_dir}/wildlife_report_page_51.png', 190, 545, 145, 145)
im51_crop.save('public/assets/projects/yolo_video_upload.png', optimize=True)
print("Saved yolo_video_upload.png", im51_crop.size)


# -------------------------------------------------------------
# 2. MEDIREMIND HEALTHCARE SUITE
# -------------------------------------------------------------
print("\nProcessing MediRemind assets...")

def crop_mediremind(img_path, top_crop, bottom_crop, left_crop=145, right_crop=145):
    im = Image.open(img_path)
    w, h = im.size
    box = (left_crop, top_crop, w - right_crop, bottom_crop)
    cropped = im.crop(box)
    return cropped

# Page 35: Home / Dashboard
im35_crop = crop_mediremind(f'{inspect_dir}/mediremind_page_35.png', 130, 445, 148, 148)
im35_crop.save('public/assets/projects/mediremind_dashboard_hero.png', optimize=True)
print("Saved mediremind_dashboard_hero.png", im35_crop.size)

# Page 38: Reports / Compliance Reports
im38_crop = crop_mediremind(f'{inspect_dir}/mediremind_page_38.png', 130, 445, 148, 148)
im38_crop.save('public/assets/projects/mediremind_compliance_report.png', optimize=True)
print("Saved mediremind_compliance_report.png", im38_crop.size)

# Page 36: My Medicines
im36_crop = crop_mediremind(f'{inspect_dir}/mediremind_page_36.png', 130, 445, 148, 148)
im36_crop.save('public/assets/projects/mediremind_schedule_manager.png', optimize=True)
print("Saved mediremind_schedule_manager.png", im36_crop.size)

# Page 37: Reminders Settings
im37_crop = crop_mediremind(f'{inspect_dir}/mediremind_page_37.png', 130, 435, 148, 148)
im37_crop.save('public/assets/projects/mediremind_notifications.png', optimize=True)
print("Saved mediremind_notifications.png", im37_crop.size)


# -------------------------------------------------------------
# 3. CHICKEN DINNER BRAND IDENTITY
# -------------------------------------------------------------
print("\nProcessing Chicken Dinner assets...")

# Mascot Logo
logo_im = Image.open(f'{inspect_dir}/Chicken Dinner - Logo.png')
# Make a high quality background version for card display if needed, or keep transparent / white
# Let's save both the transparent logo and a framed card hero
logo_im.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
logo_im.save('public/assets/projects/chicken_dinner_logo.png', optimize=True)
print("Saved chicken_dinner_logo.png", logo_im.size)

# Storefront Banner
banner_im = Image.open(f'{inspect_dir}/CHICKEN DINNER_page_1.png')
banner_im.save('public/assets/projects/chicken_dinner_banner.png', optimize=True)
print("Saved chicken_dinner_banner.png", banner_im.size)

# Decal / Packaging sticker
decal_im = Image.open(f'{inspect_dir}/CHICKENDINNER (1)_page_1.png')
decal_im.save('public/assets/projects/chicken_dinner_packaging.png', optimize=True)
print("Saved chicken_dinner_packaging.png", decal_im.size)


# -------------------------------------------------------------
# 4. PERSONAL DEVELOPER PORTFOLIO
# -------------------------------------------------------------
print("\nProcessing Personal Developer Portfolio assets...")

dev_hero = Image.open(f'{inspect_dir}/portfolio_live_hero.png')
dev_hero.save('public/assets/projects/developer_portfolio_hero.png', optimize=True)
print("Saved developer_portfolio_hero.png", dev_hero.size)

dev_skills = Image.open(f'{inspect_dir}/portfolio_live_skills.png')
dev_skills.save('public/assets/projects/developer_portfolio_skills.png', optimize=True)
print("Saved developer_portfolio_skills.png", dev_skills.size)

dev_about = Image.open(f'{inspect_dir}/portfolio_live_about.png')
dev_about.save('public/assets/projects/developer_portfolio_about.png', optimize=True)
print("Saved developer_portfolio_about.png", dev_about.size)


# -------------------------------------------------------------
# 5. SCRIPTO MODERNIZER
# -------------------------------------------------------------
print("\nProcessing Scripto Modernizer assets...")

# Live captured UI
scripto_hero = Image.open(f'{inspect_dir}/scripto_live_hero.png')
scripto_hero.save('public/assets/projects/scripto_modernizer_hero.png', optimize=True)
print("Saved scripto_modernizer_hero.png", scripto_hero.size)

# Sample manuscript leaf
ms_im = Image.open(f'{inspect_dir}/WhatsApp Image 2026-01-14 at 10.29.47 PM.jpeg')
ms_im.save('public/assets/projects/scripto_manuscript_source.png', optimize=True)
print("Saved scripto_manuscript_source.png", ms_im.size)

# Dual-pane paleography analysis interface
# Create a polished mockup combining the authentic manuscript with the deciphered text from ResultDisplay.tsx
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(16, 9), facecolor='#0f172a')
fig.subplots_adjust(wspace=0.08, left=0.05, right=0.95, top=0.90, bottom=0.08)

# Left: Source Manuscript
ax1.set_facecolor('#1e293b')
ax1.imshow(ms_im)
ax1.set_title("SOURCE MANUSCRIPT (Primary Document)", color='#94a3b8', fontsize=14, fontweight='bold', pad=12)
ax1.axis('off')

# Right: AI Deciphered & Modernized Transcription
ax2.set_facecolor('#1e293b')
ax2.axis('off')
ax2.set_title("AI DECIPHERED & MODERNIZED TRANSCRIPTION", color='#38bdf8', fontsize=14, fontweight='bold', pad=12)

# Text overlay in modern styling
transcription_text = (
    "ORIGINAL LANGUAGE: Classical Arabic / Early Kufic Script\n"
    "CONFIDENCE SCORE: 98.4% | GEMINI VISION PIPELINE\n\n"
    "DIPLOMATIC TRANSCRIPTION (Linguistic Preservation):\n"
    "\"آمَنُوا يُغْفَرُ لَهُمْ وَالَّذِينَ لا يَرْجُونَ أَيَّامَ اللَّهِ لِيَجْزِيَ\n"
    "قَوْمًا بِمَا كَانُوا يَكْسِبُونَ . مَنْ عَمِلَ صَالِحًا\n"
    "فَلِنَفْسِهِ وَمَنْ أَسَاءَ فَعَلَيْهَا ثُمَّ إِلَى رَبِّكُمْ تُرْجَعُونَ ...\"\n\n"
    "MODERNIZED SCHOLARLY TRANSLATION:\n"
    "\"Those who believe and exercise patience shall find reconciliation;\n"
    "for every soul is rewarded according to its righteous endeavors.\n"
    "Whoever acts with rectitude does so for the benefit of their own soul,\n"
    "and whoever acts unjustly bears the consequence thereof.\n"
    "Ultimately, unto your Sustainer is the final return.\"\n\n"
    "PALEOGRAPHIC SCHOLAR NOTES:\n"
    "• Calligraphic Style: Early monumental script with horizontal elongation (Mashq).\n"
    "• Material: Heavy parchment / vellum leaf with iron-gall ink pigments.\n"
    "• Structural Assessment: Verse terminal markers indicate late 8th-century provenance."
)

ax2.text(
    0.05, 0.95, transcription_text,
    transform=ax2.transAxes,
    fontsize=13,
    color='#e2e8f0',
    verticalalignment='top',
    family='monospace',
    linespacing=1.6,
    bbox=dict(boxstyle='round,pad=1.2', facecolor='#0f172a', edgecolor='#334155', alpha=0.9)
)

fig.suptitle("ScriptoModernizer — AI Paleography & Dual-Pane Document Modernization", color='#f8fafc', fontsize=18, fontweight='bold')
plt.savefig('public/assets/projects/scripto_workspace_dual.png', dpi=150, facecolor=fig.get_facecolor(), edgecolor='none')
plt.close()
print("Saved scripto_workspace_dual.png")


# -------------------------------------------------------------
# 6. DELOITTE DATA ANALYTICS SIMULATION
# -------------------------------------------------------------
print("\nProcessing Deloitte Data Analytics assets...")

# Certificate
cert_im = Image.open(f'{inspect_dir}/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_6a2e2cc689a3502983e280db_1781786519493_completion_certificate_page_1.png')
cert_im.save('public/assets/projects/deloitte_completion_certificate.png', optimize=True)
print("Saved deloitte_completion_certificate.png", cert_im.size)

# Render Executive Tableau Retail Analytics Dashboard from Online Retail Data Set.xlsx
df = pd.read_excel('C:/Users/moham/Downloads/Online Retail Data Set.xlsx')
# Filter out cancelled orders (Quantity <= 0) and zero UnitPrice
clean_df = df[(df['Quantity'] > 0) & (df['UnitPrice'] > 0)].copy()
clean_df['Revenue'] = clean_df['Quantity'] * clean_df['UnitPrice']
clean_df['InvoiceDate'] = pd.to_datetime(clean_df['InvoiceDate'])
clean_df['Year'] = clean_df['InvoiceDate'].dt.year
clean_df['Month'] = clean_df['InvoiceDate'].dt.to_period('M')

# Q1: 2011 Monthly Revenue
df_2011 = clean_df[clean_df['Year'] == 2011]
monthly_rev = df_2011.groupby('Month')['Revenue'].sum()

# Q2: Top 10 Countries by Revenue (excluding UK)
country_rev = clean_df[clean_df['Country'] != 'United Kingdom'].groupby('Country')['Revenue'].sum().nlargest(10)

# Set up Tableau style dark/executive theme plot
plt.style.use('dark_background')
fig = plt.figure(figsize=(16, 10), facecolor='#0f172a')
gs = fig.add_gridspec(2, 2, hspace=0.35, wspace=0.25, top=0.88, bottom=0.08, left=0.08, right=0.95)

# Top Bar / Title
fig.text(0.08, 0.94, "Deloitte Retail Business Intelligence — Executive Performance Dashboard", fontsize=18, fontweight='bold', color='#ffffff')
fig.text(0.08, 0.91, "Tableau Simulation | Dataset: Online Retail 2010–2011 | Forage Job Experience", fontsize=12, color='#94a3b8')

# Panel 1: Q1 2011 Monthly Revenue Trend (CEO View)
ax1 = fig.add_subplot(gs[0, :])
ax1.set_facecolor('#1e293b')
months_str = [str(m) for m in monthly_rev.index]
ax1.plot(months_str, monthly_rev.values / 1e6, color='#38bdf8', marker='o', linewidth=3, markersize=8, label='Monthly Revenue ($M)')
ax1.fill_between(months_str, monthly_rev.values / 1e6, color='#38bdf8', alpha=0.15)
ax1.set_title("Question 1: 2011 Monthly Revenue Trajectory (CEO Executive Overview)", fontsize=14, fontweight='bold', color='#e2e8f0', pad=10)
ax1.set_ylabel("Revenue ($ Millions)", fontsize=11, color='#94a3b8')
ax1.grid(True, linestyle='--', alpha=0.3, color='#475569')
ax1.tick_params(colors='#94a3b8', labelsize=10)
for x, y in zip(months_str, monthly_rev.values / 1e6):
    ax1.annotate(f"${y:.2f}M", (x, y), textcoords="offset points", xytext=(0, 10), ha='center', fontsize=9, color='#38bdf8', fontweight='bold')

# Panel 2: Q2 Top 10 International Revenue Markets excluding UK (CMO View)
ax2 = fig.add_subplot(gs[1, 0])
ax2.set_facecolor('#1e293b')
y_pos = np.arange(len(country_rev))
bars = ax2.barh(y_pos, country_rev.values / 1e3, color='#818cf8', height=0.65)
ax2.set_yticks(y_pos)
ax2.set_yticklabels(country_rev.index, fontsize=10, color='#e2e8f0')
ax2.invert_yaxis()
ax2.set_title("Question 2: Top 10 Countries by Revenue (excl. UK)", fontsize=13, fontweight='bold', color='#e2e8f0', pad=10)
ax2.set_xlabel("Revenue ($ Thousands)", fontsize=11, color='#94a3b8')
ax2.grid(True, linestyle='--', alpha=0.3, color='#475569', axis='x')
ax2.tick_params(colors='#94a3b8')
for bar in bars:
    w = bar.get_width()
    ax2.text(w + 5, bar.get_y() + bar.get_height()/2, f"${w:.1f}K", va='center', fontsize=9, color='#cbd5e1')

# Panel 3: Key Simulation Executive KPIs
ax3 = fig.add_subplot(gs[1, 1])
ax3.set_facecolor('#1e293b')
ax3.axis('off')
kpi_text = (
    "EXECUTIVE SIMULATION FINDINGS\n"
    "────────────────────────────────────────────\n"
    f"• Total Valid Transactions Analyzed: {len(clean_df):,}\n"
    f"• Total Gross Revenue: ${clean_df['Revenue'].sum():,.2f}\n"
    f"• Unique Active Customers: {clean_df['CustomerID'].nunique():,}\n"
    f"• Peak Revenue Month: November 2011 (${monthly_rev.max():,.2f})\n"
    f"• Leading Export Market: Netherlands (${country_rev.iloc[0]:,.2f})\n\n"
    "STRATEGIC RECOMMENDATIONS (C-SUITE):\n"
    "1. Inventory ramp-up required in September–October ahead of Q4 surge.\n"
    "2. Targeted CMO expansion in Netherlands, EIRE, and Germany.\n"
    "3. Implement high-value customer retention incentives for top decile."
)
ax3.text(
    0.05, 0.95, kpi_text,
    transform=ax3.transAxes,
    fontsize=11.5,
    color='#e2e8f0',
    verticalalignment='top',
    family='sans-serif',
    linespacing=1.7,
    bbox=dict(boxstyle='round,pad=1.2', facecolor='#0f172a', edgecolor='#38bdf8', alpha=0.8, linewidth=1.5)
)

plt.savefig('public/assets/projects/deloitte_retail_dashboard.png', dpi=150, facecolor=fig.get_facecolor(), edgecolor='none')
plt.close()
print("Saved deloitte_retail_dashboard.png")

print("\nALL PROJECT ASSETS PROCESSED SUCCESSFULLY!")
