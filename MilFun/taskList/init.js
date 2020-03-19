/*
* @Author: MilFun
* @Date:   2019-11-22 09:46:15
* @Last Modified by:   milfun
* @Last Modified time: 2020-03-19 13:53:33
*/
// 创建一个新项目
const fs = require('fs');
const upperFirst = require('lodash/upperFirst');
const mkdirp = require('mkdirp');
const path = require('path');
const os = require('os');

module.exports = (gulp, milfun) => {
	const { src, dest} = require('gulp');
	const rename = require('gulp-rename');
	const taskName = 'init';
	gulp.task(taskName, (done) => {
		// 创建一个新项目
		milfun.util.log('\n')
		milfun.util.log('Init', milfun.packageInfo.name + ' is initializing...');
	    
	    // 项目目录初始化
	    const srcPath = milfun.config.srcPath
	    if (!fs.existsSync(srcPath)) {
	    	mkdirp(srcPath);
	    }
	    // 获取配置中定义的标准目录
	    let keyList = Object.keys(milfun.config.paths)
	    keyList.forEach(v =>{
	    	if (!fs.existsSync(milfun.config.paths[v])) {
	    		console.log(milfun.config.paths[v])
	    		milfun.util.log('Creat', milfun.packageInfo.name + 'new ' + milfun.config.paths[v] + ' Done...');
		    	mkdirp(milfun.config.paths[v]);
		    }
	    })
	    // 复制拉取 样式 文件
	    src('MilFun/mfui/**/*.scss')
	    // .pipe(sass()) // Using gulp-sass
	    .pipe(rename((path) => path.extname = '.scss'))
	    .pipe(dest(milfun.config.paths.stylePath))

	    // // 复制拉取 html 文件
	    src('MilFun/mfui/**/*.html')
	    .pipe(dest(milfun.config.srcPath))
	    milfun.util.log('\n')

	    // // 复制拉取 html 文件
	    src('MilFun/mfui/**/*.js')
	    .pipe(dest(milfun.config.paths.jsPath))
	    milfun.util.log('Init', ' All Done！');
	    milfun.util.log('Pull', milfun.packageInfo.name + 'get html done , please code it in src/');
	    milfun.util.log('\n')
	 	
	 	// // 启动serve热更新
	  //   gulp.series(['serve'])
	    done();
	});
}

