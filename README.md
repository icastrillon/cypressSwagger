#Readme

ESTRUCTURA DE PROYECTO

RESUMEN : 

![image](https://github.com/icastrillon/retoAutomatizacion/assets/33946503/a5731c56-8205-4854-9196-fdbdbc61f36f)

CÓMO EMPEZAR:

Precondición:

    Asegúrate de usar el Gestor de Paquete "YARN" en este proyecto en lugar de npm; para un mejor rendimiento de control de dependencias.
    Para instlar  puedes hacerlo simplemente corriendo en la terminal: npm i -g yarn

    1. Clona el Proyecto:

    git clone https://github.com/upex-galaxy/cypress-template-gx.git


   2. Instala todas las dependencias del proyecto (incluyendo Cypress) con yarn:

 	yarn
  (correr yarn así solo, es para instalar todas las Dependencias Locked del Proyecto por el yarn.lock y el package.json)

3. IMPORTANTE antes de continuar, ABRE CYPRESS, para verificar sus dependencias:

	 yarn test

   También puede usar npx cypress open (ya que en Package.json tenemos la variable "test" como el "cypress open") para abrir Cypress.
   
4.  Configurar Cypress
Seleccionar E2E Testing

   ![image](https://github.com/icastrillon/retoAutomatizacion/assets/33946503/1a5fdba5-9aec-4dbb-807c-95c2e6f14b71)

Seleccionar browser 

![image](https://github.com/icastrillon/retoAutomatizacion/assets/33946503/1a05a92c-62a2-4251-b881-1c28d3c3540b)

Iniciar testing 

Seleccionar el ejercicion
![image](https://github.com/icastrillon/retoAutomatizacion/assets/33946503/aecd2e68-7924-4c7b-965a-4715753bf6c9)


EJERCICIO 1 
1. Creación de paginas 
	homePage y register 
	para segmentar las variables y los metodos que se van a utiliza en cada pagina 
2. Creación fixtures con la data a utilizar en cada pagina 
3. Importar las paginas en el proyecto 
4. crear el paso de prueba 
5 ejecutar el caso de prueba con nmp run prod


![image](https://github.com/icastrillon/retoAutomatizacion/assets/33946503/10427066-ec79-4d59-aa13-b71a2b3b5b83)

Seleccionar SPECS para ir al otro ejercicio

![image](https://github.com/icastrillon/retoAutomatizacion/assets/33946503/7ce97cbf-ffb4-4146-b6ed-bd9120ef98cb)

9. Para ejecutar el reporte ir al terminar e ingresar
    yarn run html-report 

![image](https://github.com/icastrillon/retoAutomatizacion/assets/33946503/8eca37a2-57a3-4d8a-88d3-1cc66e0523fe)

![image](https://github.com/icastrillon/retoAutomatizacion/assets/33946503/4ecb5fc7-cab4-4e76-907b-dd298e74e512)


EJERCICIO 2 
1. Creación de casos de prueba por cada endpoint
2. Validación de los endpoints
3. Ejecutar el caso de prueba con nmp run prod

![image](https://github.com/icastrillon/retoAutomatizacion/assets/33946503/1a0c97a0-2d39-41d6-bd9a-3e9f40a9981f)


![image](https://github.com/icastrillon/retoAutomatizacion/assets/33946503/0f938ccf-a902-4477-812b-5b10cf2ff4d6)

4. Para ejecutar el reporte ir al terminar e ingresar
   yarn run html-api

   ![image](https://github.com/icastrillon/retoAutomatizacion/assets/33946503/9032ed81-da28-4b6e-b712-398034bf1227)
