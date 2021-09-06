var dog,sadDog,happyDog, happyDogImage;
var feed, foods
var addFood
var foodObj


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDogImage=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
 // food = new Food()

  var button1 = createButton("Feed Dog")
  button1.position(400, 375)
  button1.mousePressed(feedDog)

  var button2 = createButton("Add Food")
  button2.position(600, 375)
  button2.mousePressed(addFood)
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
function addFood(){
  foods++
  database.ref('/').update({
    Food: foods
  })
}

function feedDog(){
    happyDog.addImage("dog", happyDogImage)
    if(foodObj.getFoodStock()<=0){
      foodObj.updateFoodStock(foodObj.getFoodStock()*0)
    }
    else{
      foodObj.updateFoodStock(foodObj.getFoodStock()-1)
    }
  }

