alert('Boas Vindas ao jogo')
var numero = 22
let chute = ''
var tentivas = ''
while (chute != numero){
    chute = prompt('escolha um nuemro de 1 e 30')
if (numero == chute) {
   alert('Voce acertou o numero secreto')
} else {
    if (chute > numero){
        alert(`Você ERROU :(, mas ${chute} é  MAIOR que o numero certo`)
    }else if (chute < numero){
        alert(`Você ERROU mas ${chute} é MENOR que o numero certo`)
    }
} tentivas ++
} alert(`vc teve ${tentivas} tentativas`)