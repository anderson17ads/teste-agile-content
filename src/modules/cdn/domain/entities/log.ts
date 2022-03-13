import { Entity } from "../../../../core/domain/entity";
import { LogType } from "../types/logType";

export class Log extends Entity<LogType> {
  private static items: LogType[] = [];

  private constructor(props: LogType, id?: string) {
    super(props, id);
  }

  /**
   * Create log entity data
   * 
   * @param props LogType
   * @param id string
   */
  static create(props: LogType, id?: string): void {
    this.items.push(props);
  }

  /**
   * Find all data of the log entity
   * 
   * @returns LogType[]
   */
  static findAll(): LogType[] {
    return this.items;
  }
}