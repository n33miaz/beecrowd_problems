var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ').map(Number);

const A = lines[0];
const B = lines[1];
const C = lines[2];

if (A + B > C && A + C > B && B + C > A) 
{
    let perimetro = A + B + C;
    console.log("Perimetro = " + perimetro.toFixed(1));
} 
else 
{
    let area = ((A + B) * C) / 2;
    console.log("Area = " + area.toFixed(1));
}
