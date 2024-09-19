const produtos = [
    {nome: "Caixa de Chetoos", preco: 67},
    {nome: "Caixa de Fandangos", preco: 43},
    {nome: "Caixa de Doritos", preco: 75},
    {nome: "Caixa de Cebolitos", preco: 37},
    {nome: "Caixa de Tex Mex", preco: 29}
];

const agrupar = produtos.reduce((juntar, produto) => {
    if (produto.preco > 50) {
        juntar.mais50.push(produto);
    } else {
        juntar.menos50.push(produto);
    }
    return juntar;
}, {mais50: [], menos50: [] });

console.log(produtos)
console.log(agrupar)