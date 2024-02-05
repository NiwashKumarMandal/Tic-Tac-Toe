let boxes=document.querySelectorAll(".box");
let resetButton=document.querySelector("#reset-button");
let message=document.querySelector("#msg");
let newGameBtn=document.querySelector("#new-button");
let msgContainer=document.querySelector(".msg-container")


let turnx = true; 

const winPatterns=[ 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8], 
];

const resetGame=()=>{
    turnx=true;
    enableBtn();
    msgContainer.classList.add("hidden");
}




boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnx){
            box.innerText = "X";
            turnx = false;
            box.disabled=true;
        }else{
            box.innerText = "O";
            turnx = true;
            box.disabled=true;
        }
        checkWinner();
    });
});

const enableBtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText = "";
    }
};


const disableBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const showWinner=(winner)=>{
    message.innerHTML= `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hidden");
    disableBtn();

}
const gameDraw=()=>{
    message.innerHTML= `Draw`;
    msgContainer.classList.remove("hidden");
   disableBtn();

}

const checkWinner=()=>{
    let draw=true;
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "" ){
            if(pos1val===pos2val && pos2val === pos3val){
                // console.log("winner "+pos1val);
                // message.innerText="Winner " + pos1val;
                showWinner(pos1val);
                return;
            }
        }else{
            draw=false;
        }
    }
    if(draw){
        gameDraw();
    }
}


resetButton.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",()=>{
    location.reload();
});
// newGameBtn.addEventListener("click",reload);
// function reload(){
//     location.reload();
// }
