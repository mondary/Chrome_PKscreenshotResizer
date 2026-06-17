Voici une liste claire des invites importantes pour votre extension Chrome :

1. Manifest Configuration:
- manifest_version: 3
- author: cmondary
- website: https://mondary.design
- version format: YYYY.XX (e.g., 2025.03)
- name: "PKscreenshotResizer" (strict naming requirement)

2. ZIP Command for Extension:
zip -r PKscreenshotResizer_{version}.zip src/ -x "src/.DS_Store"

3. Release Naming Convention:
- The zip file MUST start with "PKscreenshotResizer" followed by the version (e.g., PKscreenshotResizer_2.3.zip)
- NEVER use a prefix like "Chrome_"

4. Chrome Web Store Asset Requirements (JPEG or PNG 24-bit, NO ALPHA):
- Screenshots (Up to 5): 1280x800 or 640x400 pixels
- Small Promotional Image: 440x280 pixels
- Marquee Promotional Image (Top of page): 1400x560 pixels

5. Image Resizing Commands (macOS sips):
- Icon (128x128):
  sips -z 128 128 src/icon.png --out store/icon_128x128.png
- Screenshots (from PKscreenShots_1 & 2):
  sips -s format jpeg -z 800 1280 store/PKscreenShots_1.png --out store/screenshot_1280x800.jpg
  sips -s format jpeg -z 800 1280 store/PKscreenShots_2.png --out store/screenshot2_1280x800.jpg
- Promo Small:
  sips -s format jpeg -z 280 440 store/PKscreenShots_1.png --out store/promo_small_440x280.jpg
  sips -s format jpeg -z 280 440 store/PKscreenShots_2.png --out store/promo_small2_440x280.jpg
- Banner:
  sips -s format jpeg -z 560 1400 store/PKscreenShots_1.png --out store/banner_1400x560.jpg
  sips -s format jpeg -z 560 1400 store/PKscreenShots_2.png --out store/banner2_1400x560.jpg

6. Important Note on Format:
- The commands above use `-s format jpeg` which automatically ensures 24-bit output and removes the alpha channel (transparency).

7. Permission Justification:
- activeTab: Required to modify and interact with the new tab page content
- host permission: Necessary to fetch data if required