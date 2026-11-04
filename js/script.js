/**
 * PANKAJ UPADHYAY — PREMIUM 3D DEVELOPER PORTFOLIO
 * High-performance Vanilla JavaScript Motion & Interaction Engine
 * Features: Dark/Light Mode, 3D Pointer Parallax, Particle Constellation,
 * Dynamic Role Rotator, Skill Filters, Resume Modal, Mailto Composer.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --------------------------------------------------------------------------
     1. Theme Engine (Dark / Light Mode Toggle)
     -------------------------------------------------------------------------- */
  const themeToggleBtn = document.getElementById('themeToggle');
  const htmlElement = document.documentElement;

  // Retrieve saved theme or default to dark
  const savedTheme = localStorage.getItem('pku_theme');
  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
  } else {
    // Check system preference
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    if (prefersLight) {
      htmlElement.setAttribute('data-theme', 'light');
    } else {
      htmlElement.setAttribute('data-theme', 'dark');
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      htmlElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('pku_theme', nextTheme);
    });
  }

  /* --------------------------------------------------------------------------
     2. Sticky Header & Active Nav via IntersectionObserver
     -------------------------------------------------------------------------- */
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Active section indicator
  const navObserverOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, navObserverOptions);

  sections.forEach(section => navObserver.observe(section));

  /* --------------------------------------------------------------------------
     3. Mobile Navigation Drawer
     -------------------------------------------------------------------------- */
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    const toggleMenu = () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('open');
      document.body.style.overflow = !isExpanded ? 'hidden' : '';
    };

    mobileToggle.addEventListener('click', toggleMenu);

    // Close mobile menu when a nav link is clicked
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          toggleMenu();
        }
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        toggleMenu();
      }
    });
  }

  /* --------------------------------------------------------------------------
     4. Dynamic Role Typing & Rotator
     -------------------------------------------------------------------------- */
  const dynamicTextEl = document.getElementById('roleRotator');
  if (dynamicTextEl) {
    const roles = [
      'Python & Django Developer',
      'Full-Stack Web Enthusiast',
      'Backend Systems Builder',
      'HemoCampus Project Architect'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 90;

    const typeRole = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        dynamicTextEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 45;
      } else {
        dynamicTextEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 90;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        // Pause at full word
        isDeleting = true;
        typingSpeed = 2200;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500;
      }

      if (!prefersReducedMotion) {
        setTimeout(typeRole, typingSpeed);
      } else {
        dynamicTextEl.textContent = roles[0];
      }
    };

    typeRole();
  }

  /* --------------------------------------------------------------------------
     5. Hero 3D Card Pointer Tilt Parallax
     -------------------------------------------------------------------------- */
  const heroCard3D = document.getElementById('heroCard3D');
  const heroStage = document.getElementById('heroStage');

  if (heroCard3D && heroStage && !prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
    let bounds;

    const updateBounds = () => {
      bounds = heroStage.getBoundingClientRect();
    };

    updateBounds();
    window.addEventListener('resize', updateBounds, { passive: true });

    heroStage.addEventListener('mousemove', (e) => {
      if (!bounds) updateBounds();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;

      const xPct = (mouseX / bounds.width) - 0.5;
      const yPct = (mouseY / bounds.height) - 0.5;

      // Restrained 3D tilt angles
      const rotateX = -(yPct * 20).toFixed(2);
      const rotateY = (xPct * 24).toFixed(2);

      heroCard3D.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });

    heroStage.addEventListener('mouseleave', () => {
      heroCard3D.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
  }

  /* --------------------------------------------------------------------------
     6. Desktop 3D Tilt for Project Cards
     -------------------------------------------------------------------------- */
  const projectCards = document.querySelectorAll('.project-card');
  if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
    projectCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xPct = (x / rect.width) - 0.5;
        const yPct = (y / rect.height) - 0.5;

        const tiltX = -(yPct * 8).toFixed(2);
        const tiltY = (xPct * 8).toFixed(2);

        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });
  }

  /* --------------------------------------------------------------------------
     7. Technical Skills Filtering Tabs
     -------------------------------------------------------------------------- */
  const skillTabs = document.querySelectorAll('.skill-tab-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Toggle active tab class
      skillTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     8. Ambient Canvas Particle Constellation
     -------------------------------------------------------------------------- */
  const canvas = document.getElementById('particleCanvas');
  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let animationFrameId;
    let isVisible = true;

    // Responsive Canvas Resizing
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // Particle setup based on viewport width
    const particleCount = Math.min(Math.floor(window.innerWidth / 24), 55);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 1.5 + 0.8;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        const isLight = htmlElement.getAttribute('data-theme') === 'light';
        ctx.fillStyle = isLight ? 'rgba(2, 132, 199, 0.45)' : 'rgba(0, 242, 254, 0.65)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation Loop
    const animate = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);

      const isLight = htmlElement.getAttribute('data-theme') === 'light';
      const lineColor = isLight ? 'rgba(2, 132, 199, ' : 'rgba(0, 242, 254, ';

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.18;
            ctx.strokeStyle = lineColor + alpha + ')';
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Auto-pause when page is hidden to save energy
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        isVisible = false;
        cancelAnimationFrame(animationFrameId);
      } else {
        isVisible = true;
        animate();
      }
    });

    animate();
  }

  /* --------------------------------------------------------------------------
     9. Resume Modal (View Resume In-Page)
     -------------------------------------------------------------------------- */
  const resumeModal = document.getElementById('resumeModal');
  const openResumeBtn = document.getElementById('openResumeBtn');
  const heroViewResumeBtn = document.getElementById('heroViewResumeBtn');
  const closeResumeBtn = document.getElementById('closeResumeBtn');

  const openModal = () => {
    if (resumeModal) {
      resumeModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    if (resumeModal) {
      resumeModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (openResumeBtn) openResumeBtn.addEventListener('click', openModal);
  if (heroViewResumeBtn) heroViewResumeBtn.addEventListener('click', openModal);
  if (closeResumeBtn) closeResumeBtn.addEventListener('click', closeModal);

  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && resumeModal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  /* --------------------------------------------------------------------------
     10. One-Click Copy Email Button
     -------------------------------------------------------------------------- */
  const copyEmailBtns = document.querySelectorAll('.copy-email-trigger');
  const emailToCopy = 'pankajupadhyay.dev@gmail.com';

  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(emailToCopy);
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.classList.add('copied');

        setTimeout(() => {
          btn.textContent = originalText;
          btn.classList.remove('copied');
        }, 2200);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = emailToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2200);
      }
    });
  });

  /* --------------------------------------------------------------------------
     11. Interactive Mailto Inquiry Composer (Honest & Direct Client-Side UX)
     -------------------------------------------------------------------------- */
  const inquiryForm = document.getElementById('inquiryComposerForm');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const senderName = document.getElementById('composerName')?.value.trim() || 'Visitor';
      const inquiryType = document.getElementById('composerType')?.value || 'Internship Opportunity';
      const notes = document.getElementById('composerNotes')?.value.trim() || '';

      const subject = encodeURIComponent(`[${inquiryType}] Inquiring regarding Pankaj Upadhyay Portfolio`);
      const body = encodeURIComponent(
        `Hi Pankaj,\n\nMy name is ${senderName}.\n\nI am contacting you regarding: ${inquiryType}.\n\nMessage:\n${notes}\n\nBest regards,\n${senderName}`
      );

      const mailtoUrl = `mailto:pankajupadhyay.dev@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;
    });
  }

  /* --------------------------------------------------------------------------
     12. Current Year in Footer
     -------------------------------------------------------------------------- */
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
