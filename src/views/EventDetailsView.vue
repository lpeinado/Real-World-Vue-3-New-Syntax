<script setup>
import { ref, onMounted } from 'vue'
import EventService from '../services/EventService'

const props = defineProps({
  id: { required: true },
})
const event = ref(null)
const loadData = async () => {
  const request = await EventService.getEvent(props.id)
  event.value = request.data
}
onMounted(() => {
  loadData()
})
</script>

<template>
  <div v-if="event">
    <p>Created by {{ $store.state.user.name }}</p>
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
