import { Log } from "./modules/log/domain/log";

export class App {
  public init(sourceUrl: string, targetPath: string): void {
    new Log().logConvert(sourceUrl, targetPath);
  }
}