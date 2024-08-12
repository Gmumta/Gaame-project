let gameSeq = [];
let userSeq = [];

let btns = ["red", "green", "blue", "orange"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");
 

document.addEventListener("keypress", function() {
  if (!started) {
    console.log("game is started");
    started = true;

    levelUp();
  }
});

function btnFlash(btn){
  btn.classList.add("flash");
  setTimeout(function (){
    btn.classList.remove("flash");
  }, 250);
}

function levelUp(){
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3); // should be 4 to include all buttons
  let randColor = btns[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);
  // console.log(randIdx);
  // console.log(randColor);

  gameSeq.push(randColor);

  btnFlash(randbtn);
}
function checkAns(){
  let idx = level -1;

  if (userSeq[idx] === gameSeq[idx]){
    if (userSeq.length == gameSeq.length){
      levelUp();
    }
  }
  else{
    h2.innerHTML = `Game Over! Your score was <b>${level}</b>. Press any key to start.`;
    document.querySelector("body").style.color = "red";
    setTimeout(function() {
      document.querySelector("body").style.color = "white";
    }, 150);
    started = false;
    gameSeq = [];
    level = 0;
  }
}

function btnPress(){
  // console.log("btn was pressed");

  let btn = this;
  btnFlash(btn);
  checkAns();

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
  btn.addEventListener("click", btnPress);
}
