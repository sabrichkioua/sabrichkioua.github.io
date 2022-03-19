var data;

// preload table data
function preload() {
  data = loadTable('data/iris.csv', 'csv', 'header');
}

function setup() {
  createCanvas(640, 480);
  console.log(data.getRowCount());
  console.log(data.columns); //this will show in console the heading for each column
  background(51);
  stroke(255);

  // getColumn moves to an array of all the values in the column with the given name.
  let petlength = data.getColumn("PetalLengthCm");
  let petwidth = data.getColumn("PetalWidthCm");
  //establish minimum and max values of data set, then map onto canvas
  let minPetalL = min(petlength);
  let maxPetalL = max(petlength);
  console.log(minPetalL);
  console.log(maxPetalL);
  let minPetalW = min(petwidth);
  let maxPetalW = max(petwidth);
  console.log(minPetalW);
  console.log(maxPetalW);
  
  for (var i = 0; i < data.getRowCount(); i++) {
    let val1 = data.getNum(i, "PetalLengthCm"); // iris petal lengths
    let val2 = data.getNum(i, "PetalWidthCm"); //iris petal widths
    let xpos = map(val1, 0, maxPetalL, 0, width);
    let ypos = map(val2, maxPetalW, 0, height, 0);
    ellipse(xpos, ypos, 2, 2);
    stroke(255, 1, 1);
    fill('rgb(0,255,0)');

  }

}
