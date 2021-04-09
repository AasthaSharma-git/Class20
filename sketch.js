var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  
  fixedRect=createSprite(200,200,50,80);
  fixedRect.shapeColor="green";

  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";
}

function draw() {
  background("white");  

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  console.log(movingRect.y-fixedRect.y);

  isTouching();

  if(isTouching()){
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  

  drawSprites();
}
function isTouching(){
  if(movingRect.x-fixedRect.x<(movingRect.width+fixedRect.width)/2 
  && movingRect.x-fixedRect.x>-(movingRect.width+fixedRect.width)/2 
  && movingRect.y-fixedRect.y<(fixedRect.height+movingRect.height)/2 
  && movingRect.y-fixedRect.y>-(fixedRect.height+movingRect.height)/2)
  {
   return true;
  }

  
  else{

    return false;
  }
}