import 'dotenv/config';

const env = process.env;

export default {
	port: +env.PORT! || 8080,
	host: env.HOST || 'localhost'
};
