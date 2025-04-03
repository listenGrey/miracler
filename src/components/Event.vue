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
            @change="onItemChange(index,$event)"
        />
        <label :for="`item-${index}`">{{ item.text }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Event',
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    onItemChange (index, event) {
      const checked = event.target.checked
      this.$emit('update-item', index, checked)
    }
  }
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
