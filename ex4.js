let numeros = [5, 10, 15, 20, 25, 30];

let soma = 0;  

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];  
}

let media = soma / numeros.length;

console.log("Soma dos números:", soma);
console.log("Média dos números:", media);
