// Chargé de façon bloquante dans le <head> : applique le thème avant
// le premier affichage (pas de flash blanc en mode sombre).
(function () {
  var theme = null;
  try {
    theme = localStorage.getItem("theme");
  } catch (e) {}

  if (theme !== "light" && theme !== "dark") {
    theme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  }

  document.documentElement.setAttribute("data-theme", theme);
})();
