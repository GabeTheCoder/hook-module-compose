
import { ask } from './cli';
import { promises } from 'fs';

const context = name => `
import { createContext, useContext } from 'react';

export const ${name}Context = createContext();
export const use${name} = () => useContext(${name}Context);
`;

const run = async () => {
    const name = await ask('Context Name: ');
    
    try {
        await promises.writeFile(`./src/contexts/${name.toLowerCase()}.js`, context(name), 'utf8');
        console.log(`Added ${name} context to src/contexts`);
    } catch (e) {
        console.log(e);
    }
};

run();
