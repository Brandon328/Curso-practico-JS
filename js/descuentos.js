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


const calcularPrecionConDescuento = (precio, descuento) => {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
  return precioConDescuento;
}


function calcularPrecioFinal(){
  const sinCoupon = document.getElementById("sincoupon").checked;
  const conCoupon = document.getElementById("concoupon").checked;
  
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  if(sinCoupon){
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
    
    const precioConDescuento=calcularPrecionConDescuento(priceValue, discountValue);
    const result = document.getElementById("resultPrice");
    result.innerText="El precio final es: "+precioConDescuento;
  }
  
  else if(conCoupon){
    const coupons = [
      {nombre: "StarkCoupon", descuento: 10},
      {nombre: "RoggersCoupon", descuento: 30},
      {nombre: "ThorCoupon", descuento: 50}
    ];
    const inputDiscount = document.getElementById("coupons-choice");
    const discount = inputDiscount.value;
    
    const discountValue = coupons.find((coupon)=>{
      return discount == coupon.nombre;
    });
    
    const precioConDescuento = calcularPrecionConDescuento(priceValue, discountValue.descuento);
    const result = document.getElementById("resultPrice");
    result.innerText="El precio final es: "+precioConDescuento;
  }
} 





