<template>
  <li class="card-item">
    <div class="card">
      <div class="img-wrap">
        <img :src="require(`../../assets/img/${item.name}.jpg`)" :alt="item.name" />
        <div class="mask">
          <h1>{{ item.name }}</h1>
          <h2>{{ item.startday }}</h2>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.card-item {
  padding: 0.1rem 0.15rem;
  box-sizing: border-box;
}

.card {
  border: 1px solid #ddd;
  border-radius: 0.15rem;
  background-color: #fff;
  box-shadow: 0.01rem 0.03rem 0.05rem #999;
  overflow: hidden;
}

.card .img-wrap {
  position: relative;
  height: 2.15rem;
}

.card .img-wrap .mask {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.card .img-wrap .mask h1 {
  color: #ed4040;
  font-size: 0.5rem;
  font-weight: bold;
}

.card .img-wrap .mask h2 {
  color: #fff;
  margin-top: 0.15rem;
}

.card .content-wrap {
  padding: 0.1rem;
  box-sizing: border-box;
}

.card .content-wrap h1 {
  font-size: 0.16rem;
  line-height: 0.2rem;
}

.card .content-wrap h2 {
  font-size: 0.14rem;
  margin-top: 0.1rem;
  line-height: 0.2rem;
}
</style>