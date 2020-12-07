
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	box1 = new Dustbin(560,655,20, 100);
	box2 = new Dustbin(670,680,200, 20);
	box3 = new Dustbin(780,655,20, 100);

	paper = new Paper(50,655,10,10);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);

  box1.display();
  box2.display();
  box3.display();

  paper.display();

  drawSprites();
 
}



