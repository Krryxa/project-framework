<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
import { getBlog } from '@/service/api'

const blogList = ref([])
const getBlogList = async () => {
  const res = await getBlog()
  blogList.value = res.result
}

getBlogList()
</script>

<template>
  <hello-world />
  {{ blogList }}
</template>

<style lang="scss" scoped></style>
