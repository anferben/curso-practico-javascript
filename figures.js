//Codigo del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

//console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");


//console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + "cm");


//console.log("El área del cuadrado mide: " + areaCuadrado + "cm^2");

//console.groupEnd();

//Codigo del triangulo
function perimetroTriangulo(lado1, lado2, base) {
    return (lado1 + lado2 + base);
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2; 
}

// console.group("Triángulo")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm"
// );



// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo mide: " + alturaTriangulo + "cm")

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del triángulo mide: " + perimetroTriangulo + "cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triángulo mide: " + areaTriangulo + "cm^2");

//console.groupEnd();

//Codigo del circulo
const PI = Math.PI;

function circunf(radio) {
    diametro = radio * 2;
    return diametro * PI;
}

function areaCirculo(radio) {
    return PI * radio * radio;
}

// console.group("Círculo");
// const PI = Math.PI;

// const radioCirculo = 4;
// console.log("El radio del círculo mide: " + radioCirculo + "cm");

// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del círculo mide: " + diametroCirculo + "cm");

// const circunferencia = diametroCirculo * PI ;
// console.log("La circunferencia del círculo mide: " + circunferencia + "cm");

// const areaCirculo = PI * radioCirculo * radioCirculo;
// console.log("El área del círculo mide: " + areaCirculo + "cm^2");
// console.groupEnd();

// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
    console.log("iniciando...")
    var input = document.getElementById("inputCuadrado");
    var lado = input.value;
    
    var perimetro = perimetroCuadrado(lado);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    var input = document.getElementById("inputCuadrado");
    var lado = input.value;
    
    var area = areaCuadrado(lado);
    alert(area);
}

function calcularPerimetroTriangulo() {
    var inputLado1 = document.getElementById("inputLado1");
    var lado1 = inputLado1.value;

    var inputLado2 = document.getElementById("inputLado2");
    var lado2 = inputLado2.value;

    var inputBase = document.getElementById("inputBase");
    var base = inputBase.value;
    
    var perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    var inputBase = document.getElementById("inputBase");
    var base = inputBase.value;

    var inputAltura = document.getElementById("inputAltura");
    var altura = inputAltura.value;
    
    var area = areaTriangulo(base, altura);
    alert(area);
}

function calcularCircunferencia() {
    var inputCirculo = document.getElementById("inputCirculo");
    var radio = inputCirculo.value;
    
    var circunferencia = circunf(radio);
    alert(circunferencia);
}

function calcularAreaCirculo() {
    var inputCirculo = document.getElementById("inputCirculo");
    var radio = inputCirculo.value;
    
    var area = areaCirculo(radio);
    alert(area);
}