alert('Boas Vindas ao jogo')
var numeromax = 5000
var numero = parseInt(Math.random() * numeromax + 1)
let chute = ''
var tentivas = '1'
console.log(`${numero}`)
while (chute != numero){
    chute = prompt(`escolha um numero de entre 1 e ${numeromax}`)
if (numero == chute) {
   break
} else {
    if (chute > numero){
        alert(`Você ERROU :(  mas o numero certo é menor que ${chute}`)
    }else if (chute < numero){
        alert(`Você ERROU :(  mas numero certo é maior que ${chute}`)
    }
} tentivas ++
}
var NomeTentiva = tentivas > 1 ? 'Tentativas' : 'Tentativa'
alert(`Parabens! você acertou o numero secreto com ${tentivas} ${NomeTentiva}`)
