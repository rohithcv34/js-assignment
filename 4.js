function sumOfEvenNumbers(n) {
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
      sum = sum + i;
    }
    return sum;
  }

console.log(sumOfEvenNumbers(5));