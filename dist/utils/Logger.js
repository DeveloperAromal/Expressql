"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class Logger {
    static info(message) {
        console.log(chalk_1.default.cyan(message));
    }
    static success(message) {
        console.log(chalk_1.default.green(message));
    }
    static warn(message) {
        console.log(chalk_1.default.yellow(message));
    }
    static error(message) {
        console.log(chalk_1.default.red(message));
    }
    static others(message) {
        console.log(chalk_1.default.magenta(message));
    }
    static step(message) {
        console.log(chalk_1.default.gray(message));
    }
    static blank() {
        console.log();
    }
}
exports.default = Logger;
