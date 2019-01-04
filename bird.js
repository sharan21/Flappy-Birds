function bird()
{ this.gravity=0.6;
this.vel=0;
 this.stren= -10;
  this.posx = width/2;
  this.posy = height/2;
  this.rad = 20;
  this.show = function()
  { fill(200,250,200);
    ellipse(this.posx,this.posy,this.rad,this.rad);
  }
  this.move = function()
  { this.posy = this.posy+this.vel;
  this.vel=  this.vel+this.gravity;
  if(this.posy>height)
  this.posy = height;

}
this.push = function()
{this.vel = +this.stren;}

this.collide = function(Pipe)
{
  if this.pos

}

 
 
 
 
  
}
