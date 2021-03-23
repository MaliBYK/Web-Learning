const form = document.querySelector("#film-form");
const titleInput = document.querySelector("#title");
const directorInput = document.querySelector("#director");
const urlInput = document.querySelector("#url");
const succesfullyAdded = document.querySelector("#succesfully-added");
const tryAgain = document.querySelector("#try-again");
const filmsTable = document.querySelector(".table.table-dark");

//Load all events
eventlisteners();

function eventlisteners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", UI.loadAllFilmsToUI);
  document.addEventListener("click", removeFilm);
}

function addFilm(e) {
  e.preventDefault();
  const title = titleInput.value;
  const director = directorInput.value;
  const url = urlInput.value;

  if (title === "" || director === "" || url === "") {
    UI.alertMessage(false);
  } else {
    const newFilm = new Film(title, director, url);
    UI.addFilmToUI(newFilm); //UI Added
    Storage.addFilmToStorage(newFilm);
    UI.alertMessage(true);
  }
  UI.clearInputs(titleInput, directorInput, urlInput);

  e.preventDefault();
}

function removeFilm(e) {
  if (e.target.id == "delete-film") {
    // console.log(e.target.parentElement.previousElementSibling.previousElementSibling);
    UI.removeFilmFromUI(e.target.parentElement.parentElement);
    Storage.removeFilmFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    );
  } else if (e.target.id == "clear-films") {
    if (confirm("Are you sure you want to remove all films ?")) {
      Storage.clearFilmsFromStorage();
      UI.clearFilmsFromUI();
    }
  }
}
