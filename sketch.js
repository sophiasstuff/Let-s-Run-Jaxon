var path, pathImg;
var boy, boy_running;
var invisibleWall1, invisibleWall2;

function preload(){

  //pre-load images
  pathImg = loadImage("path.png");
  boy_running = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);

  //create path
  path = createSprite(200,200,200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;


  //create runner
  boy = createSprite(200,280,30,30);
  boy.addAnimation("running",boy_running);
  boy.scale = 0.1;

  //create invisibleWalls
  invisibleWall1 = createSprite(1,200,5,600);
  invisibleWall1.visible = false;
  invisibleWall2 = createSprite(399,200,5,600);
  invisibleWall2.visible = false;
  
}

function draw() {
  background("black");

  boy.x = mouseX;

  if(path.y > 400){
    path.y = height/4;
  }
  
  boy.collide(invisibleWall1);
  boy.collide(invisibleWall2);
  drawSprites();
}
