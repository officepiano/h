seajs.use("calendar_css"),seajs.use(["$","calendar","select"],function(a,b,c){var d={},e={setSel:function(){new c({trigger:"#j_selData"}).render()},setChart1:function(b){a("#contain2").highcharts({title:{text:""},subtitle:{text:""},xAxis:{categories:b.dataArr},yAxis:{title:{text:"新增注册会员数（人）"},plotLines:[{value:0,width:1,color:"#808080"}]},tooltip:{valueSuffix:"人"},legend:{layout:"vertical",align:"right",verticalAlign:"middle",borderWidth:0},series:b.channalArr})},setChart2:function(a){var b={chart:{renderTo:"contain1",plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1},subtitle:{text:"",align:"right",x:-10},title:{text:""},tooltip:{},credits:{enabled:0},series:[{type:"pie",name:"比例",data:a}]};d.chart2=new Highcharts.Chart(b)},sendAjax:function(){a.ajax({url:"/rpt_mall_member_index_d_register_channel",data:{},dataType:"json"}).done(function(a){if(a&&200==a.code){for(var b=[],c=0,d=a.data,f=0,g=0;g<d.length;g++)c+=parseInt(d[g].member_count);for(var h=0;h<d.length;h++)f=parseFloat((100*parseInt(d[h].member_count||0)/c).toFixed(2)),b.push([d[h].register_channel,f]);e.setChart2(b)}}).fail(function(){})},sendAjax2:function(){a.ajax({url:"/member_account_register_channel",data:{days:a("#j_selData").val()},dataType:"json"}).done(function(a){if(200==a.code){for(var b=a.data,c={dataArr:[],datas:{},monthMark:{},dataMark:{}},d=0;d<b.length;d++)c.monthMark[b[d].event_day]||(c.dataArr.push(b[d].event_day),c.monthMark[b[d].event_day]=1),c.dataMark[b[d].register_channel]?c.datas[b[d].register_channel].push(b[d].cnt):(c.datas[b[d].register_channel]=[b[d].cnt],c.dataMark[b[d].register_channel]=1);var f=[];for(var g in c.datas)f.push({name:g,data:c.datas[g]});e.setChart1({dataArr:c.dataArr,channalArr:f})}}).fail(function(){})},bind:function(){a("#j_contrast").on("click",function(){e.sendAjax2()}),a("#j_contrast").trigger("click")}},f=function(){e.setSel(),e.sendAjax(),e.bind()};f(),$$m.finish("ok")});