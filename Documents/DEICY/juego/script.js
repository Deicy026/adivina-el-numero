let numrandom = Math.floor(Math.random() * 100) + 1;
let intentos = 10;
let numerosProbaron = [];

const resultado = document.querySelector(".resultado");
const resAnterior = document.querySelector(".previa");
const ayuda = document.querySelector(".pista");
const btn = document.querySelector(".btnEnviar");
const num = document.querySelector(".numero");

let cont = 1;
let resetButton;

function juega(event) {
    event.preventDefault();
    let numUsuario = Number(num.value);


    if (cont === 1) {
        resAnterior.textContent = "Numeros anteriores: ";
    }

    resAnterior.textContent += numUsuario + " ";
    if (numUsuario === numrandom) {
        resultado.textContent = "¡Felicidades! ¡Lo adivinaste!";
        resultado.style.backgroundColor = "green";
        ayuda.textContent = "";
        finJuego();
    } else if (cont === intentos) {
        resultado.textContent = "¡¡¡Fin del juego!!!";
        finJuego();
    } else {
        resultado.textContent = "¡Incorrecto!";
        resultado.style.backgroundColor = "red";
        if (numUsuario < numrandom) {
            ayuda.textContent = "¡El número es más grande!";
        } else if (numUsuario > numrandom) {
            ayuda.textContent = "¡El número es más pequeño!";
        }
    }

    cont++;
    num.value = "";
    num.focus();
}

function finJuego() {
    num.disabled = true;
    btn.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Volver a Jugar";
    const formulario = document.querySelector('.form');
    if (formulario) {
        formulario.appendChild(resetButton);
    }
    resetButton.addEventListener("click", resetJuego);
}

function resetJuego() {
    cont = 1;
    const mensajes = document.querySelectorAll(".mensajes p");
    mensajes.forEach((mensaje) => mensaje.textContent = "");

    resetButton.remove();

    num.disabled = false;
    btn.disabled = false;
    num.value = "";
    num.focus();

    resultado.style.backgroundColor = "red";
    resultado.textContent = "";
    resAnterior.textContent = "";
    ayuda.textContent = "";
    
    numrandom = Math.floor(Math.random() * 100) + 1;
}

btn.addEventListener("click", juega);
