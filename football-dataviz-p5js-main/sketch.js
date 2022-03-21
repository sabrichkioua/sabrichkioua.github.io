let cnv;
var current = 0;
var total = 6;
var frameCount = 1;
let slider;
let val;

// Define variables.
var connections = [
	{ x0: (8*120 + 40)/2 + 200, y0: (8*90 + 40)/2 - 100, x1: (8*120 + 40)/2 + 200, y1: (8*90 + 40)/2 + 100, p: 1},
    { x0: (8*120 + 40)/2 + 340, y0: (8*90 + 40)/2 + 300, x1: (8*120 + 40)/2 + 200, y1: (8*90 + 40)/2 + 100, p:0.6},
    { x0: (8*120 + 40)/2 + 340, y0: (8*90 + 40)/2 - 300, x1: (8*120 + 40)/2 + 200, y1: (8*90 + 40)/2 - 300, p:0.6},
    { x0: (8*120 + 40)/2 + 340, y0: (8*90 + 40)/2 - 100, x1: (8*120 + 40)/2 + 340, y1: (8*90 + 40)/2 - 300, p:0.6},
    { x0: (8*120 + 40)/2 + 200, y0: (8*90 + 40)/2 - 100, x1: (8*120 + 40)/2 + 200, y1: (8*90 + 40)/2 - 300, p:0.5},
    { x0: (8*120 + 40)/2 + 200, y0: (8*90 + 40)/2 - 100, x1: (8*120 + 40)/2 + 340, y1: (8*90 + 40)/2 - 300, p:0.5},
    { x0: (8*120 + 40)/2 + 340, y0: (8*90 + 40)/2 + 300, x1: (8*120 + 40)/2 + 200, y1: (8*90 + 40)/2 + 300, p:0.5},
    { x0: (8*120 + 40)/2 + 60, y0: (8*90 + 40)/2 - 150, x1: (8*120 + 40)/2 + 60, y1: (8*90 + 40)/2 + 150, p:0.4},
    { x0: (8*120 + 40)/2 + 340, y0: (8*90 + 40)/2 + 300, x1: (8*120 + 40)/2 + 60, y1: (8*90 + 40)/2 + 150, p:0.4},
    { x0: (8*120 + 40)/2 + 200, y0: (8*90 + 40)/2 + 300, x1: (8*120 + 40)/2 + 60, y1: (8*90 + 40)/2 + 150, p:0.4},
    { x0: (8*120 + 40)/2 + 340, y0: (8*90 + 40)/2 - 300, x1: (8*120 + 40)/2 + 60, y1: (8*90 + 40)/2 + 150, p:0.4},

    { x0: (8*120 + 40)/2 + 340, y0: (8*90 + 40)/2 + 300, x1: (8*120 + 40)/2 + 340, y1: (8*90 + 40)/2 + 100, p:0.4},
    { x0: (8*120 + 40)/2 + 200, y0: (8*90 + 40)/2 + 100, x1: (8*120 + 40)/2 + 340, y1: (8*90 + 40)/2 + 100, p:0.4},
    { x0: (8*120 + 40)/2 + 200, y0: (8*90 + 40)/2 - 100, x1: (8*120 + 40)/2 + 340, y1: (8*90 + 40)/2 + 100, p:0.4},
    { x0: (8*120 + 40)/2 + 200, y0: (8*90 + 40)/2 - 100, x1: (8*120 + 40)/2 + 340, y1: (8*90 + 40)/2 + 300, p:0.4},


	{ x0: (8*120 + 40)/2 - 220, y0: (8*90 + 40)/2 - 250, x1: (8*120 + 40)/2 - 420, y1: (8*90 + 40)/2 - 300, p: 1},
	{ x0: (8*120 + 40)/2 - 60, y0: (8*90 + 40)/2 - 150, x1: (8*120 + 40)/2 - 420, y1: (8*90 + 40)/2 + 300, p: 0.6},
	{ x0: (8*120 + 40)/2 - 220, y0: (8*90 + 40)/2 + 250, x1: (8*120 + 40)/2 - 420, y1: (8*90 + 40)/2 + 300, p: 0.6},
	{ x0: (8*120 + 40)/2 - 420, y0: (8*90 + 40)/2 + 100, x1: (8*120 + 40)/2 - 420, y1: (8*90 + 40)/2 + 300, p: 0.5},

	{ x0: (8*120 + 40)/2 - 220, y0: (8*90 + 40)/2 - 250, x1: (8*120 + 40)/2 - 220, y1: (8*90 + 40)/2, p: 0.4},
	{ x0: (8*120 + 40)/2 - 220, y0: (8*90 + 40)/2 + 250, x1: (8*120 + 40)/2 - 220, y1: (8*90 + 40)/2, p: 0.4},
	{ x0: (8*120 + 40)/2 - 320, y0: (8*90 + 40)/2, x1: (8*120 + 40)/2 - 220, y1: (8*90 + 40)/2, p: 0.4},

    { x0: (8*120 + 40)/2 - 220, y0: (8*90 + 40)/2 + 250, x1: (8*120 + 40)/2 - 420, y1: (8*90 + 40)/2 + 100, p: 0.4},
    { x0: (8*120 + 40)/2 - 420, y0: (8*90 + 40)/2 + 100, x1: (8*120 + 40)/2 - 420, y1: (8*90 + 40)/2 - 100, p: 0.4},
    { x0: (8*120 + 40)/2 - 420, y0: (8*90 + 40)/2 - 100, x1: (8*120 + 40)/2 - 420, y1: (8*90 + 40)/2 - 300, p: 0.4}




];
var radius = 20;
var nodes = [
	{ x: (8*120 + 40)/2 + 60, y: (8*90 + 40)/2 - 150, color:'#ff0000', active: false, name: 'Suarez', team: 'Barcelona', number: '9' },
	{ x: (8*120 + 40)/2 + 60, y: (8*90 + 40)/2 + 150, color:'#ff0000', active: false, name: 'Messi', team: 'Barcelona', number: '10' },

	{ x: (8*120 + 40)/2 + 200, y: (8*90 + 40)/2 - 300, color:'#ff0000', active: false, name: 'Paulhino', team: 'Barcelona', number: '12' },
	{ x: (8*120 + 40)/2 + 200, y: (8*90 + 40)/2 - 100, color:'#ff0000', active: false, name: 'Rakitic', team: 'Barcelona', number: '4' },
	{ x: (8*120 + 40)/2 + 200, y: (8*90 + 40)/2 + 100, color:'#ff0000', active: false, name: 'Busquets', team: 'Barcelona', number: '5' },
	{ x: (8*120 + 40)/2 + 200, y: (8*90 + 40)/2 + 300, color:'#ff0000', active: false, name: 'Iniesta', team: 'Barcelona', number: '8' },

	{ x: (8*120 + 40)/2 + 340, y: (8*90 + 40)/2 - 300, color:'#ff0000', active: false, name: 'Roberto', team: 'Barcelona', number: '20' },
	{ x: (8*120 + 40)/2 + 340, y: (8*90 + 40)/2 - 100, color:'#ff0000', active: false, name: 'Pique', team: 'Barcelona', number: '3' },
	{ x: (8*120 + 40)/2 + 340, y: (8*90 + 40)/2 + 100, color:'#ff0000', active: false, name: 'Vermaelen', team: 'Barcelona', number: '25' },
	{ x: (8*120 + 40)/2 + 340, y: (8*90 + 40)/2 + 300, color:'#ff0000', active: false, name: 'Alba', team: 'Barcelona', number: '18' },

	{ x: (8*120 + 40)/2 + 460, y: (8*90 + 40)/2, color:'#ff0000', active: false, name: 'der Stegen', team: 'Barcelona', number: '1' },

	{ x: 600, y: 8*90 + 20, color:'#ff0000', active: false, name: 'Vidal', team: 'Barcelona', number: '22' },
	{ x: 700, y: 8*90 + 20, color:'#ff0000', active: false, name: 'Gomes', team: 'Barcelona', number: '21' },
	{ x: 800, y: 8*90 + 20, color:'#ff0000', active: false, name: 'Semedo', team: 'Barcelona', number: '2' },


	{ x: (8*120 + 40)/2 - 60, y: (8*90 + 40)/2 - 150, color:'#0000ff', active: false, name: 'Benzema', team: 'Real Madrid', number: '9' },
	{ x: (8*120 + 40)/2 - 60, y: (8*90 + 40)/2 + 150, color:'#0000ff', active: false, name: 'Ronaldo', team: 'Real Madrid', number: '7' },

	{ x: (8*120 + 40)/2 - 220, y: (8*90 + 40)/2 - 250, color:'#0000ff', active: false, name: 'Kroos', team: 'Real Madrid', number: '8' },
	{ x: (8*120 + 40)/2 - 220, y: (8*90 + 40)/2, color:'#0000ff', active: false, name: 'Kovacic', team: 'Real Madrid', number: '23' },
	{ x: (8*120 + 40)/2 - 220, y: (8*90 + 40)/2 + 250, color:'#0000ff', active: false, name: 'Modric', team: 'Real Madrid', number: '10' },


	{ x: (8*120 + 40)/2 - 320, y: (8*90 + 40)/2, color:'#0000ff', active: false, name: 'Casemiro', team: 'Real Madrid', number: '14' },

	{ x: (8*120 + 40)/2 - 420, y: (8*90 + 40)/2 - 300, color:'#0000ff', active: false, name: 'Marcelo', team: 'Real Madrid', number: '12' },
	{ x: (8*120 + 40)/2 - 420, y: (8*90 + 40)/2 - 100, color:'#0000ff', active: false, name: 'Ramos', team: 'Real Madrid', number: '4' },
	{ x: (8*120 + 40)/2 - 420, y: (8*90 + 40)/2 + 100, color:'#0000ff', active: false, name: 'Varane', team: 'Real Madrid', number: '5' },
	{ x: (8*120 + 40)/2 - 420, y: (8*90 + 40)/2 + 300, color:'#0000ff', active: false, name: 'Carvajal', team: 'Real Madrid', number: '2' },

	{ x: (8*120 + 40)/2 - 460, y: (8*90 + 40)/2, color:'#0000ff', active: false, name: 'Navas', team: 'Real Madrid', number: '1' },

	{ x: 150, y: 8*90 + 20, color:'#0000ff', active: false, name: 'Asensio', number: '20', team: 'Real Madrid' },
	{ x: 250, y: 8*90 + 20, color:'#0000ff', active: false, name: 'Base', number: '11', team: 'Real Madrid' },
	{ x: 350, y: 8*90 + 20, color:'#0000ff', active: false, name: 'Fernández', number: '6', team: 'Real Madrid' }
]
// ------------------------------------------------------


function setup() {
    cnv = createCanvas(8*120 + 40 + 10 + 200, 8*90 + 40);
    background(0);// Create a anchor object using createA() function
	fill(222);
    rect(8*120 + 40,0,8*120 + 40 + 10 + 200, 8*90 + 40);
    linkAuthor = createA("https://simonlevente.github.io/",
                       "Made with &#9829 by Levente Simon", "_blank");
    linkAuthor.position(8*120 + 40 + 10, 8*90 + 20);

	linkDoi = createA("https://ieeexplore.ieee.org/document/8745032",
                      "(data and results)", "_blank");
    linkDoi.position(8*120 + 40 + 10, 8*90);
	fill(0);

    slider = createSlider(0, 1, 1, 0.1);
    slider.position(8*120 + 40 + 70, 70);
    slider.style('width', '80px');

}


function draw()
{
    val = slider.value();

    // label

	fill(200);
    rect(8*120 + 60,20, 160, 160);
    rect(8*120 + 60,220, 160, 160);
    rect(8*120 + 60,420, 160, 160);

	textSize(22);
	text('less   /   more', 8*120 + 50 + 25,20 + 30)
	textSize(18);
	text('frequent passes', 8*120 + 50 + 25,80 + 30)

	textSize(22);
	text('Legend', 8*120 + 50 + 25,420 + 30)
	textSize(16);
	text('1. use the slider', 8*120 + 50 + 25,460 + 30)
	text('   checking passes', 8*120 + 50 + 25,480 + 30)
	text('2. click on the', 8*120 + 50 + 25,500 + 30)
	text('   players for details', 8*120 + 50 + 25,520 + 30)

	if (nodes.length > 0) {
		for (var i = 0; i < nodes.length; i++) {
			var node = nodes[i];
			if(node.active)
			{
				if(node.team === "Barcelona")
				{
					fill(255,0,0)
				}
				else
				{
					fill(0,0,255)
				}
				textSize(22);
				text('Player details:', 8*120 + 50 + 25,220 + 30)
				text(node.name, 8*120 + 50 + 25,220 + 60)
				text('number: ' + node.number, 8*120 + 50 + 25,220 + 90)
				text(node.team, 8*120 + 50 + 25,220 + 120)
				// console.log(node.number);
			}
		}
	}


    // setTimeout(create,1000);
    fill(144,238,144);
    stroke(255);
    strokeWeight(4);
    rect(20,20,8*120, 8*90);
    ellipse((8*120 + 40)/2, (8*90 + 40)/2, 9.15*2*8, 9.15*2*8);

    arc(40 + 11*8, (8*90 + 40)/2, 9.15*2*8, 9.15*2*8, PI + 4.85/8*PI, PI + 11.15/8*PI );
    arc(8*120 - 11*8, (8*90 + 40)/2, 9.15*2*8, 9.15*2*8, 4.85/8*PI, 11.15/8*PI );

    line((8*120 + 40)/2, 20, (8*120 + 40)/2, (8*90 + 40)-20);

    fill(255);
    ellipse((8*120 + 40)/2, (8*90 + 40)/2, 8, 8);
    ellipse(20 + 8*11, (8*90 + 40)/2, 8, 8);
    ellipse(8*120 + 20 - 8*11, (8*90 + 40)/2, 8, 8);


    fill(144,238,144);
    arc(20, 20, 30, 30, 0, HALF_PI);
    arc(8*120 + 20, 20, 30, 30, HALF_PI, PI);
    arc(8*120 + 20, 8*90 + 20, 30, 30, PI, 3*HALF_PI);
    arc(20, 8*90 + 20, 30, 30, 3*HALF_PI, 2*PI);
    noFill();
    rect(20,20,8*120, 8*90);
    line(20, (8*90 + 40)/2 + (3.5 + 5.5)*8, 20 + 5.5*8, (8*90 + 40)/2 + (3.5 + 5.5)*8);
    line(20, (8*90 + 40)/2 - (3.5 + 5.5)*8, 20 + 5.5*8, (8*90 + 40)/2 - (3.5 + 5.5)*8);
    line(20 + 5.5*8, (8*90 + 40)/2 - (3.5 + 5.5)*8, 20 + 5.5*8, (8*90 + 40)/2 + (3.5 + 5.5)*8);
    line(8*120 + 20, (8*90 + 40)/2 + (3.5 + 5.5)*8, 8*120 + 20 - 5.5*8, (8*90 + 40)/2 + (3.5 + 5.5)*8);
    line(8*120 + 20, (8*90 + 40)/2 - (3.5 + 5.5)*8, 8*120 + 20 - 5.5*8, (8*90 + 40)/2 - (3.5 + 5.5)*8);
    line(8*120 + 20 - 5.5*8, (8*90 + 40)/2 - (3.5 + 5.5)*8, 8*120 + 20 - 5.5*8, (8*90 + 40)/2 + (3.5 + 5.5)*8);

    line(20, (8*90 + 40)/2 + (11 + 3.5 + 5.5)*8, 20 + 16.5*8, (8*90 + 40)/2 + (11 + 3.5 + 5.5)*8);
    line(20, (8*90 + 40)/2 - (11 + 3.5 + 5.5)*8, 20 + 16.5*8, (8*90 + 40)/2 - (11 + 3.5 + 5.5)*8);
    line(20 + 16.5*8, (8*90 + 40)/2 - (11 + 3.5 + 5.5)*8, 20 + 16.5*8, (8*90 + 40)/2 + (11 + 3.5 + 5.5)*8);
    line(8*120 + 20, (8*90 + 40)/2 + (11 + 3.5 + 5.5)*8, 8*120 + 20 - 16.5*8, (8*90 + 40)/2 + (11 + 3.5 + 5.5)*8);
    line(8*120 + 20, (8*90 + 40)/2 - (11 + 3.5 + 5.5)*8, 8*120 + 20 - 16.5*8, (8*90 + 40)/2 - (11 + 3.5 + 5.5)*8);
    line(8*120 + 20 - 16.5*8, (8*90 + 40)/2 - (11 + 3.5 + 5.5)*8, 8*120 + 20 - 16.5*8, (8*90 + 40)/2 + (11 + 3.5 + 5.5)*8);
    // stroke(255);
    // frameRate(1);

    stroke(120);
    strokeWeight(2);



    line((8*120+20),  (8*90 + 40)/2 - 8*3.7, (8*120+20),  (8*90 + 40)/2 + 8*3.7);
    line((20),  (8*90 + 40)/2 - 8*3.7, (20),  (8*90 + 40)/2 + 8*3.7);


	// ----------------------------------------------------------------------------------
    // edges
	if (connections.length > 0) {
		for (var i = 0; i < connections.length; i++)
		{
			var connection = connections[i];
			if( val <= connection.p)
			{
				line(connection.x0,connection.y0,connection.x1,connection.y1);
			}
		}
	}



    //----------------------------------------------------------------
    // nodes

	if (nodes.length > 0) {
		for (var i = 0; i < nodes.length; i++) {
			var node = nodes[i];
		    fill(node.color); // Use 'blueValue' in new fill

			stroke(0, 0, 0);
			if(node.active)
			{
				ellipse(node.x, node.y, radius*1.8, radius*1.8);
			}
			else
			{
				ellipse(node.x, node.y, radius, radius);

			}
		}
	}

}

// clicked anywhere
function mouseClicked() {
	if (nodes.length > 0) {
		for (var i = 0; i < nodes.length; i++) {
			var node = nodes[i];
			if(check_a_point(mouseX, mouseY, node.x, node.y, radius))
			{
				node.active = true;
			}
			else {
				node.active = false;
			}
		}
	}
}

function check_a_point(a, b, x, y, r) {
    var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
    r *= r;
    if (dist_points < r) {
        return true;
    }
    return false;
}
