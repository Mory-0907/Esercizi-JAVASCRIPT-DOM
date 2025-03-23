const button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log("Sei sul bottone");
    const body = document.querySelector("body");
    body.classList.toggle("theme")
})
