<template>
  <div>
    <i>Event created by {{ userName }}</i>
    <div>A map getter here: {{ getCategoryById(2).name }}</div>
    <ul>
      <li v-for="cat in getFinishedCategories" :key="cat.id">
        {{ cat.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const userName = computed(() => store.state.user.name)

const { getCategoryById, getFinishedCategories } = store.getters
</script>
