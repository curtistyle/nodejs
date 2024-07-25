class Person {

    constructor (name, age){
        this.name = name;
        this.age = age;
    
    }

    toString() {
        return `I am ${this.name} and have ${this.age} years`
    }

    cantar = () => {
        return `juaz juaz`
    };
    
}

class Mamon extends Person {
    constructor(prr) {
        super()
        this.prr = prr
    }
}

var persona1 = new Person("Curtis", 12)
var mamon1 = new Mamon("Carlos", 11, 10000)

console.log(mamon1.toString())