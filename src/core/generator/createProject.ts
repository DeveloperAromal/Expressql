import { copyTemplate } from "@core/helpers/copyTemplate";
import { installDeps } from "@core/helpers/installDeps";
import Logger from "@utils/Logger";

export async function createProject(name: string) {
  Logger.info(`Creating project ${name}`);
  Logger.blank();

  await copyTemplate(name);

  Logger.blank();

  await installDeps(name);

  Logger.blank();
  Logger.success(`Success! Created ${name}`);
  Logger.blank();

  Logger.others("Next steps:");
  Logger.others(`  cd ${name}`);
  Logger.others("  npm run dev");
  Logger.blank();

  Logger.info("Happy hacking!");
}
