!function() {

	var   Class 		= require('ee-class')
        , path          = require('path')
		, log 			= require('ee-log')
        , project       = require('ee-project');



	module.exports = new Class({

		init: function(configfileName, testConfig) {

            // try to load config from file
            try {
                this.config = require(path.join(project.root, configfileName));
            } catch (err) {
                //log.debug('Failed to load local config file «'+configfileName+'»: '+err.message);
                this.config = testConfig;
            }

            if (!this.config) this.config = {};

            return this.config;
		}
	});
}();
