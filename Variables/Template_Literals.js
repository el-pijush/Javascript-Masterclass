//Template Literals helps us to do string interpolation, or to include variables in a string

//example

const person={
    name:"Aisha",
    age:30
}
console.log(`my name is ${person.name} & my age is ${person.age}`)

/*Template literals, however, preserve whatever spacing you add to them. For example, to create that
 same multi-line output that we created above, you can simply do:*/
 console.log(`this is line one. 
 this is line 2`)