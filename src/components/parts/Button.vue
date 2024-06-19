<script setup>
    defineProps({
        btnClass: String,
        label: {
            type: String,
            default: ""
        }
    })
</script>

<template>
  <button class="button-default" :class="btnClass">
    {{label}}
  </button>
</template>

<style scoped lang="scss">
.button-default {
    border: none;
    outline: none;
    padding: 21px 24px;
    background-color: #1EF0B1;
    color: #23313F;
    box-shadow: 0px 0px 10px 0px #00000066;
    border-radius: 10px;

    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    line-height: 21.6px;
    font-family: Arial;
    &.blue {
        background-color: #00B9FC;
    }
    &.uppercase {
        text-transform: uppercase;
    }
}
</style>
