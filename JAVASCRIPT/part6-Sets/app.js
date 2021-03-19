const cities = new Set();

let playAgain = true;
while (playAgain) {
  let choise = prompt("Enter a City ? [for Quit Press 'Q']");
  if (choise != null) {
    if (choise.toLowerCase() === "q") {
      disablePlayAgain();
    } else {
      if (cities.has(choise)) {
        console.log("This city is already in the Set! Please Try again");
      } else {
        cities.add(choise);
        console.log(`${choise} Succesfully Added to Cities Set`);
      }
      console.log("Active Cities : ", ...cities);
    }
  } else {
    disablePlayAgain();
  }
}

function disablePlayAgain() {
  playAgain = false;
  console.log("Goodbye");
  if (cities.size === 0) {
    console.log("You have no cities!");
  } else {
    console.log("Cities Set End of the game : ", ...cities);
  }
}
