
/*******************************
LA CLASSE DU MONSTRE
*******************************/
class Monstre {
  // LE constructor() PREND DEUX PARAMETRES: x et y
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }


  dessiner() {
      // LE CORPS
    fill(0);
    ellipse(this.x,this.y,30,30);
    // LES YEUX
    fill(255);
    ellipse(this.x-8,this.y-5,10,10);
    ellipse(this.x+8,this.y-5,10,10);
  }

  giguer() {
    this.x = this.x + random(-2,2);
    this.y = this.y + random(-2,2);
  }

}

// DECLARER UNE VARIABLE GLOBALE chouchou :
let chouchou;

/*******************************
CONSTRUIRE LA SCENE
*******************************/
function setup() {
  createCanvas(windowWidth, windowHeight);



  // ASSIGNER UNE NOUVELLE INSTANCE DE LA CLASSE Monstre
  // A LA VARIABLE chouchou.
  // LE constructor() PREND DEUX PARAMETRES: x et y
  chouchou = new Monstre( random(width) , random(height) );



}


function draw() {
  background(255);

  chouchou.giguer();

  console.log( chouchou.x , chouchou.y );

  // EXECUTER LA METHODE (FONCTION DE CLASSE) dessiner()
  // DE LA CLASSE Monstre :
  chouchou.dessiner();
}

/*****************************
CODE A EXECUTER LORSQUE LA FENETRE EST REDIMENSIONNEE
*****************************/
function windowResized() {
  console.log("LA FENETRE A CHANGE DE TAILLE");
  resizeCanvas(windowWidth, windowHeight);
  draw();
}
