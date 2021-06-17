let game = document.querySelector(".game");
let result = document.querySelector(".result");
let arr = ["Movies", "Food", "Buy-anything", "Socialize", "Games"];
let movies = ["harrypotter", "marvel", "Rocky", "animated-films"];

game.addEventListener("click", () => {
  if (result.childNodes) {
    let rem = result.childNodes;
    for (let j = 0; j < rem.length; j++) {
      rem[j].remove();
    }
  }
  result.style.fontSize = 300 + "px";
  let res = Math.round(Math.random() * 10) % 6;
  if (res == 0) {
    res = res + 1;
  }
  for (let i = 1; i <= arr.length; i++) {
    if (i == res) {
      let child = document.createElement("button");
      child.classList.add(arr[i - 1]);
      child.classList.add("add");
      child.textContent = arr[i - 1] + " " + i ;
      result.appendChild(child);
    }
  }
});

/*
1-movie ["harrypotter","marvel","Rocky","animated-films"]
2-food
3-buy anything
4-talk to anyone
5-Games
*/
