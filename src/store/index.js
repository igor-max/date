import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerTitle: '当天信息',
    maxlength: 8,
    placeholder: '请输入',
    errorCode: 0,
    dayData: {},
    monthData: [],
    yearData: [],
    type: 'day'
  },
  mutations: {
    setHeaderTitle(state, routeName) {
      switch (routeName) {
        case "day":
          state.headerTitle = "当天信息";
          break;
        case "month":
          state.headerTitle = "近期假期";
          break;
        case "year":
          state.headerTitle = "当年假期";
          break;
        default:
          state.headerTitle = "当天信息";
      }
    },
    setMaxlength(state, routeName) {
      switch (routeName) {
        case "day":
          state.maxlength = 8;
          break;
        case "month":
          state.maxlength = 6;
          break;
        case "year":
          state.maxlength = 4;
          break;
        default:
          state.maxlength = 8;
      }
    },
    setPlaceholder(state, routeName) {
      let date = new Date(),
        day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear();
      month = month < 10 ? ('0' + month) : month;
      day = day < 10 ? ('0' + day) : day;
      switch (routeName) {
        case "day":
          state.placeholder = `格式： ${year}${month}${day}（${year}年${month}月${day}日）`;
          break;
        case "month":
          state.placeholder = `格式： ${year}${month}（${year}年${month}月）`;
          break;
        case "year":
          state.placeholder = `格式： ${year}（${year}年）`;
          break;
        default:
          state.placeholder = `格式： ${year}${month}${day}（${year}年${month}月${day}日）`;
      }
    },
    setErrorCode(state, errorCode) {
      state.errorCode = errorCode;
    },
    setData(state, payload) {
      const { type, data } = payload;
      switch (type) {
        case 'day':
          state.dayData = data;
          break;
        case 'month':
          state.monthData = data;
          break;
        case 'year':
          state.yearData = data;
          break;
        default:
          break;
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
