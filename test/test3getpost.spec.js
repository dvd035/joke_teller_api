var chai = require('chai')
var assert = chai.assert
var should =  chai.should()
var expect = chai.expect

let chaiHttp = require('chai-http')
chai.use(chaiHttp)

var server = require('../src/indexjoke')

describe('get post api testing', function(){
    it('get method test1', function(done){
        chai.request(server)
        .get('/random')
        .end((error,response)=>{
            //console.log('hjkl',response); 
            assert.equal(response.body.category,'Programming')
            done();
        })
    })
})