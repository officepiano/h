$$m.length=3,seajs.use("calendar_css"),seajs.use(["$","textLimit","select","util","calendar"],function(a,b,c,d,e){var f={setCal:function(){var a=new e({trigger:"#z_startDate"}),b=new e({trigger:"#z_endDate"});a.on("selectDate",function(a){b.range([a,null])}),b.on("selectDate",function(b){a.range([null,b])});new e({trigger:"#z_onlineTime"})},setChangeRadio:function(){var a=[{name:"limitType",input:'input[name="limitQuantity"]',index:1}];d.changeRadio(a)},setTextarea:function(){b({input:"#txtDescription",tip:"#lblDescriptionMsg",msg:function(a){var b=a||{};return b.max-b.count<0?"输入已经超过了可允许的{max}字数":"还能输入{rest}个字"},max:1500,min:0,enableBr:!0,changeFn:function(){}}).init()}},g=function(){f.setChangeRadio(),f.setCal(),f.setTextarea()};g(),$$m.itemok("ok")}),seajs.use(["$","uploadify","util","_"],function(a,b,c){a(function(){c.bindUpload("#uploader-1",{imgSize:"500kb"})}),$$m.itemok("ok")}),seajs.use(["validator","$","util"],function(a,b,c){b(function(){function d(){var a=c.joinCheckboxVal(".join-chile-checbox-val"),d=b("#uploadImg1 .loaded-img").first().attr("data-src"),f={tag:a,pic:d};c.formSend("#"+e,{extraData:f,ajaxSuccess:function(a){c.go(a)},error:function(){c.alert("操作超时")},submitButton:"#btnSave"})}var e="frmCreate3";b("#frmActivesCreate").attr("id",e);var f=new a({element:"#"+e,onFormValidated:function(a){1!=a&&d()},autoSubmit:!1,failSilently:!0});f.addItem({element:'input[name="subject"]',required:!0,errormessageRequired:"请输入活动主题。"}).addItem({element:'input[name="place"]',required:!0,errormessageRequired:"请输入活动地点。"}).addItem({element:"#z_startDate",required:!0,errormessageRequired:"请输入 券有效期的开始时间。"}).addItem({element:"#z_endDate",required:!0,errormessageRequired:"请输入 券有效期的截止时间。"}).addItem({element:'textarea[name="remark"]',required:!0,errormessageRequired:"请输入详细描述。"}).addItem({element:"#z_onlineTime",required:!0,errormessageRequired:"请输入上线时间。"}).addItem({element:'[name="limitType"]',required:!0,errormessageRequired:"请选择参与名额。"}),b("[name=limitType]").change(function(){var a=b(this).attr("value");f.removeItem('[name="limitQuantity"]'),"2"==a?(b('[name="limitQuantity"]').attr("data-explain","请输入参与名额"),f.addItem({element:'[name="limitQuantity"]',required:!0,rule:"",errormessageRequired:"请输入参与名额"})):f.removeItem('[name="limitQuantity"]')}),"2"==b('[name="limitType"]:checked').val()&&b("[name=limitType]").trigger("change")}),$$m.itemok("ok")});