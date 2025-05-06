// Code created By Dev Zone Developer
/* =============== Menu Icons Navbar =============== */
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



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
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /* =============== Sticky NavBar =============== */
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100).togglemenu();


    /* =============== remove menu icon navbar when click nvbar link (scroll) =============== */
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
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

// Get the width of the window's content area
//   var screenWidth = window.innerWidth;
//   var screenheight = window.innerHeight;

//   // Display the width in an alert box
//   alert("The width of your screen is: " + screenWidth + " pixels and Height is " + screenheight);



/* =============== Dark Light Mode =============== */
let darkmodeIcon = document.querySelector('#darkMode-icon');
darkmodeIcon.onclick = () => {
    darkmodeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}

/* =============== Scroll Reveal =============== */
ScrollReveal({
    //  reset: true,
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
document.addEventListener('DOMContentLoaded', () => {
    const servicesSection = document.querySelector('.serives');
    if (servicesSection) {
        progressObserver.observe(servicesSection);
    }
});

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
    progress.style.strokeDashoffset = 283 - (283 * target / 100);
});

// Header Scroll Effect
let lastScroll = 0;
const header = document.querySelector('.header');

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

// Initialize AOS
AOS.init({
    duration: 800,
    offset: 100,
    once: true
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// Portfolio Filter Animation
const portfolioItems = document.querySelectorAll('.portfolio-box');
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// Form Validation
const contactForm = document.querySelector('.contact form');
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

// Add smooth reveal animation for sections
const sections = document.querySelectorAll('section');
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
