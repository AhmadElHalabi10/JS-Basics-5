var X = 0;
for (let i = 1; i <= 12; i++) {
  X += String(i) + ":";
  for (let j = i; j <= 12 * i; j += i) {
    X += " " + String(j);
  }
  X += "     ";
}
alert(X);
