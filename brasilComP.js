import { rl } from "./inout.js";

let arrayLength = await rl.question("Quanto palavras vai ter no array?\n");
let palavras = new Array(arrayLength - 1);

for (let index = 0; index < arrayLength; index++) {
  let element = await rl.question(
    `Insira a palavra ${index + 1}/${arrayLength}\n`
  );

  palavras[index] = element;
}
let primeiraLetra = await rl.question(`Insira a primeira letra que busca \n`);
let segundaLetra = await rl.question(`Insira a segunda letra que busca \n`);
rl.close();
class brasil {
  constructor(palavras, primeiraLetra, segundaLetra) {
    this.primeiraLetra = primeiraLetra;
    this.palavras = palavras;
    this.segundaLetra = segundaLetra;
    this.itens = [];
  }

  match() {
    for (let item of this.palavras) {
      if (item[0] === this.primeiraLetra && item[1] === this.segundaLetra) {
       
        this.itens.push(palavras.indexOf(item))
      }
    }
  }
}

let brasilP = new brasil(palavras, primeiraLetra, segundaLetra);
brasilP.match();

brasilP.itens.length === 0 ? console.log("NENHUMA"):brasilP.itens.forEach(val => console.log(palavras[val]))
