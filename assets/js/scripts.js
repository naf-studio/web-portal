/**
 * Switch active visible view based on selected tab index.
 * @param {number} index - 1-based index corresponding to content item.
 */
function showContent(index) {
  const contentItems = document.querySelectorAll('.content-item');
  contentItems.forEach((item) => {
    item.style.display = 'none';
  });

  const selectedContent = document.getElementById(`content${index}`);
  if (selectedContent) {
    selectedContent.style.display = 'block';
  }
}

/**
 * Toggle left sidebar taskbar visibility and adjust layout margins.
 */
function toggleTaskbar() {
  const taskbar = document.getElementById('taskbar');
  const showButton = document.getElementById('show-taskbar-btn');
  const content = document.querySelector('.content');

  if (!taskbar || !showButton || !content) {
    return;
  }

  const isHidden = taskbar.style.transform === 'translateX(-100%)';
  if (isHidden) {
    taskbar.style.transform = 'translateX(0)';
    showButton.style.display = 'none';
    content.style.marginLeft = 'calc(200px + 3dvh)';
  } else {
    taskbar.style.transform = 'translateX(-100%)';
    showButton.style.display = 'block';
    content.style.marginLeft = '3dvh';
  }
}

/**
 * Copy server address to clipboard using native Clipboard API with legacy fallback.
 * @param {string} [textToCopy='naf.com'] - Hostname or address string to copy.
 * @returns {Promise<void>}
 */
async function copyText(textToCopy = 'naf.com') {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(textToCopy);
    } else {
      const tempInput = document.createElement('input');
      tempInput.style.position = 'absolute';
      tempInput.style.left = '-9999px';
      tempInput.value = textToCopy;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
    }
    alert(`Copied: ${textToCopy}`);
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const taskbar = document.getElementById('taskbar');
  const content = document.querySelector('.content');

  if (taskbar) {
    taskbar.style.transform = 'translateX(0)';
  }
  if (content) {
    content.style.marginLeft = '30dvh';
  }
});

window.showContent = showContent;
window.toggleTaskbar = toggleTaskbar;
window.copyText = copyText;
