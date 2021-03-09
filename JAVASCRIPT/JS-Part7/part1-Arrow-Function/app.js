// const cube = function (x) {
//   return x * x * x;
// };

//*BETTER :D
const cube = x => x * x * x;

console.log(cube(7));

const getLangs = () => ["Python", "Java", "Javascript"];
const [dil1, dil2, dil3] = getLangs();
console.log(dil1, dil2, dil3);

const Person = {
  name: "Muhammet Ali",
  lastname: "Baykuş",
  department: "Computer Engeneering",
  salary: 30000,
  getInfo: () => console.log("bilgiler gösteriliyor..."),
};

const {
  name: isim,
  lastname: soyisim,
  department: departman,
  getInfo: bilgileriGoster,
  salary: maas,
} = Person;

bilgileriGoster();
console.log(isim, soyisim, maas, departman, bilgileriGoster);
