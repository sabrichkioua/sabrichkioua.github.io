class Circle {
  
  constructor(x, y, r, dx) {
    this.xStart = x;
    this.yStart = y;
    this.x = x;
    this.y = y;
    this.r = r;
    this.dx = dx;
    this.dy = dx;
  }
  update() {
    this.x += this.dx;
    this.y += this.dy;
    // if the circles moves away too much from its original pos 
    // reset it back to original pos
    if (this.x > this.xStart+2 || this.x < this.xStart-2) {
      this.x = this.xStart;
    }
    if (this.y > this.yStart+2 || this.y < this.yStart-2) {
      this.y = this.yStart;
    }
  }
  show() {  

    // draw the rays coming out of the circle
    push()
    stroke(255)  
    
    for (let i = 0; i < 360; i+=5) {
      // Convert polar to cartesian
      // points on the circle 
      let xInnerR = this.r * Math.cos(i)
      let yInnerR = this.r * Math.sin(i) 
      // points on circle of bigger radius 
      const outerR = Math.max(
        this.r, 
        this.r*2.2//*Math.random()
      )
      //const outerR = this.r*2
      let xOuterR = outerR * Math.cos(i)
      let yOuterR = outerR * Math.sin(i)
      
      // line connecting these points
      strokeWeight(0.1)
      //blendMode(SCREEN);
      line(
        this.x + xInnerR, 
        this.y + yInnerR, 
        this.x + xOuterR + 3*Math.random(), 
        this.y + yOuterR + 4*Math.random()
      )
      strokeWeight(0.2)
      line(
        this.x + xInnerR, 
        this.y + yInnerR, 
        this.x + xOuterR + 3 - 6*Math.random(), 
        this.y + yOuterR - 7*Math.random()
      )
        
    }
    pop()
    
    // draw a single circle in the middle
    push()
    fill(0)
    //noFill()
    circle(this.x, this.y, this.r*2)
    pop()

  }
}