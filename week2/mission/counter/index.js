const number = document.querySelector("#number");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");

console.log(number);
console.log(increaseBtn);
console.log(decreaseBtn);

increaseBtn.addEventListener("click", () => {
  number.innerText = parseInt(number.innerText) + 1;
  console.log(increaseBtn.id + "가 클릭됨");
});

decreaseBtn.addEventListener("click", () => {
  number.innerText = parseInt(number.innerText) - 1;
  console.log(decreaseBtn.id + "가 클릭됨");
});
