// ============================== Meadia Aritmética
function calcularPromedio(lista){
  const sumaLista = lista.reduce((valorAcumulado=0, valorActual)=>
  valorAcumulado + valorActual);
  
  const promedioLista = sumaLista / lista.length;
  return promedioLista.toFixed(2);
}

let datosMA = [];

function agregarDatoMA(){
  const rpta = document.getElementById("rptaMAritmetica");
  const dato = document.getElementById("InputDatoMA").value;
  if(dato===""){
    rpta.style.backgroundColor = "red";
    rpta.textContent="Ingrese un dato numérico";
  }
  else{
    rpta.style.backgroundColor="#4EABBF";
    rpta.textContent="";
    const lista = document.getElementById("listaDatosMA"); 
    const numDato = parseFloat(dato);
    datosMA.push(numDato);
    lista.innerText=datosMA;
  }
}

function mostrarPromedio(){
  const rpta = document.getElementById("rptaMAritmetica");
  if(datosMA.length===0){
    rpta.style.backgroundColor = "red";
    rpta.textContent="Primero ingrese datos";
  }
  else{
    const mediaAritmetica = calcularPromedio(datosMA);
    rpta.style.backgroundColor="#4EABBF";
    rpta.textContent="Media Aritmética: "+mediaAritmetica;
    datosMA=[];
  }
}


// =============================== Media Geométrica
let datosMG=[];

function calcularMediaGeometrica(lista){
  const producto = lista.reduce((a,b)=>a*b);
  const mediaGeometrica = producto**(lista.length**-1);
  return mediaGeometrica.toFixed(2);
}

function agregarDatoMG(){
  const rpta = document.getElementById("rptaMGeometrica");
  const dato = document.getElementById("InputDatoMG").value;
  if(dato===""){
    rpta.style.backgroundColor = "red";
    rpta.textContent="Ingrese un dato numérico";
  }
  else{
    rpta.style.backgroundColor="#4EABBF";
    rpta.textContent="";
    const lista = document.getElementById("listaDatosMG"); 
    const numDato = parseFloat(dato);
    datosMG.push(numDato);
    lista.innerText=datosMG;
  }
}

function mostrarGeometrica(){
  const rpta = document.getElementById("rptaMGeometrica");
  if(datosMG.length===0){
    rpta.style.backgroundColor = "red";
    rpta.textContent="Primero ingrese datos";
  }
  else{
    const mediaGeometrica = calcularMediaGeometrica(datosMG);
    rpta.style.backgroundColor="#4EABBF";
    rpta.textContent="Media Geométrica: "+mediaGeometrica;
    datosMG=[];
  }
}



// ========================== Media Armónica
let datosMAr = [];

function calcularMediaArmonica(lista){
  lista = lista.map(e => e**-1);
  const sumatoria = lista.reduce((a,b)=>a+b);
  const mediaArmonica = lista.length / sumatoria;
  return mediaArmonica.toFixed(2);
}

function agregarDatoMAr(){
  const rpta = document.getElementById("rptaMArmonica");
  const dato = document.getElementById("InputDatoMAr").value;
  if(dato===""){
    rpta.style.backgroundColor = "red";
    rpta.textContent="Ingrese un dato numérico";
  }
  else{
    rpta.style.backgroundColor="#4EABBF";
    rpta.textContent="";
    const lista = document.getElementById("listaDatosMAr"); 
    const numDato = parseFloat(dato);
    datosMAr.push(numDato);
    lista.innerText=datosMAr;
  }
}

function mostrarArmonica(){
  const rpta = document.getElementById("rptaMArmonica");
  if(datosMAr.length===0){
    rpta.style.backgroundColor = "red";
    rpta.textContent="Primero ingrese datos";
  }
  else{
    const mediaArmonica = calcularMediaArmonica(datosMAr);
    rpta.style.backgroundColor="#4EABBF";
    rpta.textContent="Media Armónica: "+mediaArmonica;
    datosMAr=[];
  }
}



// ========================== MEDIANA
function esPar (numero){
  return (numero %2===0);
}

function ordenarLista (lista){
  const listaOrdenada = lista.sort((a,b)=>a-b);
  return listaOrdenada;
}

let datosMediana = [];

function calcularMediana(lista){

  lista = ordenarLista(lista);

  const mitadLista = parseInt(lista.length / 2);
    
  let mediana;
  
  if(esPar(lista.length)){
    const e1 = lista[mitadLista-1];
    const e2 = lista[mitadLista];
    mediana = calcularPromedio([e1,e2]);
    return mediana;
  }
  else{
    mediana = lista[mitadLista];
    return mediana;
  }
}

function agregarMediana(){
  const rpta = document.getElementById("rptaMediana");
  const dato = document.getElementById("InputDatoMediana").value;
  if(dato===""){
    rpta.style.backgroundColor = "red";
    rpta.textContent="Ingrese un dato numérico";
  }
  else{
    rpta.style.backgroundColor="#4EABBF";
    rpta.textContent="";
    const lista = document.getElementById("listaDatosMeadiana"); 
    const numDato = parseFloat(dato);
    datosMediana.push(numDato);
    lista.innerText=datosMediana;
  }
}

function mostrarMediana(){
  const rpta = document.getElementById("rptaMediana");
  if(datosMediana.length===0){
    rpta.style.backgroundColor = "red";
    rpta.textContent="Primero ingrese datos";
  }
  else{
    const mediana = calcularMediana(datosMediana);
    rpta.style.backgroundColor="#4EABBF";
    rpta.textContent="Mediana: "+mediana;
    datosMediana=[];
  }
}



// ======================== MODA


const calcularModa = function(lista){
  let listaCount = {};
  
  lista.map((e)=>{
    if(listaCount[e]) listaCount[e] += 1;
    else listaCount[e] = 1;
  });
  
  const moda = Object.entries(listaCount).sort((a,b)=>{
    return a[1] - b[1];
  }).pop();
  
  return moda;
}

let datosModa=[];

function agregarModa(){
  const rpta = document.getElementById("rptaModa");
  const dato = document.getElementById("InputDatoModa").value;
  if(dato===""){
    rpta.style.backgroundColor = "red";
    rpta.textContent="Ingrese un dato numérico";
  }
  else{
    rpta.style.backgroundColor="#4EABBF";
    rpta.textContent="";
    const lista = document.getElementById("listaDatosModa"); 
    const numDato = parseFloat(dato);
    datosModa.push(numDato);
    lista.innerText=datosModa;
  }
}

function mostrarModa(){
  const rpta = document.getElementById("rptaModa");
  if(datosModa.length===0){
    rpta.style.backgroundColor = "red";
    rpta.textContent="Primero ingrese datos";
  }
  else{
    const moda = calcularModa(datosModa);
    rpta.style.backgroundColor="#4EABBF";
    rpta.textContent="Moda: "+moda[0];
    datosModa=[];
  }
}