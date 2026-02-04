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
                block:
                  "start",
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

// Contact Form Handling with EmailJS
contactForm.addEventListener(
  "submit",
  async (
    e
  ) => {
    e.preventDefault();

    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');

    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('#name').value;
    const email = contactForm.querySelector('#email').value;
    const message = contactForm.querySelector('#message').value;

    if (!name || !email || !message) {
      showNotification("Please fill in all fields.", "error");
      return;
    }

    // Show loading state
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';

    try {
      // Initialize EmailJS (You'll need to replace these with your actual EmailJS credentials)
      emailjs.init("YOUR_PUBLIC_KEY");

      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_name: "Beth Harrison"
      };

      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams
      );

      showNotification("Thank you for your message! I'll get back to you soon.", "success");
      contactForm.reset();

      // Track form submission
      gtag('event', 'contact_form_submit', {
        event_category: 'engagement',
        event_label: 'contact'
      });

    } catch (error) {
      console.error("EmailJS error:", error);
      showNotification("Sorry, there was an error sending your message. Please try again or contact me directly.", "error");
    } finally {
      // Reset loading state
      submitBtn.disabled = false;
      btnText.style.display = 'inline';
      btnLoading.style.display = 'none';
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
    const heroSection =
      document.querySelector(
        ".hero"
      );

    parallaxElements.forEach(
      (
        element
      ) => {
        const speed = 0.5;
        const heroHeight =
          heroSection.offsetHeight;
        const maxTransform =
          heroHeight *
          0.3; // Limit movement to 30% of hero height
        const transform =
          Math.min(
            scrolled *
              speed,
            maxTransform
          );

        // Only apply transform if we're still in the hero section view
        if (
          scrolled <
          heroHeight
        ) {
          element.style.transform = `translateY(${transform}px)`;
        } else {
          element.style.transform = `translateY(${maxTransform}px)`;
        }
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
                    block:
                      "nearest",
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

// Dark Mode Toggle
function initDarkMode() {
  const darkModeToggle = document.createElement('button');
  darkModeToggle.className = 'dark-mode-toggle';
  darkModeToggle.innerHTML = '🌙';
  darkModeToggle.setAttribute('aria-label', 'Toggle dark mode');
  darkModeToggle.title = 'Toggle dark mode';

  // Add to navbar
  const navContainer = document.querySelector('.nav-container');
  navContainer.appendChild(darkModeToggle);

  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    darkModeToggle.innerHTML = '☀️';
    darkModeToggle.setAttribute('aria-label', 'Switch to light mode');
  }

  darkModeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    darkModeToggle.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
    darkModeToggle.setAttribute('aria-label', newTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');

    // Track theme change
    gtag('event', 'theme_change', {
      event_category: 'engagement',
      event_label: newTheme
    });
  });
}

// Enhanced Accessibility Features
function initAccessibility() {
  // Add skip link
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-link sr-only';
  skipLink.textContent = 'Skip to main content';
  document.body.insertBefore(skipLink, document.body.firstChild);

  // Add focus management for lightbox
  const originalFocus = document.activeElement;
  lightbox.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const focusableElements = lightbox.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  });

  // Restore focus when lightbox closes
  closeBtn.addEventListener('click', () => {
    originalFocus.focus();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'block') {
      closeLightbox();
      originalFocus.focus();
    }
  });
}

// PWA Installation
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  // Show install button
  const installBtn = document.createElement('button');
  installBtn.className = 'install-btn';
  installBtn.innerHTML = '📱 Install App';
  installBtn.setAttribute('aria-label', 'Install Beth Harrison Photography app');

  const navContainer = document.querySelector('.nav-container');
  navContainer.appendChild(installBtn);

  installBtn.addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        gtag('event', 'pwa_install', {
          event_category: 'engagement',
          event_label: 'accepted'
        });
      }
      deferredPrompt = null;
      installBtn.remove();
    });
  });
});

// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Enhanced Gallery with Keyboard Navigation
function initEnhancedGallery() {
  galleryItems.forEach((item, index) => {
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', `View ${item.querySelector('h3').textContent} - ${item.querySelector('p').textContent}`);

    // Keyboard navigation
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.click();
      }
    });

    // Track gallery interactions
    item.addEventListener('click', () => {
      gtag('event', 'gallery_item_click', {
        event_category: 'engagement',
        event_label: item.dataset.category
      });
    });
  });
}

// Search Functionality for Blog
function initBlogSearch() {
  const searchContainer = document.createElement('div');
  searchContainer.className = 'blog-search';
  searchContainer.innerHTML = `
    <input type="text" id="blogSearch" placeholder="Search blog posts..." aria-label="Search blog posts">
    <button type="button" id="searchBtn" aria-label="Search">🔍</button>
  `;

  const blogSection = document.querySelector('.blog .container');
  blogSection.insertBefore(searchContainer, blogSection.querySelector('.blog-grid'));

  const searchInput = document.getElementById('blogSearch');
  const searchBtn = document.getElementById('searchBtn');

  function performSearch() {
    const query = searchInput.value.toLowerCase();
    const posts = document.querySelectorAll('.blog-post');

    posts.forEach(post => {
      const title = post.querySelector('h3').textContent.toLowerCase();
      const excerpt = post.querySelector('.blog-excerpt').textContent.toLowerCase();
      const content = post.querySelector('.blog-full-content').textContent.toLowerCase();

      if (title.includes(query) || excerpt.includes(query) || content.includes(query)) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });

    // Track search
    if (query.length > 0) {
      gtag('event', 'blog_search', {
        event_category: 'engagement',
        event_label: query
      });
    }
  }

  searchInput.addEventListener('input', performSearch);
  searchBtn.addEventListener('click', performSearch);
}

// Initialize all enhancements
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initAccessibility();
  initEnhancedGallery();
  initBlogSearch();
});

console.log(
  "Beth Harrison Photography Portfolio - Enhanced version loaded successfully! 📸"
);
