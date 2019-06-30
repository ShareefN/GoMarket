var expect  = require('chai').expect; 
var tools = require('./server/controllers/userCtrl');

describe('createUser()', function() {
    it('should create a new user', function() {

        var result = tools.createUser({user})
        expect(result).to.equal(user)
    })
});

describe('getUser()', function(){
	it('should get the user', function(){
		var result = tools.getUser({user})
		expect(result).to.equal(user)
	})
});

describe('createEmployee()', function(){
	it('should get the employee', function(){
		var result = tools.getUser({user})
		expect(result).to.equal(user)
	})
});

describe('getEmployee()', function(){
	it('should get the user', function(){
		var result = tools.getUser({user})
		expect(result).to.equal(user)
	})
});