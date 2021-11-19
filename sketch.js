//In start state, form is displayed. Player enters name and chooses a character.
const START = 0;
//If otherPlayer has not joined, first player waits in wait state by 
// shouldWait variable to true( without changing gameState in db as that will change the state 
//for other player as well)
const WAIT = 1;
//When both the players join, go to play state. Display maze and play the game
const PLAY = 2;
const END = 3;

var gameState, playerCount
var form, game, player, otherPlayer;
var reset, maze;
var shouldWait = false
var database;
var formBackground
var guardLeftMoving, guardRightMoving, guardFrontMoving, guardBackMoving, guardLeftStanding, guardRightStanding, guardFrontStanding, guardBackStanding
var guardSprite, thiefSprite
var wall = [];

//diamond==
var diamond ,diamondAnimation
 var bg2Image

var walkSound;
 //walls
//horizontalwall,verticalWall;

function preload() {
bg2Image=loadImage("images/bg2.png")

  formBackground = loadImage("images/bg.jpeg")
  guardLeftMoving = loadAnimation("images/guard_left_0.png", "images/guard_left_1.png", "images/guard_left_2.png", "images/guard_left_3.png",)
  guardRightMoving = loadAnimation("images/guard_right_0.png", "images/guard_right_1.png", "images/guard_right_2.png", "images/guard_right_3.png",)
  guardFrontMoving = loadAnimation("images/guard_front_0.png", "images/guard_front_1.png", "images/guard_front_2.png", "images/guard_front_3.png",)
  guardBackMoving = loadAnimation("images/guard_back_0.png", "images/guard_back_1.png", "images/guard_back_2.png", "images/guard_back_3.png",)
  guardLeftStanding = loadAnimation("images/guard_left.png")
  guardRightStanding = loadAnimation("images/guard_right.png")
  guardFrontStanding = loadAnimation("images/guard_front.png")
  guardBackStanding = loadAnimation("images/guard_back.png")

  //load thief images here
  thiefLeftMoving = loadAnimation("images/theifLeftRun1.png", "images/theifLeftRun2.png", "images/theifLeftRun3.png")
  thiefRightMoving = loadAnimation("images/theifRightRun1.png", "images/theifRightRun2.png", "images/theifRightRun3.png")
  thiefFrontMoving = loadAnimation("images/theifFrontRun1.png", "images/theifStandFront.png", "images/theifFrontRun2.png")
  thiefBackMoving = loadAnimation("images/theifBackRun1.png", "images/theifBackRun2.png", "images/theifBackRun3.png")
  thiefLeftStanding = loadAnimation("images/theifLeftRun2.png")
  thiefRightStanding = loadAnimation("images/theifRightRun2.png")
  thiefFrontStanding = loadAnimation("images/theifStandFront.png")
  thiefBackStanding = loadAnimation("images/theifBackRun2.png")

  ///diamond Animation
diamondAnimation=loadImage("images/diamondImage.png")
///walllsImages==
//horizontalwall=loadImage("images/horizontalWall.png")
//verticalwall=loadImage("images/verticalWall.png")
}

function setup() {
  createCanvas(windowWidth - 30, 700); //fixed window height because maze is 750 by 750 pixels
  console.log(displayWidth, displayHeight)

  database = firebase.database();

  //Read gameState and playerCount from database as soon as the game begins
  //(setup() is called only once and it's called when the game starts)
  game = new Game();
  game.getGameState();
  game.getPlayerCount();
  game.start();

  //create two dummy sprites guardSprite and thiefSprite to store the animation of the sprites
  guardSprite = createSprite(50, 50, 10, 10);
  guardSprite.addAnimation("guardFrontStanding", guardFrontStanding)
  guardSprite.addAnimation("guardBackStanding", guardBackStanding)
  guardSprite.addAnimation("guardRightStanding", guardRightStanding)
  guardSprite.addAnimation("guardLeftStanding", guardLeftStanding)
  guardSprite.addAnimation("guardFrontMoving", guardFrontMoving)
  guardSprite.addAnimation("guardBackMoving", guardBackMoving)
  guardSprite.addAnimation("guardRightMoving", guardRightMoving)
  guardSprite.addAnimation("guardLeftMoving", guardLeftMoving)
  guardSprite.scale = 0.7
  guardSprite.x = width / 2 - 300
  guardSprite.y = 30
  guardSprite.visible = false

  thiefSprite = createSprite(50, 50, 10, 10);
  thiefSprite.addAnimation("thiefFrontStanding", thiefFrontStanding)
  thiefSprite.addAnimation("thiefBackStanding", thiefBackStanding)
  thiefSprite.addAnimation("thiefRightStanding", thiefRightStanding)
  thiefSprite.addAnimation("thiefLeftStanding", thiefLeftStanding)
  thiefSprite.addAnimation("thiefFrontMoving", thiefFrontMoving)
  thiefSprite.addAnimation("thiefBackMoving", thiefBackMoving)
  thiefSprite.addAnimation("thiefRightMoving", thiefRightMoving)
  thiefSprite.addAnimation("thiefLeftMoving", thiefLeftMoving)
  thiefSprite.scale = 0.6
  thiefSprite.x = width / 2 + 300
  thiefSprite.y = height / 2 + 300
  thiefSprite.visible = false

  //to reset database while testing
  reset = createButton("Reset");
//diamond Sprite 
diamond=createSprite(width/2-330,20,10,10)
diamond.addImage(diamondAnimation);
diamond.visible=false;
diamond.scale=0.1

}

function draw() {
  background("#e4e4e4")
  console.log(player);

  //call form.display() in draw function as we have to check continuously 
  //the character chosen by the player and disable other character button accordingly
  if (gameState == 0)
  {
    form.display();
  }
  //if shouldWait is true, player waits in wait state)
  if (shouldWait)
  {
    game.wait()
  }
  //When both the players join, go to play state. Display maze and play the game
  if (playerCount == 2)
  {
    clear();
    game.updateGameState(2)
    game.play()
  }

if(gameState==3){
  game.end();
}

  //display reset button in all states
  reset.position(width - 100, 20);
  reset.mousePressed(() => {
    database.ref("/").update({
      playerCount: 0,
      gameState: 0
    });
  })

}