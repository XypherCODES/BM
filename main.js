// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (document.body.classList.contains('store-page')) {
        navbar.classList.add('has-scrolled');
        return;
    }

    if (window.scrollY > 50) {
        navbar.classList.add('has-scrolled');
    } else {
        navbar.classList.remove('has-scrolled');
    }
});

// Run once on load to ensure state
if (document.body.classList.contains('store-page')) {
    navbar.classList.add('has-scrolled');
} else if (window.scrollY > 50) {
    navbar.classList.add('has-scrolled');
}

// Intersection Observer for fade-up animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-up').forEach(element => {
    observer.observe(element);
});

// Simple parallax effect for hero image
const mainImage = document.querySelector('.main-background img');

window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition < window.innerHeight) {
        if (mainImage) mainImage.style.transform = `translateY(${scrollPosition * 0.4}px) scale(1.05)`;
    }
});

// ── NOTIFICATION SYSTEM ──────────────────────────────────────────────
window.showNotification = function (message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>⚠️</span> ${message}`;

    container.appendChild(toast);

    // Remove toast after animation ends (3.4s)
    setTimeout(() => {
        toast.remove();
    }, 3400);
};

// ── CONTACT FORM HANDLING ──────────────────────────────────────────
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.innerText;
        btn.disabled = true;
        btn.innerText = 'Sending...';

        try {
            const formData = new FormData(contactForm);
            // We use fetch to Formspree
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                window.showNotification('Message sent successfully! We will get back to you soon.');
                btn.innerText = 'Sent ✓';
                btn.style.background = 'linear-gradient(135deg, #a5194fff 0%, #6a11cbff 100%)'; // Success
                btn.style.backgroundSize = '200% 100%';
                btn.style.backgroundPosition = '100% 0%';
                btn.style.transition = 'background-position 0.6s ease-in-out';

                setTimeout(() => {
                    contactForm.reset();
                    btn.disabled = false;
                    btn.innerText = originalText;
                    btn.style.background = ''; // Reset to original
                }, 5000);
            } else {
                window.showNotification('Oops! There was a problem sending your message.');
                btn.disabled = false;
                btn.innerText = originalText;
            }
        } catch (error) {
            window.showNotification('Could not connect to the server. Please try again later.');
            btn.disabled = false;
            btn.innerText = originalText;
        }
    });
}

// ── MOBILE MENU HANDLING ──────────────────────────────────────────
const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
const navMenu = document.querySelector('#navbar nav');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// ── NAVBAR ACTIVE STATE ──────────────────────────────────────────────
const navLinks = document.querySelectorAll('#navbar nav a');
const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || window.location.pathname === '';

function clearActiveLinks() {
    navLinks.forEach(link => link.classList.remove('nav-active'));
}

if (isHomePage) {
    // Intersection Observer for scroll-based highlighting on Home
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                clearActiveLinks();
                navLinks.forEach(link => {
                    if (link.getAttribute('href').includes(`#${id}`)) {
                        link.classList.add('nav-active');
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('section[id]').forEach(section => sectionObserver.observe(section));
} else {
    // Page-based highlighting for standalone pages
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.includes('#') && currentPath.includes(href)) {
            link.classList.add('nav-active');
        }
    });
}

