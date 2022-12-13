function isPrime(n) {
  // check if n is less than 2
  if (n < 2) {
    return false;
  }
  // check if n is divisible by any number between 2 and the square root of n
  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let j = 2; j <= i; j++) {
      if (n % i == 0) {
        return false;
      }
    }
  }
  return true;
}

// print all prime numbers between 2 and 30

var X = 0;
for (let i = 2; i <= 30; i++) {
  if (isPrime(i)) {
    X += " " + String(i);
  }
}

alert(X);
