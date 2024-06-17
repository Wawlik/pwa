<script setup>
// import Button from "../parts/Button.vue";
import HeaderTab from "../parts/HeaderTab.vue";
import { router } from "@/router.js";
function goTo(link) {
  router.push(link)
}
function goToTT() {
  router.push('/')
  // window.open("https://toptrader.org", "_blank");
}
const tabs = [
  {
    label: "Партнеры",
    link: '/partners',
    clickAction: goTo("/1")
  },
  {
    label: "ПРОВАЙДЕРЫ",
    link: '/providers',
    clickAction: goTo("/users")
  },
  {
    label: "Пользователи",
    link: '/users',
    clickAction: goTo("/users")
  },
  {
    label: "Запросы",
    link: '/requests',
    clickAction: goTo("/users")
  },
  {
    label: "Аналитика",
    link: '/analytics',
    clickAction: goTo("/users")
  },
  {
    label: "СРЕДСТВА ТТ",
    link: '/funds',
    clickAction: goTo("/users")
  },
  {
    label: "ОПЛАТА",
    link: '/payment',
    clickAction: goTo("/users")
  },
  {
    label: "Управление",
    link: '/management',
    clickAction: goTo("/users")
  },
]
</script>

<template>
  <header class="header">
    <!-- <div class="menu-toggle">
      <a href="/partner" class="header__links_link">
        {{ "AffiliateProgram" }}
      </a>
      <a href="/service" class="header__links_link">
        {{ "TurnkeyExchange" }}
      </a>
    </div> -->
    <div class="header__wrapper">
      <svg
        @click="goToTT()"
        class="cursor-pointer header-icon header-icon-logo"
        width="34"
        height="24"
        viewBox="0 0 34 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 4C0 1.79086 1.79086 0 4 0H30C32.2091 0 34 1.79086 34 4V20C34 22.2091 32.2091 24 30 24H4C1.79086 24 0 22.2091 0 20V4Z"
          fill="#FFE600"
        />
        <path
          d="M21.4868 18V7.77602H17.4548V5.40002H28.4348V7.77602H24.4028V18H21.4868Z"
          fill="black"
        />
        <path
          d="M9.10402 18V7.77602H5.07202V5.40002H16.052V7.77602H12.02V18H9.10402Z"
          fill="black"
        />
      </svg>
      <!-- <div class="header__links no-display-after-1024">
        <svg
          @click="toggleMobileMenu()"
          class="no-display-after-1024 cursor-pointer"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_229_5873)">
            <path
              d="M24.375 22.75H1.62501C0.72751 22.75 0 22.0225 0 21.125C0 20.2276 0.72751 19.5 1.62501 19.5H24.375C25.2725 19.5 26.0001 20.2276 26.0001 21.125C26 22.0225 25.2725 22.75 24.375 22.75Z"
              fill="#1EF0B1"
            />
            <path
              d="M24.375 14.625H1.62501C0.72751 14.625 0 13.8975 0 13C0 12.1026 0.72751 11.375 1.62501 11.375H24.375C25.2725 11.375 26.0001 12.1025 26.0001 13C26.0001 13.8975 25.2725 14.625 24.375 14.625Z"
              fill="#1EF0B1"
            />
            <path
              d="M24.375 6.49996H1.62501C0.72751 6.49996 0 5.77245 0 4.87495C0 3.97745 0.72751 3.24994 1.62501 3.24994H24.375C25.2725 3.24994 26.0001 3.97745 26.0001 4.87495C26.0001 5.77245 25.2725 6.49996 24.375 6.49996Z"
              fill="#1EF0B1"
            />
          </g>
          <defs>
            <clipPath id="clip0_229_5873">
              <rect width="26" height="26" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <a href="/" class="header__links_link">
          AboutThePlatform
        </a>
        <a href="/partner" class="header__links_link no-display-under-1024">
        AffiliateProgram
        </a>
        <a href="/service" class="header__links_link no-display-under-1024">
          TurnkeyExchange
        </a>
      </div> -->
      <div class="header__tabs">
        <HeaderTab v-for="one in tabs" :tab="one" :key="'tabs-' + one.label"/>
      </div>
      <svg class="header-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_2275_69140" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 16C9.21442 16 7.95772 15.6188 6.8888 14.9046C5.81988 14.1903 4.98676 13.1752 4.49479 11.9874C4.00282 10.7997 3.87409 9.49279 4.1249 8.23192C4.3757 6.97104 4.99477 5.81285 5.90381 4.90381C6.81285 3.99477 7.97104 3.3757 9.23192 3.1249C10.4928 2.87409 11.7997 3.00282 12.9874 3.49479C14.1752 3.98676 15.1903 4.81988 15.9046 5.8888C16.6188 6.95772 17 8.21442 17 9.5C16.9974 11.2231 16.3117 12.8749 15.0933 14.0933C13.8749 15.3117 12.2231 15.9974 10.5 16ZM10.5 5C9.60999 5 8.73996 5.26392 7.99994 5.75839C7.25992 6.25286 6.68314 6.95566 6.34255 7.77793C6.00195 8.60019 5.91284 9.505 6.08647 10.3779C6.2601 11.2508 6.68869 12.0526 7.31802 12.682C7.94736 13.3113 8.74918 13.7399 9.6221 13.9135C10.495 14.0872 11.3998 13.9981 12.2221 13.6575C13.0443 13.3169 13.7471 12.7401 14.2416 12.0001C14.7361 11.26 15 10.39 15 9.5C14.9974 8.30734 14.5224 7.16428 13.6791 6.32094C12.8357 5.4776 11.6927 5.00264 10.5 5ZM13.46 10.5C13.1948 10.5 12.9404 10.3946 12.7529 10.2071C12.5653 10.0196 12.46 9.76522 12.46 9.5C12.46 8.96957 12.2493 8.46086 11.8742 8.08579C11.4991 7.71071 10.9904 7.5 10.46 7.5C10.1948 7.5 9.94042 7.39464 9.75288 7.20711C9.56535 7.01957 9.45999 6.76522 9.45999 6.5C9.45999 6.23478 9.56535 5.98043 9.75288 5.79289C9.94042 5.60536 10.1948 5.5 10.46 5.5C11.5209 5.5 12.5383 5.92143 13.2884 6.67157C14.0386 7.42172 14.46 8.43913 14.46 9.5C14.46 9.76522 14.3546 10.0196 14.1671 10.2071C13.9796 10.3946 13.7252 10.5 13.46 10.5ZM18.5884 19.9108C18.7177 19.9694 18.858 19.9998 19 20C19.1941 20.0015 19.3844 19.9464 19.5477 19.8416C19.7111 19.7368 19.8404 19.5867 19.9199 19.4097C19.9994 19.2326 20.0257 19.0363 19.9955 18.8446C19.9653 18.6529 19.88 18.4741 19.75 18.33L16.84 15C16.7527 14.9008 16.6467 14.8199 16.528 14.7617C16.4094 14.7035 16.2805 14.6692 16.1486 14.6609C16.0168 14.6525 15.8846 14.6702 15.7595 14.713C15.6345 14.7557 15.5191 14.8227 15.42 14.91C15.3208 14.9973 15.2399 15.1033 15.1817 15.2219C15.1235 15.3406 15.0893 15.4695 15.0809 15.6013C15.0725 15.7332 15.0902 15.8654 15.133 15.9904C15.1757 16.1155 15.2427 16.2308 15.33 16.33L18.25 19.66C18.3437 19.7666 18.4591 19.8521 18.5884 19.9108Z" fill="black"/>
        </mask>
        <g mask="url(#mask0_2275_69140)">
        <rect width="24" height="24" fill="#8C8C8C"/>
        </g>
        </svg>


        <svg class="header-icon" width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_2275_69149" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="4" width="24" height="24">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10ZM14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16ZM12 24C13.1046 24 14 23.1046 14 22C14 20.8954 13.1046 20 12 20C10.8954 20 10 20.8954 10 22C10 23.1046 10.8954 24 12 24Z" fill="black"/>
        </mask>
        <g mask="url(#mask0_2275_69149)">
        <rect y="4" width="24" height="24" fill="#B2B2B2"/>
        </g>
        </svg>

      <!-- <Button
        @click="goToTT()"
        class="header__button no-display-under-1024"
        :label="'platform'"
      /> -->
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  text-transform: uppercase !important;
  width: 100%;
  background-color: #fafafa;
  position: relative;
  &__wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 8px;
  }
  // &__links {
  //   display: flex;
  //   gap: 2.8vw;
  //   align-items: center;
  //   @media (max-width: 1280px) {
  //     gap: 16px;
  //   }
  //   &_link {
  //     text-transform: uppercase;
  //     font-size: 16px;
  //     line-height: 19.5px;
  //     color: #1ef0b1;
  //     text-decoration: none;
  //     &:hover {
  //       text-decoration: underline;
  //     }
  //   }
  // }
  &__tabs {
    display: flex;
    margin-right: auto;
    // gap: 16px;
  }
  // &__button {
  //   text-transform: uppercase;
  // }
  // &__lang {
  //   margin-left: auto;
  //   margin-right: 4.5vw;
  //   @media (max-width: 1280px) {
  //     margin-right: 16px;
  //   }
  // }
  &-icon {
    flex-shrink: 0;
    &-logo {
      margin-right: 8px;
    }
  }
  // @media (max-width: 1024px) {
  //   padding: 20px 0;
  // }
  .cursor-pointer {
    cursor: pointer;
  }
  .menu-toggle {
    height: 0;
    position: absolute;
    transition: height 0.25s, bottom 0.25s;
    bottom: 0%;
    display: flex !important;
    flex-flow: column nowrap;
    overflow: hidden;
    background: #172028;
    gap: 16px;
    width: 100%;
    z-index: 2;
    align-items: flex-start;
    padding-left: 32px;
    &.active {
      bottom: calc(-100px);
      height: 100px;
    }
    .header__links_link {
      padding-left: 40px;
      cursor: pointer;
    }
    @media (max-width: 481px) {
      &.active {
        bottom: calc(-100px);
        height: 100px;
      }
    }
  }
}
</style>
