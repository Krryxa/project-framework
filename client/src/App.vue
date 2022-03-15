<script setup lang="ts"></script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive" />
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.keepAlive" />
  </router-view>
</template>

<style>
#app {
  margin-top: 50px;
  text-align: center;
  line-height: 32px;
}
</style>
