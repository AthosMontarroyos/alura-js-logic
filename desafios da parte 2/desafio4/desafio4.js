function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeroAleatorio = gerarNumeroAleatorio(1, 1000)
alert(`o saldo da sua conta é de ${numeroAleatorio}`)
