// Este es el codigo del cuadrado
//console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;    
} 

function areaCuadrado (area) {
    return area * area;
}
//console.groupEnd();

// Este es el codigo del triangulo

//console.group("Triangulo");
function perimetroTriangulo(lado1,lado2,base) {
    return lado1+lado2+base;
}

function areaTriangulo(base, altura) {
    return (base * altura)/2;
}
//console.groupEnd();

//Codigo del circulo
//console.group("Circulos");

//Diametro
function diametroCirculo(radio) {
    return (radio*2);
}

//Pi
const PI = Math.PI;

//Perimetro Circunsferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro*PI;
}

// Area circunsferencia
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

//console.groupEnd();
// Aqui interactuamos con el Html
    function calcularPerimetroCuadrado() {
        const input = document.getElementById("InputCuadrado");
        const value = input.value;
        const perimetro = perimetroCuadrado(value);
        document.getElementById("rPerimetroCuadrado").innerText = `El perimetro del cuadrado es: ${perimetro} cm2`;
        
    };
    function calcularAreaCuadrado() {
        const input = document.getElementById("InputCuadrado");
        const value = input.value;

        const area = areaCuadrado(value);
        document.getElementById("rAreaCuadrado").innerText = `El area del cuadrado es: ${area} cm2`;
        
    }
    function calcularPerimetroTriangulo() {
        const inputL1 = document.getElementById("InputLadoA");
        const value1 =  Number(inputL1.value);
        const inputL2 = document.getElementById("InputLadoB");
        const value2 = Number(inputL2.value);
        const inputBase1 = document.getElementById("InputBase");
        const value3 = Number(inputBase1.value);
        const perimetroTri = (value1+value2+value3);
        document.getElementById("rPerimetroTriangulo").innerText = `El perimetro del Triangulo es de: ${perimetroTri} cm`;
        //alert(perimetrotri);
    }
    function calcularAlturaTriangulo() {
        const inputL1 = document.getElementById("InputLadoA");
        const value1 =  Number(inputL1.value);
        const inputL2 = document.getElementById("InputLadoB");
        const value2 = Number(inputL2.value);
        const inputBase1 = document.getElementById("InputBase");
        const value3 = Number(inputBase1.value);
        const semiperimetro = (value1+value2+value3)/2;
        const area =Math.sqrt(semiperimetro*(semiperimetro-value1)*(semiperimetro-value3)*(semiperimetro-value2));
        const altura = parseFloat((2 * area)/value3).toFixed(2);
        if(value1==value2) {
            document.getElementById("rAlturaTriangulo").innerText= `Este es un Triangulo Isosceles y su altura es de: ${altura} cm`;
            //alert("Triangulo Isosceles: " + altura);
        } else {
            document.getElementById("rAlturaTriangulo").innerText= `Este Triangulo tiene una altura de: ${altura} cm`;
            //alert("Altura del triangulo: "+altura);
        }
    }
    function calcularAreaTriangulo(){
        const inputL1 = document.getElementById("InputLadoA");
        const value1 =  Number(inputL1.value);
        const inputL2 = document.getElementById("InputLadoB");
        const value2 = Number(inputL2.value);
        const inputBase1 = document.getElementById("InputBase");
        const value3 = Number(inputBase1.value);
        const semiperimetro = (value1+value2+value3)/2;
        const area =parseFloat(Math.sqrt(semiperimetro*(semiperimetro-value1)*(semiperimetro-value3)*(semiperimetro-value2))).toFixed(2);
        document.getElementById("rAreaTriangulo").innerText= `El área de este triangulo es de: ${area} cm2`;
        //alert(area);
    }
    function calculaDiametroCirculo() {
        const inputCircle = document.getElementById("InputRadio");
        const valueCircle = inputCircle.value;
        const diametro = diametroCirculo(valueCircle);
        document.getElementById("rDiametroCirculo").innerText= `El diametro del circulo es: ${diametro}`;
        //alert(diametro);
    }
    function calculaPerimetroCirculo() {
        const inputCircle = document.getElementById("InputRadio");
        const valueCircle = inputCircle.value;
        const perimetro = parseFloat(perimetroCirculo(valueCircle)).toFixed(2);
        document.getElementById("rPerimetroCirculo").innerText= `El perimetro del circulo es ${perimetro}`;
        //alert(perimetro)
    }
    function calculaAreaCirculo() {
        const inputCircle = document.getElementById("InputRadio");
        const valueCircle = inputCircle.value;
        const area = parseFloat(areaCirculo(valueCircle)).toFixed(2);
        document.getElementById("rAreaCirculo").innerText= `El área del circulo es de ${area}`;
     //   alert(area);
    }
    function resetData() {
        document.getElementById("InputCuadrado").value="";
        document.getElementById("rPerimetroCuadrado").innerText="";
        document.getElementById("rAreaCuadrado").innerText="";
        document.getElementById("InputLadoA").value="";
        document.getElementById("InputLadoB").value="";
        document.getElementById("InputBase").value="";
        document.getElementById("rAlturaTriangulo").innerText="";
        document.getElementById("rPerimetroTriangulo").innerText="";
        document.getElementById("rAreaTriangulo").innerText="";
        document.getElementById("InputRadio").value="";
        document.getElementById("rAreaCirculo").innerText= ""; 
        document.getElementById("rDiametroCirculo").innerText="";
        document.getElementById("rPerimetroCirculo").innerText="";
    }