/*const precioOriginal= 120;
const descuento = 18;*/

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}
function precioConDescuento() {
  const inputPrecio = document.getElementById("inputPrecioOriginal");
  const precioValue = inputPrecio.value;
  const inputDescuento = document.getElementById("inputDescuento");
  const descuentoValue = inputDescuento.value;
  const precioDiscount = calcularPrecioConDescuento(precioValue,descuentoValue);
  document.getElementById("precioConDescuento").innerText=`El precio con descuento es: ${precioDiscount}`;
}
function onClickCalcularPrecioConDescuento() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("inputCupon");

  const CouponValue = inputCoupon.value;

  const coupons = [
    { name: "Felicidades_mama", discount: 30 },
    { name: "eres_la_mejor_del_mundo", discount: 25 },
    { name: "feliz_día", discount: 15 },
  ];

  const isCouponValueValid = function (coupons) {
    return coupons.name === CouponValue;
  };

  const userCoupon = coupons.find(isCouponValueValid);

  if (!userCoupon) {
    alert("El cupon " + CouponValue + "no es valido");
  } else {
    const descuento = userCoupon.discount;
    const discountPrice = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con cupon de descuento es: $ " + discountPrice;
  }
}
/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
}); */
