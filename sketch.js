var helicopterIMG, helicopterSprite, packageSprite,packageIMG, p1, p2;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	p1=createSprite(800, 350, 10, 700);
	p1.visible=false;

	p2=createSprite(0, 350, 10, 700);
	p2.visible=false;
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2, 200, 10,10, {isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  packageSprite.x=helicopterSprite.x;
  helicopterSprite.bounce(p1);
  helicopterSprite.bounce(p2);
  if(packageSprite.y>=640){
	packageSprite.y=helicopterSprite.y;
  }
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:false, friction:1, density:2});
	World.add(world, packageBody);
    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
  }
  
  if (keyCode === RIGHT_ARROW){
	  helicopterSprite.x=helicopterSprite.x+10;
	  }
	  
 if (keyCode === LEFT_ARROW){
	helicopterSprite.x=helicopterSprite.x-10;
}
}



