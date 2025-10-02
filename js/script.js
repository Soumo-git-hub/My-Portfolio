// Code created By Dev Zone Developer
/* =============== Menu Icons Navbar =============== */
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

    if (menuicon && navbar) {
// Menu icon click handler
menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    // Update aria-expanded for accessibility
    menuicon.setAttribute('aria-expanded', navbar.classList.contains('active'));
};

// Keyboard accessibility for menu icon
menuicon.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        menuicon.click();
    }
});

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuicon.contains(e.target) && !navbar.contains(e.target)) {
                menuicon.classList.remove('bx-x');
                navbar.classList.remove('active');
            }
        });

        // Close menu when clicking on a link
        navbar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuicon.classList.remove('bx-x');
                navbar.classList.remove('active');
            });
        });
    }

/* =============== Scroll section active link =============== */
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                    const activeLink = document.querySelector('header nav a[href*=' + id + ']');
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
            });
        }
    });

    /* =============== Sticky NavBar =============== */
    let header = document.querySelector('.header');
        if (header) {
    header.classList.toggle('sticky', window.scrollY > 100);
        }

    /* =============== remove menu icon navbar when click nvbar link (scroll) =============== */
        if (menuicon) {
    menuicon.classList.remove('bx-x');
        }
        if (navbar) {
    navbar.classList.remove('active');
        }
};

/* =============== Swipper =============== */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/* =============== Dark Light Mode =============== */
let darkmodeIcon = document.querySelector('#darkMode-icon');

// Check for saved theme preference or use system preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const savedTheme = localStorage.getItem('theme');

// Set initial theme
if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
    document.body.classList.add('dark-mode');
    darkmodeIcon.classList.remove('bx-moon');
    darkmodeIcon.classList.add('bx-sun');
}

// Dark mode toggle function
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    darkmodeIcon.classList.toggle('bx-moon');
    darkmodeIcon.classList.toggle('bx-sun');
    
    // Save theme preference
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Add click event listener
darkmodeIcon.addEventListener('click', toggleDarkMode);

/* =============== Scroll Reveal =============== */
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top'
});
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .contact form', {
    origin: 'bottom'
});
ScrollReveal().reveal('.home-content h1, .about-img img', {
    origin: 'left'
});
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', {
    origin: 'right'
});

/* =============== Enhanced Form Validation =============== */
function validateForm() {
    const form = document.getElementById('contact-form');
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const errorElement = document.getElementById(field.id + '-error');
    
    // Clear previous error
    clearFieldError(field);
    
    // Validation rules
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'This field is required');
        return false;
    }
    
    if (field.type === 'email' && value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
            showFieldError(field, 'Please enter a valid email address');
            return false;
        }
    }
    
    if (field.type === 'tel' && value) {
        const phonePattern = /^[0-9]{7,15}$/;
        if (!phonePattern.test(value)) {
            showFieldError(field, 'Please enter a valid phone number');
            return false;
        }
    }
    
    if (field.hasAttribute('minlength') && value.length < field.getAttribute('minlength')) {
        showFieldError(field, `Minimum ${field.getAttribute('minlength')} characters required`);
        return false;
    }
    
    if (field.hasAttribute('maxlength') && value.length > field.getAttribute('maxlength')) {
        showFieldError(field, `Maximum ${field.getAttribute('maxlength')} characters allowed`);
        return false;
    }
    
    return true;
}

function showFieldError(field, message) {
    const errorElement = document.getElementById(field.id + '-error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        field.classList.add('error');
    }
}

function clearFieldError(field) {
    const errorElement = document.getElementById(field.id + '-error');
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
        field.classList.remove('error');
    }
}

/* =============== Performance Optimizations =============== */
// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                const activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        }
    });

    let header = document.querySelector('.header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
    }
}, 10);

// Replace the original scroll handler
window.onscroll = optimizedScrollHandler;

/* =============== Portfolio Filter Enhancement =============== */
function initPortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-box');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

/* =============== Skills Animation =============== */
function animateSkillsOnScroll() {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.3 });
    
    skillCategories.forEach(category => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(30px)';
        category.style.transition = 'all 0.6s ease-out';
        skillObserver.observe(category);
    });
}

/* =============== Initialize All Features =============== */
// Single DOMContentLoaded event listener to initialize everything
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Starting initialization...');
    
    // Initialize menu functionality
    menuicon = document.querySelector('#menu-icon');
    navbar = document.querySelector('.navbar');

    if (menuicon && navbar) {
        // Menu icon click handler
        menuicon.onclick = () => {
            menuicon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuicon.contains(e.target) && !navbar.contains(e.target)) {
                menuicon.classList.remove('bx-x');
                navbar.classList.remove('active');
            }
        });

        // Close menu when clicking on a link
        navbar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuicon.classList.remove('bx-x');
                navbar.classList.remove('active');
            });
        });
    }

    // Initialize form validation
    const form = document.getElementById('contact-form');
    if (form) {
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => clearFieldError(input));
        });
    }

    // Initialize portfolio filters
    initPortfolioFilters();

    // Initialize skills animation
    animateSkillsOnScroll();

    // Initialize expertise chips cycling
    cycleExpertiseChips();

    // Initialize Three.js
    console.log('Initializing Three.js...');
    initThreeJS();

    // Initialize profession modal
    console.log('Initializing profession modal...');
    initProfessionModal();

    // Initialize profession icons
    console.log('Initializing profession icons...');
    initProfessionIcons();

    // Handle window resize
    window.addEventListener('resize', () => {
        if (camera && renderer) {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
    });

    // Initialize enhanced section animations
    initSectionAnimations();

    // Initialize lazy loading
    lazyLoadImages();

    // Initialize dark mode
    const darkmodeIcon = document.querySelector('#darkMode-icon');
    if (darkmodeIcon) {
        darkmodeIcon.addEventListener('click', toggleDarkMode);
    }

    // Initialize portfolio filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioBoxes = document.querySelectorAll('.portfolio-box');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            portfolioBoxes.forEach(box => {
                if (filter === 'all' || box.getAttribute('data-category') === filter) {
                    box.style.display = '';
                } else {
                    box.style.display = 'none';
                }
            });
        });
    });

    // [FIX] Always allow default for Download CV and social links
    allowDefaultLinks();

    // === REMOVED PROFILE IMAGE TILT EFFECT TO PREVENT FLICKERING ===
    // Profile image hover effects are now handled purely via CSS

    // === Profession Icon Interactive Logic (Bounce, Float, Modal) ===
    const techIcons = document.querySelectorAll('.home .tech-satellite');
    if (!techIcons.length) return;

    // Store original positions for each icon
    const iconData = Array.from(techIcons).map(icon => {
        return {
            icon,
            bouncing: false,
            timeout: null
        };
    });

    function getRect(el) {
        const r = el.getBoundingClientRect();
        return { x: r.left + r.width/2, y: r.top + r.height/2, w: r.width, h: r.height };
    }

    function animateBounce(iconObj, dx, dy) {
        if (iconObj.bouncing) return;
        iconObj.bouncing = true;
        iconObj.icon.style.transition = 'transform 0.5s cubic-bezier(0.4,2,0.2,1)';
        iconObj.icon.style.transform = `translate(${dx}px, ${dy}px) scale(1.15)`;
        clearTimeout(iconObj.timeout);
        iconObj.timeout = setTimeout(() => {
            iconObj.icon.style.transition = 'transform 0.7s cubic-bezier(0.4,0,0.2,1)';
            iconObj.icon.style.transform = 'translate(0,0) scale(1)';
            setTimeout(() => {
                iconObj.icon.style.transition = '';
                iconObj.bouncing = false;
            }, 700);
        }, 500);
    }

    // === REMOVED COLLISION DETECTION CODE ===
    // This code was causing errors with undefined profileImg
    
    // Gentle float animation
    techIcons.forEach((icon, i) => {
        icon.style.transition = 'transform 0.7s cubic-bezier(0.4,0,0.2,1)';
        icon.style.transform = 'none';
        icon.animate([
            { transform: 'translateY(0px)' },
            { transform: 'translateY(-8px)' },
            { transform: 'translateY(0px)' }
        ], {
            duration: 3200 + i * 200,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out',
            delay: i * 300
        });
    });

    // Modal open/keyboard events
    const professionKeys = ['cloud', 'ai-ml', 'cybersecurity', 'devops', 'forensics'];
    techIcons.forEach((icon, index) => {
        const professionKey = professionKeys[index];
        if (professionKey) {
            icon.addEventListener('click', () => {
                showProfessionModal(professionKey, icon);
            });
            icon.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    showProfessionModal(professionKey, icon);
                }
            });
        }
    });

    // Mobile professions row modal logic
    const mobileProfBtns = document.querySelectorAll('.mobile-professions-row .tech-satellite');
    mobileProfBtns.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            showProfessionModal(professionKeys[idx], btn);
        });
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                showProfessionModal(professionKeys[idx], btn);
            }
        });
    });
});

/* =============== Mail =============== */
function sendToGmail(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form values
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const emailSubject = document.getElementById('email-subject').value;
    const message = document.getElementById('message').value;

    // Construct the email body
    const emailBody =
        `Full Name: ${fullname}%0D%0A` +
        `Email: ${email}%0D%0A` +
        `Number: ${number}%0D%0A` +
        `Email Subject: ${emailSubject}%0D%0A` +
        `Message: ${message}`;

    // Gmail compose URL
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=deysoumyadyuti@gmail.com&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Redirect to Gmail
    window.open(gmailURL, '_blank');
}

// Progress Button Animation 
function animateProgress(element, start, end, duration) {
    let startTime = null;
    let animationFrame;

    function animationStep(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let percentage = Math.min((progress / duration) * 100, 100);
        let value = start + (end - start) * (percentage / 100);

        element.style.setProperty('--i', `${value}%`);
        const span = element.querySelector('span');
        if (span) {
            span.textContent = `${Math.round(value)}%`;
        }

        if (percentage < 100) {
            animationFrame = requestAnimationFrame(animationStep);
        }
    }

    // Cancel any existing animation
    if (element.animationFrame) {
        cancelAnimationFrame(element.animationFrame);
    }

    element.animationFrame = requestAnimationFrame(animationStep);
}

// Progress Circle Animation
function animateProgressCircle(element) {
    const progressBar = element.querySelector('.progress-bar');
    const progressText = element.querySelector('.progress-text');
    const target = parseInt(element.getAttribute('data-progress'));
    let current = 0;
    
    const animation = setInterval(() => {
        current += 1;
        const degrees = (current / 100) * 360;
        progressBar.style.background = `conic-gradient(var(--main-color) 0deg, var(--main-color) ${degrees}deg, var(--white-color) ${degrees}deg)`;
        progressText.textContent = `${current}%`;
        
        if (current >= target) {
            clearInterval(animation);
            progressBar.style.background = `conic-gradient(var(--main-color) 0deg, var(--main-color) ${(target / 100) * 360}deg, var(--white-color) ${(target / 100) * 360}deg)`;
            progressText.textContent = `${target}%`;
        }
    }, 20);
}

// Initialize progress circles when they come into view
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressElements = document.querySelectorAll('.progress-circle');
            progressElements.forEach(element => {
                if (!element.hasAttribute('data-animated')) {
                    animateProgressCircle(element);
                    element.setAttribute('data-animated', 'true');
                }
            });
        }
    });
}, {
    threshold: 0.2
});

// Start observing the services section
    const servicesSection = document.querySelector('.serives');
    if (servicesSection) {
        progressObserver.observe(servicesSection);
    }

// Smooth Scroll - Fixed for Instant Response
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Progress Circle Animation
const progressCircles = document.querySelectorAll('.progress-circle');
progressCircles.forEach(circle => {
    const target = parseInt(circle.getAttribute('data-progress'));
    const progress = circle.querySelector('.progress');
        if (progress) {
    progress.style.strokeDashoffset = 283 - (283 * target / 100);
        }
});

// Header Scroll Effect
let lastScroll = 0;
const header = document.querySelector('.header');

    if (header) {
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});
    }

// Initialize AOS
AOS.init({
    duration: 800,
    offset: 100,
    once: true
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('#menu-btn');
    if (menuBtn && navbar) {
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
    }

// Portfolio Filter Animation
const portfolioItems = document.querySelectorAll('.portfolio-box');
portfolioItems.forEach(item => {
        if (item) {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
        }
});

// Form Validation
const contactForm = document.querySelector('.contact form');
    if (contactForm) {
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Basic form validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '';
        }
    });
    
    if (isValid) {
        // Here you would typically send the form data
        alert('Message sent successfully!');
        contactForm.reset();
    }
});
    }

// Add smooth reveal animation for sections
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
    });

// Mobile expertise bar fade+slide animation
function cycleExpertiseChips() {
  const bar = document.querySelector('.expertise-bar-fade-mobile');
  if (!bar) return;
  const chips = bar.querySelectorAll('.expertise-chip');
  let idx = 0;
  chips.forEach((chip, i) => chip.classList.remove('active', 'out'));
  chips[0].classList.add('active');
  setInterval(() => {
    chips[idx].classList.remove('active');
    chips[idx].classList.add('out');
    const prevIdx = idx;
    idx = (idx + 1) % chips.length;
    chips[idx].classList.remove('out');
    chips[idx].classList.add('active');
    // Remove 'out' from previous chip after animation
    setTimeout(() => chips[prevIdx].classList.remove('out'), 700);
  }, 1700);
}

/* =============== Profession Cards with Three.js =============== */
// Profession data
const professionData = {
    'cloud': {
        title: 'Cloud Architecture',
        icon: 'bx bxl-google-cloud',
        description: 'Expert in designing and implementing scalable cloud infrastructures across AWS, Azure, and GCP. Specialized in cloud-native applications, serverless architectures, and DevOps practices. Experience includes containerization with Docker/Kubernetes, infrastructure as code with Terraform, and CI/CD pipeline optimization.',
        skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Serverless', 'Microservices', 'CI/CD'],
        projects: [
            { name: 'Cloud Infrastructure Setup', icon: 'bx bx-server' },
            { name: 'DevOps Automation', icon: 'bx bx-cog' },
            { name: 'Container Orchestration', icon: 'bx bx-package' }
        ]
    },
    'ai-ml': {
        title: 'AI/ML Engineering',
        icon: 'bx bx-brain',
        description: 'Passionate about building intelligent systems and machine learning solutions. Expertise in Python-based ML pipelines, natural language processing, and large language models. Experience with deep learning frameworks, data preprocessing, and model deployment in production environments.',
        skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'LLMs', 'Deep Learning', 'Data Science', 'Model Deployment', 'MLOps'],
        projects: [
            { name: 'AI-Powered Note Assistant', icon: 'bx bx-note' },
            { name: 'Voice Assistant System', icon: 'bx bx-microphone' },
            { name: 'ML Pipeline Optimization', icon: 'bx bx-data' }
        ]
    },
    'cybersecurity': {
        title: 'Cybersecurity',
        icon: 'bx bx-shield-quarter',
        description: 'Specialized in cybersecurity implementation and threat management. Experience in security assessment, incident response, and implementing security best practices. Knowledge of penetration testing, vulnerability assessment, and security automation tools.',
        skills: ['Penetration Testing', 'Vulnerability Assessment', 'Incident Response', 'Security Automation', 'Threat Detection', 'Digital Forensics', 'Security Tools'],
        projects: [
            { name: 'Threat Detection System', icon: 'bx bx-shield-check' },
            { name: 'Security Desktop Bot', icon: 'bx bx-bot' },
            { name: 'Incident Response Framework', icon: 'bx bx-alarm' }
        ]
    },
    'devops': {
        title: 'DevOps & Infrastructure',
        icon: 'bx bx-server',
        description: 'Expert in DevOps practices and infrastructure automation. Experience with containerization, orchestration, and infrastructure as code. Skilled in building robust CI/CD pipelines, monitoring systems, and ensuring high availability of services.',
        skills: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Monitoring', 'Infrastructure as Code', 'Automation', 'High Availability'],
        projects: [
            { name: 'CI/CD Pipeline Setup', icon: 'bx bx-git-branch' },
            { name: 'Infrastructure Automation', icon: 'bx bx-code-block' },
            { name: 'Monitoring & Alerting', icon: 'bx bx-line-chart' }
        ]
    },
    'forensics': {
        title: 'Forensics Analyst',
        icon: 'bx bx-search-alt-2',
        description: 'Skilled in digital forensics, evidence collection, and cyber investigation. Experienced in forensic analysis tools, chain of custody, and incident response for legal and security cases.',
        skills: ['Digital Forensics', 'Evidence Collection', 'Chain of Custody', 'Cyber Investigation', 'Forensic Tools', 'Incident Response', 'Report Writing'],
        projects: [
            { name: 'Forensic Evidence Analysis', icon: 'bx bx-analyse' },
            { name: 'Incident Investigation', icon: 'bx bx-search' },
            { name: 'Legal Case Support', icon: 'bx bx-file' }
        ]
    }
};

// Three.js scene for zoom animation
let scene, camera, renderer, mesh;
let isAnimating = false;

function initThreeJS() {
    if (typeof THREE === 'undefined') {
        console.warn('[Three.js] THREE is not loaded. 3D effects will be disabled.');
        return;
    }
    console.log('Initializing Three.js...');
    // Create scene
    scene = new THREE.Scene();
    
    // Create camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Create renderer
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    document.body.appendChild(renderer.domElement);
    
    // Create a simple geometry for zoom effect
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ 
        color: 0x64ffda, 
        transparent: true, 
        opacity: 0.3,
        wireframe: true
    });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    
    // Hide renderer initially
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.pointerEvents = 'none';
    renderer.domElement.style.zIndex = '9998';
    renderer.domElement.style.opacity = '0';
    renderer.domElement.style.transition = 'opacity 0.3s ease';
    
    console.log('Three.js initialized successfully');
    animate();
}

function animate() {
    if (!isAnimating) return;
    
    requestAnimationFrame(animate);
    
    if (mesh) {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
    }
    
    renderer.render(scene, camera);
}

// Initialize the modal system when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the profession modal
    initProfessionModal();
    
    // Initialize profession icons
    initProfessionIcons();
});

// ULTIMATE SIMPLE Modal functionality
function initProfessionModal() {
    const modal = document.getElementById('profession-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalBackdrop = document.querySelector('.modal-backdrop');
    
    if (!modal) {
        console.warn('[Profession Modal] Modal element not found');
        return { closeModal: () => {} };
    }
    
    console.log('Initializing simple profession modal...');
    
    // Simple close modal function
    function closeModal() {
        modal.classList.remove('active');
        modal.style.display = 'none';
        
        // Restore page scroll position
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.overflow = '';
        document.body.style.width = '';
        
        if (scrollY) {
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    }
    
    // Event listeners for closing modal
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', closeModal);
    }
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    console.log('Simple modal initialized successfully');
    return { closeModal };
}

// Zoom animation function
function createZoomAnimation(element, professionKey) {
    return new Promise((resolve) => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Position Three.js scene at the clicked element
        if (renderer && mesh) {
            renderer.domElement.style.opacity = '1';
            isAnimating = true;
            
            // Scale and position the mesh
            mesh.scale.set(0.1, 0.1, 0.1);
            mesh.position.set(
                (centerX / window.innerWidth) * 2 - 1,
                -(centerY / window.innerHeight) * 2 + 1,
                0
            );
            
            // Animate zoom
            const startScale = 0.1;
            const endScale = 2;
            const duration = 800;
            const startTime = Date.now();
            
            function zoomAnimation() {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
                
                const currentScale = startScale + (endScale - startScale) * easeProgress;
                mesh.scale.set(currentScale, currentScale, currentScale);
                
                // Move towards center
                const centerProgress = Math.min(progress * 1.5, 1);
                mesh.position.x = mesh.position.x * (1 - centerProgress);
                mesh.position.y = mesh.position.y * (1 - centerProgress);
                
                if (progress < 1) {
                    requestAnimationFrame(zoomAnimation);
            } else {
                    // Animation complete
                    setTimeout(() => {
                        renderer.domElement.style.opacity = '0';
                        isAnimating = false;
                        resolve();
                    }, 200);
                }
            }
            
            zoomAnimation();
        } else {
            resolve();
        }
    });
}

// Fixed Profession Icon Interactive Logic - No More Errors
function initProfessionIcons() {
    console.log('Initializing profession icons...');
    const techIcons = document.querySelectorAll('.tech-satellite');
    if (!techIcons.length) {
        console.warn('[Profession Icons] No .tech-satellite elements found.');
        return;
    }
    console.log('Found tech icons:', techIcons.length);
    
    const professionKeys = ['cloud', 'ai-ml', 'cybersecurity', 'devops', 'forensics'];
    
    techIcons.forEach((icon, index) => {
        // Only process icons that have a corresponding profession key
        if (index < professionKeys.length) {
            const professionKey = professionKeys[index];
            
            console.log(`Setting up icon ${index + 1} with profession key:`, professionKey);
            console.log('Icon element:', icon);
            
            icon.addEventListener('click', () => {
                showProfessionModal(professionKey, icon);
            });
            icon.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    showProfessionModal(professionKey, icon);
                }
            });
        } else {
            console.log(`Skipping icon ${index + 1} - no corresponding profession key`);
        }
    });
}

// Fixed showProfessionModal function with reliable display logic
function showProfessionModal(professionKey, triggerEl) {
    const modal = document.getElementById('profession-modal');
    if (!modal) return;
    
    const data = professionData[professionKey];
    if (!data) return;
    
    // Set modal title
    const titleEl = document.getElementById('modal-title');
    if (titleEl) titleEl.textContent = data.title;
    
    // Set modal icon
    let iconEl = modal.querySelector('.profession-icon i');
    if (!iconEl) {
        let iconDiv = modal.querySelector('.profession-icon');
        if (!iconDiv) {
            iconDiv = document.createElement('div');
            iconDiv.className = 'profession-icon';
            modal.querySelector('.modal-body').prepend(iconDiv);
        }
        iconEl = document.createElement('i');
        iconDiv.appendChild(iconEl);
    }
    iconEl.className = data.icon;
    
    // Set modal description
    const descEl = modal.querySelector('.profession-description p') || document.getElementById('modal-desc');
    if (descEl) descEl.textContent = data.description;
    
    // Set skills
    const skillsContainer = modal.querySelector('.skills-tags') || document.createElement('div');
    skillsContainer.className = 'skills-tags';
    skillsContainer.innerHTML = '';
    
    data.skills.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        skillsContainer.appendChild(skillTag);
    });
    
    // Ensure skills container is in modal
    if (!modal.querySelector('.skills-tags')) {
        let skillsSection = modal.querySelector('.profession-skills');
        if (!skillsSection) {
            skillsSection = document.createElement('div');
            skillsSection.className = 'profession-skills';
            skillsSection.innerHTML = '<h3>Key Skills</h3>';
            modal.querySelector('.modal-body').appendChild(skillsSection);
        }
        skillsSection.appendChild(skillsContainer);
    }
    
    // Set projects if data.projects exists
    if (data.projects) {
        const projectsContainer = modal.querySelector('.project-links') || document.createElement('div');
        projectsContainer.className = 'project-links';
        projectsContainer.innerHTML = '';
        
        data.projects.forEach(project => {
            const projectLink = document.createElement('div');
            projectLink.className = 'project-link';
            projectLink.innerHTML = `<i class="${project.icon}"></i> <span>${project.name}</span>`;
            projectsContainer.appendChild(projectLink);
        });
        
        let projectsSection = modal.querySelector('.profession-projects');
        if (!projectsSection) {
            projectsSection = document.createElement('div');
            projectsSection.className = 'profession-projects';
            projectsSection.innerHTML = '<h3>Related Projects</h3>';
            modal.querySelector('.modal-body').appendChild(projectsSection);
        }
        projectsSection.appendChild(projectsContainer);
    }
    
    // Show modal - prevent page scroll and center perfectly
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.width = '100%';
    
    modal.style.display = 'flex';
    modal.classList.add('active');
    
    // Focus management
    setTimeout(() => {
        const focusableEls = modal.querySelectorAll('button, [tabindex]:not([tabindex="-1"])');
        const firstEl = focusableEls[0];
        if (firstEl) firstEl.focus();
    }, 100);
}

// === [FIX] Robust Button/Link Handling for Home Section ===
// Utility: Always allow default for links with [data-allow-default]
function allowDefaultLinks() {
    setTimeout(() => {
        document.querySelectorAll('a[data-allow-default], .social-media a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.stopImmediatePropagation();
                // Do NOT call e.preventDefault();
                // Let the browser handle the link as normal
            }, true); // Use capture phase to override earlier handlers
        });
    }, 0);
}

// === Resume Download Barrier (simple math, force download, no web view) ===
document.addEventListener('DOMContentLoaded', function() {
  const resumeBtn = document.getElementById('resume-download-btn');
  const modal = document.getElementById('resume-modal');
  const closeBtn = document.getElementById('resume-modal-close');
  const mathForm = document.getElementById('resume-math-form');
  const mathQuestion = document.getElementById('resume-math-question');
  const mathAnswer = document.getElementById('resume-math-answer');
  const mathError = document.getElementById('resume-math-error');
  let correctAnswer = null;
  let attempts = 0;
  const maxAttempts = 3;
  let isDownloading = false;

  // Simple math question
  function generateMathQuestion() {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const op = ['+', '-', '*'][Math.floor(Math.random() * 3)];
    let q, ans;
    if (op === '+') { q = `${a} + ${b}`; ans = a + b; }
    else if (op === '-') { q = `${a} - ${b}`; ans = a - b; }
    else { q = `${a} × ${b}`; ans = a * b; }
    mathQuestion.textContent = `What is ${q}?`;
    correctAnswer = ans;
    mathAnswer.value = '';
    mathError.textContent = '';
    setTimeout(() => mathAnswer.focus(), 100);
  }

  if (!resumeBtn || !modal || !closeBtn || !mathForm || !mathQuestion || !mathAnswer || !mathError) return;

  resumeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (isDownloading) return;
    attempts = 0;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    generateMathQuestion();
  });

  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    attempts = 0;
    isDownloading = false;
  });

  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
      attempts = 0;
      isDownloading = false;
    }
  });

  mathForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    if (isDownloading) return;
    attempts++;
    const userAns = parseInt(mathAnswer.value.trim(), 10);
    if (userAns === correctAnswer) {
      isDownloading = true;
      mathError.textContent = 'Preparing download...';
      try {
        // Only fetch and download the PDF after passing the math check
        const response = await fetch('secure/resume.pdf');
        if (!response.ok) throw new Error('Failed to fetch resume');
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'Soumyadyuti_Dey_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        modal.style.display = 'none';
        document.body.style.overflow = '';
        attempts = 0;
        isDownloading = false;
        mathError.textContent = '';
      } catch (error) {
        mathError.textContent = 'Download failed. Please try again.';
        isDownloading = false;
      }
    } else {
      if (attempts >= maxAttempts) {
        mathError.textContent = 'Too many incorrect attempts. Please try again later.';
        setTimeout(() => {
          modal.style.display = 'none';
          document.body.style.overflow = '';
          attempts = 0;
          isDownloading = false;
        }, 2000);
      } else {
        mathError.textContent = `Incorrect answer. ${maxAttempts - attempts} attempts remaining.`;
        mathAnswer.focus();
        generateMathQuestion();
      }
    }
  });

  modal.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      const focusable = modal.querySelectorAll('button, input');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    if (e.key === 'Escape') {
      modal.style.display = 'none';
      document.body.style.overflow = '';
      attempts = 0;
      isDownloading = false;
    }
  });
});

// Enhance hamburger menu animation for mobile
if (window.innerWidth <= 768 && menuicon && navbar) {
    menuicon.onclick = () => {
        menuicon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
        // Add a little bounce effect
        if (navbar.classList.contains('active')) {
            navbar.style.willChange = 'opacity, transform';
            navbar.style.transition = 'opacity 0.38s cubic-bezier(0.4,0,0.2,1), transform 0.38s cubic-bezier(0.4,0,0.2,1)';
            navbar.style.opacity = '1';
            navbar.style.transform = 'translateY(0) scale(1)';
        } else {
            navbar.style.opacity = '0';
            navbar.style.transform = 'translateY(-24px) scale(0.98)';
        }
    };
}

// === Enhanced Show More Projects Logic with Perfect Animations ===
document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('show-more-projects-btn');
    const extraProjects = document.querySelectorAll('.portfolio-box.extra-project');
    let expanded = false;
    
    if (showMoreBtn && extraProjects.length > 0) {
        showMoreBtn.addEventListener('click', function() {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = showMoreBtn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            showMoreBtn.style.position = 'relative';
            showMoreBtn.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
            
            if (!expanded) {
                // Show projects with enhanced staggered animation
                extraProjects.forEach((card, i) => {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(40px) scale(0.9) rotateX(10deg)';
                    card.style.filter = 'blur(2px)';
                    
                    setTimeout(() => {
                        card.style.transition = `
                            opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),
                            transform 0.7s cubic-bezier(0.4, 0, 0.2, 1),
                            filter 0.7s cubic-bezier(0.4, 0, 0.2, 1)
                        `;
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1) rotateX(0)';
                        card.style.filter = 'blur(0px)';
                    }, i * 120 + 100);
                });
                
                showMoreBtn.textContent = 'Show Less';
                showMoreBtn.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    showMoreBtn.style.transform = 'scale(1)';
                }, 150);
                expanded = true;
            } else {
                // Hide projects with smooth reverse animation
                const reverseOrder = Array.from(extraProjects).reverse();
                reverseOrder.forEach((card, i) => {
                    setTimeout(() => {
                        card.style.transition = `
                            opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                            transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                            filter 0.5s cubic-bezier(0.4, 0, 0.2, 1)
                        `;
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(-30px) scale(0.95) rotateX(-5deg)';
                        card.style.filter = 'blur(1px)';
                        
                        setTimeout(() => {
                            card.style.display = 'none';
                            card.style.transform = 'translateY(40px) scale(0.9) rotateX(10deg)';
                            card.style.filter = 'blur(2px)';
                        }, 500);
                    }, i * 80);
                });
                
                showMoreBtn.textContent = 'Show More';
                showMoreBtn.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    showMoreBtn.style.transform = 'scale(1)';
                }, 150);
                expanded = false;
            }
        });
    }
});

// Simplified initialization - no complex animations
function initSectionAnimations() {
    // Keep sections visible immediately
    const sections = document.querySelectorAll('.about, .skills-breakdown, .portfolio, .serives, .blog, .contact, .timeline');
    sections.forEach(section => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
    });
    
    // Add ripple animation keyframes
    const rippleStyle = document.createElement('style');
    rippleStyle.innerHTML = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
}

// Add fadeOut keyframes if not present
(function() {
    const style = document.createElement('style');
    style.innerHTML = `@keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }`;
    document.head.appendChild(style);
})();
