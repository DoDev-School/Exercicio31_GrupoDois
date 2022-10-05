// let listaNumerosA: number[] = [2, 6, 9, 7, 5, 3, 1, 8, 10, 11];
// let listaNumerosB: number[] = [];
// let listaNumerosC: number[] = [];
// listaNumerosA.forEach(Verificate);
// console.log(listaNumerosA);
// console.log(listaNumerosB);
// console.log(listaNumerosC);
// function Verificate(item: number): void {
//   if (item % 2 == 0) {
//     listaNumerosB.push(item);
//   } else {
//     listaNumerosC.push(item);
//   }
// }
var arrayA = [5, 6, 2, 4, 8, 7, 3, 6, 7, 1], arrayB = [8, 5, 3, 1, 4, 7, 8, 2, 3, 6], arrayC = [];
arrayA.forEach(check);
function check(item, index) {
    if (arrayA.includes(arrayB[index]) && arrayB[index] >= 5) {
        arrayC.push(arrayB[index]);
    }
}
console.log("ArrayA: ".concat(arrayA, " \nArrayB: ").concat(arrayB, " \nArrayC: ").concat(arrayC));
