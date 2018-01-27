  // 时间戳转时间函数
 export function timestampToTime(timestamp) {
    const date = new Date(timestamp);
    const y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    let d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    let h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    let minute = date.getMinutes();
    let second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    const newTime = y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
    return newTime;
}
// 时间戳转日期函数
export function timestampToDate(timestamp) {
    const date = new Date(timestamp);
    const y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    let d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    const newDate = y + '-' + m + '-' + d;
    return newDate;
}