import { LogConvert } from "../useCases/logConvert";

export class Log {
  logConvert(sourceUrl: string, targetPath: string): void {
    new LogConvert(sourceUrl, targetPath).execute();
  }
}