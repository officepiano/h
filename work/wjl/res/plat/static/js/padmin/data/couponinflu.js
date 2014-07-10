seajs.use("calendar_css");
seajs.use(["$","util", "calendar","select"], function($,util, Calendar,Select) {
    var _o = {};
    var _p = {
        setSel : function(){
            _o.mounth1 = new Select({
                trigger: '#j_Mounth1'
            }).render();
            _o.mounth2 = new Select({
                trigger: '#j_Mounth2'
            }).render();
        },
        setChart1: function(opt) {
            var option = {
                chart: {
                    renderTo: 'contain2',
                    type: 'column',
                    animation: {
                        duration: 1000
                    }
                },
                subtitle: {
                    text: '',
                    align: 'right',
                    x: -10
                },
                legend: {
                    enabled: false
                },
                title: {
                    text: '优惠券对到访频次影响分析'
                },
                xAxis: {
                    categories: opt.monthArr
                },
                yAxis: {
                    title: {
                        text: '次'
                    }
                },
                series: [opt.obj1,opt.obj2],
                credits: { //版权
                    enabled: 0
                }
            }
            var chart1 = new Highcharts.Chart(option);
        },
        setChart2: function(opt) {
            $('#contain1').highcharts({
                title: {
                    text: '优惠券对到访停留时间的影响分析'
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories : opt.dayArr
                },
                yAxis: {
                    title: {
                        text: '分钟'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '分钟'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name : '有优惠券',
                    data : opt.arr1
                },{
                    name : '没有优惠券',
                    data : opt.arr2
                }]
            });
        },
        sendAjax : function(){
            $.ajax({
                url: '/rpt_mall_visit_staytime_d_tick',
                data: {},
                dataType: 'json'
            }).done(function(json){
                if(json && json.code == 200){
                    var data = json.data;
                    var arr1 = [];
                    var arr2 = [];
                    var dayArr = [];
                    for(var i = 0;i < data.length;i++){
                        dayArr.push( data[i].eve_day );
                        arr1.push( parseInt(data[i].t_stay_time) || 0 );
                        arr2.push( parseInt(data[i].stay_time) || 0 );
                    }
                    _p.setChart2({
                        dayArr : dayArr,
                        arr1 : arr1,
                        arr2 : arr2
                    });
                }
            }).fail(function(){});
        },
        sendAjax2 : function(month1,month2){
            $.ajax({
                url: '/rpt_mall_visit_freq_p_tick',
                data: {
                    month1 : month1,
                    month2 : month2
                },
                dataType: 'json'
            }).done(function(json){
                if(json && json.code == 200){
                    var data1 = json.data1;
                    var data2 = json.data2;
                    var monthArr = [data1[0].eve_day,data2[0].eve_day];
                    var obj1 = {
                        name: '领取优惠券会员',
                        data: [(parseInt(data1[0].t_freq) || 0),(parseInt(data2[0].t_freq) || 0)],
                        stack: '领取优惠券会员'
                    };
                    var obj2 = {
                        name: '未领取优惠券会员',
                        data: [(parseInt(data1[0].nt_freq) || 0),(parseInt(data2[0].nt_freq) || 0)],
                        stack: '未领取优惠券会员'
                    };
                    _p.setChart1({
                        monthArr : monthArr,
                        obj1 : obj1,
                        obj2 : obj2
                    });
                }
            }).fail(function(){});
        },
        bind : function(){
            $('#j_contrast').on('click',function(){
                _p.sendAjax2( $('#j_Mounth1').val(),$('#j_Mounth2').val() );
            });
        }
    }
    var init = function() {
        _p.setSel();
        _p.sendAjax();
        _p.bind();
        $('#j_contrast').trigger('click');
    }
    init();
    $$m.finish('ok');
});
