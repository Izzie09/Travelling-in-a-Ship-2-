var sea;
var ship;

function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -4;
  sea.scale = 0.5;
  
  ship = createSprite(200,200,30,20);
  ship.addAnimation("movingship",shipImg);
  ship.scale = 0.5;
}

function draw() {
  background("blue");
  if(sea.x < 0) {
    sea.x = sea.width/4;
    }
  drawSprites();  
}