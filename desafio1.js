function somaValores(numero) {
    let soma = 0;
    for (let i = 1; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            soma += i;
        }
    }
    return soma;
}
const argumento = process.argv[2];
const numero = parseInt(argumento);
if (!isNaN(numero)) {
    const resultado = somaValores(numero);
    console.log(`A soma dos valores múltiplos de 3 ou 5 até ${numero} é: ${resultado}`);
} else {
    console.log('Forneça um número válido como argumento.');
}
