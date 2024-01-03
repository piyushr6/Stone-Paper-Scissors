// let naam=prompt("Enter your name :");
// let username=document.getElementById("username");
// username.innerText = naam;

let imgbtn= document.querySelectorAll("img");
let stone=document.querySelector("#stone");
let paper=document.querySelector("#paper");
let scissor=document.querySelector("#scissor");

var userScore=0;
var compScore=0;

var userChoice,compChoice;

const gameLogic = (userChoice) => {

    if(compChoice===userChoice){
    console.log("Tie");
    }
   
    else{
        let sum=compChoice+userChoice;
   
        if(sum===3){
            if(userChoice===1){
                console.log("computer wins");

            }
            else{
                console.log("user wins");
            }
        }
        else if(sum===4){
            if(userChoice===1){
                console.log("user wins");
            }
            else{
                console.log("computer wins");
            }
        }
        else if(sum===5){
            if(userChoice===2){
                console.log("computer wins");
            }
            else{
                console.log("user wins");
            }
        }
    }
}

stone.addEventListener("click", () => {
    userChoice=1;
    compChoice = Math.ceil(Math.random()*3);
    gameLogic(userChoice);  
});

paper.addEventListener("click", () => {
    userChoice=2;
    compChoice = Math.ceil(Math.random()*3);
    gameLogic(userChoice);  
});

scissor.addEventListener("click", () => {
    userChoice=3;
    compChoice = Math.ceil(Math.random()*3);
    gameLogic(userChoice);  
});