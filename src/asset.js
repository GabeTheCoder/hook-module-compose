
import fs from 'fs';

const basePath = './src/components';

export const addDir = componentName => new Promise((resolve, reject) => {
    const path = `${basePath}/${componentName}`;

    fs.mkdir(path, error => {
        if (error) {
            const dirError = new Error('Could not add component path: ' + path);
            dirError.code = 'write-dir-error';
            return reject(dirError);
        }

        resolve(path);
    });
});

export const addAsset = (componentName, assetName, content) => new Promise((resolve, reject) => {
    const path = `${basePath}/${componentName}/${assetName}`;

    fs.writeFile(path, content, error => {
        if (error) {
            const assetError = new Error('Could not add asset file: ' + path);
            assetError.code = 'write-file-error';
            return reject(assetError);
        }
        
        resolve(path);
    });
});
