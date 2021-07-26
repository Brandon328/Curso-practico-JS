function calcularPromedio(lista){
  // let sumaLista = 0;
  // lista.forEach((e)=>sumaLista+=e);  

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

