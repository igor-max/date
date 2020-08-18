<template>
  <div class="container">
    <error-tip v-if="errorCode" />
    <div v-if="!errorCode">
      <day-card :dayData="dayData" />
      <day-list :dayData="dayData" />
    </div>
  </div>
</template>

<script>
import getData from "@/service/index";
import DayCard from "@/components/dayPage/Card.vue";
import DayList from "@/components/dayPage/List";
import { mapState } from "vuex";
import { getTime } from "@/util/getCurTime";
import ErrorTip from '@/components/errorTip';

export default {
  computed: {
    ...mapState(["dayData", 'errorCode']),
  },
  components: {
    DayCard,
    DayList,
    ErrorTip
  },
  created() {
    const result = getTime("day");
    getData(this.$store, "day", result).then(() => {});
  },
};
</script>

