document.addEventListener('DOMContentLoaded', function() {
  // Format buttons handling
  const formatButtons = document.querySelectorAll('.format-btn');
  let selectedFormat = '1200x1200';
  
  formatButtons.forEach(button => {
    button.addEventListener('click', function() {
      formatButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      selectedFormat = this.dataset.format;
    });
  });
  
  // Capture button handling
  document.getElementById('captureBtn').addEventListener('click', async () => {
    const button = document.getElementById('captureBtn');
    const status = document.getElementById('status');
    
    button.disabled = true;
    status.textContent = 'Resizing...';
    
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      
      if (!tab?.id || !tab.windowId) {
        throw new Error('Active tab not found.');
      }
      
      const [width, height] = selectedFormat.split('x').map(Number);
      
      const response = await chrome.runtime.sendMessage({
        type: 'captureScreenshot',
        width,
        height,
        selectedFormat,
        tabId: tab.id,
        windowId: tab.windowId
      });
      
      if (!response?.ok) {
        throw new Error(response?.error || 'Capture failed.');
      }
      
      status.textContent = 'Screenshot saved!';
      setTimeout(() => {
        status.textContent = '';
        button.disabled = false;
      }, 2000);
      
    } catch (error) {
      console.error('Error:', error);
      status.textContent = 'Error: ' + error.message;
      button.disabled = false;
    }
  });
});