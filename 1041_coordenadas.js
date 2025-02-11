var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valores = lines[0].split(' ').map(parseFloat);
let x = valores[0];
let y = valores[1];

if (x === 0 && y === 0) 
{
    console.log("Origem");
} 
else if (x === 0) 
{
    console.log("Eixo Y");
} 
else if (y === 0) 
{
    console.log("Eixo X");
} 
else if (x > 0 && y > 0) 
{
    console.log("Q1");
} 
else if (x < 0 && y > 0) 
{
    console.log("Q2");
} 
else if (x < 0 && y < 0) 
{
    console.log("Q3");
} 
else 
{
    console.log("Q4");
}
