<template>
  <div>
    <i>Event created by {{ userName }}</i>
    <div>A map getter here: {{ getCategoryById(2).name }}</div>
    <ul>
      <li v-for="cat in getFinishedCategories" :key="cat.id">
        {{ cat.name }}
      </li>
    </ul>
    <datepicker v-model="myDate" />
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import datepicker from 'vue3-datepicker'

const store = useStore()
const userName = computed(() => store.state.user.name)
const { getCategoryById, getFinishedCategories } = store.getters
const myDate=new Date()
</script>
