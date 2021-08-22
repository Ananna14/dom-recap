function sum(num1, num2 = 2) {
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    const addNumber = num1 + num2;
    return addNumber;
}
const result = sum(10, 10);
console.log(result);