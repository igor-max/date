import { getDay, getMonth, getYear } from "./request.js";
import { formatDate, mapFormatDate } from "@/util/formatDate.js";

export default async function (store, type, date) {
    let data = null;
    // 获取数据
    switch (type) {
        case 'day':
            data = await getDay(date);
            break;
        case 'month':
            data = await getMonth(date);
            break;
        case 'year':
            data = await getYear(date);
            break;
        default:
            break;
    }

    if (data.error_code !== 0) {
        store.commit('setErrorCode', data.error_code);
        return;
    }

    store.commit('setErrorCode', 0);

    let res = null;
    // 对数据进行格式化操作
    switch (type) {
        case 'day':
            res = data.result.data;
            res.date = formatDate(res.date, 'day');
            res['year-month'] = formatDate(res['year-month'], 'month');
            break;
        case 'month':
            res = data.result.data.holiday_array;
            res = mapFormatDate(res, 'festival');
            break;
        case 'year':
            res = data.result.data.holiday_list;
            res = mapFormatDate(res, 'startday');
    }

    store.commit('setData', {
        type,
        data: res
    })
}