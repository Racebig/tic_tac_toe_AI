// Player Class: Represents a Player

class Player {
    constructor(name, marker, turn, score){
        this.name = name;
        this.mark = marker;
        this.turn = turn;
        this.score = score;
    }
}

// GameBoard module: Represents the gameboard

const gameBoard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];
})();

//DOM Module: Handles DOM Tasks

const DOM = (() => {
    const titleWrapper = document.querySelector(".title-wrapper");
    const startButton = document.getElementById("start-button");
    const playerForm = document.getElementById("player-form");
    const playerInput = document.getElementById("player-input");
    const gameBoard = document.querySelector(".game-board");
    const createPlayer = (pName) => {
        player1 = new Player(pName, "X", "true", 0);
    }

    const shiftUp = () => {
        let pName = playerInput.value;
        if(pName){
        createPlayer(pName);
        titleWrapper.style.animation = "title 1.5s";
        titleWrapper.style.top = "5%";
        titleWrapper.style.animationFillMode = "forwards";
        startButton.style.display = "none";
        playerForm.style.display = "none";
        displayBoard();
        }
    }

    const displayBoard = () => {
        gameBoard.style.display = "grid";
        gameBoard.style.animation = "board";
        gameBoard.style.animationFillMode = "forwards";
    }
    return {
        shiftUp,
        displayBoard
    }
})();

