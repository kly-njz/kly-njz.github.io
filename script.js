document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navItems = document.querySelectorAll('.nav-links .nav-item');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id') || '';
            }
        });

        navItems.forEach((item) => {
            item.classList.remove('active');

            if (item.getAttribute('href') === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    });

    console.log(
        '%c Jhon Carlo R. Jimenez — Portfolio loaded successfully.',
        'color: #58a6ff; font-weight: bold; font-size: 14px;'
    );
});