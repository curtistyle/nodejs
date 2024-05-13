class Dictionary
{
    #word
    constructor(value)
    {
        this.setWords = value
    }

    set setWords(value)
    {
        if (typeof value == typeof [])
        {
            this.#word = value
        }
        else
        {
            this.#word = undefined
        }
    }

    get getWords() {
        return this.#word;
    }

    set appendWord(value) 
    {
        this.#word.push(value)
    }

    searchWord(value) 
    {
        this.#word.forEach(element => 
        {
            if (element.getInEnglish == value)
            {
                return value
            }   
        });
        return undefined
    }

    toString()
    {
        return `Dictionary ${this.#word}`
    }

}

class Word
{
    #inEnglish
    #inSpanish

    constructor(inEnglish, inSpanish)
    {
        this.SetInSpanish = inSpanish
        this.inEnglish = inEnglish
    }

    set SetInSpanish(value)
    {
        if (typeof value == typeof [])
        {
            this.#inSpanish = value 
        }
        else
        {
            throw Error("The property 'SetInSpanish' must be of \'list\' type.")
        }
    }

    set SetInEnglish(value)
    {
        if (typeof value == typeof " ")
        {
            this.#inEnglish = value
        }
        else
        {
            this.#inEnglish = undefined    
        }
    }

    lengthSpanish = () =>
    {
        return this.inSpanish.length
    }

    toString()
    {
        return `Word(${this.#inSpanish}, ${this.#inEnglish})`
    }


}

class WordSpanish
{
    #name;
    #type;
    #state;
    #count;
    #order;

    constructor(name, type, state, count, order)
    {
        this.setName = name;
        this.setType = type;
        this.setState = state;
        this.setCount = count;
        this.setOrder = order;
    }

    set setName(value) {
        if (typeof value == typeof " ")
        {
            this.#name = value;
        }
        else
        {
            this.#name = undefined
        }
    }

    set setType(value) 
    {
        if (typeof value == typeof " ")
        {
            this.#type = value;
        }
        else
        {
            this.#type = undefined;
        }
    }

    set setState(value) 
    {
        if (typeof value == typeof " ")
        {
            this.#state = value;
        }
        else
        {
            this.#state = undefined;
        }
    }

    set setCount(value) 
    {
        if (typeof value == typeof " ")
        {
            this.#count = value;
        }
        else
        {
            this.#count = undefined;
        }
    }

    set setOrder(value)
    {
        this.#order = value
    }

    get getName() 
    {
        return this.#name;
    }

    get getType()
    {
        return this.#type;
    }

    get getState()
    {
        return this.#state;
    }

    get getCount()
    {
        return this.#count;
    }

    get getOrder()
    {
        return this.#order; 
    }

    toString()
    {
        return `WorldSpanish(${this.#name}, ${this.#type}, ${this.#state}, ${this.#count})`
    }

}


var diccionario = new Dictionary(
    [
        new Word("Car", [
            new WordSpanish("Auto", "Sustantivo", undefined, "Singular"),
            new WordSpanish("Vehiculo", "Sustantivo", undefined, "Singular"),
            new WordSpanish("Coche", "Sustantivo", undefined, "Singular"),
            new WordSpanish("Automovil", "Sustantivo", undefined, "Singular")
        ])
    ]
)


console.log(diccionario)


/* var diccionario = new Dictionary()

var pal = new WordSpanish("Carro", "Sustantivo", undefined, "Singular")

console.log(pal.toString())


var pal2 = new Word("", "") */


/*

var palabra = new Word("Car", [
    new WordSpanish("Vehiculo", "Sustantivo"),
    new WordSpanish("Auto", "Sustantivo")
])

diccionario.word = palabra

console.log(diccionario.word.inSpanish[0])
console.log(diccionario.word)

*/

var saf = JSON.stringify(diccionario)

console.log()