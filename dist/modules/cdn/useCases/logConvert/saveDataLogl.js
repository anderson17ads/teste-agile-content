"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleDataSourceUrl = void 0;
const log_1 = require("../../domain/entities/log");
class HandleDataSourceUrl {
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
    saveData(item) {
        const columns = item.split('|');
        if (columns.length !== 5) {
            return;
        }
        log_1.Log.create({
            provider: '',
            httpMethod: '',
            statusCode: 0,
            uriPath: '',
            timeTaken: 1,
            reponseSize: 2,
            cacheStatus: '',
        });
    }
}
exports.HandleDataSourceUrl = HandleDataSourceUrl;
