import {program} from 'commander';

import packageJson from '../package.json' assert {type: 'json'};
import createWidget from "../lib/createWidget.js";
import release from "../lib/release/release.js";

program
    .version(`@widget-js/cli ${packageJson.version}`)
    .usage('<command> [options]')
program
    .command('create')
    .description('创建新的组件')
    .action(async () => {
        await createWidget()
    })
program
    .command('release')
    .description('发布应用，仅内部使用')
    .action(async () => {
        await release()
    })

//TODO init 初始化项目
//TODO publish 发布
program.parse(process.argv);




