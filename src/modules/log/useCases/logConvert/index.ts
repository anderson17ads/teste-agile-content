import { SaveDataLog } from "./saveDataLog";
import { ReadSourceUrl } from "./readSourceUrl";
import { createLogFile } from "./createLogfile";

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

    if (dataSourceUrl.error) {
      console.log(dataSourceUrl.message);
      return;
    }

    // Save data in the log entity
    new SaveDataLog().execute(dataSourceUrl);
    
    // Create log file
    new createLogFile().execute(this.targetPath);
  }
}