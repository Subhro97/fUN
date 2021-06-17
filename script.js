let game = document.querySelector(".game");
game.addEventListener("click",()=>{
    let result = document.querySelector(".result");
    result.style.fontSize = 300+"px";
    result.style.textAlign = "center";
    result.textContent = Math.round(Math.random()*10)%6;
})
