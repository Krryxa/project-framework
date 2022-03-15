import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface BlogType {
  id: number
  name: string
  content: string
}

export const useBlogStore = defineStore('blog', () => {
  const name = ref('myblog')
  const list = ref([{ id: 1, name: '默认博客', content: '' }])

  const getName = computed(() => `输出 ${name.value}`)

  const addBlog = (item: BlogType) => {
    list.value.push(item)
  }

  return {
    name,
    list,
    getName,
    addBlog
  }
})
