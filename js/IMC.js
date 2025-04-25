const MENSAJE_INICIO = "Usuario, bienvenido a la calculadora de iMC"
const MENSAJE_CANTIDAD_HOMBRES = "ingrese la cantidad de hombres que desea calcular su IMC"
const MENSAJE_CANTIDAD_MUJERES = "ingrese la cantidad de mujeres que desea calcular su IMC"
const MENSAJE_NOMBRE = "ingrese el nombre de la persona que desea calcular:"
const MENSAJE_GENERO = "ingrese el genero (hombre o mujer)"
const MENSAJE_EDAD = "ingrese la edad de su individuo"
const MENSAJE_SELECCIONAR = "\n1.iniciar a calcular.\n2.salir del programa y mostrar los informes finales."
const MENSAJE_PESO = "ingrese su peso en kilogramos"
const MENSAJE_ALTURA = "ingrese su altura en metros"

alert(MENSAJE_INICIO);
let nombres = [];
let edades = [];
let alturas = [];
let pesos = [];
let generos = [];
let imcs = [];
let hombres = 0;
let mujeres = 0;
let opcion = "";
let promedio_edad = 0;
let menores_registrados = 0;
let personas_sobrepeso = 0;
do{
    opcion = prompt(MENSAJE_SELECCIONAR)
    switch (opcion){
        case "1":
            mujeres = parseInt(prompt(MENSAJE_CANTIDAD_MUJERES))
            hombres = parseInt(prompt(MENSAJE_CANTIDAD_HOMBRES))
            let cantidad_personas = hombres + mujeres;
            for (let i = 0; i < cantidad_personas; i++) {
                let nombre = (prompt(MENSAJE_NOMBRE));
                let edad = parseInt(prompt(MENSAJE_EDAD));
                let genero = prompt(MENSAJE_GENERO);
                let altura = parseFloat(prompt(MENSAJE_ALTURA));
                let peso = parseFloat(prompt(MENSAJE_PESO));
                let imc = peso / (altura**2)
                nombres.push(nombre);
                alturas.push(altura);
                pesos.push(peso);
                imcs.push(imc);
                edades.push(edad);
                generos.push(genero);
                let estado = "";
                if (imc<18.5){
                    estado = "Peso inferior al normal"
                } else if (imc >= 18.5 && imc <= 24.9){
                    estado = "Normal"
                } else if (imc >= 25 && imc <= 29.9){
                    estado = "Peso superior al normal"
                } else if (imc >= 30){
                    estado = "Obesidad"
                }
                alert(`${nombre}, tienes una altura de ${altura} metros, un peso de ${peso}kg y un imc de ${imc}, por lo que estas en estado de: ${estado}`);
            }
            break;
        case "2":
            let total_hombres = 0;
            let total_mujeres = 0;
            let suma_edades = 0;
            let menores = 0;
            let sobrepeso = 0;
            let menor_imc = imcs[0];
            let indice_menor_imc = 0;
            for (let i = 0; i < nombres.length; i++) {
                if (generos[i] === "hombre") {
                    total_hombres++;
                } else if (generos[i] === "mujer") {
                    total_mujeres++;
                }
                suma_edades += edades[i];
                if (edades[i] < 18) {
                    menores++;
                }
                if (imcs[i] >= 25) {
                    sobrepeso++;
                }
                if (imcs[i] < menor_imc) {
                    menor_imc = imcs[i];
                    indice_menor_imc = i;
                }
            }
            promedio_edad = suma_edades / nombres.length;
            let total_personas = hombres + mujeres;
            alert(`el total de hombres y mujeres es ${total_personas} con ${total_hombres} hombres y ${total_mujeres}.\nEl promedio de edad entre hombres y mujeres es de ${promedio_edad} años.\nEl total de menores registrados es de ${menores}.\nEl total de hombres y mujeres con sobrepeso es de ${sobrepeso}.\ny el paciente con el IMC mas bajo es ${nombres[indice_menor_imc]} con un IMC de ${menor_imc}`);
            break;  
    }
}while(opcion !== "2");
