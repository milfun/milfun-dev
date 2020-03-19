/*
* @Author: MilFun
* @Date:   2020-03-19 13:52:24
* @Last Modified by:   milfun
* @Last Modified time: 2020-03-19 13:52:24
*/
!function (e) {
    // console.log(e)
    var t = 'modules',
    d = document,

    // 正式环境，这里改为空
    dir = 'src/js/',
    vue = true,
    ext = vue ? '.vue' : '.js' ,
    modules = {
        button:'./modules/button'
    }
    milfun = function(){
        this.v="2.5.6"
    };
    milfun.prototype.use = function (name,cb) {
        
        var script = d.createElement('script'),fn = cb || function (){};
        script.async = !0, script.charset = "utf-8", 
        /* vue  */
        script.src = dir + modules[name]  + ext
        // vue ?  : dir + modules[name] 
        script.type = 'text/javascript';
        script.onload = function (){ fn(); }
        d.getElementsByTagName('head')[0].appendChild(script);
    }
    e.milfun = new milfun
}(window)

