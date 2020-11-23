
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Paper;
var D1, D2, D3;
var Ground;

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Paper = new Paper(100, 350, 40);
	D1 = new Dustbin(1000, height-22, 200, 20);
	D2 = new Dustbin(900, height-70, 20, 200);
	D3 = new Dustbin(1100, height-70, 20, 200);
	Ground = new Ground(600, height, 1200, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Paper.display();
  D1.display();
  D2.display();
  D3.display();
  Ground.display();

  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(Paper.body, Paper.body.position, {x:85, y:-85});
	}
}