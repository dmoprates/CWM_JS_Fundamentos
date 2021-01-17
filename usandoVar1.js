{ { { { var sera = 'Será???' } } } } // a variável "var" pode ser acessada fora do bloco, de forma global
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}
teste()
console.log(local)//uma variavel "var" dentro de uma função não é acessivel fora do escopo da função.