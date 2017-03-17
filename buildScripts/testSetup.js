//register babel to transpile before our tests run
require('babel-register')();

//Disable webpack features that mocha won't understand
require.extensions['.css']=function(){};
