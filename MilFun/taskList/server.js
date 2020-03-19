/*
* @Author: MilFun
* @Date:   2020-03-19 11:24:51
* @Last Modified by:   milfun
* @Last Modified time: 2020-03-19 12:09:11
*/


module.exports = (gulp, milfun) => {

	const taskName = 'server';
	// 静态服务器 + 监听css文件
	gulp.task(taskName, function() {
	    milfun.browser.init({
	        server: {
	            baseDir:'./',  // 设置服务器的根目录
            	index:'src/index.html' // 指定默认打开的文件
	        },
	        port: 3033
	    });
	    // 需要监听的内容文件
		milfun.util.log('Watch', milfun.packageInfo.name + ' start Watching...');
	    //  Scss转化为 Wxss
		const styleWatch = gulp.watch([milfun.config.paths.stylePath], gulp.series(['sass']));
		//  Html修改更新
		const htmlWatch = gulp.watch([milfun.config.srcPath],gulp.series(['html']));
	});
}