
	
	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, assert 		= require('assert');



	var Config = require('../')



	describe('The Config', function(){
		it('should be loaded when available', function(){
			assert.deepEqual(new Config('localConfig.js', {b:2}), {a:1});
		});

		it('should not be loaded when not avialble', function(){
			assert.deepEqual(new Config('nope.js', {b:2}), {b:2});
		});
	});
	