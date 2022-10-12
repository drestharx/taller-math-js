const array = [1, 2, 3];

function calcPromedio(array) {
    let suma = 0;
    let promedio;
    for(let element of array) {
        suma = suma + element;
    }
    
    return promedio = suma / array.length;
}

// CALCULO DE PROMEDIO CON METODO .REDUCE
// El metodo reduce nos permite recibir 2 parametros - Valor acumulado y Nuevo Valor
// Valor acumulado se inicializa en 0

function calcPromReduce(lista) {
    
    let promedio;

    function sumarElementos(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }

    const sumaLista = lista.reduce(sumarElementos);
    
    return promedio = sumaLista / lista.length;
}


// ---------------- ORDENAMIENTO DE ARRAYS -----------------

function ordenarArray(listaDesordenada) {

    //Esta funcion recibe 2 argumentos (valorAcumulado, nuevoValor)
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        //debe retornar -1, 0 o 1; con 1 indicamos que debe cambiar de posicion
        //con 0 que no importa si se hace el cambio o no
        // y -1 que debe permanecer como estaba ya que el numero es mayor

        //PRIMERA MANERA

        // if(valorAcumulado > nuevoValor) {
        //     return 1;
        // } else if(valorAcumulado == nuevoValor) {
        //     return 0;
        // } else if(valorAcumulado < nuevoValor) {
        //     return -1;
        // }

        //SEGUNDA MANERA

        return valorAcumulado - nuevoValor;

        // 5 - 10 = -5 -> permanece como estaba
        // 5 - 5 = 0 -> no hace cambios
        // 10 - 5 = 5 -> cambia la posicion
    }

    const lista = listaDesordenada.sort(ordenarListaSort);

    return lista;
}

// ---------------- MEDIANA ---------------

function esPar(array) {
    if(array.length % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function calcMediana(lista) {

    const listaOrdenada = ordenarArray(lista);

    const listaEsPar = esPar(listaOrdenada);

    console.log({
        listaOrdenada,
        listaEsPar
    });

    if(listaEsPar) {

        const indexPrimerElemento = (lista.length / 2) - 1;
        const indexSegundoElemento = (lista.length / 2);

        const medianaLista = (lista[indexPrimerElemento] + lista[indexSegundoElemento]) / 2;

        return medianaLista;


    } else {
        // Una forma de obtener el elemento central de la lista
        const medianaLista = Math.floor(lista.length / 2);

        return lista[medianaLista];
    }
}