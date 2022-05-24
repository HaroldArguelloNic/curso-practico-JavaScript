// Este es el codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
} 

function areaCuadrado (area) {
    return area * area;
}

console.groupEnd();

// Este es el codigo del triangulo

console.group("Triangulo");
function perimetroTriangulo(lado1,lado2,base) {
    return lado1+lado2+base;
}

function areaTriangulo(base, altura) {
    return (base * altura)/2;
}
console.groupEnd();

//Codigo del circulo
console.group("Circulos");

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

console.groupEnd();
// Aqui interactuamos con el Html
    function calcularPerimetroCuadrado() {
        const input = document.getElementById("InputCuadrado");
        const value = input.value;

        const perimetro = perimetroCuadrado(value);
        alert(perimetro);
    };
    function calcularAreaCuadrado() {
        const input = document.getElementById("InputCuadrado");
        const value = input.value;

        const area = areaCuadrado(value);
        alert(area);
    }
    function calcularPerimetroTriangulo() {
        const inputL1 = document.getElementById("InputLadoA");
        const value1 =  Number(inputL1.value);
        const inputL2 = document.getElementById("InputLadoB");
        const value2 = Number(inputL2.value);
        const inputBase1 = document.getElementById("InputBase");
        const value3 = Number(inputBase1.value);
        const perimetrotri = (value1+value2+value3);
        alert(perimetrotri);
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
        const altura = (2 * area)/value3;
        if(value1==value2) {
            alert("Triangulo Isosceles: " + altura);
        } else {
            alert("Altura del triangulo: "+altura);
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
        const area =Math.sqrt(semiperimetro*(semiperimetro-value1)*(semiperimetro-value3)*(semiperimetro-value2));
        alert(area);
    }
    function calculaDiametroCirculo() {
        const inputCircle = document.getElementById("InputRadio");
        const valueCircle = inputCircle.value;
        const diametro = diametroCirculo(valueCircle);
        alert(diametro);
    }
    function calculaPerimetroCirculo() {
        const inputCircle = document.getElementById("InputRadio");
        const valueCircle = inputCircle.value;
        const perimetro = perimetroCirculo(valueCircle);
        alert(perimetro)
    }
    function calculaAreaCirculo() {
        const inputCircle = document.getElementById("InputRadio");
        const valueCircle = inputCircle.value;
        const area = areaCirculo(valueCircle);
        alert(area);
    }