function getTextFile() {
  fetch("textFile.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

function getJsonFile() {
  fetch("jsonFile.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

document.querySelector(".get").addEventListener("click", function (e) {
  getTextFile();
  getJsonFile();
});
