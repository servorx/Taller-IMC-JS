// calculadora IMC
// hacer una peticipara poder hacer un registro del IMC donde se solicite una cantidad de hombres y de mujeres, y su genero, y su edad 
// Datos (variables): Id, nombre, edad, genero 
// Informes: 
// Total de hombres y mujeres registrados.
// Promedio edad hombres y mujeres
// cantidad de menores registrados
// total de hombres y mujeres con sobrepeso
// paciente con IMC mas bajo
// tener en cuenta que toda la forma de almacenar e iterar estos datos debe de ser en arreglos

const MENSAJE_INICIO = "Usuario, bienvenido a la calculadora de iMC"
const MENSAJE_CANTIDAD_HOMBRES = "Usuario, ingrese la cantidad de hombres que desea calcular su IMC"
const MENSAJE_CANTIDAD_MUJERES = "Usuario, ingrese la cantidad de mujeres que desea calcular su IMC"
const MENSAJE_ID = "Usuario, ingrese el ID de la persona que desea calcular:"
// Tener en cuenta que no se puede repetir el ID, es unico
const MENSAJE_EDAD = "ingrese la edad de su individuo"
const MENSAJE_SELECCIONAR = "\n1.iniciar a calcular.\n2.salir del programa y mostrar los informes finales."
const MENSAJE_PESO = "ingrese su peso en kilogramos"
const MENSAJE_ALTURA = "ingrese su altura en metros"

alert(MENSAJE_INICIO);
let opcion = 0;
let mujeres = 0;
let hombres = 0;
let ID = [];
let edad = 0;
let altura = 0;
let peso = 0;
let imc = 0;
let estado = 0;
const total_registros = mujeres + hombres;
// TODO: declarar promedio de edad, total de menores registraos y total de hombres y mujeres con sobre peso, tambien el paciente con menos IMC
let cantidad_personas = hombres + mujeres;
let promedio_edad = 0;
let menores_registrados = 0;
let personas_sobrepeso = 0;
do{
    opcion = prompt(MENSAJE_SELECCIONAR)
    switch (opcion){
        case "1":
            
            mujeres = parseInt(prompt(MENSAJE_CANTIDAD_MUJERES))
            hombres = parseInt(prompt(MENSAJE_CANTIDAD_HOMBRES))
            for (i in cantidad_personas) {
                altura = parseFloat(prompt(MENSAJE_ALTURA));
                peso = parseFloat(prompt(MENSAJE_PESO));
                ID = parseInt(prompt(MENSAJE_ID));
                edad = pqrse``
                imc = peso / (altura**2)
                if (imc<18.5){
                    estado = "Peso inferior al normal"
                } else if (imc >= 18.5 && imc <= 24.9){
                    estado = "Normal"
                } else if (imc >= 25 && imc <= 29.9){
                    estado = "Peso superior al normal"
                } else if (imc >= 30){
                    estado = "Obesidad"
                }
            }
            alert(`Tienes una altura de ${altura} metros, un peso de ${peso}kg y un imc de ${imc}, por lo que estas en estado de: ${estado}`);
        case "2":
            alert(`el total de hombres y mujeres es ${cantidad_personas}.\nEl promedio de edad entre hombres y mujeres es de ${promedio_edad}.\nEl total de menores registrados es de ${menores_registrados}.\nEl total de hombres y mujeres con sobrepeso es de ${personas_sobrepeso}.\n`)
            break
    }
}while(opcion != "2");
