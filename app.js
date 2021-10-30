block1 = document.querySelector(".gameBlock1")
block2 = document.querySelector(".gameBlock2")
block3 = document.querySelector(".gameBlock3")
block4 = document.querySelector(".gameBlock4")
block5 = document.querySelector(".gameBlock5")
block6 = document.querySelector(".gameBlock6")
block7 = document.querySelector(".gameBlock7")
block8 = document.querySelector(".gameBlock8")
block9 = document.querySelector(".gameBlock9")

const XO = (function (){
    
    let num = 0
    
        const printXO = () =>{
            num = num % 2 ;
            letter = "";
    
        if(num == 0){
                letter = "X"
        }else{
                letter = "O"
        }
        
        num++

        return letter;

        }
        return {
            printXO,
        }
})()



block1.addEventListener("click", ()=> {
    XO.printXO();
    text = document.createElement("p")
    text.textContent = letter;
    block1.appendChild(text)
})

block2.addEventListener("click", ()=> {
    XO.printXO();
    text = document.createElement("p")
    text.textContent = letter;
    block2.appendChild(text)
})

block3.addEventListener("click", ()=> {
    XO.printXO();
    text = document.createElement("p")
    text.textContent = letter;
    block3.appendChild(text)
})

block4.addEventListener("click", ()=> {
    XO.printXO();
    text = document.createElement("p")
    text.textContent = letter;
    block4.appendChild(text)
})

block5.addEventListener("click", ()=> {
    XO.printXO();
    text = document.createElement("p")
    text.textContent = letter;
    block5.appendChild(text)
})

block6.addEventListener("click", ()=> {
    XO.printXO();
    text = document.createElement("p")
    text.textContent = letter;
    block6.appendChild(text)
})

block7.addEventListener("click", ()=> {
    XO.printXO();
    text = document.createElement("p")
    text.textContent = letter;
    block7.appendChild(text)
})

block8.addEventListener("click", ()=> {
    XO.printXO();
    text = document.createElement("p")
    text.textContent = letter;
    block8.appendChild(text)
})

block9.addEventListener("click", ()=> {
    XO.printXO();
    text = document.createElement("p")
    text.textContent = letter;
    block9.appendChild(text)
})



