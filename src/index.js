
import readline from 'readline';
import { addDir, addAsset } from './asset';

const css = name => `
.${name} {
    
}
`;

const js = name => `
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

const cli = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
});

const run = async name => {
    try {
        await addDir(name);
        await addAsset(name, 'index.js', js(name));
        await addAsset(name, 'style.module.css', css(name)); 

        console.log(`Added ${name} component to src/components`);
    } catch (e) {
        throw e;
    }
};

cli.question('Component Name: ', name => {
    run(name);
    cli.close();
});
