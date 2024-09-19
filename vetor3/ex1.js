let produtos = [
    {nome: "geladeira", preco: "1230", categoria: "eletrodomesticos"},
    {nome: "copo", preco: "20", categoria: "utensilio"},
    {nome: "livro", preco: "45", categoria: "papelaria"}
];

let caro = produtos.filter(produto => produto.preco > 100)
console.log(produtos)
console.log(caro)