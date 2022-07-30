const infolist = document.getElementsByClassName("info");

let homeworld_link = document.createElement("a");
homeworld_link.innerHTML = "Homeworld";

let films = document.querySelector(".films");
let species = document.querySelector(".species");
let vehicles = document.querySelector(".vehicles");
let starships = document.querySelector(".starships");
const created = document.querySelector(".created");
const edited = document.querySelector(".edited");
const people_url = document.querySelector(".url");
const button = document.getElementById("btn");

let url = `https://swapi.dev/api/people/1/`;
fetch(url)
  .then((response) => response.json())
  .then((json) => {
    infolist[0].innerHTML = `Name - ${json["name"]}`;
    infolist[1].innerHTML = `Height - ${json["height"]}`;
    infolist[2].innerHTML = `Mass - ${json["mass"]}`;
    infolist[3].innerHTML = `Hair Color - ${json["hair_color"]}`;
    infolist[4].innerHTML = `Skin Color - ${json["skin_color"]}`;
    infolist[5].innerHTML = `Eye Color - ${json["eye_color"]}`;
    infolist[6].innerHTML = `Birth Year - ${json["birth_year"]}`;
    infolist[7].innerHTML = `Gender - ${json["gender"]}`;
    homeworld_link.setAttribute("href", json["homeworld"]);
    infolist[8].appendChild(homeworld_link);

    for (let i = 0; i < json["films"].length; i++) {
      let link = document.createElement("a");
      link.className = "film-item";
      link.innerHTML = `Film-${i + 1}`;
      link.setAttribute("href", json["films"][i]);
      films.appendChild(link);
    }

    for (let i = 0; i < json["species"].length; i++) {
      let link = document.createElement("a");
      link.className = "species-item";
      link.innerHTML = `Species-${i + 1}`;
      link.setAttribute("href", json["species"][i]);
      species.appendChild(link);
    }
    for (let i = 0; i < json["vehicles"].length; i++) {
      let link = document.createElement("a");
      link.className = "vehicle-item";
      link.innerHTML = `Vehicle-${i + 1}`;
      link.setAttribute("href", json["vehicles"][i]);
      starships.appendChild(link);
    }

    for (let i = 0; i < json["starships"].length; i++) {
      let link = document.createElement("a");
      link.className = "starship-item";
      link.innerHTML = `Starship-${i + 1}`;
      link.setAttribute("href", json["starships"][i]);
      species.appendChild(link);
    }

    created.innerHTML = `Created On :: ${json["created"]}`;
    edited.innerHTML = `Edited ON :: ${json["edited"]}`;

    people_url.setAttribute("href", json["url"]);
  });

function remove() {
  films.innerHTML = "";
  species.innerHTML = "";
  vehicles.innerHTML = "";
  starships.innerHTML = "";
}
button.addEventListener("click", getRandomPeople);

function getRandomPeople() {
  remove();

  let random_number = Math.ceil(Math.random() * 82 + 1);

  let url = `https://swapi.dev/api/people/${random_number}/`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      infolist[0].innerHTML = `Name - ${json["name"]}`;
      infolist[1].innerHTML = `Height - ${json["height"]}`;
      infolist[2].innerHTML = `Mass - ${json["mass"]}`;
      infolist[3].innerHTML = `Hair Color - ${json["hair_color"]}`;
      infolist[4].innerHTML = `Skin Color - ${json["skin_color"]}`;
      infolist[5].innerHTML = `Eye Color - ${json["eye_color"]}`;
      infolist[6].innerHTML = `Birth Year - ${json["birth_year"]}`;
      infolist[7].innerHTML = `Gender - ${json["gender"]}`;
      homeworld_link.setAttribute("href", json["homeworld"]);
      infolist[8].appendChild(homeworld_link);

      for (let i = 0; i < json["films"].length; i++) {
        let link = document.createElement("a");
        link.className = "film-item";
        link.innerHTML = `Film-${i + 1}`;
        link.setAttribute("href", json["films"][i]);
        films.appendChild(link);
      }

      for (let i = 0; i < json["species"].length; i++) {
        let link = document.createElement("a");
        link.className = "species-item";
        link.innerHTML = `Species-${i + 1}`;
        link.setAttribute("href", json["species"][i]);
        species.appendChild(link);
      }
      for (let i = 0; i < json["vehicles"].length; i++) {
        let link = document.createElement("a");
        link.className = "vehicle-item";
        link.innerHTML = `Vehicle-${i + 1}`;
        link.setAttribute("href", json["vehicles"][i]);
        species.appendChild(link);
      }

      for (let i = 0; i < json["starships"].length; i++) {
        let link = document.createElement("a");
        link.className = "starship-item";
        link.innerHTML = `Starship-${i + 1}`;
        link.setAttribute("href", json["starships"][i]);
        species.appendChild(link);
      }

      created.innerHTML = `Created On :: ${json["created"]}`;
      edited.innerHTML = `Edited ON :: ${json["edited"]}`;

      people_url.setAttribute("href", json["url"]);
    });
}
