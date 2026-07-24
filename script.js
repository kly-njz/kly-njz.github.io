/* ==========================================================================
   1. CORE VARIABLES & RESET
   ========================================================================== */
:root {
    --bg-color: #0d1117;
    --card-bg: #161b22;
    --card-hover: #1c2128;
    --border-color: #30363d;
    --text-primary: #c9d1d9;
    --text-heading: #f0f6fc;
    --text-muted: #8b949e;
    --accent-color: #58a6ff;
    --accent-hover: #1f6feb;
    --tag-bg: #21262d;
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    --max-width: 960px;
    --radius-sm: 6px;
    --radius-lg: 12px;
    --transition: all 0.25s ease-in-out;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-color);
    color: var(--text-primary);
    font-family: var(--font-family);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
}

.container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 24px;
}

/* ==========================================================================
   2. NAVIGATION BAR
   ========================================================================== */
nav {
    position: sticky;
    top: 0;
    background-color: rgba(13, 17, 23, 0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border-color);
    z-index: 1000;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
}

.logo {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-heading);
    text-decoration: none;
    letter-spacing: -0.5px;
}

.logo span {
    color: var(--accent-color);
}

.nav-links {
    display: flex;
    gap: 20px;
    align-items: center;
}

.nav-links a {
    color: var(--text-primary);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: var(--transition);
}

.nav-links a:hover,
.nav-links a.active {
    color: var(--accent-color);
}

.nav-links .link-highlight {
    color: var(--accent-color);
}

/* ==========================================================================
   3. HERO / ABOUT SECTION
   ========================================================================== */
header {
    padding: 90px 0 60px;
    border-bottom: 1px solid var(--border-color);
}

.hero h1 {
    font-size: 2.75rem;
    font-weight: 700;
    color: var(--text-heading);
    letter-spacing: -0.02em;
    margin-bottom: 8px;
}

.hero h2 {
    font-size: 1.25rem;
    color: var(--accent-color);
    font-weight: 500;
    margin-bottom: 20px;
}

.hero p {
    max-width: 720px;
    font-size: 1.05rem;
    color: var(--text-primary);
    margin-bottom: 32px;
}

.cta-buttons {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.btn {
    padding: 10px 18px;
    border-radius: var(--radius-sm);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: var(--transition);
}

.btn-primary {
    background-color: var(--accent-hover);
    color: #ffffff;
}

.btn-primary:hover {
    background-color: var(--accent-color);
    transform: translateY(-1px);
}

.btn-outline {
    border: 1px solid var(--border-color);
    color: var(--text-heading);
    background-color: var(--card-bg);
}

.btn-outline:hover {
    border-color: var(--accent-color);
    color: var(--accent-color);
    background-color: var(--card-hover);
    transform: translateY(-1px);
}

/* ==========================================================================
   4. SECTIONS & LAYOUTS
   ========================================================================== */
section {
    padding: 70px 0;
    border-bottom: 1px solid var(--border-color);
}

.section-title {
    font-size: 1.5rem;
    color: var(--text-heading);
    font-weight: 700;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.section-title::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: var(--accent-color);
    border-radius: 2px;
}

/* SKILLS GRID */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
}

.skill-card {
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: 20px;
    transition: var(--transition);
}

.skill-card:hover {
    border-color: var(--accent-color);
    background-color: var(--card-hover);
}

.skill-card h3 {
    color: var(--text-heading);
    margin-bottom: 14px;
    font-size: 1rem;
    font-weight: 600;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.tag {
    background-color: var(--tag-bg);
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
}

/* TIMELINE (EXPERIENCE, PROJECTS & EDUCATION) */
.timeline {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.timeline-card {
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: 24px;
    transition: var(--transition);
}

.timeline-card:hover {
    border-color: var(--accent-color);
}

.timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 12px;
}

.timeline-title h3 {
    color: var(--text-heading);
    font-size: 1.15rem;
    font-weight: 600;
}

.timeline-title .subtitle, .timeline-title .company {
    color: var(--accent-color);
    font-size: 0.95rem;
    font-weight: 500;
}

.timeline-date {
    font-size: 0.8rem;
    color: var(--text-muted);
    background-color: var(--tag-bg);
    padding: 4px 10px;
    border-radius: var(--radius-sm);
    border: 1px solid var(--border-color);
}

.timeline-card ul {
    padding-left: 18px;
    margin-top: 10px;
}

.timeline-card li {
    margin-bottom: 6px;
    font-size: 0.95rem;
}

/* CERTIFICATIONS GRID */
.cert-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
}

.cert-card {
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 16px;
    transition: var(--transition);
}

.cert-card:hover {
    border-color: var(--accent-color);
}

.cert-icon {
    font-size: 1.8rem;
}

.cert-card h3 {
    color: var(--text-heading);
    font-size: 0.95rem;
    font-weight: 600;
}

.cert-card p {
    font-size: 0.825rem;
    color: var(--text-muted);
}

/* ==========================================================================
   5. FOOTER
   ========================================================================== */
footer {
    padding: 40px 0;
    text-align: center;
    font-size: 0.875rem;
    color: var(--text-muted);
}

footer a {
    color: var(--text-primary);
    text-decoration: none;
    transition: var(--transition);
}

footer a:hover {
    color: var(--accent-color);
}

/* ==========================================================================
   6. RESPONSIVE DESIGN
   ========================================================================== */
@media (max-width: 640px) {
    .hero h1 { font-size: 2.1rem; }
    .hero h2 { font-size: 1.1rem; }
    .nav-links { display: none; }
    .cta-buttons { flex-direction: column; }
    .btn { width: 100%; justify-content: center; }
}
document.addEventListener('DOMContentLoaded', () => {
    
    // Dynamic Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section, header');
    const navItems = document.querySelectorAll('.nav-links .nav-item');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === #${currentSectionId}) {
                item.classList.add('active');
            }
        });
    });

    console.log(
        '%c Jhon Carlo R. Jimenez — Portfolio loaded successfully.',
        'color: #58a6ff; font-weight: bold; font-size: 14px;'
    );
});