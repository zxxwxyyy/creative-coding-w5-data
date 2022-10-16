
class Rain {
    constructor(x, y, c){
      this.x = x
      this.y = y
      this.speedX = random(-1,1)
      this.speedY = random(1,5)
      this.color = c//color(128, 64, 185)
      this.droplength = 15
    }
  
    raining(){
      push();
      fill(this.color);
      ellipse(this.x, this.y, 3, this.droplength);
      this.x += this.speedX;
      this.y += this.speedY;
      if(this.y > 500){
          this.y = random(0, 15)    }
          pop();
    }
  
  }
  
  class Snow {
    constructor(x, y, c){
      this.x = x
      this.y = y
      this.speedX = random(-1,1)
      this.speedY = random(1,5)
      this.color = c//color(128, 64, 185)
      this.droplength = 5
    }
  
    snowing(){
      push();
      fill(this.color);
      ellipse(this.x, this.y, 3, this.droplength);
      this.x += this.speedX;
      this.y += this.speedY;
      if(this.y > 500){
          this.y = random(0, 15)    }
          pop();
    }
  
  }