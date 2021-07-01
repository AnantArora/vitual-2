//Create variables here
var food

function preload(){
	//load images here
  dogHappy=loadImage("images/dogImg.png")
  dogSad=loadImage("images/dogImg1.png")
  dogEating=loadImage("images/eating.png")
  bg = loadImage("images/PHOTO1.jpg");
  //milk1=loadImage("image/milk.jpg")
  
}

function setup() {
	createCanvas(1300, 700);
  
  database= firebase.database()


  database.ref('food').on("value",readPosition)
  milk1=new Food()
  milk1.getfeedTime()


  dog=createSprite(1090,500,50,50)
  dog.addImage(dogHappy)
  dog.scale=0.5
}


function draw() {  
background(bg)
  drawSprites();
  
 textSize(40)
 textFont("Broadway");
   fill("yellow");
   stroke("red");
   strokeWeight(5);
  text("Last fed at :  "+ milk1.feedtime , 50,50)
  milk1.buttons()
  milk1.milkImg()
  

   if(food===0){
    dog.addImage(dogSad)
    dog.scale=0.5
   }

  

   
 
   
}

function readPosition(data){

  food=data.val()
}





function writeStock(data){
    database.ref('/').set({
      food:data,
      feedtime:hour()
      
    })

}

