console.log(2 == "2");
console.log(2 === "2");
console.log(null == undefined);
console.log(null === undefined);

// let name = "Mali1";
// name = name === "Mali" ? "İsim Mali" : "İsim Mali değilse elendin";
// console.log(name);

let note = 70;
let description = "Your Proficiency Level is : ";

switch (note) {
  case 90:
    description += 5;
    break;

  case 70:
    description += 4;
    break;

  case 60:
    description += 3;
    break;

  case 50:
    description += 2;
    break;
  case 40:
    description += 1;
    break;
}
console.log(description);
