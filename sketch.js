let cols;
let rows ;
let size = 10;
let board =[];
let food;
let head;
let direction;
let gameOver= false;
let length=1;

let s = width/2;
let increment=1;



function setup() {
  createCanvas(400, 400);
  frameRate(5);
  cols = width/size;
  rows = height/size;
  for (let i = 0; i<cols; i ++){
    board[i]=[];
    for ( let j= 0; j<rows; j ++){
      board[i][j]=0;


    }
  }
  food = createVector(int(random(0, cols)),int(random (0, rows)));
  head = createVector(int(random(0, cols)),int(random (0, rows)));
  direction= createVector(0,0);
}

function draw() {
  background(220);
  update();

displayBoard();
board[food.x][food.y] = -1;

if (gameOver == false){
  board[head.x][head.y] = length;

} else {
  textAlign (CENTER, CENTER);

  textSize(50);

  let ranR = int(random(255));
  let ranG = int(random(255));
  let ranB = int(random(255));
  fill(ranR, ranG, ranB);
  
  text("GAME OVER", width/2, height/2);
  
}



}

function update(){
  head.add(direction);

  if (dist ( head.x, head.y, food.x, food.y)==0){
    generateFood();
    length +=1;

  }
   
  if (head.x <0 || head.x > cols -1 || head.y<0 || head.y > rows -1){
    gameOver = true;
    print ("LOSER : HIT BOUNDARY")


  }else if (board[head.x][head.y]>1){
    gameOver=true;
    fill(0);
    print("GAME OVER: HIT ITSELF");
    direction.set(0, 0);
  }
  
  else {
    board [ head.x][head.y] = 1 + length;
    removeTail();
  }
}
function generateFood(){
  while(true){
  food = createVector(int(random(0, cols)),int(random (0, rows)));
  if (board[food.x][food.y]==0){
    break;
  }
  }
}

function removeTail(){
  for (let i = 0; i < cols; i ++){
    for (let j = 0; j <rows; j ++){
      if (board [i][j]> 0){
        board[i][j] -=1;
      }
    }
  }
}
function displayBoard(){
  noStroke();
  for ( let i =0; i<cols; i++){
   
    for (let j=0; j <rows; j++){
      if (board[i][j]==0){
        fill(255);
      }else if (board[i][j]==-1){
        fill(0, 50, 100);
      }else{
        fill(100, 240, 200);
      }
    circle(i*size,  j*size, size, size);
    // textAlign(CENTER, CENTER);
    // fill(0)
    // textSize(10);
    // text(board[i][j], size/2 + i*size, size/2+j*size);

  

    }
  }
}

function keyPressed(){
  if (keyCode == LEFT_ARROW){
    direction =createVector(-1, 0);
  }else if ( keyCode == RIGHT_ARROW){
    direction = createVector (1, 0);

  }else if (keyCode == UP_ARROW){
    direction = createVector (0, -1);

  }else if (keyCode == DOWN_ARROW){
    direction = createVector (0, 1);

  }
}