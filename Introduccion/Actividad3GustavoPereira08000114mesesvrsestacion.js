/* 	Titulo: 	Variable y estructuras de control Actividad 3
	Nombre:	Gustavo Adolfo Pereira Moreno
	Carnet: 	0800114
	Tecnico:	Desarrollo de Software
	Curso:	Introduccion a la programacion de computadoras
*/

/* 
	Funcionamiento:	
	Lleve a cabo las siguientes acciones en un editor de textos en un archivo con extensión js. 
	No es necesario entregar un archivo html. 
	
		1. Crear una variable llamada mes y que tenga asignado por defecto el valor 10. 
		
		2. Crear un programa que verifique si el valor de mes está entre 12 y 2 (12, 1 o 2), 
		entonces que imprima en pantalla “es invierno”, si el valor de mes está entre 3 y 5, 
		que imprima en pantalla “es primavera”, si el valor de mes se encuentra entre 6 y 8 que 
		imprima en pantalla “es verano” y si se encuentra entre 9 y 11 que imprima en pantalla 
		“es otoño”. 
		
		3. Al finalizar debe imprimir en pantalla un mensaje que indique su número de carné y su 
		nombre completo. 
*/

	
// ---------------------- Inicio del programa ------------------------


// variable con valor principal 10
var mes = 10;

// llevamos un control en consola de lo que se evalua
console.log ("la variable a evalular es: ")
console.log (mes);

// ciclo de verificacion, se uso varios if anidados.
if ((mes == 12) || (mes ==2) || (mes == 1)){ 	//comparamos entre 12 e 1 y 2

			console.log ("la variable a evaluada se encuentra entre el rango de 12, 1 y 2");
			alert ("La estacion del año es Invierno \n\n Nombre: Gustavo Adolfo Pereira Moreno \n Carnet: 08000114");
			
	}else if((mes >=3) && (mes <=5)){			//comparamos entre 3 y 5
	
			console.log ("la variable a evaluada se encuentra entre el rango 3 a 5");
			alert ("La estacion del año es Primavera \n\n Nombre: Gustavo Adolfo Pereira Moreno \n Carnet: 08000114");
			
	}else if((mes >=6) && (mes <=8)){			//comparamos entre 6 y 8
	
			console.log ("la variable a evaluada se encuentra entre el rango 6 a 8");
			alert ("La estacion del año es Verano \n\n Nombre: Gustavo Adolfo Pereira Moreno \n Carnet: 08000114");
			
	}else if((mes >=9) && (mes <=11)){			//comparamos entre 9 y 11
			console.log ("la variable a evaluada se encuentra entre el rango 9 a 11");
			alert ("La estacion del año es Otoño \n\n Nombre: Gustavo Adolfo Pereira Moreno \n Carnet: 08000114");
			
				}else{							//opcion por default
				
					alert ("no hay estacion del año ,la variable esta fuera del rango de meses existentes. \n\n Nombre: Gustavo Adolfo Pereira Moreno \n Carnet: 08000114");
					
}

// ---------------------- Fin del programa ------------------------