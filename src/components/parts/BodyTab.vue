<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { router } from "@/router.js";

const route = useRoute();

function goTo(tab) {
  router.push(tab.link);
}

const props = defineProps({
  tab: {
    type: Object,
    default: () => {},
  },
});

const isActive = computed(() => {
  console.log({ props });
  console.log(props.tab);
  return route.fullPath === `${props.tab.link}` ? "active" : "";
});
</script>

<template>
  <div class="body-tab" :class="isActive" @click="goTo(tab)">
    {{ tab.label }}
  </div>
</template>

<style lang="scss" scoped>
.body-tab {
  padding: 8px 16px;
  white-space: nowrap;
  box-shadow: -1px 0px 0px 0px #0000000d inset;
  cursor: pointer;
  &.active {
    color: #3C73F1;
    box-shadow: -1px 0px 0px 0px #0000000D inset, 0px -2px 0px 0px #0084E4 inset;

    background: #F2F7FB;
  }
}
</style>