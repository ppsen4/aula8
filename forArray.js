// Criar array vazio
let lista = [];

// Preenchendo o array
for (let i = 0; i < 5; i++) {
    lista.push(i + '- 2° info');
}

console.log(lista);  // Imprime o array completo

// Iterando sobre o array com for...in
for (let index in lista) {
    console.log(lista[index]);
}

//foreach
//itera sobre todos os elementos do array
//realiza uma ação simples
lista.forEach(item => console.log(item + 'é top'))