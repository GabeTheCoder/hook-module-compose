
import { ask } from './cli';
import { addDir, addAsset } from './asset';

const context = name => `
import React, { createContext, useContext } from 'react';

export const ${name}Context = createContext();
export const use${name} = useContext(${name}Context);
`;

const run = async () => {
    const name = await ask('Context Name: ');
    
    try {
        await addDir(name);
        await addAsset(name, name.toLowerCase() + '.js', context(name));

        console.log(`Added ${name} component to src/components`);
    } catch (e) {
        throw e;
    }
};

run();
