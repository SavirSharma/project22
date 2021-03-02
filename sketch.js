var starImg,fairyImg,bgImg,fairy,fairyVoice;
var star,starBody;
var staticOption,gravityOption;

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

function preload() {
	starImg=loadImage("images/star.png");
	fairyImg=loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
	bgImg=loadImage("images/starNight.png");
	fairyVoice=loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);
	fairyVoice.play();
	fairy=createSprite(130, 520);
	fairy.addAnimation("fairyflying", fairyImg);
	fairy.scale=0.25;
	star=createSprite(650, 30);
	star.addImage(starImg);
	star.scale=0.2;
	engine=Engine.create();
	world=engine.world;
	var options={
		restitution:0.5, 
		isStatic:true
	}
	starBody=Bodies.circle(650,30,5,options);
	World.add(world,starBody);
	Engine.run(engine);
}


function draw() {
	background(bgImg);
	console.log(fairy.x);
	Engine.update(engine);
	star.x=starBody.position.x;
	star.y=starBody.position.y;
	console.log(star.y);
	if(star.y>470&&fairy.x==520){
		Matter.Body.setStatic(starBody,true);
	}
	drawSprites();
}
function keyPressed() {
	if(keyCode===LEFT_ARROW) {
		fairy.x-=30;
	}
	if(keyCode===RIGHT_ARROW) {
		fairy.x +=30;
	}
	if(keyCode===DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false);
	}
}