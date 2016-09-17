var webpackConfig = require( './webpack.config.js' );

module.exports = function( config ) {
	config.set( {
		browsers: [ 'Chrome' ], // Specify the browsers in which the tests will run
		singleRun: true,
		frameworks: [ 'mocha' ],
		files: [ 'app/tests/**/*.test.jsx' ], // matching pattern of the path of test files 
		preprocessors: {
			'app/tests/**/*.test.jsx': [ 'webpack', 'sourcemap' ], // towards the files of the path specified run specific preprocessors
		},
		reporters: [ 'mocha' ], // the thing that shows which tests have failed or succeded
		client: {
			mocha: {
				timeout: '5000' // set timeout for tests to be canceled
			}
		},
		webpack: webpackConfig,
		webpackServer: {
			noInfo: true
		}	
	} );
}