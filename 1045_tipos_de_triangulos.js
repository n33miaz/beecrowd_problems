var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

const A = parseInt(lines[0]); // 7
const B = parseInt(lines[1]); // 5
const C = parseInt(lines[2]); // 7

if (A >= B + C)
{
    console.log("NAO FORMA TRIANGULO")
}
else if (Math.pow(A, 2) === Math.pow(B, 2) + Math.pow(C, 2))
{
    console.log("TRIANGULO RETANGULO")
}
else if (Math.pow(A, 2) > Math.pow(B, 2) + Math.pow(C, 2))
{
    console.log("TRIANGULO OBTUSANGULO")
}
else if (Math.pow(A, 2) < Math.pow(B, 2) + Math.pow(C, 2))
{
    console.log("TRIANGULO ACUTANGULO")
}
else if (A === B === C)
{
    console.log("TRIANGULO EQUILATERO")
}
else if (A === B || B === C || A === C )
{
    console.log("TRIANGULO ISOSCELES")
}