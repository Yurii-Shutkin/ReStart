const container = document.querySelector(".compare-container");
const after = document.querySelector(".after");
const slider = document.querySelector(".compare-slider");

function moveSlider(x) {
  const rect = container.getBoundingClientRect();
  let offset = x - rect.left;

  if (offset < 0) offset = 0;
  if (offset > rect.width) offset = rect.width;

  after.style.width = offset + "px";
  slider.style.left = offset - 1 + "px";
}

let dragging = false;

slider.addEventListener("mousedown", () => (dragging = true));
window.addEventListener("mouseup", () => (dragging = false));

window.addEventListener("mousemove", (e) => {
  if (dragging) moveSlider(e.clientX);
});

slider.addEventListener("touchstart", () => (dragging = true));
window.addEventListener("touchend", () => (dragging = false));

window.addEventListener("touchmove", (e) => {
  if (dragging) moveSlider(e.touches[0].clientX);
});
