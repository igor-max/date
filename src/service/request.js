import { axiosPost, axiosGet } from "@/config/axios.config.js";

// 这里的封装我们使用promise的原因是不触发success，把数据往后传，要不然获取不到数据

function getDay (date) {
  return new Promise((resolve, reject) => {
    axiosPost({
      url: "/api/calendar/day",
      data: { date },
      success(data) {
        resolve(data);
      },
      error(err) {
        reject(err);
      },
    });
  });
}

function getMonth(month) {
  return new Promise((resolve, reject) => {
    axiosPost({
      url: "/api/calendar/month",
      data: { 'year-month': month },
      success(data) {
        resolve(data);
      },
      error(err) {
        reject(err);
      },
    });
  });
}

function getYear(year) {
  return new Promise((resolve, reject) => {
    axiosPost({
      url: "/api/calendar/year",
      data: { year },
      success(data) {
        resolve(data);
      },
      error(err) {
        reject(err);
      },
    });
  });
}

export {
    getDay,
    getMonth,
    getYear
};