const modalOpenBtns = document.querySelectorAll(".modal-open");
const modalCloseBtns = document.querySelectorAll(".modal-close");

modalOpenBtns.forEach((btn) => {
  btn.addEventListener("click", toggleModal);
  btn.addEventListener("touchend", toggleModal);
});

modalCloseBtns.forEach((btn) => {
  btn.addEventListener("click", closeModal);
  btn.addEventListener("touchend", closeModal);
});

document.addEventListener("click", closeOnOverlayClick);
document.addEventListener("touchend", closeOnOverlayClick);

function toggleModal(event) {
  event.preventDefault();
  let modal = this.getAttribute("data-modal");
  document.getElementById(modal).style.display = "block";
  body.classList.add("prevent-background-scroll");
}

function closeModal(event) {
  event.preventDefault();
  let modal = this.closest(".modal");
  modal.style.display = "none";
  body.classList.remove("prevent-background-scroll");
}

function closeOnOverlayClick(event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
    body.classList.remove("prevent-background-scroll");
  }
}
