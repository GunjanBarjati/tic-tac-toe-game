let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#newBtn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msgContainer");

let count = 0;
let playerO = true;

const winPatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(playerO === true){
            box.innerText = "O";
            playerO = false;
            box.classList.add("newColor");
        }
        else{
            box.innerText = "X";
            playerO = true;
            box.classList.remove("newColor");
        }
        box.disabled = true;
        count++;
        checkWinner();
    })
})

let showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is Player ${winner}`;
    msgContainer.classList.remove("hide");
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

let checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val);
                showWinner(pos1val);
                return;
            }
        }
        if(count==9){
            msg.innerText = "It`s a draw";
            msgContainer.classList.remove("hide");
        }
    }
}
newGameBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        playerO = true;
        count =0;
        box.innerText = "";
        box.disabled = false;
        msgContainer.classList.add("hide");
    })
})

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        playerO = true;
        count = 0;
        box.innerText = "";
        box.disabled = false;
        msgContainer.classList.add("hide");
    })
})