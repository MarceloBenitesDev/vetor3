const produtos = [
    {nome: "salgadinho", preco: 5},
    {nome: "shampoo", preco: 16},
    {nome: "camisa", preco: 23}
];

const soma = produtos.reduce((juntar, produto) => {
     return juntar + produto.preco;
}, 0);

console.log(produtos)
console.log(soma)