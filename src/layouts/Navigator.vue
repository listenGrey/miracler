<template>
  <nav class="bottom-nav">
    <div
        class="nav-button"
        :class="{ active: currentView === 'today' }"
        @click="selectView('today')"
    >
      今天
    </div>
    <div
        class="nav-button"
        :class="{ active: currentView === 'calendar' }"
        @click="selectView('calendar')"
    >
      日历
    </div>
    <div
        class="nav-button"
        :class="{ active: currentView === 'new' }"
        @click="selectView('new')"
    >
      <div class="add-button">+</div>
    </div>
    <div
        class="nav-button"
        :class="{ active: currentView === 'overview' }"
        @click="selectView('overview')"
    >
      总览
    </div>
    <div
        class="nav-button"
        :class="{ active: currentView === 'profile' }"
        @click="selectView('profile')"
    >
      我的
    </div>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentView: string
}>()

const emit = defineEmits<{
  (event: 'update-view', view: string): void
}>()

function selectView(view: string) {
  if (view !== props.currentView) {
    emit('update-view', view)
  }
}
</script>

<style scoped>
.bottom-nav {
  height: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f2f2f2;
  border-top: 1px solid #ccc;
}

.nav-button {
  flex: 1;
  height: 45px;
  background: none;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

/* 中间大号“+”按钮 */
.add-button {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  text-align: center;
  border: none;
  font-size: 23px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}
</style>
