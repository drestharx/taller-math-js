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