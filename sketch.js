
function preload(){
  //pre-load images
  bombImg=LoadImage("bomb.png")
  coinImg=LoadImage("coin.png")
enegyDrinkImg=LoadImage("energyDrink.png")
pathImg=LoadImage("path.png")
powerImg=LoadImage("power.png")
  runnerImg=LoadAnimation("runner-1.png","runner-2.png")
  
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=5;
}

function draw() {
  background(0);

}
