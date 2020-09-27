
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
} 



function setup() {
  
  var survivalTime = 0;

  monkey = createSprite(80,315,20,20);
  monkey.addAnimation ("moving" , monkey_running);
  monkey.scale= 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -3;
  
  obstaclesGroup = new Group();
  foodGroup = new Group();
  
   monkey.setCollider("rectangle",0,0,400,monkey.height);
  monkey.debug = true
  
  score = 0;
}


function draw() {
background("white");
 
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  if (keyDown("space")){
   monkey.velocityY = -12; 
  }
   monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
   spawnFood();
  spawnObstacles();

  drawSprites();
   stroke("blue");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50); 
  
      if(obstaclesGroup.isTouching(monkey)){
      ground.velocityX = 0;
      monkey.velocityY = 0;
      monkey.velocityx = 0;
      obstaclesGroup.setVelocityXEach(0);
      foodGroup.setVelocityXEach(0);
      obstaclesGroup.setLifetimeEach(-1);
      foodGroup.setLifetimeEach(-1);
       
      }
   stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/10) 
  text("Survival Time: "+ survivalTime, 100,50);
 
}
function spawnFood() {
if (frameCount% 80 === 0){
banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.velocityX = -5;
    
     //lifetime to the variable
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    //adding  image of banana
     banana.addImage(bananaImage);
     banana.scale=0.05;
    
    foodGroup.add(banana);
   
}
}

   function spawnObstacles() {
  if(frameCount % 100  === 0) {
    obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -8;
    
     
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.15;
    
     
    obstacle.lifetime = 300;
    
    //creating the group of the obstacles
    obstaclesGroup.add(obstacle);
  }
}





