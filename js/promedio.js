// ============================== PROMEDIO

function calcularPromedio(lista){
  const sumaLista = lista.reduce((valorAcumulado=0, valorActual)=>
  valorAcumulado + valorActual);

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}


// ========================== MEDIANA

function esPar (numero){
  if(numero %2===0) return true;
  else return false;
}

function ordenarLista (lista){
  const listaOrdenada = lista.sort((a,b)=>a-b);
  return listaOrdenada;
}

function calcularMediana(lista){

  lista = ordenarLista(lista);

  const mitadLista = parseInt(lista.length / 2);
    
  let mediana;
  
  if(esPar(lista.length)){
    const e1 = lista[mitadLista-1];
    const e2 = lista[mitadLista];
    mediana = calcularPromedio([e1,e2]);
    console.log(mediana);
  }
  else{
    mediana = lista[mitadLista];
    console.log(mediana);
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

  console.log(moda);
}


