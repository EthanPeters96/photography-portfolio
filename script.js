// DOM Elements
const navToggle =
    document.querySelector(
        ".nav-toggle"
    );
const navLinks =
    document.querySelector(
        ".nav-links"
    );
const galleryItems =
    document.querySelectorAll(
        ".gallery-item"
    );
const lightbox =
    document.getElementById(
        "lightbox"
    );
const lightboxImg =
    lightbox.querySelector(
        "img"
    );
const lightboxTitle =
    lightbox.querySelector(
        "h3"
    );
const lightboxDescription =
    lightbox.querySelector(
        "p"
    );
const closeBtn =
    lightbox.querySelector(
        ".close-btn"
    );
const contactForm =
    document.querySelector(
        ".contact-form"
    );

// Mobile Navigation Toggle
navToggle.addEventListener(
    "click",
    () => {
        navLinks.classList.toggle(
            "active"
        );
        navToggle.classList.toggle(
            "active"
        );
    }
);

// Close mobile menu when clicking on a link
navLinks.addEventListener(
    "click",
    (
        e
    ) => {
        if (
            e
                .target
                .tagName ===
            "A"
        ) {
            navLinks.classList.remove(
                "active"
            );
            navToggle.classList.remove(
                "active"
            );
        }
    }
);

// Smooth Scrolling for Navigation Links
document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        (
            anchor
        ) => {
            anchor.addEventListener(
                "click",
                function (
                    e
                ) {
                    e.preventDefault();
                    const target =
                        document.querySelector(
                            this.getAttribute(
                                "href"
                            )
                        );
                    if (
                        target
                    ) {
                        target.scrollIntoView(
                            {
                                behavior:
                                    "smooth",
                                block: "start",
                            }
                        );
                    }
                }
            );
        }
    );

// Gallery Lightbox Functionality
galleryItems.forEach(
    (
        item
    ) => {
        item.addEventListener(
            "click",
            () => {
                const img =
                    item.querySelector(
                        "img"
                    );
                const title =
                    item.querySelector(
                        "h3"
                    ).textContent;
                const description =
                    item.querySelector(
                        "p"
                    ).textContent;

                lightboxImg.src =
                    img.src;
                lightboxImg.alt =
                    img.alt;
                lightboxTitle.textContent =
                    title;
                lightboxDescription.textContent =
                    description;

                lightbox.style.display =
                    "block";
                document.body.style.overflow =
                    "hidden";
            }
        );
    }
);

// Close Lightbox
function closeLightbox() {
    lightbox.style.display =
        "none";
    document.body.style.overflow =
        "auto";
}

closeBtn.addEventListener(
    "click",
    closeLightbox
);

// Close lightbox when clicking outside the image
lightbox.addEventListener(
    "click",
    (
        e
    ) => {
        if (
            e.target ===
            lightbox
        ) {
            closeLightbox();
        }
    }
);

// Close lightbox with Escape key
document.addEventListener(
    "keydown",
    (
        e
    ) => {
        if (
            e.key ===
                "Escape" &&
            lightbox
                .style
                .display ===
                "block"
        ) {
            closeLightbox();
        }
    }
);

// Contact Form Handling
contactForm.addEventListener(
    "submit",
    (
        e
    ) => {
        e.preventDefault();

        const formData =
            new FormData(
                contactForm
            );
        const name =
            contactForm.querySelector(
                'input[type="text"]'
            ).value;
        const email =
            contactForm.querySelector(
                'input[type="email"]'
            ).value;
        const message =
            contactForm.querySelector(
                "textarea"
            ).value;

        if (
            name &&
            email &&
            message
        ) {
            // Show success message
            showNotification(
                "Thank you for your message! I'll get back to you soon.",
                "success"
            );
            contactForm.reset();
        } else {
            showNotification(
                "Please fill in all fields.",
                "error"
            );
        }
    }
);

// Notification System
function showNotification(
    message,
    type
) {
    const notification =
        document.createElement(
            "div"
        );
    notification.className = `notification ${type}`;
    notification.textContent =
        message;

    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 3000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;

    if (
        type ===
        "success"
    ) {
        notification.style.background =
            "#28a745";
    } else {
        notification.style.background =
            "#dc3545";
    }

    document.body.appendChild(
        notification
    );

    setTimeout(
        () => {
            notification.style.animation =
                "slideOut 0.3s ease";
            setTimeout(
                () => {
                    document.body.removeChild(
                        notification
                    );
                },
                300
            );
        },
        3000
    );
}

// Add animation styles to head
const style =
    document.createElement(
        "style"
    );
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .nav-links.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: white;
        padding: 1rem 2rem;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        animation: slideDown 0.3s ease;
    }
    
    .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(
    style
);

// Navbar Background on Scroll
window.addEventListener(
    "scroll",
    () => {
        const navbar =
            document.querySelector(
                ".navbar"
            );
        if (
            window.scrollY >
            50
        ) {
            navbar.style.background =
                "rgba(255, 255, 255, 0.98)";
            navbar.style.boxShadow =
                "0 2px 20px rgba(0, 0, 0, 0.1)";
        } else {
            navbar.style.background =
                "rgba(255, 255, 255, 0.95)";
            navbar.style.boxShadow =
                "none";
        }
    }
);

// Scroll Animations
const observerOptions =
    {
        threshold: 0.1,
        rootMargin:
            "0px 0px -50px 0px",
    };

const observer =
    new IntersectionObserver(
        (
            entries
        ) => {
            entries.forEach(
                (
                    entry
                ) => {
                    if (
                        entry.isIntersecting
                    ) {
                        entry.target.style.animation =
                            "fadeInUp 0.6s ease forwards";
                    }
                }
            );
        },
        observerOptions
    );

// Observe elements for scroll animations
document
    .querySelectorAll(
        ".gallery-item, .about-content, .contact-content"
    )
    .forEach(
        (
            el
        ) => {
            el.style.opacity =
                "0";
            el.style.transform =
                "translateY(30px)";
            observer.observe(
                el
            );
        }
    );

// Add fadeInUp animation
const fadeInUpStyle =
    document.createElement(
        "style"
    );
fadeInUpStyle.textContent = `
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(
    fadeInUpStyle
);

// Loading Animation
window.addEventListener(
    "load",
    () => {
        document.body.style.opacity =
            "0";
        document.body.style.transition =
            "opacity 0.3s ease";

        setTimeout(
            () => {
                document.body.style.opacity =
                    "1";
            },
            100
        );
    }
);

// Preload Images
function preloadImages() {
    const images =
        document.querySelectorAll(
            'img[src^="https://images.unsplash.com"]'
        );
    images.forEach(
        (
            img
        ) => {
            const newImg =
                new Image();
            newImg.src =
                img.src;
        }
    );
}

// Initialize
document.addEventListener(
    "DOMContentLoaded",
    () => {
        preloadImages();

        // Add loading class to body
        document.body.classList.add(
            "loaded"
        );
    }
);

// Parallax Effect for Hero Section
window.addEventListener(
    "scroll",
    () => {
        const scrolled =
            window.pageYOffset;
        const parallaxElements =
            document.querySelectorAll(
                ".hero-image"
            );

        parallaxElements.forEach(
            (
                element
            ) => {
                const speed = 0.5;
                element.style.transform = `translateY(${
                    scrolled *
                    speed
                }px)`;
            }
        );
    }
);

// Gallery Filter (Optional Enhancement)
function filterGallery(
    category
) {
    galleryItems.forEach(
        (
            item
        ) => {
            if (
                category ===
                    "all" ||
                item
                    .dataset
                    .category ===
                    category
            ) {
                item.style.display =
                    "block";
                item.style.animation =
                    "fadeIn 0.5s ease";
            } else {
                item.style.display =
                    "none";
            }
        }
    );
}

// Lazy Loading for Images
if (
    "IntersectionObserver" in
    window
) {
    const imageObserver =
        new IntersectionObserver(
            (
                entries
            ) => {
                entries.forEach(
                    (
                        entry
                    ) => {
                        if (
                            entry.isIntersecting
                        ) {
                            const img =
                                entry.target;
                            img.src =
                                img
                                    .dataset
                                    .src ||
                                img.src;
                            img.classList.remove(
                                "lazy"
                            );
                            imageObserver.unobserve(
                                img
                            );
                        }
                    }
                );
            }
        );

    document
        .querySelectorAll(
            "img[data-src]"
        )
        .forEach(
            (
                img
            ) => {
                imageObserver.observe(
                    img
                );
            }
        );
}

// Enhanced Gallery Filter with Animation
const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );

filterButtons.forEach(
    (
        button
    ) => {
        button.addEventListener(
            "click",
            () => {
                // Remove active class from all buttons
                filterButtons.forEach(
                    (
                        btn
                    ) =>
                        btn.classList.remove(
                            "active"
                        )
                );
                // Add active class to clicked button
                button.classList.add(
                    "active"
                );

                const filterValue =
                    button
                        .dataset
                        .filter;
                filterGallery(
                    filterValue
                );
            }
        );
    }
);

function filterGallery(
    category
) {
    galleryItems.forEach(
        (
            item
        ) => {
            if (
                category ===
                    "all" ||
                item
                    .dataset
                    .category ===
                    category
            ) {
                item.style.display =
                    "block";
                item.style.opacity =
                    "0";
                item.style.transform =
                    "translateY(20px)";

                setTimeout(
                    () => {
                        item.style.transition =
                            "all 0.5s ease";
                        item.style.opacity =
                            "1";
                        item.style.transform =
                            "translateY(0)";
                    },
                    100
                );
            } else {
                item.style.transition =
                    "all 0.3s ease";
                item.style.opacity =
                    "0";
                item.style.transform =
                    "translateY(-20px)";

                setTimeout(
                    () => {
                        item.style.display =
                            "none";
                    },
                    300
                );
            }
        }
    );
}

// Enhanced Loading Animation
function showLoadingScreen() {
    const loadingDiv =
        document.createElement(
            "div"
        );
    loadingDiv.className =
        "loading";
    loadingDiv.innerHTML =
        '<div class="loader"></div>';
    document.body.appendChild(
        loadingDiv
    );

    return loadingDiv;
}

function hideLoadingScreen(
    loadingDiv
) {
    if (
        loadingDiv
    ) {
        loadingDiv.style.opacity =
            "0";
        setTimeout(
            () => {
                if (
                    loadingDiv.parentNode
                ) {
                    loadingDiv.parentNode.removeChild(
                        loadingDiv
                    );
                }
            },
            300
        );
    }
}

// Enhanced page loading
window.addEventListener(
    "load",
    () => {
        const loading =
            document.querySelector(
                ".loading"
            );
        if (
            loading
        ) {
            hideLoadingScreen(
                loading
            );
        }

        // Smooth reveal of content
        document.body.style.opacity =
            "1";

        // Initialize enhanced animations
        initializeEnhancedAnimations();
    }
);

// Enhanced scroll animations for new sections
function initializeEnhancedAnimations() {
    const animatedElements =
        document.querySelectorAll(
            ".service-card, .testimonial-card, .award-item, .blog-post"
        );

    const enhancedObserver =
        new IntersectionObserver(
            (
                entries
            ) => {
                entries.forEach(
                    (
                        entry,
                        index
                    ) => {
                        if (
                            entry.isIntersecting
                        ) {
                            setTimeout(
                                () => {
                                    entry.target.style.opacity =
                                        "1";
                                    entry.target.style.transform =
                                        "translateY(0)";
                                },
                                index *
                                    100
                            );
                        }
                    }
                );
            },
            {
                threshold: 0.1,
                rootMargin:
                    "0px 0px -50px 0px",
            }
        );

    animatedElements.forEach(
        (
            el
        ) => {
            el.style.opacity =
                "0";
            el.style.transform =
                "translateY(30px)";
            el.style.transition =
                "all 0.6s ease";
            enhancedObserver.observe(
                el
            );
        }
    );
}

// Service cards hover effects
document.addEventListener(
    "DOMContentLoaded",
    () => {
        const serviceCards =
            document.querySelectorAll(
                ".service-card"
            );

        serviceCards.forEach(
            (
                card
            ) => {
                card.addEventListener(
                    "mouseenter",
                    () => {
                        card.style.transform =
                            "translateY(-10px) scale(1.02)";
                    }
                );

                card.addEventListener(
                    "mouseleave",
                    () => {
                        if (
                            card.classList.contains(
                                "featured"
                            )
                        ) {
                            card.style.transform =
                                "scale(1.05)";
                        } else {
                            card.style.transform =
                                "translateY(0) scale(1)";
                        }
                    }
                );
            }
        );
    }
);

// Blog post expansion functionality
const blogPosts =
    document.querySelectorAll(
        ".blog-post"
    );
blogPosts.forEach(
    (
        post
    ) => {
        const readMoreBtn =
            post.querySelector(
                ".read-more"
            );
        const fullContent =
            post.querySelector(
                ".blog-full-content"
            );
        const excerpt =
            post.querySelector(
                ".blog-excerpt"
            );

        if (
            readMoreBtn &&
            fullContent
        ) {
            let isExpanded = false;

            readMoreBtn.addEventListener(
                "click",
                (
                    e
                ) => {
                    e.preventDefault();

                    if (
                        !isExpanded
                    ) {
                        // Expand
                        fullContent.style.display =
                            "block";
                        fullContent.classList.add(
                            "expanded"
                        );
                        post.classList.add(
                            "expanded"
                        );
                        readMoreBtn.textContent =
                            "Read Less";
                        excerpt.style.display =
                            "none";

                        // Smooth scroll to keep the post in view
                        setTimeout(
                            () => {
                                post.scrollIntoView(
                                    {
                                        behavior:
                                            "smooth",
                                        block: "nearest",
                                    }
                                );
                            },
                            250
                        );

                        isExpanded = true;
                    } else {
                        // Collapse
                        fullContent.classList.remove(
                            "expanded"
                        );
                        post.classList.remove(
                            "expanded"
                        );
                        readMoreBtn.textContent =
                            "Read More";
                        excerpt.style.display =
                            "block";

                        setTimeout(
                            () => {
                                fullContent.style.display =
                                    "none";
                            },
                            500
                        );

                        isExpanded = false;
                    }

                    // Add button animation
                    readMoreBtn.style.transform =
                        "scale(0.95)";
                    setTimeout(
                        () => {
                            readMoreBtn.style.transform =
                                "scale(1)";
                        },
                        150
                    );
                }
            );
        }
    }
);

// Awards section scroll trigger
const awardItems =
    document.querySelectorAll(
        ".award-item"
    );
const awardObserver =
    new IntersectionObserver(
        (
            entries
        ) => {
            entries.forEach(
                (
                    entry,
                    index
                ) => {
                    if (
                        entry.isIntersecting
                    ) {
                        setTimeout(
                            () => {
                                entry.target.style.opacity =
                                    "1";
                                entry.target.style.transform =
                                    "translateX(0)";
                            },
                            index *
                                200
                        );
                    }
                }
            );
        },
        {
            threshold: 0.2,
        }
    );

awardItems.forEach(
    (
        item,
        index
    ) => {
        item.style.opacity =
            "0";
        item.style.transform =
            index %
                2 ===
            0
                ? "translateX(-50px)"
                : "translateX(50px)";
        item.style.transition =
            "all 0.8s ease";
        awardObserver.observe(
            item
        );
    }
);

// Testimonials carousel effect (optional)
let currentTestimonial = 0;
const testimonials =
    document.querySelectorAll(
        ".testimonial-card"
    );

function rotateTestimonials() {
    if (
        testimonials.length >
        3
    ) {
        testimonials.forEach(
            (
                testimonial,
                index
            ) => {
                testimonial.style.opacity =
                    "0.5";
                testimonial.style.transform =
                    "scale(0.95)";
            }
        );

        // Highlight current testimonials
        for (
            let i = 0;
            i <
            Math.min(
                3,
                testimonials.length
            );
            i++
        ) {
            const index =
                (currentTestimonial +
                    i) %
                testimonials.length;
            testimonials[
                index
            ].style.opacity =
                "1";
            testimonials[
                index
            ].style.transform =
                "scale(1)";
        }

        currentTestimonial =
            (currentTestimonial +
                1) %
            testimonials.length;
    }
}

// Auto-rotate testimonials every 5 seconds
if (
    testimonials.length >
    3
) {
    setInterval(
        rotateTestimonials,
        5000
    );
}

// Enhanced navbar for longer pages
const sections =
    document.querySelectorAll(
        "section[id]"
    );
const navigationLinks =
    document.querySelectorAll(
        '.nav-links a[href^="#"]'
    );

window.addEventListener(
    "scroll",
    () => {
        let currentSection =
            "";

        sections.forEach(
            (
                section
            ) => {
                const sectionTop =
                    section.offsetTop;
                const sectionHeight =
                    section.clientHeight;
                if (
                    window.pageYOffset >=
                    sectionTop -
                        200
                ) {
                    currentSection =
                        section.getAttribute(
                            "id"
                        );
                }
            }
        );

        navigationLinks.forEach(
            (
                link
            ) => {
                link.classList.remove(
                    "active"
                );
                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    `#${currentSection}`
                ) {
                    link.classList.add(
                        "active"
                    );
                }
            }
        );
    }
);

// Performance optimization for scroll events
let ticking = false;
function updateOnScroll() {
    // Parallax and other scroll effects here
    ticking = false;
}

window.addEventListener(
    "scroll",
    () => {
        if (
            !ticking
        ) {
            requestAnimationFrame(
                updateOnScroll
            );
            ticking = true;
        }
    }
);

// Print functionality for services (optional)
function printServices() {
    const servicesContent =
        document.querySelector(
            ".services"
        ).innerHTML;
    const printWindow =
        window.open(
            "",
            "_blank"
        );
    printWindow
        .document
        .write(`
        <html>
            <head>
                <title>Beth Harrison - Services & Pricing</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    .services-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
                    .service-card { border: 1px solid #ddd; padding: 20px; border-radius: 8px; }
                </style>
            </head>
            <body>${servicesContent}</body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

// Initialize everything when DOM is ready
document.addEventListener(
    "DOMContentLoaded",
    () => {
        // Show initial loading if needed
        const hasLoading =
            document.querySelector(
                ".loading"
            );
        if (
            !hasLoading
        ) {
            const loading =
                showLoadingScreen();
            setTimeout(
                () =>
                    hideLoadingScreen(
                        loading
                    ),
                1000
            );
        }

        // Initialize gallery filters
        const firstFilter =
            document.querySelector(
                '.filter-btn[data-filter="all"]'
            );
        if (
            firstFilter
        ) {
            firstFilter.classList.add(
                "active"
            );
        }

        // Add enhanced focus management for accessibility
        const focusableElements =
            document.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );

        focusableElements.forEach(
            (
                element
            ) => {
                element.addEventListener(
                    "focus",
                    () => {
                        element.style.outline =
                            "2px solid #333";
                        element.style.outlineOffset =
                            "2px";
                    }
                );

                element.addEventListener(
                    "blur",
                    () => {
                        element.style.outline =
                            "none";
                    }
                );
            }
        );
    }
);

console.log(
    "Beth Harrison Photography Portfolio - Enhanced version loaded successfully! 📸"
);
