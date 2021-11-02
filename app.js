block1 = document.querySelector(".gameBlock1")
block2 = document.querySelector(".gameBlock2")
block3 = document.querySelector(".gameBlock3")
block4 = document.querySelector(".gameBlock4")
block5 = document.querySelector(".gameBlock5")
block6 = document.querySelector(".gameBlock6")
block7 = document.querySelector(".gameBlock7")
block8 = document.querySelector(".gameBlock8")
block9 = document.querySelector(".gameBlock9")

const gameBoard = (function (getPos, storeValue){

const positionsFunctions = function (){

    const positions = {
        position1: "position1",
        position2: "position2",
        position3: "position3",
        position4: "position4",
        position5: "position5",
        position6: "position6",
        position7: "position7",
        position8: "position8",
        position9: "position9",
    }
}
    

    for (let key in positions){
        if(positions[key] === getPos){
            positions[key] = storeValue
            console.log("ayo")
        }
    }

    return positions

})

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
    if(block1.childElementCount === 0){
    XO.printXO();
    text = document.createElement("p")
    text.textContent = letter;
    block1.appendChild(text)
    console.log (gameBoard('position1', letter))
    }
})

block2.addEventListener("click", ()=> {
    if(block2.childElementCount === 0){
    XO.printXO();
    text = document.createElement("p")
    text.textContent = letter;
    block2.appendChild(text)
    gameBoard('position2', letter)
    }
})

block3.addEventListener("click", ()=> {
    if(block3.childElementCount === 0){
        XO.printXO();
        text = document.createElement("p")
        text.textContent = letter;
        block3.appendChild(text)
        console.log (gameBoard('position3', letter))
    }
})

block4.addEventListener("click", ()=> {
    if(block4.childElementCount === 0){
        XO.printXO();
        text = document.createElement("p")
        text.textContent = letter;
        block4.appendChild(text) 
        gameBoard('position4', letter)
    }  
})

block5.addEventListener("click", ()=> {
    if(block5.childElementCount === 0){
    XO.printXO();
    text = document.createElement("p")
    text.textContent = letter;
    block5.appendChild(text)
    gameBoard('position5', letter)
    }
    
})

block6.addEventListener("click", ()=> {
    if(block6.childElementCount === 0){
    XO.printXO();
    text = document.createElement("p")
    text.textContent = letter;
    block6.appendChild(text)
    gameBoard('position6', letter)
    }
    
})

block7.addEventListener("click", ()=> {
    if(block7.childElementCount === 0){
    XO.printXO();
    text = document.createElement("p")
    text.textContent = letter;
    block7.appendChild(text)
    gameBoard('position7', letter)
    }
    
})

block8.addEventListener("click", ()=> {
    if(block8.childElementCount === 0){
    XO.printXO();
    text = document.createElement("p")
    text.textContent = letter;
    block8.appendChild(text)
    gameBoard('position8', letter)
    }
    
})

block9.addEventListener("click", ()=> {
    if(block9.childElementCount === 0){
    XO.printXO();
    text = document.createElement("p")
    text.textContent = letter;
    block9.appendChild(text)
    gameBoard('position9', letter)
    }  
})



