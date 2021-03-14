
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  

  
}


function draw() {
  background(225);
  
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime,100,50);
  
  spawnObstacles(); 
  spawnFood();
  
  
  
 
  drawSprites();
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(600,320,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.3;
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 3*survivalTime/100);
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
   
    }
          
  
}

function spawnFood(){
  if (frameCount % 200 === 0) {
    var banana = createSprite(600,135,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
   
  }
  
  
}






