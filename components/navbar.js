document.addEventListener('DOMContentLoaded', () => {
    // Determine path level. 
    // If the path contains '/nikhil-apps/' followed by another directory, it's an app sub-page.
    const pathParts = window.location.pathname.split('/');
    const isSubPage = window.location.pathname.includes('/universal-calculator/') || 
                      (document.querySelector('script[src*="../components/navbar.js"]') !== null);

    const basePath = isSubPage ? '../' : './';
    
    // To cleanly link back to the main site's sections:
    const linkPath = isSubPage ? '../index.html' : './index.html';

    const navbarHTML = `
    <nav class="navbar" id="shared-navbar">
        <div class="container nav-content">
            <div class="nav-logo">
                <a href="${linkPath}">Nikhil<span class="highlight" style="color: #3b82f6;">Apps</span></a>
            </div>
            <div class="nav-right" style="display: flex; align-items: center; gap: 2rem;">
                <div class="nav-links">
                    <a href="${linkPath}#about">Home</a>
                    <a href="${linkPath}#portfolio">Apps</a>
                    <a href="${linkPath}#contact">Contact</a>
                </div>
                <!-- Theme Switch from Uiverse.io by JustCode14 --> 
                <label class="switch">
                <input id="theme-checkbox" type="checkbox" />
                <span class="slider">
                    <div class="star star_1"></div>
                    <div class="star star_2"></div>
                    <div class="star star_3"></div>
                    <svg viewBox="0 0 16 16" class="cloud_1 cloud">
                    <path
                        transform="matrix(.77976 0 0 .78395-299.99-418.63)"
                        fill="#fff"
                        d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
                    ></path>
                    </svg>
                </span>
                </label>
            </div>
        </div>
    </nav>
    `;

    // Insert navbar right at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    // Initialize Theme Switch
    const themeCheckbox = document.getElementById('theme-checkbox');
    const isLightMode = localStorage.getItem('theme') === 'light';
    
    // Apply saved theme immediately
    if (isLightMode) {
        document.body.classList.add('light-mode');
        themeCheckbox.checked = true;
    }

    themeCheckbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
});
