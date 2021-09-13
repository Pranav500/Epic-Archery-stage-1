const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var base, base2;
var archer, computer;


function setup() {
  canvas = createCanvas(800, 400);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  base = new Base(100,300);
  base2 = new Base(700,300);

  archer = new Archer(100,250);
  computer = new Player(700,250)

 }

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   base.display();
   base2.display();
    
   //display Player and computerplayer
   archer.display();
   computer.display();

}
