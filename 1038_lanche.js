var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const tabela = [4, 4.5, 5, 2, 1.5];

let [cod, qntd] = lines[0].split(' ').map(Number);

let total = tabela[cod - 1] * qntd;

console.log("Total: R$ " + total.toFixed(2));