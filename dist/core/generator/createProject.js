"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = createProject;
const copyTemplate_1 = require("@core/helpers/copyTemplate");
const installDeps_1 = require("@core/helpers/installDeps");
const Logger_1 = __importDefault(require("@utils/Logger"));
async function createProject(name) {
    Logger_1.default.info(`Creating project ${name}`);
    Logger_1.default.blank();
    await (0, copyTemplate_1.copyTemplate)(name);
    Logger_1.default.blank();
    await (0, installDeps_1.installDeps)(name);
    Logger_1.default.blank();
    Logger_1.default.success(`Success! Created ${name}`);
    Logger_1.default.blank();
    Logger_1.default.others("Next steps:");
    Logger_1.default.others(`  cd ${name}`);
    Logger_1.default.others("  npm run dev");
    Logger_1.default.blank();
    Logger_1.default.info("Happy hacking!");
}
