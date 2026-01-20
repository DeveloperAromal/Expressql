import Logger from "@utils/Logger";
import fs from "fs";
import path from "path";

export async function copyTemplate(projectName: string) {
  const projectRoot = path.resolve(process.cwd(), projectName);

  const templateRoot = path.resolve(__dirname, "../../../src/template/base/");

  if (fs.existsSync(projectName)) {
    throw new Error(`Folder "${projectName}" already exists`);
  }

  fs.cpSync(templateRoot, projectRoot, {
    recursive: true,
  });

  Logger.success("Completed");
}
