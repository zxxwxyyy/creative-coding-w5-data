// ----- create icon for thunder storm
function thunderStorm(){
    push();
    fill(180);
    noStroke();
    ellipse(80, 60, 70, 50);
    ellipse(100, 80, 70, 50);
    ellipse(60, 80, 70, 50);
  
    ellipse(160, 100, 70, 50);
    ellipse(180, 120, 70, 50);
    ellipse(140, 120, 70, 50);
    pop();
  
  // ----- rain drops
    push();
    fill(196,211,223);
    ellipse(180, 160, 10, 30);
    ellipse(130, 170, 10, 20);
    ellipse(130, 170, 10, 20);
    ellipse(80, 190, 10, 35);
    ellipse(80, 130, 10, 25);
    ellipse(50, 130, 10, 25);
    ellipse(150, 180, 10, 30);
    ellipse(50, 180, 10, 30);
    ellipse(190, 200, 10, 30);
    ellipse(110, 200, 10, 30);
    pop();
    // ----- create thunder
    push()
    fill(255,255,0)
    triangle(100, 110, 60, 170, 80, 170)
    triangle(80, 173, 50, 230, 100, 173)
    rect(60, 168, 40, 5)
    pop()
  }
  
  
  // ----- creating icon for haze/mist weather
  function hazeIcon(){
  // ----- draw sun
    push();
    fill(255, 184, 19, 70);
    stroke(255, 184, 19, 70);
    strokeWeight(8);
    translate(125, 125);
    ellipseMode(CENTER);
    ellipse(0, 0, 60);
    line(0, -60, 0, -40);
    line(0, 40, 0, 60);
    line(-45, -45, -30, -30);
    line(45, -45, 30, -30);
    line(-60, 0, -40, 0);
    line(40, 0, 60, 0);
    line(-45, 45, -30, 30);
    line(45, 45, 30, 30);
    pop();
  // ----- draw clouds
    push();
    fill(190);
    noStroke();
    ellipse(160, 150, 70, 50);
    ellipse(180, 170, 70, 50);
    ellipse(140, 170, 70, 50);
    pop();
  // ----- draw lines indicate haze/mist weather
    push();
    stroke(0, 100);
    strokeWeight(5);
    line(80, 100, 150, 100);
    line(60, 80, 120, 80);
    line(30, 120, 80, 120);
    line(30, 120, 80, 120);
    line(100, 140, 180, 140);
    line(150, 125, 200, 125);
    pop();
  
  }
  
  function snowMan(){
    // ----- drawing snowman for snow weather
      push()
      fill(255)
      translate(125, 350)
      ellipse(0, -10, 60, 50)
      ellipse(0, 15, 30, 15)
      ellipse(0, 65, 100, 100)
      fill(0)
      stroke(1)
      ellipse(-10, -15, 3, 3)
      ellipse(10, -15, 3, 3)
      triangle(-10, -5, 10, -5, 0, 5)
      line(-70, 20, -35, 30)
      line(35, 30, 70, 20)
      pop()
    
  }
  
  // ----- drawing sun
  function sunIcon(){
    push();
    fill(255, 184, 19);
    stroke(255, 184, 19);
    strokeWeight(8);
    translate(125, 125);
    ellipseMode(CENTER);
    ellipse(0, 0, 60);
    line(0, -60, 0, -40);
    line(0, 40, 0, 60);
    line(-45, -45, -30, -30);
    line(45, -45, 30, -30);
    line(-60, 0, -40, 0);
    line(40, 0, 60, 0);
    line(-45, 45, -30, 30);
    line(45, 45, 30, 30);
    pop();
  }
  
  // ----- drawing sunglasses for cool but clear weather
  function sunGlasses(){
    push()
    fill(245, 187, 87)
    translate(125, 360)
    ellipse(0, 10, 150)
    rectMode(CENTER)
    fill(0)
    rect(-30, 0, 50, 30)
    rect(30, 0, 50, 30)
    stroke(0)
    line(30, 0, -30, 0)
    line(-70, -20, -50, 0)
    line(70, -20, 50, 0)
    // ellipseMode(DEGREES)
    noFill()
    rotate(7)
    arc(22, 25, 50, 50, 0, HALF_PI);
    pop()
  
  }
  // ----- drawing icecream for hot and clear weather!
  function iceCream(){
    push();
    fill(186, 85, 211);
    ellipse(115, 345, 50);
    pop();
    push();
    fill(124,252,0);
    ellipse(140, 350, 50);
    pop();
    push();
    fill(255, 192, 203);
    ellipse(125, 370, 50);
    pop();
    push();
    fill(255, 180, 30);
    triangle(150, 380, 125, 450, 100, 380);
    pop();
  }
  
  // ----- drawing cloudy weather
  function cloudyIcon(){
    // ----- drawing sun
    push();
    fill(255, 184, 19, 90);
    stroke(255, 184, 19);
    strokeWeight(8);
    translate(125, 125);
    ellipseMode(CENTER);
    ellipse(0, 0, 60);
    line(0, -60, 0, -40);
    line(0, 40, 0, 60);
    line(-45, -45, -30, -30);
    line(45, -45, 30, -30);
    line(-60, 0, -40, 0);
    line(40, 0, 60, 0);
    line(-45, 45, -30, 30);
    line(45, 45, 30, 30);
    pop();
  // ----- drawing clouds
    push();
    fill(190);
    noStroke();
    ellipse(80, 100, 70, 50);
    ellipse(100, 120, 70, 50);
    ellipse(60, 120, 70, 50);
  
    ellipse(160, 150, 70, 50);
    ellipse(180, 170, 70, 50);
    ellipse(140, 170, 70, 50);
    pop();
  }
  
  // ----- drawing rain icon
  function rainingIcon(){
  // ----- drawing clouds
    push();
    fill(180);
    noStroke();
    ellipse(80, 60, 70, 50);
    ellipse(100, 80, 70, 50);
    ellipse(60, 80, 70, 50);
  
    ellipse(160, 100, 70, 50);
    ellipse(180, 120, 70, 50);
    ellipse(140, 120, 70, 50);
    pop();
  
  // ----- rain drops
    push();
    fill(196,211,223);
    ellipse(180, 160, 10, 30);
    ellipse(130, 170, 10, 20);
    ellipse(130, 170, 10, 20);
    ellipse(80, 190, 10, 35);
    ellipse(80, 130, 10, 25);
    ellipse(50, 130, 10, 25);
    ellipse(150, 180, 10, 30);
    ellipse(50, 180, 10, 30);
    ellipse(190, 200, 10, 30);
    ellipse(110, 200, 10, 30);
    pop();
  }
  
  function snowIcon(){
    // ----- snow clouds
    // fill(130);
    push();
    fill(180);
    noStroke();
    ellipse(80, 60, 70, 50);
    ellipse(100, 80, 70, 50);
    ellipse(60, 80, 70, 50);
  
    ellipse(160, 100, 70, 50);
    ellipse(180, 120, 70, 50);
    ellipse(140, 120, 70, 50);
    pop();
  
  // ----- snow icon
    push();
    fill(255);
    ellipse(180, 160, 10, 10);
    ellipse(130, 170, 10, 10);
    ellipse(130, 170, 10, 10);
    ellipse(80, 190, 10, 10);
    ellipse(80, 130, 10, 10);
    ellipse(50, 130, 10, 10);
    ellipse(150, 180, 10, 10);
    ellipse(50, 180, 10, 10);
    ellipse(190, 200, 10, 10);
    ellipse(110, 200, 10, 10);
    ellipse(98, 160, 10, 10);
    pop();
  }
  
  function coffee(){
    // ----- drawing coffee for cloudy weather. You need a coffee for that weather!
    push();
    fill(255);
    beginShape();
    vertex(110, 430);
    vertex(140, 430);
    vertex(150, 365);
    vertex(100, 365);
    endShape(CLOSE);
  
    fill(130, 78, 55);
    beginShape();
    vertex(102, 380);
    vertex(148, 380);
    vertex(144, 410);
    vertex(106, 410);
    endShape(CLOSE);
  
    fill(150);
    ellipse(125, 363, 51, 15);
    fill(111, 78, 55);
    ellipse(125, 365, 45, 10);
  
    pop();
  }
  
  function umbrella(){
    // ----- drawing umberlla icon for rainy weather
    push();
    fill(255,0,0);
    // ellipseMode(DEGREES);
    translate(125, 350);
    // rotate(PI);
    // arc(0, 0, 100, 40, 0, PI);
    triangle(-70, 0, 70, 0, 0, -30)
    push()
    fill(200,0,0)
    beginShape()
    vertex(-70,0)
    vertex(-50, 5)
    vertex(50, 5)
    vertex(70, 0)
    endShape(CLOSE)
    pop()
    ellipse(0, 50, 8, 100);
    
    pop();
  }