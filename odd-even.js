// const number = 4;
// const remainder = number % 2;
// console.log(remainder == 0);


function isEven(myNumber) {
    if (myNumber % 2 == 0) {
        return true;
    }
    return false;
}
const myEvenNumber = 144;
const isMyNumberEven = isEven(myEvenNumber);
console.log(isMyNumberEven);

const myOddNumber = 145;
const isMyNumberOdd = isEven(myOddNumber);
console.log(isMyNumberOdd);



