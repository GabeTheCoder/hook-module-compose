
const fs = require('fs');

const name = process.argv;

const css = `.${name} {
    
}`;

const js = `
    import React from 'react';
    
    const ${name} = props => {

    };

    export default ${name};
`;

const run = async () => {
    try {
        await addAsset(name, 'index.js', js);
        await addAsset(name, 'style.module.css', css); 
    } catch (e) {
        throw e;
    }
};

run();

// MARK: Utils

const addAsset = (componentName, assetName, content) => new Promise((resolve, reject) => {
    const path = `./src/components/${componentName}/${assetName}`;

    fs.writeFile(path, content, error => {
        if (error) {
            const error = new Error('Could not add asset file: ' + path);
            error.code = 'write-file-error';
            return reject(error);
        }
        
        resolve(path);
    });
});