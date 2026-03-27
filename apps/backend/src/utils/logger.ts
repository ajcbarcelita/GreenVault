// src/utils/logger.ts
import pino, { Logger } from 'pino';

const logger: Logger = pino({
  level: 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'HH:MM:ss',
      levelFirst: true
    }
  }
});

export default logger;