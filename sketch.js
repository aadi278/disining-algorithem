var fixedRect,movingRect

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 50, 100);
  fixedRect.shapeColor="green"
  fixedRect.debug= "true"


  movingRect=createSprite(600,200,100,50)
  movingRect.shapeColor="green"
  movingRect.debug= "true"

fixedRect.velocityX= 5
movingRect.velocityX=-5
}

function draw() {
  background(0);  
 // movingRect.x= mouseX
 // movingRect.y= mouseY

  console.log(movingRect.x-fixedRect.x)

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
movingRect.velocityX = movingRect.velocityX * (-1);
fixedRect.velocityX = fixedRect.velocityX * (-1);
}
if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
&& fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
movingRect.velocityY = movingRect.velocityY * (-1);
fixedRect.velocityY = fixedRect.velocityY * (-1);
}

  drawSprites();
}