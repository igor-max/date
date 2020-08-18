function _addZero(val) {
    return val < 10 ? ('0' + val) : val;
}

// 获取当前时间，给tab中正确的时间值
function getCurTime(type) {
    const date = new Date();
    switch (type) {
        case 'day':
            return _addZero(date.getDate().toString());
        case 'month':
            return _addZero((date.getMonth() + 1).toString());
        case 'year':
            return date.getFullYear().toString().substr(2);
    }
}

// 获取当前完整的时间，提供给第一次加载到对应路由的数据
function getTime(type) {
    const date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate();
    switch (type) {
        case 'day':
            return year + "-" + month + "-" + day;
        case 'month':
            return year + "-" + month;
        case 'year':
            return year;
    }
}

export { getCurTime, getTime };