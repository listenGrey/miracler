<template>
  <div class="app-container">
    <!-- 上半部分：动态加载内容组件 -->
    <div class="content">
      <component :is="currentComponent" />
    </div>
    <!-- 下半部分：导航组件 -->
    <Navigator :currentView="currentView" @update-view="updateView" />
  </div>
</template>

<script>
import Navigator from './components/Navigator.vue'
import Today from './components/Today.vue'
import Calendar from './components/Calendar.vue'
import New from './components/New.vue'
import Overview from './components/Overview.vue'
import Profile from './components/Profile.vue'

export default {
  name: 'app',
  components: {
    Navigator,
    Today,
    Calendar,
    New,
    Overview,
    Profile
  },
  data () {
    return {
      currentView: 'today'
    }
  },
  computed: {
    currentComponent () {
      switch (this.currentView) {
        case 'today':
          return 'Today'
        case 'calendar':
          return 'Calendar'
        case 'new':
          return 'New'
        case 'overview':
          return 'Overview'
        case 'profile':
          return 'Profile'
        default:
          return 'Today'
      }
    }
  },
  methods: {
    updateView (view) {
      this.currentView = view
    }
  }
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
