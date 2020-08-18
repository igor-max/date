<template>
  <div class="list-item">
    <div class="block title">{{ title }}</div>
    <div class="block content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    title: String,
    content: String,
  },
};
</script>

<style scoped>
.list-item {
  display: flex;
  flex-direction: row;
  height: 0.44rem;
  margin-bottom: 0.15rem;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 0.1rem;
}

.list-item .block {
  height: 100%;
}

.list-item .block.title {
  width: 1rem;
  font-size: 0.18rem;
  margin-right: 0.15rem;
  color: #ed4040;
  line-height: 0.44rem;
  text-align: center;
  flex-shrink: 0;
}

.list-item .block.content {
  line-height: .44rem;
  font-size: 0.14rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>