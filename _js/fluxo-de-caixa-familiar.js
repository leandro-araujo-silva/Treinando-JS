/*
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/

let sRec = 0
let sDes = 0

let receitas = {
  site: 2500,
  montagem: 1000,
  aluguel: 200
}

let despesas = {
  videogame: 2500,
  netflix: 50,
  jogo: 500,
  roupa: 3000
}

function cReceitas(receitas) {
  for(let property in receitas){
    sRec += receitas[property]
  }

  return(sRec) 
}

function cDespesas(despesas) {
  for(let property in despesas){
    sDes += despesas[property]
  }

  return(sDes) 
}

let valorR = cReceitas(receitas)
let valorD = cDespesas(despesas)
let total = valorR - valorD

console.log(`Seu saldo: ${total}`)

if (total == 0) {
  console.log('Seu saldo é igual a zero!')
} else if (total < 0) {
  console.log(`Que pena, você está endividado!`)
} else {
  console.log(`Parabéns, seu saldo é positivo!`)
}