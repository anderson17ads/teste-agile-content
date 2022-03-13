"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadSourceUrl = void 0;
const axios_1 = __importDefault(require("axios"));
class ReadSourceUrl {
    async execute(sourceUrl) {
        return await axios_1.default.get(sourceUrl)
            .then(response => {
            return response.data;
        })
            .catch(e => {
            return {
                error: true,
                message: e.message,
            };
        });
    }
}
exports.ReadSourceUrl = ReadSourceUrl;
