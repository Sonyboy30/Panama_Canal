// === Fade-in effect on scroll ===
const sections = document.querySelectorAll("section"); 
window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) sec.classList.add("visible");
  });
});

// === Timeline Expansion Animation ===
document.querySelectorAll(".timeline .event").forEach(event => {
  event.addEventListener("click", () => {
    event.classList.toggle("active");
  });
});

// === Gallery Modal System ===
const galleryModal = document.createElement("div");
galleryModal.id = "galleryModal";
galleryModal.innerHTML = `
  <span id="closeModal">&times;</span>
  <img id="galleryImage" src="">
  <div id="galleryCaption"></div>
`;
document.body.appendChild(galleryModal);

const modalImg = document.getElementById("galleryImage");
const modalCaption = document.getElementById("galleryCaption");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".image-card img").forEach(img => {
  img.addEventListener("click", () => {
    galleryModal.style.display = "flex";
    modalImg.src = img.src;
    modalCaption.textContent = img.parentElement.querySelector(".caption").textContent;
  });
});

closeModal.addEventListener("click", () => {
  galleryModal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === galleryModal) galleryModal.style.display = "none";
});

// === Toggle Map (Health Page) ===
const mapButton = document.getElementById("toggleMap");
if (mapButton) {
  const map = document.getElementById("diseaseMap");
  mapButton.addEventListener("click", () => {
    const show = map.style.display === "none";
    map.style.display = show ? "block" : "none";
    mapButton.innerText = show ? "Hide Mosquito Control Map" : "Show Mosquito Control Map";
  });
}
