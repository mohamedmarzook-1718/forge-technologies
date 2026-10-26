from PIL import Image
import numpy as np

# 1. YOLO Wildlife
im48 = Image.open('scripts/temp_inspect/wildlife_report_page_48.png')
# Crop box (left, top, right, bottom)
# Rows 479 to 1283, Cols 200 to 1531
w48 = im48.crop((200, 479, 1531, 1283))
w48.save('public/assets/projects/yolo_wildlife_hero.png', optimize=True)

im52 = Image.open('scripts/temp_inspect/wildlife_report_page_52.png')
# Rows 367 to 1274, Cols 200 to 1552
w52 = im52.crop((200, 367, 1552, 1274))
w52.save('public/assets/projects/yolo_detection_results.png', optimize=True)

im50 = Image.open('scripts/temp_inspect/wildlife_report_page_50.png')
# Top settings panel
w50 = im50.crop((200, 359, 1499, 1070))
w50.save('public/assets/projects/yolo_system_settings.png', optimize=True)

im51 = Image.open('scripts/temp_inspect/wildlife_report_page_51.png')
w51 = im51.crop((200, 414, 1499, 1206))
w51.save('public/assets/projects/yolo_video_upload.png', optimize=True)

print("YOLO assets cropped cleanly!")

# 2. MediRemind
# Inspect mediremind pages for browser window
# The window in mediremind has a dark browser tab bar at the top and grey border
for name in ['mediremind_page_35', 'mediremind_page_36', 'mediremind_page_37', 'mediremind_page_38']:
    im = Image.open(f'scripts/temp_inspect/{name}.png')
    arr = np.array(im.convert('L'))
    # Find the dark browser top bar (around row 200-300)
    # The browser window is centered
    # Let's find rows where there's dark pixels
    dark_rows = np.where(np.mean(arr < 220, axis=1) > 0.05)[0]
    # Filter rows > 180 to skip header text "HOME PAGE :"
    browser_rows = dark_rows[dark_rows > 180]
    top_r = browser_rows.min()
    # Bottom of the browser window is around row 780
    # Let's find cols where there's content in this range
    arr_window = arr[top_r:top_r+550, :]
    dark_cols = np.where(np.mean(arr_window < 250, axis=0) > 0.02)[0]
    left_c = dark_cols.min()
    right_c = dark_cols.max()
    bottom_r = top_r + 550
    print(f"{name}: Box ({left_c}, {top_r}, {right_c}, {bottom_r})")
    cropped = im.crop((left_c, top_r, right_c, bottom_r))
    
    out_map = {
        'mediremind_page_35': 'mediremind_dashboard_hero.png',
        'mediremind_page_38': 'mediremind_compliance_report.png',
        'mediremind_page_36': 'mediremind_schedule_manager.png',
        'mediremind_page_37': 'mediremind_notifications.png'
    }
    cropped.save(f'public/assets/projects/{out_map[name]}', optimize=True)

print("MediRemind assets cropped cleanly!")
