"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initCommand = initCommand;
const Logger_1 = __importDefault(require("@utils/Logger"));
const createProject_1 = require("@core/generator/createProject");
async function initCommand(name) {
    if (!name) {
        Logger_1.default.error("Project name is required");
        Logger_1.default.warn("Usage:");
        Logger_1.default.warn("  expressql init <project-name>");
        Logger_1.default.warn("  expressql create <project-name>");
        process.exit(1);
    }
    await (0, createProject_1.createProject)(name);
}
