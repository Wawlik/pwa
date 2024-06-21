<script setup>
// import Button from "../parts/Button.vue";
// import Section from "../parts/Section.vue";
// import Logo from "../parts/Logo.vue";

// import previewGraphics from "@/assets/img/preview-graphics.png";
import AuthForm from '../Auth/Form.vue';
function goToTT() {
  window.open("https://toptrader.org", "_blank");
}
</script>

<template>
  <AuthForm></AuthForm>
  <!-- <Section class="section">
    <template v-slot:content>
      <div class="article__wrapper">
        <article>
          <Logo class="logo"></Logo>
          <p>
            {{ t("AFASMW[0]") }}
            <em>
              {{ t("AFASMW[1]") }} </em
            >.
            {{ t("AFASMW[2]") }}
          </p>
          <br />
          <p>
            {{ t("UCPWUO") }}
          </p>
          <Button
            @click="goToTT()"
            class="section__button"
            :btnClass="'blue uppercase'"
            :label="t('GoToPlatform')"
          />
        </article>
      </div>
    </template>
  </Section> -->
</template>

<style scoped lang="scss">
.section {
  padding: 68px 0;
  box-shadow: 0px 1px 0px 0px #23313fb2 inset;
  background: linear-gradient(270deg, #23313f 48.62%, #203141 88.88%);
  &__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 25px;
    .logo {
      margin-bottom: 48px;
    }
    .article__wrapper {
      display: flex;
      gap: 25px;
    }
    article {
      display: flex;
      flex-flow: column nowrap;
      color: #bbcee0;
      font-size: 22px;
      line-height: 26.4px;
      align-items: flex-start;
      p {
        text-align: left;
      }
      em {
        font-weight: 800;
        font-style: normal;
      }
    }
    @media (max-width: 1280px) {
      img {
        width: 70%;
        align-self: center;
      }
    }
    @media (max-width: 1280px) {
      img {
        width: 55%;
      }
    }
    @media (max-width: 950px) {
      img {
        width: 50%;
      }
      .article__wrapper {
        p {
          font-size: 2vw;
        }
      }
    }
    @media (max-width: 768px) {
      img {
        display: none;
      }
      article {
        font-size: 16px;
        line-height: 19.2px;
      }
      .article__wrapper {
        p {
          font-size: 16px;
          line-height: 19.2px;
        }
      }
    }
  }
  &__button {
    margin-top: 48px;
    @media (max-width: 768px) {
      align-self: center;
    }
  }
}
</style>
