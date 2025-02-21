var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let valores = [parseFloat(lines[0]), parseFloat(lines[1]), parseFloat(lines[2])]

valores.sort((a, b) => b - a)

const A = valores[0];
const B = valores[1];
const C = valores[2];

if (A >= B + C) 
{
    console.log("NAO FORMA TRIANGULO");
} 
else 
{
    if (Math.pow(A, 2) === Math.pow(B, 2) + Math.pow(C, 2)) 
    {
        console.log("TRIANGULO RETANGULO");
    }
    if (Math.pow(A, 2) > Math.pow(B, 2) + Math.pow(C, 2)) 
    {
        console.log("TRIANGULO OBTUSANGULO");
    }
    if (Math.pow(A, 2) < Math.pow(B, 2) + Math.pow(C, 2)) 
    {
        console.log("TRIANGULO ACUTANGULO");
    }
    if (A === B && B === C) {
        console.log("TRIANGULO EQUILATERO");
    } 
    else if (A === B || B === C || A === C) 
    {
        console.log("TRIANGULO ISOSCELES");
    }
}
