function sumar(a,b) {
    return a + b;
}

function restar(a,b) {
    return a - b;
}

const dividir = (a,b) => {
    if (b == 0) {
        return 'No se puede dividir por 0.';
    }
    else {
        return a / b;
    }
}

const multiplicar = (a,b) => {
    return a * b;
}


//esmodule
export default  {
    sumar,
    restar,
    multiplicar,
    dividir 
}

/*
module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir
}
*/



