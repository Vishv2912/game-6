class Game {
    constructor() {
        console.log("New Game")

        
    }
    async getGameState() {
        await database.ref("gameState").on("value", function (data) {
            gameState = data.val()
            //console.log("gameState", gameState)
        })
    }
    updateGameState(state) {
        database.ref("/").update({
            gameState: state
        })
    }
    getPlayerCount() {
        database.ref("playerCount").on("value", (data) => {
            playerCount = data.val();
           // console.log("playerCount", playerCount)
        })
    }
    updatePlayerCount(count) {
        database.ref("/").update({
            playerCount: count
        })
    }
    start() {
        console.log("Start State")
        player = new Player();
        otherPlayer = new Player();
        form = new Form()
    }
    wait() {
        form.hideall()
        clear();
        textSize(18);
        text("Waiting for other player to join.....", width / 2 - 120, 350)
    }
    play() {
        //console.log("Play State")
    background("blue")
diamond.collide(guardSprite);
 

form.hideall()

        shouldWait = false
        form.msg.hide()
        drawSprites()
        player.getInfo();
        otherPlayer.getInfo();
        maze.collidePlayer()
        if (keyIsDown(UP_ARROW))
        {
        player.updatePosition(0,-4)
            player.direction = "Back"
            player.animation=player.character + "BackMoving"
            player.updateAnimation()
        }
        else if (keyIsDown(DOWN_ARROW))
        {
            player.updatePosition(0,4)
        
            player.direction = "Front"
            player.animation= player.character + "FrontMoving"
            player.updateAnimation()
        
        }
        else if (keyIsDown(LEFT_ARROW))
        {
            player.updatePosition(-4,0)
        
            player.direction = "Left"
            player.animation = player.character + "LeftMoving"
     
            player.updateAnimation()
        }
        else if (keyIsDown(RIGHT_ARROW))
        {
            player.updatePosition(4,0)
        
            player.direction = "Right"
            player.animation=player.character + "RightMoving"
     
            player.updateAnimation()
        }
        else
        {
            player.animation  = player.character + player.direction + "Standing"

            player.updateAnimation()
        }
        player.sprite.changeAnimation(player.animation, player.animation)
        otherPlayer.sprite.changeAnimation(otherPlayer.animation, otherPlayer.animation)
if(player.character=="theif" && player.sprite.isTouching(diamond)){
game.updateGameState(3)
}
    if(player.sprite.isTouching(otherPlayer.sprite)){
game.updateGameState(3)
}

    }
end(){

    console.log("EndState")
    if (player.character == "guard")
    {
        if (player.sprite.isTouching(otherPlayer.sprite))
        {     fill(red)
            textSize(38);
            text("Well done! You caught the thief", width / 2, 350)
        }
        if (otherPlayer.sprite.isTouching(diamondSprite))
        {
            diamondSprite.visible = false
            
            fill("red")
            
            textSize(38);
            text("You lose! Thief got the diamond", width / 2, 350)
        }
    }
    else
    {
        if (player.sprite.isTouching(otherPlayer.sprite))
        { 
            fill("red")
            textSize(38);
            text("You are caught! You lose!", width / 2 , 350)
        }
        if (player.sprite.isTouching(diamondSprite))
        {
            diamondSprite.visible = false
            fill("red")
            textSize(38);
            text("YOu got the diamond! You win", width/2, 350)
        }

    }
    drawSprites()






}


}