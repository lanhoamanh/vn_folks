// Main JavaScript for VNfolks website

document.addEventListener('DOMContentLoaded', function () {
  initMobileMenu();
  initExplorePage();
  initStoriesPage();
  initModals();
});

// Mobile navigation menu
function initMobileMenu() {
  var menuBtn = document.querySelector('.mobile-toggle');
  var drawer = document.querySelector('.mobile-nav-drawer');

  if (!menuBtn || !drawer) return;

  menuBtn.addEventListener('click', function () {
    drawer.classList.toggle('open');
  });

  // Close menu when clicking links inside drawer
  var links = drawer.querySelectorAll('a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      drawer.classList.remove('open');
    });
  }

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!drawer.contains(e.target) && !menuBtn.contains(e.target)) {
      drawer.classList.remove('open');
    }
  });
}

// Convert paragraph text into HTML paragraphs and numbered lists
function formatText(text) {
  if (!text) return '';

  var parts = text.trim().split('\n\n');
  var result = '';

  for (var i = 0; i < parts.length; i++) {
    var block = parts[i].trim();
    if (!block) continue;

    if (/^\d+\./.test(block)) {
      var lines = block.split('\n');
      result += '<ol class="dossier-numbered-list">';
      for (var j = 0; j < lines.length; j++) {
        var cleanLine = lines[j].replace(/^\d+\.\s*/, '').trim();
        result += '<li>' + cleanLine + '</li>';
      }
      result += '</ol>';
    } else {
      result += '<p class="dossier-text">' + block + '</p>';
    }
  }

  return result;
}

// Add bottom illustration to modal if available
function getBottomImageHtml(imageUrl, title) {
  if (!imageUrl || imageUrl.includes('PASTE_IMAGE_URL')) return '';

  return '<div class="article-bottom-section">' +
    '<figure class="article-bottom-figure">' +
      '<img src="' + imageUrl + '" alt="' + title + '" class="article-bottom-image" loading="lazy">' +
      '<figcaption class="article-bottom-caption">Illustration: ' + title + '</figcaption>' +
    '</figure>' +
  '</div>';
}

// Render cards on the Explore page
function initExplorePage() {
  var container = document.getElementById('explore-grid-container');
  if (!container || typeof VNFOLKS_DATA === 'undefined') return;

  container.innerHTML = '';

  var exploreList = VNFOLKS_DATA.explore;
  for (var i = 0; i < exploreList.length; i++) {
    var item = exploreList[i];
    var card = document.createElement('article');
    card.className = 'explore-card';
    card.setAttribute('data-id', item.id);

    card.innerHTML = 
      '<div class="explore-card-media">' +
        '<img src="' + item.image + '" alt="' + item.title + '" loading="lazy">' +
        '<span class="card-badge">' + item.badge + '</span>' +
      '</div>' +
      '<div class="explore-card-content">' +
        '<span class="card-viet-name">' + item.vietnameseName + '</span>' +
        '<h3 class="explore-card-title">' + item.title + '</h3>' +
        '<p class="explore-card-desc">' + item.summary + '</p>' +
        '<div class="card-action-bar">' +
          '<button class="btn-discover" data-explore-id="' + item.id + '">' +
            '<span>Discover Archive</span>' +
          '</button>' +
        '</div>' +
      '</div>';

    container.appendChild(card);
  }

  container.addEventListener('click', function (e) {
    var btn = e.target.closest('.btn-discover');
    if (btn) {
      var itemId = btn.getAttribute('data-explore-id');
      showExploreModal(itemId);
    }
  });
}

// Show modal popup for Explore topics
function showExploreModal(itemId) {
  var item = null;
  for (var i = 0; i < VNFOLKS_DATA.explore.length; i++) {
    if (VNFOLKS_DATA.explore[i].id === itemId) {
      item = VNFOLKS_DATA.explore[i];
      break;
    }
  }
  if (!item) return;

  var modal = document.getElementById('explore-modal');
  var modalBox = modal.querySelector('.modal-window');

  var sourcesHtml = '';
  if (item.sources) {
    for (var s = 0; s < item.sources.length; s++) {
      sourcesHtml += '<li>' + item.sources[s] + '</li>';
    }
  }

  modalBox.innerHTML = 
    '<button class="modal-close-btn" aria-label="Close">&times;</button>' +
    '<div class="modal-header-section">' +
      '<span class="modal-pretitle">' + item.badge + '</span>' +
      '<h2 class="modal-title">' + item.title + '</h2>' +
      '<p class="modal-viet-subtitle">' + item.vietnameseName + ' &mdash; ' + item.subtitle + '</p>' +
    '</div>' +
    '<div class="modal-body-content">' +
      '<div class="dossier-block">' +
        '<h4 class="dossier-heading">' + item.belief.heading + '</h4>' +
        formatText(item.belief.content) +
      '</div>' +
      '<div class="dossier-block">' +
        '<h4 class="dossier-heading">' + item.culturalStory.heading + '</h4>' +
        formatText(item.culturalStory.content) +
      '</div>' +
      '<div class="dossier-block">' +
        '<h4 class="dossier-heading">' + item.historicalContext.heading + '</h4>' +
        formatText(item.historicalContext.content) +
      '</div>' +
      '<div class="dossier-block">' +
        '<h4 class="dossier-heading">' + item.scienceSays.heading + '</h4>' +
        formatText(item.scienceSays.content) +
      '</div>' +
      '<div class="dossier-block">' +
        '<h4 class="dossier-heading">' + item.whyItMatters.heading + '</h4>' +
        formatText(item.whyItMatters.content) +
      '</div>' +
      '<div class="dossier-block">' +
        '<h4 class="dossier-heading">REFERENCES &amp; SOURCES</h4>' +
        '<ul class="dossier-sources-list">' + sourcesHtml + '</ul>' +
      '</div>' +
      getBottomImageHtml(item.articleBottomImage, item.title) +
    '</div>';

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Render cards and filter buttons on Stories page
function initStoriesPage() {
  var container = document.getElementById('stories-grid-container');
  if (!container || typeof VNFOLKS_DATA === 'undefined') return;

  renderStoriesList('all');

  var filterBtns = document.querySelectorAll('.filter-btn');
  for (var i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener('click', function () {
      for (var j = 0; j < filterBtns.length; j++) {
        filterBtns[j].classList.remove('active');
      }
      this.classList.add('active');
      var category = this.getAttribute('data-filter');
      renderStoriesList(category);
    });
  }

  container.addEventListener('click', function (e) {
    var btn = e.target.closest('.btn-read-story');
    if (btn) {
      var storyId = btn.getAttribute('data-story-id');
      showStoryModal(storyId);
    }
  });
}

function renderStoriesList(category) {
  var container = document.getElementById('stories-grid-container');
  if (!container) return;

  var allStories = VNFOLKS_DATA.stories;
  var filtered = [];

  for (var i = 0; i < allStories.length; i++) {
    var story = allStories[i];
    if (category === 'all') {
      filtered.push(story);
    } else if (category === 'warnings') {
      if (story.category === 'warnings' || story.category === 'guardians') {
        filtered.push(story);
      }
    } else if (story.category === category) {
      filtered.push(story);
    }
  }

  container.innerHTML = '';

  for (var k = 0; k < filtered.length; k++) {
    var st = filtered[k];
    var card = document.createElement('article');
    card.className = 'story-card';
    card.setAttribute('data-id', st.id);
    card.setAttribute('data-category', st.category);

    card.innerHTML = 
      '<div class="story-card-media">' +
        '<img src="' + st.image + '" alt="' + st.name + '" loading="lazy">' +
      '</div>' +
      '<div class="story-card-content">' +
        '<span class="story-region-tag">' + st.region + '</span>' +
        '<h3 class="story-card-title">' + st.name + '</h3>' +
        '<span class="story-card-epithet">' + st.epithet + '</span>' +
        '<p class="story-card-desc">' + st.atmosphericSummary + '</p>' +
        '<div class="card-action-bar">' +
          '<button class="btn-read-story" data-story-id="' + st.id + '">' +
            '<span>Read The Story</span>' +
          '</button>' +
        '</div>' +
      '</div>';

    container.appendChild(card);
  }
}

// Show modal popup for stories
function showStoryModal(storyId) {
  var story = null;
  for (var i = 0; i < VNFOLKS_DATA.stories.length; i++) {
    if (VNFOLKS_DATA.stories[i].id === storyId) {
      story = VNFOLKS_DATA.stories[i];
      break;
    }
  }
  if (!story) return;

  var modal = document.getElementById('story-modal');
  var modalBox = modal.querySelector('.modal-window');

  modalBox.innerHTML = 
    '<button class="modal-close-btn" aria-label="Close">&times;</button>' +
    '<div class="modal-header-section">' +
      '<span class="modal-pretitle">' + story.region + '</span>' +
      '<h2 class="modal-title">' + story.name + '</h2>' +
      '<p class="modal-viet-subtitle">' + story.vietnameseName + ' &mdash; ' + story.epithet + '</p>' +
    '</div>' +
    '<div class="modal-body-content">' +
      '<div class="dossier-block">' +
        '<h4 class="dossier-heading">' + story.legend.heading + '</h4>' +
        formatText(story.legend.content) +
      '</div>' +
      '<div class="dossier-block">' +
        '<h4 class="dossier-heading">' + story.origins.heading + '</h4>' +
        formatText(story.origins.content) +
      '</div>' +
      '<div class="dossier-block">' +
        '<h4 class="dossier-heading">' + story.culturalContext.heading + '</h4>' +
        formatText(story.culturalContext.content) +
      '</div>' +
      '<div class="dossier-block">' +
        '<h4 class="dossier-heading">' + story.whatReflects.heading + '</h4>' +
        formatText(story.whatReflects.content) +
      '</div>' +
      '<div class="dossier-block">' +
        '<h4 class="dossier-heading">' + story.relatedBeliefs.heading + '</h4>' +
        formatText(story.relatedBeliefs.content) +
      '</div>' +
      getBottomImageHtml(story.articleBottomImage, story.name) +
    '</div>';

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Modal closing helpers
function initModals() {
  var modals = document.querySelectorAll('.modal-overlay');

  for (var i = 0; i < modals.length; i++) {
    modals[i].addEventListener('click', function (e) {
      if (e.target.closest('.modal-close-btn') || e.target === this) {
        closeModals();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeModals();
    }
  });
}

function closeModals() {
  var modals = document.querySelectorAll('.modal-overlay');
  for (var i = 0; i < modals.length; i++) {
    modals[i].classList.remove('active');
  }
  document.body.style.overflow = '';
}
