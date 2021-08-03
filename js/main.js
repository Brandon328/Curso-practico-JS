function mostrarTaller1(){
  const taller1 = document.getElementById("fig-geometricas-section");
  const taller2 = document.getElementById("descuentos-section");
  const taller3 = document.getElementById("promedios-section");
  const taller4 = document.getElementById("analisis-section");
  
  taller1.style.display="block";
  taller2.style.display="none";
  taller3.style.display="none";
  taller4.style.display="none";
}

function mostrarTaller2(){
  const taller1 = document.getElementById("fig-geometricas-section");
  const taller2 = document.getElementById("descuentos-section");
  const taller3 = document.getElementById("promedios-section");
  const taller4 = document.getElementById("analisis-section");
  
  taller1.style.display="none";
  taller2.style.display="block";
  taller3.style.display="none";
  taller4.style.display="none";
}

function mostrarTaller3(){
  const taller1 = document.getElementById("fig-geometricas-section");
  const taller2 = document.getElementById("descuentos-section");
  const taller3 = document.getElementById("promedios-section");
  const taller4 = document.getElementById("analisis-section");
  
  taller1.style.display="none";
  taller2.style.display="none";
  taller3.style.display="block";
  taller4.style.display="none";
}

function mostrarTaller4(){
  const taller1 = document.getElementById("fig-geometricas-section");
  const taller2 = document.getElementById("descuentos-section");
  const taller3 = document.getElementById("promedios-section");
  const taller4 = document.getElementById("analisis-section");
  
  taller1.style.display="none";
  taller2.style.display="none";
  taller3.style.display="none";
  taller4.style.display="block";
}


function dropdown(){
  const navop = document.getElementById("nav-options");
  if(navop.style.display==="none"){
    navop.style.display="flex";
  }
  else
    navop.style.display="none";
}