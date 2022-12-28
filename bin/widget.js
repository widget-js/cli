import {program} from 'commander';
import createWidget from "../lib/createWidget.js";
import release from "../lib/release/release.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJsonPath = path.join(__dirname, '../package.json');
let cliPackage = JSON.parse(fs.readFileSync(packageJsonPath).toString());

program
    .version(`@widget-js/cli ${cliPackage.version}`)
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




