/*
 * @name Tickle
 * @description The word "tickle" jitters when the cursor hovers over.
 * Sometimes, it can be tickled off the screen.
 */
let message = 'GéoGraphiste',
  font,
  bounds, // holds x, y, w, h of the text's bounding box
  fontsize = 50,
  x,
  y; // x and y coordinates of the text

function preload() {
  //font = loadFont('data/SourceSansPro-Regular.otf');
  font = loadFont('data/NimbusSanL-Bol.otf');
}

function setup() {
  createCanvas(900, 250);

  // set up the font
  textFont(font);
  textSize(fontsize);

  // get the width and height of the text so we can center it initially
  bounds = font.textBounds(message, 0, 0, fontsize);
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;
}

function draw() {
  background(255, 220);

  // write the text in black and get its bounding box
  fill(100);
  text(message, x, y);
  bounds = font.textBounds(message, x, y, fontsize);

  // check if the mouse is inside the bounding box and tickle if so
  if (
    mouseX >= bounds.x &&
    mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y &&
    mouseY <= bounds.y + bounds.h
  ) {
    x += random(-5, 5);
    y += random(-5, 5);
  }
}
