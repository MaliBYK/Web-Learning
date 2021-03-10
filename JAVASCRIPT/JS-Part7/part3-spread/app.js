// const langs = ["Python", "Java", "C++"];
// console.log(...langs);

// const numbers = [1, 2, 3, 4, 5, 6];

// const [n1, n2, ...numbers2] = numbers;
// console.log(n1);
// console.log(n2);
// console.log(numbers2);

const numbers = [1, 2, 3];

const addition = (n1, n2, n3) => n1 + n2 + n3;

console.log(addition(...numbers));
