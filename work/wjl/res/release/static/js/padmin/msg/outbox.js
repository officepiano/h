seajs.use("calendar_css"),seajs.use(["$","select","util","calendar"],function(a,b,c,d){var e={setCal:function(){var a=new d({trigger:"#jStartDate"}),b=new d({trigger:"#jEndDate"});a.on("selectDate",function(a){b.range([a,null])}),b.on("selectDate",function(b){a.range([null,b])})}},f=function(){e.setCal()};f(),$$m.finish("ok")});