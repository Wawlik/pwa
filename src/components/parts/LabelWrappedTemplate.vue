<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  contentClass: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div class="component component-label-wrapper" :style="width ? `width:${width}` : ''">
    <label for="content">
      {{ label }}
    </label>
    <slot name="wrappedContent" class="component__wrappedContent"> </slot>
  </div>
</template>
<style lang="scss" scoped>
.component-label-wrapper {
  // position: relative;
  display: flex;
  flex-flow: column nowrap;
  gap: 4px;
  align-items: flex-start;
  border: 1px solid #f2f2f2;
  padding: 8px 4px 4px 4px;
  border-radius: 4px;
  min-width: 92px;
  label {
    // position: absolute;
    // top: -4px;
    // left: 50%;
    // transform: translate(-50%, 0);
    background: #fff;
    padding: 0 3px;
    color: #8c8c8c;
    font-family: Arial;
    font-size: 9px;
    line-height: 9px;
  }
  .content {
    background: #f0f0f0;
    color: #333;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    border-radius: 4px;
    padding: 4px;
    width: fit-content;
    &.moneystat {
      color: #008e72;
    }
  }
}
</style>