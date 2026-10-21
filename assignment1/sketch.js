function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(180, 160, 130);

  stroke(160, 130, 100);
  line(0, 20, 400, 20);
  line(0, 40, 400, 40);
  line(0, 60, 400, 60);
  line(0, 80, 400, 80);
  line(0, 100, 400, 100);
  line(0, 120, 400, 120);
  line(0, 140, 400, 140);
  line(0, 160, 400, 160);
  line(0, 180, 400, 180);
  line(0, 200, 400, 200);
  line(0, 220, 400, 220);
  line(0, 240, 400, 240);
  line(0, 260, 400, 260);
  line(0, 280, 400, 280);
  line(0, 300, 400, 300);
  line(0, 320, 400, 320);
  line(0, 340, 400, 340);
  line(0, 360, 400, 360);
  line(0, 380, 400, 380);

  fill(255);
  rect(5, 140, 130, 100); //좌
  rect(265, 140, 130, 100); //우
  rect(150, 0, 100, 130); //상
  rect(150, 260, 100, 130); //하
  
  fill(255, 200, 220);
  stroke(255);
  strokeWeight(5);
  rect(290, 340, 100, 130);
  strokeWeight(1);

  fill(30);
  noStroke();
  circle(200, 193, 90);
  fill(180);
  noStroke();
  circle(200, 183, 80);
  noFill();
  stroke(220);
  circle(200, 183, 55);
  fill(20);
  circle(200, 183, 30);

  fill(230, 50, 60);
  stroke(30);
  ellipse(70, 190, 40, 30);

  stroke(30, 120, 30);
  strokeWeight(5);
  line(52, 190, 58, 200);
  line(49, 190, 58, 190);
  line(52, 190, 58, 180);
  strokeWeight(1);

  stroke(0);
  strokeWeight(1.5);
  point(65, 190);
  point(70, 199);
  point(75, 182);
  point(80, 196);
  strokeWeight(1); //좌, 딸기

  fill(120, 50, 150);
  stroke(30);
  ellipse(200, 68, 30, 35);

  stroke(80, 50, 30);
  strokeWeight(5);
  line(200, 57, 205, 47);
  strokeWeight(1); //상, 자두

  fill(230, 50, 60);
  stroke(30);
  ellipse(295, 215, 40, 30);

  stroke(30, 120, 30);
  strokeWeight(5);
  line(277, 215, 283, 225);
  line(274, 215, 283, 215);
  line(277, 215, 283, 205);
  strokeWeight(1);

  stroke(0);
  strokeWeight(1.5);
  point(290, 215);
  point(295, 225);
  point(300, 208);
  point(305, 222);
  strokeWeight(1); //우, 딸기

  fill(170, 200, 50);
  stroke(30);
  ellipse(333, 190, 38, 30); //우, 라임

  fill(120, 50, 150);
  ellipse(370, 165, 35, 30);

  stroke(80, 50, 30);
  strokeWeight(5);
  line(350, 158, 360, 167);
  strokeWeight(1) //우, 자두

  fill(120, 50, 150);
  stroke(30);
  ellipse(175, 290, 30, 35);

  stroke(80, 50, 30);
  strokeWeight(5);
  line(170, 312, 175, 302);
  strokeWeight(1); //하, 자두

  fill(170, 200, 50);
  stroke(30);
  ellipse(225, 360, 30, 38); //하, 라임

}
