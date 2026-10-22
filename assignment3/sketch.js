let message = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0, 0, 100);

  fill(255);
  rect(300, 0, 300, 400); //right background

  fill(100, 150, 220);
  ellipse(150, 355, 150, 300); //body

  fill(255, 220, 190);
  ellipse(150, 170, 115, 150); //face

  ellipse(88, 175, 20, 30);
  ellipse(212, 175, 20, 30); //ear

  fill(0);
  ellipse(150, 115, 130, 80);
  ellipse(105, 130, 50, 60);
  ellipse(145, 130, 50, 60);
  ellipse(185, 125, 60, 70); //hair

  stroke(60);
  strokeWeight(2);
  line(145, 215, 155, 215); //mouth

  if (message == false) {
    fill(30);
    ellipse(125, 175, 9, 15);
    ellipse(175, 175, 9, 15);
  } else {
    stroke(30);
    strokeWeight(3);
    line(118, 165, 132, 165);
    line(168, 165, 182, 165);
    noStroke();

    fill(200);
    textSize(20);
    text("Z", 205, 130);
    textSize(14);
    text("z", 220, 115); //zz
  } //eye

  fill(50);
  noStroke();
  rect(90, 310, 120, 100);

  fill(200);
  ellipse(150, 310, 240, 70);
  noFill();
  stroke(230);
  ellipse(150, 310, 230, 60); //table

  fill(0);
  rect(355, 35, 205, 330, 10);
  fill(255);
  rect(365, 45, 185, 310, 10);

  fill(0);
  textSize(15);
  text("♥...", 445, 75);
  stroke(220);
  line(365, 90, 550, 90);
  noStroke(); //phone
  
  fill(235);
  rect(375, 290, 125, 35, 10);

  if (message == false) {
    fill(40);
    textSize(12);
    text("자니?", 390, 312);
  } else {
    fill(0, 70, 210);
    rect(480, 115, 60, 30, 10);

    fill(230);
    textSize(13);
    text("자니?", 495, 135);
  }

  let isMouseIn = (mouseX > 502.5) 
                  && (mouseX < 537.5)
                  && (mouseY > 294.5)
                  && (mouseY < 329.5);

  if ((isMouseIn) || (message == true)) {
    fill(255, 150, 150);
    ellipse(112, 190, 35, 20);
    ellipse(188, 190, 35, 20); //blush
    
    fill(120, 190, 150);
    noStroke();
    rect(91, 272, 12, 24);
    rect(85, 292, 24, 38, 5);
    
    fill(255);
    rect(88, 302, 18, 14); //soju1

    fill(120, 190, 150);
    noStroke();
    rect(133, 267, 12, 24);
    rect(127, 287, 24, 38, 5);
    
    fill(255);
    rect(130, 297, 18, 14); //soju2

    fill(120, 190, 150);
    noStroke();
    rect(176, 275, 12, 24);
    rect(170, 295, 24, 38, 5);
    
    fill(255);
    rect(173, 305, 18, 14); //soju3

    fill(120, 190, 150);
    noStroke();
    rect(210, 265, 12, 24);
    rect(204, 285, 24, 38, 5);
    
    fill(255);
    rect(207, 295, 18, 14); //soju4
  }

  if (isMouseIn) {
    fill(180, 200, 255);
    circle(523, 307, 35);
    fill(255);
    textSize(18);
    text("...", 516, 309);
  } else {
    fill(0, 70, 210);
    circle(523, 307, 35);
    fill(255);
    textSize(18);
    text(">", 519, 314);
  }
}

function mousePressed() {
  let isMouseIn = (mouseX > 502.5) 
                  && (mouseX < 537.5)
                  && (mouseY > 294.5)
                  && (mouseY < 329.5);

  if (isMouseIn) {
    message = true;
  }
}

function keyPressed() {
  if (key == ' ') {
    message = false;
  }

  if (key == 's') {
    saveCanvas('Assignment 3', 'png')
  }
}