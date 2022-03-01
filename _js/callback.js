// callback function - uma callback function é uma função que está sendo passada para outra função como parâmetro.

function sayMyName(name) {
  console.log('Antes de executar a função callback')
  name()
  console.log('Depois de executar a callback')
}

sayMyName(
  () => {
    console.log('Estou em uma callback')
  }
)