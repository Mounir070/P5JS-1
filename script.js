var x, y, vx, vy;

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

