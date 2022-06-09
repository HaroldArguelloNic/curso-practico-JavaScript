const prestamo= [];

function calcularPrestamo(montoP,interesP,plazoP) {
    //Calcular la cuota para los periodos
    const cuota = Number(-montoP * ((interesP * ((1 + interesP)**plazoP))/(1-(1 + interesP)**plazoP))).toFixed(2);

    for(let i = 0; i < plazoP ; i++) {
        //Calcula el interes
        let redito = Number((montoP * interesP * 1).toFixed(2));
        //Calcula la amortizacion
        let amortP = Number((cuota - redito).toFixed(2));
        //agrega los datos al objeto contenedor
        
        prestamo.push({Principal:montoP, Interes: redito, Amort: amortP,Cuota: cuota, Saldo: (montoP-amortP).toFixed(2),});
        montoP = Number((montoP - amortP)).toFixed(2);
    }
}    

function calculoTabla() {
    const inputCapital = document.getElementById("inputCapital");
    const capitalValue = Number(inputCapital.value);
    const inputInteres = document.getElementById("inputTasa");
    const interesValue = Number(inputInteres.value / 100);
    const inputPlazo = document.getElementById("inputPlazo");
    const plazovalue = Number(inputPlazo.value);

    calcularPrestamo(capitalValue,interesValue,plazovalue);
 
 // Referencia al Elemento Padre
    const tablacont = document.getElementById("tablaAmort")
    const fragmento = document.createDocumentFragment();
 // Crea los elementos tabla y tbody   
    const tabla = document.createElement('table');
    const tablaBody = document.createElement('tbody');
 // Crea las filas de encabezado de la tabla   
    const hilera = document.createElement('tr');

    const titulos = Object.keys(prestamo[0]);
    for (let index = 0; index < titulos.length; index++) {
        //crea las celdas
        let celda = document.createElement('td');

        let textocelda = document.createTextNode(titulos[index]);
        celda.appendChild(textocelda);
        hilera.appendChild(celda);
        celda.setAttribute("width","80px");
        celda.setAttribute("align","center");
    }
    tablaBody.appendChild(hilera);
    for (let i= 0;i< prestamo.length;i++){
        const hilera = document.createElement('tr');
        let valores = Object.values(prestamo[i]);

        for (let j= 0; j< valores.length; j++){
            let celda = document.createElement('td');
            let textocelda = document.createTextNode(valores[j]);
            celda.appendChild(textocelda);
            hilera.appendChild(celda);
            celda.setAttribute("align","right")
        }
        tablaBody.appendChild(hilera);
    }
    tabla.appendChild(tablaBody);
    tabla.setAttribute("border","2");
    fragmento.appendChild(tabla);
   
    tablacont.appendChild(fragmento);
}