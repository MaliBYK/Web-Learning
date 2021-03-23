function Storage() {}

Storage.prototype.loadAllFilmsFromStorage = function () {
  let films;
  if (localStorage.getItem("films") == null) {
    films = [];
  } else {
    films = JSON.parse(localStorage.getItem("films"));
  }
  return films;
};

const strg = new Storage();

Storage.prototype.addFilmToStorage = function (newFilm) {
  films = strg.loadAllFilmsFromStorage();
  films.push(newFilm);
  localStorage.setItem("films", JSON.stringify(films));
};

Storage.prototype.removeFilmFromStorage = function (filmName) {
  console.log("Film Name : " + filmName);
  films = strg.loadAllFilmsFromStorage();
  films.forEach(function (film, index) {
    if (film.title == filmName) {
      films.splice(index, 1);
      localStorage.setItem("films", JSON.stringify(films));
    }
  });
};

Storage.prototype.clearFilmsFromStorage = function () {
  localStorage.removeItem("films");
};
