
import Logger from "@utils/Logger"
import { createProject } from "@core/generator/createProject";

export async function initCommand(name: string) {
    
    if (!name) {
        Logger.info("Project name is required");
        process.exit(1)
    }

    await createProject(name)

}