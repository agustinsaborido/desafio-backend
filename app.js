// VARIABLES

// let comision = 10
// console.log(comision)

// FUNCIONES

// function suma(a, b) {
//     return a + b
// }

// console.log(suma(2,5))

// const restar = (a,b) => a - b
// console.log(restar(8,4))


// FUNCION ANONIMA

// const saludar = function(nombre) {
//     console.log(`Hola ${nombre}!`)
// }
// saludar("Agustin")


// CLASES (class)
// Atributos = caracteristicas
// Métodos () = acciones

// class Persona {

//     constructor (nombre, edad) {
//         this.nombre = nombre
//         this.edad = edad    
//     }

//     saludar(){
//         console.log(`Hola! mi nombre es ${this.nombre} y tengo ${this.edad} años`)
//     }

// }

// const persona1 = new Persona ("Juan", 30)
// persona1.saludar()
// console.log(persona1)


class Contador {
    static cuentaGlobal = 0

    constructor(responsable) {
        this.responsable = responsable
        this.cuentaIndividual = 0
    }

    obtenerResponsable() {
        return this.responsable
    }

    obtenerCuentaIndividual() {
        return this.cuentaIndividual
    }

    static obtenerCuentaGlobal() {
        return Contador.cuentaGlobal
    }

    contar() {
        this.cuentaIndividual++
        Contador.cuentaGlobal++
    }
}

const contador1 = new Contador("PersonaA")
console.log(contador1.obtenerResponsable())

contador1.contar()
contador1.contar()
contador1.contar()
contador1.contar()


console.log(contador1.obtenerCuentaIndividual())

console.log(Contador.obtenerCuentaGlobal())
