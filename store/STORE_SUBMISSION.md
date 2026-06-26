# Chrome Web Store Submission - PK Screenshot Resizer

## Privacy policy URL

Use this exact URL in the Chrome Web Store developer dashboard:

`https://mondary.github.io/Chrome_PKscreenshotResizer/store/privacy-policy-pk-screenshot-resizer.html`

This URL must point directly to the dedicated privacy policy page for the extension.

Do not use:

- a homepage;
- a general company site;
- a redirecting URL;
- a URL returning `403` or `404`.

## Extension behavior summary

PK Screenshot Resizer resizes the current browser window, captures the visible tab as a PNG screenshot, and lets the user save the file locally.

## Permissions summary

- `tabs`: used to identify and activate the current tab.
- `windows`: used to resize the current browser window.
- `activeTab`: used when the user explicitly triggers a capture from the extension UI.
- `downloads`: used to save the generated screenshot file locally.
- `host_permissions: <all_urls>`: currently declared in the manifest.

## Data handling summary

- No external server is used.
- No analytics or tracking is used.
- No personal data is sold or transferred.
- Screenshots are generated locally by Chrome.
- Files are saved locally on the user's device through the browser download flow.
