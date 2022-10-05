let listaNumerosA: number [] = [2, 6, 9, 7, 5, 3, 1, 8, 10, 11]
let listaNumerosB: number [] = []
let listaNumerosC: number [] = []


listaNumerosA.forEach(Verificate)

console.log(listaNumerosA)
console.log(listaNumerosB)
console.log(listaNumerosC)

function Verificate(item: number): void{
if(item % 2 == 0){
listaNumerosB.push(item)
}

else{
listaNumerosC.push(item)
}

}