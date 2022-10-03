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