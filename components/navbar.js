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
            <div class="nav-links">
                <a href="${linkPath}#about">Home</a>
                <a href="${linkPath}#portfolio">Apps</a>
                <a href="${linkPath}#contact">Contact</a>
            </div>
        </div>
    </nav>
    `;

    // Insert navbar right at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
});
