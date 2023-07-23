function solucao(stringCorrompida) {
   let regex = /\W/; // Use the \W pattern to match non-word characters
   let aux = ""
    for (let i =0; i < stringCorrompida.length; i++) {
      if(stringCorrompida[i] === " "){
        aux+=stringCorrompida[i]
      }
      else if (regex.test(stringCorrompida[i])) {
        continue
    }else{
        
      aux+=stringCorrompida[i]
      }
    }
   return aux
  }
  
  solucao('*Canis %lupus )familiaris"');