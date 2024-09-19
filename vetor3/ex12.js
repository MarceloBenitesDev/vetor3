const matriz = [
    [2,3,-6],
    [-1,-1,-2],
    [1,-3,7]
];

const soma = matriz
.flat()
.reduce((juntar, numero) => {
    return numero > 0 ? juntar + numero : juntar;
}, 0);

console.log(matriz)
console.log(soma)