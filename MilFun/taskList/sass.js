/*
* @Author: MilFun
* @Date:   2019-11-22 10:28:28
* @Last Modified by:   milfun
* @Last Modified time: 2020-03-19 12:06:08
*/

module.exports = (gulp, milfun) => {
	const { task,src, dest,watch} = require('gulp');
	const gsass = require('gulp-sass');
	const rename = require('gulp-rename');
	const plumber = require('gulp-plumber');
	// 需要遍历的文件
	const sourceArr = [milfun.config.paths.stylePath + 'milfun.scss'];

	const taskName = 'sass';
	gulp.task(taskName, (done) => {
		milfun.util.log('\n')
		milfun.util.log('Sass', ' Scss To Wxss 进入自动转化...');
		src(sourceArr)
		.pipe(plumber())
	    .pipe(gsass()) // Using gulp-sass
	    .pipe(rename((path) => path = 'app.css'))
		.pipe(dest(milfun.config.destPath))
		.pipe(milfun.browser.reload({stream: true}))
		milfun.util.log('Sass', ' Scss To css 转化完成！');
		done();
	});
	
}