const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;



function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;   
   
    ball = new Ball (100,100,20,20);
    log = new Log(400, 200, 300, 30);
    chain = new Chain(log.body, ball.body);
}

function draw(){
    background(0);
    Engine.update(engine);
     
    if(keyCode === 32){
      ball.MoveWithMouse();
    }

    
    textSize(30);
    
    text("Press space to move the bob", 90, 40);
    text("PRESS ENTER TO LEAVE THE BOB", 100, 80);
    
    ball.display();
    log.display();
    chain.display();
}