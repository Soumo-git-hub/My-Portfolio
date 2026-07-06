/* motion-animations.js
   GSAP-powered animations for the portfolio.
   Requires gsap global loaded via CDN before this script.

   Animations:
   1. Dynamic Island navbar — entrance pop + hide-on-scroll-down / pop-on-scroll-up
   2. Hero entrance stagger
   3. Section heading hairline rule reveal on scroll
*/
(function () {
    'use strict';

    document.documentElement.classList.add('js-motion-ready');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.home-content > *, .home-img img, .header').forEach(function (el) {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
        document.querySelectorAll('.heading').forEach(function (h) {
            h.classList.add('is-visible');
        });
        return;
    }

    var gsap = window.gsap;

    if (!gsap) {
        document.querySelectorAll('.home-content > *, .home-img img, .header').forEach(function (el) {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
        document.querySelectorAll('.heading').forEach(function (h) {
            h.classList.add('is-visible');
        });
        return;
    }

    // ── Dynamic Island navbar ─────────────────────────────────────────────────

    var navHeader = document.querySelector('.header');
    var navHidden  = false;
    var lastY      = window.scrollY;
    var rafPending = false;

    // Page-load entrance: drop in from above with a spring pop
    if (navHeader) {
        gsap.fromTo(navHeader,
            { opacity: 0, y: -32, scaleX: 0.9 },
            {
                opacity: 1, y: 0, scaleX: 1,
                duration: 0.7,
                delay: 0.08,
                ease: 'back.out(1.7)',
                clearProps: 'scaleX'
            }
        );
    }



    // ── Hero entrance stagger ─────────────────────────────────────────────────

    var heroEls = document.querySelectorAll(
        '.home-content h3, .home-content h1, .home-content p, ' +
        '.home-content .profession-container, .home-content .btn, ' +
        '.home-content .social-media'
    );

    if (heroEls.length) {
        gsap.fromTo(heroEls,
            { opacity: 0, y: 38 },
            {
                opacity: 1, y: 0,
                duration: 0.9,
                stagger: 0.12,
                ease: 'power4.out',
                clearProps: 'transform'
            }
        );
    }

    var homeImg = document.querySelector('.home-img img');
    if (homeImg) {
        gsap.fromTo(homeImg,
            { opacity: 0, x: 32 },
            {
                opacity: 1, x: 0,
                duration: 1.0,
                delay: 0.18,
                ease: 'power3.out',
                clearProps: 'transform'
            }
        );
    }

    // ── Section heading hairline rule — extends on scroll ────────────────────

    var headingObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                headingObserver.unobserve(entry.target);
            }
        });
    }, { rootMargin: '-60px 0px' });

    document.querySelectorAll('.heading').forEach(function (h) {
        headingObserver.observe(h);
    });

}());
