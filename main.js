(function () {
  'use strict';

  // Año en el footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Navegación móvil
  var nav = document.querySelector('.nav');
  var navToggle = document.querySelector('.nav-toggle');
  if (nav && navToggle) {
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open);
      navToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    });

    document.addEventListener('click', function (e) {
      if (nav.classList.contains('is-open') && !nav.contains(e.target) && !navToggle.contains(e.target)) {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menú');
      }
    });
  }

  // Cerrar menú al hacer clic en un enlace interno
  var navLinks = document.querySelectorAll('.nav a[href^="#"]');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (nav && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        if (navToggle) {
          navToggle.setAttribute('aria-expanded', 'false');
          navToggle.setAttribute('aria-label', 'Abrir menú');
        }
      }
    });
  });

  // Tema claro/oscuro (opcional: descomentar y añadir botón en HTML)
  var themeToggle = document.querySelector('.theme-toggle');
  var stored = typeof localStorage !== 'undefined' && localStorage.getItem('theme');
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (themeToggle) {
    var icon = themeToggle.querySelector('.theme-icon');
    function isDarkNow() {
      var t = document.documentElement.getAttribute('data-theme');
      if (t) return t === 'dark';
      return prefersDark;
    }
    function updateIcon() {
      if (icon) icon.textContent = isDarkNow() ? '☀' : '🌙';
    }
    themeToggle.addEventListener('click', function () {
      var isDark = isDarkNow();
      document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
      updateIcon();
      try { localStorage.setItem('theme', isDark ? 'light' : 'dark'); } catch (_) {}
      themeToggle.setAttribute('aria-label', isDark ? 'Usar tema oscuro' : 'Usar tema claro');
    });
    if (stored) {
      document.documentElement.setAttribute('data-theme', stored);
    }
    updateIcon();
    themeToggle.setAttribute('aria-label', isDarkNow() ? 'Usar tema claro' : 'Usar tema oscuro');
  }
})();
