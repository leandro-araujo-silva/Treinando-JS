/*
  O falsy é quando um valor é considerado falso em contextos que onde um booleano é obrigatório (condicionais e loops).

  Já o truthy é o oposto, quando um valor é considerado verdadeiro (true) em contextos onde um booleano é obrigatório (condicionais e loops)

  false
    0
    -0
    ""
    null
    undefined
    NaN


  true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log( NaN ? 'Verdadeiro' : 'Falso' )

console.log( [] ? 'Verdadeiro' : 'Falso')