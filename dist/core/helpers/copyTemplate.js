"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyTemplate = copyTemplate;
const Logger_1 = __importDefault(require("@utils/Logger"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
async function copyTemplate(projectName) {
    const projectRoot = path_1.default.resolve(process.cwd(), projectName);
    const candidates = [
        path_1.default.resolve(__dirname, "../../../src/template/base"),
        path_1.default.resolve(__dirname, "../../../template/base"),
        path_1.default.resolve(__dirname, "../../template/base"),
        path_1.default.resolve(__dirname, "../../../../src/template/base"),
    ];
    let templateRoot = candidates.find((p) => fs_1.default.existsSync(p));
    if (!templateRoot) {
        let dir = __dirname;
        for (let i = 0; i < 6 && !templateRoot; i++) {
            const p = path_1.default.resolve(dir, "template", "base");
            if (fs_1.default.existsSync(p))
                templateRoot = p;
            dir = path_1.default.resolve(dir, "..");
        }
    }
    if (!templateRoot) {
        throw new Error(`Template folder not found. Searched locations: ${candidates.join(", ")}`);
    }
    if (fs_1.default.existsSync(projectName)) {
        throw new Error(`Folder "${projectName}" already exists`);
    }
    fs_1.default.cpSync(templateRoot, projectRoot, {
        recursive: true,
    });
    Logger_1.default.success("Completed");
}
