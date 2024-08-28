alert('Boas vindas ao site')
var nome = prompt("Qual seu nome?")
var idade = prompt("Qual sua idadade?")
var numerodevendas = 1000
var saldoDisponivel = 50
var mensagemDeERROR = 'ERROR! preencha todos os campos'
var ERROR = ''
if ( nome != 0 && idade > 0 ) {
    Text.innerHTML = 'tudo OK'
    if (idade >= 18){
        alert(` voce pode tirar habilitação, ${nome}`)
    }else 
        alert('n pode tirar hablitação')}
        else {
    window.alert(`${mensagemDeERROR}`)
} 
