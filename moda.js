/*    1,
2,
3,
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
]*/
const lista2 = [];

const lista2Count = {};

function agregaDataModa() {
    const dataModa = document.getElementById("inputModa");
    const valueModa = Number(dataModa.value);

    if (valueModa <= 0) { /* Validar entrada de datos mayo a 0 */
        document.getElementById("inputModa").value = "";
        document.getElementById("inputModa").focus();
    } else {
        lista2.push(valueModa);
        document.getElementById("txtModa").value = lista2;
        document.getElementById("inputModa").value = "";
        document.getElementById("inputModa").focus();
    }
}
function cacularModa() {
    lista2.map(
        function (elemento) {
            if(lista2Count[elemento]) {
                lista2Count[elemento] ++;
            } else {
                lista2Count[elemento]= 1;
            }
        }
    );        
    const lista1Array = Object.entries(lista2Count).sort(
        function (elementoA,elementoB) {
            return elementoA[1] - elementoB[1];
        }        
    );
    const moda = lista1Array[lista1Array.length - 1];
    document.getElementById("rModa").innerText=`La moda de los datos es ${moda}`;
}
/* ¿Cuál tipo de promedio elegiste para trabajar? 
    R= Media Geometrica
    
    ¿Qué casos de uso tiene tu tipo de promedio?
    
    R= En matemáticas y estadística, la media geométrica
    de una cantidad arbitraria de números (por decir n números)
    es la raíz n-ésima del producto de todos los números; es 
    recomendada para datos de progresión geométrica, para promediar
    razones, interés compuesto y números índice.

    ¿Cómo traduces su fórmula a código JavaScript?
*/ 

/* Calcular la media Geometrica con los datos del array */
function calcularMediaG() {
    let media = 1;
 for(let i=0; i<lista2.length; i++){
     media = media * lista2[i];
 }
 media = parseFloat(Math.pow(media,(1/lista2.length))).toFixed(2);
 document.getElementById("rMg").innerText= `La media Geometrica es: ${media}`;
}