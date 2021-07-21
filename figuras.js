// Código del cuadrado
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


// CUADRADO
function calcularPerimetroCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(`El perimetro del cuadrado es: ${perimetro}`);
}

function calcularAreaCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(`El area del cuadrado es: ${area}`);
}


// TRIANGULO
function calcularPerimetroTriangulo(){
  const lado1 = document.getElementById("InputTriangulo1").value;
  const lado2 = document.getElementById("InputTriangulo2").value;
  const base = document.getElementById("InputTrianguloBase").value;
  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(`El perimetro del triángulo es: ${perimetro}`);
}

function calcularAreaTriangulo(){
  const lado1 = document.getElementById("InputTriangulo1").value;
  const base = document.getElementById("InputTrianguloBase").value;
  const altura = Math.sqrt(Math.pow(lado1,2)-Math.pow((base/2),2));
  const area = areaTriangulo(base, altura);
  alert(`El area del triángulo es: ${area}`);
}


// CIRCULO
function calcularPerimetroCirculo(){
  const radio = document.getElementById("InputCirculo").value;
  const perimetro = perimetroCirculo(radio);
  alert(`El perimetro del circulo es: ${perimetro}`);
}

function calcularAreaCirculo(){
  const radio = document.getElementById("InputCirculo").value;
  const area = areaCirculo(radio);
  alert(`El area del circulo es: ${area}`);
}