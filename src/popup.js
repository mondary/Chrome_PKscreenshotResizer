document.getElementById('captureBtn').addEventListener('click', async () => {
  const button = document.getElementById('captureBtn');
  const status = document.getElementById('status');
  const formatSelect = document.getElementById('formatSelect');
  const selectedFormat = formatSelect.value;
  
  const [width, height] = selectedFormat.split('x').map(Number);
  
  button.disabled = true;
  status.textContent = `Redimensionnement à ${width}x${height}...`;
  
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (!tab?.id || !tab.windowId) {
      throw new Error('Onglet actif introuvable.');
    }

    const response = await chrome.runtime.sendMessage({
      type: 'captureScreenshot',
      width,
      height,
      selectedFormat,
      tabId: tab.id,
      windowId: tab.windowId
    });

    if (!response?.ok) {
      throw new Error(response?.error || 'Capture impossible.');
    }

    status.textContent = `Screenshot ${width}x${height} prêt.`;
    setTimeout(() => {
      status.textContent = '';
      button.disabled = false;
    }, 2000);
    
  } catch (error) {
    console.error('Erreur:', error);
    status.textContent = 'Erreur: ' + error.message;
    button.disabled = false;
  }
});
