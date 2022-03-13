"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cdn = void 0;
const logConvert_1 = require("../useCases/logConvert");
class Cdn {
    logConvert(sourceUrl, targetPath) {
        new logConvert_1.LogConvert(sourceUrl, targetPath).execute();
    }
}
exports.Cdn = Cdn;
