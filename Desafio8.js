//Punto 1: Crear una lista vacía
let listaGenerica = [];

//Punto 2: Crear una lista de lenguajes de programación
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
//console.log (lenguajesDeProgramacion);

//Punto 3: Agregar lenguajes a la lista creda
lenguajesDeProgramacion.push ('Java', 'Ruby', 'GoLang');
console.log (lenguajesDeProgramacion);
/*
//Punto 4: Crear una función que muestre por consola todos los elementos de la lista
function mostrarLista (){
    console.log (lenguajesDeProgramacion);
    return;    
}

let posicion = 0;
function mostrarLista (){
    while (posicion<lenguajesDeProgramacion.length){
        console.log (lenguajesDeProgramacion[posicion]);
        posicion++;
    }
}
mostrarLista();

//Punto 5: Crear una función que muestre por consola todos los elementos de la lista en orden inverso
let posicion = lenguajesDeProgramacion.length-1;
function mostrarLista (){
    while (posicion>=0){
        console.log (lenguajesDeProgramacion[posicion]);
        posicion--;
    }
}
mostrarLista();
*/
//Punto 6: Crear una función que calcule el promedio de una lista de números
let listaDeNumeros = [8,5,10,15,9,12];
let posicionLista = 0;
let sumatoria = 0;
function calcularPromedio (){
    while (posicionLista < listaDeNumeros.length){
        sumatoria += listaDeNumeros[posicionLista];
        posicionLista++;
    }
    let promedioLista = sumatoria/listaDeNumeros.length;
    return promedioLista;
}
//calcularPromedio();
console.log (`El premedio es ${calcularPromedio()}`);

//Punto 7: Crear una función que muestre el mayor y el menor número de una lista

function encontrarMayorYMenor(listaDeNumeros){
    if (listaDeNumeros.length === 0){
        return {mayor:null, menor:null};
    }
    let mayor = listaDeNumeros[0];
    let menor = listaDeNumeros[0];
    for (let index = 1; index < listaDeNumeros.length; index++){
        if (listaDeNumeros[index] > mayor){
            mayor = listaDeNumeros[index];
        }
        
        if (listaDeNumeros[index] < menor){
            menor = listaDeNumeros[index];
        }
    }
    return {menor : menor, mayor : mayor}; //Devuelve un objeto en lugar de un valor o una variable.
    //En este caso, se devuelve un objeto que tiene dos propiedades: mayor y menor. Se utilizan : para asignar valores a las propiedades de un objeto. Es una forma de decir "la propiedad mayor del objeto tiene el valor de la variable mayor, y la propiedad menor del objeto tiene el valor de la variable menor".
   //Un objeto en JavaScript se define usando llaves {} y contiene pares clave-valor 
}
let lista = [18,7,4,23,58,41,14,81,55];
let resultado = encontrarMayorYMenor (lista);
console.log (`El número mayor de la lista es el ${resultado.mayor} y el número menor es el ${resultado.menor}`);
/*
//Punto 8: Crear una función que devuelva la suma de todos los elementos de una lista
let listaNueva = [3,5,17,25,29,1];
function calcularSumatoria (lista){
    let sumaTotal = 0;
    for (let index2 = 0, index2 < lista.length, index2++){
        sumaTotal += lista[index2];
        index2++;
    }
    return sumaTotal;
}
console.log (`La suma de todos los elemntos de la lista es: ${calcularSumatoria(listaNueva)}`);
*/
//Punto 9: Crear una función que devuelva la posición donde se encuentra el número pasado como parámetro o -1 si no lo encuentra
let arrayBusqueda = [33,25,38,21,23,19,49,82,60,47];
let nroABuscar = parseInt (prompt ('Ingresa el número a buscar: '));
function buscarNumero (nroABuscar){
    let posicion = arrayBusqueda.indexOf (nroABuscar);// indexOf devuelve la posición de un valor buscado en una lista o -1 so no lo encuentra
    return posicion;
}
console.log (`El número ${nroABuscar} se encuentra en la posición ${buscarNumero(nroABuscar)} de la lista`);

//Punto 10: Crear una función que reciba dos listas del mismo tamaño y devuelva una nueva lista con la suma de uno a uno de los elementos
function sumaListas (lista1,lista2){
    
}