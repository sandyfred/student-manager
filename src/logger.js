import { createLogger, transports, format } from "winston";

const logger = createLogger({
  format: format.combine(
    format.errors({ stack: true }),
    format.metadata(),
    format.json()
  ),
  transports: [new transports.Console()],
});

export default logger;
