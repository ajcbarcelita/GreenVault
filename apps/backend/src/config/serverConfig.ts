export const serverConfig = {
  // let Fastify create the logger itself with your options
  logger: {
    level: 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'yyyy-mm-dd HH:MM:ss',
        levelFirst: true
      }
    }
  },
  disableRequestLogging: true,
};