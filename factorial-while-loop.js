// increasing

// function factorial(numb) {
//     let fact = 1;
//     let i = 1;
//     while (i <= numb) {
//         fact = fact * i;
//         i++;
//     }
//     return fact;

// }
// const myFactorial = factorial(8);
// console.log(myFactorial);

// decrimeaing

function factorial(numb) {
    let fact = 1;
    let i = numb;
    while (i >= 1) {
        fact = fact * i;
        i--;
    }
    return fact;

}
const myFactorial = factorial(8);
console.log(myFactorial);



//for llop reverse
// function getFacorial2(number) {
//     let factorial = 1;
//     for (let i = number; i >= 1; i--) {
//         factorial = factorial * i;
//     }
//     return factorial;
// }
// const myFactorial = getFacorial2(6);
// console.log(myFactorial);