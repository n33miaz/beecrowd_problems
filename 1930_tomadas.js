const valores = [parseFloat(lines[0]), parseFloat(lines[1]), parseFloat(lines[2]), parseFloat(lines[3])];

let contagem = 0;

for (let i = 0; i < 3; i++)
{
    contagem += valores[i] - 1;
}

contagem += valores[3];

console.log(contagem)