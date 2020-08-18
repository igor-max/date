<template>
  <div class="error-tip">
    <img :src="require('../../assets/img/error.png')" />
    <p>{{ errorData[errorCode] }}</p>
  </div>
</template>

<script>
import errorData from "@/data/error";
import {mapState} from "vuex";

export default {
  name: "ErrorTip",
  data() {
    return {
      errorData
    };
  },
  computed: {
    ...mapState(['errorCode'])
  }
};
</script>

<style scoped>
.error-tip {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.error-tip img {
  width: 0.5rem;
}

.error-tip p {
  margin-top: 0.15rem;
  font-size: 0.14rem;
  color: #999;
}
</style>