/*
* @Author: MilFun
* @Date:   2019-11-22 10:18:31
* @Last Modified by:   milfun
* @Last Modified time: 2020-03-19 11:38:58
*/


// 文件监控
module.exports = (gulp, milfun) => {
	const taskName = 'watch';
	gulp.task(taskName, (done) => {

        // 需要监听的内容文件
		milfun.util.log('Watch', milfun.packageInfo.name + ' is Watching...');

		//  Scss转化为 Wxss
		const styleWatch = gulp.watch([milfun.config.paths.stylePath], gulp.series(['sass']));

		//  Html修改更新
		const htmlWatch = gulp.watch([milfun.config.srcPath + '*.html'],browserSync.reload);
		//  图片压缩
		
		//  Js压缩
		
		done();
        
	});
};
