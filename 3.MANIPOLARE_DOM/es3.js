function addProduct(event) {
    event.preventDefault();
    console.log(event);

    const input = document.querySelector("input");
    const taskText = input.value;
    

    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    const checkbox = document.createElement("input" );
    checkbox.setAttribute("type", "checkbox");

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(taskText));
    ul.appendChild(li);

    console.log(`Nuovo elemento aggiunto: ${taskText}`);
    
}

addProduct();