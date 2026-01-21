"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class Logger {
    static log(type, message) {
        const timestamp = new Date().toISOString();
        switch (type) {
            case "success":
                console.log(chalk_1.default.green(`[SUCCESS] ${timestamp} - ${message}`));
                break;
            case "info":
                console.log(chalk_1.default.cyan(`[INFO] ${timestamp} - ${message}`));
                break;
            case "warn":
                console.log(chalk_1.default.yellow(`[WARN] ${timestamp} - ${message}`));
                break;
            case "error":
                console.log(chalk_1.default.red(`[ERROR] ${timestamp} - ${message}`));
                break;
            default:
                console.log(chalk_1.default.magenta(`[LOG] ${timestamp} - ${message}`));
        }
    }
    static info(message) {
        this.log("info", message);
    }
    static success(message) {
        this.log("success", message);
    }
    static warn(message) {
        this.log("warn", message);
    }
    static error(message) {
        this.log("error", message);
    }
    static other(message) {
        this.log("default", message);
    }
}
exports.default = Logger;
