<template>
  <div class="today-page">
    <!-- 顶部标题 -->
    <div class="today-header">
      <h1>事件</h1>
    </div>

    <!-- 中间内容区域 -->
    <div class="today-events">

      <!-- 事件 -->
      <div v-for="(event, eventIndex) in events" :key="event.id">
        <Event
            :title="event.title"
            :items="event.items"
            @update-item="(itemIdx, checked) => updateEventItem(eventIndex, itemIdx, checked)"
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

<script>
import Event from '@/components/Event.vue'

export default {
  name: 'Today',
  components: {
    Event
  },
  data () {
    return {
      events: [
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
        }
      ]
    }
  },
  methods: {
    updateEventItem (eventIndex, itemIndex, checked) {
      this.events[eventIndex].items[itemIndex].checked = checked
    }
  }
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
  padding: 16px;
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
