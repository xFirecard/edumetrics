// Main JavaScript for EduMetrics Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.menu');
      if (mobileMenuToggle && menu) {
        mobileMenuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
    
    // Create particles for hero section
    createParticles();
    
    // Add smooth scroll for the scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const featuresSection = document.querySelector('.features');
            if (featuresSection) {
                featuresSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', function() {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        });
    }
    
    // Tabs Functionality
    const tabItems = document.querySelectorAll('.tab-item');
    
    if (tabItems.length > 0) {
        tabItems.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabGroup = tab.closest('.tabs-header');
                const tabsContent = tabGroup.nextElementSibling;
                const tabId = tab.getAttribute('data-tab');
                const targetContent = document.getElementById(tabId);
                
                // Remove active class from all tabs in this group
                tabGroup.querySelectorAll('.tab-item').forEach(t => {
                    t.classList.remove('active');
                });
                
                // Remove active class from all tab contents
                tabsContent.querySelectorAll('.tab-content').forEach(c => {
                    c.classList.remove('active');
                });
                
                // Add active class to clicked tab and its content
                tab.classList.add('active');
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }
    
    // Testimonial Slider
    const testimonialSlider = document.querySelector('.testimonials-slider');
    
    if (testimonialSlider) {
        const testimonials = testimonialSlider.querySelectorAll('.testimonial-card');
        let currentIndex = 0;
        
        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                if (i === index) {
                    testimonial.style.opacity = '1';
                    testimonial.style.transform = 'translateX(0)';
                } else {
                    testimonial.style.opacity = '0.3';
                    testimonial.style.transform = i < index ? 'translateX(-20px)' : 'translateX(20px)';
                }
            });
        }
        
        // Initialize slider
        if (testimonials.length > 1) {
            showTestimonial(currentIndex);
            
            // Auto-change testimonials every 5 seconds
            setInterval(() => {
                currentIndex = (currentIndex + 1) % testimonials.length;
                showTestimonial(currentIndex);
            }, 5000);
        }
    }
    
    // Smooth scrolling for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    if (internalLinks.length > 0) {
        internalLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Form Validation for Contact Form
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            // Email validation
            const emailField = contactForm.querySelector('input[type="email"]');
            if (emailField && emailField.value.trim()) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value.trim())) {
                    isValid = false;
                    emailField.classList.add('error');
                }
            }
            
            if (isValid) {
                // Here you would typically send the form data to the server
                alert('Ευχαριστούμε για το μήνυμά σας! Θα επικοινωνήσουμε μαζί σας σύντομα.');
                contactForm.reset();
            } else {
                alert('Παρακαλούμε συμπληρώστε όλα τα υποχρεωτικά πεδία σωστά.');
            }
        });
    }
    
    // Newsletter Form
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    if (newsletterForms.length > 0) {
        newsletterForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const emailInput = form.querySelector('input[type="email"]');
                
                if (emailInput && emailInput.value.trim()) {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    
                    if (emailPattern.test(emailInput.value.trim())) {
                        // Here you would typically send the email to the server
                        alert('Ευχαριστούμε για την εγγραφή σας στο newsletter μας!');
                        form.reset();
                    } else {
                        alert('Παρακαλούμε εισάγετε ένα έγκυρο email.');
                    }
                } else {
                    alert('Παρακαλούμε εισάγετε το email σας.');
                }
            });
        });
    }
    
    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.feature-card, .about-image, .testimonial-card, .team-member, .service-card, .package-card, .tech-feature, .benefit-item, .application-card, .option-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for animations
    const animatedElements = document.querySelectorAll('.feature-card, .about-image, .testimonial-card, .team-member, .service-card, .package-card, .tech-feature, .benefit-item, .application-card, .option-card');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation check on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    // Add page transition class to body
    document.body.classList.add('page-transition');

    // Animate elements when they become visible
    function handleScrollAnimations() {
        const elements = document.querySelectorAll('.fade-in, .scale-in, .slide-in-left, .slide-in-right');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const isVisible = elementTop < window.innerHeight && elementBottom > 0;
            
            if (isVisible) {
                element.classList.add('active');
            }
        });
    }

    // Initial check for elements in view
    handleScrollAnimations();

    // Listen for scroll to animate elements
    window.addEventListener('scroll', handleScrollAnimations);    // Add animations classes to elements
    function addAnimationClasses() {        // Don't add animations to sections anymore
        // Animation code removed as requested
        
        // Add classes to footer elements
        const footerColumns = document.querySelectorAll('.footer-column');
        footerColumns.forEach((column, index) => {
            column.classList.add('fade-in');
            column.style.transitionDelay = `${index * 0.2}s`;
        });
    }

    // Call the function to add animation classes
    addAnimationClasses();

    // Back to Top button functionality
    const backToTopButton = document.querySelector('.back-to-top');

    if (backToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        // Scroll to top when clicked
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Cookie Banner Functionality
    const cookieBanner = document.querySelector('.cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    const declineCookiesBtn = document.getElementById('decline-cookies');

    // Check if user has already made a cookie choice
    const cookieChoice = localStorage.getItem('edumetrics_cookie_choice');

    // Show banner if no choice has been made yet
    if (!cookieChoice && cookieBanner) {
        setTimeout(() => {
            cookieBanner.classList.add('visible');
        }, 1000);
        
        // Handle accept button click
        acceptCookiesBtn.addEventListener('click', () => {
            localStorage.setItem('edumetrics_cookie_choice', 'accepted');
            cookieBanner.classList.remove('visible');
            // Here you would initialize your analytics or other cookie-dependent functions
        });
        
        // Handle decline button click
        declineCookiesBtn.addEventListener('click', () => {
            localStorage.setItem('edumetrics_cookie_choice', 'declined');
            cookieBanner.classList.remove('visible');
            // Here you would ensure no tracking cookies are set
        });
    }
});

// Create particles animation for the hero section
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const numberOfParticles = 70; // Increased number for more visible effect
    
    for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 6 + 3; // Larger size between 3-9px
        const particle = document.createElement('span');
        particle.classList.add('particle');
        
        // Set random position
        const posX = Math.random() * 100; // Random X position (0-100%)
        const posY = Math.random() * 100; // Random Y position (0-100%)
        
        // Set random animation duration and delay
        const animationDuration = Math.random() * 15 + 8; // 8-23 seconds
        const animationDelay = Math.random() * 5; // 0-5 seconds delay
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;        particle.style.animation = `floatParticle ${animationDuration}s linear ${animationDelay}s infinite`;
        particle.style.opacity = Math.random() * 0.5 + 0.3; // Random opacity between 0.3-0.8
        
        particlesContainer.appendChild(particle);
    }
}

/* Mobile Menu Toggle */
