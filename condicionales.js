let dia = "lunes";

switch(dia) {
    case "lunes":
        document.write("Hoy inicia la semana laboral.");
        break;
    case "viernes":
        document.write("Hoy es el fin de semana laboral.");
        break;
}

/* WHILE Y PROMPT

let respuesta;

while (respuesta != '4') {
    let pregunta = prompt('¿Cuánto es 2 + 2?')
    respuesta = pregunta;
}
*/

/* OBJETOS */

const tiposDeSuscripciones = {
    free: 'Solo puede tomar los cursos gratis',
    basic: 'Eres basic',
    expert: 'Eres expert',
    expertduo: 'Eres expertduo' 
};

function conseguirTipoSuscripcion(suscripcion){
    if(tiposDeSuscripciones[suscripcion]){
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }
    console.warn('Ese tipo de suscripcion no existe.');
}

conseguirTipoSuscripcion('free');



/* LECTURA Y MODIFCACIÓN DEL DOM 

// LEER HTML

const h1 = document.querySelector("h1");
const p1 = document.querySelector(".p1"); // Obtener por su clase
const p2 = document.querySelector("#p2"); // Obtener por su ID

console.log({
    h1,
    p1,
    p2
});

// MODIFICAR HTML

// innerHTML es una propiedad del h1, es equivalente a 'value'
h1.innerHTML = 'Este H1 ha sido modificado.';

// AGREGAR CLASES

h1.classList.add('rojo');
h1.classList.remove('hola'); // eliminar una clase

// CREAR ELEMENTOS

const img = document.createElement("img");
// Dar atributos a una clase
img.setAttribute("src", "https://cdn.icon-icons.com/icons2/3914/PNG/512/platzi_logo_icon_248838.png");
// Insertamos el elemento en el parrafo 2
p2.appendChild(img);

*/

/* EVENTOS */

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const btn = document.querySelector("#btnCalcular");
const res = document.querySelector("#resultado");

btn.addEventListener("onclick", concatenar); // La función va sin paréntesis

function concatenar(){
    const texto = num1.value + num2.value;
    res.innerHTML = "Resultado: " + texto;
}
