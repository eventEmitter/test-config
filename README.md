# test-config

Test configuration loader

## installation

    npm test-config

## build status

[![Build Status](https://travis-ci.org/eventEmitter/test-config.png?branch=master)](https://travis-ci.org/eventEmitter/test-config)


## usage
    
    // if the localconfig exists in the projects root path
    // the config is loaded from there, else the object passed
    // as parameter 2 is returned
    
    var config = new Config('localConfig.js', {b:2});