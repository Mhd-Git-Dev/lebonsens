// ===========================
// Mobile Menu Toggle
// ===========================

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const navMenuLeft = document.querySelector('.nav-menu-left');
    const navMenuRight = document.querySelector('.nav-menu-right');
    const navMenu = document.getElementById('navMenu');

    // Handle new navbar structure
    if (menuToggle && (navMenuLeft || navMenuRight)) {
        menuToggle.addEventListener('click', function () {
            if (navMenuLeft) navMenuLeft.classList.toggle('active');
            if (navMenuRight) navMenuRight.classList.toggle('active');

            // Animate hamburger icon
            const spans = menuToggle.querySelectorAll('span');
            const isActive = navMenuLeft ? navMenuLeft.classList.contains('active') : false;
            if (isActive) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on a link
        const allNavLinks = [...(navMenuLeft?.querySelectorAll('a') || []), ...(navMenuRight?.querySelectorAll('a') || [])];
        allNavLinks.forEach(link => {
            link.addEventListener('click', function () {
                if (navMenuLeft) navMenuLeft.classList.remove('active');
                if (navMenuRight) navMenuRight.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // Fallback for old navbar structure
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');

            // Animate hamburger icon
            const spans = menuToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // ===========================
    // Contact Form Handler
    // ===========================

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Here you would typically send the data to a server
            // For now, we'll just show an alert
            alert(`Merci ${name} pour votre message !\n\nNous vous répondrons prochainement à l'adresse : ${email}\n\nNote : Dans une version de production, ce formulaire serait connecté à un service d'envoi d'emails.`);

            // Reset form
            contactForm.reset();
        });
    }

    // ===========================
    // Smooth Scroll for Anchor Links
    // ===========================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Only prevent default if it's not just "#"
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);

                if (target) {
                    e.preventDefault();

                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ===========================
    // Scroll to Top on Page Load
    // ===========================

    window.scrollTo(0, 0);

    // ===========================
    // Add Active Class to Current Page in Navigation
    // ===========================

    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    const allNavLinks = document.querySelectorAll('.nav-menu a, .nav-menu-left a, .nav-menu-right a');

    allNavLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('#')[0];
        if (linkPath === currentLocation || (currentLocation === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });

    // ===========================
    // Intersection Observer for Fade-in Animations
    // ===========================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.image-highlight-row, .section-title');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // ===========================
    // Header Scroll Effect
    // ===========================

    let lastScroll = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // ===========================
    // Member Modal System
    // ===========================

    // Data for each team member
    // Les photos et biographies seront ajoutées ultérieurement
    window.memberData = {
        member1: {
            name: "Sophie Chiozza",
            role: "Colistière - Position 1",
            initials: "SC",
            duoPhoto: "imgs/6.jpg", // Photo duo avec Christian Landreau
            description: "Je propose de changer la gouvernance municipale qui n'a pas su gagner le coeur de ses habitants et qui n'a plus le souffle pour continuer. Tout le monde à Ferney-Voltaire aspire à ce changement et tout le monde attend ce changement en se mobilisant derrière Christian Landreau."
        },
        member2: {
            name: "Prochainement",
            role: "Position 2",
            initials: "👤",
            duoPhoto: "", // Photo duo avec Christian Landreau à ajouter
            description: "Informations à venir prochainement."
        },
        member3: {
            name: "Prochainement",
            role: "Position 3",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member4: {
            name: "François Ponzio",
            role: "Position 4",
            initials: "👤",
            duoPhoto: "imgs/Autre/31.jpg",
            description: "Informations à venir prochainement."
        },
        member5: {
            name: "Prochainement",
            role: "Position 5",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member6: {
            name: "Prochainement",
            role: "Position 6",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member7: {
            name: "Prochainement",
            role: "Position 7",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member8: {
            name: "Prochainement",
            role: "Position 8",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member9: {
            name: "Prochainement",
            role: "Position 9",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member10: {
            name: "Prochainement",
            role: "Position 10",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member11: {
            name: "Prochainement",
            role: "Position 11",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member12: {
            name: "Prochainement",
            role: "Position 12",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member13: {
            name: "Prochainement",
            role: "Position 13",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member14: {
            name: "Prochainement",
            role: "Position 14",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member15: {
            name: "Prochainement",
            role: "Position 15",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member16: {
            name: "Sylvie Adam",
            role: "Position 16",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member17: {
            name: "Prochainement",
            role: "Position 17",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member18: {
            name: "Prochainement",
            role: "Position 18",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member19: {
            name: "Prochainement",
            role: "Position 19",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member20: {
            name: "Prochainement",
            role: "Position 20",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member21: {
            name: "Prochainement",
            role: "Position 21",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member22: {
            name: "Prochainement",
            role: "Position 22",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member23: {
            name: "Prochainement",
            role: "Position 23",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member24: {
            name: "Prochainement",
            role: "Position 24",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member25: {
            name: "Prochainement",
            role: "Position 25",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member26: {
            name: "Prochainement",
            role: "Position 26",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member27: {
            name: "Daniel Bobin",
            role: "Position 27",
            initials: "👤",
            duoPhoto: "imgs/Autre/2.jpg",
            description: "Informations à venir prochainement."
        },
        member28: {
            name: "Prochainement",
            role: "Position 28",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member29: {
            name: "Prochainement",
            role: "Position 29",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member30: {
            name: "Prochainement",
            role: "Position 30",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member31: {
            name: "Prochainement",
            role: "Position 31",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        },
        member32: {
            name: "Prochainement",
            role: "Position 32",
            initials: "👤",
            duoPhoto: "",
            description: "Informations à venir prochainement."
        }
    };
});

// Modal functions (defined globally so they work with onclick attributes)
function openMemberModal(memberId) {
    const modal = document.getElementById('memberModal');
    const member = window.memberData[memberId];

    if (!member) {
        console.error('Member data not found for:', memberId);
        return;
    }

    // Gestion pour tous les colistiers - photo duo avec Christian Landreau
    // Pour tous les candidats, affichage avec Christian Landreau
    document.getElementById('modalCaption').textContent = `${member.name} avec Christian Landreau`;

    // Description courte (placeholder pour l'instant)
    const description = member.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.";
    document.getElementById('modalDescription').textContent = description;

    // Handle photo duo or placeholder
    const modalDuoPhoto = document.getElementById('modalDuoPhoto');
    const modalDuoPhotoPlaceholder = document.getElementById('modalDuoPhotoPlaceholder');
    const modalDuoPhotoContainer = document.querySelector('.modal-duo-photo');
    const initialsElement = modalDuoPhotoPlaceholder.querySelector('.initials-duo');

    // Afficher la section photo pour tous les candidats
    modalDuoPhotoContainer.style.display = 'flex';

    if (member.duoPhoto && member.duoPhoto !== "") {
        // Show real duo photo
        modalDuoPhoto.src = member.duoPhoto;
        modalDuoPhoto.alt = `${member.name} avec Christian Landreau`;
        modalDuoPhoto.style.display = 'block';
        modalDuoPhoto.style.width = '100%';
        modalDuoPhoto.style.maxWidth = '700px';
        modalDuoPhoto.style.height = 'auto';
        modalDuoPhoto.style.borderRadius = '12px';
        modalDuoPhotoPlaceholder.style.display = 'none';
    } else {
        // Show placeholder with duo icon
        initialsElement.textContent = '👥';
        modalDuoPhoto.style.display = 'none';
        modalDuoPhotoPlaceholder.style.display = 'flex';
    }

    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeMemberModal() {
    const modal = document.getElementById('memberModal');
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Restore scrolling
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    const modal = document.getElementById('memberModal');
    if (event.target === modal) {
        closeMemberModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeMemberModal();
        closeImageLightbox();
    }
});

// ===========================
// Image Lightbox for Gallery
// ===========================

// Create lightbox element
function createLightbox() {
    if (document.getElementById('imageLightbox')) return;

    const lightbox = document.createElement('div');
    lightbox.id = 'imageLightbox';
    lightbox.className = 'image-lightbox';
    lightbox.innerHTML = `
        <span class="lightbox-close" onclick="closeImageLightbox()">&times;</span>
        <img id="lightboxImage" src="" alt="">
        <div class="lightbox-caption" id="lightboxCaption"></div>
        <button class="lightbox-nav lightbox-prev" onclick="navigateLightbox(-1)">‹</button>
        <button class="lightbox-nav lightbox-next" onclick="navigateLightbox(1)">›</button>
    `;
    document.body.appendChild(lightbox);
}

// Initialize lightbox
createLightbox();

let currentImageIndex = 0;
let galleryImages = [];

// Setup gallery click handlers
document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-image');
    galleryImages = Array.from(galleryItems);

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function () {
            currentImageIndex = index;
            openImageLightbox(item);
        });
    });
});

function openImageLightbox(galleryItem) {
    const lightbox = document.getElementById('imageLightbox');
    const img = galleryItem.querySelector('img');
    const caption = galleryItem.querySelector('.gallery-caption');

    document.getElementById('lightboxImage').src = img.src;
    document.getElementById('lightboxCaption').textContent = caption ? caption.textContent : '';

    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeImageLightbox() {
    const lightbox = document.getElementById('imageLightbox');
    if (lightbox) {
        lightbox.classList.remove('show');
        document.body.style.overflow = '';
    }
}

function navigateLightbox(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    } else if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }

    openImageLightbox(galleryImages[currentImageIndex]);
}

// Close lightbox when clicking outside image
document.addEventListener('click', function (event) {
    const lightbox = document.getElementById('imageLightbox');
    if (lightbox && event.target === lightbox) {
        closeImageLightbox();
    }
});

// ===========================
// Smooth Parallax Effect
// ===========================

window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;

    // Parallax disabled for hero section (image fixed)
    // const hero = document.querySelector('.hero');
    // if (hero) {
    //     hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    // }

    // Parallax for image highlight sections
    const imageHighlights = document.querySelectorAll('.image-highlight-image img');
    imageHighlights.forEach(img => {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const offset = (window.innerHeight - rect.top) * 0.05;
            img.style.transform = `translateY(${offset}px)`;
        }
    });
});

// ===========================
// Button Ripple Effect
// ===========================

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');

        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// ===========================
// Card Tilt Effect (3D hover)
// ===========================

document.querySelectorAll('.priority-card, .member-card, .value-card').forEach(card => {
    card.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = '';
    });
});

// ===========================
// Loading Animation for Images
// ===========================

document.querySelectorAll('img').forEach(img => {
    if (img.complete) {
        img.style.opacity = '1';
    } else {
        img.style.opacity = '0';
        img.addEventListener('load', function () {
            this.style.transition = 'opacity 0.5s ease';
            this.style.opacity = '1';
        });
    }
});

// ===========================
// Counter Animation for Numbers
// ===========================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Observe counters if any exist
const counterElements = document.querySelectorAll('[data-counter]');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-counter'));
            animateCounter(entry.target, target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counterElements.forEach(el => counterObserver.observe(el));

