<template>
  <div class="today-page">
    <!-- 顶部标题 -->
    <div class="today-header">
      <h1>今天</h1>
    </div>

    <!-- 中间内容区域 -->
    <div class="today-events">
      <!-- 事件 -->
      <div v-for="(event, eventIdx) in events" :key="event.id">
        <Event
            :title="event.title"
            :items="event.items"
            @update-item="(itemIdx: number, checked: boolean) => updateEventItem(eventIdx, itemIdx, checked)"
        />
      </div>

      <!-- 结算按钮 -->
      <div class="today-summary">
        <div class="today-summary-button">搁置</div>
        <div class="today-summary-button">结算</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Event from '../components/Event.vue'

interface EventItem {
  text: string
  checked: boolean
}

interface EventData {
  id: number
  title: string
  items: EventItem[]
}

const events = ref<EventData[]>([
  {
    id: 1,
    title: '事件1',
    items: [
      { text: '事项1-1', checked: false },
      { text: '事项1-2', checked: false }
    ]
  },
  {
    id: 2,
    title: '事件2',
    items: [
      { text: '事项2-1', checked: false },
      { text: '事项2-2', checked: false }
    ]
  },
  {
    id: 3,
    title: '事件3',
    items: [
      { text: '事项3-1', checked: false },
      { text: '事项3-2', checked: false }
    ]
  },
  {
    id: 4,
    title: '事件4',
    items: [
      { text: '事项4-1', checked: false },
      { text: '事项4-2', checked: false }
    ]
  },
  {
    id: 5,
    title: '事件5',
    items: [
      { text: '事项5-1', checked: false },
      { text: '事项5-2', checked: false }
    ]
  },
  {
    id: 6,
    title: '事件6',
    items: [
      { text: '事项6-1', checked: false },
      { text: '事项6-2', checked: false }
    ]
  }
])

function updateEventItem(eventIndex: number, itemIndex: number, checked: boolean) {
  events.value[eventIndex].items[itemIndex].checked = checked
}
</script>

<style scoped>
.today-page {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-family: sans-serif;
}
.today-header {
  text-align: center;
  font-weight: bold;
}
.today-events {
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
  overflow-y: auto;
}
</style>
