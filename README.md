#Readme

ESTRUCTURA DE PROYECTO

RESUMEN : 

![image](https://github.com/icastrillon/cypressSwagger/assets/33946503/28b075ef-bb38-4049-a702-69fa757bc689)


CÓMO EMPEZAR:

Precondición:

    Asegúrate de usar el Gestor de Paquete "YARN" en este proyecto en lugar de npm; para un mejor rendimiento de control de dependencias.
    Para instlar  puedes hacerlo simplemente corriendo en la terminal: npm i -g yarn

    1. Clona el Proyecto:

    git clone https://github.com/icastrillon/cypressSwagger.git

   Nota: Abril el proyecto desde la carpeta cypressSwagger 
   
   ![image](https://github.com/icastrillon/cypressSwagger/assets/33946503/4eae56de-fcff-4a2b-bbf0-edb90c70d4c1)

   
   2. Instala todas las dependencias del proyecto (incluyendo Cypress) con yarn:

 	yarn
  (correr yarn así solo, es para instalar todas las Dependencias Locked del Proyecto por el yarn.lock y el package.json)

3. IMPORTANTE antes de continuar, ABRE CYPRESS, para verificar sus dependencias:

	 yarn test

   También puede usar npx cypress open (ya que en Package.json tenemos la variable "test" como el "cypress open") para abrir Cypress.
   
4.  Configurar Cypress
 
 1. Seleccionar E2E Testing

![image](https://github.com/icastrillon/cypressSwagger/assets/33946503/fb6bd48c-859a-4aab-96ea-80c0ceca70e6)

  

 2. Seleccionar browser 

![image](https://github.com/icastrillon/cypressSwagger/assets/33946503/ced40f72-5a60-4ee5-9ee4-bc9fb77f84ca)


3. Iniciar testing 

3.1 Seleccionar  spec

![image](https://github.com/icastrillon/cypressSwagger/assets/33946503/5d0b7fff-4ce1-4ce1-8a66-1a9a01e2f610)


EJERCICIO 2 - AUTOMATIZACION API 


![image](https://github.com/icastrillon/cypressSwagger/assets/33946503/9e5abdd7-6cfd-45e3-a37c-35c52f2f786b)


4. Para ejecutar el reporte ir al terminar e ingresar

    yarn test:report
   ![image](https://github.com/icastrillon/cypressSwagger/assets/33946503/b265bf34-a79b-4f0c-9ab7-973cb70d91b7)


   ![image](https://github.com/icastrillon/cypressSwagger/assets/33946503/7eeeabdf-c27f-497a-91ca-2b62f383e972)

En la carpeta test_results están reportes en json , xml y html 

![image](https://github.com/icastrillon/cypressSwagger/assets/33946503/68f36443-d03a-4789-834d-e051653bfab5)

   

 
