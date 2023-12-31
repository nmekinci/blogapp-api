"use strict"

require('dotenv').config()
const PORT = process.env?.PORT

const swaggerAutogen = require('swagger-autogen')()
const packageJson = require('./package.json')

const doc = {
    info: {
        version:"1.0.0",
      title: 'BlogApp-API',
      description: 'Documentation automatically generated by the <b>swagger-autogen</b> module.'
    },
    host: `localhost:${PORT}`,
    basePath: '/',
	schemes: ['http', 'https'],
    securityDefinitions: {
		Token: {
			type: 'apiKey',
			in: 'header',
			name: 'Authorization',
			description: 'Simple Token Authentication * Example: <b>Token ...Key...</b>'
		},
		Bearer: {
			type: 'apiKey',
			in: 'header',
			name: 'Authorization',
			description: 'JWT Authentication * Example: <b>Bearer ...accessToken...</b>'
		},
	},
	security: [{ Token: [] }, { Bearer: [] }],
    definition: {
		// Models:
		"User": require('./src/models/userModel').schema.obj,
		"Blog": require('./src/models/blogModel').schema.obj,
		"Category": require('./src/models/categoryModel').schema.obj,
		"Comment": require('./src/models/commentModel').schema.obj,
		"Like": require('./src/models/likeModel').schema.obj,
		"Report": require('./src/models/reportModel').schema.obj,
		"View": require('./src/models/viewModel').schema.obj,
	}
  };
  
  const outputFile = './src/helpers/swagger.json'
  const routes = ['./index.js'];
  
  swaggerAutogen(outputFile, routes, doc);

  //npm run swagger

