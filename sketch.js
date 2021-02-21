var Canvas, backgroundImage;
var Gamestate = 0;
var PlayerCount;
var database;
var Form, player, game;

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();

  Game = new Game();
  Game.getState();
  Game.start();

}
function draw(){

}
