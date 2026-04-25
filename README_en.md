# Screenshot Extension 1200x1200

![Project icon](icon.png)

[🇬🇧 EN](README_en.md) · [🇫🇷 FR](README.md)

✨ Chrome extension to resize window to 1200x1200 pixels and capture screenshots.

## ✅ Features
- Multiple predefined formats for different platforms
- Automatic window resizing according to selected format
- Screenshot capture with resizing
- Automatic file download with timestamp
- Smart file naming based on platform
- Simple interface with format selector and action button
- Real-time operation status

## 🧠 Usage
1. Click on the extension icon in the Chrome toolbar
2. Select the desired format from the dropdown menu:
   - Chrome Store (1200x1200)
   - Android Store (1024x1024)
   - iOS App (1024x768)
   - macOS App (512x512)
   - WordPress (1200x630)
   - VSCode Marketplace (1280x720)
3. Click the "Capture" button
4. The window will be automatically resized
5. Screenshot will be captured and downloaded automatically

## ⚙️ Settings
No configuration required - extension works directly after installation.

## 🧾 Commands
- Capture 1200x1200 : Resize window and capture screenshot

## 📦 Build & Package
Chrome extension using Manifest V3. No build needed - use the folder directly.

## 🧪 Install (Antigravity)
1. Open Chrome
2. Go to `chrome://extensions/`
3. Enable "Developer mode" (top right)
4. Click "Load unpacked"
5. Select the `Chrome_PKscreenshotResizer` folder (with src folder inside)

## 🧾 Changelog
- 1.0.0: Initial version with 1200x1200 capture functionality
- 1.1.0: Refactoring - files organized in src/ folder
- 1.2.0: Added multiple formats for different platforms (Chrome, Android, iOS, macOS, WordPress, VSCode)
- 1.3.0: Fixed screenshot capture with better quality
- 1.4.0: Improved UI and added background worker
- 1.5.0: Complete redesign with Apple-like design
- 1.6.0: Fixed extension name and added icons
- 1.7.0: Fixed icon path in manifest.json
- 1.8.0: Removed icon from manifest.json to avoid loading error
- 1.9.0: Added absolute icon path to manifest.json
- 2.0.0: Fixed icon path to point to src/icon.png file
- 2.1.0: Temporarily removed icon from manifest.json to allow extension loading
- 2.2.0: Added icon with relative path in manifest.json
- 2.3.0: Generated standard icon sizes (16, 32, 48, 128px) and icons in extension management page

## 🔗 Links
- FR README: [README.md](README.md)
- Chrome Web Store: [Coming soon]