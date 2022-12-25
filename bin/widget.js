import {program} from 'commander';

import packageJson from '../package.json' assert {type: 'json'};
import createWidget from "../lib/createWidget.js";

program
    .version(`@widget-js/cli ${packageJson.version}`)
    .usage('<command> [options]')
program
    .command('create')
    .description('创建新的组件')
    .action(async () => {
        await createWidget()
    })

program.parse(process.argv);




