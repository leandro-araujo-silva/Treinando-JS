/*
  Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F

*/

let nota = -1

if(nota < 0 || nota > 100) {
  console.log('Nota inválida')
} else if(nota < 60) {
  console.log('F')
} else if(nota < 70) {
  console.log('D')
} else if(nota < 80) {
  console.log('C')
} else if(nota < 90){
  console.log('B')
} else {
  console.log('A')
}