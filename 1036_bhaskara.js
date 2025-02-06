const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const a = parseFloat(lines[0].split(' ')[0]);
const b = parseFloat(lines[0].split(' ')[1]);
const c = parseFloat(lines[0].split(' ')[2]);

if (a === 0) {
    console.log("Impossivel calcular");
} else {
    const delta = Math.pow(b, 2) - (4 * a * c);

    if (delta < 0) {
        console.log("Impossivel calcular");
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log("R1 = " + x1.toFixed(5));
        console.log("R2 = " + x2.toFixed(5));
    }
}