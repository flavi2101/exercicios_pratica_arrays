
import { rl } from "./inout.js";

let palpite = await rl.question("Insira a letra do palpite?\n");
let palavra = await rl.question("Insira a palavra \n");

rl.close()

function solucao(palpite, palavra) {
	let sum =0
    for(let item of palavra){
        if(palpite === item){
            sum++
        }
    }
    console.log(sum)
}
solucao(palpite, palavra)