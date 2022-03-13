import { Cdn } from "./modules/cdn/domain/cdn";

export class App {
  public init(sourceUrl: string, targetPath: string): void {
    new Cdn().logConvert(sourceUrl, targetPath);
  }
}