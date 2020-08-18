<template>
  <div class="tab">
    <!-- <tab-item v-for="(item, index) in tabData" :key="index" :iconText="item.iconText" :path="item.path">
            {{ item.tabText }}
    </tab-item>-->
    <div class="tab-item" v-for="(item, index) of tabData" :key="index">
      <tab-item :iconText="item.iconText" :path="item.path" :tabText="item.tabText" />
    </div>
  </div>
</template>

<script>
import tabData from "@/data/tab.js";
import TabItem from "./TabItem.vue";
export default {
  data() {
    return {
      tabData,
    };
  },
  components: {
    TabItem,
  },
};
</script>

<style scoped>
/* .tab {
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 60px;
  border-top: 1px solid #444;
  background-color: #fff;
} */
.tab {
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 0.44rem;
  border-top: 1px solid #ddd;
  background-color: #fff;
}
.tab-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.33%;
  height: 100%;
}
</style>