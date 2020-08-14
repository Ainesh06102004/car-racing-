class Game{
    constructor(){
        
    }
    
    getstate(){
      var gamestateref = database.ref('gamestate');
      gamestateref.on("value", function (data){
          gamestate = data.val();
      });
      console.log(gamestate);
    }

    updatestate(state){
        database.ref('/').update({
            gamestate: state
        });
    }

    async start(){
        if(gamestate === 0){
            player = new Player();
            var playercountref = await database.ref('playerCount').once("value"); 
            if(playercountref.exists()){
                playercount = playercountref.val();
                player.getPlayercount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);

        cars = [car1,car2,car3,car4];
    }
    play(){
       form.hide();
    }
}   