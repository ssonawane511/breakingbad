/** @format */

let url = "https://breakingbadapi.com/api/characters";
let section = document.getElementById("cards_container");
let characters = [];
let searchWalaCharacter = [];

let serchedCharcter = document.getElementById("charcter__input");
serchedCharcter.addEventListener("input", searchFunction);

function searchFunction() {
  fetch(
    `https://breakingbadapi.com/api/characters?name=${serchedCharcter.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        // console.log(item);
        searchWalaCharacter.push(item);
      });

      section.innerHTML = "";
      searchWalaCharacter.forEach((item) => {
        displaycard(item);
      });
    });
}

function displaycard(koidata) {
  const html = `<div class="card">
  <div class="card-inner">
    <div class="card-front">
      <img
        src="${koidata.img}"
        alt=""
      />
    </div>
    <div class="card-back">
      <div style="text-align: center">
        <img
          src="${koidata.img}"
          alt=""
        />
      </div>
      <h1>${koidata.name}</h1>
      <ul>
        <li><strong>Actor Name:</strong> ${koidata.portrayed}</li>
        <li><strong>Nickname:</strong> ${koidata.nickname}</li>
        <li><strong>Birthday:</strong> ${koidata.birthday}</li>
        <li><strong>Status:</strong> ${koidata.status}</li>
      </ul>
    </div>
  </div>
</div>`;

  section.insertAdjacentHTML("afterbegin", html);
}

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((info) => {
      characters.push(info);
    });

    console.log(characters);
    if (searchWalaCharacter.length > 0) {
      searchWalaCharacter.forEach((item) => {
        displaycard(item);
      });
    } else {
      characters.forEach((character) => {
        displaycard(character);
      });
    }
  });

console.log(searchWalaCharacter.length);
