function celsius(f) {
  let c = (f - 32) * 5/9

  return c
}

function fahrennheit(c) {
  let f = c * 9/5 + 32

  return f
}

console.log(celsius(50))
console.log(fahrennheit(32))