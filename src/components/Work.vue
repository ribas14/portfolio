<template>
  <div class="hello" ref="main">
    <div class="container">
      <!-- -------------------------------------------------------------------------------------------------- -->
      <h3 class="title">Clube O Popular</h3>
      <h3 v-if="lang == 'eng'">The coupon hub for O Popular Newspaper subscribers</h3>
      <h3 v-if="lang == 'pt'">O canal de benefícios exclusivos para Assinantes do Jornal O Popular</h3>
      <h3
        v-if="lang == 'eng'"
      >React Native app using MobX for state management, geolocation to show places near you and Expo as a deploy tool and for OTA updates</h3>
      <h3
        v-if="lang == 'eng'"
      >A React Js website using redux for state management, both the app and the website are using CI/CD to fast deployment, the app is being deployed to the stores using fastlane both for iOS and android</h3>
      <h3
        v-if="lang == 'pt'"
      >React Native app usando MobX para state management, geolocalização para mostrar lugares com promoções perto de você e Expo para updates OTA</h3>
      <h3
        v-if="lang == 'pt'"
      >Site em React Js usando redux para state management, ambos usando CI/CD para um deploy veloz e seguro, o app está sendo enviado para as stores usando fastlane</h3>
      <div class="row">
        <div class="column">
          <a
            href="https://itunes.apple.com/br/app/clube-o-popular/id1458012278?mt=8"
            target="blank"
          >
            <img src="@/assets/app_store.png" alt="Snow" style="width:50px; float: right">
          </a>
        </div>
        <div class="column">
          <a
            href="https://play.google.com/store/apps/details?id=com.ojc.clubeopopular"
            target="blank"
          >
            <img src="@/assets/google_play.png" alt="Snow" style="width:50px">
          </a>
        </div>
        <div class="column">
          <a href="https://clube.opopular.com.br" target="blank">
            <img src="@/assets/clube_opopular.png" alt="Snow" style="width:50px; float: left">
          </a>
        </div>
      </div>
      <div class="video">
        <div style="width:100%;height:0px;position:relative;padding-bottom:200.000%;">
          <iframe
            src="https://streamable.com/s/c2615/boljed"
            frameborder="0"
            width="100%"
            height="100%"
            allowfullscreen
            style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"
          ></iframe>
        </div>
      </div>
      <!-- -------------------------------------------------------------------------------------------------- -->

      <!-- -------------------------------------------------------------------------------------------------- -->
      <h3 class="title">Phone to Chrome</h3>
      <h3 v-if="lang == 'eng'">Share texts and links between your phone and your pc</h3>
      <h3 v-if="lang == 'pt'">Compartilhe texto e links entre seu celular e seu pc</h3>
      <h3 v-if="lang == 'eng'">
        React Native app reads a QR code on
        <a class="link" href="https://ctop.site/">ctop.site</a> or the
        <a
          href="https://chrome.google.com/webstore/detail/chrome-to-phone/hobhnejpjknnhojomhmppgdalddofend"
          class="link"
        >extension</a> and a chat is created
      </h3>
      <h3 v-if="lang == 'pt'">
        React Native app lê código QR em
        <a class="link" href="https://ctop.site/">ctop.site</a> ou na
        <a
          href="https://chrome.google.com/webstore/detail/chrome-to-phone/hobhnejpjknnhojomhmppgdalddofend"
          class="link"
        >extensão</a> e um chat é criado
      </h3>
      <div class="row">
        <div class="column">
          <a href="https://github.com/ribas14/phone-to-chrome" target="blank">
            <img src="@/assets/github.png" alt="Snow" style="width:50px; float: right">
          </a>
        </div>
        <div class="column">
          <a
            href="https://play.google.com/store/apps/details?id=com.felri.phonetochrome"
            target="blank"
          >
            <img src="@/assets/google_play.png" alt="Snow" style="width:50px">
          </a>
        </div>
        <div class="column">
          <a href="https://ctop.site/" target="blank">
            <img src="@/assets/site.webp" alt="Snow" style="width:50px; float: left">
          </a>
        </div>
      </div>
      <div class="video">
        <div style="width:100%;height:0px;position:relative;padding-bottom:200.000%;">
          <iframe
            src="https://streamable.com/s/dsr8r/hqekjx"
            frameborder="0"
            width="100%"
            height="100%"
            allowfullscreen
            style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"
          ></iframe>
        </div>
      </div>
      <!-- -------------------------------------------------------------------------------------------------- -->

      <!-- -------------------------------------------------------------------------------------------------- -->
      <h3 class="title">Santri Sistemas</h3>
      <h3 v-if="lang == 'eng'">Dashboard for a legacy system using Vuejs</h3>
      <h3 v-if="lang == 'pt'">Dashboard para um sistema legacy usando o framework Vuejs</h3>
      <div class="video">
        <div style="width:100%;height:0px;position:relative;padding-bottom:51.095%;">
          <iframe
            src="https://streamable.com/s/gkre8/lwekca"
            frameborder="0"
            width="100%"
            height="100%"
            allowfullscreen
            style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"
          ></iframe>
        </div>
      </div>
      <br>
      <h3 v-if="lang == 'eng'">
        Let's
        <a @click.stop="goTo('talk')" class="link">talk</a>
      </h3>
      <h3 v-if="lang == 'pt'">
        Vamos
        <a @click.stop="goTo('talk')" class="link">conversar</a>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",
  data() {
    return {
      heigth: 480
    };
  },
  mounted() {
    this.heigth = window.innerHeight;
  },
  props: {
    lang: String
  },
  methods: {
    goTo(r) {
      this.$router.push(r);
    }
  }
};
</script>

<style scoped>
iframe {
  max-height: 700px !important;
}
.row {
  display: flex;
}

.column {
  flex: 50%;
  padding: 5px;
}
.video {
  padding: 20px;
  max-height: 700px !important;
  overflow: hidden;
}
.container {
  margin-top: 100px;
}
.name {
  color: white;
  font-size: 1.4em;
  float: left;
}
.title {
  text-decoration: none;
  color: #04ca83;
  font-weight: 800;
}
.hello {
  text-align: left;
  padding: 20px;
  text-align: center !important;
}
h3 {
  margin: 30px 100px;
  color: white;
  font-size: 2rem;
  font-weight: 200;
}
ul {
  text-align: right;
  list-style-type: none;
  padding: 0;
}
li > a {
  color: white;
  text-decoration: none;
  font-size: 1.4em;
  font-weight: 600;
}
li {
  display: inline-block;
  margin: 0 10px;
}
@media only screen and (max-width: 768px) {
  h3 {
    font-size: 2rem !important;
    margin: 30px 0;
  }
}
.link {
  text-decoration: none;
  color: #04ca83;
  font-weight: 800;
  transition: 0.2s;
}
.link:hover {
  color: white;
  cursor: pointer;
}
</style>
