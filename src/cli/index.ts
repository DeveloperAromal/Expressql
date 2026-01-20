import Logger from "@utils/Logger";
import { createProject } from "@core/generator/createProject";

export async function initCommand(name?: string) {
  if (!name) {
    Logger.error("Project name is required");
    Logger.warn("Usage:");
    Logger.warn("  expressql init <project-name>");
    Logger.warn("  expressql create <project-name>");
    process.exit(1);
  }

  await createProject(name);
}
