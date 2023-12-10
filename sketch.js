var speed = 0;
var easing = 0.03;
var count = 1;
var c;




function setup() {
  var canvas = createCanvas(600, 400);  
  canvas.parent('sketch-holder');
 // saveCanvas();
  strokeWeight(12.0);
  strokeCap(ROUND);
  stroke(255, 255, 255);

  let button = createButton("clearCanvas");
  button.size(100,30);
  button.parent('button-holder');
  button.class('menu-button');
  button.position(10, 300);
  button.mousePressed(clearCanvas);


  let button2 = createButton("strokeColour")
  button2.size(100,30)
  button2.parent('button-holder');
  button2.class('menu-button');
  button2.position(200, 300);
  button2.mousePressed(strokeColour);
}

function draw() {
 // background(220);

 var target = dist(mouseX, mouseY, pmouseX, pmouseY);
 speed += (target - speed) * easing;
 if(mouseIsPressed) {
   strokeWeight(speed/2);
  
  line(mouseX, mouseY, pmouseX, pmouseY);
}
}
function strokeColour(){
  
let ranR = int(random(255));
let ranG = int(random(255));
let ranB = int(random(255));
fill(ranR, ranG, ranB);
// rect(random(width*0.8), random(height*0.8), random(100));
 stroke(ranR, ranG, ranB);

}
function clearCanvas(){
  background(255)
  
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    saveCanvas("myPainting", "png");
    count++;
  }
}