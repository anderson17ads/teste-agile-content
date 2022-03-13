"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogConvert = void 0;
const saveDataLog_1 = require("./saveDataLog");
const readSourceUrl_1 = require("./readSourceUrl");
class LogConvert {
    constructor(sourceUrl, targetPath) {
        this.sourceUrl = sourceUrl;
        this.targetPath = targetPath;
    }
    async execute() {
        // Read data of the source url
        const readSourceUrl = new readSourceUrl_1.ReadSourceUrl();
        const dataSourceUrl = await readSourceUrl.execute(this.sourceUrl);
        // Save data in the log entity
        new saveDataLog_1.SaveDataLog().execute(dataSourceUrl);
    }
}
exports.LogConvert = LogConvert;
