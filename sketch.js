var stillRectangle,movingRectangle;

function setup() {
  createCanvas(800,400);
  stillRectangle = createSprite(400, 200, 50, 100);
  stillRectangle.shapeColor="red"
  movingRectangle = createSprite(700, 200, 100, 50);
  movingRectangle.shapeColor="red"

}

function draw() {
  background(255,255,255);
  movingRectangle.y=mouseY
  movingRectangle.x=mouseX
   console.log(movingRectangle.x-stillRectangle.x)
//console.log(movingRectangle.x)
//console.log(stillRectangle.x)
console.log(movingRectangle.x-stillRectangle.x)
if(movingRectangle.x-stillRectangle.x<movingRectangle.width/2+stillRectangle.width/2
  &&stillRectangle.x-movingRectangle.x<movingRectangle.width/2+stillRectangle.width/2
 && movingRectangle.y-stillRectangle.y<movingRectangle.width/2+stillRectangle.width/2
  &&stillRectangle.y-movingRectangle.y<movingRectangle.width/2+stillRectangle.width/2
  ){
stillRectangle.shapeColor="green"
movingRectangle.shapeColor="green"
}
else{

  stillRectangle.shapeColor="red"
  movingRectangle.shapeColor="red"

}

  drawSprites();
}