import axios from "axios";
import qs from "qs";
import { key } from "./keys.js";

function axiosPost (options) {
  axios({
    url: options.url,
    method: 'post',
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    data: qs.stringify({
      ...options.data,
      key
    })
  }).then((res) => {
    options.success(res.data);
  }).catch((err) => {
    options.error(err);
  })
}

function axiosGet (options) {
  axios(options.url + "&key=" + key).then((res) => {
      options.success(res.data);
    }).catch((err) => {
      options.error(err);
    });
}

export { axiosPost, axiosGet };