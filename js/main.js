/* Förderverein U21 – kleines, abhängigkeitsfreies Skript.
   Keine Cookies, kein Storage, keine externen Requests. */
(function () {
  'use strict';

  // Mobile Navigation
  var toggle = document.querySelector('.nav-toggle');
  var list = document.getElementById('nav-list');
  if (toggle && list) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Menü öffnen' : 'Menü schließen');
      list.classList.toggle('is-open', !open);
    });
    list.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        toggle.setAttribute('aria-expanded', 'false');
        list.classList.remove('is-open');
      }
    });
  }

  // Scroll-Reveal (fällt bei alten Browsern auf sichtbar zurück)
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // IBAN kopieren
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = document.querySelector(btn.getAttribute('data-copy'));
      if (!target || !navigator.clipboard) return;
      var text = target.textContent.replace(/\s+/g, '');
      navigator.clipboard.writeText(text).then(function () {
        var old = btn.textContent;
        btn.textContent = 'Kopiert';
        setTimeout(function () { btn.textContent = old; }, 1800);
      });
    });
  });

  // Jahr im Footer
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
