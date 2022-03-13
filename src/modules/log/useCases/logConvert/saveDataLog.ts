import { Log } from "../../domain/entities/log";
import { PrepareDataLog } from "./prepareDataLog";

export class SaveDataLog {
  execute(data: string): void {
    const dataToArray = data
      .replace(/\r\n/g, '\n')
      .split('\n');

    if (dataToArray) {
      dataToArray.map(item => {
        if (item) {
          this.saveData(item);
        }
      });
    }    
  }

  /**
   * Save data in the log entity
   * 
   * @param item string
   * @returns void
   */
  private saveData(item: string): void {
    const columns = item.split('|');
    
    if (columns.length !== 5) {
      return;
    }

    Log.create(new PrepareDataLog().execute(columns));
  }
}