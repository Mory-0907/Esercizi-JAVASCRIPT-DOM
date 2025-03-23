const ul = document.querySelector("ul");
console.log("Elemento padre di ul", ul.parentElement);

const secondChildren = ul.children[1];
console.log("Secondo elemento figlio di ul", secondChildren);

const brotherSucc = secondChildren.nextElementSibling;
console.log("Elemento fratello successivo del secondo li", brotherSucc);

const brotherPre = secondChildren.previousElementSibling;
console.log(brotherPre);
