
// HELPERS

function esPar(numero) {
  return (numero % 2 === 0);
}

function calcularPromedio(lista){
  const sumaLista = lista.reduce((valorAcumulado=0, valorActual)=>
  valorAcumulado + valorActual);
  
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

// Calculadora de mediana
function medianaSalarios(lista){
  const mitad = parseInt(lista.length/2);
  if(esPar(lista.length)){
    const persona1 = lista[mitad-1];
    const persona2 = lista[mitad];
    
    const mediana = calcularPromedio([persona1, persona2]);
    return mediana;
  }
  else{
    const mediana = lista[mitad];
    return mediana;
  }
}

// Mediana General
const salariosCol = colombia.map((persona)=>persona.salary);
const salariosColSorted = salariosCol.sort((a,b)=>a-b);

const medianaGeneralCol = medianaSalarios(salariosColSorted);


// Mediana del top 10%
const spliceStart = parseInt(salariosColSorted.length * 0.9);
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10 = medianaSalarios(salariosColTop10);

console.log({
  medianaGeneralCol, medianaTop10
});

