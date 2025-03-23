const nameInput = document.querySelector(".firstname");
const emailInput = document.querySelector(".email");
const lastnameInput = document.querySelector(".lastname");
const span = document.querySelector("span");

const button = document.querySelector("button");
button.addEventListener("click", () => {
  span.innerText = nameInput.value;
  localStorage.setItem("email", emailInput.value);
  localStorage.setItem("firstname", nameInput.value);
  localStorage.setItem("lastname", lastnameInput.value);
});

span.innerText = localStorage.getItem("firstname");
