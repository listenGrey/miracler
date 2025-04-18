<template>
  <div class="event">
    <div class="event-header">
      {{ title }}
    </div>
    <div class="event-items">
      <div
          class="event-item"
          v-for="(item, index) in items"
          :key="index"
      >
        <input
            type="checkbox"
            :id="`item-${index}`"
            :checked="item.checked"
            @change="onItemChange(index, $event)"
        />
        <label :for="`item-${index}`">{{ item.text }}</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface Item {
  text: string
  checked: boolean
}

const props = defineProps<{
  title: string
  items: Item[]
}>()

const emit = defineEmits<{
  (event: 'update-item', index: number, checked: boolean): void
}>()

function onItemChange(index: number, event: Event) {
  const target = event.target as HTMLInputElement
  emit('update-item', index, target.checked)
}
</script>

<style scoped>
.event {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
}
.event-header {
  background-color: #f2f2f2;
  padding: 8px;
  font-weight: bold;
}
.event-items {
  padding: 8px;
}
.event-item {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.event-item input {
  margin-right: 8px;
}
</style>
