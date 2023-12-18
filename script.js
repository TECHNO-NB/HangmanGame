const keyboard=document.querySelector(".keyboard");
const h4=document.querySelector("h4");
const wordDisplay=document.querySelector(".word-display");
const chance=document.querySelector(".chance");
const img=document.querySelector(".img");

let count=0;
// adding keyboard
for(let i=97; i<=122;i++){
    const button=document.createElement("button");
    button.classList.add("btn");
    button.innerText=String.fromCharCode(i)
    keyboard.appendChild(button);
}

// get all quetions from wordlist.js
const randomIndex=Math.floor(Math.random()*wordList.length);
const {word,hint}=wordList[randomIndex];


const gameOver=(bool)=>{

}

const  matchWord=(val)=>{
 const matches=word.split("").reduce((acc,el,index)=>
    (el==val.toLowerCase() ? [...acc,index] :acc),[]

 )
    if(matches.length===0){
        count++;
        chance.innerText=`${count}/6`;
        count >=6 && setTimeout(()=> gameOver(true),200)
    }else{
        matches.forEach((v)=>{
            const letterElem=document.querySelectorAll(".letter");
            letterElem[v].innerText=val;
            letterElem[v].classList.add("guess")
        })
    }
 
}

const loadQuestion=()=>{
  h4.innerText=`Hint: ${hint}`;
  Array.from({length:word.length},()=>{
    const liTag=document.createElement("li");
    liTag.classList.add("letter");
    wordDisplay.appendChild(liTag)
})

 document.querySelectorAll(".btn").forEach((v)=>{
    v.addEventListener("click",(e)=>{
        matchWord(e.target.innerText)
       
    })
 })
}

loadQuestion();
