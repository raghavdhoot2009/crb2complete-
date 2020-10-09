class dustbin{
constructor(x,y){
this.x=x;
this.y=y;
this.dustbinWidth=200;
this.dustbinHeight=213;
this.wallThickness=20;

this.image=loadImage("dustbin.png");
this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true});                                                                                                                                            
this.leftBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});
this.rightBody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});
World.add(world, this.bottomBody) 
World.add(world, this.leftBody)
World.add(world, this.rightBody); 

}
display(){
var bottompos=this.bottomBody.position;
push();
translate(bottompos.x,bottompos.y);
rectMode(CENTER);
angleMode(RADIANS); 
fill(255); 
imageMode(CENTER);
image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight);
pop();

var rightpos=this.rightBody.position;
push();
translate(rightpos.x,rightpos.y);
rectMode(CENTER);
angleMode(RADIANS);
fill(255);
rotate(-1*this.angle); 
pop();

var leftpos=this.leftBody.position;
push();
translate(leftpos.x,leftpos.y);
rectMode(CENTER);
angleMode(RADIANS);
fill(255) ;
rotate(this.angle) ;
pop();

}


}