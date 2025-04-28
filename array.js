//array - vetor - Listas
//nome - elementos

let lista = ['arroz','feijaõ', 'carne' ]

console.log(lista)

//mostrando posição do array
console.log('posição 1:'+ lista[1])

//alterar item de posição
lista[1] = 'grão de bico'
console.log('posição 1:'+ lista[1])

//tamanho da array
console.log('tamanho da lista: '+ lista.length)

//adicionando tamanho final da lista

lista.push('chocolate')
console.log(lista)

//excluir último item
lista.pop()
console.log(lista)
//valor de posição
delete lista[1]
console.log(lista)
