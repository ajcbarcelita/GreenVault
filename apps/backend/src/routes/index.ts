import { FastifyInstance } from 'fastify';

export async function registerRoutes(server: FastifyInstance) {
  // Basic hello route
  server.get('/', async (_request, reply) => {
    return reply.send({ message: 'Hello World' });
  });

  // Example of adding more routes
  // import userRoutes from './userRoutes';
  // await server.register(userRoutes, { prefix: '/users' });
}