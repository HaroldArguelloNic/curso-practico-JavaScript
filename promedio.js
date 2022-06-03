
function calcularMediaAritmetica(lista) {
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
const DataMedia = [];
function addDataMedia() {
    const inputDataMedia = document.getElementById("inputDataMedia");
    const inputDataMediaValue = Number(inputDataMedia.value);
    DataMedia.push(inputDataMediaValue);
    document.getElementById("dataView").value = DataMedia;
    document.getElementById("inputDataMedia").value="";
    document.getElementById("inputDataMedia").focus();
}
function calcularDataMedia() {
    document.getElementById("rMediaAritmetica").innerText= `La media aritmetica es igual a: ${calcularMediaAritmetica(DataMedia)}`;
}