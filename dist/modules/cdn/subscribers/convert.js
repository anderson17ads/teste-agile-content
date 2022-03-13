"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Convert = void 0;
class Convert {
    constructor(sourceUrl, targetPath) {
        this.sourceUrl = sourceUrl;
        this.targetPath = targetPath;
        this.convert();
    }
    convert() {
        console.log('Convert');
    }
}
exports.Convert = Convert;
