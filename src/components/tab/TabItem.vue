<template>
  <router-link :to="path" class="tab-icon">
    <i class="icon">{{ iconText }}</i>
    <p class="text">{{ tabText }}</p>
  </router-link>
</template>

<script>
export default {
  props: ["path", "iconText", "tabText"],
};
</script>

<style scoped>
.tab-icon {
  display: inline-block;
}
.tab-icon .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background-color: #ddd;
  color: #999;
  font-size: 0.12rem;
  transition: all 0.5s;
}

.tab-icon .text {
  font-size: 0.12rem;
  text-align: center;
  margin-top: 0.02rem;
  color: #999;
  transition: color 0.5s;
}

.tab-icon.router-link-exact-active .icon {
  background-color: #ed4040;
  color: #fff;
}

.tab-icon.router-link-exact-active .text {
  color: #ed4040;
}
</style>
