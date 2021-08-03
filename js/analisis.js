let datosAS = [];

function persona (name, salary){
  this.name=name;
  this.salary=salary;
}

function agregarPersona(){
  const nombre = document.getElementById("InputDatoASNombre");
  const salario = document.getElementById("InputDatoASSalario");
  const nombreValue = nombre.value;
  const salarioValue = salario.value;
  const rpta = document.getElementById("rptaAS");
  const btnCalcular = document.getElementById("calcularAnalisis");
  
  if(nombreValue==="" || salarioValue===""){
    btnCalcular.style.marginBlockEnd="20px";
    rpta.style.backgroundColor = "red";
    rpta.textContent="Rellene todos los campos";
  }
  else{
    const lista = document.getElementById("listaDatosAnalisisSalarios");
    let nPersona = new persona(nombreValue,parseFloat(salarioValue));
    datosAS.push(nPersona);
    lista.insertAdjacentHTML('afterbegin',`<div><p>Nombre: ${nombreValue} <br> Salario: S/. ${salarioValue}</p></div><hr>`);
    nombre.value="";
    salario.value="";
    nombre.focus();
  }
}

function analisisSalarios(lista){
  // Mediana General
  const salarios = lista.map((persona)=>persona.salary);
  const salariosSorted = ordenarLista(salarios);
  const medianaGeneral = calcularMediana(salariosSorted);
  
  // Mediana del top 10%
  const spliceStart = parseInt(salariosSorted.length * 0.9);
  const spliceCount = salariosSorted.length - spliceStart;
  const salariosTop10 = salariosSorted.splice(spliceStart, spliceCount);
  const medianaTop10 = calcularMediana(salariosTop10);
  
  
  const analisis = [medianaGeneral, medianaTop10];
  return analisis;
}

function mostrarAnalisisSalarios(){
  const rpta = document.getElementById("rptaAS");
  const btnCalcular = document.getElementById("calcularAnalisis");
  if(datosAS.length===0){
    btnCalcular.style.marginBlockEnd="20px";
    rpta.style.backgroundColor = "red";
    rpta.textContent="Primero ingrese datos";
  }
  else{
    const analisis=analisisSalarios(datosAS);
    btnCalcular.style.marginBlockEnd="80px";
    rpta.style.backgroundColor="#4EABBF";
    rpta.innerHTML=`<p>La mediana general es: S/. ${analisis[0]} <br>
    La mediana del TOP 10% es: S/. ${analisis[1]}</p>`;
    datosAS=[];
  }
}


function focusInputAS(){
  const nombre = document.getElementById("InputDatoASNombre");
  nombre.focus();
}


const nombre = document.getElementById("InputDatoASNombre");
const salario = document.getElementById("InputDatoASSalario");


nombre.addEventListener("keyup", e=>{
  // Number 13 is the "Enter" key on the keyboard
  if(e.keyCode===13){
    e.preventDefault();
    salario.focus();
  }
});

salario.addEventListener("keyup", e=>{
  // Number 13 is the "Enter" key on the keyboard
  if(e.keyCode===13){
    e.preventDefault();
    document.getElementById("addDatoAS").click();
  }
});
