
import readline from 'readline';

const cli = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
});

export const ask = prompt => new Promise(resolve => {
    cli.question(prompt, input => {
        resolve(input);
        cli.close();
    });
});
