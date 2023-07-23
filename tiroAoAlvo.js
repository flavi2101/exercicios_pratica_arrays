function solucao(disparos) {
	let acertos = disparos.filter(item => item >=70)
    acertos.length <3 ?console.log("ELIMINADO"): console.log(acertos.length)
}