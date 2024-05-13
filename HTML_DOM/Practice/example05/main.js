/* const calculadora = (x, y, operator) => {
    if (operator == "+") { return (x,y) => x + y } else
    if (operator == "-") { return (x,y) => x - y } else
    if (operator == "*") { return (x,y) => x * y } else
    if (operator == "/") { if ( y == 0 ) { return "\'y\' not must be 0" } else { return x / y } }  
    else { return "Error invalid operator" }
}; */


var person = (function() {
    var age = 25;

    return {
        name : "Nicolas",

        getAge: function() {
            return age;
        },

        growOlder: function() {
            age++;
        }
    };
}());

console.log(person.name)
console.log(person.getAge())
person.age = 0