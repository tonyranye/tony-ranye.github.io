// js/themeToggle.js
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  const apply = (mode) => {
    document.body.classList.toggle("dark-mode", mode === "dark");
  };

  // 1) Load saved theme, otherwise use system preference
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") {
    apply(saved);
  } else {
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    apply(prefersDark ? "dark" : "light");
  }

  // 2) Toggle on click
  btn.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");
    const next = isDark ? "light" : "dark";
    apply(next);
    localStorage.setItem("theme", next);
  });
});
