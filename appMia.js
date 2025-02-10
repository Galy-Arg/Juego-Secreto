// Trabajo con listas (arrays)
/*let numerosSorteados = []; 
console.log (numerosSorteados);
numerosSorteados.push(5);
numerosSorteados.push(8);
console.log(numerosSorteados.length);
console.log(numerosSorteados[0]); //La primer posición en un array es 0 y la última es n-1
numerosSorteados.push(3);
console.log(numerosSorteados[numerosSorteados.length-1]);//muestra la última posición
*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let maximoDeUsuario = 10;
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
maximoDeUsuario = parseInt (prompt ('Indica cuántas rondas quieres jugar: '));
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
     
    if (listaNumerosSorteados.length == maximoDeUsuario){
        asignarTextoElemento('p', `Ya se jugaron las ${maximoDeUsuario} rondas de adivinación`);
        numeroSecreto = 0; 
    }
    else { 
      if (listaNumerosSorteados.length == numeroMaximo){
            asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        }
        else {
            if (listaNumerosSorteados.includes (numeroGenerado)){
                return generarNumeroSecreto(); //Recursividad. Una función puede llamarse a sí misma para ahorrar código
            }
            else {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
        asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}
condicionesIniciales();

//Tarea: Modificar el código de manera tal que el usuario pueda indicar cuántas veces quiere jugar
