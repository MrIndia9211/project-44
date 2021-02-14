var bgimg;
var player,ply_running;
var invisibleground;
function preload(){
    bgimg = loadImage("images/b1.png")
    ply_running = loadAnimation("images/p1.png","images/p2.png","images/p3.png","images/p4.png")
}
function setup(){
createCanvas(1100,670);
backgrounds = createSprite(670,400);
backgrounds.addImage(bgimg);
backgrounds.scale = 2.0;
backgrounds.velocityX = -3

player = createSprite(400,650,40,80);
player.addAnimation("running", ply_running);

invisibleground = createSprite(420,650,1800,10)
}
function draw(){
background(0)


if(keyDown("space")){
    player.velocityY = -12 
}
player.velocityY = player.velocityY + 0.3
  
if (backgrounds.x < 0){
    backgrounds.x = backgrounds.width/2;
}

player.collide(invisibleground);
drawSprites()
}