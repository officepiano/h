// 下拉列表初始化 & 审核对话框 & 审核处理
seajs.use("calendar_css");
seajs.use(["$", 'select', "calendar", "util"], function($, Select, Calendar, util) {
    // 下拉列表，状态初始化
    new Select({
        trigger: '#qstate'
    }).render();
	var _p = {
        setCal: function() {
            var c1 = new Calendar({
                trigger: '#jStartTime'
            });
            var c2 = new Calendar({
                trigger: '#jEndTime'
            });
            c1.on('selectDate', function(date) {
                c2.range([date, null]);
            });
            c2.on('selectDate', function(date) {
                c1.range([null, date]);
            });
        }
    }
    var init = function() {
        _p.setCal();
    }
    init();
    $$m.finish('ok');
    
});