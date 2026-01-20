"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatteAPI = void 0;
const formatteAPI = (status_code, message, data) => {
    return {
        status_code,
        data,
        message,
    };
};
exports.formatteAPI = formatteAPI;
