"use strict";

// Native HTML project disclosures also work without JavaScript.
document.querySelector("#year").textContent = new Date().getFullYear();

// Content stays visible when JavaScript or motion is disabled.
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
  document.documentElement.classList.add("motion-ready");
}
