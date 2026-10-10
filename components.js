/* ===== SHAVED ICE & SNOW CONE DESSERT SHOP — SHARED COMPONENTS ===== */
'use strict';

/* ─── Monochrome SVG Icons (Lucide-style) ────────────────────────────── */
const ICONS = {
    sun: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    moon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    menu: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
    x: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
    arrowUp: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>',
    arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    check: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    eye: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    eyeOff: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>',
    mapPin: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    phone: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    mail: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    clock: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
    instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    youtube: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>',
    twitter: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>',
    snowflake: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/><line x1="19.07" y1="4.93" x2="4.93" y2="19.07"/></svg>',
    users: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    calendar: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    heart: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    award: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
    truck: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
    gift: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>',
    music: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
    droplet: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
};

/* ─── Brand Logo SVG ────────────────────────────────────── */
const LOGO_SVG = `<svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 45 L35 92 L65 92 L75 45 Z" fill="var(--primary)" rx="3"/>
    <ellipse cx="50" cy="45" rx="26" ry="6" fill="var(--secondary)" opacity="0.25"/>
    <circle cx="50" cy="28" r="22" fill="var(--secondary)"/>
    <circle cx="42" cy="23" r="8" fill="var(--primary)" opacity="0.65"/>
    <circle cx="58" cy="26" r="7" fill="#FFC312" opacity="0.55"/>
    <circle cx="50" cy="16" r="6" fill="#A3CB38" opacity="0.55"/>
    <circle cx="50" cy="38" r="3" fill="white" opacity="0.6"/>
    <circle cx="44" cy="35" r="2" fill="white" opacity="0.4"/>
</svg>`;

/* Font Awesome Social Login Icons */
const GOOGLE_SVG = `<i class="fa-brands fa-google" style="font-size:18px;"></i>`;
const APPLE_SVG = `<i class="fa-brands fa-apple" style="font-size:19px;"></i>`;

/* ─── THEME & DIRECTION ─────────────────────────────────── */
(function initThemeDir() {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('frost_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) html.classList.add('dark');
    if (localStorage.getItem('frost_dir') === 'rtl') html.setAttribute('dir', 'rtl');
})();

function toggleTheme(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const html = document.documentElement;
    html.classList.toggle('dark');
    localStorage.setItem('frost_theme', html.classList.contains('dark') ? 'dark' : 'light');
    document.querySelectorAll('.theme-icon-wrap').forEach(updateThemeIcon);
}

function updateThemeIcon(el) {
    if (!el) return;
    const isDark = document.documentElement.classList.contains('dark');
    el.innerHTML = isDark ? ICONS.sun : ICONS.moon;
}

function toggleDir(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const html = document.documentElement;
    const isRTL = html.getAttribute('dir') === 'rtl';
    html.setAttribute('dir', isRTL ? 'ltr' : 'rtl');
    localStorage.setItem('frost_dir', isRTL ? 'ltr' : 'rtl');
    document.querySelectorAll('.dir-label').forEach(el => {
        el.textContent = isRTL ? 'LTR' : 'RTL';
    });
}

/* ─── PASSWORD TOGGLE ────────────────────────────────── */
function togglePasswordVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    const iconWrap = (btn && btn.querySelector) ? (btn.querySelector('.pw-icon') || btn) : btn;
    if (iconWrap) {
        iconWrap.innerHTML = isPassword ? ICONS.eyeOff : ICONS.eye;
    }
}

/* ─── AUTH PAGE HELPERS ─────────────────────────────────── */
function initAuthPage() {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('frost_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) html.classList.add('dark');
    if (localStorage.getItem('frost_dir') === 'rtl') html.setAttribute('dir', 'rtl');

    // Update icons
    document.querySelectorAll('.theme-icon-wrap').forEach(updateThemeIcon);
    document.querySelectorAll('.dir-label').forEach(el => {
        el.textContent = html.getAttribute('dir') === 'rtl' ? 'RTL' : 'LTR';
    });
}

/* ─── NAVBAR ─────────────────────────────────────────── */
function buildNavbar() {
    const el = document.getElementById('navbar-placeholder') || document.getElementById('main-nav');
    if (!el) return;
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const links = [
        { href: 'index.html', label: 'Home' },
        { href: 'home2.html', label: 'Home 2' },
        { href: 'menu.html', label: 'Menu' },
        { href: 'catering.html', label: 'Catering & Events' },
        { href: 'locations.html', label: 'Locations' },
        { href: 'contact.html', label: 'Contact' },
    ];

    const isDark = document.documentElement.classList.contains('dark');
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

    const navLinksHTML = links.map(l => {
        const isActive = currentPage === l.href || (currentPage === '' && l.href === 'index.html');
        return `<a href="${l.href}" class="nav-link ${isActive ? 'active' : ''}">${l.label}</a>`;
    }).join('');

    const mobileLinksHTML = links.map(l => {
        const isActive = currentPage === l.href || (currentPage === '' && l.href === 'index.html');
        return `<a href="${l.href}" class="mob-link ${isActive ? 'active' : ''}">${l.label}</a>`;
    }).join('');

    const nav = document.createElement('div');
    nav.innerHTML = `
    <header class="navbar site-header" id="navbar">
        <div class="nav-inner header-container">
            <!-- Logo -->
            <a href="index.html" class="nav-logo logo-link" aria-label="Frost & Flurry Home">
                <svg width="38" height="38" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter:drop-shadow(0 2px 8px rgba(255, 99, 72, 0.4));flex-shrink:0;">
                    <path d="M25 45 L35 92 L65 92 L75 45 Z" fill="var(--primary)" rx="3"/>
                    <ellipse cx="50" cy="45" rx="26" ry="6" fill="var(--secondary)" opacity="0.25"/>
                    <circle cx="50" cy="28" r="22" fill="var(--secondary)"/>
                    <circle cx="42" cy="23" r="8" fill="var(--primary)" opacity="0.65"/>
                    <circle cx="58" cy="26" r="7" fill="#FFC312" opacity="0.55"/>
                    <circle cx="50" cy="16" r="6" fill="#A3CB38" opacity="0.55"/>
                    <circle cx="50" cy="38" r="3" fill="white" opacity="0.6"/>
                    <circle cx="44" cy="35" r="2" fill="white" opacity="0.4"/>
                </svg>
                <div class="nav-logo-text">
                    <span class="brand-top">FROST</span>
                    <span class="brand-bottom">& Flurry</span>
                </div>
            </a>

            <!-- Desktop Nav Links -->
            <nav class="nav-links main-nav" aria-label="Main navigation">
                ${navLinksHTML}
            </nav>

            <!-- Right Actions -->
            <div class="nav-actions header-actions">
                <!-- RTL Toggle -->
                <button onclick="toggleDir(event)" class="nav-icon-btn icon-btn dir-toggle" title="Toggle Direction" aria-label="Toggle direction">
                    <span class="dir-label" style="font-size:0.625rem;font-weight:600;">${isRTL ? 'LTR' : 'RTL'}</span>
                </button>
                <!-- Theme Toggle -->
                <button onclick="toggleTheme(event)" class="nav-icon-btn icon-btn theme-toggle" title="Toggle Theme" aria-label="Toggle dark mode">
                    <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
                </button>
                <!-- CTAs -->
                <a href="login.html" class="btn btn-primary btn-sm">Sign In</a>
                <!-- Mobile Hamburger -->
                <button class="mobile-menu-btn icon-btn" onclick="toggleMobileMenu(event)" aria-label="Toggle navigation menu">
                    <span class="mobile-menu-icon">${ICONS.menu}</span>
                </button>
            </div>
        </div>

        <!-- Mobile Backdrop -->
        <div class="mobile-backdrop" id="mobile-backdrop" onclick="toggleMobileMenu(event)"></div>

        <!-- Mobile Menu Dropdown -->
        <div class="mobile-menu" id="mobile-menu">
            ${mobileLinksHTML}
            <div class="mob-actions">
                <a href="login.html" class="btn btn-primary w-full">Sign In</a>
            </div>
            <div class="mob-toggles">
                <button onclick="toggleDir(event)" class="nav-icon-btn icon-btn" title="Toggle Direction" aria-label="Toggle direction">
                    <span class="dir-label" style="font-size:0.625rem;font-weight:600;">${isRTL ? 'LTR' : 'RTL'}</span>
                </button>
                <button onclick="toggleTheme(event)" class="nav-icon-btn icon-btn" title="Toggle Theme" aria-label="Toggle dark mode">
                    <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
                </button>
            </div>
        </div>
    </header>
    <div class="navbar-spacer"></div>`;

    el.replaceWith(nav);
}

function toggleMobileMenu(e) {
    if (e && e.stopPropagation) {
        e.stopPropagation();
    }
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-backdrop');
    const iconEl = document.querySelector('.mobile-menu-icon');
    if (!menu) return;

    const isOpen = menu.classList.contains('open');
    if (isOpen) {
        menu.classList.remove('open');
        if (backdrop) backdrop.classList.remove('open');
        if (iconEl) iconEl.innerHTML = ICONS.menu;
        document.body.classList.remove('nav-open');
    } else {
        menu.classList.add('open');
        if (backdrop) backdrop.classList.add('open');
        if (iconEl) iconEl.innerHTML = ICONS.x;
        document.body.classList.add('nav-open');
    }
}

// Close mobile menu on outside click
document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-backdrop');
    const btn = document.querySelector('.mobile-menu-btn');
    if (!menu || !menu.classList.contains('open')) return;

    if (btn && (btn === e.target || btn.contains(e.target))) return;
    if (menu.contains(e.target)) return;

    menu.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    document.body.classList.remove('nav-open');
    const iconEl = document.querySelector('.mobile-menu-icon');
    if (iconEl) iconEl.innerHTML = ICONS.menu;
});

/* ─── FOOTER ─────────────────────────────────────────── */
function buildFooter() {
    const el = document.getElementById('footer-placeholder') || document.getElementById('main-footer');
    if (!el) return;
    const footer = document.createElement('footer');
    footer.className = 'footer site-footer';
    footer.id = 'site-footer';
    footer.innerHTML = `
        <div class="container footer-container">
            <div class="footer-grid">
                <!-- Column 1: Brand & Socials -->
                <div class="footer-brand">
                    <a href="index.html" class="nav-logo footer-logo" aria-label="Frost & Flurry Home">
                        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter:drop-shadow(0 2px 8px rgba(255, 99, 72, 0.4));flex-shrink:0;">
                            <path d="M25 45 L35 92 L65 92 L75 45 Z" fill="var(--primary)" rx="3"/>
                            <ellipse cx="50" cy="45" rx="26" ry="6" fill="var(--secondary)" opacity="0.25"/>
                            <circle cx="50" cy="28" r="22" fill="var(--secondary)"/>
                            <circle cx="42" cy="23" r="8" fill="var(--primary)" opacity="0.65"/>
                            <circle cx="58" cy="26" r="7" fill="#FFC312" opacity="0.55"/>
                            <circle cx="50" cy="16" r="6" fill="#A3CB38" opacity="0.55"/>
                            <circle cx="50" cy="38" r="3" fill="white" opacity="0.6"/>
                            <circle cx="44" cy="35" r="2" fill="white" opacity="0.4"/>
                        </svg>
                        <div class="nav-logo-text">
                            <span class="brand-top" style="color:#fff;">FROST</span>
                            <span class="brand-bottom">& Flurry</span>
                        </div>
                    </a>
                    <p>Hand-crafted shaved ice and snow cones made with premium natural fruit syrups and fresh tropical toppings. Bringing pure island bliss to every scoop since 2018.</p>
                    <div class="footer-socials footer-social">
                        <a href="#" class="footer-social-link social-link" aria-label="Facebook">${ICONS.facebook}</a>
                        <a href="#" class="footer-social-link social-link" aria-label="Instagram">${ICONS.instagram}</a>
                        <a href="#" class="footer-social-link social-link" aria-label="YouTube">${ICONS.youtube}</a>
                        <a href="#" class="footer-social-link social-link" aria-label="Twitter">${ICONS.twitter}</a>
                    </div>
                </div>

                <!-- Column 2: Quick Links -->
                <div class="footer-col">
                    <h4 class="footer-col-title footer-title">QUICK LINKS</h4>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="home2.html">Home 2 — Island Vibes</a></li>
                        <li><a href="menu.html">Our Menu</a></li>
                        <li><a href="catering.html">Catering & Events</a></li>
                        <li><a href="locations.html">Locations & Trucks</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>

                <!-- Column 3: Resources & Info -->
                <div class="footer-col">
                    <h4 class="footer-col-title footer-title">RESOURCES</h4>
                    <ul class="footer-links">
                        <li><a href="coming-soon.html">Flavors & Nutrition</a></li>
                        <li><a href="coming-soon.html">Careers & Team</a></li>
                        <li><a href="coming-soon.html">Franchise Info</a></li>
                        <li><a href="login.html">Member Sign In</a></li>
                        <li><a href="signup.html">Join Rewards</a></li>
                        <li><a href="404.html">404 Error Page</a></li>
                        <li><a href="coming-soon.html">Coming Soon</a></li>
                    </ul>
                </div>

                <!-- Column 4: Stay Updated Card -->
                <div class="footer-col footer-col-newsletter">
                    <div class="footer-newsletter-card">
                        <h4 class="footer-newsletter-title">Stay Updated</h4>
                        <p class="footer-newsletter-desc">Get secret flavor drops, VIP tasting invites, truck locations & weekly deals.</p>
                        <form onsubmit="event.preventDefault(); alert('Subscribed successfully!'); this.reset();" class="footer-newsletter-form">
                            <input type="email" placeholder="your@email.com" class="footer-newsletter-input" required>
                            <button type="submit" class="footer-newsletter-btn">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="footer-bottom">
                <p class="footer-copyright">&copy; ${new Date().getFullYear()} FROST & FLURRY. All rights reserved.</p>
                <div class="footer-bottom-links">
                    <a href="coming-soon.html">Privacy Policy</a>
                    <a href="coming-soon.html">Terms of Service</a>
                    <a href="coming-soon.html">Cookie Settings</a>
                </div>
            </div>
        </div>
    `;

    el.replaceWith(footer);
}

/* ─── BACK TO TOP ──────────────────────────────────────── */
function buildBackToTop() {
    if (document.body.classList.contains('auth-page') || document.body.classList.contains('fullscreen-page')) return;
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.id = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = ICONS.arrowUp;
    btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });
}

/* ─── SCROLL ANIMATIONS ──────────────────────────────── */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-up, .fade-in, .scale-in, .slide-left, .slide-right').forEach(el => {
        observer.observe(el);
    });
}

/* ─── HEADER SCROLL ────────────────────────────────────── */
function initHeaderScroll() {
    let lastScroll = 0;
    const header = document.getElementById('navbar') || document.getElementById('site-header') || document.querySelector('.navbar');
    if (!header) return;

    window.addEventListener('scroll', () => {
        const current = window.scrollY;
        header.classList.toggle('scrolled', current > 60);
        lastScroll = current;
    });
}

/* ─── HERO SLIDER (3 Slides, 5s Auto-Rotation) ───────────── */
function initHeroSlider() {
    const track = document.getElementById('hero-slides-track');
    if (!track) return;

    const slides = track.querySelectorAll('.hero-split-slide, .hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    const thumbs = document.querySelectorAll('.hero-thumb-tab');
    if (!slides.length) return;

    let current = 0;
    let timer = null;
    const interval = 5000; // Switch every 5 seconds

    function goToSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        current = index;

        slides.forEach((s, idx) => {
            s.classList.toggle('active', idx === current);
        });

        dots.forEach((d, idx) => {
            d.classList.toggle('active', idx === current);
        });

        thumbs.forEach((t, idx) => {
            t.classList.toggle('active', idx === current);
        });
    }

    function next() {
        goToSlide(current + 1);
    }

    function prev() {
        goToSlide(current - 1);
    }

    function startTimer() {
        stopTimer();
        timer = setInterval(next, interval);
    }

    function stopTimer() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    const prevBtn = document.getElementById('hero-prev');
    const nextBtn = document.getElementById('hero-next');
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            next();
            startTimer();
        });
    }
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            prev();
            startTimer();
        });
    }

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', function(e) {
            e.preventDefault();
            goToSlide(idx);
            startTimer();
        });
    });

    window.goToHeroSlide = function(idx) {
        goToSlide(idx);
        startTimer();
    };

    thumbs.forEach((thumb, idx) => {
        thumb.addEventListener('click', function(e) {
            e.preventDefault();
            goToSlide(idx);
            startTimer();
        });
    });

    const heroSection = document.getElementById('hero-section') || document.getElementById('hero') || document.getElementById('hero-2');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopTimer);
        heroSection.addEventListener('mouseleave', startTimer);

        // Touch swipe support
        let touchStartX = 0;
        let touchEndX = 0;
        heroSection.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        heroSection.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                next();
                startTimer();
            } else if (touchEndX - touchStartX > 50) {
                prev();
                startTimer();
            }
        }, { passive: true });
    }

    startTimer();
}

/* ─── TESTIMONIAL SLIDER (3 Slides, 5s Auto-Rotation) ───── */
function initTestimonialSlider() {
    const track = document.getElementById('testimonial-slides-track');
    if (!track) return;

    const slides = track.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dot');
    const prevBtn = document.getElementById('testimonial-prev');
    const nextBtn = document.getElementById('testimonial-next');
    if (!slides.length) return;

    let current = 0;
    let timer = null;
    const interval = 5000; // 5 seconds once

    function goToSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        current = index;

        slides.forEach((s, idx) => {
            s.classList.toggle('active', idx === current);
        });

        dots.forEach((d, idx) => {
            d.classList.toggle('active', idx === current);
        });
    }

    function next() {
        goToSlide(current + 1);
    }

    function prev() {
        goToSlide(current - 1);
    }

    function startTimer() {
        stopTimer();
        timer = setInterval(next, interval);
    }

    function stopTimer() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            next();
            startTimer();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            prev();
            startTimer();
        });
    }

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', function(e) {
            e.preventDefault();
            goToSlide(idx);
            startTimer();
        });
    });

    const section = document.getElementById('home2-testimonials');
    if (section) {
        section.addEventListener('mouseenter', stopTimer);
        section.addEventListener('mouseleave', startTimer);

        let touchStartX = 0;
        let touchEndX = 0;
        section.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        section.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                next();
                startTimer();
            } else if (touchEndX - touchStartX > 50) {
                prev();
                startTimer();
            }
        }, { passive: true });
    }

    startTimer();
}

/* ─── TEXTURE STUDIO (#craft-studio) ────────────────────────── */
function initTextureStudio() {
    const tabs = document.querySelectorAll('.texture-tab-btn');
    if (!tabs.length) return;

    const texturesData = {
        ribbon: {
            title: "Micro-Ribbon Snow Texture",
            badge: "Signature Standard",
            image: "assets/images/about-preparation.jpg",
            desc: "Tempered for 30 minutes until glass-clear, then sheared with German surgical steel into ribbon threads that absorb syrups down to the final drop.",
            absorb: "98%",
            absorbBar: "98%",
            thin: "< 0.18 mm",
            thinBar: "94%",
            chips: ["36-Hr Slow Freeze", "Zero Ice Crunch", "Instant Palate Melt"]
        },
        silk: {
            title: "Island Silk Cream Fluff",
            badge: "Luxe Infusion",
            image: "assets/images/flavor-coconut.jpg",
            desc: "Spun with micro-fine ice ribbons layered with sweetened vanilla cream snow caps for a velvet mouthfeel that never turns icy.",
            absorb: "94%",
            absorbBar: "94%",
            thin: "0.22 mm",
            thinBar: "86%",
            chips: ["Velvet Cream Cap", "Double-Whipped", "Slow Meltdown"]
        },
        kakigori: {
            title: "Pure Mountain Kakigori",
            badge: "Artisan Heritage",
            image: "assets/images/flavor-strawberry.jpg",
            desc: "Inspired by traditional Japanese shaved ice masters, using ultra-purified mineral water frozen slowly for 48 hours to yield feather-light crystals.",
            absorb: "99%",
            absorbBar: "99%",
            thin: "< 0.12 mm",
            thinBar: "98%",
            chips: ["Japanese Steel Blade", "48-Hr Deep Freeze", "Feather Density"]
        }
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');

            const key = tab.getAttribute('data-texture');
            const data = texturesData[key];
            if (!data) return;

            const titleEl = document.getElementById('texture-title');
            const badgeEl = document.getElementById('texture-badge');
            const descEl = document.getElementById('texture-desc');
            const absorbEl = document.getElementById('metric-absorb');
            const barAbsorbEl = document.getElementById('bar-absorb');
            const thinEl = document.getElementById('metric-thin');
            const barThinEl = document.getElementById('bar-thin');
            const chipsEl = document.getElementById('texture-chips');
            const imgEl = document.getElementById('craft-preview-img');

            if (titleEl) titleEl.textContent = data.title;
            if (badgeEl) badgeEl.textContent = data.badge;
            if (descEl) descEl.textContent = data.desc;
            if (absorbEl) absorbEl.textContent = data.absorb;
            if (barAbsorbEl) barAbsorbEl.style.width = data.absorbBar;
            if (thinEl) thinEl.textContent = data.thin;
            if (barThinEl) barThinEl.style.width = data.thinBar;

            if (chipsEl) {
                chipsEl.innerHTML = data.chips.map(chip => 
                    `<span class="craft-chip"><i class="fa-solid fa-circle-check"></i> ${chip}</span>`
                ).join('');
            }

            // Update image with smooth crossfade
            if (imgEl && data.image) {
                imgEl.style.opacity = '0.35';
                imgEl.style.transform = 'scale(0.97)';
                setTimeout(() => {
                    imgEl.src = data.image;
                    imgEl.style.opacity = '1';
                    imgEl.style.transform = 'scale(1)';
                }, 180);
            }
        });
    });

    // Simulate Shave Cycle Button
    const simBtn = document.getElementById('craft-simulate-btn');
    const shimmer = document.getElementById('craft-shimmer-effect');
    const visualFrame = document.getElementById('craft-visual-frame');
    if (simBtn && shimmer) {
        simBtn.addEventListener('click', () => {
            shimmer.classList.remove('shimmer-active');
            if (visualFrame) visualFrame.classList.remove('is-shaving');
            void shimmer.offsetWidth; // trigger reflow
            shimmer.classList.add('shimmer-active');
            if (visualFrame) visualFrame.classList.add('is-shaving');

            const originalHTML = simBtn.innerHTML;
            simBtn.innerHTML = '<i class="fa-solid fa-snowflake fa-spin"></i> Shaving Fresh Snow...';
            simBtn.disabled = true;

            setTimeout(() => {
                simBtn.innerHTML = originalHTML;
                simBtn.disabled = false;
                if (visualFrame) visualFrame.classList.remove('is-shaving');
            }, 1200);
        });
    }
}

/* ─── CRAVING ROULETTE (#island-harvest) ─────────────────────── */
function initCravingGenerator() {
    const spinBtn = document.getElementById('btn-spin-roulette');
    const resultCard = document.getElementById('roulette-result-card');
    if (!spinBtn || !resultCard) return;

    const combos = [
        {
            name: "The Volcano Sunrise",
            desc: "A fiery sweet explosion of tropical sunshine topped with a cool velvet snow cap.",
            type: "Chef's Secret Recipe",
            tags: ["Sweet & Zesty", "Crowd Favorite"],
            base: "Micro-Ribbon Fluff",
            syrups: "Mango + Passion Fruit",
            drizzle: "Condensed Milk Snow Cap",
            crunch: "Toasted Coconut + Mochi"
        },
        {
            name: "Hana Rainforest Chill",
            desc: "Crisp and electrifying blend of tart island lime kissed with fresh sweet mountain berries.",
            type: "Highland Rare Special",
            tags: ["Citrus Punch", "Ultra Refreshing"],
            base: "Mountain Kakigori",
            syrups: "Lime Mojito + Wild Strawberry",
            drizzle: "Organic Honey Glaze",
            crunch: "Popping Boba + Fresh Mint"
        },
        {
            name: "Coconut Cloud Nine",
            desc: "A creamy tropical paradise layered with velvety haupia milk and island passion drizzle.",
            type: "Island Velvet Pick",
            tags: ["Silky Sweet", "Decadent & Smooth"],
            base: "Island Silk Cream",
            syrups: "Haupia Coconut + Blue Lagoon",
            drizzle: "Coconut Cream Snow Cap",
            crunch: "Shaved Almonds + Rice Crisps"
        },
        {
            name: "Tropical Typhoon",
            desc: "Three-layer rainbow avalanche of mango, wild strawberry, and blue curacao syrups.",
            type: "Signature Triple-Wave",
            tags: ["Triple-Flavor", "Vibrant Burst"],
            base: "Micro-Ribbon Fluff",
            syrups: "Mango + Strawberry + Curacao",
            drizzle: "Vanilla Sweet Cream",
            crunch: "Rainbow Jellies + Boba"
        },
        {
            name: "Sunset Passion Float",
            desc: "Tangy passionfruit syrup layered with sweet golden peach puree and white chocolate curls.",
            type: "Artisan Summer Drop",
            tags: ["Golden Glow", "Tropical Zing"],
            base: "Pure Kakigori",
            syrups: "Kauai Passion + Peach Puree",
            drizzle: "Condensed Snow Milk",
            crunch: "White Choc Curls + Mochi"
        }
    ];

    let currentIndex = 0;

    spinBtn.addEventListener('click', () => {
        resultCard.classList.remove('spinning');
        spinBtn.classList.remove('spinning-btn');
        void resultCard.offsetWidth; // reflow
        resultCard.classList.add('spinning');
        spinBtn.classList.add('spinning-btn');
        setTimeout(() => spinBtn.classList.remove('spinning-btn'), 650);

        // Pick different index
        let nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * combos.length);
        } while (nextIndex === currentIndex && combos.length > 1);
        currentIndex = nextIndex;

        const combo = combos[currentIndex];

        const nameEl = document.getElementById('roulette-combo-name');
        const descEl = document.getElementById('roulette-combo-desc');
        const typeEl = document.getElementById('roulette-type');
        const tagsEl = document.getElementById('roulette-tags');
        const baseEl = document.getElementById('roulette-base');
        const syrupsEl = document.getElementById('roulette-syrups');
        const drizzleEl = document.getElementById('roulette-drizzle');
        const crunchEl = document.getElementById('roulette-crunch');

        // Quick timeout to switch content halfway through shuffle
        setTimeout(() => {
            if (nameEl) nameEl.textContent = combo.name;
            if (descEl) descEl.textContent = combo.desc;
            if (typeEl) typeEl.innerHTML = `<i class="fa-solid fa-crown"></i> ${combo.type}`;
            if (tagsEl) {
                tagsEl.innerHTML = combo.tags.map(tag => 
                    `<span class="roulette-tag"><i class="fa-solid fa-star"></i> ${tag}</span>`
                ).join('');
            }
            if (baseEl) baseEl.textContent = combo.base;
            if (syrupsEl) syrupsEl.textContent = combo.syrups;
            if (drizzleEl) drizzleEl.textContent = combo.drizzle;
            if (crunchEl) crunchEl.textContent = combo.crunch;
        }, 180);
    });
}

/* ─── HERO THEMED SNOW FLURRY PARTICLE CANVAS ────────────── */
function initHeroSnowCanvas() {
    const canvas = document.getElementById('hero-snow-canvas') || document.getElementById('home2-snow-canvas') || document.querySelector('.hero-snow-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId = null;

    function resize() {
        if (!canvas.parentElement) return;
        width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
        height = canvas.height = canvas.parentElement.offsetHeight || 600;
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    // 38 soft snow flurries and ice crystals
    const particleCount = 38;
    const particles = [];

    const isDark = () => document.documentElement.classList.contains('dark') || document.body.classList.contains('dark');

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * (width || window.innerWidth),
            y: Math.random() * (height || 600),
            radius: Math.random() * 2.8 + 1,
            speedY: Math.random() * 0.7 + 0.35,
            speedX: (Math.random() - 0.5) * 0.5,
            wobbleSpeed: Math.random() * 0.03 + 0.01,
            wobbleAmp: Math.random() * 1.5 + 0.5,
            angle: Math.random() * Math.PI * 2,
            opacity: Math.random() * 0.55 + 0.25,
            isStar: Math.random() > 0.65
        });
    }

    function drawCrystal(ctx, x, y, r, alpha) {
        ctx.save();
        ctx.translate(x, y);
        ctx.strokeStyle = isDark() ? `rgba(220, 245, 255, ${alpha})` : `rgba(10, 189, 227, ${alpha * 0.7})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, -r * 2);
        ctx.lineTo(0, r * 2);
        ctx.moveTo(-r * 2, 0);
        ctx.lineTo(r * 2, 0);
        ctx.stroke();
        ctx.restore();
    }

    function render() {
        ctx.clearRect(0, 0, width, height);
        const dark = isDark();

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];

            p.angle += p.wobbleSpeed;
            p.y += p.speedY;
            p.x += p.speedX + Math.sin(p.angle) * (p.wobbleAmp * 0.35);

            if (p.y > height + 10) {
                p.y = -10;
                p.x = Math.random() * width;
            }
            if (p.x > width + 10) p.x = -10;
            if (p.x < -10) p.x = width + 10;

            if (p.isStar) {
                drawCrystal(ctx, p.x, p.y, p.radius, p.opacity);
            } else {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = dark 
                    ? `rgba(255, 255, 255, ${p.opacity})`
                    : `rgba(10, 189, 227, ${p.opacity * 0.65})`;
                ctx.shadowBlur = dark ? 8 : 4;
                ctx.shadowColor = dark ? 'rgba(10, 189, 227, 0.4)' : 'rgba(255, 99, 72, 0.2)';
                ctx.fill();
            }
        }

        animationFrameId = requestAnimationFrame(render);
    }

    render();

    // Pause when scrolled offscreen
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    if (animationFrameId) cancelAnimationFrame(animationFrameId);
                    animationFrameId = null;
                } else if (!animationFrameId) {
                    render();
                }
            });
        }, { threshold: 0.05 });

        observer.observe(canvas);
    }
}

/* ─── HOME 2: SUB-ZERO FROST VAPOR & ICE MIST CANVAS ──────── */
function initHome2DessertCanvas() {
    const canvas = document.getElementById('home2-dessert-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId = null;
    let time = 0;
    const mouse = { x: -1000, y: -1000, radius: 140, active: false };

    function resize() {
        if (!canvas.parentElement) return;
        width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
        height = canvas.height = canvas.parentElement.offsetHeight || 650;
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Track gentle cursor movement to softly disperse vapor and illuminate frost crystals
    const hero = canvas.closest('.hero-2') || canvas.parentElement;
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            mouse.active = true;
        }, { passive: true });
        hero.addEventListener('mouseleave', () => {
            mouse.active = false;
        }, { passive: true });
    }

    const isDark = () => document.documentElement.classList.contains('dark') || document.body.classList.contains('dark');

    // 1. Soft Rolling Sub-Zero Frost Vapor Clouds (Atmospheric mist puffs along bottom hero area)
    const vaporPuffs = [];
    const vaporCount = 14;
    for (let i = 0; i < vaporCount; i++) {
        vaporPuffs.push({
            x: Math.random() * (width || window.innerWidth),
            baseYRatio: 0.65 + Math.random() * 0.32,
            radius: 130 + Math.random() * 150,
            baseRadius: 130 + Math.random() * 150,
            speedX: (Math.random() - 0.46) * 0.32,
            wobbleSpeed: 0.007 + Math.random() * 0.012,
            wobbleAmp: 14 + Math.random() * 22,
            pulseSpeed: 0.009 + Math.random() * 0.014,
            phase: Math.random() * Math.PI * 2,
            baseAlpha: 0.12 + Math.random() * 0.11,
            hueShift: Math.random()
        });
    }

    // 2. Micro Ice Crystals & Frost Shimmer Flakes (Twinkling sub-zero crystals)
    const crystalFlakes = [];
    const crystalCount = 38;
    for (let i = 0; i < crystalCount; i++) {
        crystalFlakes.push({
            x: Math.random() * (width || window.innerWidth),
            y: Math.random() * (height || 650),
            size: Math.random() * 2.5 + 0.8,
            speedY: -Math.random() * 0.42 - 0.15,
            speedX: (Math.random() - 0.5) * 0.28,
            twinkleSpeed: Math.random() * 0.03 + 0.015,
            phase: Math.random() * Math.PI * 2,
            isCross: Math.random() > 0.55,
            maxAlpha: Math.random() * 0.65 + 0.28
        });
    }

    function drawIceSparkle(ctx, x, y, size, alpha, dark) {
        ctx.save();
        ctx.translate(x, y);
        ctx.strokeStyle = dark 
            ? `rgba(224, 247, 250, ${alpha})` 
            : `rgba(14, 165, 233, ${alpha * 0.85})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        // 4-point crystal cross
        ctx.moveTo(0, -size * 1.8);
        ctx.lineTo(0, size * 1.8);
        ctx.moveTo(-size * 1.8, 0);
        ctx.lineTo(size * 1.8, 0);
        ctx.stroke();

        // center diamond shimmer
        ctx.fillStyle = dark 
            ? `rgba(255, 255, 255, ${alpha})` 
            : `rgba(56, 189, 248, ${alpha})`;
        ctx.beginPath();
        ctx.arc(0, 0, size * 0.45, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    function render() {
        ctx.clearRect(0, 0, width, height);
        const dark = isDark();
        time += 1;

        // ── STEP 1: Render Rolling Sub-Zero Frost Vapor Puffs ──
        for (let i = 0; i < vaporPuffs.length; i++) {
            const v = vaporPuffs[i];

            v.x += v.speedX;
            if (v.x < -v.radius * 1.5) v.x = width + v.radius * 1.5;
            if (v.x > width + v.radius * 1.5) v.x = -v.radius * 1.5;

            const currY = (v.baseYRatio * height) + Math.sin(time * v.wobbleSpeed + v.phase) * v.wobbleAmp;
            const currentRadius = v.baseRadius + Math.sin(time * v.pulseSpeed + v.phase) * 18;

            // Gentle cursor dispersion
            let drawX = v.x;
            let drawY = currY;
            if (mouse.active) {
                const dx = drawX - mouse.x;
                const dy = drawY - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius + currentRadius && dist > 0) {
                    const force = (1 - dist / (mouse.radius + currentRadius)) * 24;
                    drawX += (dx / dist) * force;
                    drawY += (dy / dist) * force;
                }
            }

            const alphaPulse = Math.sin(time * v.pulseSpeed * 0.7 + v.phase) * 0.035;
            const finalAlpha = Math.max(0.04, Math.min(0.26, v.baseAlpha + alphaPulse));

            // Soft radial glow gradient for volumetric mist
            const grad = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, currentRadius);
            if (dark) {
                const cyanTint = v.hueShift > 0.5 ? '186, 230, 253' : '224, 247, 250';
                grad.addColorStop(0, `rgba(${cyanTint}, ${finalAlpha})`);
                grad.addColorStop(0.4, `rgba(56, 189, 248, ${finalAlpha * 0.5})`);
                grad.addColorStop(0.75, `rgba(14, 165, 233, ${finalAlpha * 0.16})`);
                grad.addColorStop(1, 'rgba(15, 23, 42, 0)');
            } else {
                grad.addColorStop(0, `rgba(224, 247, 250, ${finalAlpha * 0.95})`);
                grad.addColorStop(0.4, `rgba(186, 230, 253, ${finalAlpha * 0.55})`);
                grad.addColorStop(0.75, `rgba(56, 189, 248, ${finalAlpha * 0.18})`);
                grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
            }

            ctx.save();
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(drawX, drawY, currentRadius, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        // ── STEP 2: Render Micro Ice Crystals & Frost Shimmer ──
        for (let i = 0; i < crystalFlakes.length; i++) {
            const p = crystalFlakes[i];

            p.y += p.speedY;
            p.x += p.speedX;

            if (p.y < 0) {
                p.y = height + 10;
                p.x = Math.random() * width;
            }
            if (p.x < -10) p.x = width + 10;
            if (p.x > width + 10) p.x = -10;

            const twinkle = (Math.sin(time * p.twinkleSpeed + p.phase) + 1) * 0.5;
            const alpha = p.maxAlpha * (0.35 + twinkle * 0.65);

            let sizeMod = p.size;
            if (mouse.active) {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < 130) {
                    sizeMod *= 1.35;
                }
            }

            if (p.isCross) {
                drawIceSparkle(ctx, p.x, p.y, sizeMod, alpha, dark);
            } else {
                ctx.beginPath();
                ctx.arc(p.x, p.y, sizeMod, 0, Math.PI * 2);
                ctx.fillStyle = dark 
                    ? `rgba(224, 247, 250, ${alpha})`
                    : `rgba(14, 165, 233, ${alpha * 0.75})`;
                if (dark) {
                    ctx.shadowBlur = 5;
                    ctx.shadowColor = 'rgba(56, 189, 248, 0.45)';
                }
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        // ── STEP 3: Sub-Zero Ambient Frost Gradient Base ──
        const baseGlowHeight = Math.min(140, height * 0.22);
        const baseGrad = ctx.createLinearGradient(0, height - baseGlowHeight, 0, height);
        if (dark) {
            baseGrad.addColorStop(0, 'rgba(56, 189, 248, 0)');
            baseGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.04)');
            baseGrad.addColorStop(1, 'rgba(14, 165, 233, 0.08)');
        } else {
            baseGrad.addColorStop(0, 'rgba(224, 247, 250, 0)');
            baseGrad.addColorStop(0.5, 'rgba(224, 247, 250, 0.1)');
            baseGrad.addColorStop(1, 'rgba(186, 230, 253, 0.16)');
        }
        ctx.fillStyle = baseGrad;
        ctx.fillRect(0, height - baseGlowHeight, width, baseGlowHeight);

        animationFrameId = requestAnimationFrame(render);
    }

    render();

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    if (animationFrameId) cancelAnimationFrame(animationFrameId);
                    animationFrameId = null;
                } else if (!animationFrameId) {
                    render();
                }
            });
        }, { threshold: 0.05 });

        observer.observe(canvas);
    }
}

/* ─── CREATION BUY BUTTONS INTERACTION ──────────────────── */
function initCreationBuyButtons() {
    const buyButtons = document.querySelectorAll('.creation-buy-btn');
    if (!buyButtons.length) return;

    let toast = document.getElementById('frost-cart-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'frost-cart-toast';
        toast.className = 'frost-cart-toast';
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        document.body.appendChild(toast);
    }

    let toastTimer = null;

    buyButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const name = btn.getAttribute('data-name') || 'Signature Creation';
            const price = btn.getAttribute('data-price') || '';

            // Visual button feedback
            const originalHTML = btn.innerHTML;
            btn.classList.add('added');
            btn.innerHTML = `<i class="fa-solid fa-check"></i> Added!`;

            // Toast feedback
            toast.innerHTML = `<i class="fa-solid fa-bag-shopping"></i> Added <strong>${name}</strong> (${price}) to your order!`;
            toast.classList.add('show');

            if (toastTimer) clearTimeout(toastTimer);
            toastTimer = setTimeout(() => {
                toast.classList.remove('show');
            }, 2600);

            setTimeout(() => {
                btn.classList.remove('added');
                btn.innerHTML = originalHTML;
            }, 1800);
        });
    });
}

/* ─── FAQ ACCORDION INTERACTION ─────────────────────────── */
function initFAQAccordions() {
    const accordions = document.querySelectorAll('.faq-accordion');
    if (!accordions.length) return;

    accordions.forEach(accordion => {
        const items = accordion.querySelectorAll('.faq-item');

        items.forEach(item => {
            const btn = item.querySelector('.faq-question');
            if (!btn) return;

            btn.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close other items in the same accordion group
                items.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherBtn = otherItem.querySelector('.faq-question');
                        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
                    }
                });

                // Toggle current item
                if (isActive) {
                    item.classList.remove('active');
                    btn.setAttribute('aria-expanded', 'false');
                } else {
                    item.classList.add('active');
                    btn.setAttribute('aria-expanded', 'true');
                }
            });
        });
    });
}

/* ─── INIT ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    buildNavbar();
    buildFooter();
    buildBackToTop();
    initHeaderScroll();
    initHeroSlider();
    initHeroSnowCanvas();
    initHome2DessertCanvas();
    initTestimonialSlider();
    initTextureStudio();
    initCravingGenerator();
    initCreationBuyButtons();
    initFAQAccordions();
    setTimeout(initScrollAnimations, 100);
});



