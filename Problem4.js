var X = document.getElementById("input").value;
var sum = 0;
function show() {
  for (var i = 0; i < parseInt(X) + 1; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum = sum + i;
    }
  }
  alert(sum);
}
