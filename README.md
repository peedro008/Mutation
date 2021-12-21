Para correr el proyecto de forma local:
    1- Crear un archivo env.js en la carpeta raiz y exportar una variable con la cuenta de postgreSQL de la siguiente manera:
        (const postgre="yourUsername:yourPassword")
    2- Crear una base de datos en Postgres con el nombre: Mutation 
    3- Hacer una request HTTP post "./mutation" con el dna mediante body de la siguiente manera:
        {"dna":["ATGCGA","CCGTGC","TTATGT","AGAGGG","CCTCTA","TCACTG"]}
    4- Hacer una request HTTP get "./stats"



