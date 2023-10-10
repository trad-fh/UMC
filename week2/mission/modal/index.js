const openBtn = document.querySelector("#open");
const closeBtn = document.querySelector("#close");
const modal = document.querySelector(".modal__background");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
