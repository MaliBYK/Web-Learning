class Storage {
  static loadAllFilmsFromStorage() {
    let films;
    if (localStorage.getItem("films") == null) {
      films = [];
    } else {
      films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
  }

  static addFilmToStorage(newFilm) {
    const films = Storage.loadAllFilmsFromStorage();
    films.push(newFilm);
    localStorage.setItem("films", JSON.stringify(films));
  }

  static removeFilmFromStorage(filmName) {
    const films = Storage.loadAllFilmsFromStorage();
    films.forEach(function (film, index) {
      if (film.title == filmName) {
        films.splice(index, 1);
        localStorage.setItem("films", JSON.stringify(films));
      }
    });
  }

  static clearFilmsFromStorage() {
    localStorage.removeItem("films");
  }
}
