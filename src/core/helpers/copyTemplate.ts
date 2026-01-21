import Logger from "@utils/Logger";
import fs from "fs";
import path from "path";

export async function copyTemplate(projectName: string) {
  const projectRoot = path.resolve(process.cwd(), projectName);

  const candidates = [
    path.resolve(__dirname, "../../../src/template/base"),
    path.resolve(__dirname, "../../../template/base"),
    path.resolve(__dirname, "../../template/base"),
    path.resolve(__dirname, "../../../../src/template/base"),
  ];

  let templateRoot: string | undefined = candidates.find((p) => fs.existsSync(p));

  if (!templateRoot) {
    let dir = __dirname;
    for (let i = 0; i < 6 && !templateRoot; i++) {
      const p = path.resolve(dir, "template", "base");
      if (fs.existsSync(p)) templateRoot = p;
      dir = path.resolve(dir, "..");
    }
  }

  if (!templateRoot) {
    throw new Error(
      `Template folder not found. Searched locations: ${candidates.join(", ")}`,
    );
  }

  if (fs.existsSync(projectName)) {
    throw new Error(`Folder "${projectName}" already exists`);
  }

  fs.cpSync(templateRoot, projectRoot, {
    recursive: true,
  });

  Logger.success("Completed");
}
