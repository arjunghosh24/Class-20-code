function setup() 
{
  createCanvas(1000,1300);

  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400, 800, 100, 50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY =  5;

}

function draw() 
{
  background("black");  

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
  && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2)
  {
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);
  }

  if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2)
    {
      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);
    }

  drawSprites();
}