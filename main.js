// alert('JavaScript funcionando correctamente')

// 1. Variables

const variableSinValor = "";

const booleano1 = true;
const booleano2 = false;

const PI = 3.14;
const TAU = 2 * PI;

const miNombre = "Manel";
const miNumeroFav = 8;

const boolean = true;

console.log(miNombre.length)

console.log(typeof miNumeroFav)

console.log(`Mi nombre es ${miNombre} y mi numero favorito es ${miNumeroFav}`)

const crack = "Seré un crack en JavaScript al terminar el bootcamp";
console.log(crack.toUpperCase())

const presentacion = "Hola soy un crack";
console.log(presentacion.substring(0,5))

miNumeroFavString = miNumeroFav.toString()
console.log(typeof miNumeroFavString)

const template = "nadar"
const literal = `Me gusta ${template}`
console.log(literal)

console.log(PI.toFixed(2))

// 2. Arrays

const arrayVacio = []

const arrayNumeros = [0,1,2,3,4,5,6,7,8,9]

const arrayNumeros2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const arayNumerosPares = [0,2,4,6,8]

const arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9]

const HolaMundo = ["Hola","Mundo"]

const loGuardoTodo = ["hola","que",23,42.33,"tal"]

const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

console.log(loGuardoTodo.length)

loGuardoTodo.push("estas")

console.log(loGuardoTodo[1])

loGuardoTodo.push('Euralio')

console.log(loGuardoTodo)

// 3. Objetos

const Coche = {
    marca : "Volkswagen",
    modelo : "Polo",
    matricula : "7596 JBZ"
}

const Casa = {
    codPostal : 345,
    calle : "Calle de los raretes",
    portal : 8,
    piso : 35
}

const FullStackDeveloper = {
    arraylenguajes : ['javascript','java','C++','php'],
    arrayprojectos : ['mipaginapersonal','gimnasiogordo','wordle']
}

const Perro = {
    nombre : "Aquilles",
    raza : "Perro lobo Checoslovaco",
    color : "gris",
    edad : 7
}

const Noticia = {
    titular : "Incendio en Campanar",
    cuerpo : "Muchos heridos en un incendio"
}

const Persona = {
    nombre : "Manel",
    apellidos : "Piernas Hernández",
    edad : 22
}

console.log(Persona)

console.log(FullStackDeveloper.arraylenguajes)

const Portatil = {
    marca : 'MSI'
}

console.log(Portatil.marca)
console.log(Portatil["marca"])

let Concierto = {
    grupos : ['no','me','se','ninguno']
}

console.log(Concierto.grupos)

const Led = {
    lampara1 : "rojo",
    lampara2 : "verde",
    lampara3 : "azul"
}

const arrayRGB = [Led.lampara1,Led.lampara2,Led.lampara3]
console.log(arrayRGB)

const O_Error = {
    codigo : 111
}

console.log(O_Error.codigo)

const Grupo = {
    integrantes : ["Vocalista","Bateria","Yo"]
}
const integrantes = Grupo.integrantes
console.log(integrantes[2])

const Impresora = {
    tinta : {
        rojo : "rojo",
        verde : "verde",
        azul : "azul"
    }
}
const nivelesTinta = Impresora.tinta
console.log(nivelesTinta)

const Movil = {
    especificaciones : "muchas"
}

const especificaciones = Movil["especificaciones"]
console.log(especificaciones)

Portatil.marca = "msi"
console.log(Portatil)

Concierto.grupos.push("Guns N'Roses")
console.log(Concierto.grupos)

Concierto = Object.assign(Concierto, {fecha: new Date()})
console.log(Concierto.fecha)

console.log(Grupo.integrantes.length)
Grupo.integrantes.pop()
console.log(Grupo.integrantes.length)
