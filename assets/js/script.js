// CRITICAL JavaScript fixes for ChainSync live site
(function() {
    'use strict';
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSite);
    } else {
        initSite();
    }
    
    function initSite() {
        console.log('ChainSync: Initializing site fixes...');
        
        // Critical fixes first
        fixMobileMenu();
        fixNavigation();
        fixScrolling();
        fixButtons();
        fixImages();
        
        console.log('ChainSync: Site fixes applied successfully');
    }
    
    // Fix mobile menu functionality
    function fixMobileMenu() {
        const mobileBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        if (!mobileBtn && window.innerWidth <= 768) {
            // Create mobile menu button if it doesn't exist
            const nav = document.querySelector('.nav-container');
            if (nav && !nav.querySelector('.mobile-menu-btn')) {
                const btn = document.createElement('div');
                btn.className = 'mobile-menu-btn';
                btn.innerHTML = '☰';
                btn.style.cssText = `
                    display: block;
                    font-size: 1.5rem;
                    color: #0066ff;
                    cursor: pointer;
                    padding: 5px;
                `;
                nav.appendChild(btn);
                
                // Add mobile menu functionality
                btn.addEventListener('click', function() {
                    if (navLinks) {
                        navLinks.classList.toggle('mobile-open');
                        this.innerHTML = navLinks.classList.contains('mobile-open') ? '✕' : '☰';
                    }
                });
            }
        }
        
        // Add mobile menu styles
        if (!document.querySelector('#mobile-menu-fix')) {
            const mobileStyles = document.createElement('style');
            mobileStyles.id = 'mobile-menu-fix';
            mobileStyles.textContent = `
                @media (max-width: 768px) {
                    .nav-links.mobile-open {
                        display: flex !important;
                        position: absolute !important;
                        top: 100% !important;
                        left: 0 !important;
                        right: 0 !important;
                        background: white !important;
                        flex-direction: column !important;
                        padding: 20px !important;
                        box-shadow: 0 5px 15px rgba(0,0,0,0.1) !important;
                        z-index: 999 !important;
                    }
                    .mobile-menu-btn {
                        display: block !important;
                    }
                }
            `;
            document.head.appendChild(mobileStyles);
        }
    }
    
    // Fix navigation active states and smooth scrolling
    function fixNavigation() {
        const navLinks = document.querySelectorAll('.nav-links a');
        const navbar = document.getElementById('navbar');
        
        // Set active state based on current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        navLinks.forEach(link => {
            const href = link.getAttribute('href') || '';
            if (href.includes(currentPage) || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
        
        // Add scroll effect to navbar
        if (navbar) {
            let lastScrollY = window.scrollY;
            
            function updateNavbar() {
                const scrollY = window.scrollY;
                
                if (scrollY > 50) {
                    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                    navbar.style.backdropFilter = 'blur(10px)';
                } else {
                    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                }
                
                lastScrollY = scrollY;
            }
            
            // Throttled scroll handler
            let scrollTimeout;
            window.addEventListener('scroll', () => {
                if (!scrollTimeout) {
                    scrollTimeout = setTimeout(() => {
                        updateNavbar();
                        scrollTimeout = null;
                    }, 10);
                }
            });
        }
        
        // Fix smooth scrolling for anchor links
        navLinks.forEach(link => {
            if (link.getAttribute('href')?.startsWith('#')) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const target = document.getElementById(targetId);
                    if (target) {
                        const offsetTop = target.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            }
        });
    }
    
    // Fix page scrolling and animations
    function fixScrolling() {
        // Add intersection observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Animate cards and sections
        const animateElements = document.querySelectorAll('.feature-card, .tech-card, .step-card');
        animateElements.forEach((el, index) => {
            // Set initial state
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = `all 0.6s ease ${index * 0.1}s`;
            
            observer.observe(el);
        });
        
        // Fix hero parallax if it exists
        const hero = document.querySelector('.hero');
        if (hero) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.3;
                const bg = hero.querySelector('.hero-bg, .animated-bg');
                if (bg) {
                    bg.style.transform = `translateY(${rate}px)`;
                }
            });
        }
    }
    
    // Fix button interactions
    function fixButtons() {
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
        
        buttons.forEach(btn => {
            // Add ripple effect on click
            btn.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255,255,255,0.3);
                    border-radius: 50%;
                    pointer-events: none;
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                `;
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    if (ripple.parentNode) {
                        ripple.parentNode.removeChild(ripple);
                    }
                }, 600);
            });
            
            // Add keyboard support
            btn.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });
        
        // Add ripple animation
        if (!document.querySelector('#ripple-animation')) {
            const rippleStyle = document.createElement('style');
            rippleStyle.id = 'ripple-animation';
            rippleStyle.textContent = `
                @keyframes ripple {
                    0% {
                        transform: scale(0);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(rippleStyle);
        }
    }
    
    // Fix image loading and fallbacks
    function fixImages() {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            // Add loading state
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
            
            const handleLoad = () => {
                img.style.opacity = '1';
            };
            
            const handleError = () => {
                // Create appropriate fallback
                const fallback = document.createElement('div');
                fallback.className = 'img-fallback';
                
                const alt = img.alt.toLowerCase();
                let content = '🖼️';
                
                if (alt.includes('dashboard')) content = '📊';
                else if (alt.includes('data') || alt.includes('flow')) content = '📈';
                else if (alt.includes('icon')) content = '🔧';
                
                fallback.innerHTML = `<span style="font-size: 2rem;">${content}</span>`;
                fallback.style.cssText = `
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: ${img.width || 60}px;
                    height: ${img.height || 60}px;
                    background: #f8faff;
                    border-radius: 8px;
                    border: 2px dashed #e5e7eb;
                    color: #6b7280;
                `;
                
                img.parentNode.replaceChild(fallback, img);
            };
            
            if (img.complete && img.naturalHeight > 0) {
                handleLoad();
            } else {
                img.addEventListener('load', handleLoad);
                img.addEventListener('error', handleError);
            }
        });
    }
    
    // Add critical CSS if stylesheet fails to load
    function ensureCriticalCSS() {
        // Check if styles are loaded by testing a known class
        const testEl = document.createElement('div');
        testEl.className = 'hero';
        testEl.style.position = 'absolute';
        testEl.style.visibility = 'hidden';
        document.body.appendChild(testEl);
        
        const computed = window.getComputedStyle(testEl);
        const hasStyles = computed.background !== 'rgba(0, 0, 0, 0)' && computed.background !== 'transparent';
        
        document.body.removeChild(testEl);
        
        if (!hasStyles) {
            console.warn('ChainSync: Main stylesheet not loaded, applying critical CSS');
            
            // Add critical CSS inline
            const criticalCSS = document.createElement('style');
            criticalCSS.textContent = `
                body { font-family: Inter, sans-serif !important; margin: 0 !important; padding: 0 !important; }
                .container { max-width: 1200px !important; margin: 0 auto !important; padding: 0 20px !important; }
                .hero { background: linear-gradient(135deg, #0066ff 0%, #00d4aa 100%) !important; color: white !important; min-height: 100vh !important; display: flex !important; align-items: center !important; justify-content: center !important; text-align: center !important; }
                .btn-primary { background: linear-gradient(135deg, #0066ff 0%, #00d4aa 100%) !important; color: white !important; padding: 12px 30px !important; border-radius: 30px !important; text-decoration: none !important; display: inline-block !important; }
            `;
            document.head.appendChild(criticalCSS);
        }
    }
    
    // Run critical CSS check after a short delay
    setTimeout(ensureCriticalCSS, 100);
    
    // Add error handling
    window.addEventListener('error', function(e) {
        console.warn('ChainSync JS Error:', e.message);
    });
    
    // Performance monitoring
    if (window.performance) {
        window.addEventListener('load', function() {
            const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
            console.log(`ChainSync: Page loaded in ${loadTime}ms`);
        });
    }
    
})();
