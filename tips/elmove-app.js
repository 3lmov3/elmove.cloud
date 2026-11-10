/**
 * Elmove — ukrywanie CookieHub. Admin jest na stronie Forum (przycisk Admin / Usuń).
 */
(function () {
  "use strict";
  var preloadApi = window.elmove || {};
  window.elmove = Object.assign({ isElectron: true, version: "1.0.0" }, preloadApi);
  window.cookiehub = window.cookiehub || { load: function () {} };

  var style = document.createElement("style");
  style.id = "elmove-hide-cookies";
  style.textContent =
    "#cookiehub,.ch2,.ch2-container,.ch2-dialog,.ch2-banner,[id*='cookiehub'],[class*='cookiehub'],[class*='ch2-'],.cc-window,#Cookiebot,#onetrust-banner-sdk{display:none!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important;}";
  (document.head || document.documentElement).appendChild(style);

  if (document.documentElement && window.MutationObserver) {
    new MutationObserver(function () {
      document.querySelectorAll("#cookiehub,.ch2,.ch2-container,[id*='cookiehub']").forEach(function (el) {
        el.remove();
      });
    }).observe(document.documentElement, { childList: true, subtree: true });
  }
})();
