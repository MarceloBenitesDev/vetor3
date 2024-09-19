const pessoas = [
    {nome: "Jeff", idade: 14, profissao: "nenhuma"},
    {nome: "Kowalski", idade: 32, profissao: "bombeiro"},
    {nome: "Renatinho Vieira", idade: 26, profissao: "motorista de uber"}
];

const total = pessoas.reduce((juntar, pessoa) => juntar + pessoa.idade, 0);
const media = total / pessoas.length

console.log(pessoas)
console.log(media)