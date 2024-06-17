<script setup>
    import { useRoute } from 'vue-router'
    import { computed } from 'vue'
    import { router } from "@/router.js";
    
    const route = useRoute()

    function goTo(tab) {
        router.push(tab.link)
    }

    const props = defineProps({
        tab: {
            type: Object,
            default: () => {}
        }
    })
    const isActive = computed(() => {
        return route.fullPath === `${props.tab.link}` ? 'active' : ''
    })
</script>

<template>
    <div class="tab-default" :class="isActive" @click="goTo(tab)">
      {{tab.label}}
    </div>
</template>

<style lang="scss" scoped>
.tab-default {
    padding: 14px 8px;
    white-space: nowrap;
    cursor: pointer;
    &.active {
        box-shadow: 0px -2px 0px 0px #0084E4 inset;
        background: #F2F7FB;

    }
}
</style>