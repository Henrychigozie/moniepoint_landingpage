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
