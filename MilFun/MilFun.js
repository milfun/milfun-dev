/*
* @Author: MilFun
* @Date:   2019-11-22 10:52:07
* @Last Modified by:   milfun
* @Last Modified time: 2020-03-19 12:09:43
*/

// 声明插件以及配置文件的依赖
const packageInfo = require('../package.json');
const util = new (require('./Util'))();
const defaultsDeep = require('lodash/defaultsDeep');
const browserSync = require('browser-sync')
const configDefault = require('../config.js');

// console.log(configDefault.paths)

// 创建 common 对象
class MilFun {
    constructor() {
        this.packageInfo = packageInfo;
        this.util = util;
        this.config = configDefault;
        this.browser = browserSync.create();
    }
}

module.exports = MilFun;
