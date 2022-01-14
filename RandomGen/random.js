function CustomRandom(seed) {
  var self = this;
  if (seed == null) {
    seed = Date.now();
  }
  var A = 1103515245; // multiplier
  var C = 12345; // incrementer
  var M = 2147483647; // modulus == max integer value
  self.nextInt = function () {
    seed = (seed * A + C) % M;
    return seed;
  };
  self.nextDouble = function () {
    var value = self.nextInt();
    return value / M;
  };
}

// Usage example 1:

var random = new CustomRandom(3819201);

console.log(random.nextInt());
console.log(random.nextInt());
console.log(random.nextInt());

var random = new CustomRandom();

console.log(random.nextInt());
console.log(random.nextInt());
console.log(random.nextInt());

console.log(random.nextDouble());
console.log(random.nextDouble());
console.log(random.nextDouble());
