"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResult = exports.okayResult = void 0;
const okayResult = (value) => ({ ok: true, value });
exports.okayResult = okayResult;
const errorResult = (error) => ({ ok: false, error });
exports.errorResult = errorResult;
