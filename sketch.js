var database;
var form, game;
var playercount = 0;
var player;
var gamestate = 0;
var car1,car2,car3,car4,cars;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth - 5,displayHeight - 150);

  game = new Game();
  game.getstate();
  game.start();

}

function draw(){
  background("white");
  
  if(playercount === 4){
    game.updatestate(1);
  }
   if(gamestate === 1){
     game.play();
   }
}