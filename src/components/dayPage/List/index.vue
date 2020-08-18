<template>
  <div class="day-list">
    <list-item
       title="当前年月"
       :content="dayData['year-month']"
    />
    <list-item
       title="今年属相"
       :content="dayData.animalsYear"
    />
    <list-item
       title="农历年份"
       :content="dayData.lunarYear"
    />
    <list-item
       title="适宜事件"
       :content="dayData.suit"
    />
    <list-item
       title="避免事件"
       :content="dayData.avoid"
    />
  </div>
</template>

<script>

import ListItem from './Item';

export default {
  name: 'DayList',
  props: ['dayData'],
  components: {
    ListItem
  }
}
</script>

<style scoped>
  .day-list {
    padding: .15rem;
    box-sizing: border-box;
  }
</style>