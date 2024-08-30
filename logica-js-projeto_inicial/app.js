alert('Boas Vindas ao jogo')
var numero = parseInt(Math.random() * 100 + 1)
let chute = ''
var tentivas = '1'
console.log(`${numero}`)
while (chute != numero){
    chute = prompt('escolha um numero de 1 e 100')
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
