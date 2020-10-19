var r1,r2;


function setup() {

  createCanvas(800,400);
  r1=createSprite(200,150,30,40);
  r2=createSprite(200,300,30,40);
  r1.shapeColor="blue";
  r2.shapeColor="purple";
  
}

function draw() {
  background(255,255,255);  
  r1.x=mouseX;
  r1.y=mouseY;
  if(r1.x-r2.x<r1.width/2+r2.width/2&&r2.x-r1.x<r1.width/2+r2.width/2&&
    r1.y-r2.y<r1.height/2+r2.height/2&&r2.y-r1.y<r1.height/2+r2.height/2){
      r1.shapeColor="pink";
      r2.shapeColor="red";
    }
    else{
      r1.shapeColor="blue";
      r2.shapeColor="purple";
    }
  drawSprites();
}