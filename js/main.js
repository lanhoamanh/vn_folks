// VN FOLKS - Main Application Logic
// Lightweight vanilla JS for content rendering, modal handling, and UI interactions.

document.addEventListener('DOMContentLoaded', () => {
  setupNav();
  initExplore();
  initStories();
  initModals();
});

// Mobile Drawer Navigation
function setupNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  // Close drawer when clicking nav links
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => drawer.classList.remove('open'));
  });

  // Dismiss menu when clicking outside navigation
  document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      drawer.classList.remove('open');
    }
  });
}

// Simple text block parser for dynamic modal content
function formatText(text) {
  if (!text) return '';

  return text
    .trim()
    .split('\n\n')
    .map(block => {
      let trimmed = block.trim();
      if (!trimmed) return '';

      // Check if block represents an ordered list
      if (/^\d+\./.test(trimmed)) {
        const items = trimmed
          .split('\n')
          .map(line => `<li>${line.replace(/^\d+\.\s*/, '').trim()}</li>`)
          .join('');
        return `<ol class="dossier-numbered-list">${items}</ol>`;
      }

      return `<p class="dossier-text">${trimmed}</p>`;
    })
    .join('');
}

// Helper to render dynamic article bottom illustrations
const getBottomImg = (url, title) => {
  if (!url || url.includes('PASTE_IMAGE_URL')) return '';

  return `
    <div class="article-bottom-section">
      <figure class="article-bottom-figure">
        <img src="${url}" alt="${title}" class="article-bottom-image" loading="lazy" />
        <figcaption class="article-bottom-caption">Illustration: ${title}</figcaption>
      </figure>
    </div>
  `;
};

// Explore Page Card Renderer
function initExplore() {
  const container = document.getElementById('explore-grid-container');
  if (!container || typeof VNFOLKS_DATA === 'undefined') return;

  container.innerHTML = VNFOLKS_DATA.explore.map(item => `
    <article class="explore-card" data-id="${item.id}">
      <div class="explore-card-media">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <span class="card-badge">${item.badge}</span>
      </div>
      <div class="explore-card-content">
        <span class="card-viet-name">${item.vietnameseName}</span>
        <h3 class="explore-card-title">${item.title}</h3>
        <p class="explore-card-desc">${item.summary}</p>
        <div class="card-action-bar">
          <button class="btn-discover" data-explore-id="${item.id}">
            <span>Discover Archive</span>
          </button>
        </div>
      </div>
    </article>
  `).join('');

  // Event delegation for explore popup triggers
  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-discover');
    if (btn) {
      openExploreModal(btn.dataset.exploreId);
    }
  });
}

function openExploreModal(id) {
  const item = VNFOLKS_DATA.explore.find(entry => entry.id === id);
  if (!item) return;

  const modal = document.getElementById('explore-modal');
  const modalBox = modal.querySelector('.modal-window');

  let sourcesHtml = '';
  if (item.sources && item.sources.length) {
    const list = item.sources.map(src => `<li>${src}</li>`).join('');
    sourcesHtml = `
      <div class="dossier-block">
        <h4 class="dossier-heading">References &amp; Sources</h4>
        <ul class="dossier-sources-list">${list}</ul>
      </div>
    `;
  }

  let sectionsHtml = '';
  if (item.sections && item.sections.length) {
    sectionsHtml = item.sections.map(sec => `
      <div class="dossier-block">
        <h4 class="dossier-heading">${sec.heading}</h4>
        ${formatText(sec.content)}
      </div>
    `).join('');
  }

  modalBox.innerHTML = `
    <button class="modal-close-btn" aria-label="Close">&times;</button>
    <div class="modal-header-section">
      <span class="modal-pretitle">${item.badge}</span>
      <h2 class="modal-title">${item.title}</h2>
      <p class="modal-viet-subtitle">${item.vietnameseName} &mdash; ${item.subtitle}</p>
    </div>
    <div class="modal-body-content">
      ${sectionsHtml}
      ${sourcesHtml}
      ${getBottomImg(item.articleBottomImage, item.title)}
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent background scroll-bleed
}

// Stories Page Listing & Filtering
function initStories() {
  const container = document.getElementById('stories-grid-container');
  if (!container || typeof VNFOLKS_DATA === 'undefined') return;

  renderStories('all');

  // Filter bar interactions
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderStories(this.dataset.filter);
    });
  });

  // Event delegation for reading full story details
  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-read-story');
    if (btn) {
      openStoryModal(btn.dataset.storyId);
    }
  });
}

function renderStories(filter) {
  const container = document.getElementById('stories-grid-container');
  if (!container) return;

  const filtered = VNFOLKS_DATA.stories.filter(story => {
    if (filter === 'all') return true;
    if (filter === 'warnings') return story.category === 'warnings' || story.category === 'guardians';
    return story.category === filter;
  });

  container.innerHTML = filtered.map(st => `
    <article class="story-card" data-id="${st.id}" data-category="${st.category}">
      <div class="story-card-media">
        <img src="${st.image}" alt="${st.name}" loading="lazy" />
      </div>
      <div class="story-card-content">
        <span class="story-region-tag">${st.region}</span>
        <h3 class="story-card-title">${st.name}</h3>
        <span class="story-card-epithet">${st.epithet}</span>
        <p class="story-card-desc">${st.atmosphericSummary}</p>
        <div class="card-action-bar">
          <button class="btn-read-story" data-story-id="${st.id}">
            <span>Read Story</span>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function openStoryModal(id) {
  const story = VNFOLKS_DATA.stories.find(s => s.id === id);
  if (!story) return;

  const modal = document.getElementById('story-modal');
  const modalBox = modal.querySelector('.modal-window');

  let sectionsHtml = '';
  if (story.sections && story.sections.length) {
    sectionsHtml = story.sections.map(sec => `
      <div class="dossier-block">
        <h4 class="dossier-heading">${sec.heading}</h4>
        ${formatText(sec.content)}
      </div>
    `).join('');
  }

  modalBox.innerHTML = `
    <button class="modal-close-btn" aria-label="Close">&times;</button>
    <div class="modal-header-section">
      <span class="modal-pretitle">${story.region}</span>
      <h2 class="modal-title">${story.name}</h2>
      <p class="modal-viet-subtitle">${story.vietnameseName} &mdash; ${story.epithet}</p>
    </div>
    <div class="modal-body-content">
      ${sectionsHtml}
      ${getBottomImg(story.articleBottomImage, story.name)}
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Lock background scrolling
}

// Global Modal Dismissal
function initModals() {
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target.closest('.modal-close-btn') || e.target === overlay) {
        closeModals();
      }
    });
  });

  // ESC key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModals();
  });
}

function closeModals() {
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.classList.remove('active');
  });
  document.body.style.overflow = '';
}
