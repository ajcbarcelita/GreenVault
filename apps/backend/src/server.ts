import 'dotenv/config';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';

import Fastify from 'fastify';
import { serverConfig } from './config/serverConfig.js';
import { registerRoutes } from './routes/index.js';

const server = Fastify(serverConfig);

// Register plugins
await server.register(cors);
await server.register(helmet);

// Register routes
await registerRoutes(server);

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
server.listen({ port: PORT, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`Server listening on ${address}`);
});