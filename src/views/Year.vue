<template>
  <div class="container">
    <error-tip v-if="errorCode" />
    <div v-if="!errorCode">
      <card-list :data="yearData" />
    </div>
  </div>
</template>

<script>
import getData from "@/service/index";
import CardList from "@/components/yearPage/List";
import { mapState } from "vuex";
import { getTime } from "@/util/getCurTime";
import ErrorTip from "@/components/errorTip";

export default {
  name: "YearPage",
  components: {
    CardList,
    ErrorTip,
  },
  created() {
    const result = getTime("year");
    getData(this.$store, "year", result).then(() => {});
  },
  computed: {
    ...mapState(["errorCode", 'yearData']),
  },
};
</script>

<style scoped>
</style>