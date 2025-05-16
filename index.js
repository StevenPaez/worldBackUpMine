import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url"

const validateFolderExist = () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const folderName = 'build';
    const folderPath = join(__dirname, folderName);

    if (!existsSync(folderPath)) {
        console.log(`📁 Folder "${folderName}" does not exist.`);
        mkdirSync(folderPath, { recursive: true });
        console.log(`🔨 Folder "${folderName}" created.`);
        return;
    }

    console.log(`✅ Folder "${folderName}" exists.`);
    return;
}

const copyFolderToCompress = (nameWorld) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const __folderBase = `/home/.minecraft/save/${nameWorld}`;
}

const compressFolder = () => {}

const backupFolderCompress = () => {}

export const compressor = (req, res) => {
    res.setHeader('content-type', 'text/plain0');
    const nameWorld = req.nameWorld || 'New World';
    validateFolderExist();
    copyFolderToCompress(nameWorld);
}