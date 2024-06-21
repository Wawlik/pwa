
<script setup>
import BodyTab from "@/components/parts/BodyTab.vue";
import Main from "../components/parts/Main.vue";
import Search from "../components/parts/Search/Search.vue";

import LabelWrappedRaw from "../components/parts/LabelWrappedRaw.vue";
import LabelWrappedAbsolute from "../components/parts/LabelWrappedAbsolute.vue";
import LabelWrappedTemplate from "../components/parts/LabelWrappedTemplate.vue";

import Avatar from "../components/parts/Avatar.vue";
const bodyTabs = [
  {
    label: "Back",
    link: "/users",
  },
  {
    label: "О пользователе",
    link: "/users/user",
  },
  {
    label: "Финансы",
    link: "/users/user/finance",
  },
  {
    label: "Сделки",
    link: "/users/deals",
  },
  {
    label: "Детализация SF",
    link: "/users/user/details",
  },
];
</script>
<template>
  <Main class="main-users">
    <template v-slot:content>
      <div class="main-wrapper">
        <div class="main__tabs">
          <BodyTab
            v-for="one in bodyTabs"
            :tab="one"
            :key="'tabs-' + one.label"
          />
          <div class="main__search-wrapper">
            <Search></Search>
          </div>
        </div>
        <div class="main__visibleArea">
          <div class="flex-row">
            <LabelWrappedRaw :label="'ФИО'" :content="'Takira Sun'" width="60%"/>
            <LabelWrappedRaw :label="'Дата и время регистрации'" :content="'21.02.2023 16:42'" width="30%"/>
            <Avatar/>
          </div>
          <div class="flex-row">
            <LabelWrappedTemplate :label="'Счета пользователя'" :content="'Takira Sun'" width="30%">
              <template v-slot:wrappedContent>
                <div class="flex-row align-center">
                  <svg
                    class="shrink-0"
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="9.5" cy="10" r="9.5" fill="#FFE600" />
                    <path
                      d="M5.28799 14.4341V7.98824H3.0083V6.67578H9.11367V7.98824H6.83922V14.4341H5.28799Z"
                      fill="black"
                    />
                    <path
                      d="M11.8493 14.4341V7.98824H9.5696V6.67578H15.675V7.98824H13.4005V14.4341H11.8493Z"
                      fill="black"
                    />
                  </svg>
                  <svg
                    class="shrink-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_2275_29625"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M19.6035 8.19971C19.4596 8.09787 19.2913 8.03591 19.1156 8.02011C18.94 8.0043 18.7633 8.03521 18.6035 8.10971L15.3935 9.68971L12.8735 5.48971C12.785 5.34048 12.6591 5.21687 12.5084 5.13101C12.3576 5.04515 12.187 5 12.0135 5C11.84 5 11.6695 5.04515 11.5187 5.13101C11.3679 5.21687 11.2421 5.34048 11.1535 5.48971L8.63353 9.68971L5.46353 8.10971C5.29873 8.0235 5.11317 7.98496 4.92768 7.99841C4.74219 8.01186 4.56412 8.07677 4.41349 8.18585C4.26286 8.29492 4.14563 8.44385 4.07498 8.61588C4.00432 8.78791 3.98304 8.97624 4.01353 9.15971L5.01353 15.0797V18.9997C5.01353 19.2649 5.11888 19.5193 5.30642 19.7068C5.49396 19.8944 5.74831 19.9997 6.01353 19.9997H18.0135C18.2787 19.9997 18.5331 19.8944 18.7206 19.7068C18.9082 19.5193 19.0135 19.2649 19.0135 18.9997V15.0797L20.0135 9.15971C20.0402 8.97745 20.0161 8.79136 19.9437 8.62196C19.8714 8.45256 19.7537 8.30644 19.6035 8.19971ZM8.60353 11.8897C8.82943 12.0039 9.09025 12.0282 9.33337 11.9577C9.57649 11.8872 9.78382 11.7271 9.91353 11.5097L12.0135 7.93971L14.1535 11.5097C14.2832 11.7271 14.4906 11.8872 14.7337 11.9577C14.9768 12.0282 15.2376 12.0039 15.4635 11.8897L17.7035 10.7697L17.1635 13.9997H6.86353L6.32353 10.7697L8.60353 11.8897ZM17.0135 17.9997H7.01353V15.9997H17.0135V17.9997Z"
                        fill="black"
                      />
                    </mask>
                    <g mask="url(#mask0_2275_29625)">
                      <rect width="24" height="24" fill="#E91212" />
                    </g>
                  </svg>
                  <div class="flex-column">
                    <div class="field-type">
                      CryptoDemo
                    </div>
                    <div class="field-accId">
                      <span class="field-accId-mainText">2487996547</span>
                      <span class="field-accId-note">- Торговый</span>
                    </div>
                  </div>
                </div>
              </template>        
            </LabelWrappedTemplate>
            <LabelWrappedRaw :label="'Баланс/Средства'" :content="'$1 542 658.21 / $54 658.21'" :contentClass="'moneystat'" :wrapperClass="'no-shrink'" :width="'fit-content'"/>
            <LabelWrappedRaw :label="'На проекте'" :content="'2 547 д.'" width="40%"/>
          </div>
          <div class="flex-row">
            <LabelWrappedRaw :label="'Страна'" :content="'Россия'" width="60%"/>
            <LabelWrappedRaw :label="'Город'" :content="'Тверь'" width="30%"/>
            <LabelWrappedRaw :label="'Телефон'" :content="'+7 (910) 9379667'" width="60%"/>
          </div>
          <div class="flex-row">
            <LabelWrappedRaw :label="'Сайт'" :content="'нет'" width="60%"/>
            <LabelWrappedRaw :label="'E-mail'" :content="'ivanov@mail.ru'" width="30%"/>
            <LabelWrappedRaw :label="'О пользователе'" :content="'нет'" width="60%"/>
          </div>
          <div class="flex-row">
            <LabelWrappedRaw :label="'Комиссия с оборота'" :content="'20%'" width="30%"/>
            <LabelWrappedRaw :label="'Подписан на ТТ'" :content="'до 21.12.2023'" :contentClass="'subscription'" :before="''" width="60%">
              <template v-slot:beforeContent>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_2340_36936" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.667 17L6.39443 12.8918C5.99738 12.51 5.99738 11.8746 6.39443 11.4928C6.77007 11.1317 7.36392 11.1317 7.73955 11.4928L10.667 14.3077L17.5944 7.64669C17.9701 7.2855 18.5639 7.2855 18.9396 7.64669C19.3366 8.02848 19.3366 8.66383 18.9396 9.04562L10.667 17Z" fill="black"/>
                  </mask>
                  <g mask="url(#mask0_2340_36936)">
                  <rect x="0.666992" width="24" height="24" fill="#FA860A"/>
                  </g>
                </svg>
              </template>  
            </LabelWrappedRaw>
          </div>
        </div>
        <div class="main__info">
          <LabelWrappedAbsolute :label="'Дней на платформе'" :content="'7 548'"/>
          <LabelWrappedAbsolute :label="'Копирует'" :content="'2'"/>
          <LabelWrappedAbsolute :label="'Комиссия ТТ'" :content="'$1547.25'"/>
        </div>
      </div>
    </template>
  </Main>
</template>


<style lang="scss" scoped>
.main {
  &-wrapper {
    height: 100%;
    background-color: #fff;
    border-radius: 6px;
  }
  &-users {
    display: flex;
    flex-flow: column nowrap;
  }
  &__tabs {
    display: flex;
    box-shadow: 0px -1px 0px 0px #0000000d inset;
    background-color: #fafafa;
    border-radius: 6px 6px 0px 0px;
  }
  &__visibleArea {
    height: calc(100% - 40px - 55px - 12px);
    padding: 4px;
    display: flex;
    flex-flow: column nowrap;
    gap: 4px;
    .field-type {
      font-size: 9px;
      font-weight: 700;
      line-height: 9px;
      text-align: left;
      color: #E91212
    }
    .field-accId {
      font-family: Arial;
        font-size: 12px;
        line-height: 12px;
        color: #333;
        &-note {
          color: #8C8C8C
        }
    }
  }
  &__search {
    &-wrapper {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      padding: 4px 0;
    }
  }
  &__info {
    display: flex;
    padding: 8px 4px;
    justify-content: space-around;
  }
}
</style>