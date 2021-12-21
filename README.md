## Para correr el proyecto de forma local:
    
####    1- Crear un archivo env.js en la carpeta raiz y exportar una variable con la cuenta de postgreSQL de la siguiente manera: 
####       (const postgre="yourUsername:yourPassword")
####    2 - en db.js ("./src/db.js") decomentar la linea 2 y 8.  Comentar desde la linea 10 hasta la linea  15. 
####    3- Crear una base de datos en Postgres con el nombre: Mutation 
####    4- Hacer una request HTTP post "localhost:8080/mutation" con el dna mediante body de la siguiente manera:
####       {"dna":["ATGCGA","CCGTGC","TTATGT","AGAGGG","CCTCTA","TCACTG"]}
####    5- Hacer una request HTTP get "localhost:8080/stats"

## __________________________________________________________________________

## Para correr el proyecto de forma local:

#### -Para peticiones al servicio remoto repita los pasos 4 y 5 cambiando "localhost:8080/" por "https://mutation-env.eba-mje8mgew.us-east-2.elasticbeanstalk.com/"

## __________________________________________________________________________

## Test 
#### -Para correr los test escriba en la consola "npm test"
#### -Para ver el test coverage escriba en la consola "npx jest --coverage"