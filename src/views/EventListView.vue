<script setup>
import EventCard from '../components/EventCard.vue'
import { onMounted, computed } from 'vue'
import { store } from '../stores/store.js'
const events = computed(() => store.state.events)

onMounted(() => {
  store.dispatch('fetchEvents')
})
</script>

<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
