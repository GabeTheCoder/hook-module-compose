
import { ask } from './cli';
import { promises } from 'fs';

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

const run = async () => {
    const name = await ask('Component Name: ');
    
    try {
        await promises.mkdir(`./src/components/${name}`);
        await promises.writeFile(`./src/components/${name}/index.js`, js(name), 'utf8');
        await promises.writeFile(`./src/components/${name}/style.module.css`, css(name), 'utf8');
        console.log(`Added ${name} component to src/components`);
    } catch (e) {
        console.log(e);
    }
};

run();
