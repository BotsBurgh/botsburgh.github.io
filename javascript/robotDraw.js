var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//tri + arc
ctx.lineWidth = 5;
ctx.strokeStyle = "#FFD700";

ctx.moveTo(500, 500);
ctx.lineTo(800, 500);
ctx.stroke();

ctx.moveTo(800, 500);
ctx.lineTo(650, 241);
ctx.stroke();

ctx.moveTo(650, 241);
ctx.lineTo(500, 500);
ctx.stroke();

ctx.beginPath();
ctx.arc(650, 414, 173, 0, 2 * Math.PI);
ctx.stroke();

//red wheel

var r = c.getContext("2d");
r.lineWidth = 5;
r.strokeStyle = "#FF0000";

r.moveTo(650, 241);
r.lineTo(700, 241);
r.stroke();




var main = document.getElementById("myCanvas");
      var render = main.getContext("2d");
      main.style.left = "400px";
      main.style.top = "25px";
      main.style.position = "absolute";

