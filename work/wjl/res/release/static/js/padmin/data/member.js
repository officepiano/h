seajs.use("calendar_css"),seajs.use(["$","calendar"],function(a){var b={setCal:function(){},setChart1:function(){{var a={chart:{renderTo:"contain1",type:"column",animation:{duration:1e3}},subtitle:{text:"总数 4",align:"right",x:-10},legend:{enabled:!1},title:{text:"会员渠道数据统计"},xAxis:{categories:["wifi","微信"]},yAxis:{title:{text:"会员数量"}},series:[{name:"数量",data:[1,3],colorByPoint:1}],credits:{enabled:0}};new Highcharts.Chart(a)}},setChart2:function(){{var a={chart:{renderTo:"contain2",plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1},subtitle:{text:"总数 4",align:"right",x:-10},title:{text:"会员数量"},tooltip:{},credits:{enabled:0},series:[{type:"pie",name:"比例",data:[["wifi",20],["微信",80]]}]};new Highcharts.Chart(a)}},setChart3:function(){var b=[[Date.UTC(2010,0,1),.6976],[Date.UTC(2010,0,4),.6932],[Date.UTC(2010,0,5),.6962],[Date.UTC(2010,0,6),.6944],[Date.UTC(2010,0,7),.6985],[Date.UTC(2010,0,8),.694],[Date.UTC(2010,0,11),.6893],[Date.UTC(2010,0,12),.6908],[Date.UTC(2010,0,13),.6886],[Date.UTC(2010,0,14),.6897],[Date.UTC(2010,0,15),.6951],[Date.UTC(2010,0,18),.6943],[Date.UTC(2010,0,19),.7003],[Date.UTC(2010,0,20),.7086],[Date.UTC(2010,0,21),.7093],[Date.UTC(2010,0,22),.7074],[Date.UTC(2010,0,25),.7069],[Date.UTC(2010,0,26),.7101],[Date.UTC(2010,0,27),.7128],[Date.UTC(2010,0,28),.7162],[Date.UTC(2010,0,29),.7214],[Date.UTC(2010,1,1),.7184],[Date.UTC(2010,1,2),.7156],[Date.UTC(2010,1,3),.7195],[Date.UTC(2010,1,4),.7278],[Date.UTC(2010,1,5),.7312],[Date.UTC(2010,1,8),.7324],[Date.UTC(2010,1,9),.7256],[Date.UTC(2010,1,10),.7274],[Date.UTC(2010,1,11),.7307],[Date.UTC(2010,1,12),.7336],[Date.UTC(2010,1,15),.7355],[Date.UTC(2010,1,16),.7267]];a(function(){new Highcharts.StockChart({chart:{renderTo:"contain3"},title:{text:"会员注册走势情况分析"},xAxis:{tickPixelInterval:200,type:"datetime",labels:{formatter:function(){var a=new Date(this.value);return a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()},align:"center"}},yAxis:{title:{text:"Rate(汇率)"}},tooltip:{xDateFormat:"%Y-%m-%d, %A"},credits:{enabled:0},rangeSelector:{buttons:[{type:"week",count:1,text:"1周"},{type:"month",count:1,text:"1月"},{type:"year",count:1,text:"1年"},{type:"all",text:"全部"}],selected:3},series:[{name:"USD to EUR(美元对欧元)",data:b}]})})},setChart:function(){b.setChart1(),b.setChart2(),b.setChart3()},bind:function(){}},c=function(){b.setCal(),b.setChart()};c(),$$m.finish("ok")});