const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Mouse= Matter.Mouse;

const MouseConstraint= Matter.MouseConstraint;
const Constraint= Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var chain1;
var point1;
var engine,world;

function setup() {

  createCanvas(windowWidth/2,windowHeight/1.5);
  engine=Engine.create();
  world=engine.world;

  let canvasmouse=Mouse.create(canvas.elt);
  canvasmouse.pixelRatio=pixelDensity();
  let options={
    mouse:canvasmouse
  };
  mConstraint=MouseConstraint.create(engine,options);
  World.add(world,mConstraint);


  //create the bobs
  bob1= new Pendulum(300,300,"yellow"); 
 chain1=new Slingshot(this.bob1.body,{x:300,y:100});
 bob2= new Pendulum(240,300,"lime");
 chain2= new Slingshot(this.bob2.body,{x:240,y:100});
 bob3= new Pendulum(180,300,"red");
 chain3= new Slingshot(this.bob3.body,{x:180,y:100});
 bob4= new Pendulum(360,300,"blue");
 chain4= new Slingshot(this.bob4.body,{x:360,y:100});
 bob5= new Pendulum(420,300,"grey");
 chain5= new Slingshot(this.bob5.body,{x:420,y:100});

}

function draw(){
  background(0);
  Engine.update(engine);
  

  bob1.display();
  chain1.display();

  bob2.display();
  chain2.display();

  bob3.display();
  chain3.display();
  
  bob4.display();
  chain4.display();

  bob5.display();
  chain5.display();





}

function mouseDragged(){
  Matter.Body.setPosition(bob3.body,{x:mouseX,y:mouseY});
}