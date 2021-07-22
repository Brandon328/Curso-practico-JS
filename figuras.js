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
  const rpta = document.getElementById("rptaCuadrado");
  const input = document.getElementById("InputCuadrado");
  
  if(input.value===""){
    rpta.style.backgroundColor = "red";
    rpta.textContent="Ingrese la medida del lado";
  }
  else{
    const value = parseFloat(input.value);
    const perimetro = perimetroCuadrado(value);
    rpta.style.backgroundColor="#4EABBF";
    rpta.textContent=perimetro + " m";
  }
}

function calcularAreaCuadrado(){
  const rpta = document.getElementById("rptaCuadrado");
  const input = document.getElementById("InputCuadrado").value;

  if(input===""){
    rpta.style.backgroundColor = "red";
    rpta.textContent="Ingrese la medida del lado";
  }
  else{
    const value = parseFloat(input);
    const area = areaCuadrado(value);
    rpta.style.backgroundColor="#4EABBF";
    rpta.innerHTML = area + ' m<sup>2</sup>';
  }
}


// TRIANGULO
function calcularPerimetroTriangulo(){
  const rpta = document.getElementById("rptaTriangulo");
  const lado1 = document.getElementById("InputTriangulo1").value;
  const lado2 = document.getElementById("InputTriangulo2").value;
  const base = document.getElementById("InputTrianguloBase").value;

  if(lado1==="" || lado2==="" || base===""){
    rpta.style.backgroundColor = "red";
    rpta.textContent="Ingrese todos los lados del triángulo";
  }
  else{
    const perimetro = perimetroTriangulo(parseFloat(lado1), parseFloat(lado2), parseFloat(base));
    rpta.style.backgroundColor="#4EABBF";
    rpta.innerHTML = perimetro + ' m';
  }
}

function calcularAreaTriangulo(){
  const rpta = document.getElementById("rptaTriangulo");
  const lado1 = document.getElementById("InputTriangulo1").value;
  const base = document.getElementById("InputTrianguloBase").value;

  if(lado1==="" || base===""){
    rpta.style.backgroundColor = "red";
    rpta.textContent="Ingrese todos los lados del triángulo";
  }
  else{
    const altura = calculaAltura(parseFloat(lado1),parseFloat(base));
    const area = areaTriangulo(parseFloat(base), altura);
    rpta.style.backgroundColor="#4EABBF";
    rpta.innerHTML = area + ' m<sup>2</sup>';
  }

}

function calcularAlturaTriangulo(){
  const rpta = document.getElementById("rptaTriangulo");
  const lado1 = document.getElementById("InputTriangulo1").value;
  const lado2 = document.getElementById("InputTriangulo2").value;
  const base = document.getElementById("InputTrianguloBase").value;
  
  if(lado1==="" || lado2==="" || base===""){
    rpta.style.backgroundColor = "red";
    rpta.textContent="Ingrese todos los lados del triángulo";
  }
  else{
    if (parseFloat(lado1)==parseFloat(lado2)){
      let altura = calculaAltura(parseFloat(lado1), parseFloat(base));
      rpta.style.backgroundColor="#4EABBF";
      rpta.textContent=altura + " m";
    }
    else{
      rpta.style.backgroundColor="red";
      rpta.textContent="No es un isósceles";
    }
  }

}

function calculaAltura(lado, base){
  return Math.sqrt(Math.pow(lado,2)-Math.pow((base/2),2));
}


// CIRCULO
function calcularPerimetroCirculo(){
  const rpta = document.getElementById("rptaCirculo");
  const radio = document.getElementById("InputCirculo").value;

  if(radio===""){
    rpta.style.backgroundColor = "red";
    rpta.textContent="Ingrese la medida del radio del círculo";
  }
  else{
    const perimetro = perimetroCirculo(parseFloat(radio));
    rpta.style.backgroundColor="#4EABBF";
    rpta.textContent=perimetro + " m";
  }
}

function calcularAreaCirculo(){
  const rpta = document.getElementById("rptaCirculo");
  const radio = document.getElementById("InputCirculo").value;
  
  if(radio===""){
    rpta.style.backgroundColor = "red";
    rpta.textContent="Ingrese la medida del radio del círculo";
  }
  else{
    const area = areaCirculo(parseFloat(radio));
    rpta.style.backgroundColor="#4EABBF";
    rpta.innerHTML = area + ' m<sup>2</sup>';
  }
}