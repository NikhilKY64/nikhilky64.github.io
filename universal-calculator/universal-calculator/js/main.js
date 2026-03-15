document.addEventListener('DOMContentLoaded', () => {
    // Gallery Image Modal
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.getElementById('modalClose');

    // Open Modal
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            modalImg.src = imgSrc;
            modal.style.display = 'flex';
            modal.setAttribute('aria-hidden', 'false');
            
            // Allow closing with Escape key
            document.addEventListener('keydown', handleEsc);
        });

        // Accessibility (Enter key to open)
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                item.click();
            }
        });
    });

    // Close Modal Function
    const close = () => {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        modalImg.src = '';
        document.removeEventListener('keydown', handleEsc);
    };

    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            close();
        }
    };

    closeModal.addEventListener('click', close);
    
    // Close modal if clicking outside image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            close();
        }
    });

    // Smooth Scroll for native anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
