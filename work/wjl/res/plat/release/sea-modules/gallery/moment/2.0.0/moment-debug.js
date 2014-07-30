define("gallery/moment/2.0.0/moment-debug",[],function(a,b,c){function d(a,b){return function(c){return k(a.call(this,c),b)}}function e(a){return function(b){return this.lang().ordinal(a.call(this,b))}}function f(){}function g(a){i(this,a)}function h(a){var b=this._data={},c=a.years||a.year||a.y||0,d=a.months||a.month||a.M||0,e=a.weeks||a.week||a.w||0,f=a.days||a.day||a.d||0,g=a.hours||a.hour||a.h||0,h=a.minutes||a.minute||a.m||0,i=a.seconds||a.second||a.s||0,k=a.milliseconds||a.millisecond||a.ms||0;this._milliseconds=k+1e3*i+6e4*h+36e5*g,this._days=f+7*e,this._months=d+12*c,b.milliseconds=k%1e3,i+=j(k/1e3),b.seconds=i%60,h+=j(i/60),b.minutes=h%60,g+=j(h/60),b.hours=g%24,f+=j(g/24),f+=7*e,b.days=f%30,d+=j(f/30),b.months=d%12,c+=j(d/12),b.years=c}function i(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function j(a){return 0>a?Math.ceil(a):Math.floor(a)}function k(a,b){for(var c=a+"";c.length<b;)c="0"+c;return c}function l(a,b,c){var d,e=b._milliseconds,f=b._days,g=b._months;e&&a._d.setTime(+a+e*c),f&&a.date(a.date()+f*c),g&&(d=a.date(),a.date(1).month(a.month()+g*c).date(Math.min(d,a.daysInMonth())))}function m(a){return"[object Array]"===Object.prototype.toString.call(a)}function n(a,b){var c,d=Math.min(a.length,b.length),e=Math.abs(a.length-b.length),f=0;for(c=0;d>c;c++)~~a[c]!==~~b[c]&&f++;return f+e}function o(a,b){return b.abbr=a,L[a]||(L[a]=new f),L[a].set(b),L[a]}function p(b){return b?(!L[b]&&M&&a("./lang/"+b),L[b]):H.fn._lang}function q(a){return a.match(/\[.*\]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function r(a){var b,c,d=a.match(O);for(b=0,c=d.length;c>b;b++)d[b]=gb[d[b]]?gb[d[b]]:q(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+="function"==typeof d[b].call?d[b].call(e,a):d[b];return f}}function s(a,b){function c(b){return a.lang().longDateFormat(b)||b}for(var d=5;d--&&P.test(b);)b=b.replace(P,c);return db[b]||(db[b]=r(b)),db[b](a)}function t(a){switch(a){case"DDDD":return S;case"YYYY":return T;case"YYYYY":return U;case"S":case"SS":case"SSS":case"DDD":return R;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":case"a":case"A":return V;case"X":return Y;case"Z":case"ZZ":return W;case"T":return X;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return Q;default:return new RegExp(a.replace("\\",""))}}function u(a,b,c){var d,e=c._a;switch(a){case"M":case"MM":e[1]=null==b?0:~~b-1;break;case"MMM":case"MMMM":d=p(c._l).monthsParse(b),null!=d?e[1]=d:c._isValid=!1;break;case"D":case"DD":case"DDD":case"DDDD":null!=b&&(e[2]=~~b);break;case"YY":e[0]=~~b+(~~b>68?1900:2e3);break;case"YYYY":case"YYYYY":e[0]=~~b;break;case"a":case"A":c._isPm="pm"===(b+"").toLowerCase();break;case"H":case"HH":case"h":case"hh":e[3]=~~b;break;case"m":case"mm":e[4]=~~b;break;case"s":case"ss":e[5]=~~b;break;case"S":case"SS":case"SSS":e[6]=~~(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,d=(b+"").match(ab),d&&d[1]&&(c._tzh=~~d[1]),d&&d[2]&&(c._tzm=~~d[2]),d&&"+"===d[0]&&(c._tzh=-c._tzh,c._tzm=-c._tzm)}null==b&&(c._isValid=!1)}function v(a){var b,c,d=[];if(!a._d){for(b=0;7>b;b++)a._a[b]=d[b]=null==a._a[b]?2===b?1:0:a._a[b];d[3]+=a._tzh||0,d[4]+=a._tzm||0,c=new Date(0),a._useUTC?(c.setUTCFullYear(d[0],d[1],d[2]),c.setUTCHours(d[3],d[4],d[5],d[6])):(c.setFullYear(d[0],d[1],d[2]),c.setHours(d[3],d[4],d[5],d[6])),a._d=c}}function w(a){var b,c,d=a._f.match(O),e=a._i;for(a._a=[],b=0;b<d.length;b++)c=(t(d[b]).exec(e)||[])[0],c&&(e=e.slice(e.indexOf(c)+c.length)),gb[d[b]]&&u(d[b],c,a);a._isPm&&a._a[3]<12&&(a._a[3]+=12),a._isPm===!1&&12===a._a[3]&&(a._a[3]=0),v(a)}function x(a){for(var b,c,d,e,f=99;a._f.length;){if(b=i({},a),b._f=a._f.pop(),w(b),c=new g(b),c.isValid()){d=c;break}e=n(b._a,c.toArray()),f>e&&(f=e,d=c)}i(a,d)}function y(a){var b,c=a._i;if(Z.exec(c)){for(a._f="YYYY-MM-DDT",b=0;4>b;b++)if(_[b][1].exec(c)){a._f+=_[b][0];break}W.exec(c)&&(a._f+=" Z"),w(a)}else a._d=new Date(c)}function z(a){var b=a._i,c=N.exec(b);void 0===b?a._d=new Date:c?a._d=new Date(+c[1]):"string"==typeof b?y(a):m(b)?(a._a=b.slice(0),v(a)):a._d=new Date(b instanceof Date?+b:b)}function A(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function B(a,b,c){var d=K(Math.abs(a)/1e3),e=K(d/60),f=K(e/60),g=K(f/24),h=K(g/365),i=45>d&&["s",d]||1===e&&["m"]||45>e&&["mm",e]||1===f&&["h"]||22>f&&["hh",f]||1===g&&["d"]||25>=g&&["dd",g]||45>=g&&["M"]||345>g&&["MM",K(g/30)]||1===h&&["y"]||["yy",h];return i[2]=b,i[3]=a>0,i[4]=c,A.apply({},i)}function C(a,b,c){var d=c-b,e=c-a.day();return e>d&&(e-=7),d-7>e&&(e+=7),Math.ceil(H(a).add("d",e).dayOfYear()/7)}function D(a){var b=a._i,c=a._f;return null===b||""===b?null:("string"==typeof b&&(a._i=b=p().preparse(b)),H.isMoment(b)?(a=i({},b),a._d=new Date(+b._d)):c?m(c)?x(a):w(a):z(a),new g(a))}function E(a,b){H.fn[a]=H.fn[a+"s"]=function(a){var c=this._isUTC?"UTC":"";return null!=a?(this._d["set"+c+b](a),this):this._d["get"+c+b]()}}function F(a){H.duration.fn[a]=function(){return this._data[a]}}function G(a,b){H.duration.fn["as"+a]=function(){return+this/b}}for(var H,I,J="2.0.0",K=Math.round,L={},M="undefined"!=typeof c&&c.exports,N=/^\/?Date\((\-?\d+)/i,O=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,P=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Q=/\d\d?/,R=/\d{1,3}/,S=/\d{3}/,T=/\d{1,4}/,U=/[+\-]?\d{1,6}/,V=/[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i,W=/Z|[\+\-]\d\d:?\d\d/i,X=/T/i,Y=/[\+\-]?\d+(\.\d{1,3})?/,Z=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,$="YYYY-MM-DDTHH:mm:ssZ",_=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],ab=/([\+\-]|\d\d)/gi,bb="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),cb={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},db={},eb="DDD w W M D d".split(" "),fb="M D H h m s w W".split(" "),gb={M:function(){return this.month()+1},MMM:function(a){return this.lang().monthsShort(this,a)},MMMM:function(a){return this.lang().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.lang().weekdaysMin(this,a)},ddd:function(a){return this.lang().weekdaysShort(this,a)},dddd:function(a){return this.lang().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return k(this.year()%100,2)},YYYY:function(){return k(this.year(),4)},YYYYY:function(){return k(this.year(),5)},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return k(~~(this.milliseconds()/10),2)},SSS:function(){return k(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+k(~~(a/60),2)+":"+k(~~a%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+k(~~(10*a/6),4)},X:function(){return this.unix()}};eb.length;)I=eb.pop(),gb[I+"o"]=e(gb[I]);for(;fb.length;)I=fb.pop(),gb[I+I]=d(gb[I],2);for(gb.DDDD=d(gb.DDD,3),f.prototype={set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=H([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return C(a,this._week.dow,this._week.doy)},_week:{dow:0,doy:6}},H=function(a,b,c){return D({_i:a,_f:b,_l:c,_isUTC:!1})},H.utc=function(a,b,c){return D({_useUTC:!0,_isUTC:!0,_l:c,_i:a,_f:b})},H.unix=function(a){return H(1e3*a)},H.duration=function(a,b){var c,d=H.isDuration(a),e="number"==typeof a,f=d?a._data:e?{}:a;return e&&(b?f[b]=a:f.milliseconds=a),c=new h(f),d&&a.hasOwnProperty("_lang")&&(c._lang=a._lang),c},H.version=J,H.defaultFormat=$,H.lang=function(a,b){return a?(b?o(a,b):L[a]||p(a),void(H.duration.fn._lang=H.fn._lang=p(a))):H.fn._lang._abbr},H.langData=function(a){return a&&a._lang&&a._lang._abbr&&(a=a._lang._abbr),p(a)},H.isMoment=function(a){return a instanceof g},H.isDuration=function(a){return a instanceof h},H.fn=g.prototype={clone:function(){return H(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},toString:function(){return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._d},toJSON:function(){return H.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return null==this._isValid&&(this._isValid=this._a?!n(this._a,(this._isUTC?H.utc(this._a):H(this._a)).toArray()):!isNaN(this._d.getTime())),!!this._isValid},utc:function(){return this._isUTC=!0,this},local:function(){return this._isUTC=!1,this},format:function(a){var b=s(this,a||H.defaultFormat);return this.lang().postformat(b)},add:function(a,b){var c;return c="string"==typeof a?H.duration(+b,a):H.duration(a,b),l(this,c,1),this},subtract:function(a,b){var c;return c="string"==typeof a?H.duration(+b,a):H.duration(a,b),l(this,c,-1),this},diff:function(a,b,c){var d,e,f=this._isUTC?H(a).utc():H(a).local(),g=6e4*(this.zone()-f.zone());return b&&(b=b.replace(/s$/,"")),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+f.daysInMonth()),e=12*(this.year()-f.year())+(this.month()-f.month()),e+=(this-H(this).startOf("month")-(f-H(f).startOf("month")))/d,"year"===b&&(e/=12)):(d=this-f-g,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?d/864e5:"week"===b?d/6048e5:d),c?e:j(e)},from:function(a,b){return H.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)},fromNow:function(a){return this.from(H(),a)},calendar:function(){var a=this.diff(H().startOf("day"),"days",!0),b=-6>a?"sameElse":-1>a?"lastWeek":0>a?"lastDay":1>a?"sameDay":2>a?"nextDay":7>a?"nextWeek":"sameElse";return this.format(this.lang().calendar(b,this))},isLeapYear:function(){var a=this.year();return a%4===0&&a%100!==0||a%400===0},isDST:function(){return this.zone()<H([this.year()]).zone()||this.zone()<H([this.year(),5]).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null==a?b:this.add({d:a-b})},startOf:function(a){switch(a=a.replace(/s$/,"")){case"year":this.month(0);case"month":this.date(1);case"week":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.day(0),this},endOf:function(a){return this.startOf(a).add(a.replace(/s?$/,"s"),1).subtract("ms",1)},isAfter:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)>+H(a).startOf(b)},isBefore:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)<+H(a).startOf(b)},isSame:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)===+H(a).startOf(b)},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return H.utc([this.year(),this.month()+1,0]).date()},dayOfYear:function(a){var b=K((H(this).startOf("day")-H(this).startOf("year"))/864e5)+1;return null==a?b:this.add("d",a-b)},isoWeek:function(a){var b=C(this,1,4);return null==a?b:this.add("d",7*(a-b))},week:function(a){var b=this.lang().week(this);return null==a?b:this.add("d",7*(a-b))},lang:function(a){return void 0===a?this._lang:(this._lang=p(a),this)}},I=0;I<bb.length;I++)E(bb[I].toLowerCase().replace(/s$/,""),bb[I]);E("year","FullYear"),H.fn.days=H.fn.day,H.fn.weeks=H.fn.week,H.fn.isoWeeks=H.fn.isoWeek,H.duration.fn=h.prototype={weeks:function(){return j(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+2592e6*this._months},humanize:function(a){var b=+this,c=B(b,!a,this.lang());return a&&(c=this.lang().pastFuture(b,c)),this.lang().postformat(c)},lang:H.fn.lang};for(I in cb)cb.hasOwnProperty(I)&&(G(I,cb[I]),F(I.toLowerCase()));G("Weeks",6048e5),H.lang("en",{ordinal:function(a){var b=a%10,c=1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),c.exports=H});