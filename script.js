const keyboard = document.querySelector(".keyboard");

for (var i = 97; i <= 122; i++) {
  let button = document.createElement("button");
  button.innerHTML = String.fromCharCode(i);
  keyboard.appendChild(button);
}

const loadQuestion = () => {
  const randomIndex = Math.floor(Math.random() * wordList.length);
  const { word, hint } = wordList[randomIndex];
};


