function rollDice(){
    const dice=document.getElementById("dice").value;
    const diceResult=document.getElementById("diceResult");
    const diceImage=document.getElementById("diceImage");
    const values=[];
    const images=[];
    
    for (let i=0;i<dice;i++){
        let value=Math.ceil(Math.random()*6);
        values.push(value);
        images.push(`<img src="dice images/${value}.svg" alt="dice ${value} image">`)
    }
    diceResult.textContent=values.join(", ");
    diceImage.innerHTML=images.join("");
    
}