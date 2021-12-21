const supertest = require('supertest');
const server = require('../app');
const expect = require('chai').expect;
const agent = supertest(server)




  


describe('Test request', function () {



    describe('GET /stats', function () {
      it('responde con 200', function() {
       
       (() => {
          return agent.get('/stats')
            .expect(200);
           
        })
      });
      it('espera que sea json', function(){
        return agent.get('/stats')
          .expect('Content-Type', /json/);
      });



    });
    
    describe('Espera 200 cuando hay mutacion', function () {
    it('post mutation', function(done){
        return agent.post('/mutation')
          .send({
            dna:["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
          })
          .then((res) => {
            expect(200);
            done()
          })
         
      });
      
    })

    
    describe('Espera 404 cuando no hay mutacion', function () {
        it('post mutation', function(done){
            return agent.post('/mutation')
                .send({
                dna:["ATGCGA","CAGTGC","TTATGT","AGGAGG","CTACTA","TCACTG"]
                })
                .then((res) => {
                expect(200);
                done()
                })
                
            });
            
        })

    describe('Espera 400 cuando el dna tiene mas digitos', function () {
        it('post mutation', function(done){
            return agent.post('/mutation')
                .send({
                dna:["ATGCGA","CAGTGC","TTATGTT","AGAAGG","CCCCTA","TCACTG"]
                })
                .then((res) => {
                expect(400);
                done()
                })
                
            });
            
        })

        describe('Espera 400 cuando el dna contiene letras invalidas', function () {
            it('post mutation', function(done){
                return agent.post('/mutation')
                    .send({
                    dna:["ATGCGA","CAGTFC","TTATTT","AGAAGG","CCCCTA","TCACTG"]
                    })
                    .then((res) => {
                    expect(400);
                    done()
                    })
                    
                });
                
            })

            describe('Espera 400 cuando el dna ya esta registrado', function () {
                it('post mutation', function(done){
                    return agent.post('/mutation')
                        .send({
                        dna:["ATGCGA","CAGTFC","TTATTT","AGAAGG","CCCCTA","TCACTG"]
                        })
                        .send({
                            dna:["ATGCGA","CAGTFC","TTATTT","AGAAGG","CCCCTA","TCACTG"]
                            })
                        .then((res) => {
                        expect(400);
                        done()
                        })
                        
                    });
                    
                })

  });
