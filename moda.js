const lista = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1
];

function mapearLista(lista) {
    const listaCount = {};

    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );

    return listaCount;
}

function ordenarLista(lista) {
    const listaArray = Object.entries(lista).sort(
        function(elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );

    return listaArray;
}

function calcularModa(lista) {
    const listaCount = mapearLista(lista);
    const listaArray = ordenarLista(listaCount);
    const moda = listaArray[listaArray.length - 1];
    
    return moda;
}
