// script.js — Bravin Orina Portfolio
(function () {
  'use strict';

  // ---------- Mobile navigation toggle ----------
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Close mobile menu when a link is clicked
  navLinks &&
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

  // ---------- Scroll spy: highlight active nav link ----------
  const sections = document.querySelectorAll('main section[id]');
  const navAnchors = document.querySelectorAll('.nav-link');

  function setActiveNav(id) {
    navAnchors.forEach((a) => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + id);
    });
  }

  if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveNav(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => spy.observe(s));
  }

  // ---------- Smooth scroll without adding #hash to the URL ----------
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (link.classList.contains('nav-link')) setActiveNav(id);
    });
  });

  // If someone lands with a #hash, clear it so the URL stays clean
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }

  // ---------- Sticky header shadow ----------
  const header = document.getElementById('site-header');
  const onScroll = () => {
    if (!header) return;
    header.style.boxShadow =
      window.scrollY > 8 ? '0 8px 24px -12px rgba(2,6,23,0.18)' : 'none';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Portfolio filters ----------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  function applyFilter(filter) {
    projectCards.forEach((card) => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !show);
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(btn.dataset.filter);
    });
  });

  // ---------- Scroll reveal animations ----------
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in-view'));
  }

  // Re-observe newly revealed cards when filters change (they start hidden)
  function revealVisibleCards() {
    projectCards.forEach((card) => {
      if (!card.classList.contains('hidden')) card.classList.add('in-view');
    });
  }
  filterBtns.forEach((btn) => btn.addEventListener('click', revealVisibleCards));

  // ---------- Contact form (mailto fallback) ----------
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = encodeURIComponent(document.getElementById('name').value.trim());
      const email = encodeURIComponent(document.getElementById('email').value.trim());
      const subject = encodeURIComponent(
        document.getElementById('subject').value.trim() || 'Project Inquiry from Portfolio'
      );
      const message = encodeURIComponent(
        'Hello Bravin,\n\n' + document.getElementById('message').value.trim() +
        '\n\nFrom: ' + (document.getElementById('name').value.trim()) +
        ' (' + document.getElementById('email').value.trim() + ')'
      );
      window.location.href =
        'mailto:orinabravin6@gmail.com?subject=' + subject + '&body=' + message;
      form.reset();
    });
  }
})();
