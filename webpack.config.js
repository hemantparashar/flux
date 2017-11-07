var path = require('path');

module.exports = {
	entry:"./app/App.js",
	output:{
		path:path.resolve(__dirname,"dist"),
		filename:"bundle.js"
	},
	module:{
		rules:[
			{
				test:/\.(js|jsx)$/,
				use:'babel-loader'
			}
		]
	}
}