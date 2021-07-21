const precio = 120;
const descuento = 18;

const precioFinal = precio * (1 - (descuento / 100));

// console.log({
//     precio,
//     descuento,
//     precioFinal,
// });

function calcularPrecioConDescuento(precio, descuento) {
    return precio * (1 - (descuento / 100));
}

function calcularPrecioFinal() {
    var inputPrecio = document.getElementById("InputPrice");
    var precio = inputPrecio.value;

    var inputDiscount = document.getElementById("InputDiscount");
    var descuento = inputDiscount.value;

    var precioFinal = calcularPrecioConDescuento(precio, descuento);
    
    var finalPrice = document.getElementById("finalPrice");
    finalPrice.innerText = "El precio con descuento es $" + precioFinal 
}