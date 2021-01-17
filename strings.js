const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //tabela Unicode
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // imprime do índice indicado até o final
console.log(escola.substring(0,3)) // imprime os índices inicial e final - 1

console.log('Escola '.concat(escola).concat("!"))

console.log(escola.replace(3,'e'))

console.log('Rosana,Julia,Diego'.split(','))