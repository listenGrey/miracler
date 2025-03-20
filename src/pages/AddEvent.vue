<template>
  <div>
    <h1>添加事件</h1>
    <form @submit.prevent="handleAddEvent">
      <label for="name">事件名称：</label>
      <input type="text" v-model="newEvent.name" id="name" required />

      <label for="amountSpent">花费金额：</label>
      <input type="number" v-model="newEvent.amountSpent" id="amountSpent" required />

      <label for="daysCount">持续天数：</label>
      <input type="number" v-model="newEvent.daysCount" id="daysCount" required />

      <label for="completed">是否完成：</label>
      <input type="checkbox" v-model="newEvent.completed" id="completed" />

      <button type="submit">添加事件</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useEventStore } from '../store/eventStore';

export default defineComponent({
  name: 'AddEvent',
  setup() {
    const eventStore = useEventStore();
    const newEvent = ref({
      name: '',
      amountSpent: 0,
      completed: false,
      daysCount: 0,
    });

    const handleAddEvent = () => {
      eventStore.addEvent(newEvent.value);
      newEvent.value = { name: '', amountSpent: 0, completed: false, daysCount: 0 }; // 清空表单
    };

    return { newEvent, handleAddEvent };
  },
});
</script>

<style scoped>
/* 样式 */
</style>
