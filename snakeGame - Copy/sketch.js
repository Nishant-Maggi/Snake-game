
var pellet;

var engine,world;

var snake;

var food;

function setup() {

  createCanvas(600,600);

  snake = new Snake(300,300);

}

function draw() {

  background(48,83,200);

  food = new Pellet
  food.display();

  snake.display();  

  drawSprites();

  frameRate(10);
}



function keyPressed(){
  if(keyCode === 37){

    snake.sqr.velocityX = -20;
    snake.sqr.velocityY = 0;
    

  }else if(keyCode === 38){

    snake.sqr.velocityY = -20;
    snake.sqr.velocityX = 0;
          
        }else if(keyCode === 39){

          snake.sqr.velocityX = 20;
          snake.sqr.velocityY = 0;
                
              }else if(keyCode === 40){

                  snake.sqr.velocityY = 20;
                  snake.sqr.velocityX = 0;
                      
                    }      
}
