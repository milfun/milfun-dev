/*
* @Author: MilFun
* @Date:   2019-11-22 10:18:31
* @Last Modified by:   milfun
* @Last Modified time: 2020-03-19 10:41:27
*/
module.exports = (gulp, milfun) => {
	const taskName = 'hello';
	gulp.task(taskName, (done) => {
		milfun.util.log('\n')
	    milfun.util.log('  |\\_/|        ****************************    (\\_/)');
	    milfun.util.log(' / @ @ \\       * " Gulp Tool For WebDev  " *   (=\'.\'=)');
	    milfun.util.log('( > º < )      *       MilFun Chan        *   (")_(")');
	    milfun.util.log(' \`>>x<<\´       *      (milfun@qq.com)     *');
	    milfun.util.log(' /  O  \\       ****************************');
	    milfun.util.log('\n')
	    done();
	});
}