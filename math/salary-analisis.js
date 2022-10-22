function buscarPersona(nombreBuscado) {
    function encontrarPersona(element) {
        return persona = element.name == nombreBuscado;
    }
    return personaEncontrada = salarios.find(encontrarPersona);
}

function trabajosPersonaMediana(persona) {
    const trabajos = buscarPersona(persona).trabajos;

    function filtrarSalarios(element) {
        if(element.salario > 0) {
            return element.salario;
        } else {
            return 'sin salario';
        }
    }

    const arraySalarios = trabajos.map(filtrarSalarios);
    //El metodo .map devuelve en un nuevo array el resultado de la funcion declarada
    //mientras que el metodo filter devuelve el elemento completo en un nuevo array

    const mediana = MiMath.calcMediana(arraySalarios);
    return mediana;
}

function proyeccionPorPersona(nombrePersona) {
    const trabajos = buscarPersona(nombrePersona).trabajos;
    const variacionSalario = [];
    
    for(let i = 1; i < trabajos.length; i++) {
        variacionSalario.push((trabajos[i].salario - trabajos[i - 1].salario) / trabajos[i - 1].salario);
    }
    
    const promVariacion = MiMath.calcPromedio(variacionSalario);

    const proyeccion = (trabajos[trabajos.length - 1].salario) * (1 + promVariacion);

    return proyeccion;
}

const empresas = {};

for(persona of salarios) {
    for(trabajo of persona.trabajos) {
        if(!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {};
        }

        if(!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}

function calcMedianaEmpresa(empresa, year) {
    if(!empresas[empresa]) {
        console.warn('La empresa no existe');
        return;
    }
    if(!empresas[empresa][year]) {
        console.warn('No se tiene registro de ese año');
        return;
    }
    const empresaBuscada = empresas[empresa][year];
    const medianaEmpresa = MiMath.calcMediana(empresaBuscada);
    return medianaEmpresa;
}

console.log(empresas);

function proyeccionPorEmpresa(empresa) {
    /*Funcion para encontrar la proyeccion del total de salarios que pagara una empresa,
    el año siguiente al ultimo registrado */
    const salariosPorYear = Object.values(empresas[empresa]);
    const totalSalariosPorYear = [];
    for(salary of salariosPorYear) {
        let suma = 0;
        for(element of salary) {
            suma = suma + element;
        }
        totalSalariosPorYear.push(suma);
    }
    const variacionSalario = [];
    for(let i = 1; i < totalSalariosPorYear.length; i++) {
        variacionSalario.push((totalSalariosPorYear[i] - totalSalariosPorYear[i - 1]) / (totalSalariosPorYear[i - 1]));
    }
    const promVariacion = MiMath.calcPromedio(variacionSalario);
    const ultimoSalarioTotal = totalSalariosPorYear[totalSalariosPorYear.length - 1];
    const proyeccionEmpresa = ultimoSalarioTotal * (1 + promVariacion);
    return proyeccionEmpresa;
}

function medianaGeneral() {
    const nombres = salarios.map(persona => persona.name);
    const medianasPorPersona = [];
    for(nombre of nombres) {
        const medianaPorPersona = trabajosPersonaMediana(nombre);
        medianasPorPersona.push(medianaPorPersona);
    }
    
    const medianaGeneral = MiMath.calcMediana(medianasPorPersona);
    return medianaGeneral;
}

function medianaTop10() {
    const medianaPorPersona = salarios.map(element => trabajosPersonaMediana(element.name));
    console.log(medianaPorPersona);
    const medianasOrdenadas = MiMath.ordenarArray(medianaPorPersona);

    const percent = Math.ceil(0.1 * medianasOrdenadas.length);

    const top10Percent = [];

    for(let i = 0; i < percent; i++) {
        const posicion = medianasOrdenadas[medianasOrdenadas.length - 1 - i];
        top10Percent.push(posicion);
    }

    const medianaTop10Percent = MiMath.calcMediana(top10Percent);
    return medianaTop10Percent;
}


//CALCULADORA DE GANANCIAS EN PORCENTAJE
//CALCULADORA DE IMPUESTOS E INGRESO NETO
//ESTADO DE RESULTADOS