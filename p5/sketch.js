var n = 0;
var c = 7;

function setup() {
  createCanvas(400, 400);

  angleMode(DEGREES);
  colorMode(HSB);
  background (0);

}

function draw() {

  var a = n * 137;
  var r = c * sqrt(n);

  var x = r * cos(a) + width / 2;
  var y = r * sin(a) + height / 2;

  noStroke();
  ellipseMode(RADIUS);
  fill(n^4 + 256, 255, 255);
  ellipse(x, y, 5, 5, );

  ellipseMode(CENTER);
  fill(100);
  ellipse(x, y, 2, 2);

  n++;


}
