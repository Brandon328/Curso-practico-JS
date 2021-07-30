function mostrarSeccionCouponManual(){
  const sinCoupon = document.getElementById("sincoupon").checked;
  const conCoupon = document.getElementById("concoupon").checked;
  const dctoManualSection = document.getElementById("dctoManual");
  const dctoCouponSection = document.getElementById("dctoCoupon");
  
  if(sinCoupon){
    dctoManualSection.style.display="block";
    dctoCouponSection.style.display="none";
  }
  else if(conCoupon) {
    dctoManualSection.style.display="none";
    dctoCouponSection.style.display="block";
  }
}

// ===================HELPERS

const calcularPrecionConDescuento = (precio, descuento) => {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
  return precioConDescuento.toFixed(2);
}



// ====================CALCULAR PRECIO FINAL

function calcularPrecioFinal(){
  const inputPrice = document.getElementById("InputPrecio");
  const priceValue = inputPrice.value;
  const rpta = document.getElementById("rptaDescuento");
  
  if(priceValue===""){
    rpta.style.backgroundColor = "red";
    rpta.textContent="Ingrese precio";
  }
  else{
    const sinCoupon = document.getElementById("sincoupon").checked;
    const conCoupon = document.getElementById("concoupon").checked;

    if(sinCoupon){
      const inputDiscount = document.getElementById("InputDscto");
      const discountValue = inputDiscount.value;
      
      if(discountValue===""){
        rpta.style.backgroundColor = "red";
        rpta.textContent="Ingrese % descuento";
      }
      else{
        const precioConDescuento=calcularPrecionConDescuento(priceValue, discountValue);
        rpta.style.backgroundColor="#4EABBF";
        rpta.innerText = 'S/. '+precioConDescuento;
      }
    }
    
    else if(conCoupon){
      const inputDiscount = document.getElementById("coupons-choice");
      const discount = inputDiscount.value;      
      if(discount===""){
        rpta.style.backgroundColor = "red";
        rpta.textContent="Seleccione un coupon";
      }
      else{
        const coupons = [
          {nombre: "StarkCoupon", descuento: 10},
          {nombre: "RoggersCoupon", descuento: 30},
          {nombre: "ThorCoupon", descuento: 50}
        ];
        const discountValue = coupons.find((coupon)=> discount == coupon.nombre);
        if(discountValue){
          const precioConDescuento = calcularPrecionConDescuento(priceValue, discountValue.descuento);
          rpta.style.backgroundColor="#4EABBF";
          rpta.innerText = 'S/. '+precioConDescuento;
        }
        else{
          rpta.style.backgroundColor = "red";
          rpta.textContent="El coupon ingresado no existe";
        }
      }
    }
  }
} 





