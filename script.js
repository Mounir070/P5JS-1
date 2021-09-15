var x, y, vx, vy;
var ball1, ball2, ball3;

class Ball{
  constructor(x, y, w, h, vx, vy) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.vx = vx;
    this.vy = vy;
  }
function setup(){
 createCanvas(400, 400);
 
  ball1 = new Ball(30,200,50,50,5,5,"red")

  ball2 = new Ball(30,200,50,50,5,5,"bleu")

  ball3 = new Ball(30,200,50,50,5,5,"red")

}

funtion draw(){
  background(225);

  ball1.draw();
  ball2.draw();
  ball3.draw();

}

function setup() {
	createCanvas(400, 400);

  x = 0;
  y = 200;
  vx = 5;
  vy = 5;

}


function draw() {
	background(225);
  
  ellipse(x,y,50,50);
  x = x + vx;
  y = y + vy;

  if(y <=0  || y > 400){
     vy = vy * -1;
  
  }
  if(x < 0 || x > 400){
    vx = vx * -1
  }
}

