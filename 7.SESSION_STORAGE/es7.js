const nameInput = document.querySelector(".firstname");
const emailInput = document.querySelector(".email");
const lastnameInput = document.querySelector(".lastname");
const span = document.querySelector("span");

const button = document.querySelector("button");
button.addEventListener("click", () => {
  span.innerText = nameInput.value;
  sessionStorage.setItem("firstname", nameInput.value);
  sessionStorage.setItem("email", emailInput.value);
  sessionStorage.setItem("lastname", lastnameInput.value);
});

span.innerText = sessionStorage.getItem("firstname");