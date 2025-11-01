// === Fade-In Section on Scroll ===
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) sec.classList.add("visible");
  });
});

// === Interactive Timeline ===
document.querySelectorAll(".timeline .event").forEach(event => {
  event.addEventListener("click", () => {
    alert(event.dataset.detail);
  });
});

// === Toggle Map Image ===
const mapButton = document.getElementById("toggleMap");
if (mapButton) {
  const map = document.getElementById("diseaseMap");
  mapButton.addEventListener("click", () => {
    if (map.style.display === "none") {
      map.style.display = "block";
      mapButton.innerText = "Hide Mosquito Control Map";
    } else {
      map.style.display = "none";
      mapButton.innerText = "Show Mosquito Control Map";
    }
  });
}

// === Smooth Scroll for Internal Anchors ===
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
