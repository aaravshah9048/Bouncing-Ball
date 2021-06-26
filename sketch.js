var canvas;
var music;
var edges;

var b1,b2,b3,b4;
var mr;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    

    b1 = createSprite(100,580,150,20);
    b1.shapeColor = rgb(0,5,253)

    b2 = createSprite(300,580,150,20);
    b2.shapeColor = rgb(255,75,75);

    b3 = createSprite(500,580,150,20);
    b3.shapeColor = rgb(0,255,64);

    b4 = createSprite(700,580,150,20);
    b4.shapeColor = rgb(255,248,42);


    

    mr = createSprite(200,200,20,20);
    mr.shapeColor = "white";
    mr.velocityX = 4;
    mr.velocityY = 4;
   


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
    edges=createEdgeSprites();
    
 mr.bounceOff(edges);
 
if(mr.isTouching(b1)&& mr.bounceOff(b1)){
    mr.shapeColor = rgb(0,5,253);
    music.play();
}
    
if(mr.isTouching(b2)&& mr.bounceOff(b2)){
    mr.shapeColor = rgb(255,75,75);
    music.stop();
}  

if(mr.isTouching(b3)&& mr.bounceOff(b3)){
    mr.shapeColor = rgb(0,255,64);
    music.play();
}  
    
  
if(mr.isTouching(b4)&& mr.bounceOff(b4)){
    mr.shapeColor = rgb(255,248,42);
    music.stop();
}  
      
    

    
    
   

    //add condition to check if box touching surface and make it box
    drawSprites();

   
}
