/**
|--------------------------------------------------
| Wills Media Server
| utils.js
| by wsngamerz
|--------------------------------------------------
*/

import { promises as fs } from "fs"
import path from "path"


export const walkDirectory = async (directory) => {
    let files = await fs.readdir(directory)
    files = await Promise.all(files.map(async file => {
        const filePath = path.join(directory, file)
        const stats = await fs.stat(filePath)
        if (stats.isDirectory()) {
            return walkDirectory(filePath)
        } else if (stats.isFile()) {
            return filePath
        }
    }))

    return files.reduce((all, folderContents) => all.concat(folderContents), [])
}
