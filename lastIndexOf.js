const lastIndexOf = function (array, value) {
  let y = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      y = i;
    }
  }
  return y;
};

console.log(lastIndexOf([0, 1, 4, 1, 2], 1));
console.log(lastIndexOf([0, 1, 4, 1, 2], 2));
console.log(lastIndexOf([0, 1, 4, 1, 2], 3));
console.log(lastIndexOf([5, 5, 5], 5));
console.log(lastIndexOf([], 3));
