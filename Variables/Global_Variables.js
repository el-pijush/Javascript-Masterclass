/*
Global variables are those that are declared outside a function or declared with a window object 
for accessibilty throughout the program.if you declare a varible with "var" even if its inside a function 
it will be seen as global
The "var" statement declares a function scoped or globally scoped variable optionaly initializing it to a value
*/

//Example 1

var x=10
//console.log(x)
if(x===10){
    var x=20
   // console.log(x)
}
//console.log(x)

//Declaring a global Variable inside a function
window.value=90
function setValue(){
window.value=100
}

function getValue(){
    setValue()
    return window.value
}

console.log(getValue())
/*
# in strict mode, if you attempt to use an undeclared variable, you'll get a reference error when you run your code.

# Outside of strict mode, however, if you assign a value to a name that has not been declared with let, const, or var, 
you'll end up creating a new global variable. it will be global no matter how deeply nested within functions 
and blocks your code is, which is almost certainly not what you want, is bug-prone, and is one of the best reasons 
for using strict mode!

# Global variables created in this accidental way are like global variables declared with var: they define properties 
of the global object. But unlike the properties defined by proper var declarations, these properties can be deleted 
with the delete operator.
*/