const matriz = [
    [2,3,7],
    [6,3,8],
    [2,2,9]
];

const resultado = matriz
.flat()
.filter(num => num % 2 === 0)
.map(num => num * 3)

console.log(matriz)
console.log(resultado)