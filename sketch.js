var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleFalling;
var grassImg,grass;
var leaf,leafImg;
var orangeLeafImg,orangeLeaf;
var redLeafImg,redLeaf;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple=loadImage("apple.png");
  grassImg=loadImage("grass.png");
  leafImg=loadImage("leaf.png");
  orangeLeafImg=loadImage("orangeLeaf.png");
 // redLeafImg=loadImg("redlmage.png")
}

function setup(){

  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
grass=createSprite(100,350,20,20);
grass2=createSprite(300,310,20,20);
 grass.addImage(grassImg);
 grass.scale=0.1;
 grass2.addImage(grassImg);
 grass2.scale=0.1;
//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale=0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX;
  spawnstuffs()
  drawSprites();
}
function spawnstuffs(){
  // write your code here
  if(frameCount%100===0){
    appleFalling=createSprite(random,30,10,20);
    appleFalling.velocityY=3;
    appleFalling.addImage(apple);
    appleFalling.scale=0.08;
    appleFalling.x=random(50,350);
    leaf=createSprite(200,30,30,30);
    leaf.velocityY=1;
    leaf.addImage(leafImg);
    leaf.scale=0.1;
    leaf.x=random(50,350);
    orangeLeaf=createSprite(120,30,30,30);
    orangeLeaf.velocityY=2;
    orangeLeaf.addImage(orangeLeafImg);
    orangeLeaf.scale=0.1;
    orangeLeaf.x=random(50,350);
    rabbit.depth=appleFalling.depth+1;
    rabbit.depth=leaf.depth+1;
    rabbit.depth=orangeLeaf.depth+1;
  } 
 }
