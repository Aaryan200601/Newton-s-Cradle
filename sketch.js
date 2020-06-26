var bob1, bob2, bob3, bob4, bob5;
var ground;
var chain1, chain2, chain3, chain4, chain5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	bob1 = new Bob(300, 400);
	bob2 = new Bob(350, 400);
	bob3 = new Bob(400, 400);
	bob4 = new Bob(450, 400);
	bob5 = new Bob(500, 400);
	ground = new Ground(width/2, 10, width/2, 20);
	chain1 = new Chain1(bob1.body, ground.body);
	chain2 = new Chain2(bob2.body, ground.body);
	chain3 = new Chain3(bob3.body, ground.body);
	chain4 = new Chain4(bob4.body, ground.body);
	chain5 = new Chain5(bob5.body, ground.body);

	Engine.run(engine);
  
}


function draw() {
background(70);
rectMode(CENTER);
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();
ground.display();
drawSprites();
}   

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-500, y:-500});
		Matter.Body.applyForce(bob2.body, bob2.body.position,{x:-500, y:-500});
	}
}