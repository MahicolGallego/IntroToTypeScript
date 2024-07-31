"use strict";
//1. Personalized type
function isNumPair(num) {
    return num % 2 === 0;
}
function numberType(num) {
    if (num > 0) {
        console.log(`${num} es positivo`);
    }
    else if (num < 0) {
        console.log(`${num} es negativo`);
    }
    switch (num) {
        case 0:
            console.log(`${num} es cero`);
            break;
        default:
            break;
    }
}
const a = 8;
const validate = isNumPair(a);
console.log(validate);
numberType(-2);
const names = ["Ana", "Mahicol", "Nicolas"];
//for (let i = 0; i < names.length; i++) {
//  console.log(names[i]);
//}
names.forEach((n) => {
    console.log(n);
});
