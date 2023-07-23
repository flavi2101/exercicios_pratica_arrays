
import { rl } from "./inout.js";

let sequencia = await rl.question("Insira a sequencia de movimentos\n")
rl.close()
let aux =0
for (const iterator of sequencia) {
    if(iterator === ">"){
        aux++
    }else aux--

    if(aux < 0){
        aux = 6
    }else if( aux >6){
        aux =0
    }

   
}
console.log(aux)