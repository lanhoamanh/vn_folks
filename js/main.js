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

/* --------------------------------------------------------------------------
   4. Explore Page Card Generation & Interactions
   -------------------------------------------------------------------------- */
function initExploreCards() {
  const exploreContainer = document.getElementById('explore-grid-container');
  if (!exploreContainer || typeof VNFOLKS_DATA === 'undefined') return;

  exploreContainer.innerHTML = '';

  VNFOLKS_DATA.explore.forEach(item => {
    const card = document.createElement('article');
    card.className = 'explore-card';
    card.setAttribute('data-id', item.id);

    card.innerHTML = `
      <div class="explore-card-media">
        <img src="${item.image}" alt="${item.title} folklore illustration" loading="lazy">
        <span class="card-badge">${item.badge}</span>
      </div>
      <div class="explore-card-content">
        <span class="card-viet-name">${item.vietnameseName}</span>
        <h3 class="explore-card-title">${item.title}</h3>
        <p class="explore-card-desc">${item.summary}</p>
        <div class="card-action-bar">
          <button class="btn-discover" data-explore-id="${item.id}" aria-label="Discover ${item.title}">
            <span>Discover Archive</span>
          </button>
        </div>
      </div>
    `;

    exploreContainer.appendChild(card);
  });

  // Attach event listener to discover buttons
  exploreContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-discover');
    if (!btn) return;
    const itemId = btn.getAttribute('data-explore-id');
    openExploreModal(itemId);
  });
}

function openExploreModal(itemId) {
  const item = VNFOLKS_DATA.explore.find(i => i.id === itemId);
  if (!item) return;

  const modalOverlay = document.getElementById('explore-modal');
  const modalContainer = modalOverlay.querySelector('.modal-window');

  modalContainer.innerHTML = `
    <button class="modal-close-btn" aria-label="Close dossier">&times;</button>
    <div class="modal-header-section">
      <span class="modal-pretitle">${item.badge}</span>
      <h2 class="modal-title">${item.title}</h2>
      <p class="modal-viet-subtitle">${item.vietnameseName} &mdash; ${item.subtitle}</p>
    </div>
    <div class="modal-body-content">
      <div class="dossier-block">
        <h4 class="dossier-heading">${item.belief.heading}</h4>
        ${formatDossierContent(item.belief.content)}
      </div>
      <div class="dossier-block">
        <h4 class="dossier-heading">${item.culturalStory.heading}</h4>
        ${formatDossierContent(item.culturalStory.content)}
      </div>
      <div class="dossier-block">
        <h4 class="dossier-heading">${item.historicalContext.heading}</h4>
        ${formatDossierContent(item.historicalContext.content)}
      </div>
      <div class="dossier-block">
        <h4 class="dossier-heading">${item.scienceSays.heading}</h4>
        ${formatDossierContent(item.scienceSays.content)}
      </div>
      <div class="dossier-block">
        <h4 class="dossier-heading">${item.whyItMatters.heading}</h4>
        ${formatDossierContent(item.whyItMatters.content)}
      </div>
      <div class="dossier-block">
        <h4 class="dossier-heading">REFERENCES &amp; SOURCES</h4>
        <ul class="dossier-sources-list">
          ${item.sources.map(src => `<li>${escapeHtml(src)}</li>`).join('')}
        </ul>
      </div>
      ${renderArticleBottomMedia(item.articleBottomImage, item.title)}
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* --------------------------------------------------------------------------
   5. Stories Page Card Generation & Filtering
   -------------------------------------------------------------------------- */
function initStoriesCards() {
  const storiesContainer = document.getElementById('stories-grid-container');
  if (!storiesContainer || typeof VNFOLKS_DATA === 'undefined') return;

  renderStories('all');

  // Filter Buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderStories(category);
    });
  });

  // Story click handler
  storiesContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-read-story');
    if (!btn) return;
    const storyId = btn.getAttribute('data-story-id');
    openStoryModal(storyId);
  });
}

function renderStories(filterCategory) {
  const storiesContainer = document.getElementById('stories-grid-container');
  if (!storiesContainer) return;

  const filtered = filterCategory === 'all' 
    ? VNFOLKS_DATA.stories 
    : VNFOLKS_DATA.stories.filter(s => s.category === filterCategory);

  storiesContainer.innerHTML = '';

  filtered.forEach(story => {
    const card = document.createElement('article');
    card.className = 'story-card';
    card.setAttribute('data-id', story.id);
    card.setAttribute('data-category', story.category);

    card.innerHTML = `
      <div class="story-card-media">
        <img src="${story.image}" alt="${story.name} legend illustration" loading="lazy">
      </div>
      <div class="story-card-content">
        <span class="story-region-tag">${story.region}</span>
        <h3 class="story-card-title">${story.name}</h3>
        <span class="story-card-epithet">${story.epithet}</span>
        <p class="story-card-desc">${story.atmosphericSummary}</p>
        <div class="card-action-bar">
          <button class="btn-read-story" data-story-id="${story.id}" aria-label="Read story of ${story.name}">
            <span>Read The Story</span>
          </button>
        </div>
      </div>
    `;

    storiesContainer.appendChild(card);
  });
}

function openStoryModal(storyId) {
  const story = VNFOLKS_DATA.stories.find(s => s.id === storyId);
  if (!story) return;

  const modalOverlay = document.getElementById('story-modal');
  const modalContainer = modalOverlay.querySelector('.modal-window');

  modalContainer.innerHTML = `
    <button class="modal-close-btn" aria-label="Close story dossier">&times;</button>
    <div class="modal-header-section">
      <span class="modal-pretitle">${story.region}</span>
      <h2 class="modal-title">${story.name}</h2>
      <p class="modal-viet-subtitle">${story.vietnameseName} &mdash; ${story.epithet}</p>
    </div>
    <div class="modal-body-content">
      <div class="dossier-block">
        <h4 class="dossier-heading">${story.legend.heading}</h4>
        ${formatDossierContent(story.legend.content)}
      </div>
      <div class="dossier-block">
        <h4 class="dossier-heading">${story.origins.heading}</h4>
        ${formatDossierContent(story.origins.content)}
      </div>
      <div class="dossier-block">
        <h4 class="dossier-heading">${story.culturalContext.heading}</h4>
        ${formatDossierContent(story.culturalContext.content)}
      </div>
      <div class="dossier-block">
        <h4 class="dossier-heading">${story.whatReflects.heading}</h4>
        ${formatDossierContent(story.whatReflects.content)}
      </div>
      <div class="dossier-block">
        <h4 class="dossier-heading">${story.relatedBeliefs.heading}</h4>
        ${formatDossierContent(story.relatedBeliefs.content)}
      </div>
      ${renderArticleBottomMedia(story.articleBottomImage, story.name)}
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

