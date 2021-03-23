const form = document.querySelector("#film-form");
const titleInput = document.querySelector("#title");
const directorInput = document.querySelector("#director");
const urlInput = document.querySelector("#url");
const succesfullyAdded = document.querySelector("#succesfully-added");
const tryAgain = document.querySelector("#try-again");
const filmsTable = document.querySelector(".table.table-dark");

//Create a UI Object
const ui = new UI();
//Create a Storage object
const storage = new Storage();
//Load all events
eventlisteners();

function eventlisteners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", ui.loadAllFilmsToUI);
  document.addEventListener("click", removeFilm);
}

function addFilm(e) {
  e.preventDefault();

  const title = titleInput.value;
  const director = directorInput.value;
  const url = urlInput.value;

  if (title === "" || director === "" || url === "") {
    ui.alertMessage(false);
    console.log(succesfullyAdded, tryAgain);
  } else {
    const newFilm = new Film(title, director, url);
    ui.addFilmToUI(newFilm); //UI Added
    storage.addFilmToStorage(newFilm);
    ui.alertMessage(true);
  }
  ui.clearInputs(titleInput, directorInput, urlInput);

  e.preventDefault();
}

function removeFilm(e) {
  console.log(e.target);
  if (e.target.id == "delete-film") {
    // console.log(e.target.parentElement.previousElementSibling.previousElementSibling);
    ui.removeFilmFromUI(e.target.parentElement.parentElement);
    storage.removeFilmFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    );
  } else if (e.target.id == "clear-films") {
    if (confirm("Are you sure you want to remove all films ?")) {
      storage.clearFilmsFromStorage();
      ui.clearFilmsFromUI();
    }
  }
}
