let data;
let values
let labels;
let t = 0;

function preload() {
  data = loadTable('./data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 600);
  // give the name of the columns
  // give the number of lines
  // give the values ​​of the Mass (Tt) column
  values = data.getColumn("Mass (Tt)");
  labels = data.getColumn("Component");
}

function draw() {
  background(255);
  for (let i = 0; i < values.length; i++) {
    rect(i * 40, height - 1, 40, -values[i] * t);
    fill(0, 200, 220);
    // text (labels [i], i * 40 + 20, height-1-values ​​[i] * t-10);
    // To tilt the texts at 45 °
    push();
    translate(i * 40 + 20, height - 1 - values[i] * t - 10);
    rotate(radians(-45));
    fill(0, 200, 220);
    text(labels[i], 0, 0);
    pop();

  }
  if (t < 40) {
    t = t + 1;
  }
}