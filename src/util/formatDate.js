// 对请求后数据的格式化，如 2020-6-25 转化为 2020年6月25日
function formatDate(data, type = 'day') {
    const arr = data.split("-");
    switch (type) {
        case 'day':
            return `${arr[0]}年${arr[1]}月${arr[2]}日`;
        case 'month':
            return `${arr[0]}年${arr[1]}月`;
        case 'year':
            return `${arr[0]}年`;
        default:
            return `${arr[0]}年${arr[1]}月${arr[2]}日`;
    }
}

// 月份和年份是一个数组，我们对数组的每一项日期进行格式化
function mapFormatDate(data, key) {
    return data.map((item) => {
        item[key] = formatDate(item[key]);
        return item;
    });
}

function formatUserDate(value) {
    const len = value.length;

    if (len < 4) {
        return;
    }

    if (len === 4) {
        return value;
    }

    if (len > 4 && len < 6) {
        return value.substr(0, 4);
    }

    let _arr = [],
        pattern;

    if (len >= 6 && len < 8) {
        pattern = /(\d{4})(\d{2})/;
        value = value.substr(0, 6).replace(pattern, "$1-$2");

        _arr = Array.from(value).filter((item, index) => {
            if (index === 5 && item === '0') {
                return false;
            }
            return true;
        });
    }

    if (len >= 8) {
        pattern = /(\d{4})(\d{2})(\d{2})/;
        value = value.substr(0, 8).replace(pattern, "$1-$2-$3");

        _arr = Array.from(value).filter((item, index) => {
            if ((index === 5 || index === 8) && item === '0') {
                return false;
            }
            return true;
        });
    }

    return _arr.toString().replace(/,/g, "");
}

export { formatDate, mapFormatDate, formatUserDate };