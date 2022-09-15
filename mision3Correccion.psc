Algoritmo mision3Correccion
	
	definir menu, conta Como Entero
	definir nom, niv Como Caracter
	definir not, suma, promedio, promgeneral, cod, prom, numero, sumaprom Como Real
	Dimension not[3]
	pass=0
	pass2=0
	pass3=0
	pass4=0
	
	imprimir "-----MENU-----"
	imprimir "1. Numero de estudiantes"
	imprimir "2. Registrar datos de los estudiantes"
	imprimir "3. Listado de estudiantes"
	imprimir "4. Registrar notas de los estudiantes"
	imprimir "5. Imprimir notas de los estudiantes"
	imprimir "6. Autor, desarrollo del codigo"
	imprimir "7. Salir"
	
	Repetir
		leer menu
	Hasta Que menu=1 o menu=6 o menu=7

	Repetir
		Segun menu Hacer
			1:
				si n>0 Entonces
					imprimir "Esta paso ya se hizo"
					imprimir "Porfavor ingrese otro paso para seguir el programa"
					leer menu
				SiNo
					imprimir "--------------------------"
					Imprimir "Ingrese el numero total de estudiantes"
					leer n
					imprimir "--------------------------"
					Dimension numero[n]
					Dimension nom[n]
					Dimension cod[n]
					Dimension niv[n]
					Dimension prom[n]
					
					imprimir "-----MENU-----"
					imprimir "1. Numero de estudiantes"
					imprimir "2. Registrar datos de los estudiantes"
					imprimir "3. Listado de estudiantes"
					imprimir "4. Registrar notas de los estudiantes"
					imprimir "5. Imprimir notas de los estudiantes"
					imprimir "6. Autor, desarrollo del codigo"
					imprimir "7. Salir"
					leer menu
					si menu=1 Entonces
						imprimir "El paso 1 ya se hizo, no se puede volver a hacer"
						leer menu
					FinSi
				FinSi
				pass=1
			2:
				si pass=0 Entonces
					imprimir "No se a realizado el paso 1"
					leer menu
				FinSi
				
				imprimir "--------------------------"
				Para i<-0 Hasta n-1 Hacer
					imprimir "Escriba el nombre del estudiante"
					leer nom[i]
					para i<-0 hasta n-1 Hacer
						imprimir "Escriba el codigo del estudiante"
						leer cod[i]
						si i>0 Entonces
							para x<-0 Hasta i Hacer
								si cod[i]=cod[x] Entonces
									repetido=true
								FinSi
							FinPara
							Repetir
								si repetido=true Entonces
									imprimir "--------------------------"
									imprimir "El codigo del estudiante ya existe, porfa cambielo"
									imprimir "--------------------------"
								FinSi
								imprimir "--------------------------"
							Hasta Que repetido=false
						FinSi
					FinPara
				Fin Para

//					Para i<-0 Hasta n-1 Hacer
//						leer cod[i]
//					Fin Para

				imprimir "--------------------------"
				para i<-0 hasta n-1 Hacer
					imprimir "Escriba el nivel del estudiante " nom[i]
					Imprimir "Beginner, Junior, Senior"
					leer niv[i]
				FinPara
				
				imprimir "-----MENU-----"
				imprimir "1. Numero de estudiantes"
				imprimir "2. Registrar datos de los estudiantes"
				imprimir "3. Listado de estudiantes"
				imprimir "4. Registrar notas de los estudiantes"
				imprimir "5. Imprimir notas de los estudiantes"
				imprimir "6. Autor, desarrollo del codigo"
				imprimir "7. Salir"
				leer menu
				si menu=1 o menu=2 Entonces
					imprimir "El paso 1 y 2 ya se hizo, no se puede volver a hacer"
					leer menu
				FinSi
				pass2=1
			3:
				si pass=0 y pass2=0 Entonces
					imprimir "No se a realizado el paso 1 y 2"
					leer menu
				FinSi
				
				imprimir "--------------------------"
				Para i<-0 Hasta n-1 Hacer
					imprimir "Nombre del estudiante de codigo " cod[i] " nombre " nom[i]
					imprimir "El nivel de este estudiante es " niv[i]
					imprimir "--------------------------"
				Fin Para
				
				imprimir "-----MENU-----"
				imprimir "1. Numero de estudiantes"
				imprimir "2. Registrar datos de los estudiantes"
				imprimir "3. Listado de estudiantes"
				imprimir "4. Registrar notas de los estudiantes"
				imprimir "5. Imprimir notas de los estudiantes"
				imprimir "6. Autor, desarrollo del codigo"
				imprimir "7. Salir"
				leer menu
				si menu=1 o menu=2 o menu=3 Entonces
					imprimir "El paso 1, 2 y 3 ya se hizo, no se puede volver a hacer"
					leer menu
				FinSi
				pass3=1
			4:
				si pass=0 y pass2=0 y pass3=0 Entonces
					imprimir "No se a realizado el paso 1, 2 o 3"
					leer menu
				FinSi
				
				imprimir "--------------------------"
				Para i<-0 Hasta n-1 Hacer
					contaNot=1
					Para j<-0 Hasta 2 Hacer
						imprimir "Ingrese la nota " contaNot " del estudiante " nom[i]
						leer not[n]
						contaNot=contaNot+1
						imprimir "--------------------------"
					Fin Para
				Fin Para
				
				imprimir "-----MENU-----"
				imprimir "1. Numero de estudiantes"
				imprimir "2. Registrar datos de los estudiantes"
				imprimir "3. Listado de estudiantes"
				imprimir "4. Registrar notas de los estudiantes"
				imprimir "5. Imprimir notas de los estudiantes"
				imprimir "6. Autor, desarrollo del codigo"
				imprimir "7. Salir"
				leer menu
				si menu=1 o menu=2 o menu=3 o menu=4 Entonces
					imprimir "El paso 1, 2, 3 y 4 ya se hizo, no se puede volver a hacer"
					leer menu
				FinSi
				pass4=1
			5:
				si pass=0 y pass2=0 y pass3=0 y pass4=0 Entonces
					imprimir "No se a realizado el paso 1, 2, 3 o 4"
					leer menu
				FinSi
				
				imprimir "--------------------------"
				Para i<-0 Hasta n-1 Hacer
					contaNot=1
					Para j<-0 Hasta 2 Hacer
						imprimir "La nota " contaNot " del estudiante " nom[i]
						Imprimir not[n]
						contaNot=contaNot+1
						imprimir "--------------------------"
					Fin Para
			Repetir
				Repetir
					si nota<0 o nota>5 y i=0 Entonces
						i<-0
					SiNo
						si nota<0 o nota>5 Entonces
							i<-i-1
						FinSi
						suma<-suma+nota
					FinSi
				Hasta Que nota>=0 y nota<=5
			Hasta Que conta=3
			promedio<-suma/3-promedio
			prom[i]<-promedio
			si promedio>=3.5 Entonces
				imprimir "Aprobo"
			SiNo
				imprimir "No aprobo"
			FinSi
		Fin Para
		imprimir "-----MENU-----"
		imprimir "1. Numero de estudiantes"
		imprimir "2. Registrar datos de los estudiantes"
		imprimir "3. Listado de estudiantes"
		imprimir "4. Registrar notas de los estudiantes"
		imprimir "5. Imprimir notas de los estudiantes"
		imprimir "6. Autor, desarrollo del codigo"
		imprimir "7. Salir"
		leer menu
		//REVISAR SOLO IMPRIME LA ULTIMA NOTA ESCRITA, NO TODAS LAS INGRESADAS
			6:
				imprimir "Desarrollo Juan Diego Bohorquez Ordzu"
				imprimir "-----MENU-----"
				imprimir "1. Numero de estudiantes"
				imprimir "2. Registrar datos de los estudiantes"
				imprimir "3. Listado de estudiantes"
				imprimir "4. Registrar notas de los estudiantes"
				imprimir "5. Imprimir notas de los estudiantes"
				imprimir "6. Autor, desarrollo del codigo"
				imprimir "7. Salir"
				leer menu
		Fin Segun
	Hasta Que menu=7
	
FinAlgoritmo
