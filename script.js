const nomes = ['Caio', 'Julia', 19, true, 'Maria']

//forEach, com arrow function, com if ternário
nomes.forEach(pegaNomes => pegaNomes==="Caio"? console.log(pegaNomes) : console.log("Sai daqui irmão!"))

const novosNomes = nomes.map(mudaNomes => {
    return `Olá ${mudaNomes}`

})

const nomesFiltrados = nomes.filter( pegaNomes => nomes.includes('a'))




//printar uma posição do array
// console.log(`Olá ${nomes[4]}`)

//atualizar o valor de um array
nomes[5] = 'fhhlvjfky'

//adicionar elementos no final do array
nomes.push('hjgfdjgvjvf')

//adicionar elementos no inicio do array
nomes.unshift('lalalalalalala')

//remover o ultimo elemento
nomes.pop()

//remover primeiro elemento
nomes.shift()

//remover um elemento específivo - (qualElemento,quantosElementos)
nomes.slice(2,1)

//verifica se existe um valor no array - pesquisa
nomes.includes('hadja')


// console.log(nomes)
















// function somar(numero1,numero2){

//     let resultado = numero1 + numero2
//     return resultado

// }

// function mostrarResultado(){
//     let resultadoSoma = somar(5,12)
//     console.log(resultadoSoma)
// }


function somar(numero1,numero2){
    let resultado = numero1 + numero2
    return resultado
}

//arrow function
const somar = (numero1,numero2) => {
    return numero1 + numero2
}


