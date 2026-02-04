/**
 * ChainSync - Advanced Interactions JavaScript
 * Magnetic effects, custom cursor, scroll-snap, text reveals
 */

(function () {
    'use strict';

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        console.log('ChainSync: Initializing advanced interactions...');

        initCustomCursor();
        initMagneticElements();
        initScrollSnap();
        initTextReveal();
        initSectionProgress();
        initScrollHint();
        initAmbientParticles();

        console.log('ChainSync: Advanced interactions loaded!');
    }

    /* ==========================================
       Custom Interactive Cursor
       ========================================== */
    function initCustomCursor() {
        // Only on desktop
        if (window.innerWidth <= 768) return;

        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        const cursorDot = document.createElement('div');
        cursorDot.className = 'custom-cursor-dot';

        document.body.appendChild(cursor);
        document.body.appendChild(cursorDot);
        document.body.classList.add('custom-cursor-active');

        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let dotX = 0, dotY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dotX = e.clientX;
            dotY = e.clientY;
        });

        // Smooth cursor follow
        function updateCursor() {
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;

            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            cursorDot.style.left = dotX + 'px';
            cursorDot.style.top = dotY + 'px';

            requestAnimationFrame(updateCursor);
        }
        updateCursor();

        // Hover effects
        const hoverElements = document.querySelectorAll('a, button, .component-card, .nav-cta');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });

        // Click effect
        document.addEventListener('mousedown', () => cursor.classList.add('click'));
        document.addEventListener('mouseup', () => cursor.classList.remove('click'));
    }

    /* ==========================================
       Magnetic Button Effects
       ========================================== */
    function initMagneticElements() {
        const magneticElements = document.querySelectorAll('.nav-cta, .btn-primary, .btn-secondary');

        magneticElements.forEach(el => {
            el.classList.add('magnetic-element');

            el.addEventListener('mousemove', function (e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                // Magnetic pull effect (max 15px)
                const distance = Math.sqrt(x * x + y * y);
                const maxDistance = 80;

                if (distance < maxDistance) {
                    const strength = 1 - (distance / maxDistance);
                    const pullX = x * strength * 0.3;
                    const pullY = y * strength * 0.3;

                    this.style.setProperty('--magnetic-x', `${pullX}px`);
                    this.style.setProperty('--magnetic-y', `${pullY}px`);
                    this.classList.add('attracted');
                }
            });

            el.addEventListener('mouseleave', function () {
                this.style.setProperty('--magnetic-x', '0px');
                this.style.setProperty('--magnetic-y', '0px');
                this.classList.remove('attracted');
            });
        });
    }

    /* ==========================================
       Scroll Snap Behavior
       ========================================== */
    function initScrollSnap() {
        // Enable scroll snap
        document.documentElement.classList.add('scroll-snap');

        // Add snap class to major sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.add('snap-section');
        });

        // Smooth scroll to section on click
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#' || !href) return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    /* ==========================================
       Text Reveal Animations
       ========================================== */
    function initTextReveal() {
        // Wrap headings in reveal containers
        const headings = document.querySelectorAll('h1, h2, h3');

        headings.forEach(heading => {
            // Skip if already processed
            if (heading.classList.contains('text-reveal')) return;

            const text = heading.textContent;
            heading.classList.add('split-text');
            heading.innerHTML = '';

            // Split into characters
            text.split('').forEach((char, index) => {
                const span = document.createElement('span');
                span.className = 'char';
                span.textContent = char === ' ' ? '\u00A0' : char;

                // Add extra delay for later characters
                if (index > 10) {
                    span.style.transitionDelay = `${0.5 + (index - 10) * 0.03}s`;
                }

                heading.appendChild(span);
            });
        });

        // Observe and reveal
        if (!('IntersectionObserver' in window)) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });

        headings.forEach(heading => observer.observe(heading));
    }

    /* ==========================================
       Section Progress Indicator
       ========================================== */
    function initSectionProgress() {
        const sections = document.querySelectorAll('section[id]');
        if (sections.length === 0) return;

        const progressContainer = document.createElement('div');
        progressContainer.className = 'section-progress';

        sections.forEach((section, index) => {
            const dot = document.createElement('div');
            dot.className = 'progress-dot';
            dot.dataset.label = section.id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            dot.dataset.target = section.id;

            dot.addEventListener('click', () => {
                section.scrollIntoView({ behavior: 'smooth' });
            });

            progressContainer.appendChild(dot);
        });

        document.body.appendChild(progressContainer);

        // Update active dot on scroll
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                    current = section.id;
                }
            });

            const dots = progressContainer.querySelectorAll('.progress-dot');
            dots.forEach(dot => {
                dot.classList.remove('active');
                if (dot.dataset.target === current) {
                    dot.classList.add('active');
                }
            });
        }, { passive: true });
    }

    /* ==========================================
       Scroll Hint Indicator
       ========================================== */
    function initScrollHint() {
        const hint = document.createElement('div');
        hint.className = 'scroll-hint visible';
        hint.innerHTML = '<div class="scroll-hint-arrow"></div>';
        document.body.appendChild(hint);

        // Hide after first scroll
        let scrolled = false;
        window.addEventListener('scroll', () => {
            if (!scrolled && window.pageYOffset > 100) {
                hint.classList.remove('visible');
                scrolled = true;
            }
        }, { passive: true, once: true });

        // Auto-hide after 5 seconds
        setTimeout(() => {
            hint.classList.remove('visible');
        }, 5000);
    }

    /* ==========================================
       Ambient Particle System
       ========================================== */
    function initAmbientParticles() {
        if (window.innerWidth <= 768) return; // Skip on mobile

        const container = document.createElement('div');
        container.className = 'ambient-particles';
        document.body.appendChild(container);

        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'ambient-particle';

            // Random horizontal position
            particle.style.left = Math.random() * 100 + '%';

            // Random drift
            particle.style.setProperty('--drift-x', (Math.random() - 0.5) * 200 + 'px');

            // Random animation duration
            particle.style.animationDuration = (15 + Math.random() * 10) + 's';

            // Random delay
            particle.style.animationDelay = Math.random() * 5 + 's';

            container.appendChild(particle);

            // Remove after animation
            setTimeout(() => {
                particle.remove();
            }, 25000);
        }

        // Create particles periodically
        for (let i = 0; i < 10; i++) {
            setTimeout(() => createParticle(), i * 2000);
        }

        setInterval(() => {
            if (container.children.length < 15) {
                createParticle();
            }
        }, 3000);
    }

})();
