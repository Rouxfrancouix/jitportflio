/**
 * Apple-Style Personal Website & Admin Security Engine
 * Customized for JIT PAUL - Public Relations & Corporate Communications Professional
 */

const STORAGE_KEY = 'jit_paul_portfolio_state_v2';

// DEFAULT JIT PAUL DATA STORE
const DEFAULT_STATE = {
  appearance: {
    theme: 'dark',
    color: 'violet',
    heroTitle: 'Elevating <span class="gradient-text">Brand Reputation</span> & Strategic Media Relations.',
    heroSubtitle: 'Public Relations & Corporate Communications Specialist with nearly 3 years of experience managing 500+ media campaigns, crisis communication, press conferences, and C-suite stakeholder engagement.',
    pillText: 'PUBLIC RELATIONS & CORPORATE COMMUNICATIONS',
    brandName: 'JIT PAUL'
  },
  auth: {
    authenticated: false,
    username: 'admin',
    password: 'admin123'
  },
  profile: {
    name: 'Jit Paul',
    headline: 'Public Relations & Corporate Communications Professional',
    statusText: 'Available for PR & Communications Roles',
    avatarUrl: 'assets/jit_paul_avatar.jpg',
    bioSummary: 'Managing 50+ corporate accounts, executing high-impact press releases, crisis response, and executive communication strategies across print, digital, and broadcast platforms.',
    bioLong: 'Strategic and results-driven Public Relations & Corporate Communications Professional with nearly 3 years of hands-on experience managing 60+ media campaigns, executive coordination, and stakeholder engagement.\n\nProven track record in press release writing, media monitoring, crisis communication, brand reputation management, and cross-functional collaboration. Adept at building client relationships, executing large-scale corporate events, and delivering data-backed MIS reports for senior leadership in fast-paced environments.',
    email: 'jitpaul2022@gmail.com',
    phone: '+91 9123305417',
    location: 'Sodepur, Kolkata - 700110, West Bengal',
    linkedin: 'https://linkedin.com/in/jitpaul',
    github: 'https://github.com/jitpaul'
  },
  news: [
    {
      id: 'news-1',
      title: '500+ Corporate Media Campaigns Executed Across Print, Digital & Broadcast',
      category: 'Press Release',
      date: 'Jan 2026',
      snippet: 'Achieved an average 35% increase in brand media visibility for Mediashine PR & Advertising corporate clients.',
      content: 'Over the course of 3 years at Mediashine PR & Advertising, Jit Paul led and executed over 500 strategic media campaigns across top-tier print newspapers, digital portals, and broadcast media. The campaigns delivered an average 35% surge in client brand visibility, cementing strong media relations across regional and national media houses.',
      published: true
    },
    {
      id: 'news-2',
      title: 'Strategic Corporate Event Management: 400+ Press Conferences & Seminars',
      category: 'Events',
      date: 'Dec 2025',
      snippet: 'End-to-end management of press conferences, stakeholder meetings, vendor coordination, and post-event coverage.',
      content: 'Coordinated and executed more than 400 press conferences, product launch meets, and corporate seminars. Managed logistics, press kit creation, C-suite executive briefings, and delivered comprehensive post-event media coverage reports.',
      published: true
    },
    {
      id: 'news-3',
      title: 'Data-Backed MIS Competitive Media Analysis for C-Suite Leadership',
      category: 'Corporate PR',
      date: 'Nov 2025',
      snippet: 'Weekly and monthly intelligence reports enabling data-driven communication strategy decisions.',
      content: 'Developed streamlined weekly and monthly MIS reports using digital PR tools and media monitoring analytics. Provided C-suite executives with actionable insights into competitor positioning, brand sentiment, and media share of voice.',
      published: true
    }
  ],
  projects: [
    {
      id: 'proj-1',
      title: '500+ Corporate Media Visibility Campaign',
      category: 'Media Relations',
      description: 'Comprehensive media outreach campaign achieving 35% brand visibility lift across print, digital, and broadcast platforms for 50+ corporate accounts.',
      image: 'assets/hero_abstract.jpg',
      tags: ['Media Relations', 'Press Releases', '35% Visibility Lift'],
      link: 'https://linkedin.com/in/jitpaul'
    },
    {
      id: 'proj-2',
      title: 'End-to-End Corporate Event & Press Conference Management',
      category: 'Event Management',
      description: 'Execution of 400+ corporate press conferences, product launch events, and vendor coordination with 100% on-time delivery.',
      image: 'assets/jit_paul_avatar.jpg',
      tags: ['Event Planning', 'Press Conferences', 'Vendor Logistics'],
      link: 'https://linkedin.com/in/jitpaul'
    },
    {
      id: 'proj-3',
      title: 'Crisis Communications & Executive Messaging Suite',
      category: 'Crisis Communication',
      description: 'Proactive crisis communication protocols, executive speechwriting, corporate reporting, and brand reputation protection.',
      image: 'assets/hero_abstract.jpg',
      tags: ['Crisis PR', 'C-Suite MIS', 'Speechwriting'],
      link: 'https://linkedin.com/in/jitpaul'
    }
  ],
  skills: [
    {
      category: 'PR & Corporate Communications',
      icon: 'megaphone',
      items: [
        { name: 'Corporate & Strategic Communication', percent: 96 },
        { name: 'Press Release & Executive Speechwriting', percent: 95 },
        { name: 'Crisis Communication & Brand Reputation', percent: 90 },
        { name: 'Media Monitoring & MIS Reporting', percent: 94 }
      ]
    },
    {
      category: 'Event & Client Management',
      icon: 'calendar',
      items: [
        { name: 'Press Conferences & Corporate Events (400+)', percent: 98 },
        { name: 'Client Relationship Management (50+ Accounts)', percent: 92 },
        { name: 'Stakeholder & Vendor Coordination', percent: 94 }
      ]
    },
    {
      category: 'Software & Design Capabilities',
      icon: 'layout',
      items: [
        { name: 'Digital PR & Media Analytics Tools', percent: 90 },
        { name: 'MS Office & Google Workspace Suite', percent: 98 },
        { name: 'Canva, Illustrator, Photoshop & Figma', percent: 85 },
        { name: 'HTML & CSS (Foundational)', percent: 80 }
      ]
    }
  ],
  messages: [
    {
      id: 'msg-1',
      name: 'Media House Coordinator',
      email: 'contact@mediashine.com',
      subject: 'Press Release Distribution & Event Conference',
      message: 'Hi Jit, we would like to coordinate for our upcoming corporate product launch event next month.',
      date: 'Jan 26, 2026',
      read: false
    }
  ]
};

// STATE MANAGER
class AppState {
  constructor() {
    this.data = this.loadState();
  }

  loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return JSON.parse(JSON.stringify(DEFAULT_STATE));
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse state, resetting.', e);
      return JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
  }

  saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    renderApp();
  }

  resetDefaults() {
    this.data = JSON.parse(JSON.stringify(DEFAULT_STATE));
    this.saveState();
  }
}

const state = new AppState();

// INITIALIZE APP
document.addEventListener('DOMContentLoaded', () => {
  initRouter();
  initThemeToggle();
  initColorMenu();
  initMobileMenu();
  initAdminSecurity();
  initAdminTabs();
  initModals();
  initForms();
  renderApp();
});

// ROUTER
function initRouter() {
  const handleRoute = () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    const validViews = ['home', 'bio', 'news', 'projects', 'skills', 'contact', 'admin'];
    const targetView = validViews.includes(hash) ? hash : 'home';

    // Hide all views
    document.querySelectorAll('.page-view').forEach(view => view.classList.remove('active'));

    // Show target view
    const activeViewEl = document.getElementById(`${targetView}-view`);
    if (activeViewEl) {
      activeViewEl.classList.add('active');
    }

    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('data-view') === targetView) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Check Admin Auth state on routing to #admin
    if (targetView === 'admin') {
      checkAdminAuthState();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (window.lucide) {
      lucide.createIcons();
    }
  };

  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

// LIGHT / DARK MODE TOGGLE
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = state.data.appearance.theme || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      state.data.appearance.theme = newTheme;
      state.saveState();
      showToast(`Switched to ${newTheme.toUpperCase()} Mode`);
    });
  }
}

// COLOR PICKER MENU
function initColorMenu() {
  const trigger = document.getElementById('color-picker-trigger');
  const menu = document.getElementById('color-menu');

  if (trigger && menu) {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('open');
    });

    document.addEventListener('click', () => menu.classList.remove('open'));

    menu.querySelectorAll('.color-opt').forEach(opt => {
      opt.addEventListener('click', (e) => {
        const color = e.target.getAttribute('data-color');
        state.data.appearance.color = color;
        state.saveState();
        showToast(`Accent color updated to ${color.toUpperCase()}`);
      });
    });

    document.querySelectorAll('[data-set-color]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const color = e.target.getAttribute('data-set-color');
        state.data.appearance.color = color;
        state.saveState();
        showToast(`Accent theme updated to ${color.toUpperCase()}`);
      });
    });
  }
}

// MOBILE MENU
function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (toggle && navMenu) {
    toggle.addEventListener('click', () => navMenu.classList.toggle('open'));
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('open'));
    });
  }
}

// ADMIN AUTHENTICATION SECURITY
function checkAdminAuthState() {
  const loginCard = document.getElementById('admin-login-card');
  const dashboardContent = document.getElementById('admin-dashboard-content');

  if (state.data.auth.authenticated) {
    if (loginCard) loginCard.style.display = 'none';
    if (dashboardContent) dashboardContent.style.display = 'block';
  } else {
    if (loginCard) loginCard.style.display = 'block';
    if (dashboardContent) dashboardContent.style.display = 'none';
  }
}

function initAdminSecurity() {
  const loginForm = document.getElementById('admin-login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = document.getElementById('admin-user-input').value.trim();
      const pass = document.getElementById('admin-pass-input').value.trim();

      const validUser = state.data.auth.username || 'admin';
      const validPass = state.data.auth.password || 'admin123';

      if (user === validUser && pass === validPass) {
        state.data.auth.authenticated = true;
        state.saveState();
        checkAdminAuthState();
        showToast('Authentication successful! Welcome to Admin CMS.');
      } else {
        alert('Invalid Admin Credentials! Default is: admin / admin123');
      }
    });
  }

  // Logout Button
  const logoutBtn = document.getElementById('admin-logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      state.data.auth.authenticated = false;
      state.saveState();
      checkAdminAuthState();
      showToast('Admin Portal locked successfully.');
    });
  }
}

// ADMIN TABS
function initAdminTabs() {
  const tabs = document.querySelectorAll('.admin-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.getAttribute('data-admin-tab');
      document.querySelectorAll('.admin-panel').forEach(panel => panel.classList.remove('active'));

      const activePanel = document.getElementById(`admin-panel-${target}`);
      if (activePanel) activePanel.classList.add('active');
    });
  });

  document.getElementById('admin-reset-btn')?.addEventListener('click', () => {
    if (confirm('Restore default demo content? Custom edits will be reset.')) {
      state.resetDefaults();
      showToast('Restored default website data!');
    }
  });
}

// MODALS
function initModals() {
  document.getElementById('news-modal-close')?.addEventListener('click', () => {
    document.getElementById('news-modal')?.classList.remove('open');
  });

  document.getElementById('project-modal-close')?.addEventListener('click', () => {
    document.getElementById('project-modal')?.classList.remove('open');
  });

  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  });
}

// FORMS & SAVE HANDLERS
function initForms() {
  // Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const subject = document.getElementById('form-subject').value;
      const message = document.getElementById('form-message').value;

      const newMsg = {
        id: 'msg-' + Date.now(),
        name,
        email,
        subject,
        message,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        read: false
      };

      state.data.messages.unshift(newMsg);
      state.saveState();
      contactForm.reset();
      showToast('Thank you! Your message has been sent to Jit Paul\'s Admin Inbox.');
    });
  }

  // Admin Appearance
  document.getElementById('save-appearance-btn')?.addEventListener('click', () => {
    state.data.appearance.heroTitle = document.getElementById('admin-hero-title').value;
    state.data.appearance.heroSubtitle = document.getElementById('admin-hero-subtitle').value;
    state.data.appearance.pillText = document.getElementById('admin-pill-text').value;
    state.data.appearance.brandName = document.getElementById('admin-brand-name').value;
    state.saveState();
    showToast('Frontend appearance updated successfully!');
  });

  // Admin Profile
  document.getElementById('save-profile-btn')?.addEventListener('click', () => {
    state.data.profile.name = document.getElementById('admin-full-name').value;
    state.data.profile.headline = document.getElementById('admin-job-headline').value;
    state.data.profile.statusText = document.getElementById('admin-status-text').value;
    state.data.profile.avatarUrl = document.getElementById('admin-avatar-url').value;
    state.data.profile.email = document.getElementById('admin-email').value;
    state.data.profile.location = document.getElementById('admin-location').value;
    state.data.profile.bioSummary = document.getElementById('admin-bio-summary').value;
    state.data.profile.bioLong = document.getElementById('admin-bio-long').value;
    state.saveState();
    showToast('Profile & Resume details updated!');
  });

  // Admin Security Update
  document.getElementById('save-security-btn')?.addEventListener('click', () => {
    const newUser = document.getElementById('admin-change-user').value.trim();
    const newPass = document.getElementById('admin-change-pass').value.trim();

    if (newUser && newPass) {
      state.data.auth.username = newUser;
      state.data.auth.password = newPass;
      state.saveState();
      showToast('Admin credentials updated! Remember your new login info.');
    } else {
      alert('Please fill both username and password.');
    }
  });

  // Admin Add Press Release
  document.getElementById('admin-add-news-btn')?.addEventListener('click', () => {
    const title = prompt('Enter Press Release Title:');
    if (!title) return;
    const category = prompt('Enter Category (Press Release, Corporate PR, Events):', 'Press Release');
    const snippet = prompt('Enter Short Summary:');

    const newArticle = {
      id: 'news-' + Date.now(),
      title,
      category: category || 'Press Release',
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      snippet: snippet || title,
      content: snippet || title,
      published: true
    };

    state.data.news.unshift(newArticle);
    state.saveState();
    showToast('New press release added!');
  });

  // Admin Add Campaign
  document.getElementById('admin-add-project-btn')?.addEventListener('click', () => {
    const title = prompt('Enter Campaign Title:');
    if (!title) return;
    const category = prompt('Enter Category (Media Relations, Event Management, Crisis Communication):', 'Media Relations');
    const description = prompt('Enter Campaign Summary:');

    const newProject = {
      id: 'proj-' + Date.now(),
      title,
      category: category || 'Media Relations',
      description: description || title,
      image: 'assets/hero_abstract.jpg',
      tags: ['PR Strategy', 'Media Coverage'],
      link: 'https://linkedin.com/in/jitpaul'
    };

    state.data.projects.unshift(newProject);
    state.saveState();
    showToast('New campaign added!');
  });
}

// MAIN RENDERER
function renderApp() {
  const { appearance, profile, news, projects, skills, messages, auth } = state.data;

  // Theme & Accent Color
  document.documentElement.setAttribute('data-theme', appearance.theme || 'dark');
  document.documentElement.setAttribute('data-accent', appearance.color || 'violet');

  document.querySelectorAll('.color-opt').forEach(opt => {
    if (opt.getAttribute('data-color') === appearance.color) {
      opt.classList.add('active');
    } else {
      opt.classList.remove('active');
    }
  });

  // Header Branding
  const brandEl = document.getElementById('nav-brand-name');
  if (brandEl) brandEl.textContent = appearance.brandName || 'JIT PAUL';
  const footerBrand = document.getElementById('footer-brand-name');
  if (footerBrand) footerBrand.textContent = appearance.brandName || 'JIT PAUL';
  const copyrightEl = document.getElementById('footer-copyright-name');
  if (copyrightEl) copyrightEl.textContent = profile.name;

  const statusBadge = document.getElementById('nav-status-badge');
  if (statusBadge) statusBadge.textContent = profile.statusText;
  const bioStatusText = document.getElementById('bio-status-text');
  if (bioStatusText) bioStatusText.textContent = profile.statusText;

  // Hero Section
  const pillText = document.getElementById('hero-pill-text');
  if (pillText) pillText.textContent = appearance.pillText;
  const heroTitle = document.getElementById('hero-display-title');
  if (heroTitle) heroTitle.innerHTML = appearance.heroTitle;
  const heroSub = document.getElementById('hero-display-subtitle');
  if (heroSub) heroSub.textContent = appearance.heroSubtitle;

  // Home Highlights
  const homeBioAvatar = document.getElementById('home-bio-avatar');
  if (homeBioAvatar) homeBioAvatar.src = profile.avatarUrl;
  const homeBioName = document.getElementById('home-bio-name');
  if (homeBioName) homeBioName.textContent = profile.name;
  const homeBioTagline = document.getElementById('home-bio-tagline');
  if (homeBioTagline) homeBioTagline.textContent = profile.bioSummary;

  if (news.length > 0) {
    const featured = news[0];
    const newsTitle = document.getElementById('home-news-title');
    if (newsTitle) newsTitle.textContent = featured.title;
    const newsSnippet = document.getElementById('home-news-snippet');
    if (newsSnippet) newsSnippet.textContent = featured.snippet;
    const newsDate = document.getElementById('home-news-date');
    if (newsDate) newsDate.textContent = featured.date;
  }

  if (projects.length > 0) {
    const featProj = projects[0];
    const projTitle = document.getElementById('home-project-title');
    if (projTitle) projTitle.textContent = featProj.title;
    const projDesc = document.getElementById('home-project-desc');
    if (projDesc) projDesc.textContent = featProj.description;

    const projTagsContainer = document.getElementById('home-project-tags');
    if (projTagsContainer) {
      projTagsContainer.innerHTML = featProj.tags.map(t => `<span class="tech-tag">${t}</span>`).join('');
    }
  }

  // Bio Section
  const bioImg = document.getElementById('bio-portrait-img');
  if (bioImg) bioImg.src = profile.avatarUrl;
  const bioHeading = document.getElementById('bio-name-heading');
  if (bioHeading) bioHeading.textContent = profile.name;
  const bioHeadline = document.getElementById('bio-headline');
  if (bioHeadline) bioHeadline.textContent = profile.headline;
  const bioLongText = document.getElementById('bio-long-text');
  if (bioLongText) {
    bioLongText.innerHTML = profile.bioLong.split('\n\n').map(p => `<p>${p}</p>`).join('');
  }
  const contactEmailVal = document.getElementById('contact-email-val');
  if (contactEmailVal) contactEmailVal.textContent = profile.email;
  const contactLocVal = document.getElementById('contact-location-val');
  if (contactLocVal) contactLocVal.textContent = profile.location;

  // Grids
  renderNewsGrid(news);
  renderProjectsGrid(projects);
  renderSkills(skills);

  // Admin Forms
  populateAdminForms(appearance, profile, news, projects, messages, auth);

  if (window.lucide) lucide.createIcons();
}

// NEWS GRID
function renderNewsGrid(newsList) {
  const container = document.getElementById('news-grid-container');
  if (!container) return;

  container.innerHTML = newsList.map(item => `
    <div class="news-card" onclick="openNewsModal('${item.id}')">
      <span class="news-cat-pill">${item.category}</span>
      <h3 class="news-card-title">${item.title}</h3>
      <p class="news-card-snippet">${item.snippet}</p>
      <span class="news-card-date">${item.date}</span>
    </div>
  `).join('');

  const searchInput = document.getElementById('news-search-input');
  if (searchInput) {
    searchInput.oninput = (e) => {
      const q = e.target.value.toLowerCase();
      const filtered = newsList.filter(n => n.title.toLowerCase().includes(q) || n.snippet.toLowerCase().includes(q));
      renderNewsCardsOnly(filtered);
    };
  }

  const tabs = document.querySelectorAll('#news-category-tabs .cat-tab');
  tabs.forEach(tab => {
    tab.onclick = () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-cat');
      if (cat === 'all') {
        renderNewsCardsOnly(newsList);
      } else {
        renderNewsCardsOnly(newsList.filter(n => n.category === cat));
      }
    };
  });
}

function renderNewsCardsOnly(list) {
  const container = document.getElementById('news-grid-container');
  if (container) {
    container.innerHTML = list.map(item => `
      <div class="news-card" onclick="openNewsModal('${item.id}')">
        <span class="news-cat-pill">${item.category}</span>
        <h3 class="news-card-title">${item.title}</h3>
        <p class="news-card-snippet">${item.snippet}</p>
        <span class="news-card-date">${item.date}</span>
      </div>
    `).join('');
  }
}

function openNewsModal(id) {
  const item = state.data.news.find(n => n.id === id);
  if (!item) return;

  document.getElementById('modal-news-cat').textContent = item.category;
  document.getElementById('modal-news-date').textContent = item.date;
  document.getElementById('modal-news-title').textContent = item.title;
  document.getElementById('modal-news-body').innerHTML = `<p>${item.content}</p>`;

  document.getElementById('news-modal')?.classList.add('open');
}

// PROJECTS GRID
function renderProjectsGrid(projectsList) {
  const container = document.getElementById('projects-grid-container');
  if (!container) return;

  container.innerHTML = projectsList.map(proj => `
    <div class="project-card" onclick="openProjectModal('${proj.id}')">
      <div class="project-img-box">
        <img src="${proj.image}" alt="${proj.title}">
        <div class="project-overlay">
          <span class="news-cat-pill">${proj.category}</span>
        </div>
      </div>
      <div class="project-body">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.description}</p>
        <div class="tech-tags-row">
          ${proj.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  const tabs = document.querySelectorAll('#projects-category-tabs .cat-tab');
  tabs.forEach(tab => {
    tab.onclick = () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-proj-cat');
      if (cat === 'all') {
        renderProjectsCardsOnly(projectsList);
      } else {
        renderProjectsCardsOnly(projectsList.filter(p => p.category === cat));
      }
    };
  });
}

function renderProjectsCardsOnly(list) {
  const container = document.getElementById('projects-grid-container');
  if (container) {
    container.innerHTML = list.map(proj => `
      <div class="project-card" onclick="openProjectModal('${proj.id}')">
        <div class="project-img-box">
          <img src="${proj.image}" alt="${proj.title}">
          <div class="project-overlay">
            <span class="news-cat-pill">${proj.category}</span>
          </div>
        </div>
        <div class="project-body">
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.description}</p>
          <div class="tech-tags-row">
            ${proj.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }
}

function openProjectModal(id) {
  const proj = state.data.projects.find(p => p.id === id);
  if (!proj) return;

  document.getElementById('modal-proj-img').src = proj.image;
  document.getElementById('modal-proj-cat').textContent = proj.category;
  document.getElementById('modal-proj-title').textContent = proj.title;
  document.getElementById('modal-proj-desc').textContent = proj.description;
  document.getElementById('modal-proj-tags').innerHTML = proj.tags.map(t => `<span class="tech-tag">${t}</span>`).join('');

  document.getElementById('project-modal')?.classList.add('open');
}

// SKILLS
function renderSkills(skillsList) {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = skillsList.map(group => `
    <div class="skill-category-card">
      <h3 class="skill-cat-title"><i data-lucide="${group.icon}"></i> ${group.category}</h3>
      <div class="skill-bars-list">
        ${group.items.map(item => `
          <div class="skill-bar-item">
            <div class="skill-info">
              <span>${item.name}</span>
              <span>${item.percent}%</span>
            </div>
            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style="width: ${item.percent}%;"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// POPULATE ADMIN FORMS
function populateAdminForms(appearance, profile, news, projects, messages, auth) {
  const heroTitleInput = document.getElementById('admin-hero-title');
  if (heroTitleInput) heroTitleInput.value = appearance.heroTitle;
  const heroSubInput = document.getElementById('admin-hero-subtitle');
  if (heroSubInput) heroSubInput.value = appearance.heroSubtitle;
  const pillInput = document.getElementById('admin-pill-text');
  if (pillInput) pillInput.value = appearance.pillText;
  const brandInput = document.getElementById('admin-brand-name');
  if (brandInput) brandInput.value = appearance.brandName;

  const fullNameInput = document.getElementById('admin-full-name');
  if (fullNameInput) fullNameInput.value = profile.name;
  const headlineInput = document.getElementById('admin-job-headline');
  if (headlineInput) headlineInput.value = profile.headline;
  const statusInput = document.getElementById('admin-status-text');
  if (statusInput) statusInput.value = profile.statusText;
  const avatarInput = document.getElementById('admin-avatar-url');
  if (avatarInput) avatarInput.value = profile.avatarUrl;
  const emailInput = document.getElementById('admin-email');
  if (emailInput) emailInput.value = profile.email;
  const locInput = document.getElementById('admin-location');
  if (locInput) locInput.value = profile.location;
  const bioSummaryInput = document.getElementById('admin-bio-summary');
  if (bioSummaryInput) bioSummaryInput.value = profile.bioSummary;
  const bioLongInput = document.getElementById('admin-bio-long');
  if (bioLongInput) bioLongInput.value = profile.bioLong;

  // Security Credentials
  const changeUserInput = document.getElementById('admin-change-user');
  if (changeUserInput) changeUserInput.value = auth.username || 'admin';
  const changePassInput = document.getElementById('admin-change-pass');
  if (changePassInput) changePassInput.value = auth.password || 'admin123';

  // News Table
  const newsTable = document.getElementById('admin-news-table-body');
  if (newsTable) {
    newsTable.innerHTML = news.map(n => `
      <tr>
        <td><strong>${n.title}</strong></td>
        <td><span class="news-cat-pill">${n.category}</span></td>
        <td>${n.date}</td>
        <td>
          <div class="action-btns">
            <button class="icon-action-btn btn-del" onclick="deleteNewsItem('${n.id}')" title="Delete Post"><i data-lucide="trash-2"></i></button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  // Projects Table
  const projTable = document.getElementById('admin-projects-table-body');
  if (projTable) {
    projTable.innerHTML = projects.map(p => `
      <tr>
        <td><strong>${p.title}</strong></td>
        <td><span class="news-cat-pill">${p.category}</span></td>
        <td>${p.tags.join(', ')}</td>
        <td>
          <div class="action-btns">
            <button class="icon-action-btn btn-del" onclick="deleteProjectItem('${p.id}')" title="Delete Campaign"><i data-lucide="trash-2"></i></button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  // Inbox
  const inboxCount = document.getElementById('admin-inbox-count');
  if (inboxCount) inboxCount.textContent = messages.length;

  const inboxList = document.getElementById('admin-inbox-list');
  if (inboxList) {
    if (messages.length === 0) {
      inboxList.innerHTML = `<p style="color: var(--text-muted);">No messages received yet.</p>`;
    } else {
      inboxList.innerHTML = messages.map(m => `
        <div class="inbox-item">
          <div class="inbox-item-header">
            <div>
              <span class="inbox-sender">${m.name}</span> &bull; <span class="inbox-email">${m.email}</span>
            </div>
            <div style="display:flex; align-items:center; gap:10px;">
              <span class="inbox-date">${m.date}</span>
              <button class="icon-action-btn btn-del" onclick="deleteMessageItem('${m.id}')"><i data-lucide="trash-2"></i></button>
            </div>
          </div>
          <div class="inbox-subject">Subject: ${m.subject}</div>
          <div class="inbox-body">${m.message}</div>
        </div>
      `).join('');
    }
  }
}

// GLOBAL DELETE ACTIONS
window.deleteNewsItem = (id) => {
  if (confirm('Delete this press release?')) {
    state.data.news = state.data.news.filter(n => n.id !== id);
    state.saveState();
    showToast('Press release deleted!');
  }
};

window.deleteProjectItem = (id) => {
  if (confirm('Delete this campaign?')) {
    state.data.projects = state.data.projects.filter(p => p.id !== id);
    state.saveState();
    showToast('Campaign removed!');
  }
};

window.deleteMessageItem = (id) => {
  state.data.messages = state.data.messages.filter(m => m.id !== id);
  state.saveState();
  showToast('Message deleted from inbox.');
};

// TOAST NOTIFICATIONS
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i data-lucide="sparkles" style="color:var(--accent-primary)"></i> <span>${message}</span>`;
  container.appendChild(toast);

  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
