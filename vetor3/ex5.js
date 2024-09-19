const nomes = ["Jonas", "Marcus", "Gusta"];

const objeto = nomes.reduce((juntar, nome) => {
   juntar[nome] = nome.length;
   return juntar;
}, {});

console.log(nomes)
console.log(objeto)