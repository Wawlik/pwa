<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
  contentClass: {
    type: String,
    default: "",
  },
  wrapperClass: {
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
  <div
    class="component component-label-wrapper"
    :class="wrapperClass"
    :style="width ? `width:${width}` : ''"
  >
    <label for="content">
      {{ label }}
    </label>
    <div class="flex-row">
      <slot name="beforeContent" class="component__beforeContent"> </slot>
      <div name="content" class="content" :class="contentClass">
        {{ content }}
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.component-label-wrapper {
  display: flex;
  flex-flow: column nowrap;
  gap: 4px;
  border: 1px solid #f2f2f2;
  padding: 8px 4px 4px 4px;
  border-radius: 4px;
  min-width: 92px;
  // position: relative;
  &.no-shrink {
    flex-shrink: 0;
  }
  // align-items: flex-start;
  label {
    // position: absolute;
    // top: -4px;
    // left: 50%;
    // transform: translate(-50%, 0);
    // background: #fff;
    padding: 0 3px;
    color: #8c8c8c;
    font-family: Arial;
    font-size: 9px;
    line-height: 9px;
    margin-right: auto;
    // text-align: left;
  }
  .content {
    background: #f0f0f0;
    color: #333;
    font-size: 22px;
    line-height: 20px;

    text-align: center;
    border-radius: 4px;
    padding: 4px;
    width: fit-content;
    &.moneystat {
      color: #008e72;
    }
    &.subscription {
      color: #fa860a;
      background: none;
    }
  }
}
</style>