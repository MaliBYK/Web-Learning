const obj1 = {
  number1: 12,
  number2: 23,
};

const obj2 = {
  number1: 123,
  number2: 3443,
};

function addition(number3, number4) {
  return this.number1 + this.number2 + number3 + number4;
}

console.log(addition.call(obj1, 100, 200));
console.log(addition.apply(obj2, [100, 200]));

const copyFunc = addition.bind(obj1);

console.log(copyFunc(100, 200));
