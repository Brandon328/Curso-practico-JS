// Código del cuadrado
const ladoCuadrado = 5;
const perimetroCuadrado = (lado) => lado*4;
const areaCuadrado = (lado) => lado*lado;

// Código del triángulo
const perimetroTriangulo = (lado1, lado2, base) => lado1+lado2+base;
const areaTriangulo = (base, altura) => (base*altura)/2;

// Código del circulo
const pi = Math.PI;
const diametroCirculo = (radio) => radio * 2;
const perimetroCirculo = (radio) => diametroCirculo(radio)*pi;
const areaCirculo = (radio) => pi*radio*radio;

// console.group("Circulo");
// console.log("El radio del Circulo es: " +radioCirculo);
// console.log("El diametro del Circulo es: " +diametroCirculo);
// console.groupEnd();