/*
  Throw em inglês significa lançar, disparar, catch quer dizer pegar e try tentar.

  Isso significa que vamos tentar executar um bloco de código, e se der algum erro, será disparado e capturado na nossa aplicação.

  O try irá executar a função, enquanto o catch vai capturar o erro e atribuir à variável e, que só existe dentro do catch. Após isso, mesmo com o erro, nossa aplicação não será interrompida por completo.
*/

// throw

function sayMyName(name = '') {
  if (name === '') {
    throw 'Nome é obrigatório'
  }

  console.log('depois do erro')
}

// try...catch
try {
  sayMyName()
} catch(e) {
  console.log(e)
}

console.log('após a função de erro')