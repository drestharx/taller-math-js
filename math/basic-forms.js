console.group('cuadrado');

const ladoCuadrado = 4;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado ** 2;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});

function cuadrado (lado) {
    return {
        perimetro: lado * 4,
        area: lado ** 2
    }
}

console.groupEnd('cuadrado');

console.group('triangulo');

const ladoTriangulo1 = 4;
const ladoTriangulo2 = 4;
const ladoTrianguloBase = 3;
const alturaTriangulo = 5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
});

function triangulo (lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2
    }
}

console.groupEnd('triangulo');

console.group('circulo');

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1416;

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    circunferencia,
    areaCirculo
});

function circulo(radio) {

    const radioCuadrado = Math.pow(radio, 2); //Con el superobjeto Math.pow podemos utilizar exponentes siento radio la base y el 2 el exponente
    // de la misma manera con Math.PI utilizaremos el valore de PI dierctamente

    return {
        circunferencia: ((radio * 2)) * Math.PI,
        area: (radioCuadrado * Math.PI)
    }
}

console.groupEnd('circulo');

//Calculo de la altura de una triangulo de 2 lados iguales y uno diferente que no sea rectangulo
//lado1 y lado2 iguales y lado3 diferente a los otros 2 lados

function calcAlturaTriangulo(lado, base) {
    if(lado == base) {
        console.warn("este no es un triangulo isoceles");
    } else {
        return Math.sqrt( (Math.pow(lado, 2)) - ((Math.pow(base, 2)) / 4) );
    }
}

// calculo de altura triangulo escaleno

function calcTrianguloEscaleno(base, lado1, lado2) {
    if(lado1 == lado2 || lado2 == base || lado1 == base) {
        console.warn("Este no es un triangulo escaleno")
    } else {
        const semiperimetro = (base + lado1 + lado2) / 2;
        
        return (2 / base) * (Math.sqrt(semiperimetro * (semiperimetro - base) * (semiperimetro - lado1) * (semiperimetro - lado2)));
    }
}