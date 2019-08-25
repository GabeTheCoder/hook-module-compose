
import { addDir, addAsset } from './asset';

const configName = process.env.npm_config_name || 'Component';
const name = configName.split(' ').join('');

const css = `
    .${name} {

    }
`;

const js = `
    import React from 'react';
    import style from './style.module.css';
    
    const ${name} = props => {

        return (
            <div className={style.${name}}>
                
            </div>
        );

    };

    export default ${name};
`;

const run = async () => {
    try {
        await addDir(name);
        await addAsset(name, 'index.js', js);
        await addAsset(name, 'style.module.css', css); 

        console.log(`Added ${name} component to src/components`);
    } catch (e) {
        throw e;
    }
};

run();