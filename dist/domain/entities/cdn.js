"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cdn = void 0;
const entity_1 = require("../../core/domain/entity");
class Cdn extends entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const cdn = new Cdn(props, id);
        return cdn;
    }
}
exports.Cdn = Cdn;
