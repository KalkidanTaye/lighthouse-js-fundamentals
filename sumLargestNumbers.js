const sumLargestNumbers = function (data) {
  let firstHighest = 0;
  let secondHighest = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] > firstHighest) {
      firstHighest = data[i];
    }
  }
  for (let j = 0; j < data.length; j++) {
    if (data[j] > secondHighest && data[j] < firstHighest) {
      secondHighest = data[j];
    }
  }

  return firstHighest + secondHighest;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
