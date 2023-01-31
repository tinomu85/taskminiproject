const form = document.querySelector(".js-send");
const inputEl = document.querySelector("input");
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = inputEl.value.trim();

  if (value >= 55 && value <= 99) {
    alert("Ваше число попадає в діапозон від 55 до 99");
  } else {
    alert("Ваше число не попадає в діапозон від 55 до 99");
  }

  clearInputValue();
});

function clearInputValue() {
  inputEl.value = "";
}
