const gameOverwin = () => {
    const letterElem = document.querySelectorAll(".letter");
    let guessWord = "";

    letterElem.forEach((v) => {
        guessWord += v.innerText.toLowerCase();
    });
   

    if (guessWord === word.toLowerCase()) {
        gameOver(false);
     
    }
};


