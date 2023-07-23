import convertInput from "./convertInput.js";
import { rl } from "./inout.js";

let arrayLength = await rl.question(
  "Quantos anos vai ter de valor projetado?\n"
);
arrayLength = convertInput(arrayLength);
let precos = new Array(arrayLength - 1);
let aux = Infinity;

for (let index = 0; index < arrayLength; index++) {
  let element = await rl.question(
    `Insira o valor do item ${index + 1}/${arrayLength}\n`
  );
  element = convertInput(element);
  precos[index] = element;
}
rl.close();

for (let i = 0; i < precos.length; i++) {
  for (let j = i + 1; j < precos.length; j++) {
    let prejuizo = precos[i] - precos[j];
    if (prejuizo < aux && prejuizo > 0) {
      aux = prejuizo;
    }
  }
}

console.log(`O menor prejuizo possivel sera de ${aux}`);
