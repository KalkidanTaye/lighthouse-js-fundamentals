for (let number = 100; number <= 200; number++) {
  if (number % 3 === 0 && number % 4 === 0) {
    console.log(number + " LoopyLighthouse ");
  } else if (number % 3 === 0) {
    console.log(number + " Loopy");
  } else if (number % 4 === 0) {
    console.log(number + " Lighthouse");
  } else {
    console.log(number);
  }
}
