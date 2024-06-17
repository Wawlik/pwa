<script setup>
</script>

<template>

<footer class="footer">
    <div class="wrapper footer__wrapper">
      <div class="info-wrapper">
        <div class="name">QQuantum s.r.o.</div>
        <address>
          Praha 6, Makovskeho 1177/1 Repy, Czech republic, postcode 163 00
          company@toptrader.org
        </address>
        <div class="license cursor-pointer" @click="goToDoc()">
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.4953 9.06721L25.9328 2.50471C25.8306 2.40334 25.7094 2.32314 25.5761 2.26871C25.4429 2.21428 25.3002 2.18669 25.1562 2.18752H12.0312C11.161 2.18752 10.3264 2.53322 9.71106 3.14857C9.0957 3.76393 8.75 4.59853 8.75 5.46877V7.65627C8.75 7.94635 8.86523 8.22455 9.07035 8.42967C9.27547 8.63478 9.55367 8.75002 9.84375 8.75002C10.1338 8.75002 10.412 8.63478 10.6171 8.42967C10.8223 8.22455 10.9375 7.94635 10.9375 7.65627V5.46877C10.9375 5.17869 11.0527 4.90049 11.2579 4.69537C11.463 4.49025 11.7412 4.37502 12.0312 4.37502H24.0625V7.65627C24.0625 8.52651 24.4082 9.36111 25.0236 9.97646C25.6389 10.5918 26.4735 10.9375 27.3438 10.9375H30.625V29.5313C30.625 29.8214 30.5098 30.0996 30.3046 30.3047C30.0995 30.5098 29.8213 30.625 29.5312 30.625H16.4062C16.1162 30.625 15.838 30.7403 15.6329 30.9454C15.4277 31.1505 15.3125 31.4287 15.3125 31.7188C15.3125 32.0089 15.4277 32.2871 15.6329 32.4922C15.838 32.6973 16.1162 32.8125 16.4062 32.8125H29.5312C30.4015 32.8125 31.2361 32.4668 31.8514 31.8515C32.4668 31.2361 32.8125 30.4015 32.8125 29.5313V9.84377C32.8133 9.69982 32.7857 9.55713 32.7313 9.42387C32.6769 9.29061 32.5967 9.16941 32.4953 9.06721ZM26.25 7.65627V5.91721L29.0828 8.75002H27.3438C27.0537 8.75002 26.7755 8.63478 26.5704 8.42967C26.3652 8.22455 26.25 7.94635 26.25 7.65627Z"
              fill="#00FFAC"
            />
            <path
              d="M15.3125 17.5001C15.3147 16.4049 15.0428 15.3265 14.5215 14.3633C14.0002 13.4001 13.2461 12.5826 12.328 11.9855C11.4099 11.3884 10.3569 11.0305 9.26504 10.9446C8.17319 10.8586 7.07719 11.0473 6.07693 11.4934C5.07668 11.9395 4.20399 12.6289 3.53839 13.4986C2.8728 14.3684 2.43547 15.3909 2.26628 16.473C2.09709 17.5551 2.2014 18.6623 2.56973 19.6938C2.93805 20.7252 3.55866 21.648 4.37499 22.3782V31.7188C4.37607 31.9348 4.44104 32.1455 4.56171 32.3246C4.68239 32.5037 4.85337 32.643 5.05311 32.7251C5.2523 32.8088 5.47183 32.8317 5.684 32.7908C5.89618 32.75 6.09149 32.6472 6.2453 32.4954L8.74999 29.9798L11.2547 32.4954C11.3569 32.5968 11.4781 32.677 11.6113 32.7314C11.7446 32.7858 11.8873 32.8134 12.0312 32.8126C12.1747 32.8163 12.3171 32.7863 12.4469 32.7251C12.6466 32.643 12.8176 32.5037 12.9383 32.3246C13.0589 32.1455 13.1239 31.9348 13.125 31.7188V22.3782C13.8115 21.7641 14.3611 21.0124 14.738 20.172C15.1149 19.3315 15.3106 18.4212 15.3125 17.5001ZM10.9375 29.0829L9.52655 27.661C9.42487 27.5585 9.3039 27.4771 9.17062 27.4216C9.03734 27.3661 8.89438 27.3375 8.74999 27.3375C8.6056 27.3375 8.46264 27.3661 8.32936 27.4216C8.19607 27.4771 8.0751 27.5585 7.97343 27.661L6.56249 29.0829V23.6798C7.97617 24.1901 9.5238 24.1901 10.9375 23.6798V29.0829ZM8.74999 21.8751C7.88469 21.8751 7.03883 21.6185 6.31937 21.1378C5.5999 20.657 5.03915 19.9737 4.70801 19.1743C4.37688 18.3749 4.29024 17.4952 4.45905 16.6466C4.62786 15.7979 5.04454 15.0183 5.6564 14.4065C6.26825 13.7946 7.0478 13.378 7.89647 13.2091C8.74513 13.0403 9.6248 13.127 10.4242 13.4581C11.2237 13.7892 11.9069 14.35 12.3877 15.0695C12.8684 15.7889 13.125 16.6348 13.125 17.5001C13.125 18.6604 12.6641 19.7732 11.8436 20.5937C11.0231 21.4141 9.91031 21.8751 8.74999 21.8751Z"
              fill="#00FFAC"
            />
            <path
              d="M20.7812 8.75H15.3125C15.0224 8.75 14.7442 8.86523 14.5391 9.07035C14.334 9.27547 14.2188 9.55367 14.2188 9.84375C14.2188 10.1338 14.334 10.412 14.5391 10.6171C14.7442 10.8223 15.0224 10.9375 15.3125 10.9375H20.7812C21.0713 10.9375 21.3495 10.8223 21.5546 10.6171C21.7598 10.412 21.875 10.1338 21.875 9.84375C21.875 9.55367 21.7598 9.27547 21.5546 9.07035C21.3495 8.86523 21.0713 8.75 20.7812 8.75Z"
              fill="#00FFAC"
            />
            <path
              d="M27.3438 14.2188H18.5938C18.3037 14.2188 18.0255 14.334 17.8204 14.5391C17.6152 14.7442 17.5 15.0224 17.5 15.3125C17.5 15.6026 17.6152 15.8808 17.8204 16.0859C18.0255 16.291 18.3037 16.4062 18.5938 16.4062H27.3438C27.6338 16.4062 27.912 16.291 28.1171 16.0859C28.3223 15.8808 28.4375 15.6026 28.4375 15.3125C28.4375 15.0224 28.3223 14.7442 28.1171 14.5391C27.912 14.334 27.6338 14.2188 27.3438 14.2188Z"
              fill="#00FFAC"
            />
            <path
              d="M27.3438 19.6875H18.5938C18.3037 19.6875 18.0255 19.8027 17.8204 20.0079C17.6152 20.213 17.5 20.4912 17.5 20.7812C17.5 21.0713 17.6152 21.3495 17.8204 21.5546C18.0255 21.7598 18.3037 21.875 18.5938 21.875H27.3438C27.6338 21.875 27.912 21.7598 28.1171 21.5546C28.3223 21.3495 28.4375 21.0713 28.4375 20.7812C28.4375 20.4912 28.3223 20.213 28.1171 20.0079C27.912 19.8027 27.6338 19.6875 27.3438 19.6875Z"
              fill="#00FFAC"
            />
            <path
              d="M27.3438 25.1562H16.4062C16.1162 25.1562 15.838 25.2715 15.6329 25.4766C15.4277 25.6817 15.3125 25.9599 15.3125 26.25C15.3125 26.5401 15.4277 26.8183 15.6329 27.0234C15.838 27.2285 16.1162 27.3438 16.4062 27.3438H27.3438C27.6338 27.3438 27.912 27.2285 28.1171 27.0234C28.3223 26.8183 28.4375 26.5401 28.4375 26.25C28.4375 25.9599 28.3223 25.6817 28.1171 25.4766C27.912 25.2715 27.6338 25.1562 27.3438 25.1562Z"
              fill="#00FFAC"
            />
          </svg>
          <span>
            <!-- {{ $t("ActivityPermit") }} -->
          </span>
        </div>
      </div>
      <div class="links-wrapper">
        <div class="heading">
          <!-- {{ $t("AboutUs") }} -->
        </div>
        <ul>
          <li>
            <a href="/about" class="footer-link">
              <!-- {{ $t("AboutCompany") }} -->
            </a>
          </li>
          <li>
            <a href="/partner" class="footer-link">
              <!-- {{ $t("BecomePartner") }} -->
            </a>
            <!-- <span @click="/partner" class="footer-link">Стать партнером</span> -->
          </li>
          <li>
            <a href="/documents" class="footer-link">
              <!-- {{ $t("Documents") }} -->
            </a>
          </li>
          <li>
            <span @click="goToTT()" class="footer-link">
              <!-- {{ $t("GoToPlatform") }} -->
            </span>
          </li>
        </ul>
      </div>
      <div class="links-wrapper">
        <div class="heading">
          <!-- {{ $t("Support") }} -->
        </div>
        <ul>
          <li @click="handleInProgressClick">
            <span class="footer-link tooltip">
              <!-- {{ $t("HowDoesThisWork") }} -->
              <span class="tooltiptext"> 
                <!-- {{ $t("InProgress") }} -->
              </span>
            </span>
          </li>
          <li @click="openModalFeedback()">
            <span class="footer-link">
              <!-- {{ $t("Feedback") }} -->
            </span>
          </li>
          <li @click="handleInProgressClick">
            <span class="footer-link tooltip">
              <!-- {{ $t("Instruction") }} -->
              <span class="tooltiptext">
                <!-- {{ $t("InProgress") }} -->
              </span>
            </span>
          </li>
        </ul>
      </div>
      <dialogFeedback @closeDialog="closeModalFeedback()" :isOpen="isOpenModalFeedback"></dialogFeedback>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: linear-gradient(270deg, #23313f 4.73%, #172028 91.87%);
  padding: 50px 0;
  &__wrapper {
    display: flex;
    gap: 32px;
    justify-content: space-between;
    flex-flow: row wrap;
    .info-wrapper {
      display: flex;
      flex-flow: column nowrap;
    }
    ul {
      padding-left: 17px;
    }
  }
  .name {
    text-align: left;
    font-size: 18px;
    font-weight: 700;
    line-height: 21.6px;
    color: #fff;
  }
  address {
    max-width: 350px;
    text-align: left;
    font-size: 18px;
    line-height: 21.6px;
    color: #bbcee0;
    margin-bottom: 16px;
  }
  .license {
    display: flex;
    gap: 4px;
    align-items: center;
    color: #fff;
  }
  .links-wrapper {
    display: flex;
    flex-flow: column nowrap;
    text-align: left;
    .heading {
      font-family: Montserrat;
      font-size: 22px;
      font-weight: 700;
      line-height: 26.4px;
      text-align: left;
      color: #fff;
    }
    li {
      font-family: Montserrat;
      font-size: 18px;
      font-weight: 500;
      line-height: 21.6px;
      text-align: left;
      color: #00b9fc;
      a,
      span {
        color: #00b9fc;
        cursor: pointer;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        &.tooltip {
          text-decoration: none;
        }
        }
      }
    }
  }
  .cursor-pointer {
    cursor: pointer;
  }

  .tooltip {
    position: relative;
    display: inline-block;
    transition: all 0.25s;
  }

  .tooltip .tooltiptext {
    opacity: 0;
    width: 130px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    right: -80%;
    top: 20px;
  }

  .tooltip:hover .tooltiptext, .tooltip.active .tooltiptext {
    transition: all 0.25s;
    opacity: 0.7;
  }
}
</style>
