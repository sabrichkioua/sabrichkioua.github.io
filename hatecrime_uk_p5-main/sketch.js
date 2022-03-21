let circles = [] // for circle packing circles 
let img; // for bg image 
let year; // keep track of year on timeline 
let startYear = 2010; // start year in dataset
const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
let zoff = 0; // for perlin noise over time 
// min and max radius for the circular perlin noise
let minRad = 220;
let maxRad = Math.min(
  Math.min(window.innerWidth, window.innerHeight), 420)

// for the years that show on the left 
let yearsContainer;
let yearsInContainer = []; 

// load the background image 
function preload() {
  img = loadImage('bg13.png')
}

// to make it responsive
function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  // if on smaller screen and portrait, don't use bg image 
  if (window.innerHeight > window.innerWidth*1.3 && window.innerWidth < 1000) {
    background(10)
  } else {
    image(img, -window.innerWidth/2, -window.innerHeight/2, window.innerWidth, window.innerHeight)
  }
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  // create a container for the years
  yearsContainer = createDiv();
  yearsContainer.addClass('years-container');
  // add all the years to the container for years
  for (const year of years) {
    const currentYear = createP(year)
    yearsInContainer.push(currentYear)
    currentYear.addClass('year')
    currentYear.parent(yearsContainer)
  }

  // create container for the title, the main summary explanation 
  const heroContainer = createDiv()
  heroContainer.addClass('hero-container')
  const projectTitle = createElement('h1', `I don't like you...`)
  projectTitle.addClass('project-title')
  projectTitle.parent(heroContainer)
  const projectSubtitle = createElement('h2', 'Racist and Religious Hate Crime in London')
  projectSubtitle.addClass('project-subtitle')
  projectSubtitle.parent(heroContainer)
  const projectExplain = createElement('small', '* Best viewed on desktop. Meaning of data and project concept -> ')
  projectExplain.addClass('project-explain')
  projectExplain.parent(heroContainer)
  const projectExplainLink = createA('#footnote', 'go to bottom')
  projectExplainLink.addClass('project-explain-link')
  projectExplainLink.parent(heroContainer)

  frameRate(25);
  angleMode(DEGREES)
  
  // if on smaller screen and portrait, don't use bg image 
  background(10)
  if (window.innerHeight < window.innerWidth*1.3 && window.innerWidth > 1000) {
    image(img, 0, 0, width, height)
  }
  
  // create all the Circles in advance
  for (const dataPoint of maxPacking) {
    circles.push(new Circle(
      dataPoint.x, 
      dataPoint.y, 
      dataPoint.r, 
      random(-1, 1)))
  }
  // set start year
  year = 2010; 
}


function draw() {
  translate(width/2, height/2)
  
  // fill a perlin noise shape in the middle where the circle packing will be drawn
  push()
  beginShape()
  angleMode(RADIANS)
  for (let a=0; a<TWO_PI; a+=0.01) {
    let xoff = cos(a) + 1;
    let yoff = sin(a) + 1;
    let r = map(noise(xoff, yoff), 0, 1, minRad, minRad+200)
    let x = r * cos(a);
    let y = r * sin(a);
    curveVertex(x, y);
  }
  noStroke()
  fill(20)
  endShape(CLOSE)
  pop()

  // draw the perlin noise circles; moving gently over time via the zoffset; 
  // coloured light blue-green hues
  push()
  beginShape()
  angleMode(RADIANS)
  for (let a=0; a<TWO_PI; a+=0.01) {
    let xoff = cos(a) + 1;
    let yoff = sin(a) + 1;
    let r = map(noise(xoff, yoff, zoff), 0, 1, minRad, maxRad)
    let x = r * cos(a);
    let y = r * sin(a);
    curveVertex(x, y);
  }
  stroke(random(255), 255, 255, 20)
  strokeWeight(2)
  noFill()
  endShape(CLOSE)
  zoff+=0.01
  pop()
  
  // draw the circles of the circle packing 
  // want to draw the circles slower than the frame rate, so divide by some 
  // suitable number - here we choose 50
  const frReduceFactor = 50; 
  let currentCount = floor(frameCount/frReduceFactor)
  // number of reports in the hundreds for current year
  let currentNumReports = dataPacked.filter(d => d.year == year)[0].numReportsHundreds
  // select as many circles in the pre-defined circle packing array
  // as there are reports in the hundreds for current year
  let currentPacking = maxPacking.slice(0, currentNumReports)
  for (let circ of circles.slice(0, currentPacking.length)) {
    circ.update()
    circ.show()
  }
  // find the paragraph with the current year and add class 
  // so that only the current year gets styled to pop out
  for (const yearP of yearsInContainer) {
    if (yearP.html() == year) {
      yearP.addClass('focused')
    } else {
      yearP.removeClass('focused')
    }
  }

  year = startYear + currentCount
  // stop the year count once we reach end year of dataset
  if (year > 2020) {
    year = 2020
  }
  
  // once we've been through all the years (10), stop the animation loop
  if (frameCount > frReduceFactor*10 + 40) {
    //noLoop()
  }
  
}