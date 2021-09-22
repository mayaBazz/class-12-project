var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var orange, orangeImg;
var red, redImg;
var leaf, leafImg;
var foodGroup;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");

appleImg = loadImage("apple.png");
orangeImg = loadImage("orangeLeaf.png");
redImg = loadImage("redImage.png");
leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  rabbit.x=World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);
  var option = Math.round(random(1,3));
  if (frameCount %60 === 0)
  {
    if(option == 1){
      createApples();
    }
    else if (option == 2){
      createOrange();
    }
    else  {
    createRed();
  }
  }

  
 
  drawSprites();
}

function createApples(){
  apple=createSprite(random(50,350), 40, 20,20);
  apple.velocityY=4;
  apple.addImage("apple" ,appleImg)
  apple.scale=0.08
  apple.lifetime = 150;
}


function createOrange(){
  orange=createSprite(random(50,350), 40, 20,20);
  orange.velocityY=4;
  orange.addImage("orange" ,orangeImg)
  orange.scale=0.08
  orange.lifetime = 150;
}


function createRed(){
  red=createSprite(random(50,350), 40, 20,20);
  red.velocityY=4;
  red.addImage("red" ,redImg)
  red.scale=0.08
  red.lifetime = 150;
}