// ===============================
// El Puesto — main JS
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    // ----- Mobile menu -----
    const btn = document.querySelector(".nav-toggle");
    const nav = document.getElementById("menu");
  
    if (btn && nav) {
      btn.addEventListener("click", () => {
        const isOpen = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!isOpen));
        nav.classList.toggle("open");
      });
  
      // Close menu when clicking a link (mobile UX)
      nav.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => {
          nav.classList.remove("open");
          btn.setAttribute("aria-expanded", "false");
        });
      });
  
      // Close menu when clicking outside (optional but classy)
      document.addEventListener("click", (e) => {
        const clickInsideNav = nav.contains(e.target);
        const clickOnBtn = btn.contains(e.target);
        if (!clickInsideNav && !clickOnBtn) {
          nav.classList.remove("open");
          btn.setAttribute("aria-expanded", "false");
        }
      });
    }
  
    // ----- Header background on scroll -----
    const header = document.getElementById("header");
    const toggleHeader = () => {
      if (!header) return;
      if (window.scrollY > 12) header.classList.remove("transparent");
      else header.classList.add("transparent");
    };
  
    toggleHeader();
    window.addEventListener("scroll", toggleHeader, { passive: true });
  });
  