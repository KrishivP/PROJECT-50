var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg, zombieArr;
var n = 1;
var score = 0;
zombieArr = []



function preload(){  
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");
  shooter_1Img = loadImage("assets/shooter_1.png");
  bgImg = loadImage("assets/bg.jpeg");
  zombieImg = loadImage("assets/zombie.png");
}

function setup() {  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1
    

  //creating the player sprite
  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage("eyes open",shooterImg)
  player.addImage("shooting",shooter_shooting)
  player.addImage("standing",shooter_1Img)
  player.scale = 0.3 
  player.debug = true
  player.setCollider("rectangle",0,0,300,300)

  //creating the zombie sprite
  createZombie(n);
}

function draw() {
  background(0); 

  //moving the player up and down and making the game mobile compatible using touches
  if(keyDown("w")||touches.length>0){
    player.y = player.y-30
  }
  if(keyDown("s")||touches.length>0){
    player.y = player.y+30
  }
  if(keyDown("a")||touches.length>0){
    player.x = player.x-30
  }
  if(keyDown("d")||touches.length>0){
    player.x = player.x+30
  }


  //release bullets and change the image of shooter to shooting position when space is pressed
  if(mouseDown("leftButton")){ 
    player.changeImage("shooting") 
  }

  //player goes back to original standing image once we stop pressing the space bar
  else{
    player.changeImage("standing")
  }

  drawSprites();

}

function createZombie(n){
  if(zombieArr.length < n){
    for(var i = 0;i<n;i++){
      zombieArr.push(createSprite(width-10,height/2 + 20));
      zombieArr[i].addImage("zombie", zombieImg);
      zombieArr[i].scale = 0.1;
      if(zombieArr[i].x>0){
        zombieArr[i].velocityX = -5;
      }
    }
  } 
}
