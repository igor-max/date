<template>
  <div class="container">
    <error-tip v-if="errorCode" />
    <div v-if="!errorCode">
        <card-list :data="monthData" />
    </div>
  </div>
</template>

<script>
import getData from "@/service/index";
import CardList from "@/components/monthPage/List";
import { mapState } from "vuex";
import { getTime } from "@/util/getCurTime";
import ErrorTip from '@/components/errorTip';

export default {
  name: "MonthPage",
  data() {
    return {
    };
  },
  created() {
    const result = getTime("month");
    getData(this.$store, "month", result).then(() => {
    });
  },
  computed: {
    ...mapState(["monthData", 'errorCode']),
  },
  components: {
    CardList,
    ErrorTip
  },

};
</script>

<style scoped>
</style>