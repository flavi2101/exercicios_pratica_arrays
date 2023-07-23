import convertInput from "./convertInput.js";
import { rl } from "./inout.js";

let arrayLength = await rl.question("Quantos produtos vai comprar?\n");
arrayLength = convertInput(arrayLength);
let valores = new Array(arrayLength - 1);
let sum = 0;

for (let index = 0; index < arrayLength; index++) {
  let element = await rl.question(
    `Insira o valor do item ${index + 1}/${arrayLength}\n`
  );
  element = convertInput(element);
  valores[index] = element;
}
rl.close();

if (arrayLength <= 4) {
  sum = valores.reduce((prev, curr) => prev + curr, 0);
} else {
  //Somar todos elementos excluindo o primeiro
  for (let i = 0; i < valores.length; i++) {
    for (let j = 0; j < valores.length; j++) {
      if (valores[j] < valores[i]) {
        let aux = valores[i];
        valores[i] = valores[j];
        valores[j] = aux;
      }
    }
  }
  // Big(O) -> n²

  //Encontrar o menor
  var element = Infinity;
  let j;
  for (let i = 0; i < valores.length; i++) {
    if (valores[i] < element) {
      element = valores[i];
      j = i;
    }
  }

  for (let i = 0; i < valores.length; i++) {
    if (i === j) {
      continue;
    } else {
      sum += valores[i];
    }
  }
  //Big(O) -> n
}

console.log(valores);
console.log(sum);
