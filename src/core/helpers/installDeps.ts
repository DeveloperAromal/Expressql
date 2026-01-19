import Logger from "@utils/Logger";
import { execSync } from "node:child_process";
import path from "node:path";



export async function installDeps(name:string) {
    
    const cwd = path.resolve(process.cwd(), name)

    Logger.info("📦 Installing dependencies...");

    execSync('npm i', {cwd, stdio: 'inherit'})

}