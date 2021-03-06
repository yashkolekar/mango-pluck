
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,100,30)
	mango3=new mango(1200,100,30)
	mango4=new mango(1050,100,30)
	mango5=new mango(1080,100,30)
	mango6=new mango(1100,150,30)
	mango7=new mango(1000,180,30)
	
   stone1=new stone(230,420,30)
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	sling=new SlingShot(stone1.body,{x:230,y:420})

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  detectollision(stone1,mango1)
  detectollision(stone1,mango2)
  detectollision(stone1,mango3)
  detectollision(stone1,mango4)
  detectollision(stone1,mango5)
  detectollision(stone1,mango6)
  detectollision(stone1,mango7)
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
stone1.display()
  groundObject.display();
 sling.display()
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}
function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{Matter.Body.setStatic(lmango.body,false);
	}
	}
	function keyPressed(){
		if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
		launcherObject.attach(stoneObj.body);
		}
		}