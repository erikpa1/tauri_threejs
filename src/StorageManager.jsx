import {join, resourceDir, appDir} from "@tauri-apps/api/path";
import {convertFileSrc} from "@tauri-apps/api/tauri";

export default class StorageManager {

    static RESOURCES = "";

    static async Init() {

        const path = await join(await resourceDir(), 'resources/')
        const assetUrl = convertFileSrc(path);

        console.log(assetUrl)

        StorageManager.RESOURCES = assetUrl;

        // console.log("---------")
        // console.log(StorageManager.RESOURCES)
    }

    static getPathInResources(path) {
        // console.log(StorageManager.RESOURCES)
        return `${StorageManager.RESOURCES}${path}`
    }


    static async convertFileResourcePath(path) {
        //await resourceDir()
        const appDirPath = await appDir()

        const joinedPath = await join(appDirPath, "assets", path)
        const assetUrl = convertFileSrc(joinedPath);
        return assetUrl
        

    }

    static createDirectory() {
        // createDir('resources', {dir: BaseDirectory.Resource, recursive: true}).then((e) => {
        //     console.log(e)
        // });
    }

}








