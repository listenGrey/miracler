<template>
  <div>
    <h1>今天的事件</h1>
    <div v-for="event in eventStore.events" :key="event.id">
      <p>{{ event.name }} - {{ event.amountSpent }}元</p>
      <p>已持续：{{ event.daysCount }}天</p>
      <p v-if="event.completed">已完成</p>
      <p v-else>未完成</p>
    </div>

    <div class="growth-container">
      <!-- 顶部栏 -->
      <div class="growth-header">
        <div class="title">成长</div>
        <div class="count">5</div>
        <button class="more-btn">⋯</button>
        <button class="add-btn">+</button>
      </div>

      <!-- 列表 -->
      <div class="growth-list">
        <div class="growth-item">
          <div class="icon">📄</div>
          <div class="text">阅读</div>
          <button class="edit-btn">✎</button>
          <button class="menu-btn">⋮</button>
        </div>
        <div class="growth-item">
          <div class="icon">📄</div>
          <div class="text">看电影</div>
          <button class="edit-btn">✎</button>
          <button class="menu-btn">⋮</button>
        </div>
        <div class="growth-item">
          <div class="icon">📄</div>
          <div class="text">写作</div>
          <button class="edit-btn">✎</button>
          <button class="menu-btn">⋮</button>
        </div>
        <div class="growth-item">
          <div class="icon">📄</div>
          <div class="text">学音乐</div>
          <button class="edit-btn">✎</button>
          <button class="menu-btn">⋮</button>
        </div>
        <div class="growth-item">
          <div class="icon">📄</div>
          <div class="text">整理历史资料</div>
          <button class="edit-btn">✎</button>
          <button class="menu-btn">⋮</button>
        </div>
      </div>

      <!-- 新页面按钮 -->
      <button class="new-page-btn">+ 新页面</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useEventStore } from '../store/eventStore';

export default defineComponent({
  name: 'Today',
  setup() {
    const eventStore = useEventStore();
    return { eventStore };
  },
});
</script>

<style scoped>
/* 样式 */
/* 通用重置 */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Microsoft YaHei", Arial, sans-serif;
  background-color: #fffaf3; /* 页面背景色，可调 */
  padding: 20px;
}

/* 容器：整体卡片 */
.growth-container {
  width: 260px;
  background-color: #fdf7eb; /* 卡片背景色 */
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* 隐藏超出圆角的内容 */
  margin: 0 auto;   /* 水平居中，可根据需要去掉 */
}

/* 标题区域 */
.growth-header {
  display: flex;
  align-items: center;
  background-color: #f4eedf; /* 顶部区背景色 */
  padding: 10px 16px;
}
.growth-header .title {
  font-size: 16px;
  color: #6c4f2b;
  font-weight: bold;
  margin-right: 6px;
}
.growth-header .count {
  font-size: 14px;
  color: #6c4f2b;
  background-color: #ffe6c9; /* 数字的背景 */
  padding: 2px 6px;
  border-radius: 4px;
  margin-right: auto;
}
.growth-header .more-btn {
  background: none;
  border: none;
  color: #b6a08c;
  font-size: 18px;
  cursor: pointer;
  margin-right: 8px;
}
.growth-header .add-btn {
  background: none;
  border: none;
  color: #b6a08c;
  font-size: 20px;
  cursor: pointer;
}

/* 列表区域 */
.growth-list {
  padding: 10px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px; /* 列表项之间的间距 */
}

/* 单个条目 */
.growth-item {
  display: flex;
  align-items: center;
  background-color: #fffdf7; /* 条目的背景 */
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
.growth-item .icon {
  font-size: 16px; /* 仅示例。如果用图片或 SVG，可调整或移除 */
  margin-right: 8px;
  color: #c6af9b;
}
.growth-item .text {
  flex: 1;
  font-size: 14px;
  color: #3c3c3c;
}
.growth-item .edit-btn {
  background: none;
  border: none;
  color: #b6a08c;
  font-size: 14px;
  margin-right: 8px;
  cursor: pointer;
}
.growth-item .menu-btn {
  background: none;
  border: none;
  color: #b6a08c;
  font-size: 14px;
  cursor: pointer;
}

/* 新页面按钮 */
.new-page-btn {
  display: block;
  padding: 10px 16px;
  background-color: #f8efd9;
  border: none;
  width: 100%;
  text-align: left;
  color: #b1894f;
  font-size: 14px;
  cursor: pointer;
  border-top: 1px solid #f0e6d2;
}
.new-page-btn:hover {
  background-color: #f4e7cf;
}
</style>
