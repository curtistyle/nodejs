var dato = {
    'name': '',
    'id': 0
}

function setValues(name, id){
    dato.name = name
    dato.id = parseInt(id)
}

function getValues(){
    console.log("name=",dato.name, " id=",dato.id)
}

setValues('Curtis', 123)

getValues()