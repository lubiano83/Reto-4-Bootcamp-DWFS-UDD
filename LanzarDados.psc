Algoritmo LanzarDados
    Definir numero_de_dados, cantidad_de_veces, suma_total, cantidad_total Como Entero
	
    Escribir "Ingrese el número de dados a usar"
    Leer numero_de_dados
    Escribir "Ingrese la cantidad de veces a lanzar"
    Leer cantidad_de_veces
	
	// Inicializar arreglo para almacenar resultados
    resultados <- []
	contador <- 0
	sumaValores <- 0
	duplicados <- []
    
	// Generar lanzamientos
    Para dado desde 1 Hasta numero_de_dados Hacer
        Para lanzamiento desde 1 Hasta cantidad_de_veces Hacer
            numero <- Aleatorio(1, 6) // Generar un número aleatorio entre 1 y 6
            resultados <- numero // Guardar el número en el arreglo
            contador <- contador + 1       // Incrementar el índice
			sumaValores <- sumaValores + numero
			Escribir resultados
        FinPara
    FinPara
	
	// Numero de valores en la lista
	escribir "El numero de valores es de: ", contador
	escribir "La suma de los valores es de: ", sumaValores
	escribir "El promedio de los valores es de: ", sumaValores / contador
	
FinAlgoritmo

