/*
* @Author: MilFun
* @Date:   2020-03-19 13:52:24
* @Last Modified by:   milfun
* @Last Modified time: 2020-03-19 13:52:24
*/
function cell(e){
    return `
    <div class="tc-cell" >
			<div class="head"></div>
			<div class="body">
				<div class="body-one">
					<div class="title">${e.title}</div>
					<div class="value">${e.value}</div>
				</div>
				<div class="body-two">
					<div class="label">${e.label}</div>
					<div class="note">${e.note || ''}</div>
				</div>
			</div>
			<div class="button"></div>
		</div>`
}
function card(e){
    return `
    <div class="tc-card">
        <div class="tc-cell" >
            <div class="head"></div>
            <div class="body">
                <div class="body-one">
                    <div class="title">${e.title}</div>
                    <div class="value">${e.value}</div>
                </div>
                <div class="body-two">
                    <div class="label">${e.label}</div>
                </div>
            </div>
            <div class="button"></div>
        </div>
        <div class="tc-cell" >
            <div class="head"><image class="img-30" src="${e.logo}" /></div>
            <div class="body">
                <div class="body-one">
                    <div class="title">${e.company}</div>
                    <div class="value"><image class="img-20" src="${e.rightImg}" /></div>
                </div>
            </div>
        </div>
    </div>`
}

!function (e) {
    // console.log(e)
    var t = 'modules',
    d = document,

    // 正式环境，这里改为空
    dir = 'src/js/',
    ext = '.js' ,
    modules = {
        cell:cell,
        card:card
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
    milfun.prototype.render = function(comp,value){
        if(modules[comp]){
           return modules[comp](value)
        }else{
            console.log('该组件不存在，请添加')
        }
    }

    e.milfun = new milfun
    // 自动加载运行
}(window)

