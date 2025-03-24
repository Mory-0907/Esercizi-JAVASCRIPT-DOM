
async function fetchData() {
  try {
    const response = await fetch("https://ringsdb.com/api/public/card/01001");
    const responseJson = await response.json();

    const namePerson = responseJson.name;
    console.log(namePerson, responseJson);

    const h1 = document.querySelector("h1");
    h1.innerText = responseJson.name;

    const image = document.querySelector("img");
    image.setAttribute("src", "https://ringsdb.com" + responseJson.imagesrc);
  } catch (error) {
    console.log(error);
  }
}
fetchData();
