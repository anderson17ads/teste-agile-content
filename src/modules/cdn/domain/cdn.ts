import { LogConvert } from "../useCases/logConvert";

export class Cdn {
  logConvert(sourceUrl: string, targetPath: string): void {
    new LogConvert(sourceUrl, targetPath).execute();
  }
}