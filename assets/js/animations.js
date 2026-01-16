/* ================================================
   ChainSync - Advanced Animations Controller
   Handles scroll-triggered animations, parallax, and counters
   ================================================ */

(function() {
  'use strict';

  // ================================================
  // SCROLL-TRIGGERED ANIMATIONS
  // ================================================

  function initScrollAnimations() {
    const elements = document.querySelectorAll('.scroll-fade-in, .scroll-fade-left, .scroll-fade-right, .scroll-scale-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
  }

  // ================================================
  // NUMBER COUNTER ANIMATION
  // ================================================

  function animateCounter(element, target, duration = 2000, suffix = '') {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + suffix;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + suffix;
      }
    }, 16);
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted');
          const target = parseInt(entry.target.getAttribute('data-counter'));
          const suffix = entry.target.getAttribute('data-counter-suffix') || '';
          animateCounter(entry.target, target, 2000, suffix);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    counters.forEach(counter => observer.observe(counter));
  }

  // ================================================
  // PARALLAX EFFECTS
  // ================================================

  function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-bg');

    function updateParallax() {
      parallaxElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;

        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          element.style.transform = `translateY(${rate}px)`;
        }
      });
    }

    // Throttle scroll events for performance
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    });

    updateParallax(); // Initial call
  }

  // ================================================
  // GRADIENT ORBS PARALLAX
  // ================================================

  function initGradientOrbsParallax() {
    const orbs = document.querySelectorAll('.gradient-orb');

    function updateOrbs() {
      const scrolled = window.pageYOffset;

      orbs.forEach((orb, index) => {
        const rate = (index + 1) * 0.1;
        const offset = scrolled * rate;
        orb.style.transform = `translateY(${offset}px)`;
      });
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateOrbs();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // ================================================
  // PROGRESS BAR ANIMATION
  // ================================================

  function initProgressBars() {
    const progressBars = document.querySelectorAll('[data-progress]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animated');
          const progress = entry.target.getAttribute('data-progress');
          const fill = entry.target.querySelector('.progress-fill');
          if (fill) {
            setTimeout(() => {
              fill.style.width = progress + '%';
            }, 100);
          }
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.3
    });

    progressBars.forEach(bar => observer.observe(bar));
  }

  // ================================================
  // MAGNETIC BUTTON EFFECT
  // ================================================

  function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn-magnetic');

    buttons.forEach(button => {
      button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) translateY(-2px)`;
      });

      button.addEventListener('mouseleave', () => {
        button.style.transform = '';
      });
    });
  }

  // ================================================
  // CARD TILT EFFECT (subtle 3D)
  // ================================================

  function initCardTilt() {
    const cards = document.querySelectorAll('.card-tilt');

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // ================================================
  // SMOOTH SCROLL TO ANCHOR
  // ================================================

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offsetTop = target.offsetTop - 80; // Account for fixed nav

          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ================================================
  // INITIALIZE ALL ANIMATIONS
  // ================================================

  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    // Initialize all animation systems
    initScrollAnimations();
    initCounters();
    initParallax();
    initGradientOrbsParallax();
    initProgressBars();
    initMagneticButtons();
    initCardTilt();
    initSmoothScroll();

    console.log('ChainSync Advanced Animations initialized');
  }

  // Start initialization
  init();

})();
