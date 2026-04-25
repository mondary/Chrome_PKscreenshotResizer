chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message?.type !== 'captureScreenshot') {
    return false;
  }

  captureScreenshot(message)
    .then((result) => sendResponse({ ok: true, ...result }))
    .catch((error) => sendResponse({ ok: false, error: error.message }));

  return true;
});

async function captureScreenshot({ width, height, selectedFormat, tabId, windowId }) {
  if (!tabId || !windowId) {
    throw new Error('Onglet actif introuvable.');
  }

  await chrome.tabs.update(tabId, { active: true });

  await updateWindow(windowId, {
    width,
    height,
    state: 'normal'
  });

  await wait(1200);

  const dataUrl = await captureVisibleTab(windowId);
  const platformName = getPlatformName(selectedFormat);
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `${platformName}-${timestamp}.png`;

  await downloadScreenshot(dataUrl, filename);

  return { filename };
}

function updateWindow(windowId, updateInfo) {
  return new Promise((resolve, reject) => {
    chrome.windows.update(windowId, updateInfo, (window) => {
      const error = chrome.runtime.lastError;

      if (error) {
        reject(new Error(error.message));
        return;
      }

      resolve(window);
    });
  });
}

function captureVisibleTab(windowId) {
  return new Promise((resolve, reject) => {
    chrome.tabs.captureVisibleTab(windowId, { format: 'png' }, (dataUrl) => {
      const error = chrome.runtime.lastError;

      if (error) {
        reject(new Error(error.message));
        return;
      }

      if (!dataUrl) {
        reject(new Error('Capture vide.'));
        return;
      }

      resolve(dataUrl);
    });
  });
}

function downloadScreenshot(url, filename) {
  return new Promise((resolve, reject) => {
    chrome.downloads.download(
      {
        url,
        filename,
        saveAs: true
      },
      (downloadId) => {
        const error = chrome.runtime.lastError;

        if (error) {
          reject(new Error(error.message));
          return;
        }

        if (!downloadId) {
          reject(new Error('Téléchargement annulé ou impossible.'));
          return;
        }

        resolve(downloadId);
      }
    );
  });
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getPlatformName(format) {
  switch (format) {
    case '1200x1200': return 'chrome';
    case '1024x1024': return 'android';
    case '1024x768': return 'ios';
    case '512x512': return 'macos';
    case '1200x630': return 'wordpress';
    case '1280x720': return 'vscode';
    default: return 'screenshot';
  }
}
