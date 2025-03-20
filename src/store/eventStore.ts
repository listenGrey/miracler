// src/store/eventStore.ts
import { defineStore } from 'pinia';

export const useEventStore = defineStore('event', {
    state: () => ({
        events: [
            // 示例事件数据
            {
                id: 1,
                name: '每天跑步',
                amountSpent: 10,  // 每日花费金额
                completed: true,  // 是否完成
                daysCount: 5,     // 已经持续多少天
            },
            // 添加更多的事件
        ],
    }),
    actions: {
        addEvent(newEvent: { name: string; amountSpent: number; completed: boolean; daysCount: number }) {
            const id = this.events.length + 1;
            this.events.push({ ...newEvent, id });
        },
        updateEvent(id: number, updates: Partial<{ name: string; amountSpent: number; completed: boolean; daysCount: number }>) {
            const index = this.events.findIndex((event) => event.id === id);
            if (index !== -1) {
                this.events[index] = { ...this.events[index], ...updates };
            }
        },
    },
});
