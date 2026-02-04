/**
 * ChainSync - Premium Animations & Interactions
 * Smooth, performant, eye-catching effects
 */

(function() {
  'use strict';

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    console.log('ChainSync: Initializing premium animations...');
    
    initPageLoader();
    initScrollProgress();
    initScrollReveal();
    initAnimatedCounters();
    initParticles();
    initSmoothScroll();
    init3DCardEffects();
    initNavbarEffects();
    
    console.log('ChainSync: Premium animations loaded!');
  }

  /* ==========================================
     Page Loader
     ========================================== */
  function initPageLoader() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = '<div class="loader-spinner"></div>';
    document.body.insertBefore(loader, document.body.firstChild);

    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('loaded');
        setTimeout(() => loader.remove(), 500);
      }, 300);
    });
  }

  /* ==========================================
     Scroll Progress Bar
     ========================================== */
  function initScrollProgress() {
    let progressBar = document.querySelector('.scroll-progress');
    
    if (!progressBar) {
      progressBar = document.createElement('div');
      progressBar.className = 'scroll-progress';
      document.body.appendChild(progressBar);
    }

    window.addEventListener('scroll', () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.pageYOffset / windowHeight) * 100;
      progressBar.style.width = scrolled + '%';
    }, { passive: true });
  }

  /* ==========================================
     Scroll Reveal Animations
     ========================================== */
  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Add reveal classes to elements
    document.querySelectorAll('.component-card').forEach((el, index) => {
      el.classList.add('reveal-on-scroll');
      el.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(el);
    });

    document.querySelectorAll('section').forEach(section => {
      const heading = section.querySelector('h2');
      if (heading && !heading.classList.contains('hero-title')) {
        heading.classList.add('reveal-on-scroll');
        observer.observe(heading);
      }
    });
  }

  /* ==========================================
     Animated Counters
     ========================================== */
  function initAnimatedCounters() {
    const counters = document.querySelectorAll('.stat-number, .counter-number');
    if (counters.length === 0) return;

    const observerOptions = {
      threshold: 0.5
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          animateCounter(entry.target);
          entry.target.dataset.counted = 'true';
          entry.target.classList.add('animated');
        }
      });
    }, observerOptions);

    counters.forEach(counter => counterObserver.observe(counter));
  }

  function animateCounter(element) {
    const text = element.textContent;
    const hasPercent = text.includes('%');
    const hasPlus = text.includes('+');
    const numberMatch = text.match(/[\d.]+/);
    
    if (!numberMatch) return;

    const targetNumber = parseFloat(numberMatch[0]);
    const duration = 2000;
    const steps = 60;
    const increment = targetNumber / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current += increment;

      if (step >= steps) {
        current = targetNumber;
        clearInterval(timer);
      }

      let displayValue = current.toFixed(targetNumber % 1 !== 0 ? 1 : 0);
      if (hasPercent) displayValue += '%';
      if (hasPlus) displayValue += '+';

      element.textContent = displayValue;
    }, duration / steps);
  }

  /* ==========================================
     Floating Particles
     ========================================== */
  function initParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Create particles
    for (let i = 0; i < 5; i++) {
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      hero.appendChild(particle);
    }
  }

  /* ==========================================
     Smooth Scroll
     ========================================== */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || !href) return;

        const targetId = href.substring(1);
        const target = document.getElementById(targetId);

        if (target) {
          e.preventDefault();
          const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 30;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          if (history.pushState) {
            history.pushState(null, null, href);
          }
        }
      });
    });
  }

  /* ==========================================
     3D Card Effects
     ========================================== */
  function init3DCardEffects() {
    const cards = document.querySelectorAll('.component-card');

    cards.forEach(card => {
      card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        this.style.transform = `translateY(-12px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      card.addEventListener('mouseleave', function() {
        this.style.transform = '';
      });
    });
  }

  /* ==========================================
     Enhanced Navbar
     ========================================== */
  function initNavbarEffects() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let lastScrollY = window.pageYOffset;

    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;

      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Auto-hide on scroll down (desktop only)
      if (window.innerWidth > 768 && scrollY > 300) {
        if (scrollY > lastScrollY + 10) {
          navbar.style.transform = 'translateY(-100%)';
        } else if (scrollY < lastScrollY - 10) {
          navbar.style.transform = 'translateY(0)';
        }
      } else {
        navbar.style.transform = 'translateY(0)';
      }

      lastScrollY = scrollY;
    }, { passive: true });
  }

})();
