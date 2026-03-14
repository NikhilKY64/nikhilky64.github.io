document.addEventListener('DOMContentLoaded', () => {
    // Automatically count the published apps (excludes the "Coming Soon" placeholder)
    const publishedApps = document.querySelectorAll('.app-card:not(.placeholder-card)');
    const publishedAppsCount = publishedApps.length;
    
    // Update the statistic number on the hero card
    const countElement = document.getElementById('published-apps-count');
    if(countElement && publishedAppsCount > 0) {
        countElement.innerText = publishedAppsCount + '+';
    }

    // Calculate percentage of apps that use Kotlin
    let kotlinCount = 0;
    publishedApps.forEach(app => {
        const tags = app.querySelectorAll('.app-lang-tag');
        tags.forEach(tag => {
            if (tag.innerText.toLowerCase().includes('kotlin')) {
                kotlinCount++;
            }
        });
    });

    const kotlinPercentElement = document.getElementById('kotlin-percent');
    if (kotlinPercentElement && publishedAppsCount > 0) {
        const precent = Math.round((kotlinCount / publishedAppsCount) * 100);
        kotlinPercentElement.innerText = precent + '%';
    }

    // Typing Animation
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        const textToType = typingElement.getAttribute('data-text');
        // Clear immediately so it works with no-JS fallback
        typingElement.textContent = '';
        const charArray = Array.from(textToType);
        let currentPos = 0;
        
        function typeWriter() {
            if (currentPos < charArray.length) {
                typingElement.textContent += charArray[currentPos];
                currentPos++;
                const speed = Math.random() * (120 - 50) + 50; 
                setTimeout(typeWriter, speed);
            }
        }
        setTimeout(typeWriter, 500);
    }
});
