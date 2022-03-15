<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogStore } from '@/store/blog'
defineProps()

const blogStore = useBlogStore()

const route = useRoute()
</script>

<template>
  <div>detail page：{{ route.params.id }}</div>
  <div>state：{{ blogStore.list }}</div>
  <div>getters：{{ blogStore.getName }}</div>
</template>

<style lang="scss" scoped></style>
