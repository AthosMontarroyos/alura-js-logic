var escolhido = prompt('Chute um numero entre 1 e 10')
var Secret = 7
if (escolhido == Secret ) {
    var pontuação = 100
} else if (escolhido == Secret-1 || escolhido == Secret+1) {
    var pontuação = 80
} else if (escolhido == Secret-2 || escolhido == Secret+2) {
    var pontuação = 60
} else if (escolhido == Secret-3 || escolhido == Secret+3){
    var pontuação = 40
} else if (escolhido == Secret-4 || escolhido == Secret+4 ) {
    var pontuação = 20
} else {
    var pontuação = 0
}if(escolhido >10 || escolhido <1){
    alert('ERROR, Preencha denovo os dados e tente novamente')
} else if(pontuação >=100) {
    alert(`Sua Pontuação foi igual á ${pontuação},PARABENS!`)
} else {
    alert(`Sua Pontuação foi igual a ${pontuação},Mais sorte da proxima vez`)
}