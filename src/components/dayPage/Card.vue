<template>
  <div class="card-wrapper">
    <div class="card">
      <div class="header">
        <span class="weekday">{{ dayData.weekday }}</span>
      </div>
      <h1 class="text lunar">{{ dayData.lunar }}</h1>
      <h2 class="text date">{{ dayData.date }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "DayCard",
  props: ['dayData']
};
</script>

<style scoped>
.card-wrapper {
  padding: 0.15rem;
  box-sizing: border-box;
}
.card-wrapper .card {
  background: url("~@/assets/img/bg.jpg") no-repeat center/cover;
  border-radius: 0.15rem;
  overflow: hidden;
  border: 1px solid #ddd;
  color: #fff;
}
.card-wrapper .card .header {
  height: 0.35rem;
  padding: 0.1rem;
  box-sizing: border-box;
  font-size: 0.14rem;
  background-color: rgba(0, 0, 0, 0.3);
}

.card-wrapper .card .text {
  text-align: center;
  margin: 0.3rem 0;
  text-shadow: 0.02rem 0.05rem 0.05rem #666;
}

.card-wrapper .card .text.lunar {
  color: #f75555;
  font-size: 0.5rem;
  font-weight: bold;
}

.card-wrapper .card .text.date {
  font-size: 0.2rem;
}
</style>