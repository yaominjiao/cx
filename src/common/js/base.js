const base = base || {}

export default base

/*******原型方法添加*******/

/**
 * 添加或者替换
 * @params [0]  字符串或者json数组对象 [ { k:v } ]
 * @params [1]  当参数0为以字符串作为key时此参数为value
 * @return String
 */
String.prototype.toggleUrlParams = function (k, v) {
    var str = this.toString(),
        reg1 = new RegExp("\\?" + k + "\=.*?\&", "g"),
        reg2 = new RegExp("\&" + k + "\=.*?\&", "g"),
        reg3 = new RegExp("\\?" + k + "\=.*$", "g"),
        reg4 = new RegExp("\&" + k + "\=.*$", "g"),
        m1 = "";

    var _olstr = str;

    //删除锚点数据
    if (/\#.*?/.test(str)) {
        str = str.substring(0, str.indexOf("#"));
        m1 = _olstr.substring(_olstr.indexOf("#"));
    }

    str = str.replace(reg1, "?")
        .replace(reg2, "&")
        .replace(reg3, "")
        .replace(reg4, "");

    return str += (/\?/.test(str) ? "&" : "?") + (k + "=" + v) + m1;
};

/**
 * 得到地址栏参数
 * @param name 参数名称
 * @param urls 从指定的urls获取参数
 * @returns string
 */
String.prototype.getQueryString = function (name, urls) {
    urls = urls || window.location.href;
    if (this) {
        urls = this;
    }

    //删除锚点数据
    if (/\#.*?\&/.test(urls)) {
        urls = urls.substring(0, urls.lastIndexOf("#"));
    }

    if (urls && urls.indexOf("?") > -1) { urls = urls.substring(urls.indexOf("?") + 1); }
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = urls ? urls.match(reg) : window.location.search.substr(1).match(reg);
    if (r != null && r[2] != "") {
        var ms = r[2].match(/(\<)|(\>)|(%3C)|(%3E)/g);
        if (ms && ms.length >= 4) {
            //如果检测到有2对及以上开始和结束尖括号
            r[2] = r[2].replace(/(\<)|(%3C)/g, "");
        }
        return r[2];
        // return  unescape(r[2]);
    }
    return null;
};
/**
 * 
 * 添加日期原型方法
 */
String.prototype.FormatDate = function (fmt) {
    var date = this;
    var arr = date.match(/(\d+)/g)
    var _y = arr[0] | 0,
        _M = (arr[1] | 1) - 1,
        _d = arr[2] | 1,
        _h = arr[3] | 0,
        _m = arr[4] | 0,
        _s = arr[5] | 0;

    return new Date(_y, _M, _d, _h, _m, _s).Format(fmt);
};

/**
 * 格式化金钱
 * @places  保留几位小数
 * @symbol  金钱单位
 * @thousand 千位分割符 默认为,
 * @decimal 
 * @return String
 */
Number.prototype.formatMoney = function (places, symbol, thousand, decimal) {
    places = !isNaN(places = Math.abs(places)) ? places : 2;
    symbol = symbol !== undefined ? symbol : "￥";
    thousand = thousand || ",";
    decimal = decimal || ".";
    var number = this,
        negative = number < 0 ? "-" : "",
        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
Date.prototype.addHours = function (h) {
    this.setHours(this.getHours() + h);
    return this;
};
Date.prototype.addDays = function (d) {
    this.setDate(this.getDate() + d);
    return this;
};
Date.prototype.addWeeks = function (w) {
    this.addDays(w * 7);
    return this;
};
Date.prototype.addMonths = function (m) {
    var d = this.getDate();
    this.setMonth(this.getMonth() + m);
    if (this.getDate() < d)
        this.setDate(0);
    return this;
};
Date.prototype.addYears = function (y) {
    var m = this.getMonth();
    this.setFullYear(this.getFullYear() + y);
    if (m < this.getMonth()) {
        this.setDate(0);
    }
    return this;
};
/*interval ：D表示查询精确到天数的之差
 interval ：H表示查询精确到小时之差
 interval ：M表示查询精确到分钟之差
 interval ：S表示查询精确到秒之差
 interval ：T表示查询精确到毫秒之差*/
Date.prototype.dateDiff = function (interval, date2) {
    var objInterval = { 'D': 1000 * 60 * 60 * 24, 'H': 1000 * 60 * 60, 'M': 1000 * 60, 'S': 1000, 'T': 1 };
    interval = interval.toUpperCase();
    var date2Convert = new Date(date2.replace(/-/g, '/'));
    var thisDateFormat = "yyyy/MM/dd hh:mm:sss";
    switch (interval) {
        case "D":
            thisDateFormat = "yyyy/MM/dd 00:00:000";
            break;
        case "H":
            thisDateFormat = "yyyy/MM/dd hh:00:000";
            break;
        case "M":
            thisDateFormat = "yyyy/MM/dd hh:mm:000";
            break;
        case "S":
            break;
        case "T":
            break;
    }
    var dt1 = Date.parse(this.Format(thisDateFormat));
    var dt2 = Date.parse(date2Convert.Format(thisDateFormat));
    try {
        return Math.round((dt2 - dt1) / objInterval[interval]);
    } catch (e) {

    }
}