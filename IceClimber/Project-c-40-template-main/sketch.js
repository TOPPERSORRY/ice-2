var penguin,penguinAnimation;
var leftPenguin,leftPenguinAnimation
var ground;
var crow,crowAnimation;
var brick1,brick2,brick3,brick4,brick5,brick6,brick7,brick8,brick9,brick10,brick11,brick12,brick13,brick14;
var brickImage;
var bgImage;

function preload(){
  penguinAnimation = loadAnimation("Images/penguinleft.png","Images/penguinright.png");
  leftPenguinAnimation = loadAnimation("Images/penguinleft1.png","Images/penguinright1.png")
  crowAnimation = loadAnimation("Images/crow 1.png","Images/crow 2.png");
  brickImage = loadImage("Images/brick.png");
  bgImage = loadImage("Images/bg.jpg")
}
function setup() {
  createCanvas(600,600);
 penguin = createSprite(300,400);
 penguin.addAnimation("rightRunning",penguinAnimation);
 penguin.addAnimation("leftRunning",leftPenguinAnimation);
  penguin.scale = 0.2;
  ground = createSprite(300,600,600,200);
  crow = createSprite(300,30,20,20)
  crow.addAnimation("flying",crowAnimation);
  crow.scale = 0.2;
  crow.velocityX = -3;
  brick1 = createSprite(20,370,30,30);
  brick1.addImage(brickImage);
  brick1.scale = 0.5;
  brick2 = createSprite(57,370,30,30);
  brick2.addImage(brickImage);
  brick2.scale = 0.5;
  brick3 = createSprite(94,370,30,30);
  brick3.addImage(brickImage);
  brick3.scale = 0.5;
  brick4 = createSprite(131,370,30,30);
  brick4.addImage(brickImage);
  brick4.scale = 0.5;
  brick5 = createSprite(168,370,30,30);
  brick5.addImage(brickImage);
  brick5.scale = 0.5;
  brick6= createSprite(205,370,30,30);
  brick6.addImage(brickImage);
  brick6.scale = 0.5;
  brick7 = createSprite(242,370,30,30);
  brick7.addImage(brickImage);
  brick7.scale = 0.5;
  brick8 = createSprite(279,370,30,30);
  brick8.addImage(brickImage);
  brick8.scale = 0.5;
  brick9 = createSprite(316,370,30,30);
  brick9.addImage(brickImage);
  brick9.scale = 0.5;
  brick10= createSprite(353,370,30,30);
  brick10.addImage(brickImage);
  brick10.scale = 0.5;
  brick11= createSprite(390,370,30,30);
  brick11.addImage(brickImage);
  brick11.scale = 0.5;
  brick12 = createSprite(427,370,30,30);
  brick12.addImage(brickImage);
  brick12.scale = 0.5;
  brick13 =  createSprite(464,370,30,30);
  brick13.addImage(brickImage);
  brick13.scale = 0.5;
  brick10= createSprite(353,370,30,30);
  brick10.addImage(brickImage);
  brick10.scale = 0.5;
}

function draw() {
  background(bgImage)
  createEdgeSprites();
 
  penguin.collide(ground);
  if(keyDown("LEFT_ARROW")){
   
    penguin.velocityX = -2;
    penguin.changeAnimation("leftRunning")
  }
  if(keyDown("RIGHT_ARROW")){
    penguin.velocityX = 2;
    penguin.changeAnimation("rightRunning")
  }
  if(penguin.x>600){
    penguin.x = 0;
  }
  if(penguin.x<0){
    penguin.x = 600;
    
  }
  if(crow.x<0){
    crow.x = 600;
  }
  if(keyDown("space")&& penguin.y >= 400) {
    penguin.velocityY = -10 ;
   // jumpSound.play();
}
console.log(penguin.y)

//add gravity
penguin.velocityY = penguin.velocityY + 0.8
  drawSprites();
}