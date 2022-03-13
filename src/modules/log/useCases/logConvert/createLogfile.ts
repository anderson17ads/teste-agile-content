import fs from 'fs';
import { currentDateTime } from '../../../../utils/date';
import { Log } from '../../domain/entities/log';

export class createLogFile {
  execute(targetPath: string): void {
    this.write(targetPath);
  }

  /**
   * Create and write log file
   * 
   * @param targetPath string
   * @returns void
   */
  private write(targetPath: string): void {
    const file = fs.createWriteStream(targetPath);

    file.on('error', error => {
      console.log(error.message);
      return;
    });

    file.write(`${this.header()}\n`);

    Log.findAll().map(item => {
      const line = Object.values(item).join(' ');
      file.write(`${line}\n`);
    });

    file.end();
  }

  /**
   * Create header
   * 
   * @returns string
   */
  private header(): string {
    return [
      '#Version: 1.0',
      `#Date: ${currentDateTime()}`,
      this.fields(),
    ].join('\n');
  }

  /**
   * Create fields to header
   * 
   * @returns string
   */
  private fields(): string {
    const fields = [
      'provider',
      'http-method',
      'status-code',
      'uri-path',
      'time-taken',
      'reponse-size',
      'cache-status',
    ].join(' ');

    return `#Fields: ${fields}`;
  }
}