class UI {
  static addFilmToUI(newFilm) {
    const filmList = document.querySelector("#films");

    filmList.innerHTML += `
    <tr>
    <td><img src="${newFilm.url}"  class="img-fluid img-thumbnail"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>
    `;
  }

  static clearInputs(titleInput, directorInput, urlInput) {
    titleInput.value = "";
    directorInput.value = "";
    urlInput.value = "";
  }

  static alertMessage(success) {
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
  }

  static loadAllFilmsToUI() {
    const films = Storage.loadAllFilmsFromStorage();
    films.forEach(function (film) {
      UI.addFilmToUI(film);
    });
  }

  static removeFilmFromUI(element) {
    element.remove();
  }

  static clearFilmsFromUI() {
    const films = document.querySelector("#films");

    Array.from(films.children).forEach(function (film) {
      film.remove();
    });
  }
}
