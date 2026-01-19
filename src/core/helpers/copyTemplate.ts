import Logger from '@utils/Logger'
import fs from 'fs'
import path from 'path'



export async function copyTemplate(name: string) {
    
    const target = path.resolve(process.cwd(), name)
    const template = path.resolve('templates/base')


    fs.cpSync(template, target, {
                                    recursive: true
                                }
    )
    
    Logger.success("Completed")

}