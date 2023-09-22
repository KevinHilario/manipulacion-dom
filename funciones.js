// Declarativas

function miFunction(){
    return 2;
}

miFunction(); // 2

// Expresión

var miFuncion = function(a, b){
    return a + b;
}

miFuncion(3, 2); // 5

// Scope

var nombre = "Kevin";

function datos(nombre){
    var apellido = "Hilario";
    document.write(nombre + " " + apellido);
}

datos(nombre); // Kevin Hilario
// document.write(apellido); // undefined

// Métodos de arrays

var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Celular", costo: 10000},
    {nombre: "Audifonos", costo: 1800}
];

var artFiltrados = articulos.filter(function(articulo){
    return articulo.costo >= 500;
});

console.log(artFiltrados);