function solucao(resultados) {
	let sum =0
    for(let resultado of resultados){
        if(resultado === "V"){
            sum+=3
        }else if(resultado === "E"){
            sum+=1
        }
    }
console.log(sum)
}

solucao(["V","E"])