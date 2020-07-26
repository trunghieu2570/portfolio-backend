if (process.env.NODE_ENV === 'production') {
	module.exports = ({ env }) => ({
	  defaultConnection: 'default',
	  connections: {
		default: {
		  connector: 'mongoose',
		  settings: {
		    uri: env('DATABASE_URI'),
		  },
		  options: {
		    ssl: true,
		  },
		},
	  },
	});
} else {
	module.exports = ({ env }) => ({
	  defaultConnection: 'default',
	  connections: {
		default: {
		  connector: 'mongoose',
		  settings: {
		    host: env('DATABASE_HOST', '127.0.0.1'),
		    srv: env.bool('DATABASE_SRV', false),
		    port: env.int('DATABASE_PORT', 27017),
		    database: env('DATABASE_NAME', 'blog-backend'),
		    username: env('DATABASE_USERNAME', 'strapi'),
		    password: env('DATABASE_PASSWORD', 'strapi123'),
		  },
		  options: {
		    authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
		    ssl: env.bool('DATABASE_SSL', false),
		  },
		},
	  },
	});
}
