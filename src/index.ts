import Fastify from 'fastify';
import config from './config';

const server = Fastify({ logger: { level: 'warn' } });

server.get('/ping', function (request, reply) {
	return `pong: ${(reply.getResponseTime() * 1000).toFixed(2)}ms RTD\n`;
});

server.get('/', function (request, reply) {
	reply.send({ hello: 'world' });
});

server.listen({ port: config.port, host: config.host }, function (err, address) {
	if (err) {
		server.log.error(err);
		process.exit(1);
	}
	console.log(`Server listening on ${address}`);
});
