
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,ground2,ground3;
var hammer,stone,rubber
var sand1,sand2,sand3,sand4,sand5,sand6;
var iron;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();

	world = engine.world;

	ground1=new Ground(400,695,800,20)

	ground2=new Ground(790,340,20,700)
	
	ground3=new Ground(10,340,20,700)
	
	//Create the Bodies Here.
	hammer=new Hammer(400,400,100,30)

	rubber = new Rubber(700,680,)

	stone=new Stone(380,650,100,100)

	sand1=new Sand(200,650)

	sand2=new Sand(500,650)

	sand3=new Sand(600,650)

	sand4=new Sand(220,650)

	sand5=new Sand(620,650)

	sand6=new Sand(640,650)

	sand7=new Sand(240,650)

	sand8=new Sand(260,650)

	sand9=new Sand(280,650)

	sand10=new Sand(300,650)

	sand11=new Sand(660,650)

	sand12=new Sand(680,650)

	iron = new Iron (350,650,20,20)


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  hammer.display();
  ground1.display();
  ground2.display();
  ground3.display();
	
  rubber.display();
  stone.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  sand11.display();
  sand12.display();

  iron.display();
  drawSprites();
 
}



