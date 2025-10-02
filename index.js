document.querySelectorAll(".dropdown-left .item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const target = item.getAttribute("data-target");

    // Hide all sub-lists
    document.querySelectorAll(".dropdown-right .sub-list").forEach((sub) => {
      sub.style.display = "none";
    });

    // Show the matched sub-list
    document.getElementById(target).style.display = "flex";
  });
});

// Show "Banking" by default when Products is opened
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("banking").style.display = "flex";
});

// ===== Mobile hamburger toggle =====
const hamburger = document.querySelector(".hamburger");
const naf2 = document.querySelector(".naf2"); // ✅ changed to match your HTML

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  naf2.classList.toggle("active");
});

// ===== Accordion dropdown toggle (mobile) =====
document.querySelectorAll(".dropdown-wrapper > a").forEach((link) => {
  link.addEventListener("click", (e) => {
    // Prevent navigation
    e.preventDefault();

    // Close others
    document.querySelectorAll(".dropdown-wrapper").forEach((wrapper) => {
      if (wrapper !== link.parentElement) {
        wrapper.classList.remove("open");
      }
    });

    // Toggle this one
    link.parentElement.classList.toggle("open");
  });
});

// sticky part

// Highlight active link on scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".tools_business");
  const navLinks = document.querySelectorAll(".tools_option a");

  // Map section id -> nav link
  const linkById = {};
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      linkById[href.slice(1)] = link;
    }
  });

  // IntersectionObserver detects which section is in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          // remove old active
          navLinks.forEach((l) => l.classList.remove("active"));
          // add new active
          if (linkById[id]) {
            linkById[id].classList.add("active");
          }
        }
      });
    },
    {
      root: null,
      threshold: 0.5, // 50% of section visible = active
      rootMargin: "0px 0px -30% 0px", // tweak if you want earlier switching
    }
  );

  sections.forEach((sec) => observer.observe(sec));

  // Smooth scroll when clicking nav
  const SCROLL_OFFSET = 90; // adjust to sticky nav height
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      if (!href.startsWith("#")) return;
      const target = document.querySelector(href);
      if (!target) return;

      const targetTop =
        target.getBoundingClientRect().top + window.pageYOffset - SCROLL_OFFSET;

      window.scrollTo({ top: targetTop, behavior: "smooth" });
    });
  });
});
