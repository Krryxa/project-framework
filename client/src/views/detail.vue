<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogStore } from '@/store/blog'
import { getBlogById } from '@/service/api'
defineProps()

const blogStore = useBlogStore()

const route = useRoute()

const blog = ref({})

const getBlog = async () => {
  const id = route.params.id
  const res = await getBlogById(id)
  blog.value = res.result
}

getBlog()
</script>

<template>
  <div>detail page：{{ route.params.id }}</div>
  <div>state：{{ blogStore.list }}</div>
  <div>getters：{{ blogStore.getName }}</div>
  <div>{{ blog }}</div>
</template>

<style lang="scss" scoped></style>
