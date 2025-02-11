var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valores = lines[0].split(' ').map(parseFloat);
let n1 = valores[0];
let n2 = valores[1];
let n3 = valores[2];
let n4 = valores[3];

let media = ((n1 * 2) + (n2 * 3) + (n3 * 4) + (n4 * 1)) / 10;

console.log("Media: " + media.toFixed(1));

if (media >= 7.0) 
{
    console.log("Aluno aprovado.");
} 
else if (media >= 5.0 && media <= 6.9) 
{
    console.log("Aluno em exame.");

    let exame = parseFloat(lines[1]); 
    console.log("Nota do exame: " + exame.toFixed(1));

    media = (media + exame) / 2;

    if (media >= 5.0) 
    {
        console.log("Aluno aprovado.");
    } else 
    {
        console.log("Aluno reprovado.");
    }

    console.log("Media final: " + media.toFixed(1));
} else 
{
    console.log("Aluno reprovado.");
}
