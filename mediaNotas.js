function solucao(notas) {
    let menor =Infinity
    let maior = -Infinity
	for(let nota of notas){
        if(nota > maior){
            maior = nota
        }
        if(nota < menor){
            menor = nota
        }
    }
    let indexMenor = notas.indexOf(menor)
    let indexMaior = notas.indexOf(maior)
    let sum =0
    for(let i =0; i < notas.length; i++){
        if( i === indexMenor || i === indexMaior){
            continue
        }else{
            sum+=notas[i]
        }
    }
    console.log(sum/(notas.length-2))
   
}

solucao([100,100,100,50])