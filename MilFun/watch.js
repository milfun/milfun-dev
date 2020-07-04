/*
* @Author: MilFun
* @Date:   2019-11-22 10:18:31
* @Last Modified by:   Administrator
* @Last Modified time: 2020-04-24 11:09:59
*/


// 文件监控
module.exports = (gulp) => {
	const taskName = 'watch';
	gulp.task(taskName, (done) => {

        // 需要监听的内容文件
		console.log('Watch', milfun.packageInfo.name + ' is Watching...');

		//  Scss转化为 Wxss
		const styleWatch = gulp.watch(['./app.js'], gulp.series(['all']));

		//  Html修改更新
		// const htmlWatch = gulp.watch([milfun.config.srcPath + '*.html'],browserSync.reload);
		//  图片压缩
		
		//  Js压缩
		
		done();
        
	});
};
