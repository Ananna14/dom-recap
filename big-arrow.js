const add = (num1, num2) => num1 + num2;
const sum = add(2, 2);

const add2 = (num1, num2, num3) => num1 * num2 * num3;
const sum2 = add2(2, 2, 2);

const oneNumber = (num1) => num1 * 5;
const addNumber = oneNumber(5);

const one = num1 => num1 * 4;
const add4 = oneNumber(3);

// console.log(sum, sum2, addNumber, add4);

const getName = () => 'Ananna Sheikh';
const name = getName();
// console.log(name);

const doMath = (x, y) => {
    const sum = x + y;
    const div = x - y;
    const multiply = sum * div;
    const output = multiply * 5;
    return output;

}
const total = doMath(12, 5);
console.log(total);