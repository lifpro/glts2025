"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberError = void 0;
class NumberError extends Error {
    constructor(message, code) {
        super(code + ":" + message);
        this.name = "NumberErrors";
    }
}
exports.NumberError = NumberError;
