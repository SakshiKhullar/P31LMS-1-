const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ball, ballB, ballA;
var balls = [];

function setup() {
  createCanvas(400,800);

 
  engine = Engine.create();
  world = engine.world;

  ground =  new Ground(200, 760, 1000, 15);

  wall1 = new Ground(50, 600, 10, 305);
  wall2 = new Ground(125, 600, 10, 305)
  wall3 = new Ground(200, 600, 10, 305)
  wall4 = new Ground(275, 600, 10, 305)
  wall5 = new Ground(350, 600, 10, 305)
  wall6 = new Ground(0, 400, 10, 705)
  wall7 = new Ground(400, 400, 10, 705)



  peg1 = new Plinko(50, 100, 10);
  peg2 = new Plinko(50, 100, 10);
  peg3 = new Plinko(100, 100, 10);
  peg4 = new Plinko(150, 100, 10);
  peg5 = new Plinko(200, 100, 10);
  peg6 = new Plinko(250, 100, 10);
  peg7 = new Plinko(300, 100, 10);
  peg8 = new Plinko(350, 100, 10);
  
  peg9 = new Plinko(25, 150, 10);
  peg10 = new Plinko(75, 150, 10);
  peg11 = new Plinko(125, 150, 10);
  peg12 = new Plinko(175, 150, 10);
  peg13 = new Plinko(225, 150, 10);
  peg14 = new Plinko(275, 150, 10);
  peg15 = new Plinko(325, 150, 10);
  peg16 = new Plinko(375, 150, 10);
  peg17 = new Plinko(40, 250, 10);
  peg18 = new Plinko(80, 250, 10);
  peg19 = new Plinko(125, 250, 10);
  peg20 = new Plinko(175, 250, 10);
  peg21 = new Plinko(225, 250, 10);
  peg22 = new Plinko(275, 250, 10);
  peg23 = new Plinko(325, 250, 10);
  peg24 = new Plinko(375, 250, 10);

  peg25 = new Plinko(50, 200, 10);
  peg26 = new Plinko(50, 200, 10);
  peg27 = new Plinko(100, 200, 10);
  peg28 = new Plinko(150, 200, 10);
  peg29 = new Plinko(200, 200, 10);
  peg30 = new Plinko(250, 200, 10);
  peg31 = new Plinko(300, 200, 10);
  peg32 = new Plinko(350, 200, 10);

  

  console.log(balls)


}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();

  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();



  peg1.display();
  peg2.display();
  peg3.display();
  peg4.display();
  peg5.display();
  peg6.display();
  peg7.display();
  peg8.display();

  peg9.display();
  peg10.display();
  peg11.display();
  peg12.display();
  peg13.display();
  peg14.display();
  peg15.display();
  peg16.display();


  peg17.display();
  peg17.display();
  peg19.display();
  peg20.display();
  peg21.display();
  peg22.display();
  peg23.display();
  peg24.display();
  peg25.display();
  peg26.display();
  peg27.display();
  peg28.display();
  peg29.display();
  peg30.display();
  peg31.display();
  peg32.display();


  if(frameCount%60===0){
    balls.push(new Ball(random(width/2-30, width/2+30), 10,10));
 
  }

  for (var i = 0; i < balls.length; i++) {
      balls[i].display();
  }
  
  
}
