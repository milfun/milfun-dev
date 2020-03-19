/*
* @Author: MilFun
* @Date:   2020-03-19 11:53:05
* @Last Modified by:   milfun
* @Last Modified time: 2020-03-19 12:05:01
*/
module.exports = (gulp, milfun) => {
	const { task,src, dest,watch} = require('gulp');
	const rename = require('gulp-rename');
	const plumber = require('gulp-plumber');
	// 需要遍历的文件
	const sourceArr = [milfun.config.srcPath + '/**/*.html'];

	const taskName = 'html';
	gulp.task(taskName, (done) => {
		milfun.util.log('\n')
		milfun.util.log('Html', milfun.packageInfo.name + ' Html transfoming...');
		src(sourceArr)
		.pipe(plumber())
	 //    .pipe(rename((path) => path.extname = '.html'))
		// .pipe(dest(milfun.config.destPath))
		.pipe(milfun.browser.reload({stream: true}))
		milfun.util.log('Html', milfun.packageInfo.name + ' Html transfoming Done');
		done();
	});
	
}