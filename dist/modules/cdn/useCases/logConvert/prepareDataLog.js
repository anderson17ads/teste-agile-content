"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrepareDataLog = void 0;
class PrepareDataLog {
    execute(columns) {
        var _a, _b;
        return {
            provider: 'MINHA CDN',
            httpMethod: this.httpMethod(columns[3]),
            statusCode: (_a = parseInt(columns[1])) !== null && _a !== void 0 ? _a : '',
            uriPath: this.uriPath(columns[3]),
            timeTaken: this.timeTaken(columns[4]),
            reponseSize: (_b = parseInt(columns[0])) !== null && _b !== void 0 ? _b : 0,
            cacheStatus: this.cacheStatus(columns[2]),
        };
    }
    /**
     * Handle http Method value
     *
     * @param column string
     * @returns string
     */
    httpMethod(column) {
        var _a;
        const data = column.split(' ');
        return (_a = data[0].replace(/[^a-zA-Z]/g, '')) !== null && _a !== void 0 ? _a : '';
    }
    /**
     * Handle uri path value
     *
     * @param column string
     * @returns string
     */
    uriPath(column) {
        var _a;
        const data = column.split(' ');
        return (_a = data[1]) !== null && _a !== void 0 ? _a : '';
    }
    /**
     * Handle cache Status value
     *
     * @param column string
     * @returns string
     */
    cacheStatus(column) {
        const data = (column === 'INVALIDATE') ? 'REFRESH_HIT' : column;
        return data !== null && data !== void 0 ? data : '';
    }
    /**
     * Handle time taken value
     *
     * @param column string
     * @returns number
     */
    timeTaken(column) {
        var _a;
        return (_a = Math.round(parseFloat(column))) !== null && _a !== void 0 ? _a : 0;
    }
}
exports.PrepareDataLog = PrepareDataLog;
