// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('.newsletter-input');
        const email = emailInput.value;
        
        // Here you would typically send this to your backend
        alert(`Thank you for subscribing! We've sent a confirmation to ${email}`);
        emailInput.value = '';
    });
}

// Favorite button toggle
document.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const svg = this.querySelector('svg path');
        const currentFill = svg.getAttribute('fill');
        
        if (currentFill === 'none' || !currentFill) {
            svg.setAttribute('fill', 'currentColor');
            svg.setAttribute('stroke', 'none');
            this.style.color = '#e74c3c';
        } else {
            svg.setAttribute('fill', 'none');
            svg.setAttribute('stroke', 'currentColor');
            this.style.color = '';
        }
    });
});

// Carousel functionality (simple version)
const carousels = document.querySelectorAll('.carousel-wrapper');

carousels.forEach(carousel => {
    const leftArrow = carousel.querySelector('.carousel-arrow-left');
    const rightArrow = carousel.querySelector('.carousel-arrow-right');
    const grid = carousel.querySelector('.products-grid');
    
    let scrollAmount = 0;
    
    if (rightArrow) {
        rightArrow.addEventListener('click', () => {
            const cardWidth = grid.querySelector('.product-card').offsetWidth + 24; // 24px gap
            scrollAmount += cardWidth;
            grid.style.transform = `translateX(-${scrollAmount}px)`;
            grid.style.transition = 'transform 0.4s ease';
        });
    }
    
    if (leftArrow) {
        leftArrow.addEventListener('click', () => {
            const cardWidth = grid.querySelector('.product-card').offsetWidth + 24;
            scrollAmount = Math.max(0, scrollAmount - cardWidth);
            grid.style.transform = `translateX(-${scrollAmount}px)`;
            grid.style.transition = 'transform 0.4s ease';
        });
    }
});

// Testimonial pagination
const paginationDots = document.querySelectorAll('.pagination-dots .dot');
const testimonialsGrid = document.querySelector('.testimonials-grid');

paginationDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        paginationDots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        
        // In a real implementation, this would switch testimonial sets
        console.log(`Showing testimonial set ${index + 1}`);
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product cards and testimonials
document.querySelectorAll('.product-card, .testimonial-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Mobile menu toggle (if needed in the future)
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    
    if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-btn')) {
        const menuBtn = document.createElement('button');
        menuBtn.className = 'mobile-menu-btn';
        menuBtn.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        `;
        
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        navbar.querySelector('.nav-content').insertBefore(menuBtn, navMenu);
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();
