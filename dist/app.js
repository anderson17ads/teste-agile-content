"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const cdn_1 = require("./modules/cdn/domain/cdn");
class App {
    init(sourceUrl, targetPath) {
        new cdn_1.Cdn().logConvert(sourceUrl, targetPath);
    }
}
exports.App = App;
