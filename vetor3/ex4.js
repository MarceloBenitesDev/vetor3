const produtos = [
    {nome: "cadeira", preco: 45, categoria: "moveis"},
    {nome: "armario", preco: 540, categoria: "moveis"},
    {nome: "ar condicionado", preco: 45, categoria: "eletrodomesticos"},
    {nome: "coca cola", preco: 12, categoria: "bebidas"},
]

const conta = produtos.reduce((juntar, produto) => {
    const { categoria } = produto;
    juntar[categoria] = (juntar[categoria] || 0) + 1;
    return juntar;
}, {});

console.log(produtos)
console.log(conta)