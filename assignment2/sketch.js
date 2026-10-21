let shirt1R, shirt1G, shirt1B;
let shirt2R, shirt2G, shirt2B;

let glassesR, glassesG, glassesB;
let glassesW, glassesSize;

let hairR, hairG, hairB;

function setup() {
  createCanvas(600, 600);
}

function mousePressed() {
  shirt1R = random(150, 200);
  shirt1G = random(70, 100);
  shirt1B = random(80, 120);

  shirt2R = random(190, 245);
  shirt2G = random(10, 210);
  shirt2B = random(100, 185);

  glassesR = random(20, 100);
  glassesG = random(30, 75);
  glassesB = random(90, 220);

  glassesW = random(4, 8);
  glassesSize = random(42, 60);

  hairR = random(10, 155);
  hairG = random(120, 255);
  hairB = random(160, 220);

  background(100, 120, 190);

  fill(210, 190, 160);
  rect(0, 450, 600, 150);

  fill(145, 90, 55);
  stroke(80, 50, 30);
  strokeWeight(4);
  rect(40, 520, 520, 35);
  rect(70, 555, 18, 115);
  rect(510, 555, 18, 115); //desk

  fill(245, 200, 170);
  noStroke();
  rect(270, 265, 60, 55); //neck
  ellipse(215, 205, 30, 45);
  ellipse(385, 205, 30, 45); //ear
  ellipse(300, 210, 165, 180); //face

  fill(shirt1R, shirt1G, shirt1B);
  noStroke();
  rect(165, 310, 275, 200, 20, 20, 0, 0);

  fill(shirt2R, shirt2G, shirt2B);
  rect(220, 310, 55, 40);
  rect(330, 310, 55, 40);
  rect(165, 350, 55, 40);
  rect(275, 350, 55, 40);
  rect(385, 350, 55, 40);
  rect(220, 390, 55, 40);
  rect(330, 390, 55, 40);
  rect(165, 430, 55, 40);
  rect(275, 430, 55, 40);
  rect(385, 430, 55, 40);
  rect(220, 470, 55, 40);
  rect(330, 470, 55, 40);

  stroke(245);
  strokeWeight(2.5);
  line(300, 315, 300, 510);

  fill(245);
  noStroke();
  ellipse(300, 360, 8, 8);
  ellipse(300, 400, 8, 8);
  ellipse(300, 440, 8, 8);
  ellipse(300, 480, 8, 8); //shirt

  fill(hairR, hairG, hairB);
  ellipse(250, 145, 75, 70);
  ellipse(300, 130, 85, 80);
  ellipse(350, 145, 75, 70); //hair

  noFill();
  stroke(glassesR, glassesG, glassesB);
  strokeWeight(glassesW);
  ellipse(260, 215, glassesSize, glassesSize - 10);
  ellipse(340, 215, glassesSize, glassesSize - 10);
  line(285, 215, 315, 215);
  line(230, 215, 205, 185);
  line(370, 215, 395, 185); //glasses

  fill(30);
  noStroke();
  ellipse(260, 215, 9, 12);
  ellipse(340, 215, 9, 12); //eye

  stroke(100);
  strokeWeight(3);
  line(300, 245, 295, 265); //nose
  line(280, 280, 320, 280); //mouth

  fill(255);
  noStroke();
  ellipse(455, 85, 100, 65);
  ellipse(500, 70, 90, 75);
  ellipse(545, 90, 95, 65);
  ellipse(510, 95, 90, 75);
  circle(445, 135, 25);
  circle(420, 160, 15); //dream
}

function keyPressed() {
  if(key == ' ') {
    saveCanvas('Assignment 2', 'png')
  }
}