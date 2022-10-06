const precio = document.querySelector('#price');
const descuento = document.querySelector('#descuento');
const calcBoton = document.querySelector('#calcButton');
const p = document.querySelector('#priceDesc');

calcBoton.addEventListener('click', calculoDescuento);

function calculoDescuento() {

    let price = Number(precio.value);
    let discount = Number(descuento.value);

    if(price == false || discount == false){
        p.innerText = 'Porfavor ingresa los valores en las casillas';
        return;
    }

    if(discount > price){
        p.innerText = 'No existe un descuento mayor al precio -_-';
        return;
    }

    const descPorRealizar = (precio.value * descuento.value) / 100;
    const precioDescontado = precio.value - descPorRealizar;

    p.innerText = 'El precio con descuento sera de ' + precioDescontado + '$';
}

// Cupones

const cuponPrice = document.getElementById('precio');
const cuponDiscount = document.getElementById('coupon');
const botonCupon = document.getElementById('calcular');
const pCupon = document.getElementById('buttonResult');

botonCupon.addEventListener('click', calcularCupon);

// CON OBJETOS

// const cuponObj = {
//     'Verano': 30,
//     'Otoño': 20,
//     'Invierno': 10,
//     'Primavera': 5
// }

// CON ARRAYS

const couponsList = [];
couponsList.push({
    name: 'Verano',
    discount: 30,
});


function calcularCupon() {

    let discount;

    const precio = Number(cuponPrice.value);
    const coupon = cuponDiscount.value;

    if(!precio || !coupon) {
        pCupon.innerText = 'Debes llenar los recuadros primero';
        return;
    }

    // CON OBJETOS

    // if(cuponObj[coupon]) {
    //     discount = cuponObj[coupon];
    // } else {
    //     pCupon.innerText = 'El cupon no es valido';
    //     return;
    // }


    // CON ARRAYS

    function findElement(couponElement) { //cada objeto dentro del array
        return couponElement.name == coupon;
    }

    const couponInArray = couponsList.find(findElement);

    if(couponInArray) {
        discount = couponInArray.discount;
    } else {
        pCupon.innerText = "El cupon no es valido";
        return;
    }

    const newPrice = (precio * (100 - discount)) / 100;

    pCupon.innerText = 'El nuevo precio con descuento es $' + newPrice;

}