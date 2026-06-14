(function () {
  const root = document.documentElement;
  const nav = document.getElementById("main-nav");
  const toggle = document.querySelector(".menu-toggle");
  const themeButtons = document.querySelectorAll("[data-theme]");
  const navLinks = Array.from(document.querySelectorAll('.main-nav a[href^="#"]'));

  function applyTheme(mode) {
    if (mode === "auto") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.dataset.theme = isDark ? "dark" : "light";
    } else {
      root.dataset.theme = mode;
    }
    themeButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.theme === mode);
    });
  }

  toggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const mode = button.dataset.theme;
      localStorage.setItem("themeMode", mode);
      applyTheme(mode);
    });
  });

  const savedMode = localStorage.getItem("themeMode") || "auto";
  applyTheme(savedMode);

  function setActiveLink() {
    const scroll = window.scrollY + 120;
    let activeId = "";
    navLinks.forEach((link) => {
      const id = link.getAttribute("href");
      const section = document.querySelector(id);
      if (!section) return;
      if (section.offsetTop <= scroll) {
        activeId = id;
      }
    });
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === activeId);
    });
  }

  window.addEventListener("scroll", setActiveLink, { passive: true });
  setActiveLink();

  const year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
