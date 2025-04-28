
let num = ['1', '2', '3', '4', '5', '6' ]

console.log(num)

let maiorNum = num[0];
for (let i = 0; i < num.length; i++) {
    if (num[i] > maiorNum) {
        maiorNum = num[i];
    }
}
console.log('O maior número é: ' + maiorNum);





