const howManyHundreds = function (number) {
  let hundreds = (number - (number % 100)) / 100;
  return hundreds;
};

console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));
