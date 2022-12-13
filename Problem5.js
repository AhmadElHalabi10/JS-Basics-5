function show() {
  var a = document.getElementById("input").value;
  console.log(a);
  if (a.includes("+")) {
    var cal = 0;
    var s = parseInt(a.split("+"));
    for (i = 1; i <= s; i++) {
      cal += i;
    }
  } else if (a.includes("*")) {
    var cal = 1;
    var s = parseInt(a.split("*"));
    console.log(s);
    for (i = 1; i <= s; i++) {
      cal *= i;
    }
  }
  console.log(cal);
  alert(cal);
}
