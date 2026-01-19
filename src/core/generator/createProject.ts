import { copyTemplate } from "@core/helpers/copyTemplate";
import { installDeps } from "@core/helpers/installDeps";
import Logger from "@utils/Logger";


export async function createProject(name: string) {
    Logger.info(`Creating project: ${name}`)

    await copyTemplate(name)
    await installDeps(name)

    Logger.success(`${name} created sucessfully`);

}