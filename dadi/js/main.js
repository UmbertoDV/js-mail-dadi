const playButton = document.querySelector(".play-button");
const titlePlayerNumber = document.querySelector(".number-player");
const titleIaNumber = document.querySelector(".number-ia");
const winnerPlayer = document.querySelector(".winner");
// console.log(playButton);

playButton.addEventListener("click",
    function(){
        const randomNumberIA = Math.floor(Math.random() * 6) + 1;
        const randomNumberPlayer = Math.floor(Math.random() * 6) + 1;

        titlePlayerNumber.innerHTML += `${randomNumberPlayer}`;
        titleIaNumber.innerHTML += `${randomNumberIA}`;
        
        if(randomNumberIA > randomNumberPlayer){
            winnerPlayer.innerHTML += `Ha vinto la IA con ${randomNumberIA}`
        }
        else if(randomNumberIA < randomNumberPlayer){
            winnerPlayer.innerHTML += `Ha vinto il Giocatore con ${randomNumberPlayer}`
        }
        else if(randomNumberIA == randomNumberPlayer){
            winnerPlayer.innerHTML += `PAREGGIO`
        }
    }

)