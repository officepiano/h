seajs.use("calendar_css"),seajs.use(["$","select","util","calendar","confirmbox"],function(a,b,c,d){var e={setCal:function(){var a=new d({trigger:"#z_startDate"}),b=new d({trigger:"#z_endDate"});a.on("selectDate",function(a){b.range([a,null])}),b.on("selectDate",function(b){a.range([null,b])})},getHtml:function(a){var b=['<div class="dialog-form">','<form action="/t/sms/cancel" id="j_fall">',"<p>是否确认终止发送？</p>",'<input type="hidden" value="',a,'" name="serialId" />',"</form>","</div>"].join("");return b},sb:function(a){c.formSend(a.form,{ajaxSuccess:function(a){c.go(a)},error:function(){c.alert("操作超时")},submitButton:a.submitButton})},bind:function(){a(".z_stop_send").on("click",function(){var b=a(this).data("id");Util.confirm.open({title:"确认操作",message:e.getHtml(b),confirmTpl:'<span class="ui-dialog-button-orange ui-dialog-button-orange2" id="j_bt_yes">确定</span>',cancelTpl:'<span class="ui-dialog-button-orange ui-dialog-button-orange2" id="j_bt_no">取消</span>',width:300,onConfirm:function(){e.sb({form:"#j_fall",submitButton:"#j_bt_yes"})},onCancel:function(){c.confirm.close()},onClose:function(){}})}),a(".hidetxtcon").hover(function(){a(this).find("div p").show()},function(){a(this).find("div p").hide()})}},f=function(){e.setCal(),e.bind()};f(),$$m.finish("ok")});