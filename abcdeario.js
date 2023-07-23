
import { rl } from "./inout.js";

let letra = await rl.question("Insira a letra do jogo?\n");


let arrayLength = await rl.question("Quanto vão jogar?\n");
let valores = new Array(arrayLength-1)


for (let index = 0; index < arrayLength; index++) {
    let element = await rl.question(`Insira a palavra do jogador ${index+1}/${arrayLength}\n`);
  
    valores[index]=element
}
rl.close()

class abc{
    
    constructor(letra,palavra){
        this.letra = letra
        this.palavra = palavra
        this.sum = 0
    }
    
    looser(){
        
        for(let item of this.palavra){
            if(item[0] !== this.letra){
                this.sum++
               
            } 
        }
        
    }
}

let abcdeario = new abc(letra,valores)
abcdeario.looser()
console.log(abcdeario.sum)