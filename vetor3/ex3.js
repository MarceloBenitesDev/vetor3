let produtos = [
    {nome: "ventilador", preco: "35"},
    {nome: "TV", preco: "1400"},
    {nome: "cortador de grama", preco: "670"}
];

let resultado = produtos.map(produtos => produtos.preco - (produtos.preco * 0.10))

console.log(produtos)
console.log(resultado)