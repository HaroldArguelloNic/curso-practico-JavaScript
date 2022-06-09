//function helpers

function esPar(numerito) {
    return (numerito % 2 === 0);
}
    // calculadora de mediana
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
        );
        const promedioLista = sumaLista / lista.length;
        return promedioLista;
}
    
// mediana General
    function medianaGeneral(lista) {
        const salariosCol = lista.map(
            function (personita) {
                return personita.salary;
            }
        )
        const salariosColSorted = salariosCol.sort(
        function (salaryA, SalaryB)
        {
            return salaryA - SalaryB;
        }
    );
    return salariosColSorted;
    }       
    
    function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad] - 1;
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1,personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
    
};

// mediana del top 10%
function salariosTop10(lista) {
const spliceStart = (lista.length * 90)/100;
const spliceCount = lista.length - spliceStart;
const salariosColTop10 = lista.splice(
    spliceStart,
    spliceCount,
);

return salariosColTop10;
} 

function calcularSalario() {
    const salariosSorted = medianaGeneral(colombia);
    const medianaGeneralCol = medianaSalarios(salariosSorted);
    const medianaTop10Col = salariosTop10(salariosSorted);
    document.getElementById("mediaSalarial").innerText = `La media salarial es: ${medianaGeneralCol}`;
    //document.getElementById("top10Salarial").innerText = medianaTop10Col;
    const container = document.getElementById("analisis-container");
    const fragment = document.createDocumentFragment();
    medianaTop10Col.forEach(item => {
    
        const texto = document.createElement('p');
        texto.textContent = `Top 10% de salarios es : ${item}`;
        fragment.appendChild(texto);
    });
    container.appendChild(fragment);
}