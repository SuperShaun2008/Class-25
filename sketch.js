const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var box1;
var box2;
var box3;
var box4;
var box5;
var technoblade;
var technoblade1;
var philza;
var primeLog;
var primeLog1;
var primeLog2;
var primeLog3;
var engine, world;
var object;
var ball
var ground
function preload(){
    backgroundImage= loadImage("sprites/bg.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box (700,320,70,70);
    box2 = new Box (920,320,70,70);
    box3 = new Box (700,240,70,70);
    box4= new Box (920,240,70,70);
    box5 = new Box (810,160,70,70);
    ground = new Ground (600,390,1200,20)
    technoblade = new Pig (810,350)
    technoblade1 = new Pig (810,220)
    philza = new Bird (500,200)
    primeLog = new Log (810,260,300,PI/2)
    primeLog1 = new Log (810,180,300,PI/2)
    primeLog2 = new Log (760,120,150,PI/7)
    primeLog3 = new Log (870,120,150,-PI/7)
}
function draw(){
    background(backgroundImage);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    technoblade.display();
    technoblade1.display();
    philza.display();
    primeLog.display();
    primeLog1.display();
    primeLog2.display();
    primeLog3.display();
    ground.display();
}
