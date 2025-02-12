var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valores = lines[0].split(" ").map(Number);

let reorganizacao = valores.slice(); 
reorganizacao.sort((a, b) => a - b); 

for (let i = 0; i < reorganizacao.length; i++) 
{
    console.log(reorganizacao[i]);
}

console.log(""); 

for (let i = 0; i < valores.length; i++) 
{
    console.log(valores[i]);
}
