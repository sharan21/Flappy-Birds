var bird1;
var pipes = [];
var flag = 0;

var time = 0 ;
function setup() { // runs once at inital conditions

  createCanvas(500, 500);
  bird1 = new bird();
}

function draw()  
{ 
  time++;
  background(200, 200, 255);

  bird1.show();
  bird1.move();
  if(bird1.collide(pipes[flag]) == 1)
  flag++;
  
  
  
  
  for (var i=0; i<pipes.length; i++)
  {
    pipes[i].show();
    pipes[i].move();
  }
  

  if (time%50== 0) // reduce to increase speed of pipes
    pipes.push(new Pipe());
}
function mousePressed()
{  
  bird1.push(); 
  console.log("mouse pressed");
}
