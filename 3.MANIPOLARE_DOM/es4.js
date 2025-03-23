function objectPerson() {
    const inputs = document.querySelectorAll("input");
    const person = {};
    inputs.forEach((input) => {
      person[input.getAttribute("id")] = input.value;
    });
    console.log(person);

    const form = document.querySelector("form");
    form.setAttribute("data-person", JSON.stringify(person));
  }
  objectPerson();