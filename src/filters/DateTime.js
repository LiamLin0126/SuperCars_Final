export default function (num) {
    var n = new Date(num* 1000);
    const months = "1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月".split(",");
    const weekdays = "星期日,星期一,星期二,星期三,星期四,星期五,星期六".split(",");
    return  n.getFullYear() + "年" + months[n.getMonth()] + n.getDate().toString() +"日";

  }
