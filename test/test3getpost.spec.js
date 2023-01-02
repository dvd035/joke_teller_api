var chai = require('chai')
var assert = chai.assert
var should =  chai.should()
var expect = chai.expect

let chaiHttp = require('chai-http')//to send http request
chai.use(chaiHttp)

var server = require('../src/indexjoke')

describe('get post api testing', function(){
    
    it('get method test1 - category testing', function(done){
        chai.request(server)
        .get('/random')
        .end((error,response)=>{
            //console.log('anytext',response); 
            assert.equal(response.body.category,'Programming')
            done();
        })
    })

    it('get method test2 - joke body testing', function(done){
        chai.request(server)
        .get('/random')
        .end((error,response)=>{
            response.body.joke.should.be.a('string')
            done();
        })
    })
})