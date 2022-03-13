"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
const entity_1 = require("../../../../core/domain/entity");
class Log extends entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    /**
     * Create log entity data
     *
     * @param props LogType
     * @param id string
     */
    static create(props, id) {
        this.items.push(props);
    }
    /**
     * Find all data of the log entity
     *
     * @returns LogType[]
     */
    static findAll() {
        return this.items;
    }
}
exports.Log = Log;
Log.items = [];
