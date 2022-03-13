"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveDataLog = void 0;
const log_1 = require("../../domain/entities/log");
const prepareDataLog_1 = require("./prepareDataLog");
class SaveDataLog {
    execute(data) {
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
    saveData(item) {
        const columns = item.split('|');
        if (columns.length !== 5) {
            return;
        }
        log_1.Log.create(new prepareDataLog_1.PrepareDataLog().execute(columns));
    }
}
exports.SaveDataLog = SaveDataLog;
