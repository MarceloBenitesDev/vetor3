const pessoas = [
    {nome: "Marli", idade: 68},
    {nome: "Nedina", idade: 82},
    {nome: "JUliete", idade: 56}
];

const velho = pessoas.reduce((maisVelho, pessoaAtual) => {
    return (pessoaAtual.idade > maisVelho.idade) ? pessoaAtual : maisVelho
});

console.log(pessoas)
console.log(velho)