// Hover info cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    const info = card.dataset.info;
    card.innerText = info;
  });
  card.addEventListener('mouseleave', () => {
    card.innerText = card.innerText.split(' ')[0];
  });
});

// Timeline clicks
document.querySelectorAll('.year').forEach(item => {
  item.addEventListener('click', () => {
    alert(`${item.dataset.year}: ${item.textContent}`);
  });
});

// Toggle image
const mapButton = document.getElementById('toggleMap');
if (mapButton) {
  const map = document.getElementById('diseaseMap');
  mapButton.addEventListener('click', () => {
    map.style.display = (map.style.display === 'none') ? 'block' : 'none';
  });
}
