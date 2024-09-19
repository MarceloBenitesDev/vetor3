let produtos = [
    {nome: "geladeira", preco: "1230", categoria: "eletrodomesticos"},
    {nome: "copo", preco: "20", categoria: "utensilio"},
    {nome: "livro", preco: "45", categoria: "papelaria"}
];

let filtro = produtos.filter(produto => produto.categoria === "utensilio")
console.log(produtos)
console.log(filtro)