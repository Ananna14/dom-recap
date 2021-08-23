// function declare 
function add(num1, num2) {
    return num1 + num2;
}
const sum = add(15, 17);
// console.log(sum);


// function expression 
const add3 = function add3(num1, num2) {
    return num1 + num2;
}
const sum3 = add3(20, 10);
// console.log(sum3);

// arrow function 
const add4 = (num1, num2) => num1 + num2;
const sum4 = add4(20, 20);
console.log(sum4);

// function expression (annonymous)
const add2 = function (num1, num2) {
    return num1 + num2;
}
const sum2 = add2(10, 10);
// console.log(sum2);

// document.getElementById('my-btn').onclick=function handleEvent(){

// }
