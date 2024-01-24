let naam=prompt("Enter your name :");
let username=document.getElementById("username");
username.innerText = naam;

let imgbtn= document.querySelectorAll("img");
let stone=document.querySelector("#stone");
let paper=document.querySelector("#paper");
let scissor=document.querySelector("#scissor");
let res=document.getElementById("res");

let userScore=document.getElementById("userscore");
let compScore=document.getElementById("compscore");
let msg=document.querySelector(".result");


let us=0;
var cs=0;

res.addEventListener("click" , () => {
    
    us=0;
    cs=0;
    compScore.innerText=cs;
    userScore.innerText=us;
    msg.innerText= " ";
    msg.style.display = "none";
});

if(us===0 && cs===0){
    msg.style.display = "none";
}


// let userScore=document.getElementById("userscore");
// let compScore=document.getElementById("compscore");
var userChoice,compChoice;

const gameLogic = (userChoice) => {

    if(compChoice===userChoice){
    msg.style.display = "flex";
    console.log("Tie");
    msg.innerText="It's a tie!";
    }
   
    else{
        msg.style.display = "flex";
        let sum=compChoice+userChoice;

        if(sum===3){
            if(userChoice===1){
                cs++;
                console.log("computer wins");
                compScore.innerText=cs;
                msg.innerText= `${a[compChoice-1]} beats your ${a[userChoice-1]}. You lose`;
            }
            else{
                us++;
                console.log("user wins");
                userScore.innerText=us;
                msg.innerText= `${a[userChoice-1]} beats ${a[compChoice-1]}. You win!`;
            }
        }
        else if(sum===4){
            if(userChoice===1){
                us++;
                console.log("user wins");
                userScore.innerText=us;
                msg.innerText= `${a[userChoice-1]} beats ${a[compChoice-1]}. You win!`;
            }
            else{
                cs++;
                console.log("computer wins");
                compScore.innerText=cs;
                msg.innerText= `${a[compChoice-1]} beats your ${a[userChoice-1]}. You lose`;
            }
        }
        else if(sum===5){
            if(userChoice===2){
                cs++;
                console.log("computer wins");
                compScore.innerText=cs;
                msg.innerText= `${a[compChoice-1]} beats your ${a[userChoice-1]}. You lose`;
            }
            else{
                us++;
                console.log("user wins");
                userScore.innerText=us;
                msg.innerText= ` ${a[userChoice-1]} beats ${a[compChoice-1]}. You win!`;
            }
        }
    }
}

const a=["Stone","Paper","Scissor"];

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