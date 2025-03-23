const nameInput = document.querySelector(".firstname");
const emailInput = document.querySelector(".email");
const lastnameInput = document.querySelector(".lastname");
const span = document.querySelector("span");

const button = document.querySelector("button");
button.addEventListener("click", () => {
  span.innerText = nameInput.value;
  sessionStorage.getItem("fistname", nameInput.value);
  sessionStorage.getItem("email", emailInput.value);
  sessionStorage.getItem("lastname", lastnameInput.value);
});
