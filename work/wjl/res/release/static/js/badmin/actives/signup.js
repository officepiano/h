seajs.use("calendar_css"),seajs.use(["$","calendar","util"],function(a,b){var c={setCal:function(){var a=new b({trigger:"#z_startDate"}),c=new b({trigger:"#z_endDate"});a.on("selectDate",function(a){c.range([a,null])}),c.on("selectDate",function(b){a.range([null,b])})}},d=function(){c.setCal()};d(),$$m.finish("ok")});