"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.installDeps = installDeps;
const Logger_1 = __importDefault(require("@utils/Logger"));
const node_child_process_1 = require("node:child_process");
const node_path_1 = __importDefault(require("node:path"));
async function installDeps(name) {
    const cwd = node_path_1.default.resolve(process.cwd(), name);
    Logger_1.default.info("Installing dependencies...");
    (0, node_child_process_1.execSync)('npm i', { cwd, stdio: 'inherit' });
}
