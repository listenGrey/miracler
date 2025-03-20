<template>
  <div>
    <h1>今天的事件</h1>
    <div v-for="event in eventStore.events" :key="event.id">
      <p>{{ event.name }} - {{ event.amountSpent }}元</p>
      <p>已持续：{{ event.daysCount }}天</p>
      <p v-if="event.completed">已完成</p>
      <p v-else>未完成</p>
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
</style>
