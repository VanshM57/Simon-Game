let gameseq = [];
let userseq = [];
let btns = ['red','yellow','green','purple'];
let started = false;
let level = 0;
let highestScore = 0;

let h2 = document.querySelector('h2');
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    
    gameFlash(randbtn);
}

document.addEventListener("click",function(){
    if(started == false){
        started = true;
        levelUp();
    }
})

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    
    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    
    checkAns(userseq.length-1);
}

function checkAns(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        if(highestScore<level){
            highestScore = level;
            h2.innerHTML = `Game Over!, You got Highest Score <b>${highestScore}</b> <br> 
            Press any key to start game`;
        }
        else{
            h2.innerHTML = `Game Over!, Your score was <b>${level}</b> <br> Press any key to start game`;
        }
        
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },100)
        setTimeout(reset,2000);
    }
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    level = 0;
    gameseq = [];
    userseq = [];
}