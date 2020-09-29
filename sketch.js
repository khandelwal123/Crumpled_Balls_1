
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(20, 20);
	bottom = new Bottom(560, 680);
	side1 = new Side(650, 640);
	side2 = new Side(470, 640);

	ground_options = 
	{
		isStatic : true
	}

	ground = Bodies.rectangle(400, 690, 800, 15, ground_options);
	World.add(world, ground);

	Engine.run(engine);  
}


function draw() {
	rectMode(CENTER);
	background(0);

	paper1.display();
	bottom.display();
	side1.display();
	side2.display();
	
	rectMode(CENTER)
	rect(400, 690, 800, 15);
	
	drawSprites();
	
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,
			{
				x:35,y:-35
			}
		);
	}
}