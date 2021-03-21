class Math {
  add(x, y) {
    return x + y;
  }

  static multiply(x, y) {
    return x * y;
  }
}

const math = new Math();

console.log(math.add(15, 25));
//! ERROR console.log(math.multiply(15, 3));

console.log(Math.multiply(10, 15));
