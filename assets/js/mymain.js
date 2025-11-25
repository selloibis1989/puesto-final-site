// ===============================
// El Puesto — main JS (Transparent Header Edition)
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ========================================
    // MOBILE MENU (old)
    // ========================================
    const btn = document.querySelector(".nav-toggle");
    const nav = document.getElementById("menu");

    if (btn && nav) {

        btn.addEventListener("click", () => {
            const isOpen = btn.getAttribute("aria-expanded") === "true";
            btn.setAttribute("aria-expanded", String(!isOpen));
            nav.classList.toggle("open");
        });

        nav.querySelectorAll("a").forEach(a => {
            a.addEventListener("click", () => {
                nav.classList.remove("open");
                btn.setAttribute("aria-expanded", "false");
            });
        });

        document.addEventListener("click", (e) => {
            const clickInsideNav = nav.contains(e.target);
            const clickOnBtn = btn.contains(e.target);
            if (!clickInsideNav && !clickOnBtn) {
                nav.classList.remove("open");
                btn.setAttribute("aria-expanded", "false");
            }
        });
    }


    // ========================================
    // HEADER SIEMPRE TRANSPARENTE
    // (No observer, no state change)
    // ========================================

    const header = document.getElementById("header");
    if (header) {
        header.classList.add("transparent");
        header.classList.remove("solid");
    }


    // ========================================
    // YEAR IN FOOTER (optional)
    // ========================================
    const y = document.getElementById("y");
    if (y) y.textContent = new Date().getFullYear();
});


// ===============================
// OVERLAY MENU (nuevo sistema)
// ===============================

const navToggle = document.getElementById("navToggle");
const navOverlay = document.getElementById("navOverlay");
const navClose = document.getElementById("navClose");
const navLinks = navOverlay.querySelectorAll("a");

function openNav(){
  document.body.classList.add("nav-open");
  navToggle.setAttribute("aria-expanded", "true");
  navOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeNav(){
  document.body.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
  navOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

navToggle.addEventListener("click", () => {
  if(document.body.classList.contains("nav-open")) closeNav();
  else openNav();
});

navClose.addEventListener("click", closeNav);

navOverlay.addEventListener("click", (e) => {
  if(e.target === navOverlay) closeNav();
});

navLinks.forEach(a => a.addEventListener("click", closeNav));

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape") closeNav();
});
