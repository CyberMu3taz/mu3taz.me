document.getElementById("year").textContent = new Date().getFullYear();
const modal = document.getElementById("certModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".cert-card[data-img]").forEach(card => {
  card.addEventListener("click", () => {
    modalImg.src = card.getAttribute("data-img");
    modal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  modalImg.src = "";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalImg.src = "";
  }
});
