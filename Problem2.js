var X = document.getElementById("input").value;
function show() {
  if (X == "Alice" || X == "Bob") {
    alert("Hello " + X);
  } else {
    alert("Hello Stranger");
  }
}
