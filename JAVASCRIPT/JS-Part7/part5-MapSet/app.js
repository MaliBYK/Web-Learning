// newMap = new Map().set("mali", "byk");
// newMap.set(() => "sa", "as" + 5);
// newMap.set({ a: 20, b: 23 }, () => 4);
// console.log(newMap);

const cities = new Map();

cities.set("Ankara", 5);
cities.set("İstanbul", 15);
cities.set("İzmir", 4);

for ([key, value] of cities) {
  console.log(key, value);
}

console.log(cities.get("İzmir"));

cities.forEach((key, value) => {
  console.log(key, value);
});
