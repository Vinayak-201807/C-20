var r1,r2;

function setup() {
  createCanvas(1200,800);
 r1 = createSprite(300,500, 50, 80);
 r1.shapeColor = "green";
 r1.debug = true;

 r2 = createSprite(200,400,80,30);
 r2.shapeColor = "green";
 r2.debug = true;
}


function draw() {
  background(255,255,255);
  
  r2.y = World.mouseY;

  r2.x = World.mouseX;

  if(r2.x - r1.x < r1.width/2 + r2.width/2 
    && r1.x - r2.x < r1.width/2 + r2.width/2 
    && r2.y - r1.y < r1.height/2 + r2.height/2 
    && r1.y - r2.y < r1.height/2 + r2.height/2 )  {
    r1.shapeColor = "red";
    r2.shapeColor = "red";
  } 
    else {
      r1.shapeColor = "green";
      r2.shapeColor = "green";
    }
  

  drawSprites();
}