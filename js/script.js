// Code created By Dev Zone Developer
/* =============== Menu Icons Navbar =============== */
document.addEventListener('DOMContentLoaded', () => {
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

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
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-box, .contact form', {
    origin: 'bottom'
});
ScrollReveal().reveal('.home-content h1, .about-img img', {
    origin: 'left'
});
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', {
    origin: 'right'
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

// Smooth Scroll
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

document.addEventListener('DOMContentLoaded', cycleExpertiseChips);
});
