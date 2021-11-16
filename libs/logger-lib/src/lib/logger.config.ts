import { LogFormatterService } from './log-formatter.service';

export abstract class LoggerConfig {
  enableDebug?: boolean;
  logFormatterType?: LogFormatterServiceType;
}

export type LogFormatterServiceType = new () => LogFormatterService;
