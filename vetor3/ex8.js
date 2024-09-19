let matriz = [
    [2,2,4],
    [3,3,5],
    [2,6,5]
];

let multi = matriz.map(linha => linha.map(valor => valor * 2))

console.log(matriz)
console.log(multi)