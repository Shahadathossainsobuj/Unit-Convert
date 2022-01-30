
// sudu 5 er jonne

// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);


// input ja dibo tar factorial pabo


function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
var firstFactorial = factorial(4);
console.log("factorial of is ", firstFactorial);

var secondFactorial = factorial(10);
console.log("factorial of is ", secondFactorial);