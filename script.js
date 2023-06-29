const num = prompt('Digite um valor:');
const base = prompt('Digite a base para qual deseja converter [2 - Binário ou 10- Decimal]:');
let variavel = parseInt(num), resto, resultado = 0, decrementador = num.length - 1;
if (base == '2'){
    resultado = '';
    do{
        variavel /= 2;
        resto = parseInt((variavel * 2) % 2);
        resultado += resto.toString();
    } while (variavel > 1);
    alert(`${num} (dec) = ${resultado.split('').reverse().join('')} (bin)`);
}
else{
    for (let contador = 0; contador < num.length; contador++)
    {
        resultado += num[contador] * (Math.pow(2, decrementador));
        decrementador--;
    }
    alert(`${num} (bin) = ${resultado} (dec)`);
}
