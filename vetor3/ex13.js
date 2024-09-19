const pessoas = [
    {nome: "Meliodas", idade: 45},
    {nome: "Kevin", idade: 45},
    {nome: "Neymar", idade: 23}
];

const string = pessoas.map(pessoa => {
    return `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`
})

console.log(pessoas)
console.log(string)