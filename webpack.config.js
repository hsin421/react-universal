var path = require('path');

module.exports = [
	{
		name: 'client side config',
		entry: [	
			path.resolve(__dirname, 'app/client.js')
		],
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'app.client.js'
		},
		module: {
			loaders: [{
				test: /\.js$/, exclude: /node_modules/, loader: 'babel'
			}]
		}
	},
	{
		name: 'server side config',
		entry: [	
			path.resolve(__dirname, 'app/server.js')
		],
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'app.server.js',
			libraryTarget: "commonjs2"
		},
		module: {
			loaders: [{
				test: /\.js$/, exclude: /node_modules/, loader: 'babel'
			}]
		}

	}]