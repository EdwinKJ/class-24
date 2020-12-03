const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object, canvas;
var box1;
var ground;
var pig1;

function setup() {
var canvas = createCanvas(800,400);
engine = Engine.create();
world = engine.world;
ground = new Ground(600,height,1200,20);

box1 = new Box(100,200,100,200);

pig1 = new Pig(50,50);
}
function draw() {
  background(0);
 
  Engine.update(engine);

  ground.display();
  box1.display();
  pig1.display();
}