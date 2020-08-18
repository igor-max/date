<template>
  <div class="search-wrap">
    <input
      type="text"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :value="inputValue"
      @input="searchData($event)"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import getData from "@/service";
import { formatUserDate } from "@/util/formatDate";
export default {
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    searchData(e) {
      let val = e.target.value;
      if (val.length === this.maxlength) {
        const res = formatUserDate(val);
        // getData(this.$store, "year", res);
        if (this.maxlength == 4) {
          getData(this.$store, "year", res);
        } else if (this.maxlength == 6) {
          getData(this.$store, "month", res);
        } else if(this.maxlength == 8) {
          getData(this.$store, "day", res);
        }
      }
    },
  },
  computed: {
    ...mapState(["placeholder", "maxlength"]),
  },
};
</script>

<style scoped>
.search-wrap {
  position: fixed;
  top: 0.44rem;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 0.38rem;
  padding: 0.03rem 0.1rem;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  background-color: #fff;
}
.search-wrap input {
  width: 100%;
  height: 100%;
  font-size: 0.14rem;
  border: 1px solid #ddd;
  text-indent: 0.1rem;
  border-radius: 0.03rem;
}
.search-wrap input:focus {
  border-color: #ed4040;
  box-shadow: 0 0 0.02rem #ed4040;
  transition: all 0.3s;
}
</style>