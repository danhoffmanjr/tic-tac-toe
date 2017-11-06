var player1 = document.getElementById("input-player1-name"),
    player2 = document.getElementById("input-player2-name"),
    markerSelect = document.getElementById("player-mark"),
    player1Marker = '<span class="O-marker">O</span>',
    player2Marker = '<span class="X-marker">X</span>',
    turn = "1",
    gameStatus = "playing",
    counter = 0,
    btnStart = document.getElementById("btn-start"),
    setupAside = document.getElementById("setup"),
    gameBoard = Array.from(document.querySelectorAll("#game-board>div")),
    tileValues = gameBoard.map(function(item) {return item.innerHTML;}),
    tile = document.getElementById("game-board").addEventListener("click", setTile),
    tile1 = document.getElementById("sq1"),
    tile2 = document.getElementById("sq1"),
    tile3 = document.getElementById("sq3"),
    tile4 = document.getElementById("sq4"),
    tile5 = document.getElementById("sq5"),
    tile6 = document.getElementById("sq6"),
    tile7 = document.getElementById("sq7"),
    tile8 = document.getElementById("sq8"),
    tile9 = document.getElementById("sq9");
    // console.log(tileValues);


function startGame(player1Name, player2Name, marker){
    if(player1Name == ""){
        alert("Player One, enter your name to begin!");
    } else {
        player1 = player1Name;
    }
    if(player2Name == ""){
        alert("Player Two, enter your name to begin!");
    } else {
        player2 = player2Name;
    }
    if(marker == "select"){
        alert("Player One, choose X's or O's to begin!");
    } else if(marker == "O"){
        player1Marker = '<span class="O-marker">O</span>';
        player2Marker = '<span class="X-marker">X</span>';
    } else {
        player1Marker = '<span class="X-marker">X</span>';
        player2Marker = '<span class="O-marker">O</span>';
    }
    console.log(player1 + " will be " + player1Marker + ". " + player2 + " will be " + player2Marker + ".");
}

btnStart.addEventListener("click", function(){
    startGame(player1.value, player2.value, markerSelect.value);
    gameStatus = "playing";
    turn = 1;
});

function setTile(event){
    var tile = document.getElementById(event.target.id);
    if(gameStatus == "playing"){
        if(tile.textContent == ""){
            if(turn == 1){
                tile.innerHTML = player1Marker;
                tileValues = gameBoard.map(function(item) {return item.innerHTML;});
                counter++;
                isWinner(tileValues, player1Marker);
                turn = 2;
                console.log(counter);
            } else if(turn == 2){
                tile.innerHTML = player2Marker;
                tileValues = gameBoard.map(function(item) {return item.innerHTML;});
                counter++;
                isWinner(tileValues, player2Marker);
                turn = 1;
                console.log(counter);
            }
        } else {
            alert("That tile has already been played. Choose another.");
        }
    }
}

function isWinner(array, player){
    if (array[0] == player && array[1] == player && array[2] == player ||
        array[3] == player && array[4] == player && array[5] == player ||
        array[6] == player && array[7] == player && array[8] == player ||
        array[0] == player && array[3] == player && array[6] == player ||
        array[1] == player && array[4] == player && array[7] == player ||
        array[2] == player && array[5] == player && array[8] == player ||
        array[0] == player && array[4] == player && array[8] == player ||
        array[2] == player && array[4] == player && array[6] == player
        ){
            if(player == player1Marker){
                gameStatus = "";
                alert("Player 1 Wins!");
            } else {
                gameStatus = "";
                alert("Player 2 Wins!");
            }
        } else if (counter == 9) {
            alert("The Game is a Tie!");
        }
}