/*
# JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of 
functions, variables or classes to the top of their scope, prior to execution of the code

# Hoisting allows functions to be safely used in code before they are declared

*/

//Function hoisting
//one of the advantages of hoisting is that you use your function even before declaring
console.log(sum(3,4))
function sum(a,b){
    return (a+b)
}

//varible Hoisting

console.log(message); // output: undefined
var message = "The variable Has been hoisted";

//The above code looks like as below to the interpreter,
var message;
console.log(message);
message = "The variable Has been hoisted";