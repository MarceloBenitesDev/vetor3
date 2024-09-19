const lista = [
    ["Paulo", "Carlito"],
    ["Renato", "Jonas"]
];

const concatenar = lista.reduce((juntar, listaAtual) => {
    return juntar.concat(listaAtual);
}, []);

console.log(lista)
console.log(concatenar)