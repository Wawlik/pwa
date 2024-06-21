<script setup>
import Header from "@/components/Blocks/Header.vue";

import { useRoute } from 'vue-router'
const route = useRoute
// import HelloWorld from './components/HelloWorld.vue'
// import PWABadge from './components/PWABadge.vue'
console.log({route})
</script>

<template>
  <Header v-if="route.fullPath !== ''" />
  <RouterView :key="route.fullPath"/>
</template>

<style scoped>
</style>
