import { LogType } from "../../domain/types/logType";

export class PrepareDataLog {
  execute(columns: string[]): LogType {
    return {
      provider: 'MINHA CDN',
      httpMethod: this.httpMethod(columns[3]),
      statusCode: parseInt(columns[1]) ?? '',
      uriPath: this.uriPath(columns[3]),
      timeTaken: this.timeTaken(columns[4]),
      reponseSize: parseInt(columns[0]) ?? 0,
      cacheStatus: this.cacheStatus(columns[2]),
    }
  }
  
  /**
   * Handle http Method value
   * 
   * @param column string
   * @returns string
   */
  private httpMethod(column: string): string {    
    const data = column.split(' ');
    return data[0].replace(/[^a-zA-Z]/g, '') ?? '';
  }

  /**
   * Handle uri path value
   * 
   * @param column string
   * @returns string
   */
  private uriPath(column: string): string {
    const data = column.split(' ');
    return data[1] ?? '';
  }
  
  /**
   * Handle cache Status value
   * 
   * @param column string
   * @returns string
   */
  private cacheStatus(column: string): string {
    const data = (column === 'INVALIDATE') ? 'REFRESH_HIT' : column;
    return data ?? '';
  }

  /**
   * Handle time taken value
   * 
   * @param column string
   * @returns number
   */
  private timeTaken(column: string): number {    
    return Math.round(parseFloat(column)) ?? 0;
  }
}