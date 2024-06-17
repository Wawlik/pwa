<script setup>
// defineProps({
//   heading: {
//     type: String,
//     default: "",
//   },
// });
</script>

<template>
  <section class="main">
    <!-- <div class="wrapper section__wrapper"> -->
      <!-- <div> -->
        <slot name="content" class="section__content"> </slot>
      <!-- </div> -->
    <!-- </div> -->
  </section>
</template>

<style scoped lang="scss">
.main {
  background: #E6E6E6;
  padding: 4px;
  height: calc(100vh - 60px);
}
</style>
