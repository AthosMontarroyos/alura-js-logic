console.log('Boas Vindas')
var nome = 'Athos'
console.log(`Olá ${nome}`)
alert(`Olá ${nome}`)
var favorito = prompt(`Qual Linguagem De programação que vc mais gosta?`)
console.log(`${favorito}`)
var valor1 = 12
var valor2 = 9
var resultado = valor1 + valor2
console.log(`A soma entre ${valor1} e ${valor2} é igual ${resultado}`)
var valor3 = 37
var valor4 = 15
var resultado2 = valor3 - valor4
console.log(`a diferença entre ${valor3} e ${valor4} e igual ${resultado2}`)
var idade = prompt('Insira sua idade')
console.log(`${idade}`)
if (idade < 18) {
    alert('Você é menor de idade')
} else {
    alert('você e maior de idade')
}
var numero = prompt('Insira um numero')
if (numero < 0) {
  alert(`${numero} é negativo`)
  console.log(`${numero}`)
} else  {
    alert(`${numero} é positivo`)
}
var contar = 0
while (contar < 10) {
    contar++
    console.log(`${contar}`)
}
var nota = parseInt(Math.random() * 10 + 1)
console.log(`${nota}`)
if (nota >= 6) {
    alert('Aprovado')
} else {
    alert('Reprovado')
}
var numerorandom = parseInt(Math.random())
console.log(`numero RANDOM ${numerorandom}`)
var numero1e10 = parseInt(Math.random() * 10 + 1)
console.log(`numero entre 1 e 10 ${numero1e10}`)
var numero1e1000 = parseInt(Math.random() *1000 +1)
console.log(`numero entre 1 e 1000 ${numero1e1000}`)