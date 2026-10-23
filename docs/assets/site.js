// KR / EN toggle. The choice is kept in localStorage so it carries across pages;
// ?lang=en|ko in the URL overrides it. The <head> snippet on each page applies
// the stored language before first paint; this file wires up the buttons.
(function () {
  var KEY = 'lang';
  var root = document.documentElement;

  function store(lang) {
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  function apply(lang) {
    root.dataset.lang = lang;
    root.lang = lang;
    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      var on = btn.getAttribute('data-set-lang') === lang;
      btn.classList.toggle('btn-primary', on);
      btn.classList.toggle('btn-ghost', !on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-set-lang');
      store(lang);
      apply(lang);
    });
  });

  apply(root.dataset.lang === 'en' ? 'en' : 'ko');
})();

