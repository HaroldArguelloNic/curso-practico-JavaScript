// Declaracion del array de datos
const lista1 = [];
// Agregar elementos a nuestro array
function agregaDato() {
    const listaData = document.getElementById("inputData");
    const valueData = Number(listaData.value);
    lista1.push(valueData);
    document.getElementById("dataViewMediana").value=lista1;
    document.getElementById(inputData.value="");
    document.getElementById("inputData").focus();
    
}

/*function calcularMediaAritmetica(lista) {
    //let sumaLista = 0;
    //for (let i = 0; i < lista.length; i++){
    //    sumaLista += lista[i];
    //    }
     
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    
        return promedioLista;
    }
*/
function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    }else {
        return false;
    }
}
let mediana;
function calcularMediana() {
    // Ordenando la lista
    lista1.sort(function(a,b){return a - b;});

    const mitadLista1 = parseInt(lista1.length / 2);
    if(esPar(lista1.length)) {
        const elemento1 = lista1[mitadLista1 - 1];
        const elemento2 = lista1[mitadLista1];
    
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ])
        mediana = promedioElemento1y2;
      //  necesitamos dos elementos
      //  -> el promedio
      //  -> mediana
    
    } else {
        mediana = lista1[mitadLista1];
        // posicion mitad lista1 dentro de lista
    }
    const pMediana = document.getElementById("pMediana");
    pMediana.innerText ="El calculo de la Mediana es: "+ mediana;
}