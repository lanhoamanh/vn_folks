/**
 * VNFOLKS — Digital Folklore Archive
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initExploreCards();
  initStoriesCards();
  initModalSystem();
});

/* --------------------------------------------------------------------------
   1. Mobile Navigation & Drawer
   -------------------------------------------------------------------------- */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navDrawer = document.querySelector('.mobile-nav-drawer');

  if (!toggleBtn || !navDrawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navDrawer.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close drawer when clicking any link
  navDrawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navDrawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close drawer when clicking outside
  document.addEventListener('click', (e) => {
    if (!navDrawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      navDrawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* --------------------------------------------------------------------------
   2. Text Formatting & Markdown Sanitizer Engine
   -------------------------------------------------------------------------- */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatDossierContent(content) {
  if (!content) return '';

  // 1. Convert markdown bold **text** to <strong>text</strong>
  let formatted = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // 2. Convert markdown italic *text* (excluding already matched bold) to <em>text</em>
  formatted = formatted.replace(/(^|[^*])\*(?!\*)(.*?)\*(?!\*)/g, '$1<em>$2</em>');

  // 3. Split content into paragraph blocks separated by double newlines
  const blocks = formatted.split(/\n\n+/);

  return blocks.map(block => {
    block = block.trim();
    if (!block) return '';

    // Check if the block consists of numbered list items (e.g. 1. ... \n 2. ...)
    if (/^\d+\.\s+/.test(block)) {
      const items = block.split(/\n(?=\d+\.\s+)/);
      const listItemsHtml = items.map(item => {
        const cleaned = item.replace(/^\d+\.\s+/, '').trim();
        return `<li class="dossier-point-item">${cleaned}</li>`;
      }).join('');
      return `<ol class="dossier-point-list">${listItemsHtml}</ol>`;
    }

    // Check if the block has bullet points
    if (block.includes('\n') && /^[•\-\*]\s+/m.test(block)) {
      const items = block.split(/\n(?=[•\-\*]\s+)/);
      const listItemsHtml = items.map(item => {
        const cleaned = item.replace(/^[•\-\*]\s+/, '').trim();
        return `<li class="dossier-bullet-item">${cleaned}</li>`;
      }).join('');
      return `<ul class="dossier-bullet-list">${listItemsHtml}</ul>`;
    }

    return `<p class="dossier-text">${block}</p>`;
  }).join('');
}

/* --------------------------------------------------------------------------
   3. Article Bottom Illustration Component
   -------------------------------------------------------------------------- */
function renderArticleBottomMedia(imageUrl, articleTitle) {
  const isPlaceholder = !imageUrl || imageUrl.trim() === '' || imageUrl.trim() === 'PASTE_IMAGE_URL_HERE';
  const cleanTitle = escapeHtml(articleTitle);

  if (isPlaceholder) {
    return `
      <div class="article-bottom-section">
        <div class="article-image-placeholder" role="region" aria-label="Illustration placeholder for ${cleanTitle}">
          <div class="placeholder-content">
            <span class="placeholder-badge">ARCHIVE ILLUSTRATION AREA</span>
            <h5 class="placeholder-heading">${cleanTitle}</h5>
            <p class="placeholder-desc">Dedicated illustration image placeholder. Replace <code>articleBottomImage</code> in <code>js/archive-data.js</code> or paste your image URL below:</p>
            <div class="placeholder-code-container">
              <code class="placeholder-code-snippet">&lt;img src="PASTE_IMAGE_URL_HERE" alt="Illustration for ${cleanTitle}"&gt;</code>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="article-bottom-section">
      <figure class="article-bottom-figure">
        <img 
          src="${escapeHtml(imageUrl)}" 
          alt="Illustration for ${cleanTitle}" 
          class="article-bottom-image" 
          loading="lazy"
          onerror="this.parentElement.innerHTML='<div class=\\'article-image-placeholder\\'><div class=\\'placeholder-content\\'><span class=\\'placeholder-badge\\'>ILLUSTRATION NOT FOUND</span><p class=\\'placeholder-desc\\'>The specified image URL could not be loaded. Please check the path in <code>js/archive-data.js</code>.</p></div></div>';"
        >
        <figcaption class="article-bottom-caption">Archive Illustration: ${cleanTitle}</figcaption>
      </figure>
    </div>
  `;
}

