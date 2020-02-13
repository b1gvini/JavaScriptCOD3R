function imprimirSoma(a,b){
    console.log(a+b)

}
imprimirSoma(2,2) // 4
imprimirSoma(1) // Not a Number
imprimirSoma(2,2,3,4,5) // 4 e ignora o resto

// função com retorno

function soma(a, b = 1){
    return a + b
}
console.log(soma(2))
console.log(soma(2,3))