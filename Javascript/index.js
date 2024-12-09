const numeroDeDados = parseInt(prompt("Ingrese el numero de dados"));
const numeroDeLanzamientos = parseInt(prompt("Ingrese el numero de lanzamientos"));
const resultados = [];

for( let dados = 1; dados <= numeroDeDados; dados++ ) {
    for( let lanzamiento = 1; lanzamiento <= numeroDeLanzamientos; lanzamiento++ ) {
        let numero = Math.floor(Math.random() * 6) + 1;
        resultados.push(numero)
    }
}
console.log(resultados);

// El numero de valores
const numeroDeValores = resultados.length;
console.log("El numero de valores es:", numeroDeValores);

// La suma de los valores
const sumaDeValores = resultados.reduce((acc, valor) => acc + valor, 0);
console.log("La suma de los valores es de:", sumaDeValores);

// El promedio de los valores
const promedio = sumaDeValores / numeroDeValores;
console.log("El promedio es de:", promedio);

// Los valores duplicados en la lista
const duplicados = resultados.filter((item, index) => resultados.indexOf(item) !== index);
const unicosDuplicados = [...new Set(duplicados)]; // set solo almacena valores unicos
console.log("Los valores duplicados son:", unicosDuplicados);

// Obtener el valor maximo
const valorMaximo = Math.max(...resultados);
console.log("El valor maximo es de:", valorMaximo);

// Obtener el valor minimo
const valorMinimo = Math.min(...resultados);
console.log("El valor minimo es de:", valorMinimo);
