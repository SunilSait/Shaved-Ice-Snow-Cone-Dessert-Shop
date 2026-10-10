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
    btn.innerHTML = isPassword ? ICONS.eyeOff : ICONS.eye;
}

/* ─── NAVBAR ─────────────────────────────────────────── */
function buildNavbar() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const navLinks = [
        { text: 'Home', href: 'index.html', pages: ['index.html', ''] },
        { text: 'Home 2', href: 'home2.html', pages: ['home2.html'] },
        { text: 'Menu', href: 'menu.html', pages: ['menu.html'] },
        { text: 'Catering & Events', href: 'catering.html', pages: ['catering.html'] },
        { text: 'Locations', href: 'locations.html', pages: ['locations.html'] },
        { text: 'Contact', href: 'contact.html', pages: ['contact.html'] },
    ];

    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
    const isDark = document.documentElement.classList.contains('dark');

    const nav = document.createElement('header');
    nav.className = 'site-header';
    nav.id = 'site-header';
    nav.innerHTML = `
        <div class="header-container">
            <a href="index.html" class="logo-link" aria-label="Home">
                ${LOGO_SVG}
                <span class="logo-text">Frost & Flurry</span>
            </a>
            <nav class="main-nav" id="main-nav" aria-label="Main navigation">
                <ul class="nav-list">
                    ${navLinks.map(l => `
                        <li><a href="${l.href}" class="nav-link ${l.pages.includes(currentPage) ? 'active' : ''}">${l.text}</a></li>
                    `).join('')}
                </ul>
            </nav>
            <div class="header-actions">
                <button class="icon-btn theme-toggle" onclick="toggleTheme(event)" aria-label="Toggle theme">
                    <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
                </button>
                <button class="icon-btn dir-toggle" onclick="toggleDir(event)" aria-label="Toggle direction">
                    <span class="dir-label">${isRTL ? 'LTR' : 'RTL'}</span>
                </button>
                <a href="menu.html" class="btn btn-secondary btn-sm">Our Menu</a>
                <a href="login.html" class="btn btn-primary btn-sm">Sign In</a>
                <button class="icon-btn mobile-menu-btn" id="mobile-menu-btn" onclick="toggleMobileMenu()" aria-label="Toggle menu">
                    ${ICONS.menu}
                </button>
            </div>
        </div>
        <div class="mobile-nav-overlay" id="mobile-nav-overlay" onclick="closeMobileMenu()"></div>
        <div class="mobile-nav" id="mobile-nav">
            <div class="mobile-nav-header">
                <a href="index.html" class="logo-link">
                    ${LOGO_SVG}
                    <span class="logo-text">Frost & Flurry</span>
                </a>
                <button class="icon-btn" onclick="closeMobileMenu()" aria-label="Close menu">${ICONS.x}</button>
            </div>
            <ul class="mobile-nav-list">
                ${navLinks.map(l => `
                    <li><a href="${l.href}" class="mobile-nav-link ${l.pages.includes(currentPage) ? 'active' : ''}">${l.text}</a></li>
                `).join('')}
            </ul>
            <div class="mobile-nav-actions">
                <a href="menu.html" class="btn btn-secondary btn-full">Our Menu</a>
                <a href="login.html" class="btn btn-primary btn-full">Sign In</a>
                <div class="mobile-nav-bottom-row">
                    <button class="icon-btn theme-toggle" onclick="toggleTheme(event)" aria-label="Toggle theme">
                        <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
                    </button>
                    <button class="icon-btn dir-toggle" onclick="toggleDir(event)" aria-label="Toggle direction">
                        <span class="dir-label">${isRTL ? 'LTR' : 'RTL'}</span>
                    </button>
                </div>
            </div>
        </div>
    `;

    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) placeholder.replaceWith(nav);
}

function toggleMobileMenu() {
    document.getElementById('mobile-nav').classList.toggle('open');
    document.getElementById('mobile-nav-overlay').classList.toggle('open');
    document.body.classList.toggle('nav-open');
}

function closeMobileMenu() {
    document.getElementById('mobile-nav').classList.remove('open');
    document.getElementById('mobile-nav-overlay').classList.remove('open');
    document.body.classList.remove('nav-open');
}

/* ─── FOOTER ──────────────────────────────────────────── */
function buildFooter() {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.id = 'site-footer';
    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="index.html" class="logo-link">
                        ${LOGO_SVG}
                        <span class="logo-text">Frost & Flurry</span>
                    </a>
                    <p class="footer-desc">Hand-crafted shaved ice and snow cones made with premium natural syrups and fresh tropical toppings. Bringing island vibes to every scoop since 2018.</p>
                    <div class="footer-social">
                        <a href="#" class="social-link" aria-label="Facebook">${ICONS.facebook}</a>
                        <a href="#" class="social-link" aria-label="Instagram">${ICONS.instagram}</a>
                        <a href="#" class="social-link" aria-label="YouTube">${ICONS.youtube}</a>
                        <a href="#" class="social-link" aria-label="Twitter">${ICONS.twitter}</a>
                    </div>
                </div>
                <div class="footer-links-group">
                    <h4 class="footer-title">Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="menu.html">Menu</a></li>
                        <li><a href="catering.html">Catering & Events</a></li>
                        <li><a href="locations.html">Locations</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-links-group">
                    <h4 class="footer-title">More</h4>
                    <ul class="footer-links">
                        <li><a href="coming-soon.html">Careers</a></li>
                        <li><a href="coming-soon.html">Franchise</a></li>
                        <li><a href="coming-soon.html">Gift Cards</a></li>
                        <li><a href="coming-soon.html">Privacy Policy</a></li>
                        <li><a href="coming-soon.html">Terms of Service</a></li>
                    </ul>
                </div>
                <div class="footer-links-group">
                    <h4 class="footer-title">Contact Us</h4>
                    <ul class="footer-contact">
                        <li><span class="footer-icon">${ICONS.mapPin}</span> 123 Aloha Way, Honolulu, HI 96815</li>
                        <li><span class="footer-icon">${ICONS.phone}</span> (808) 555-0147</li>
                        <li><span class="footer-icon">${ICONS.mail}</span> hello@frostandflurry.com</li>
                        <li><span class="footer-icon">${ICONS.clock}</span> Mon–Sun: 10 AM – 9 PM</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} Frost & Flurry. All rights reserved.</p>
            </div>
        </div>
    `;

    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) placeholder.replaceWith(footer);
}

/* ─── BACK TO TOP ──────────────────────────────────────── */
function buildBackToTop() {
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
    const header = document.getElementById('site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        const current = window.scrollY;
        header.classList.toggle('scrolled', current > 60);
        lastScroll = current;
    });
}

/* ─── INIT ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    buildNavbar();
    buildFooter();
    buildBackToTop();
    initHeaderScroll();
    setTimeout(initScrollAnimations, 100);
});
