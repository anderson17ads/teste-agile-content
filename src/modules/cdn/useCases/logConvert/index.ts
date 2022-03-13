import { SaveDataLog } from "./saveDataLog";
import { ReadSourceUrl } from "./readSourceUrl";

export class LogConvert {
  private sourceUrl: string;
  private targetPath: string;

  constructor(sourceUrl: string, targetPath: string) {
    this.sourceUrl = sourceUrl;
    this.targetPath = targetPath;
  }

  async execute(): Promise<void> {
    // Read data of the source url
    const readSourceUrl = new ReadSourceUrl();    
    const dataSourceUrl = await readSourceUrl.execute(this.sourceUrl);

    // Save data in the log entity
    new SaveDataLog().execute(dataSourceUrl);
    
    
  }
}