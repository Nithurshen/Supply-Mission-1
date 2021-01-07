const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var helicopter;
var package;
var ground;

function setup() {
	var canvas = createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  helicopter = new Helicopter(400, 75, 35, 15);
  ground = new Ground(400, 500, 800, 10);
  package = new Package(400, 75, 35, 15);
  
}


function draw() {
  background(0);
  Engine.update(engine);



      if(keyCode == ENTER){
        
      package.velocityY = 4;
      package.display();
      }
      
      /*if(keyCode == LEFT_ARROW){

          helicopter.x = helicopter.x - 4;

      }

      if(keyCode == RIGHT_ARROW){

        helicopter.x = helicopter.x + 4;

    }*/


  

  helicopter.display();
  ground.display();

}



