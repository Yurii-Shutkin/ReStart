const successModal = document.getElementById("successModal");
const closeBtn = document.querySelector(".close");

function openModal() {
  successModal.style.display = "flex";
  document.body.classList.add("modal-open");
}

function closeModal() {
  successModal.style.display = "none";
  document.body.classList.remove("modal-open");
}

closeBtn.onclick = closeModal;

window.onclick = function (event) {
  if (event.target == successModal) {
    closeModal();
    document.body.classList.remove("modal-open");
  }
};

window.openModal = openModal;
window.closeModal = closeModal;
