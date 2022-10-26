const fs = require('fs');

const crearArchivo = ( CrearTexto ) => {
    fs.writeFile( './Hola.txt' , CrearTexto , (err) => {
        if(err) {
            console.log(err)
        }
        console.log('El archivo fue creado')
    })
}

const actualizar = ( ActualizarTexto ) => {
    fs.appendFile('Hola.txt' ,  ActualizarTexto , ( err )=>{
        if( err ){
            console.log(err)
        }
        console.log('actualizamos el archivo')
    })
}

const leerFile = () => {
    fs.readFile('./Hola.txt' , (err , data) =>{
        if( err) {
            console.log(err)
        }
        console.log(data.toString())

    })
}

const init = async() =>{
    let texto = 'Hola fui creado desde node y la funcion init'
    await crearArchivo(texto)
    texto = ' ademas me actualizaron desde la funcion init'
    await actualizar(texto)
    leerFile()
}

init()
