const lista = [
    500,
    100,
    200,
    //800,
    40000000
];

const mitadLista = parseInt(lista.length / 2);

function esPar(numero) {
    if (numero % 2 === 0) {
        return true
    } else {
        return false
    }
}

let mediana;

if (esPar(lista.length)) {
    var numero1 = lista[mitadLista - 1];
    var numero2 = lista[mitadLista];
    mediana = (numero1 + numero2) / 2;
} else {
    mediana = lista[mitadLista];
}

function calcularMediana(lista) {
    const listaOrdenada = lista.sort(function(a, b) {
        return a - b;
    })

    const mitadLista = parseInt(lista.length / 2);
    let mediana;

    if (esPar(lista.length)) {
        var numero1 = lista[mitadLista - 1];
        var numero2 = lista[mitadLista];
        mediana = (numero1 + numero2) / 2;
    } else {
        mediana = lista[mitadLista];
    }
    return mediana;
}