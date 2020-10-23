const rp = require("request-promise");


function obtenerListadoDeBooks(){

    var options = {
        uri:"https://anapioficeandfire.com/api/books/1" ,
        json:true
    }
    
    return rp(options)
}

function obtenerPersonajePorNombre(nombre){

    var options = {
        uri: "https://anapioficeandfire.com/api/characters/583" +nombre,
        json:true
    }
    
    return rp(options)

}

module.exports = { obtenerListadoDePersonajes, obtenerPersonajePorNombre };