// Transformar uma cadeia de caracteres em elementos de um array

let word = "manipulação"
console.log(Array.from(word))

let word2 = Array.from(word)

let word3 = new Array(11)

for(let i = 0; i < 11; i++){
  word3[i] = word2[10-i]
}

// Palavra 
console.log(word2)

// Palavra invertida
console.log(word3)

