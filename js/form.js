class Form {
    constructor() {

        this.guard = createButton("");
        this.thief = createButton("");
        this.story = createElement("p");
        this.inputName = createInput("Enter Your Name", "Player")
        this.guardTask = createElement("p")
        this.thiefTask = createElement("p")
        this.play = createButton("Let's Play")
        this.msg = createElement("p")

        console.log("Form Created")

    }
    hideall() {
        this.guard.hide()
        this.thief.hide()
        this.story.hide()
        this.inputName.hide()
        this.guardTask.hide()
        this.thiefTask.hide()
        this.play.hide()

    }
    display() {

        console.log("Form displayed")
        background(formBackground)

        //story is hidden for now. think about how the story can be displayed 
        this.story.html("There Was a millionaire. He loved diamonds,and all the diamonds were worth crores of rupees./n One day he wanted to go abroad for work, so he put his favorite diamond in a maze and put a bodyguard to protect it./n As soon as a gang of thieves heard this news, they sent 2 of the sharpest thieves in their gang to steal the diamond./n Let's see if the bodyguard catches the thieves or The thief was cleverly stealing diamonds ")
        this.story.position(10, 100)
        this.story.style("fontSize", "18px")
        this.story.style("fontWeight", "12")

        this.story.hide()

        this.inputName.position(width / 2 - 100, 250)
        this.inputName.style("width", "200px")
        this.inputName.style("height", "30px")
        this.inputName.style("borderRadius", "15px")
        this.inputName.style("borderWidth", "3px")
        this.inputName.style("borderColor", "#489f81")

        this.thief.position(20, 320)
        this.thief.style("backgroundColor", "#FFFFFF00")
        this.thief.style("width", "300px")
        this.thief.style("height", "200px")
        //this.thief.style("borderColor", "#000000")

        this.guard.position(width - 350, 320)
        this.guard.style("backgroundColor", "#FFFFFF00")
        this.guard.style("width", "300px")
        this.guard.style("height", "200px")
        //this.guard.style("borderColor", "#000000")

        this.play.position(width / 2 - 100, 500)
        this.play.style("fontSize", "18px")
        this.play.style("fontWeight", "bold")
        this.play.style("backgroundColor", "#5fcca6")
        this.play.style("width", "200px")
        this.play.style("height", "50px")
        this.play.style("borderRadius", "10px")
        this.play.style("borderWidth", "3px")
        this.play.style("borderColor", "#2e2d2d")

        if (playerCount == 2)
        {
            this.guard.hide();
            this.thief.hide();
        }
        else if (playerCount == 1)
        {
            database.ref("players/player1/character/").on("value", (data) => {
                otherPlayer.character = data.val();
            })
        }

        this.guard.mousePressed(() => {

            this.inputName.hide()
            this.play.show()

            player.character = "guard"
            player.name = this.inputName.value();

            this.thiefTask.hide()
            this.guardTask.show()
            this.guardTask.html("Hello " + player.name + ". As " + player.character + " Your tasks are  1.  2.")
            this.guardTask.position(width / 2 - 200, height / 2)
            this.guardTask.style("width", "400px")
            this.guardTask.style("height", "200px")
            this.guardTask.style("fontSize", "18px")
            this.guardTask.style("fontWeight", "12")
            this.guardTask.style("backgroundColor", "white")

        })

        this.thief.mousePressed(() => {
            this.inputName.hide()
            this.play.show()

            player.character = "thief";
            player.name = this.inputName.value();

            this.guardTask.hide();
            this.thiefTask.show();
            this.thiefTask.html("Hello " + player.name + ". As " + player.character + " Your tasks are /n 1. /n 2.")
            this.thiefTask.position(200, 300)
            this.thiefTask.style("width", "400px")
            this.thiefTask.style("height", "200px")
            this.thiefTask.style("fontSize", "18px")
            this.thiefTask.style("fontWeight", "12")
            this.thiefTask.style("backgroundColor", "#e4e4e4")
        })

        this.play.mousePressed(() => {
            if (player.character == null)
            {
                alert("please select your character")
            }
            else if (player.character == otherPlayer.character)
            {
                alert(otherPlayer.character + " is already selected by another player. Please choose another character")
            }
            else
            { //task to be done before going to play state
                if (player.character == "guard")
                {
                    player.sprite = guardSprite
                    otherPlayer.sprite = thiefSprite
                    player.animation= "guardFrontStanding"
                    player.sprite.visible = true
                    otherPlayer.sprite.visible = true

                }
                else
                {
                    player.sprite = thiefSprite;
                    otherPlayer.sprite = guardSprite;
                    player.animation="theifFrontStanding"
                    otherPlayer.animation="guardFrontStanding"
                    player.sprite.visible = true
                    otherPlayer.sprite.visible = true

                }
                diamond.visible=true;
                playerCount += 1;
                player.index = playerCount;
                player.updatePlayer();
                game.updatePlayerCount(playerCount);
                if(player.index==1){
                    otherPlayer.index = 2
                }
                else{
                    otherPlayer.index=1
                }
                
                shouldWait = true
                maze = new Maze(width / 2 - 350);
               
            }
        })
    }
}















