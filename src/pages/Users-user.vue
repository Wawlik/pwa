<script setup>
import BodyTab from "@/components/parts/BodyTab.vue";
import Main from "../components/parts/Main.vue";
import Search from "../components/parts/Search/Search.vue";
const bodyTabs = [
  {
    label: "Статистика",
    link: "/users/statistics",
  },
  {
    label: "Пользователи ТТ",
    link: "/users/usersTT",
  },
  {
    label: "История",
    link: "/users/history",
  },
];
const users = [
  {
    date: "21.12.2022",
    time: "16:54",
    name: "Tomas",
    accId: "2487996547",
    isDemo: true,
    type: "CryptoDemo",
    accType: "Торговый",
    balance: "$1 547 852.54",
    funds: "$25 478.54",
    capital: "$5 478.54",
  },
  {
    date: "21.12.2022",
    time: "16:54",
    name: "Tomas",
    accId: "2487996547",
    isDemo: true,
    type: "CryptoDemo",
    accType: "Торговый",
    balance: "$1 547 852.54",
    funds: "$25 478.54",
    capital: "$5 478.54",
  },
  {
    date: "21.12.2022",
    time: "16:54",
    name: "Tomas",
    accId: "2487996547",
    isDemo: true,
    type: "CryptoDemo",
    accType: "Торговый",
    balance: "$1 547 852.54",
    funds: "$25 478.54",
    capital: "$5 478.54",
  },
  {
    date: "21.12.2022",
    time: "16:54",
    name: "Tomas",
    accId: "2487996547",
    isDemo: true,
    type: "CryptoDemo",
    accType: "Торговый",
    balance: "$1 547 852.54",
    funds: "$25 478.54",
    capital: "$5 478.54",
  },
  {
    date: "21.12.2022",
    time: "16:54",
    name: "Tomas",
    accId: "2487996547",
    isDemo: true,
    type: "CryptoDemo",
    accType: "Торговый",
    balance: "$1 547 852.54",
    funds: "$25 478.54",
    capital: "$5 478.54",
  },
  {
    date: "21.12.2022",
    time: "16:54",
    name: "Tomas",
    accId: "2487996547",
    isDemo: true,
    type: "CryptoDemo",
    accType: "Торговый",
    balance: "$1 547 852.54",
    funds: "$25 478.54",
    capital: "$5 478.54",
  },
  {
    date: "21.12.2022",
    time: "16:54",
    name: "Tomas",
    accId: "2487996547",
    isDemo: true,
    type: "CryptoDemo",
    accType: "Торговый",
    balance: "$1 547 852.54",
    funds: "$25 478.54",
    capital: "$5 478.54",
  },
  {
    date: "21.12.2022",
    time: "16:54",
    name: "Tomas",
    accId: "2487996547",
    isDemo: true,
    type: "CryptoDemo",
    accType: "Торговый",
    balance: "$1 547 852.54",
    funds: "$25 478.54",
    capital: "$5 478.54",
  },
  {
    date: "21.12.2022",
    time: "16:54",
    name: "Tomas",
    accId: "2487996547",
    isDemo: true,
    type: "CryptoDemo",
    accType: "Торговый",
    balance: "$1 547 852.54",
    funds: "$25 478.54",
    capital: "$5 478.54",
  },
  {
    date: "21.12.2022",
    time: "16:54",
    name: "Tomas",
    accId: "2487996547",
    isDemo: true,
    type: "CryptoDemo",
    accType: "Торговый",
    balance: "$1 547 852.54",
    funds: "$25 478.54",
    capital: "$5 478.54",
  },
  {
    date: "21.12.2022",
    time: "16:54",
    name: "Tomas",
    accId: "2487996547",
    isDemo: true,
    type: "CryptoDemo",
    accType: "Торговый",
    balance: "$1 547 852.54",
    funds: "$25 478.54",
    capital: "$5 478.54",
  },
  {
    date: "21.12.2022",
    time: "16:54",
    name: "Tomas",
    accId: "2487996547",
    isDemo: true,
    type: "CryptoDemo",
    accType: "Торговый",
    balance: "$1 547 852.54",
    funds: "$25 478.54",
    capital: "$5 478.54",
  },
  {
    date: "21.12.2022",
    time: "16:54",
    name: "Tomas",
    accId: "2487996547",
    isDemo: true,
    type: "CryptoDemo",
    accType: "Торговый",
    balance: "$1 547 852.54",
    funds: "$25 478.54",
    capital: "$5 478.54",
  },
  {
    date: "21.12.2022",
    time: "16:54",
    name: "Tomas",
    accId: "2487996547",
    isDemo: true,
    type: "CryptoDemo",
    accType: "Торговый",
    balance: "$1 547 852.54",
    funds: "$25 478.54",
    capital: "$5 478.54",
  },
  {
    date: "21.12.2022",
    time: "16:54",
    name: "Tomas",
    accId: "2487996547",
    isDemo: true,
    type: "CryptoDemo",
    accType: "Торговый",
    balance: "$1 547 852.54",
    funds: "$25 478.54",
    capital: "$5 478.54",
  },
  {
    date: "21.12.2022",
    time: "16:54",
    name: "Tomas",
    accId: "2487996547",
    isDemo: true,
    type: "CryptoDemo",
    accType: "Торговый",
    balance: "$1 547 852.54",
    funds: "$25 478.54",
    capital: "$5 478.54",
  },
  {
    date: "21.12.2022",
    time: "16:54",
    name: "Tomas",
    accId: "2487996547",
    isDemo: true,
    type: "CryptoDemo",
    accType: "Торговый",
    balance: "$1 547 852.54",
    funds: "$25 478.54",
    capital: "$5 478.54",
  },
  {
    date: "21.12.2022",
    time: "16:54",
    name: "Tomas",
    accId: "2487996547",
    isDemo: true,
    type: "CryptoDemo",
    accType: "Торговый",
    balance: "$1 547 852.54",
    funds: "$25 478.54",
    capital: "$5 478.54",
  },
  {
    date: "21.12.2022",
    time: "16:54",
    name: "Tomas",
    accId: "2487996547",
    isDemo: true,
    type: "CryptoDemo",
    accType: "Торговый",
    balance: "$1 547 852.54",
    funds: "$25 478.54",
    capital: "$5 478.54",
  },
  {
    date: "21.12.2022",
    time: "16:54",
    name: "Tomas",
    accId: "2487996547",
    isDemo: true,
    type: "CryptoDemo",
    accType: "Торговый",
    balance: "$1 547 852.54",
    funds: "$25 478.54",
    capital: "$5 478.54",
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
        <div class="main__search-wrapper">
          <Search></Search>
        </div>
        <div class="main__table-wrapper">
          <div class="main__table_head">
            <span class="head"> Регистрация </span>
            <span class="head"> Пользователь </span>
            <span class="head"> Счет </span>
            <span class="head"> Тип счета </span>
            <span class="head"> Баланс/Средства </span>
            <span class="head head-row">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_2275_29609"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="17"
                  height="16"
                >
                  <path
                    d="M8.30177 10.7543L5.82234 6.76683C5.77545 6.68954 5.7505 6.60168 5.75001 6.51211C5.74951 6.42254 5.77349 6.33443 5.81952 6.25666C5.86556 6.17889 5.93202 6.11422 6.0122 6.06916C6.09239 6.02409 6.18346 6.00024 6.27624 6H11.2238C11.3165 6.00024 11.4076 6.02409 11.4878 6.06916C11.568 6.11422 11.6344 6.17889 11.6805 6.25666C11.7265 6.33443 11.7505 6.42254 11.75 6.51211C11.7495 6.60168 11.7245 6.68954 11.6777 6.76683L9.19823 10.7543C9.15193 10.8292 9.08628 10.8912 9.00771 10.9343C8.92915 10.9774 8.84035 11 8.75 11C8.65965 11 8.57085 10.9774 8.49229 10.9343C8.41372 10.8912 8.34807 10.8292 8.30177 10.7543Z"
                    fill="black"
                  />
                </mask>
                <g mask="url(#mask0_2275_29609)">
                  <rect x="0.75" width="16" height="16" fill="#8C8C8C" />
                </g>
              </svg>
              Оборот капитала
            </span>
          </div>
          <div class="main__table_body">
            <div
              class="main__table_body-row"
              v-for="user in users"
              :key="'user-' + user.name"
            >
              <div class="field field-row">
                <span class="time">
                  {{ user.date }}
                </span>
                <span class="time">
                  {{ user.time }}
                </span>
              </div>
              <div class="field">
                <span class="name">
                  {{ user.name }}
                </span>
              </div>
              <div class="field field-row">
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
                <div class="field field-column">
                  <span class="type">
                    {{ user.type }}
                  </span>
                  <span class="accId">
                    {{ user.accId }}
                  </span>
                </div>
              </div>

              <div class="field">
                <span class="accType">
                  {{ user.accType }}
                </span>
              </div>

              <div class="field field-row field-balance">
                <span class="balance">
                  {{ user.balance }}
                </span>
                /
                <span class="funds">
                  {{ user.funds }}
                </span>
              </div>
              <div class="field field-balance">
                <span class="balance">
                  {{ user.balance }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Main>
  <!-- <Footer /> -->
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
    justify-content: space-between;
  }
  &__search {
    &-wrapper {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      padding: 4px 0;
    }
  }
  &__table {
    &-wrapper {
      height: calc(100% - 44px - 40px);
      overflow: hidden;
    }
    &_body {
      overflow-y: auto;
      overflow-x: hidden;
      height: calc(100% - 34px);
      &-row {
        display: grid;
        grid-template-columns: 125px 130px 185px 165px 245px 185px;
        padding: 8px 11px;
        box-shadow: 0px -1px 0px 0px #0000000d inset;

        .field {
          display: flex;
          align-items: center;
          // justify-content: center;
          white-space: nowrap;
          span {
            text-align: left;
          }
          &-row {
            flex-flow: row nowrap;
            gap: 8px;
          }
          &-column {
            flex-flow: column nowrap;
            align-items: flex-start;
          }
          &-balance {
            span {
              color: #008e72;
              background-color: #f0f0f0;
              border-radius: 4px;
              padding: 4px;
            }
            color: #008e72;
          }
          .time,
          .date,
          .accType {
            color: #8c8c8c;
            font-size: 12px;
          }
          .shrink-0 {
            flex-shrink: 0;
          }
          .type {
            font-family: Arial;
            font-size: 9px;
            font-weight: 700;
            color: #e91212;
            line-height: 9px;
          }
          .accId {
            font-size: 12px;
            line-height: 12px;
          }
        }
      }
    }
    &_head {
      display: grid;
      background: #fafafa;
      grid-template-columns: 125px 130px 185px 165px 245px 185px;
      padding: 8px;
      align-items: center;
      span {
        font-size: 10px;
        line-height: 10px;
        text-align: left;
      }
      .head-row {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>