// 1 - arrays

let numbers : number[] = [1, 2 , 3, 4]

numbers.push(5)

console.log(numbers[3])

const nomes: string[] = ["Dayanne", "Iara", "Samuel"]

nomes.push("Lucas")

// 2 - outra sintaxe array

const nums: Array<number> = [20, 50]

numbers.push(300)

console.log(nums[2])

// 3 - any

const arr1: any = [ 2, "Alô", true, false, [], {nome: "Dayannelol"}]

arr1.push("Iara")

console.log(arr1)

// 4 - parametros tipados - função

function soma(a: number, b: number) {
    console.log(a + b)
}

soma(12, 17)

// soma(c + d)

// 5 - retorno de função

function greeting (name: string): string {
    return `Olá ${name}`
}

console.log(greeting("Lucas"))

// 6 - função anonima

setTimeout(function() {
    const sallary: number = 9999

    // console.log(parseFloat(sallary))

    // console.log(sallary)
}, 1500)

// 7 -tipos de objeto

function carros(carro: {valorComJuros: number, valorSemJuros: number}) {
    console.log("Valor com juros " + carro.valorComJuros)
    console.log("Valor sem juros " + carro.valorSemJuros)
}

const objCarro = {valorComJuros: 30000, valorSemJuros: 23000}

carros(objCarro)

const nomeObj:{nome: string, surname: string} = {nome: "Lucas", surname: "Siqueira"}

// 8 - props opcionais

function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a)
    console.log("B: " + b)
    if(c) {
        console.log("C: " + c)
    }
}

showNumbers(2, 5 , 9)
showNumbers(7, 10)
// showNumbers(15)

// 9 - validando argumento opcional

function newCar(firstName: string, lastName?: string) {
    if (lastName !== undefined) {
        console.log(`Carro, ${firstName} ${lastName}, legal`)
    }

    return `Carro, ${firstName}, legal`
}

console.log(newCar("Fiat", "Uno"))
console.log(newCar("Marea"))