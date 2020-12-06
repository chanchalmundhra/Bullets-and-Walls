var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(2000,1000);

  
  
  bullet=createSprite(500,400,250,90);
  bullet.shapeColor="white";
  //bullet.velocityX=speed;
  thickness=random(22,83)
  wall=createSprite(1200,350,thickness,height/2);
  wall.shapeColor="blue";
  speed=random(223,321);
  weight=random(30,52);
 
}
function draw() {
  background(25);  
  bullet.velocityX=speed;

if(hasCollided(bullet,wall))
{
   bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10)
{
  wall.shapeColor="red";
}
if(damage<10)
{
  wall.shapeColor="green";
}

}


  drawSprites();

}

function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge= wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}
