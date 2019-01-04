function Pipe()
{ 
  this.rad1 = 20;
  this.posx1 = width+50;
  this.posy1 = height;
  this.vel1 = ;
  this.len=random(20,250);
  this.wid=50; // fixed
  
  this.show = function()
  {  
   fill(200,200,200);
   rect(this.posx1,this.posy1,-this.wid,-this.len);
   rect(this.posx1,0,-this.wid,+this.len);
   
  }
  this.move = function()
  {
    this.posx1 = this.posx1 - this.vel1;}
  }
  this.accelerate = function() // increase the vel as time increases
  {
    
  }
