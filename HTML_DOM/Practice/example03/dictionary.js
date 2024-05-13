class Dictionary
{
    #word
    constructor()
    {
        
    }

    set setWord(value) {
        if (value == "curtis")
        {
            this.#word = undefined;
            console.log("a")
        }
        else
        {
            this.#word = value
            console.log("B")
        }
    }

    get getWord() {
        return "word: " + this.#word;
    }
}

class Word
{
    constructor(inSpanish, inEnglish = [])
    {
        this.inSpanish = inSpanish
        this.inEnglish = inEnglish
    }
}



var palabra = new Word("Carro", "Car", "Vehicle")
var dict = new Dictionary()
dict.setWord = "curtis"
console.log(dict.getWord)




