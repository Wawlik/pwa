<script setup >
import { onMounted, ref } from "vue";
import workKeys from "@/models/workKeys.js";
import axios from "axios";

const login = ref("+79612853778");
const password = ref("gufzoy1337228TT");
let workkeys = new workKeys(window.crypto, window.btoa)

console.log({ workkeys });

const uuid = workkeys.getUUIDSession();
console.log({uuid});
let key = null
let serverEncryptKey = ''
async function getKey() {
    key = await workkeys.getOneUseKey();
    console.log({key})
} 
console.log({key});

async function sendHandshake() {
    axios.post(
        `https://api.toptrader.ru/api/Auth/HandShake`,
        JSON.stringify(
            {
                sessionId: uuid,
                publicKey: key
            }
        ),
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    .then(response => {
        console.log({response})
        // sessionId = uuid
        serverEncryptKey = response.data
        return response
    })
    .catch((error) => {
        console.error({error})
    })
}

async function preConnect() {
      // this.isLoading = true;
      // let recaptchaToken = await this.recaptcha();
      const signKey = await workkeys.getOneUseSignKey();
      const loginRaw = /^\d+$/.test(login) ? "+" + login : login;
      const payload = {
        username: loginRaw,
        password: password,
        FPData: window.navigator.userAgent,
        NewPublicUserKey: signKey.exportKeyPublic
      };
    //   const serverEncryptKey = await sendHandshake();
      console.log({serverEncryptKey});
      const decryptData = await workkeys.decryptData(serverEncryptKey);
      const encryptPayload = await workkeys.encryptMessage(
        JSON.stringify(payload),
        decryptData,
        {
          name: "RSA-OAEP",
          hash: "SHA-256"
        }
      );

       axios
        .post('https://api.toptrader.ru/api/auth/auth', JSON.stringify({
          data: encryptPayload,
          sessionId: uuid
        }),
        {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            console.log({response})
        })
        .catch((error) => {
            console.error({error})
        })

    //   await this.$store.dispatch("auth/performLogin", [
    //     {
    //       data: encryptPayload,
    //       sessionId: this.getHandshake.sessionId
    //     },
    //     {
    //       ek: decryptData,
    //       sk: signKey.exportKeyPrivate,
    //       regModal: false,
    //       login: login
    //     }
    //   ]);
    //   if (this.getSession) {
    //     this.login = "";
    //     this.pass = "";
    //   } //else this.$recaptchaInstance.showBadge();
    //   setTimeout(() => {
    //     this.isLoading = false;
    //   }, 300);
}
onMounted(() => {
    getKey()
})


// this.$store.commit("auth/setHandshake", {
//   sessionId: uuid,
//   publicKey: key,
// });

</script>
<template>
  <div class="">
    <form action="">
      <h2>Авторизация</h2>
      <div class="form-wrapper">
        <button @click.prevent="sendHandshake()">sendHandshake</button>
        <button @click.prevent="preConnect()">preConnect</button>
        <div>
          <label for="login">Логин</label>
          <input v-model="login" name="login" type="text" />
        </div>
        <div>
          <label for="password">Пароль</label>
          <input v-model="password" name="password" type="password" />
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.form-wrapper {
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  width: 200px;
  margin: auto;
}
</style>