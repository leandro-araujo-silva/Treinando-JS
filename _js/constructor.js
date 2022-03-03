/*
  Function() constructor

  * expressão new
  * criar um novo objeto
  * this keyword
*/

let aluno = 'Leandro'

let name = new String(aluno)

function Person(name) {
  this.name = name
  this.walk = function() {
    return this.name + " está andando"
  }
}

const mayk = new Person("Mayk")
const joao = new Person("Joao")
console.log(mayk.walk())
console.log(joao.walk())
console.log(`O nome do aluno é ${aluno} e possui ${name.length} letras.`)


