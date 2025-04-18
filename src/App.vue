<template>
  <div class="app-container">
    <!-- 上半部分：动态加载内容组件 -->
    <div class="content">
      <component :is="currentComponent"/>
    </div>
    <!-- 下半部分：导航组件 -->
    <Navigator :currentView="currentView" @update-view="updateView" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Navigator from './layouts/Navigator.vue'
import Today from './pages/Today.vue'
import Calendar from './pages/Calendar.vue'
import New from './pages/New.vue'
import Overview from './pages/Overview.vue'
import Profile from './pages/Profile.vue'

// 当前选中的视图
const currentView = ref<'today' | 'calendar' | 'new' | 'overview' | 'profile'>('today')

// 根据 currentView 返回对应的组件对象
const currentComponent = computed(() => {
  switch (currentView.value) {
    case 'today':
      return Today
    case 'calendar':
      return Calendar
    case 'new':
      return New
    case 'overview':
      return Overview
    case 'profile':
      return Profile
    default:
      return Today
  }
})

// 导航组件触发的视图更新
function updateView(view: 'today' | 'calendar' | 'new' | 'overview' | 'profile') {
  currentView.value = view
}
</script>

<style lang="less">
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
/* 上半部分内容占满剩余空间 */
.content {
  flex: 1;
  overflow: auto;
}
</style>
