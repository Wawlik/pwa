<script setup>
defineProps({
    avatarUrl: {
        type: String,
        default: ""
    }
})
</script>
<template>
    <div class="component component-avatar">
        <img v-if="avatarUrl" src="" alt="avatarUrl">
        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_dd_2340_36830)">
            <rect x="2" y="2" width="32" height="32" rx="4" fill="white"/>
            <mask id="mask0_2340_36830" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="6" y="6" width="24" height="24">
            <path d="M21.2 18.6C21.7346 18.145 22.1643 17.5795 22.4595 16.9425C22.7547 16.3055 22.9084 15.6121 22.91 14.91C22.91 14.2652 22.783 13.6267 22.5363 13.031C22.2895 12.4353 21.9278 11.894 21.4719 11.4381C21.016 10.9822 20.4747 10.6205 19.879 10.3738C19.2833 10.127 18.6448 10 18 10C17.3552 10 16.7167 10.127 16.121 10.3738C15.5253 10.6205 14.984 10.9822 14.5281 11.4381C14.0722 11.894 13.7105 12.4353 13.4638 13.031C13.217 13.6267 13.09 14.2652 13.09 14.91C13.0916 15.6121 13.2453 16.3055 13.5405 16.9425C13.8357 17.5795 14.2654 18.145 14.8 18.6C13.6549 19.1886 12.6944 20.0815 12.0239 21.1806C11.3535 22.2798 10.9992 23.5425 11 24.83C11 25.0952 11.1054 25.3496 11.2929 25.5371C11.4804 25.7246 11.7348 25.83 12 25.83C12.2652 25.83 12.5196 25.7246 12.7071 25.5371C12.8946 25.3496 13 25.0952 13 24.83C13 23.5039 13.5268 22.2321 14.4645 21.2945C15.4021 20.3568 16.6739 19.83 18 19.83C19.3261 19.83 20.5979 20.3568 21.5355 21.2945C22.4732 22.2321 23 23.5039 23 24.83C23 25.0952 23.1054 25.3496 23.2929 25.5371C23.4804 25.7246 23.7348 25.83 24 25.83C24.2652 25.83 24.5196 25.7246 24.7071 25.5371C24.8946 25.3496 25 25.0952 25 24.83C25.0008 23.5425 24.6465 22.2798 23.9761 21.1806C23.3056 20.0815 22.3451 19.1886 21.2 18.6ZM20.91 14.91C20.9082 15.0811 20.8915 15.2518 20.86 15.42L16.17 12.66C16.6832 12.2301 17.3305 11.9931 18 11.99C18.383 11.99 18.7622 12.0656 19.1159 12.2125C19.4696 12.3593 19.7909 12.5746 20.0612 12.8459C20.3316 13.1171 20.5457 13.4391 20.6914 13.7933C20.837 14.1475 20.9113 14.527 20.91 14.91ZM15.09 14.91C15.0913 14.7322 15.108 14.5549 15.14 14.38L19.85 17.14C19.4265 17.494 18.9107 17.7199 18.3633 17.7909C17.8159 17.862 17.2596 17.7753 16.7597 17.5412C16.2598 17.307 15.8372 16.935 15.5414 16.4689C15.2456 16.0028 15.089 15.462 15.09 14.91Z" fill="black"/>
            </mask>
            <g mask="url(#mask0_2340_36830)">
            <rect x="6" y="6" width="24" height="24" fill="#E91212"/>
            </g>
            </g>
            <defs>
            <filter id="filter0_dd_2340_36830" x="0" y="0" width="36" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2340_36830"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_2340_36830" result="effect2_dropShadow_2340_36830"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2340_36830" result="shape"/>
            </filter>
            </defs>
            </svg>

    </div>
</template>

<style lang="scss" scoped>
.component.component-avatar {
    border: 1px solid #F2F2F2;
    border-radius: 6px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>