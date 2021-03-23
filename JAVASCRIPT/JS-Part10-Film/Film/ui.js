function UI() {}

UI.prototype.addFilmToUI = function (newFilm) {
  const filmList = document.querySelector("#films");

  filmList.innerHTML += `
  <tr>
  <td><img src="${newFilm.url}"  class="img-fluid img-thumbnail"></td>
  <td>${newFilm.title}</td>
  <td>${newFilm.director}</td>
  <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr>
  `;
};

UI.prototype.clearInputs = function (titleInput, directorInput, urlInput) {
  titleInput.value = "";
  directorInput.value = "";
  urlInput.value = "";
};

UI.prototype.alertMessage = function (success) {
  if (success) {
    succesfullyAdded.style.display = "block";
    tryAgain.style.display = "none";
  } else {
    succesfullyAdded.style.display = "none";
    tryAgain.style.display = "block";
  }
  setTimeout(function () {
    succesfullyAdded.style.display = "none";
    tryAgain.style.display = "none";
  }, 5000);
};

UI.prototype.loadAllFilmsToUI = function () {
  const storage = new Storage();
  const films = storage.loadAllFilmsFromStorage();
  films.forEach(function (film) {
    const ui = new UI();
    ui.addFilmToUI(film);
  });
};

UI.prototype.removeFilmFromUI = function (element) {
  element.remove();
};

UI.prototype.clearFilmsFromUI = function () {
  const films = document.querySelector("#films");

  Array.from(films.children).forEach(function (film) {
    film.remove();
  });
};
