import { Injectable } from '@angular/core';
import { LogFormatterService } from '@flight-workspace/logger-lib';
// ^^^ Perhaps you have to type this manually

@Injectable()
export class CustomLogFormatterService implements LogFormatterService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  format(message: string): string {
    const now = new Date().toISOString();
    return `[${now}] ${message}`;
  }
}
